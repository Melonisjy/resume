export type Language = "ko" | "en";

export const translations = {
  header: {
    name: {
      ko: ["이", "주", "열"],
      en: ["Joo", "yeol Lee"],
    },
  },
  about: {
    title: { ko: "About", en: "About" },
    intro: {
      ko: "TypeScript, React, Next.js 기반 프론트엔드 개발자입니다.\n블록체인 플랫폼(JEFF)에서 모노레포 구축과 공통 컴포넌트 설계를 담당했고,\n이후 안전진단 SaaS(엘림)에서 번들 최적화와 레거시 리팩토링을 주도했습니다.\n도메인이 바뀌어도 빠르게 적응하며 실질적인 개선을 만드는 것을 중요하게 생각합니다.",
      en: "Frontend developer specializing in TypeScript, React, and Next.js.\nAt JEFF, I led monorepo setup and shared component architecture.\nAt Elim, I drove bundle optimization (47–54% reduction) and legacy refactoring.\nI focus on making practical improvements regardless of the domain.",
    },
    values: [
      {
        keyword: {
          ko: "번들 최적화 및 성능 개선",
          en: "Bundle Optimization & Performance",
        },
        note: {
          ko: "Next.js 환경에서 bundle-analyzer로 병목을 찾고 dynamic import로 47~54% 번들 감소",
          en: "Identified bottlenecks with bundle-analyzer, reduced bundle size 47–54% via dynamic imports",
        },
      },
      {
        keyword: {
          ko: "재사용 가능한 컴포넌트 설계",
          en: "Reusable Component Architecture",
        },
        note: {
          ko: "모노레포에서 공통 컴포넌트 10개+를 설계하고 문서 사이트로 팀에 배포",
          en: "Designed 10+ shared components in a monorepo and shipped a documentation site to the team",
        },
      },
      {
        keyword: {
          ko: "레거시 코드 리팩토링",
          en: "Legacy Code Refactoring",
        },
        note: {
          ko: "외주 코드를 컴포넌트 단위로 분리·정리하여 유지보수 비용 절감",
          en: "Decomposed outsourced legacy code into components, reducing maintenance overhead",
        },
      },
      {
        keyword: {
          ko: "사용자 중심 UX 개선",
          en: "User-Centered UX Improvement",
        },
        note: {
          ko: "현장 피드백 기반으로 입력 흐름을 개선 — 마우스 클릭에서 방향키 네비게이션으로 전환",
          en: "Improved input flow from field feedback — replaced mouse clicks with arrow key cell navigation",
        },
      },
      {
        keyword: {
          ko: "빠른 도메인 적응",
          en: "Fast Domain Adaptation",
        },
        note: {
          ko: "블록체인 → 공공기관 안전진단 SaaS까지, 새 도메인에서도 단기간 내 기여",
          en: "Contributed quickly across domains — from blockchain gaming to public-sector safety SaaS",
        },
      },
    ],
  },
  skills: {
    title: { ko: "Skills", en: "Skills" },
    primaryLabel: { ko: "주력 —", en: "Primary —" },
    appliedLabel: { ko: "활용 —", en: "Applied —" },
    exposureLabel: { ko: "경험 —", en: "Exposure —" },
    primary: ["JavaScript", "TypeScript", "React", "Next.js"],
    applied: [
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Sass",
      "Redux",
      "Cursor AI",
      "Web3.js",
    ],
    exposure: ["Supabase", "Monorepo"],
  },
  experience: {
    title: { ko: "Experience", en: "Experience" },
    achievementsLabel: {
      ko: "주요 성과 —",
      en: "Key Achievements —",
    },
    items: [
      {
        title: {
          ko: "Frontend Developer (프리랜서)",
          en: "Frontend Developer (Freelance)",
        },
        company: { ko: "엘림 주식회사", en: "Elim Inc." },
        period: { ko: "2026.01 ~ 2026.04", en: "Jan 2026 ~ Apr 2026" },
        description: {
          ko: "사내 안전진단 웹 기반 툴의 프론트엔드 개발 및 유지보수",
          en: "Frontend development and maintenance of in-house safety diagnosis web tool",
        },
        achievements: [
          {
            ko: "주요 페이지 번들 47~54% 감소 — bundle-analyzer로 병목 발견, dynamic import 적용",
            en: "Reduced bundle size by 47–54% — identified bottlenecks with bundle-analyzer, applied dynamic imports",
            link: "/blog/nextjs-bundle-size-optimization",
            linkLabel: {
              ko: "번들 최적화 과정 보기",
              en: "Read optimization story",
            },
          },
          {
            ko: "외주 레거시 코드를 컴포넌트 단위로 분리·리팩토링하여 유지보수성 개선",
            en: "Decomposed and refactored outsourced legacy code into component-based architecture",
          },
          {
            ko: "에너지 사용량 입력 UX 개선 — 마우스 클릭 이동 방식에서 방향키 셀 네비게이션으로 개선 (입력값 length 기반 커서 위치 계산으로 좌우 이동 구현)",
            en: "Improved energy input UX — Replaced mouse-click navigation with arrow key cell navigation (cursor positioning based on input value length)",
          },
          {
            ko: "react-konva 기반 도면 마커/결함 인터랙션 구현 — 더블클릭 마커 생성, 드래그 위치 이동, 드래그 종료 시 자동저장으로 UX 개선",
            en: "Implemented drawing marker/defect interaction with react-konva — double-click creation, drag repositioning, auto-save on drag end",
          },
        ],
        tech: [
          "TypeScript",
          "Next.js",
          "Zustand",
          "Tailwind CSS",
          "TanStack Query",
        ],
        link: "https://elimsafety.com/",
      },
      {
        title: { ko: "교육운영", en: "Education Operations" },
        company: {
          ko: "경기도경제과학진흥원",
          en: "Gyeonggi Business Science Accelerator",
        },
        period: { ko: "2025.05 ~ 2025.10", en: "May 2025 ~ Oct 2025" },
        description: {
          ko: "공기업 교육운영 계약직 — 비개발 직군과의 협업 및 기획 역량을 키운 경험",
          en: "Contract role at public institution — Gained cross-functional collaboration and planning skills",
        },
        achievements: [
          {
            ko: "교육 프로그램 기획·운영을 통해 비개발 직군과의 커뮤니케이션 역량 강화",
            en: "Strengthened communication skills with non-dev teams through program planning and operations",
          },
          {
            ko: "사업계획서 작성 참여로 서비스 기획 관점 확장",
            en: "Broadened service planning perspective by contributing to business proposals",
          },
        ],
        link: "https://www.gbsa.or.kr/",
      },
      {
        title: { ko: "Frontend Developer", en: "Frontend Developer" },
        company: { ko: "제프 (JEFF WORLD)", en: "JEFF WORLD" },
        period: { ko: "2023.08 ~ 2024.11", en: "Aug 2023 ~ Nov 2024" },
        description: {
          ko: "블록체인 기반 게임 플랫폼의 프론트엔드 개발",
          en: "Frontend development for blockchain-based gaming platform",
        },
        achievements: [
          {
            ko: "NFT 마켓플레이스·브릿지·트랜스퍼 프론트엔드 구현 — 지갑 연결, 트랜잭션 상태 처리(대기/성공/실패), 에러 메시지 분기로 사용자 송금/자산 이동 흐름 안정화",
            en: "Implemented frontend for NFT marketplace, bridge, and transfer flows — stabilized user asset transfer journeys with wallet connection, transaction state handling (pending/success/failure), and error-message branching",
          },
          {
            ko: "3~4개 독립 프로젝트를 모노레포로 통합하고, 공통 컴포넌트 10개+ 를 설계·문서 사이트로 제공하여 디자이너-개발자 간 협업 프로세스 개선",
            en: "Consolidated 3-4 independent projects into a monorepo and delivered 10+ shared components with a documentation site, improving designer-developer collaboration",
          },
          {
            ko: "다국어(i18n) 지원 구조 설계 및 적용 — 한/영 리소스를 공통 번역 객체로 분리해 화면별 텍스트 관리 일관성 확보",
            en: "Designed and applied an internationalization (i18n) structure — separated Korean/English resources into a shared translation object for consistent screen-level text management",
          },

          {
            ko: "블록체인 데이터 관리 백오피스 프론트엔드 개발 — ApexChart 기반 트랜잭션/지표 시각화 대시보드를 구현해 운영 데이터 모니터링 효율 개선",
            en: "Developed blockchain data management back-office frontend — built transaction/metrics visualization dashboards with ApexChart to improve operational monitoring efficiency",
          },
          {
            ko: "그랜드 오픈 홈페이지 리뉴얼 프론트엔드 전담 — 디자인 시안 기반 반응형 퍼블리싱 및 REST API 연동으로 오픈 일정 내 핵심 랜딩/콘텐츠 페이지 구축",
            en: "Led frontend development for the grand-opening homepage renewal — delivered responsive implementation from design specs and REST API integration to launch core landing/content pages on schedule",
          },
        ],
        tech: ["JavaScript", "React", "Redux", "Sass"],
        link: "https://jeffworld.io",
      },
    ],
  },
  education: {
    title: { ko: "Education", en: "Education" },
    educationLabel: { ko: "학력 —", en: "Education —" },
    awardsLabel: { ko: "수상 내역 —", en: "Awards —" },
    educations: [
      {
        institution: { ko: "상명대학교", en: "Sangmyung University" },
        major: {
          ko: "정보통신공학과",
          en: "Information & Telecommunications Engineering",
        },
        period: { ko: "2017.03 ~ 2023.02", en: "Mar 2017 ~ Feb 2023" },
        status: { ko: "졸업", en: "Graduated" },
      },
      {
        institution: { ko: "멋쟁이사자처럼", en: "Likelion" },
        major: {
          ko: "블록체인 스쿨 3기",
          en: "Blockchain School 3rd Cohort",
        },
        period: { ko: "2023.03 ~ 2023.07", en: "Mar 2023 ~ Jul 2023" },
        status: { ko: "수료", en: "Completed" },
      },
    ],
    awards: [
      {
        title: {
          ko: "멋쟁이사자처럼 블록체인스쿨 3기 대상",
          en: "Likelion Blockchain School 3rd - Grand Prize",
        },
        project: {
          ko: "INSURSAND - 디파이 보험 플랫폼",
          en: "INSURSAND - DeFi Insurance Platform",
        },
        year: "2023",
      },
      {
        title: {
          ko: "상명대학교 캡스톤 디자인 경진대회 최우수상",
          en: "Sangmyung Univ. Capstone Design - Excellence Award",
        },
        project: {
          ko: "P2D - 블록체인 기반 기부 플랫폼",
          en: "P2D - Blockchain-based Donation Platform",
        },
        year: "2022",
      },
      {
        title: {
          ko: "제 31회 광자기술 학술회의 우수 논문상",
          en: "31st Photonics Technology Conference - Best Paper Award",
        },
        project: {
          ko: "뉴럴네트워크를 이용한 물리 계층 보안 광전송 기술",
          en: "Physical Layer Security in Optical Transmission using Neural Networks",
        },
        year: "2022",
      },
      {
        title: {
          ko: "상명대학교 전공 소모임 장려상",
          en: "Sangmyung Univ. Major Club - Encouragement Award",
        },
        project: {
          ko: "도담도담 - 머신러닝 기반 식단 관리 앱",
          en: "Dodamdodam - ML-based Diet Management App",
        },
        year: "2021",
      },
    ],
  },
  projects: {
    title: { ko: "Projects", en: "Projects" },
    companyLabel: { ko: "회사 프로젝트 —", en: "Company Projects —" },
    teamLabel: { ko: "팀 프로젝트 —", en: "Team Projects —" },
    personalLabel: { ko: "개인 프로젝트 —", en: "Personal Projects —" },
    companyProjects: [
      {
        name: { ko: "Homepage Renewal", en: "Homepage Renewal" },
        description: {
          ko: "그랜드 오픈 일정에 맞춰 프론트엔드 전담 개발 — 디자인 시안 기반 반응형 구현 및 REST API 연동",
          en: "Led frontend development for grand opening — Responsive implementation from design specs with REST API integration",
        },
        tech: ["React", "JavaScript"],
        period: "2024",
      },
      {
        name: { ko: "JEFF Back Office", en: "JEFF Back Office" },
        description: {
          ko: "블록체인 트랜잭션 데이터를 ApexChart로 시각화한 내부 관리 백오피스 개발",
          en: "Developed internal back-office to visualize blockchain transaction data using ApexChart",
        },
        tech: ["React", "ApexChart"],
        period: "2024",
      },
      {
        name: { ko: "Common Component UI", en: "Common Component UI" },
        description: {
          ko: "10개+ 공통 컴포넌트를 설계하고 디자이너·개발자가 함께 참고할 수 있는 문서 사이트로 제공",
          en: "Designed 10+ shared components and published a documentation site for designers and developers",
        },
        tech: ["React", "JavaScript"],
        period: "2024",
      },
      {
        name: { ko: "JEFF World Blockchain", en: "JEFF World Blockchain" },
        description: {
          ko: "NFT 마켓플레이스, 브릿지 기능을 제공하는 블록체인 사이트",
          en: "Blockchain site with NFT marketplace and bridge features",
        },
        tech: ["React", "Web3.js", "Sass"],
        period: "2023 ~ 2024",
      },
      {
        name: { ko: "Free Minting Site", en: "Free Minting Site" },
        description: {
          ko: "사용자 민팅 여부 체크 및 트랜잭션 처리 이벤트 사이트",
          en: "Minting eligibility check and transaction handling event site",
        },
        tech: ["React", "Web3.js"],
        period: "2023",
      },
    ],
    teamProjects: [
      {
        name: { ko: "INSURSAND", en: "INSURSAND" },
        description: {
          ko: "디파이 보험 플랫폼 — 팀장으로서 기술 스택 선정·기획·프론트엔드 개발 전담. 부트캠프 대상 수상.",
          en: "DeFi insurance platform — Led team as tech lead: stack selection, planning, and full frontend development. Grand Prize winner.",
        },
        tech: ["React", "Solidity", "Web3.js", "Tailwind CSS"],
        period: "2023",
        award: { ko: "블록체인스쿨 대상", en: "Blockchain School Grand Prize" },
        link: "https://props-frontend-eta.vercel.app/",
        github: "https://github.com/INSURSAND/INSURSAND-Frontend-v1",
      },
      {
        name: { ko: "P2D (Play to Donate)", en: "P2D (Play to Donate)" },
        description: {
          ko: "블록체인 기반 기부 플랫폼 — 스마트 컨트랙트 및 블록 탐색기 개발",
          en: "Blockchain donation platform — Developed smart contracts and block explorer",
        },
        tech: ["Solidity", "Unity", "Web3.js"],
        period: "2022",
        award: { ko: "캡스톤 최우수상", en: "Capstone Excellence Award" },
        github: "https://github.com/6uamy/P2D",
      },
    ],
    personalProjects: [
      {
        name: { ko: "Resume", en: "Resume" },
        description: {
          ko: "직접 설계·개발한 이력서 웹사이트 — 한/영 전환(i18n), 다크모드, MDX 기반 블로그, PDF 출력까지 전 기능 단독 구현. 이력서 자체가 포트폴리오.",
          en: "Self-designed and built resume site — Solo implementation of i18n, dark mode, MDX blog, and PDF export. The resume itself is the portfolio.",
        },
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],
        period: "2026",
        link: "https://resume-seven-beige.vercel.app/",
        github: "https://github.com/Melonisjy/resume",
      },
      {
        name: { ko: "Nuvo", en: "Nuvo" },
        description: {
          ko: "Web2 사용자를 위한 토스 같은 Web3 송금 앱 - 구글 로그인으로 지갑 자동 생성, 닉네임으로 송금",
          en: "A Toss-like Web3 transfer app for Web2 users - wallet auto-created with Google login, transfer by nickname",
        },
        tech: ["Next.js", "TypeScript", "Privy", "viem", "Base", "Supabase"],
        period: "2026",
        status: { ko: "개발중", en: "In Dev" },
        link: "https://nuvo-pi.vercel.app/",
        github: "https://github.com/Melonisjy/nuvo",
      },
      {
        name: { ko: "킥-인 (KIKIN)", en: "KIKIN" },
        description: {
          ko: "풋살 팀 경기 일정 관리 웹앱 — 팀 생성/초대, 출석 투표, 공지사항, 실시간 알림",
          en: "Futsal team match management webapp — Team creation, attendance voting, announcements, real-time notifications",
        },
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "Cursor AI",
        ],
        period: "2025",
        status: { ko: "개발중", en: "In Dev" },
        link: "https://kikin-gules.vercel.app/",
        github: "https://github.com/Melonisjy/KIKIN",
      },
      {
        name: { ko: "운명가챠", en: "Fate Gacha" },
        description: {
          ko: "이름을 입력하면 내년 운명을 알려주는 모바일 웹앱",
          en: "Mobile webapp that tells your fate for next year by entering your name",
        },
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cursor AI"],
        period: "2025",
        link: "https://fategacha.vercel.app/",
        github: "https://github.com/Melonisjy/fategacha",
      },
      {
        name: { ko: "Melon NFT Marketplace", en: "Melon NFT Marketplace" },
        description: {
          ko: "개인 NFT 마켓플레이스 프로젝트",
          en: "Personal NFT marketplace project",
        },
        tech: ["React", "Web3.js", "Tailwind CSS"],
        period: "2023",
        link: "https://melonn-nft-market.vercel.app/",
        github: "https://github.com/Melonisjy/Melonn-NFTMarket",
      },
    ],
  },
  blog: {
    title: { ko: "Blog", en: "Blog" },
    tagline: {
      ko: "기술과 생각을 기록하는 공간",
      en: "A space for recording tech and thoughts",
    },
    techStack: "Next.js App Router · MDX · Static Generation",
    loading: { ko: "불러오는 중...", en: "Loading..." },
    recentLabel: { ko: "최근 글 —", en: "Recent —" },
    moreLink: { ko: "블로그 바로가기 →", en: "Visit Blog →" },
  },
  archive: {
    title: { ko: "Archive", en: "Archive" },
    description: {
      ko: "이전 플랫폼에서 작성한 글 —",
      en: "Posts from previous platforms —",
    },
  },
} as const;
