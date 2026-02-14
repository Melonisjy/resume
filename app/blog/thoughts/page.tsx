import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostList from "@/components/PostList";

export const metadata: Metadata = {
  title: "Thoughts — Blog — Jooyeol Lee",
  description: "개발자로서의 생각, 원칙, 회고에 대한 글",
  openGraph: {
    title: "Thoughts — Blog — Jooyeol Lee",
    description: "개발자로서의 생각, 원칙, 회고에 대한 글",
  },
};

export default function ThoughtsPage() {
  const posts = getPostsByCategory("thoughts");

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-[#222] dark:text-[#f5f5f0] mb-2 transition-colors duration-300">
        Thoughts
      </h1>
      <p className="text-sm text-[#999] dark:text-[#666] mb-8 transition-colors duration-300">
        개발자로서의 생각, 원칙, 회고
      </p>
      <PostList posts={posts} />
    </div>
  );
}
