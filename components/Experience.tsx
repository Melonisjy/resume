"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const experiences: Array<{
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  tech?: string[];
  link?: string;
}> = [
  {
    title: "Frontend Developer",
    company: "엘림 주식회사",
    period: "2026.01 ~",
    description: "사내 안전진단 웹 기반 툴의 프론트엔드 개발 및 유지보수",
    achievements: [
      "외주 레거시 코드 리팩토링 및 유지보수성 개선",
      "사용자 피드백 기반 UI/UX 개선 작업 진행",
      "백엔드 협업을 통한 API 연동 및 화면 구현",
    ],
    tech: ["TypeScript", "Next.js", "Zustand", "Tailwind CSS", "TanStack Query"],
  },
  {
    title: "교육운영",
    company: "경기도경제과학진흥원",
    period: "2025.05 ~ 2025.10",
    description: "공기업 교육운영직무 (계약직)",
    achievements: [
      "교육 프로그램 기획 및 운영 담당",
      "내년도 사업계획서 작성 참여",
      "교육생 관리 및 교육 효과 분석",
    ],
  },
  {
    title: "Frontend Developer",
    company: "제프 (JEFF WORLD)",
    period: "2023.08 ~ 2024.11",
    description: "블록체인 기반 게임 플랫폼의 프론트엔드 개발",
    achievements: [
      "NFT 마켓플레이스, 브릿지, 전송 기능 개발",
      "모노레포 환경 구축 및 공통 컴포넌트 라이브러리 설계",
      "백오피스 프론트엔드 개발",
      "홈페이지 리뉴얼 프로젝트 참여",
    ],
    tech: ["JavaScript", "React", "Redux", "Sass"],
    link: "https://jeffworld.io",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10 md:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300"
          >
            {/* Header */}
            <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#222] dark:text-[#f5f5f0] transition-colors duration-300">
                  {exp.title}
                </h3>
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors underline underline-offset-2"
                  >
                    {exp.company} ↗
                  </a>
                ) : (
                  <p className="text-lg text-[#666] dark:text-[#aaa] transition-colors duration-300">
                    {exp.company}
                  </p>
                )}
              </div>
              <span className="text-sm text-[#999] dark:text-[#666] md:text-base font-mono transition-colors duration-300">
                {exp.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-[#666] dark:text-[#aaa] leading-relaxed transition-colors duration-300 mb-4">
              {exp.description}
            </p>

            {/* Achievements */}
            {exp.achievements && (
              <div className="mb-4">
                <p className="text-sm text-[#999] dark:text-[#666] italic mb-2 transition-colors duration-300">
                  주요 성과 —
                </p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#555] dark:text-[#bbb] transition-colors duration-300">
                      <span className="text-[#222] dark:text-[#f5f5f0] font-mono text-sm select-none mt-0.5">
                        [✓]
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {exp.tech && (
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm text-[#666] dark:text-[#888] transition-colors duration-300"
                  >
                    {t}
                    {exp.tech && exp.tech.indexOf(t) < exp.tech.length - 1 && (
                      <span className="ml-2 text-[#ccc] dark:text-[#444]">·</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

