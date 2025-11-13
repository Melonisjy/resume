"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const experiences: Array<{
  title: string;
  company: string;
  period: string;
  description: string;
  tech?: string;
  link?: string;
}> = [
  {
    title: "교육운영직무",
    company: "경기도경제과학진흥원",
    period: "2025.05 ~ 2025.10",
    description: "공기업 교육운영직무로 근무. 교육 프로그램 기획 및 운영, 내년도 사업계획서 작성 등 교육 사업 전반을 담당. 교육과정 개발 및 관리, 교육생 관리, 교육 효과 분석 등 교육 운영 업무 수행.",
  },
  {
    title: "Frontend Developer",
    company: "제프 (JEFF WORLD)",
    period: "2023.08 ~ 2024.11",
    description: "블록체인 기반 게임 플랫폼의 프론트엔드 개발. NFT 마켓플레이스, 브릿지, 전송 기능 개발. 모노레포 환경에서의 효율적인 개발 및 공통 컴포넌트 UI 사이트 구축. 백오피스 프론트엔드 개발 및 홈페이지 리뉴얼 프로젝트 참여.",
    tech: "Javascript, React, React-redux, Sass(Scss)",
    link: "https://jeffworld.io",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-[#999] pl-4 pb-6 md:pl-6 last:pb-0"
          >
            <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#222]">
                  {exp.title}
                </h3>
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-[#222] transition-colors"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-[#666]">{exp.company}</p>
                )}
              </div>
              <span className="text-sm text-[#999] md:text-base">{exp.period}</span>
            </div>
            <p className="mt-2 text-[#666] leading-relaxed">{exp.description}</p>
            {exp.tech && (
              <p className="mt-2 text-sm text-[#999]">
                <span className="font-semibold">기술 스택:</span> {exp.tech}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

