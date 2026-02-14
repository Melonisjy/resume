import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f0] dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-5 py-10 md:py-16">
        <nav className="mb-10 flex items-center justify-between border-b border-[#ddd] dark:border-[#333] pb-6 transition-colors duration-300">
          <Link
            href="/blog"
            className="font-heading text-2xl font-bold text-[#222] dark:text-[#f5f5f0] hover:opacity-70 transition-all duration-300"
          >
            Blog
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/blog/tech"
              className="text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
            >
              tech
            </Link>
            <Link
              href="/blog/thoughts"
              className="text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
            >
              thoughts
            </Link>
            <Link
              href="/"
              className="text-[#999] dark:text-[#666] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
            >
              ← Resume
            </Link>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
}
