export type Language = "ko" | "en";

export const translations = {
  header: {
    name: {
      ko: ["이", "주", "열"],
      en: ["Joo", "yeol Lee"],
    },
    tagline: {
      ko: "UI/UX와 성능 최적화를 함께 고려하고, \n 새로운 도메인에서도 빠르게 적응하여 \n 운영 비용까지 줄이는 개발을 지향합니다..",
      en: "I consider both UI/UX and performance optimization together, \n adapt quickly even in unfamiliar domains, \n and pursue development that reduces operational costs as well.",
    },
    awards: [
      {
        ko: "블록체인스쿨 3기 대상",
        en: "Blockchain School Grand Prize",
        year: "2023",
      },
      {
        ko: "캡스톤 최우수상",
        en: "Capstone Excellence Award",
        year: "2022",
      },
    ],
  },
  /*
  about: {
    title: { ko: "About", en: "About" },
    intro: {
      ko: "UI/UX와 성능 최적화를 함께 고려하고, \n 새로운 도메인에서도 빠르게 적응하여 \n 운영 비용까지 줄이는 개발을 지향합니다.",
      en: "A frontend engineer across blockchain and SaaS—I ground performance in measurable outcomes.\nAt JEFF, I designed a monorepo and shared components; at Elim, a safety-diagnosis SaaS, I cut key page bundles <strong>47–54%</strong> in Next.js with bundle-analyzer and dynamic imports.\nI led performance tuning and structural refactors that reduced load and operational cost.\nI weigh UX and business impact together when prioritizing, and I gravitate to work like bundle optimization that improves perceived speed and cost at once.",
    },
  },
  */
  skills: {
    title: { ko: "Skills", en: "Skills" },
    categories: [
      {
        label: { ko: "언어", en: "Language" },
        items: ["JavaScript", "TypeScript"],
      },
      {
        label: { ko: "프레임워크", en: "Framework" },
        items: ["React", "Next.js"],
      },
      {
        label: { ko: "스타일", en: "Style" },
        items: ["Tailwind CSS", "Sass"],
      },
      {
        label: { ko: "상태관리", en: "State" },
        items: ["Zustand", "TanStack Query", "Redux"],
      },
    ],
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
          en: "Frontend development and maintenance for an in-house web-based safety diagnosis tool",
        },
        achievements: [
          {
            ko: "<strong>bundle-analyzer</strong>로 @fullcalendar·konva 병목을 발견하여 성능을 개선하였습니다. (번들 사이즈 약 50% 감소)</strong><br /> 불필요한 페이지까지 동일 청크로 묶이던 문제가 원인이었고, 배포 속도도 개선되었습니다 (팀 피드백 기반).",
            en: "I identified @fullcalendar/Konva bottlenecks with <strong>bundle-analyzer</strong> and applied dynamic imports, reducing key page bundles by <strong>47–54%</strong>. The root issue was shared chunks being loaded on unnecessary pages after outsourcing, and perceived speed and deploy efficiency improved as well (based on team feedback).",
            link: "/blog/nextjs-bundle-size-optimization",
            linkLabel: {
              ko: "번들 최적화 과정 보기",
              en: "Read optimization story",
            },
          },
          {
            ko: "<strong>기능 단위 컴포넌트로 분리·리팩토링해 수정 범위를 평균 3~4개 → 1개 수준으로 줄였습니다.</strong><br /> 외주 단일 파일에 UI·로직·API가 혼재해 사이드이펙트가 잦았던 게 배경이었고, PR을 통해 기준을 공유하여 이후 수정과 온보딩 비용도 낮췄습니다.",
            en: "<strong>I refactored into feature-level components and reduced the average edit scope from ~3–4 files to ~1</strong> (estimate). The legacy outsourced file mixed UI, logic, and API concerns, which caused frequent side effects, so I documented boundaries in PRs and reviews to lower follow-on change and onboarding cost.",
          },
          {
            ko: "<strong>방향키 셀 네비게이션과 length 기반 커서 위치 계산을 적용해 반복 입력 속도를 높였습니다.</strong><br /> 현장에서 에너지 사용량을 입력할 때 마우스 이동이 병목이었고, 손을 키보드에 고정하도록 UX를 조정해 입력이 수월해졌다는 피드백을 받았습니다.",
            en: "<strong>I improved repeated-entry speed by adding arrow-key cell navigation and length-based caret positioning.</strong> Mouse movement was the bottleneck in field energy-input workflows, so I kept users on the keyboard and confirmed smoother input flow through field and team feedback.",
          },
          {
            ko: "<strong>react-konva에서 더블클릭 생성·드래그 이동·드래그 종료 자동저장을 구현해 마커 작업 흐름을 안정화했습니다.</strong><br /> 캔버스 좌표 계산과 Konva·앱 상태 동기화가 어긋나던 문제가 배경이었고, 수동 저장 단계를 줄여 작업이 자연스럽게 이뤄지도록 하였습니다.",
            en: "<strong>I stabilized marker workflows by implementing double-click create, drag move, and auto-save on drag end with react-konva.</strong> This addressed drift between canvas coordinates and Konva/app state sync, and removing manual save steps preserved task continuity.",
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
      /*
       * 경기도경제과학진흥원 (2025.05 ~ 2025.10) — JEFF 종료(2024.11)와 엘림 시작(2026.01) 사이 타임라인이 복잡해 보일 수 있어 [옵션 A] 비노출 적용.
       * [옵션 B] 복구: 아래 객체를 `experience.items` 안에 원하는 순서로 다시 넣고 콤마만 맞추면 됩니다.
       * {
       *   title: { ko: "교육운영", en: "Education Operations" },
       *   company: {
       *     ko: "경기도경제과학진흥원",
       *     en: "Gyeonggi Business Science Accelerator",
       *   },
       *   period: { ko: "2025.05 ~ 2025.10", en: "May 2025 ~ Oct 2025" },
       *   description: {
       *     ko: "교육 운영 계약직 — 비개발 직군 협업 및 사업계획서 작성 참여 (개발 경력과 무관)",
       *     en: "Education operations contract — Collaboration with non-developers and business-proposal work (non-engineering)",
       *   },
       *   link: "https://www.gbsa.or.kr/",
       * },
       */
      {
        title: { ko: "Frontend Developer", en: "Frontend Developer" },
        company: { ko: "제프 (JEFF WORLD)", en: "JEFF WORLD" },
        period: { ko: "2023.08 ~ 2024.11", en: "Aug 2023 ~ Nov 2024" },
        description: {
          ko: "블록체인 기반 게임 플랫폼 프론트엔드 · NFT 마켓플레이스·모노레포·공통 컴포넌트 주도",
          en: "Frontend development for a blockchain gaming platform — led NFT marketplace work, monorepo adoption, and a shared component system",
        },
        achievements: [
          {
            ko: "<strong>트랜잭션의 대기(pending)·성공·실패를 명확히 분기하고 실패 유형별 에러 메시지를 나눠</strong> 자산 이동 흐름을 안정화했습니다.",
            en: "<strong>I clearly separated pending/success/failure states and split error messages by failure type</strong>, stabilizing asset-transfer flows across the NFT marketplace, bridge, and transfer products. This was critical because on-chain transactions are irreversible and state misunderstanding can directly create asset risk.",
          },
          {
            ko: "<strong>모노레포로 통합하고 10개 이상의 공통 컴포넌트를 설계해</strong> 디자이너·개발자 핸드오프 비용과 반복 작업을 줄였습니다.",
            en: "<strong>I consolidated projects into a monorepo and designed 10+ shared components</strong>, reducing designer-developer handoff cost along with clarifications and rework. The change addressed accumulated code duplication and UI inconsistency across 3–4 separate projects.",
          },
          {
            ko: "<strong>i18n 구조를 도입해 텍스트 변경의 단일 출처를 만들었습니다.</strong><br /> 신규 화면에도 같은 패턴을 적용해 관리 일관성과 유지보수성을 높였습니다.",
            en: "<strong>I introduced a shared Korean/English translation-object i18n structure as a single source of truth for copy updates.</strong> This solved omission and inconsistency risks from per-screen hardcoded strings, and applying the same pattern to new screens improved consistency and maintainability.",
          },
          {
            ko: "<strong>ApexChart 기반 백오피스 대시보드를 구축해 운영팀의 모니터링 효율을 높였습니다.</strong><br />트랜잭션 지표를 빠르게 확인할 수 있었다는 피드백을 받았습니다.",
            en: "<strong>I built an ApexChart-based back-office dashboard that improved the operations team's monitoring efficiency.</strong> The team reported that transaction metrics became faster and easier to check.",
          },
          {
            ko: "<strong>그랜드 오픈 일정 내 랜딩·상점 구매·REST API 연동 등 우선순위를 정하여 기한 내 개발했습니다.</strong><br /> 일정 제약이 큰 상황에서 브레이크포인트별 타이포 및 여백 스케일을 맞춰 반응형 레이아웃도 함께 작업하였습니다.",
            en: "<strong>I prioritized landing, core content, and REST API integration to ship critical pages within the grand-opening deadline.</strong> Under tight schedule constraints, I also tuned breakpoint-based typography and spacing to keep responsive layouts stable.",
          },
          {
            ko: "<strong>모노레포와 공통 컴포넌트 문서 사이트를 팀의 기본 개발 기준으로 정착시켜 중복 구현을 줄였습니다.</strong><br /> 약 1년 3개월 동안 신규 기능 개발 시 카탈로그를 먼저 확인하는 흐름을 만들었고, 팀의 작업 방식이 일관되게 자리 잡도록 기여했습니다.",
            en: "<strong>I established the monorepo and shared component docs as the team’s default development baseline, reducing duplicate implementations.</strong> Over about fifteen months, I reinforced a catalog-first workflow for new features and helped standardize how the frontend team built UI.",
          },
        ],
        tech: ["JavaScript", "React", "Redux", "Sass", "Web3.js"],
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
          en: "Likelion Blockchain School 3rd / Grand Prize",
        },
        project: {
          ko: "INSURSAND · 디파이 보험 플랫폼",
          en: "INSURSAND / DeFi Insurance Platform",
        },
        year: "2023",
      },
      {
        title: {
          ko: "상명대학교 캡스톤 디자인 경진대회 최우수상",
          en: "Sangmyung Univ. Capstone Design / Excellence Award",
        },
        project: {
          ko: "P2D · 블록체인 기반 기부 플랫폼",
          en: "P2D / Blockchain-based Donation Platform",
        },
        year: "2022",
      },
      {
        title: {
          ko: "제 31회 광자기술 학술회의 우수 논문상",
          en: "31st Photonics Technology Conference / Best Paper Award",
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
          en: "Sangmyung Univ. Major Club / Encouragement Award",
        },
        project: {
          ko: "도담도담 · 머신러닝 기반 식단 관리 앱",
          en: "Dodamdodam / ML-based Diet Management App",
        },
        year: "2021",
      },
    ],
  },
  projects: {
    title: { ko: "Projects", en: "Projects" },
    featuredLabel: { ko: "핵심 프로젝트 —", en: "Featured —" },
    otherLabel: { ko: "기타 프로젝트 —", en: "Other Projects —" },
    featuredProjects: [
      {
        name: { ko: "INSURSAND", en: "INSURSAND" },
        description: {
          ko: "블록체인 자산 폭락을 보며 온체인 보험의 필요성을 직접 느껴 시작했습니다. \n 스마트컨트랙트 상태는 Web3.js로, 화면·피드백은 React로 분리해 복잡한 로직을 사용자가 오해 없이 쓰도록 설계했습니다.",
          en: "After seeing sharp drops in blockchain assets, I started this project to address the need for on-chain insurance. \n I used Web3.js for smart-contract state handling and React for UI and feedback, so users could work through complex logic without confusion.",
        },
        tech: ["React", "Solidity", "Web3.js", "Tailwind CSS"],
        period: "2023",
        award: {
          ko: "블록체인스쿨 3기 대상",
          en: "Blockchain School Grand Prize",
        },
        link: "https://props-frontend-eta.vercel.app/",
        github: "https://github.com/INSURSAND/INSURSAND-Frontend-v1",
      },
      {
        name: { ko: "킥-인 (KIKIN)", en: "KIKIN" },
        description: {
          ko: "친구들과 풋살 일정을 카톡 대신 전용 앱으로 관리하고 싶어 만들어본 사이드 프로젝트입니다. \n Supabase Realtime으로 일정 및 공지를 실시간으로 공유하고 팀 생성 및 출석 투표 기능을 개발하였습니다.",
          en: "I built this side project because my friends and I wanted to manage futsal schedules in a dedicated app instead of KakaoTalk. \n Using Supabase Realtime, I implemented live schedule/announcement sharing, team creation, and attendance voting.",
        },
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "Cursor AI",
        ],
        period: "2025",
        status: { ko: "개발 중", en: "In development" },
        link: "https://kikin-gules.vercel.app/",
        github: "https://github.com/Melonisjy/KIKIN",
      },
      {
        name: { ko: "Resume", en: "Resume" },
        description: {
          ko: "i18n, MDX 블로그, @media print PDF 출력까지 한 흐름으로 구현한 이력서 페이지입니다.",
          en: "A resume page built as one cohesive flow, including i18n, an MDX blog, and PDF output with @media print.",
        },
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],
        period: "2026",
        link: "https://resume-seven-beige.vercel.app/",
        github: "https://github.com/Melonisjy/resume",
      },
    ],
    otherProjects: [
      {
        name: { ko: "P2D (Play to Donate)", en: "P2D (Play to Donate)" },
        description: {
          ko: "블록체인 기반 기부 플랫폼 · 캡스톤 최우수상. 스마트컨트랙트·블록 탐색기 구현.",
          en: "Blockchain donation platform / capstone excellence award. Smart contracts and block explorer.",
        },
        tech: ["Solidity", "Unity", "Web3.js"],
        period: "2022",
        award: { ko: "캡스톤 최우수상", en: "Capstone Excellence Award" },
        github: "https://github.com/6uamy/P2D",
      },
      {
        name: { ko: "Nuvo", en: "Nuvo" },
        description: {
          ko: "Web2 사용자용 닉네임 기반 Web3 송금 앱(Privy·Base·Supabase) · 개발 중.",
          en: "Nickname-based Web3 transfers for Web2 users (Privy, Base, Supabase), in development.",
        },
        tech: ["Next.js", "TypeScript", "Privy", "viem", "Base", "Supabase"],
        period: "2026",
        status: { ko: "개발 중", en: "In development" },
        link: "https://nuvo-pi.vercel.app/",
        github: "https://github.com/Melonisjy/nuvo",
      },
      {
        name: { ko: "Free Minting Site", en: "Free Minting Site" },
        description: {
          ko: "이벤트용 무료 민팅 자격 확인 및 온체인 민팅 처리 페이지 · React·Web3.js.",
          en: "Event page for free-mint eligibility and on-chain mint handling / React, Web3.js.",
        },
        tech: ["React", "Web3.js"],
        period: "2023",
      },
    ],
  },
  blog: {
    title: { ko: "Blog", en: "Blog" },
    tagline: {
      ko: "기술과 생각을 기록하는 공간",
      en: "A space for recording tech and thoughts",
    },
    /** @see blogLinks — 홈 섹션 카드용. 인쇄 미리보기·배너와 동일 호스트 권장 */
    techStack: "Next.js App Router · MDX · Static Generation",
    blogLinks: [
      {
        name: { ko: "기술 블로그", en: "Tech Blog" },
        description: {
          ko: "Next.js · MDX · 정적 생성 기반",
          en: "Next.js · MDX · static-generation stack",
        },
        href: "https://resume-seven-beige.vercel.app/blog",
      },
      {
        name: { ko: "Velog", en: "Velog" },
        description: {
          ko: "부트캠프·커리어 초기 기록 · 블록체인 개발",
          en: "Bootcamp & early career posts · blockchain dev",
        },
        href: "https://velog.io/@meloncoder/posts",
      },
    ],
    /** 홈 이력서에서는 미사용. 블로그/다른 UI에서 최근 글 목록으로 재사용 가능 */
    recentPostsPreview: [
      {
        slug: "nuvo-nickname-transfer-sepolia-testnet",
        title: "Nuvo에서 닉네임으로 송금하기 (feat. sepolia testnet)",
        date: "2026-03-24",
        category: "tech",
      },
      {
        slug: "nextjs-bundle-size-optimization",
        title: "Next.js 번들 사이즈 줄이기 — bundle-analyzer, dynamic import",
        date: "2026-03-19",
        category: "tech",
      },
      {
        slug: "browser-rendering-slow-devtools-observer-effect",
        title: "브라우저 렌더링 속도가 간헐적으로 느렸던 이유",
        date: "2026-03-18",
        category: "tech",
      },
    ],
    loading: { ko: "불러오는 중...", en: "Loading..." },
    recentLabel: { ko: "최근 글 —", en: "Recent —" },
    moreLink: { ko: "블로그 바로가기 →", en: "Visit Blog →" },
  },
} as const;
