import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface PostListProps {
  posts: PostMeta[];
  showCategory?: boolean;
}

export default function PostList({
  posts,
  showCategory = false,
}: PostListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-[#999] dark:text-[#666] text-sm italic transition-colors duration-300">
        아직 작성된 글이 없습니다.
      </p>
    );
  }

  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
              <h3 className="text-[#222] dark:text-[#f5f5f0] group-hover:text-[#666] dark:group-hover:text-[#aaa] transition-colors duration-300 leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0">
                {showCategory && (
                  <span className="text-xs text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
                    {post.category}
                  </span>
                )}
                <time className="text-sm text-[#999] dark:text-[#666] font-mono tabular-nums transition-colors duration-300">
                  {post.date}
                </time>
              </div>
            </div>
            <p className="mt-1 text-sm text-[#888] dark:text-[#777] line-clamp-1 transition-colors duration-300">
              {post.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
