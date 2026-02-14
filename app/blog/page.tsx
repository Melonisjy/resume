import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/PostList";

export const metadata: Metadata = {
  title: "Blog — Jooyeol Lee",
  description: "프론트엔드 개발자 이주열의 기술 블로그",
  openGraph: {
    title: "Blog — Jooyeol Lee",
    description: "프론트엔드 개발자 이주열의 기술 블로그",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-[#222] dark:text-[#f5f5f0] mb-2 transition-colors duration-300">
        All Posts
      </h1>
      <p className="text-sm text-[#999] dark:text-[#666] mb-8 transition-colors duration-300">
        기술적 실험과 생각의 기록
      </p>
      <PostList posts={posts} showCategory />
    </div>
  );
}
