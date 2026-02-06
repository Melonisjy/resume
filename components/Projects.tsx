"use client";

import Section from "./Section";
import { motion } from "framer-motion";

// 회사 프로젝트 (최신순)
const companyProjects = [
  {
    name: "Homepage Renewal",
    description: "그랜드 오픈을 위한 리뉴얼 홈페이지, API 연동 작업",
    tech: ["React", "JavaScript"],
    period: "2024",
  },
  {
    name: "JEFF Back Office",
    description: "블록체인 데이터 관리 및 시각화 백오피스",
    tech: ["React", "ApexChart"],
    period: "2024",
  },
  {
    name: "Common Component UI",
    description: "팀 내부 공통 컴포넌트 라이브러리 및 문서 사이트",
    tech: ["React", "JavaScript"],
    period: "2024",
  },
  {
    name: "JEFF World Blockchain",
    description: "NFT 마켓플레이스, 브릿지 기능을 제공하는 블록체인 사이트",
    tech: ["React", "Web3.js", "Sass"],
    period: "2023 ~ 2024",
  },
  {
    name: "Free Minting Site",
    description: "사용자 민팅 여부 체크 및 트랜잭션 처리 이벤트 사이트",
    tech: ["React", "Web3.js"],
    period: "2023",
  },
];

// 팀 프로젝트 (최신순)
const teamProjects = [
  {
    name: "INSURSAND",
    description: "디파이 보험 플랫폼 — 팀장으로서 기획 및 프론트엔드 개발",
    tech: ["React", "Solidity", "Web3.js", "Tailwind CSS"],
    period: "2023",
    award: "블록체인스쿨 대상",
    link: "https://props-frontend-eta.vercel.app/",
    github: "https://github.com/INSURSAND/INSURSAND-Frontend-v1",
    story: "https://story.likelion.net/ko/articles/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EB%B6%80%ED%8A%B8%EC%BA%A0%ED%94%84--INSURSAND-10970da1",
  },
  {
    name: "P2D (Play to Donate)",
    description: "블록체인 기반 기부 플랫폼 — 스마트 컨트랙트 및 블록 탐색기 개발",
    tech: ["Solidity", "Unity", "Web3.js"],
    period: "2022",
    award: "캡스톤 최우수상",
    github: "https://github.com/6uamy/P2D",
  },
];

// 개인 프로젝트 (최신순)
const personalProjects = [
  {
    name: "킥-인 (KIKIN)",
    description: "풋살 팀 경기 일정 관리 웹앱 — 팀 생성/초대, 출석 투표, 공지사항, 실시간 알림",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cursor AI"],
    period: "2025",
    status: "개발중",
    link: "https://kikin-gules.vercel.app/",
    github: "https://github.com/Melonisjy/KIKIN",
  },
  {
    name: "운명가챠",
    description: "이름을 입력하면 내년 운명을 알려주는 모바일 웹앱",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cursor AI"],
    period: "2025",
    link: "https://fategacha.vercel.app/",
    github: "https://github.com/Melonisjy/fategacha",
  },
  {
    name: "Melon NFT Marketplace",
    description: "개인 NFT 마켓플레이스 프로젝트",
    tech: ["React", "Web3.js", "Tailwind CSS"],
    period: "2023",
    link: "https://melonn-nft-market.vercel.app/",
    github: "https://github.com/Melonisjy/Melonn-NFTMarket",
  },
];

interface Project {
  name: string;
  description: string;
  tech: string[];
  period: string;
  award?: string;
  status?: string;
  link?: string;
  github?: string;
  story?: string;
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-4 flex flex-col gap-1">
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
                {project.name}
              </span>
              {project.status && (
                <span className="text-xs text-[#666] dark:text-[#aaa] border border-[#999] dark:border-[#555] px-1.5 py-0.5 rounded transition-colors duration-300">
                  {project.status}
                </span>
              )}
              {project.award && (
                <span className="text-xs text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300">
                  🏆 {project.award}
                </span>
              )}
            </div>
            <span className="text-sm text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
              {project.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-1 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech & Links */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-xs text-[#888] dark:text-[#666] transition-colors duration-300">
              {project.tech.join(" · ")}
            </span>
            {(project.link || project.github || project.story) && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#e8f5e9] dark:bg-[#1a2e1a] text-[#2e7d32] dark:text-[#81c784] border border-[#c8e6c9] dark:border-[#2e5a2e] hover:bg-[#c8e6c9] dark:hover:bg-[#2e4a2e] hover:-translate-y-0.5 hover:scale-105 active:scale-100 transition-all duration-200"
                  >
                    <span className="relative flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#4caf50] dark:bg-[#81c784] rounded-full animate-pulse" />
                      Live
                    </span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#f5f5f5] dark:bg-[#2a2a2a] text-[#555] dark:text-[#bbb] border border-[#ddd] dark:border-[#444] hover:bg-[#eee] dark:hover:bg-[#333] hover:-translate-y-0.5 hover:scale-105 active:scale-100 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                    <svg className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                )}
                {project.story && (
                  <a
                    href={project.story}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#fff8e1] dark:bg-[#2e2a1a] text-[#f57c00] dark:text-[#ffb74d] border border-[#ffe0b2] dark:border-[#5a4a2e] hover:bg-[#ffecb3] dark:hover:bg-[#3e3a2a] hover:-translate-y-0.5 hover:scale-105 active:scale-100 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span>Story</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-7 border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        {/* 회사 프로젝트 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            회사 프로젝트 —
          </p>
          <ProjectList projects={companyProjects} />
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
            팀 프로젝트 —
          </p>
          <ProjectList projects={teamProjects} />
        </motion.div>

        {/* 개인 프로젝트 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            개인 프로젝트 —
          </p>
          <ProjectList projects={personalProjects} />
        </motion.div>
      </div>
    </Section>
  );
}
