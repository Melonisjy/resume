export type Language = "ko" | "en";

export const translations = {
  header: {
    name: {
      ko: ["이", "주", "열"],
      en: ["Joo", "yeol Lee"],
    },
    subtitle: {
      ko: "사용자 경험을 중심으로 웹 서비스를 구현하는 프론트엔드 개발자입니다.",
      en: "A frontend developer who builds web services with a focus on user experience.",
    },
  },
  about: {
    title: { ko: "About", en: "About" },
    values: [
      {
        keyword: {
          ko: "더 나은 사용자경험",
          en: "Better User Experience",
        },
        note: {
          ko: "UX를 위해 끊임없이 고민합니다",
          en: "Constantly striving for better UX",
        },
      },
      {
        keyword: {
          ko: "사용자 관점에서 서비스 바라보기",
          en: "Seeing Services from the User's Perspective",
        },
        note: {
          ko: "항상 사용자 입장에서 생각합니다",
          en: "Always thinking from the user's point of view",
        },
      },
      {
        keyword: {
          ko: "함께 성장하는 것에 즐거움",
          en: "Joy in Growing Together",
        },
        note: {
          ko: "팀과 함께 나아가는 것을 좋아합니다",
          en: "Love moving forward with the team",
        },
      },
      {
        keyword: {
          ko: "깔끔하고 직관적인 것",
          en: "Clean and Intuitive",
        },
        note: {
          ko: "군더더기 없는 인터페이스를 추구합니다",
          en: "Pursuing interfaces without unnecessary complexity",
        },
      },
      {
        keyword: {
          ko: "팀원들과의 소통",
          en: "Communication with Teammates",
        },
        note: {
          ko: "좋은 결과는 좋은 소통에서 나옵니다",
          en: "Great results come from great communication",
        },
      },
    ],
  },
  skills: {
    title: { ko: "Skills", en: "Skills" },
    mainLabel: {
      ko: "주로 사용하는 기술 —",
      en: "Main Stack —",
    },
    subLabel: {
      ko: "함께 사용하는 것들 —",
      en: "Also Working With —",
    },
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
            ko: "외주 레거시 코드 리팩토링 및 유지보수성 개선",
            en: "Refactored outsourced legacy code, improving maintainability",
          },
          {
            ko: "사용자 피드백 기반 UI/UX 개선 작업 진행",
            en: "Improved UI/UX based on user feedback",
          },
          {
            ko: "백엔드 협업을 통한 API 연동 및 화면 구현",
            en: "API integration and screen implementation through backend collaboration",
          },
        ],
        tech: [
          "TypeScript",
          "Next.js",
          "Zustand",
          "Tailwind CSS",
          "TanStack Query",
        ],
      },
      {
        title: { ko: "교육운영", en: "Education Operations" },
        company: {
          ko: "경기도경제과학진흥원",
          en: "Gyeonggi Economic Science Promotion Agency",
        },
        period: { ko: "2025.05 ~ 2025.10", en: "May 2025 ~ Oct 2025" },
        description: {
          ko: "공기업 교육운영직무 (계약직)",
          en: "Education operations at public institution (Contract)",
        },
        achievements: [
          {
            ko: "교육 프로그램 기획 및 운영 담당",
            en: "Planned and managed education programs",
          },
          {
            ko: "내년도 사업계획서 작성 참여",
            en: "Participated in writing next year's business plan",
          },
          {
            ko: "교육생 관리 및 교육 효과 분석",
            en: "Managed trainees and analyzed education effectiveness",
          },
        ],
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
            ko: "NFT 마켓플레이스, 브릿지, 전송 기능 개발",
            en: "Developed NFT marketplace, bridge, and transfer features",
          },
          {
            ko: "모노레포 환경 구축 및 공통 컴포넌트 라이브러리 설계",
            en: "Set up monorepo and designed shared component library",
          },
          {
            ko: "백오피스 프론트엔드 개발",
            en: "Developed back-office frontend",
          },
          {
            ko: "홈페이지 리뉴얼 프로젝트 참여",
            en: "Participated in homepage renewal project",
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
    statusDev: { ko: "개발중", en: "In Dev" },
    companyProjects: [
      {
        name: { ko: "Homepage Renewal", en: "Homepage Renewal" },
        description: {
          ko: "그랜드 오픈을 위한 리뉴얼 홈페이지, API 연동 작업",
          en: "Renewed homepage for grand opening with API integration",
        },
        tech: ["React", "JavaScript"],
        period: "2024",
      },
      {
        name: { ko: "JEFF Back Office", en: "JEFF Back Office" },
        description: {
          ko: "블록체인 데이터 관리 및 시각화 백오피스",
          en: "Blockchain data management and visualization back office",
        },
        tech: ["React", "ApexChart"],
        period: "2024",
      },
      {
        name: { ko: "Common Component UI", en: "Common Component UI" },
        description: {
          ko: "팀 내부 공통 컴포넌트 라이브러리 및 문서 사이트",
          en: "Internal shared component library and documentation site",
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
          ko: "디파이 보험 플랫폼 — 팀장으로서 기획 및 프론트엔드 개발",
          en: "DeFi insurance platform — Led as team leader, planned and developed frontend",
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
  contact: {
    title: { ko: "Contact", en: "Contact" },
  },
} as const;
