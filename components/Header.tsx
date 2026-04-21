"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { resumeTextLinkClass } from "@/lib/resumeLinkClass";

function TrophyMicro({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H5a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3h1M17 6h2a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3h-1" />
    </svg>
  );
}

const SignatureText = ({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) => {
  return (
    <motion.span
      className="inline-block relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
    >
      <motion.span
        className="inline-block text-[#222] dark:text-[#f5f5f0] transition-colors duration-300"
        initial={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        transition={{
          duration: 0.7,
          delay: delay + 0.05,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default function Header() {
  const { lang } = useLanguage();
  const t = translations.header;
  const nameChars = t.name[lang];
  const taglineLines = t.tagline[lang].split("\n");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6 pb-6 pt-4 transition-colors duration-300 print:mb-4 print:pb-3 print:pt-2 md:mb-10 md:pb-8 md:pt-6"
    >
      {/* 1. Name — 가장 크고 강한 계층 */}
      <motion.h1
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="font-heading text-4xl font-extrabold text-[#222] transition-colors duration-300 print:text-[1.6rem] dark:text-[#f5f5f0] md:text-6xl"
      >
        {nameChars.map((char, i) => (
          <SignatureText key={`${lang}-${i}`} delay={0.05 + i * 0.8}>
            {char}
          </SignatureText>
        ))}
      </motion.h1>

      <div
        className="mb-2 h-[2px] w-full bg-linear-to-r from-amber-400 via-amber-200 to-transparent opacity-70 print:hidden dark:from-amber-500 dark:via-amber-800 dark:to-transparent"
        aria-hidden
      />

      {/* 2. Role — 그라디언트 아래, 보조 계층 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
        className="mb-4 text-lg text-[#666] transition-colors duration-300 print:mb-2 print:mt-1 print:text-sm dark:text-[#aaa]"
      >
        Frontend Developer
      </motion.p>

      {/* 수상 하이라이트 → Education 앵커 */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 2.78 }}
        className="mb-3 flex flex-wrap gap-3 print:mb-2 print:gap-2"
      >
        {t.awards.map((award, i) => (
          <a
            key={`${award.year}-${i}`}
            href="#education"
            className="header-award-badge inline-flex max-w-full items-center gap-1.5 rounded-md border-2 border-amber-500 bg-amber-100 px-3 py-1 text-sm font-medium leading-tight text-amber-700 shadow-[0_1px_0_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-amber-600 hover:bg-amber-200 dark:border-amber-400 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:border-amber-300 dark:hover:bg-amber-900/50 print:border-amber-600 print:bg-amber-100 print:text-amber-800"
            title={
              lang === "ko"
                ? "Education 수상 내역으로 이동"
                : "Jump to Awards in Education"
            }
          >
            <TrophyMicro className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300 print:text-amber-800" />
            <span className="min-w-0">{award[lang]}</span>
            <span className="shrink-0 font-mono tabular-nums text-amber-800 dark:text-amber-200 print:text-amber-900">
              · {award.year}
            </span>
          </a>
        ))}
      </motion.div>

      {/* 3. Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.9 }}
        className="mt-3 border-b border-[#ddd] pb-3 text-sm leading-relaxed text-[#777] transition-colors duration-300 print:text-xs dark:border-[#333] dark:text-[#999] md:text-base print:md:text-sm"
      >
        {taglineLines.map((line, i) => (
          <span key={`${lang}-tagline-${i}`}>
            {line.trim()}
            {i < taglineLines.length - 1 ? <br /> : null}
          </span>
        ))}
      </motion.p>

      {/* 4. Contact — 가장 작은 유틸리티 계층 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.1 }}
        className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#888] transition-colors duration-300 dark:text-[#777]"
      >
        <a
          href="mailto:dhy2458@gmail.com"
          className={resumeTextLinkClass}
        >
          dhy2458@gmail.com
        </a>
        <span className="text-[#ccc] dark:text-[#444]">·</span>
        <a
          href="https://github.com/Melonisjy"
          target="_blank"
          rel="noopener noreferrer"
          className={resumeTextLinkClass}
        >
          github.com/Melonisjy ↗
        </a>
        {/* Print-only: 웹사이트 링크 */}
        <span className="hidden print:inline text-[#ccc]">·</span>
        <a
          href="https://resume-seven-beige.vercel.app"
          className={`hidden print:inline ${resumeTextLinkClass}`}
        >
          resume-seven-beige.vercel.app
        </a>
      </motion.div>
    </motion.header>
  );
}
