"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const legacyAboutContent = {
  title: { ko: "About", en: "About" },
  intro: {
    ko: "UI/UX와 성능 최적화를 함께 고려하고, \n 새로운 도메인에서도 빠르게 적응하여 \n 운영 비용까지 줄이는 개발을 지향합니다.",
    en: "A frontend engineer across blockchain and SaaS—I ground performance in measurable outcomes.\nAt JEFF, I designed a monorepo and shared components; at Elim, a safety-diagnosis SaaS, I cut key page bundles <strong>47–54%</strong> in Next.js with bundle-analyzer and dynamic imports.\nI led performance tuning and structural refactors that reduced load and operational cost.\nI weigh UX and business impact together when prioritizing, and I gravitate to work like bundle optimization that improves perceived speed and cost at once.",
  },
} as const;

export default function About() {
  const { lang } = useLanguage();
  const t = legacyAboutContent;

  return (
    <Section id="about" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        {/* Intro */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="resume-content text-[#555] dark:text-[#bbb] leading-relaxed whitespace-pre-line transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: t.intro[lang] }}
          />
        </div>
      </div>
    </Section>
  );
}
