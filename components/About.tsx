"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations.about;

  return (
    <Section id="about" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="resume-content text-[#555] dark:text-[#bbb] leading-relaxed whitespace-pre-line transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: t.intro[lang] }}
        />
      </div>
    </Section>
  );
}
