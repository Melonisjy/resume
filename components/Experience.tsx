"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { resumeTextLinkClass } from "@/lib/resumeLinkClass";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations.experience;

  return (
    <Section id="experience" title={t.title[lang]} emphasizeLeadSpacing>
      <div className="space-y-10 md:space-y-12 print:space-y-4">
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
              className={`pl-4 transition-colors duration-300 print:pl-3 md:pl-6 ${
                isNonDev
                  ? "border-l-2 border-dashed border-[#bbb] opacity-80 dark:border-[#555]"
                  : "border-l-2 border-[#999] dark:border-[#444]"
              }`}
            >
              {/* Header */}
              <div
                className={`flex flex-col gap-1 md:flex-row md:items-start md:justify-between ${isNonDev ? "mb-2" : "mb-4"}`}
              >
                <div>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-heading font-semibold ${resumeTextLinkClass} ${
                        isNonDev ? "text-lg md:text-xl" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {exp.company[lang]}{" "}
                      <span className="opacity-80" aria-hidden>
                        ↗
                      </span>
                    </a>
                  ) : (
                    <h3
                      className={`font-heading font-semibold transition-colors duration-300 ${
                        isNonDev
                          ? "text-lg md:text-xl text-[#555] dark:text-[#ccc]"
                          : "text-2xl md:text-3xl text-[#222] dark:text-[#f5f5f0]"
                      }`}
                    >
                      {exp.company[lang]}
                    </h3>
                  )}
                  <p
                    className={`transition-colors duration-300 ${
                      isNonDev
                        ? "text-sm text-[#888] dark:text-[#777]"
                        : "text-lg text-[#666] dark:text-[#aaa]"
                    }`}
                  >
                    {exp.title[lang]}
                  </p>
                </div>
                <span className="text-sm text-[#999] dark:text-[#666] md:text-base font-mono transition-colors duration-300">
                  {exp.period[lang]}
                </span>
              </div>

              {/* Description */}
              <p
                className={`transition-colors duration-300 ${
                  isNonDev
                    ? "mb-2 text-sm leading-relaxed text-[#888] md:leading-7 dark:text-[#777] print:text-sm print:leading-snug"
                    : "mb-4 text-[15px] leading-relaxed text-[#666] md:text-base md:leading-7 dark:text-[#aaa] print:text-sm print:leading-snug"
                }`}
              >
                {exp.description[lang]}
              </p>

              {/* Achievements */}
              {"achievements" in exp && exp.achievements.length > 0 && (
                <div className={isNonDev ? "mb-2" : "mb-4"}>
                  {!isNonDev && (
                    <p className="text-sm text-[#999] dark:text-[#666] italic mb-2 transition-colors duration-300">
                      {t.achievementsLabel[lang]}
                    </p>
                  )}
                  <ul className="m-0 list-none space-y-6 p-0 pl-0 md:space-y-5 print:space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`block list-none break-inside-avoid overflow-visible border-l-2 border-solid border-[#fbbf24] pl-3 transition-colors duration-300 dark:border-[#f59e0b] ${
                          isNonDev
                            ? "text-[15px] text-[#777] md:text-sm dark:text-[#888] print:text-sm"
                            : "text-[15px] text-[#444] md:text-base dark:text-[#c8c8c2] print:text-sm"
                        }`}
                      >
                        <span className="block min-w-0 max-w-3xl leading-7 print:leading-snug">
                          <span
                            className="resume-content"
                            dangerouslySetInnerHTML={{
                              __html: achievement[lang],
                            }}
                          />
                          {"link" in achievement && achievement.link && (
                            <a
                              href={achievement.link as string}
                              className={`ml-1.5 inline text-xs sm:whitespace-nowrap ${resumeTextLinkClass}`}
                            >
                              {"linkLabel" in achievement &&
                              achievement.linkLabel
                                ? `${(achievement.linkLabel as Record<string, string>)[lang]} ↗`
                                : "↗"}
                            </a>
                          )}
                        </span>
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
                        <span className="ml-2 text-[#ccc] dark:text-[#444]">
                          ·
                        </span>
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
