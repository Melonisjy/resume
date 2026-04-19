"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { Language } from "@/lib/i18n/translations";

/** 수상 등급 키워드만 색으로 강조 (전체 제목은 카드·굵기로 이미 눈에 띄게) */
function highlightAwardRank(text: string, lang: Language) {
  const terms =
    lang === "ko"
      ? ["최우수상", "우수 논문상", "대상", "장려상"]
      : [
          "Excellence Award",
          "Best Paper Award",
          "Grand Prize",
          "Encouragement Award",
        ];
  for (const term of terms) {
    const i = text.indexOf(term);
    if (i !== -1) {
      return (
        <>
          {text.slice(0, i)}
          <strong className="font-semibold text-amber-800 dark:text-amber-300">
            {term}
          </strong>
          {text.slice(i + term.length)}
        </>
      );
    }
  }
  return text;
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 21h8M12 17v4M7 4h10v3a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H5a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3h1M17 6h2a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3h-1" />
    </svg>
  );
}

export default function Education() {
  const { lang } = useLanguage();
  const t = translations.education;

  return (
    <Section id="education" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            {t.educationLabel[lang]}
          </p>
          <div className="space-y-3">
            {t.educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300">
                    {edu.institution[lang]}
                  </span>
                  <span className="text-[#666] dark:text-[#aaa] transition-colors duration-300">
                    {edu.major[lang]}
                  </span>
                  <span className="text-xs text-[#999] dark:text-[#666] transition-colors duration-300">
                    · {edu.status[lang]}
                  </span>
                </div>
                <span className="text-sm text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
                  {edu.period[lang]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            {t.awardsLabel[lang]}
          </p>
          <ul className="space-y-3 md:space-y-4 print:space-y-1.5">
            {t.awards.map((award, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`break-inside-avoid rounded-lg border border-[#e5e2d9] border-l-[3px] border-l-amber-600 bg-[#faf9f5] px-3 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors duration-300 print:px-2 print:py-1 dark:border-[#2f2f2f] dark:border-l-amber-500 dark:bg-[#141414] dark:shadow-none ${
                  "hideInPrint" in award && award.hideInPrint
                    ? "print:hidden"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 text-amber-700 dark:text-amber-400"
                    aria-hidden
                  >
                    <TrophyIcon />
                  </span>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-3">
                      <span className="text-[15px] md:text-base font-semibold leading-snug text-[#1a1a1a] dark:text-[#f5f5f0] transition-colors duration-300">
                        {highlightAwardRank(award.title[lang], lang)}
                      </span>
                      <span className="shrink-0 text-xs font-mono tabular-nums text-amber-900/70 dark:text-amber-200/80 sm:text-sm">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-[#555] dark:text-[#b5b5b0] transition-colors duration-300">
                      {award.project[lang]}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
