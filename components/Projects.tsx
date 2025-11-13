"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const companyProjects = [
  {
    name: "JEFF World Blockchain Site",
    description: "NFT 판매, 구매, 교환, 브릿지(JEFF chain ↔ Ethereum) 기능을 제공하는 블록체인 사이트. 모노레포 방식으로 각 프로젝트별 독립적 개발 환경 구축.",
    tech: ["React", "Javascript", "Web3.js", "Sass"],
    period: "2023.11 ~ 2024.06",
  },
  {
    name: "JEFF Back Office",
    description: "게임 내 블록체인 데이터 관리 및 시각화를 위한 백오피스. ApexChart를 활용한 차트 개발.",
    tech: ["React", "ApexChart", "Javascript"],
    period: "2024.03 ~ 2024.07",
  },
  {
    name: "Homepage Renewal Site",
    description: "그랜드 오픈을 위한 리뉴얼 홈페이지. 로그인/회원가입/유저정보 등 API 연동 작업 진행.",
    tech: ["React", "Javascript", "API"],
    period: "2024.04 ~ 2024.07",
  },
  {
    name: "Common Component UI Site",
    description: "팀 내부 공통 컴포넌트 라이브러리 사이트. 컴포넌트 확장성 향상 및 신규 팀원 온보딩 지원.",
    tech: ["React", "Javascript"],
    period: "2024.02 ~ 2024.03",
  },
  {
    name: "Free Minting Site (Event)",
    description: "사용자 민팅 여부 체크 및 RPC 호출을 통한 트랜잭션 처리 이벤트 사이트.",
    tech: ["React", "Web3.js", "Javascript"],
    period: "2023",
  },
];

const teamProjects = [
  {
    name: "INSURSAND",
    description: "언스테이킹 보험과 보험계약 NFT를 제공하는 디파이 보험 플랫폼. 팀장으로서 프로젝트 기획 및 React 기반 웹사이트 개발.",
    tech: ["React", "Solidity", "Web3.js", "Tailwind CSS"],
    period: "2023.06 ~ 2023.07",
    link: "https://props-frontend-eta.vercel.app/",
    github: "https://github.com/INSURSAND/INSURSAND-Frontend-v1",
    award: "멋쟁이사자처럼 블록체인스쿨 3기 대상",
  },
  {
    name: "P2D (Play to donate!)",
    description: "블록체인 기반 기부 플랫폼. Solidity를 이용한 스마트 컨트랙트 작성 및 블록 탐색기 사이트 구축.",
    tech: ["Solidity", "Unity", "Web3.js", "Javascript"],
    period: "2022.02 ~ 2022.06",
    github: "https://github.com/6uamy/P2D",
    award: "상명대학교 캡스톤 디자인 경진대회 최우수상",
  },
];

const personalProjects = [
  {
    name: "운명가챠",
    description: "이름을 입력하면 내년 일어날 운명 한가지를 알려주는 모바일 우선 웹앱. 랜덤 예언 생성, 눈 내리는 애니메이션 및 별 반짝임 효과, 결과 공유 기능 제공.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    period: "2025",
    link: "https://fategacha.vercel.app/",
    github: "https://github.com/Melonisjy/fategacha",
  },
  {
    name: "Melon-NFT-Marketplace",
    description: "개인 NFT 마켓플레이스 프로젝트",
    tech: ["React", "Web3.js", "Tailwind CSS"],
    period: "2023.04",
    link: "https://melonn-nft-market.vercel.app/",
    github: "https://github.com/Melonisjy/Melonn-NFTMarket",
  },
];

export default function Projects() {
  return (
    <>
      <Section id="projects" title="Projects">
        <div className="mb-8">
          <h3 className="mb-4 font-heading text-xl font-semibold text-[#222]">회사 프로젝트</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {companyProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-sm border border-[#999] bg-[#fdfcf8] p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-heading text-xl font-semibold text-[#222]">
                    {project.name}
                  </h3>
                  {project.period && (
                    <span className="text-xs text-[#999] whitespace-nowrap ml-2">
                      {project.period}
                    </span>
                  )}
                </div>
                <p className="mb-4 text-sm text-[#666] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[#999] bg-white px-2 py-1 text-xs text-[#666]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 font-heading text-xl font-semibold text-[#222]">팀 프로젝트</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {teamProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-sm border border-[#999] bg-[#fdfcf8] p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-heading text-xl font-semibold text-[#222]">
                    {project.name}
                  </h3>
                  {project.period && (
                    <span className="text-xs text-[#999] whitespace-nowrap ml-2">
                      {project.period}
                    </span>
                  )}
                </div>
                {project.award && (
                  <p className="mb-2 text-xs font-semibold text-[#222]">🏆 {project.award}</p>
                )}
                <p className="mb-4 text-sm text-[#666] leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[#999] bg-white px-2 py-1 text-xs text-[#666]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-xs">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#666] hover:text-[#222] transition-colors"
                    >
                      🔗 Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#666] hover:text-[#222] transition-colors"
                    >
                      📁 GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-xl font-semibold text-[#222]">개인 프로젝트</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-sm border border-[#999] bg-[#fdfcf8] p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-heading text-xl font-semibold text-[#222]">
                    {project.name}
                  </h3>
                  {project.period && (
                    <span className="text-xs text-[#999] whitespace-nowrap ml-2">
                      {project.period}
                    </span>
                  )}
                </div>
                <p className="mb-4 text-sm text-[#666] leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[#999] bg-white px-2 py-1 text-xs text-[#666]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-xs">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#666] hover:text-[#222] transition-colors"
                    >
                      🔗 Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#666] hover:text-[#222] transition-colors"
                    >
                      📁 GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
