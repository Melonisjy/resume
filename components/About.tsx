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
          className="text-[#555] dark:text-[#bbb] leading-relaxed mb-6 whitespace-pre-line transition-colors duration-300"
        >
          {t.intro[lang]}
        </motion.p>

        <ul className="space-y-4">
          {t.values.map((value, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3 group"
            >
              {/* Hand-drawn style checkbox */}
              <span className="mt-1 text-[#222] dark:text-[#f5f5f0] transition-colors duration-300 
                font-mono text-sm select-none">
                [✓]
              </span>
              
              <div className="flex-1">
                <span className="text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300
                  border-b-2 border-[#222]/20 dark:border-[#f5f5f0]/20
                  group-hover:border-[#222]/50 dark:group-hover:border-[#f5f5f0]/50
                  transition-all duration-300">
                  {value.keyword[lang]}
                </span>
                <span className="ml-2 text-[#999] dark:text-[#666] text-sm transition-colors duration-300">
                  — {value.note[lang]}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
