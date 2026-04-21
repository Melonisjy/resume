"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { Language } from "@/lib/i18n/translations";
import { resumeTextLinkClass } from "@/lib/resumeLinkClass";

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

function ProjectBadge({
  text,
  variant,
}: {
  text: string;
  variant: "status" | "award";
}) {
  const badgeClass =
    variant === "award"
      ? "rounded border border-neutral-300 bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-800 transition-colors duration-300 dark:border-neutral-600 dark:bg-neutral-900/40 dark:text-neutral-200"
      : "rounded border border-[#b8b4ab] bg-[#f5f3ee] px-1.5 py-0.5 text-[10px] text-[#6f6a5f] transition-colors duration-300 dark:border-[#4d4d4d] dark:bg-[#1d1d1d] dark:text-[#a8a39a]";

  return <span className={badgeClass}>{text}</span>;
}

function ProjectLinks({ project }: { project: TranslatedProject }) {
  if (!project.link && !project.github) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {(project.link || project.github) && (
        <span className="text-[#ccc] dark:text-[#444]">|</span>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs ${resumeTextLinkClass}`}
        >
          Live
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs ${resumeTextLinkClass}`}
        >
          GitHub
        </a>
      )}
    </div>
  );
}

function FeaturedProjectList({
  projects,
  lang,
}: {
  projects: readonly TranslatedProject[];
  lang: Language;
}) {
  return (
    <div className="space-y-5 md:space-y-6 print:space-y-2">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="break-inside-avoid rounded-lg border border-[#e0ddd4] bg-[#fdfcfa] p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors duration-300 print:p-2 dark:border-[#333] dark:bg-[#161616] dark:shadow-none md:p-5"
        >
          <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-[#222] transition-colors duration-300 dark:text-[#f5f5f0]">
                {project.name[lang]}
              </span>
              {project.status && (
                <ProjectBadge text={project.status[lang]} variant="status" />
              )}
              {project.award && (
                <ProjectBadge text={project.award[lang]} variant="award" />
              )}
            </div>
            <span className="font-mono text-sm text-[#999] transition-colors duration-300 dark:text-[#666]">
              {project.period}
            </span>
          </div>
          <div className="max-w-3xl">
            <p className="mb-2 text-[15px] leading-loose text-[#555] transition-colors duration-300 dark:text-[#b8b8b0] md:text-base md:leading-relaxed print:text-sm print:leading-snug whitespace-pre-line">
              {project.description[lang]}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="text-xs text-[#888] transition-colors duration-300 dark:text-[#666]">
              {project.tech.join(" | ")}
            </span>
            <ProjectLinks project={project} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CompactProjectList({
  projects,
  lang,
}: {
  projects: readonly TranslatedProject[];
  lang: Language;
}) {
  return (
    <ul className="divide-y divide-[#e8e6e0] dark:divide-[#2a2a2a]">
      {projects.map((project, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          className="flex flex-col gap-1.5 py-3 first:pt-0 md:flex-row md:items-baseline md:justify-between md:gap-4 md:py-2.5"
        >
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-sm font-medium text-[#222] dark:text-[#f5f5f0]">
                {project.name[lang]}
              </span>
              {project.status && (
                <ProjectBadge text={project.status[lang]} variant="status" />
              )}
              {project.award && (
                <ProjectBadge text={project.award[lang]} variant="award" />
              )}
              <span className="font-mono text-xs text-[#aaa] dark:text-[#555]">
                {project.period}
              </span>
            </div>
            <div className="max-w-2xl">
              <p className="text-xs leading-relaxed text-[#666] dark:text-[#999] md:text-[13px]">
                {project.description[lang]}
              </p>
            </div>
            <span className="text-[11px] text-[#999] dark:text-[#666]">
              {project.tech.join(" | ")}
            </span>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1 md:justify-end">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[11px] ${resumeTextLinkClass}`}
              >
                Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[11px] ${resumeTextLinkClass}`}
              >
                GitHub
              </a>
            )}
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations.projects;

  return (
    <Section id="projects" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] pl-4 transition-colors duration-300 dark:border-[#444] md:pl-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <p className="mb-4 text-sm italic text-[#666] transition-colors duration-300 dark:text-[#aaa]">
            {t.featuredLabel[lang]}
          </p>
          <FeaturedProjectList projects={t.featuredProjects} lang={lang} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10 border-t-2 border-[#c8c4bc] pt-8 transition-colors duration-300 print:mt-6 print:pt-5 dark:border-[#3d3d3d] md:mt-12 md:pt-10"
        >
          <p className="mb-3 text-sm italic text-[#666] transition-colors duration-300 dark:text-[#aaa]">
            {t.otherLabel[lang]}
          </p>
          <CompactProjectList projects={t.otherProjects} lang={lang} />
        </motion.div>
      </div>
    </Section>
  );
}
