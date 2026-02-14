"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const archiveItems = [
  {
    label: {
      ko: "부트캠프 & 커리어 초기 (블록체인 부트캠프 활동 및 웹 개발)",
      en: "Bootcamp & Early Career",
    },
    period: "2023 — 2026",
    platform: "Velog",
    href: "https://velog.io/@meloncoder/posts",
  },
  {
    label: { ko: "학부생 시절 (알고리즘 및 블록체인)", en: "Undergraduate" },
    period: "2021 — 2023",
    platform: "Tistory",
    href: "https://melon-is-jy.tistory.com/",
  },
];

export default function Archive() {
  const { lang } = useLanguage();
  const t = translations.archive;

  return (
    <Section id="archive" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300"
        >
          {t.description[lang]}
        </motion.p>

        <div className="space-y-3">
          {archiveItems.map((item, index) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center md:justify-between gap-1"
              >
                <span className="text-[#222] dark:text-[#f5f5f0] group-hover:text-[#666] dark:group-hover:text-[#aaa] transition-colors duration-300">
                  {item.label[lang]}{" "}
                  <span className="text-[#999] dark:text-[#666]">↗</span>
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
                    {item.platform}
                  </span>
                  <span className="text-xs text-[#999] dark:text-[#666] font-mono tabular-nums transition-colors duration-300">
                    {item.period}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
