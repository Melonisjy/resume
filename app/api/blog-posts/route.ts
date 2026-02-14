import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export async function GET() {
  try {
    const allPosts = getAllPosts();
    const recentPosts = allPosts.slice(0, 3).map((post) => ({
      title: post.title,
      slug: post.slug,
      date: post.date,
      category: post.category,
    }));
    return NextResponse.json(recentPosts);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
