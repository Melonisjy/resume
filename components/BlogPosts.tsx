"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { resumeTextLinkClass } from "@/lib/resumeLinkClass";

function displayUrl(href: string) {
  return href.replace(/^https:\/\//, "");
}

export default function BlogPosts() {
  const { lang } = useLanguage();
  const t = translations.blog;

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-5 scroll-mt-20 md:mb-6 print:mb-1.5 print:break-before-avoid print:scroll-mt-0"
    >
      <h2 className="mb-1.5 flex items-center gap-2 font-heading text-xl font-semibold text-[#222] transition-colors duration-300 print:mb-0.5 print:text-sm dark:text-[#f5f5f0] md:text-2xl">
        <span
          className="inline-block h-5 w-[3px] shrink-0 rounded-sm bg-amber-500 print:bg-amber-600 dark:bg-amber-400"
          aria-hidden
        />
        {t.title[lang]}
      </h2>
      <p className="mb-2 text-[13px] text-[#888] transition-colors duration-300 print:hidden dark:text-[#777]">
        {t.tagline[lang]}
      </p>
      <div className="border-t border-[#999] pt-2 transition-colors duration-300 print:border-t print:pt-1 dark:border-[#444]">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 print:flex print:flex-row print:gap-1.5">
          {t.blogLinks.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group flex min-w-0 flex-1 flex-col rounded border border-[#ddd] bg-[#fafaf8] px-2.5 py-2 text-[13px] transition-colors duration-150 hover:border-amber-500/35 print:px-1.5 print:py-1 print:text-xs dark:border-[#333] dark:bg-[#161616] dark:hover:border-amber-500/40"
            >
              <span
                className={`font-medium ${resumeTextLinkClass} group-hover:underline`}
              >
                {item.name[lang]}
              </span>
              <span className="mt-0.5 line-clamp-2 text-xs leading-snug text-[#666] print:hidden dark:text-[#aaa]">
                {item.description[lang]}
              </span>
              <span
                className={`mt-1 font-mono text-[11px] leading-tight print:mt-0.5 print:text-[10px] ${resumeTextLinkClass} group-hover:underline`}
              >
                {displayUrl(item.href)} ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
