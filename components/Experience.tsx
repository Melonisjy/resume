"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations.experience;

  return (
    <Section id="experience" title={t.title[lang]}>
      <div className="space-y-10 md:space-y-12">
        {t.items.map((exp, index) => {
          const link = "link" in exp ? exp.link : undefined;
          const tech = "tech" in exp ? exp.tech : undefined;

          const isNonDev = !tech;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pl-4 md:pl-6 transition-colors duration-300 ${
                isNonDev
                  ? "border-l-2 border-dashed border-[#bbb] dark:border-[#555] opacity-80"
                  : "border-l-2 border-[#999] dark:border-[#444]"
              }`}
            >
              {/* Header */}
              <div className={`flex flex-col gap-1 md:flex-row md:items-start md:justify-between ${isNonDev ? "mb-2" : "mb-4"}`}>
                <div>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-heading font-semibold hover:text-[#666] dark:hover:text-[#aaa] transition-colors duration-300 ${
                        isNonDev
                          ? "text-lg md:text-xl text-[#555] dark:text-[#ccc]"
                          : "text-2xl md:text-3xl text-[#222] dark:text-[#f5f5f0]"
                      }`}
                    >
                      {exp.company[lang]} <span className="text-[#999] dark:text-[#666]">↗</span>
                    </a>
                  ) : (
                    <h3 className={`font-heading font-semibold transition-colors duration-300 ${
                      isNonDev
                        ? "text-lg md:text-xl text-[#555] dark:text-[#ccc]"
                        : "text-2xl md:text-3xl text-[#222] dark:text-[#f5f5f0]"
                    }`}>
                      {exp.company[lang]}
                    </h3>
                  )}
                  <p className={`transition-colors duration-300 ${
                    isNonDev
                      ? "text-sm text-[#888] dark:text-[#777]"
                      : "text-lg text-[#666] dark:text-[#aaa]"
                  }`}>
                    {exp.title[lang]}
                  </p>
                </div>
                <span className="text-sm text-[#999] dark:text-[#666] md:text-base font-mono transition-colors duration-300">
                  {exp.period[lang]}
                </span>
              </div>

              {/* Description */}
              <p className={`leading-relaxed transition-colors duration-300 ${
                isNonDev
                  ? "text-sm text-[#888] dark:text-[#777] mb-2"
                  : "text-[#666] dark:text-[#aaa] mb-4"
              }`}>
                {exp.description[lang]}
              </p>

              {/* Achievements */}
              {exp.achievements && (
                <div className={isNonDev ? "mb-2" : "mb-4"}>
                  {!isNonDev && (
                    <p className="text-sm text-[#999] dark:text-[#666] italic mb-2 transition-colors duration-300">
                      {t.achievementsLabel[lang]}
                    </p>
                  )}
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start gap-2 transition-colors duration-300 ${
                        isNonDev
                          ? "text-sm text-[#777] dark:text-[#888]"
                          : "text-[#555] dark:text-[#bbb]"
                      }`}>
                        <span className={`font-mono text-sm select-none mt-0.5 ${
                          isNonDev
                            ? "text-[#999] dark:text-[#666]"
                            : "text-[#222] dark:text-[#f5f5f0]"
                        }`}>
                          {isNonDev ? "·" : "[✓]"}
                        </span>
                        <span>{achievement[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {tech && (
                <div className="flex flex-wrap gap-2">
                  {tech.map((techItem: string, i: number) => (
                    <span
                      key={techItem}
                      className="text-sm text-[#666] dark:text-[#888] transition-colors duration-300"
                    >
                      {techItem}
                      {i < tech.length - 1 && (
                        <span className="ml-2 text-[#ccc] dark:text-[#444]">·</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
