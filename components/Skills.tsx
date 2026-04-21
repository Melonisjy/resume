"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations.skills;
  const emphasizedLabels = ["언어", "Language", "프레임워크", "Framework"];

  return (
    <Section id="skills" title={t.title[lang]}>
      <div className="flex flex-col gap-6 border-l-2 border-[#999] pl-4 transition-colors duration-300 print:gap-1 dark:border-[#444] md:pl-6">
        {t.categories.map((category, categoryIndex) => {
          const isEmphasized = emphasizedLabels.includes(category.label[lang]);

          return (
            <motion.div
              key={category.label.en}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
            >
              <div className="md:max-w-2xl">
                <p className="text-[#666] dark:text-[#aaa] text-xs mb-3 italic transition-colors duration-300">
                  {category.label[lang]} —
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: isEmphasized ? 10 : 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      }}
                      className={
                        isEmphasized
                          ? "text-[#222] dark:text-[#f5f5f0] text-2xl font-heading font-bold border-b-2 border-[#222]/30 dark:border-[#f5f5f0]/30 transition-colors duration-300"
                          : "text-[#444] dark:text-[#ddd] text-sm md:text-base transition-colors duration-300"
                      }
                    >
                      {skill}
                      {skillIndex < category.items.length - 1 && ","}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
