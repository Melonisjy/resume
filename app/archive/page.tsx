import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive — Jooyeol Lee",
  description: "과거 블로그 플랫폼에서 작성한 글 아카이브",
  openGraph: {
    title: "Archive — Jooyeol Lee",
    description: "과거 블로그 플랫폼에서 작성한 글 아카이브",
  },
};

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-5 py-10 md:py-16">
        {/* Navigation */}
        <nav className="mb-10 flex items-center justify-between border-b border-[#ddd] dark:border-[#333] pb-6 transition-colors duration-300">
          <h1 className="font-heading text-2xl font-bold text-[#222] dark:text-[#f5f5f0] transition-colors duration-300">
            Archive
          </h1>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/blog"
              className="text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
            >
              blog
            </Link>
            <Link
              href="/"
              className="text-[#999] dark:text-[#666] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
            >
              ← Resume
            </Link>
          </div>
        </nav>

        {/* Archive Content */}
        <div className="space-y-10">
          {/* Bootcamp & Early Career */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-[#222] dark:text-[#f5f5f0] mb-2 transition-colors duration-300">
              Bootcamp &amp; Early Career
            </h2>
            <p className="text-sm text-[#888] dark:text-[#777] mb-3 transition-colors duration-300">
              부트캠프와 커리어 초기에 작성한 글
            </p>
            <a
              href="https://velog.io/@meloncoder/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#222] dark:text-[#f5f5f0] hover:text-[#666] dark:hover:text-[#aaa] transition-colors duration-300"
            >
              Velog
              <span className="text-[#999] dark:text-[#666]">↗</span>
            </a>
          </section>

          {/* Undergraduate Archive */}
          <section>
            <h2 className="font-heading text-xl font-semibold text-[#222] dark:text-[#f5f5f0] mb-2 transition-colors duration-300">
              Undergraduate Archive
            </h2>
            <p className="text-sm text-[#888] dark:text-[#777] mb-3 transition-colors duration-300">
              대학 시절 작성한 글
            </p>
            <a
              href="https://tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#222] dark:text-[#f5f5f0] hover:text-[#666] dark:hover:text-[#aaa] transition-colors duration-300"
            >
              Tistory
              <span className="text-[#999] dark:text-[#666]">↗</span>
            </a>
          </section>
        </div>

        {/* Note */}
        <div className="mt-14 pt-8 border-t border-[#ddd] dark:border-[#333] transition-colors duration-300">
          <p className="text-sm text-[#999] dark:text-[#666] italic transition-colors duration-300">
            이후의 공식적인 글은{" "}
            <Link
              href="/blog"
              className="underline underline-offset-2 hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
            >
              Blog
            </Link>
            에서 이어집니다.
          </p>
        </div>
      </div>
    </div>
  );
}
