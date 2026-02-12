"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

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
          <ul className="space-y-3">
            {t.awards.map((award, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-[#222] dark:text-[#f5f5f0] select-none mt-0.5">
                  🏆
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span className="text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300">
                      {award.title[lang]}
                    </span>
                    <span className="text-sm text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#666] dark:text-[#aaa] transition-colors duration-300">
                    {award.project[lang]}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
