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
      ko: "사용자 경험을 중심으로 웹 서비스를 구현하는 프론트엔드 개발자입니다.\n처음 개발 회사에 들어가고, 방황하던 시기도 있었습니다.\n다른 일을 경험하고 돌아왔을 때, 무언가 만드는 일이 가장 즐겁다는 걸 확실히 알게 됐습니다.\n돌아와서 느낀 그 확신이, 지금의 원동력입니다.",
      en: "A frontend developer who builds web services with a focus on user experience.\nAfter joining my first dev company, there was a time I wandered.\nBut after stepping away and coming back, I realized that building things is what truly excites me.\nThat conviction I found is what drives me now.",
    },
    values: [
      {
        keyword: {
          ko: "사용자 피드백 기반 개선",
          en: "User Feedback-Driven Improvement",
        },
        note: {
          ko: "현장 사용자의 피드백을 직접 반영해 UI를 개선합니다",
          en: "Directly incorporates field user feedback to improve UI",
        },
      },
      {
        keyword: {
          ko: "레거시 코드를 두려워하지 않는 것",
          en: "Not Afraid of Legacy Code",
        },
        note: {
          ko: "외주 코드 리팩토링으로 유지보수성을 높인 경험이 있습니다",
          en: "Experienced in refactoring outsourced code to improve maintainability",
        },
      },
      {
        keyword: {
          ko: "재사용 가능한 구조 설계",
          en: "Designing Reusable Architecture",
        },
        note: {
          ko: "모노레포 환경에서 공통 컴포넌트 10개+를 설계하고 문서 사이트로 팀에 제공했습니다",
          en: "Designed 10+ shared components in a monorepo and published them as a documentation site for the team",
        },
      },
      {
        keyword: {
          ko: "빠른 도메인 적응력",
          en: "Quick Domain Adaptability",
        },
        note: {
          ko: "블록체인부터 안전진단까지, 새로운 도메인에 빠르게 적응합니다",
          en: "Quickly adapts to new domains, from blockchain to safety diagnostics",
        },
      },
      {
        keyword: {
          ko: "팀 컨벤션과 규칙을 만드는 것",
          en: "Establishing Team Conventions",
        },
        note: {
          ko: "커밋 메시지, 브랜치 네이밍, 개발 규칙을 정하고 지키는 걸 좋아합니다",
          en: "Enjoys defining and following commit messages, branch naming, and dev rules",
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
        title: { ko: "Frontend Developer", en: "Frontend Developer" },
        company: { ko: "엘림 주식회사", en: "Elim Inc." },
        period: { ko: "2026.01 ~", en: "Jan 2026 ~ Present" },
        description: {
          ko: "사내 안전진단 웹 기반 툴의 프론트엔드 개발 및 유지보수",
          en: "Frontend development and maintenance of in-house safety diagnosis web tool",
        },
        achievements: [
          {
            ko: "외주 레거시 코드를 컴포넌트 단위로 분리·리팩토링하여 유지보수성 개선",
            en: "Decomposed and refactored outsourced legacy code into component-based architecture",
          },
          {
            ko: "현장 안전진단 담당자의 피드백을 직접 반영한 UI/UX 개선",
            en: "Improved UI/UX by directly incorporating feedback from field safety inspectors",
          },
          {
            ko: "백엔드 개발자와 API 설계 단계부터 협업하여 주요 화면 구현",
            en: "Implemented key screens by collaborating with backend developers from API design stage",
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
            ko: "NFT 마켓플레이스·브릿지·트랜스퍼 등 블록체인 서비스 프론트엔드 개발",
            en: "Developed frontend for blockchain services including NFT marketplace, bridge, and transfer",
          },
          {
            ko: "3~4개 독립 프로젝트를 모노레포로 통합하고, 공통 컴포넌트 10개+ 를 설계·문서 사이트로 제공하여 디자이너-개발자 간 협업 프로세스 개선",
            en: "Consolidated 3-4 independent projects into a monorepo and delivered 10+ shared components with a documentation site, improving designer-developer collaboration",
          },

          {
            ko: "블록체인 데이터 관리 및 시각화를 위한 백오피스 프론트엔드 개발",
            en: "Developed back-office frontend for blockchain data management and visualization",
          },
          {
            ko: "그랜드 오픈을 위한 홈페이지 리뉴얼 프론트엔드 전담 개발",
            en: "Led frontend development for homepage renewal ahead of grand opening",
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
