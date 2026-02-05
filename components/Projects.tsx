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
            {project.story && (
              <a
                href={project.story}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors"
              >
                Story ↗
              </a>
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
