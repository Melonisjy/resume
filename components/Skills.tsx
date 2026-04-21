"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations.skills;

  return (
    <Section id="skills" title={t.title[lang]}>
      <div className="flex flex-col gap-6 border-l-2 border-[#999] pl-4 transition-colors duration-300 print:gap-1 dark:border-[#444] md:pl-6">
        {/* Primary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-3 italic transition-colors duration-300">
            {t.primaryLabel[lang]}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {t.primary.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-[#222] dark:text-[#f5f5f0] text-xl md:text-2xl font-heading font-semibold
                  border-b-2 border-[#222]/30 dark:border-[#f5f5f0]/30
                  transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Applied */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="md:max-w-2xl">
            <p className="text-[#666] dark:text-[#aaa] text-sm mb-3 italic transition-colors duration-300">
              {t.appliedLabel[lang]}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {t.applied[lang].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                  className="text-[#444] dark:text-[#ddd] text-sm md:text-base transition-colors duration-300"
                >
                  {skill}
                  {index < t.applied[lang].length - 1 && ","}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Exposure */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className="md:max-w-2xl">
            <p className="text-[#666] dark:text-[#aaa] text-sm mb-3 italic transition-colors duration-300">
              {t.exposureLabel[lang]}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {t.exposure[lang].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.04 }}
                  className="text-[#666] dark:text-[#aaa] transition-colors duration-300"
                >
                  {skill}
                  {index < t.exposure[lang].length - 1 && ","}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
