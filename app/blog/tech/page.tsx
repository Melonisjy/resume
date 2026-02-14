import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostList from "@/components/PostList";

export const metadata: Metadata = {
  title: "Tech — Blog — Jooyeol Lee",
  description: "기술적 실험, 문제 해결, 구현 과정에 대한 글",
  openGraph: {
    title: "Tech — Blog — Jooyeol Lee",
    description: "기술적 실험, 문제 해결, 구현 과정에 대한 글",
  },
};

export default function TechPage() {
  const posts = getPostsByCategory("tech");

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-[#222] dark:text-[#f5f5f0] mb-2 transition-colors duration-300">
        Tech
      </h1>
      <p className="text-sm text-[#999] dark:text-[#666] mb-8 transition-colors duration-300">
        기술적 실험, 문제 해결, 구현 과정
      </p>
      <PostList posts={posts} />
    </div>
  );
}
