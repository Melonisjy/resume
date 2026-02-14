import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.meta.title} — Blog — Jooyeol Lee`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto">
      {/* Post Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <Link
            href={`/blog/${post.meta.category}`}
            className="text-xs font-mono text-[#999] dark:text-[#666] hover:text-[#222] dark:hover:text-[#f5f5f0] border border-[#ddd] dark:border-[#333] rounded px-2 py-0.5 transition-colors duration-300"
          >
            {post.meta.category}
          </Link>
          <time className="text-sm text-[#999] dark:text-[#666] font-mono tabular-nums transition-colors duration-300">
            {post.meta.date}
          </time>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#222] dark:text-[#f5f5f0] leading-tight transition-colors duration-300">
          {post.meta.title}
        </h1>
      </header>

      {/* Post Content */}
      <div className="prose-custom">
        <MDXRemote source={post.content} />
      </div>

      {/* Back Link */}
      <div className="mt-16 pt-8 border-t border-[#ddd] dark:border-[#333] transition-colors duration-300">
        <Link
          href="/blog"
          className="text-sm text-[#999] dark:text-[#666] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
        >
          ← 목록으로 돌아가기
        </Link>
      </div>
    </article>
  );
}
