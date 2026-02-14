import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Category = "tech" | "thoughts";

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  category: Category;
  slug: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function getPostsFromDirectory(category: Category): PostMeta[] {
  const dir = path.join(CONTENT_DIR, category);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      description: data.description,
      category,
      slug: filename.replace(/\.mdx$/, ""),
    };
  });
}

export function getAllPosts(): PostMeta[] {
  const techPosts = getPostsFromDirectory("tech");
  const thoughtsPosts = getPostsFromDirectory("thoughts");
  const allPosts = [...techPosts, ...thoughtsPosts];

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByCategory(category: Category): PostMeta[] {
  return getPostsFromDirectory(category).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const categories: Category[] = ["tech", "thoughts"];

  for (const category of categories) {
    const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`);

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        meta: {
          title: data.title,
          date: data.date,
          description: data.description,
          category: category as Category,
          slug,
        },
        content,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  const categories: Category[] = ["tech", "thoughts"];
  const slugs: string[] = [];

  for (const category of categories) {
    const dir = path.join(CONTENT_DIR, category);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    slugs.push(...files.map((f) => f.replace(/\.mdx$/, "")));
  }

  return slugs;
}
