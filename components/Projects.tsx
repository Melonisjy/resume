"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { Language } from "@/lib/i18n/translations";

interface TranslatedProject {
  name: { ko: string; en: string };
  description: { ko: string; en: string };
  tech: readonly string[];
  period: string;
  award?: { ko: string; en: string };
  status?: { ko: string; en: string };
  link?: string;
  github?: string;
}

function ProjectList({
  projects,
  lang,
}: {
  projects: readonly TranslatedProject[];
  lang: Language;
}) {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300">
                {project.name[lang]}
              </span>
              {project.status && (
                <span className="text-xs text-[#666] dark:text-[#aaa] border border-[#999] dark:border-[#555] px-1.5 py-0.5 rounded transition-colors duration-300">
                  {project.status[lang]}
                </span>
              )}
              {project.award && (
                <span className="text-xs text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300">
                  🏆 {project.award[lang]}
                </span>
              )}
            </div>
            <span className="text-sm text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
              {project.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-1 transition-colors duration-300">
            {project.description[lang]}
          </p>

          {/* Tech & Links */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-xs text-[#888] dark:text-[#666] transition-colors duration-300">
              {project.tech.join(" · ")}
            </span>
            {(project.link || project.github) && (
              <span className="text-[#ccc] dark:text-[#444]">|</span>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors"
              >
                Live ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations.projects;

  return (
    <Section id="projects" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        {/* 회사 프로젝트 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            {t.companyLabel[lang]}
          </p>
          <ProjectList projects={t.companyProjects} lang={lang} />
        </motion.div>

        {/* 팀 프로젝트 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            {t.teamLabel[lang]}
          </p>
          <ProjectList projects={t.teamProjects} lang={lang} />
        </motion.div>

        {/* 개인 프로젝트 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            {t.personalLabel[lang]}
          </p>
          <ProjectList projects={t.personalProjects} lang={lang} />
        </motion.div>
      </div>
    </Section>
  );
}
