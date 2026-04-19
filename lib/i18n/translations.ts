export type Language = "ko" | "en";

export const translations = {
  header: {
    name: {
      ko: ["이", "주", "열"],
      en: ["Joo", "yeol Lee"],
    },
    awards: [
      {
        ko: "블록체인스쿨 3기 대상",
        en: "Blockchain School Grand Prize",
        year: "2023",
      },
      {
        ko: "캡스톤 최우수상",
        en: "Capstone Best Award",
        year: "2022",
      },
    ],
  },
  about: {
    title: { ko: "About", en: "About" },
    intro: {
      ko: "블록체인·SaaS를 아우르며, 성능을 수치로 다루는 프론트엔드입니다.\n블록체인 플랫폼(JEFF)에서는 모노레포와 공통 컴포넌트를 설계했고, 안전진단 SaaS(엘림)에서는 Next.js에서 bundle-analyzer와 dynamic import로 주요 페이지 번들을 <strong>47~54%</strong> 줄였습니다.\n성능 최적화와 구조 정리로 로딩·운영 비용을 낮추는 일을 주도했습니다.\nUX와 비즈니스 가치를 함께 두고 우선순위를 정하며, 번들 최적화처럼 체감 속도와 운영 비용을 동시에 줄이는 작업을 선호합니다.",
      en: "A frontend engineer across blockchain and SaaS—I ground performance in measurable outcomes.\nAt JEFF, I designed a monorepo and shared components; at Elim, a safety-diagnosis SaaS, I cut key page bundles <strong>47–54%</strong> in Next.js with bundle-analyzer and dynamic imports.\nI led performance tuning and structural refactors that reduced load and operational cost.\nI weigh UX and business impact together when prioritizing, and I gravitate to work like bundle optimization that improves perceived speed and cost at once.",
    },
  },
  skills: {
    title: { ko: "Skills", en: "Skills" },
    primaryLabel: { ko: "주력 —", en: "Primary —" },
    appliedLabel: { ko: "활용 —", en: "Applied —" },
    exposureLabel: { ko: "경험 —", en: "Exposure —" },
    primary: ["JavaScript", "TypeScript", "React", "Next.js"],
    applied: {
      ko: [
        "Zustand (엘림)",
        "TanStack Query (엘림)",
        "Tailwind CSS (엘림·킥-인)",
        "Sass (JEFF)",
        "Redux (JEFF)",
        "Cursor AI (킥-인·Nuvo)",
        "Web3.js (JEFF)",
      ],
      en: [
        "Zustand (Elim)",
        "TanStack Query (Elim)",
        "Tailwind CSS (Elim, KIKIN)",
        "Sass (JEFF)",
        "Redux (JEFF)",
        "Cursor AI (KIKIN, Nuvo)",
        "Web3.js (JEFF)",
      ],
    },
    exposure: {
      ko: ["Supabase (킥-인·Nuvo)", "Monorepo (JEFF)"],
      en: ["Supabase (KIKIN, Nuvo)", "Monorepo (JEFF)"],
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
        title: {
          ko: "Frontend Developer (프리랜서)",
          en: "Frontend Developer (Freelance)",
        },
        company: { ko: "엘림 주식회사", en: "Elim Inc." },
        period: { ko: "2026.01 ~ 2026.04", en: "Jan 2026 ~ Apr 2026" },
        description: {
          ko: "사내 안전진단 웹 기반 툴의 프론트엔드 개발 및 유지보수 · 프로젝트 단위 계약 · 성과 중심 참여",
          en: "Frontend development and maintenance of in-house safety diagnosis web tool — project-based contract, outcome-focused engagement",
        },
        achievements: [
          {
            ko: "외주 도입 후 배포·초기 로딩 부담이 커졌고, <strong>bundle-analyzer</strong>로 @fullcalendar·konva 병목(불필요한 페이지까지 동일 청크)을 확인했습니다. dynamic import 적용 후 주요 페이지 번들이 <strong>47~54% 감소</strong>했고, 체감 속도·배포 효율은 (팀 피드백 기반)으로 개선되었습니다.",
            en: "Post-outsourcing deploy and first-load strain: with <strong>bundle-analyzer</strong>, I found an @fullcalendar/Konva bottleneck in shared chunks. I split them with dynamic import and cut key page bundles <strong>47–54%</strong>, with perceived speed and deploy gains (based on team feedback).",
            link: "/blog/nextjs-bundle-size-optimization",
            linkLabel: {
              ko: "번들 최적화 과정 보기",
              en: "Read optimization story",
            },
          },
          {
            ko: "외주 단일 파일에 UI·로직·API가 혼재해 수정 시 사이드이펙트가 잦았습니다. 기능 단위 컴포넌트로 분리·리팩토링해 한 번의 변경이 건드리는 파일 수를 평균 <strong>3~4개에서 1개 수준</strong>으로 줄였습니다(추정). PR 설명·리뷰로 분리 기준과 영향 범위를 공유해 이후 수정·온보딩 비용을 낮췄습니다.",
            en: "Outsourced legacy mixed UI, logic, and API in one file, causing frequent side effects on edits. I split and refactored by feature into components, narrowing typical touch scope from <strong>~3–4 files to ~1</strong> (estimate). I shared boundaries and impact via PR notes and reviews to lower follow-on change and onboarding cost.",
          },
          {
            ko: "현장에서 에너지 사용량을 반복 입력할 때 마우스 이동이 속도를 떨어뜨렸습니다. <strong>방향키 셀 네비게이션</strong>과 입력값 length 기반 커서 위치 계산으로 손을 키보드에 고정했고, 입력이 수월해졌다는 반응은 현장·팀 피드백 기반으로 정리했습니다.",
            en: "Field users slowed down moving the mouse for repeated energy inputs. I added <strong>arrow-key cell navigation</strong> with length-based caret positioning to keep hands on the keyboard, and I summarized the smoother input flow from field and team feedback.",
          },
          {
            ko: "캔버스 좌표 계산과 Konva·앱 상태 동기화가 어긋나면 도면 마커·결함 표시 위치와 저장 타이밍이 흔들리는 과제가 있었습니다. react-konva로 더블클릭 마커 생성·드래그 이동을 구현하고 <strong>드래그 종료 시 자동저장</strong>해 수동 저장 단계를 줄여 작업 맥락이 끊기지 않도록 했습니다.",
            en: "Canvas coordinate math and Konva–app state sync were fragile for marker/defect placement and save timing. I built react-konva interactions—double-click create, drag move—with <strong>auto-save on drag end</strong> to cut manual saves and preserve task flow.",
          },
          {
            ko: "레거시 개선과 번들 작업의 배경·측정 방법·되돌릴 때 확인할 지점을 팀 채널과 짧은 정리 글로 남겨, 지식이 개별 작업 단위에만 묶이지 않게 했습니다. 이후 유지보수나 온보딩에서 ‘왜 이렇게 바뀌었는지’를 같은 출처에서 찾을 수 있게 한 것이 조직 차원의 기여였습니다.",
            en: "I documented the context behind legacy refactors and bundle work—what we measured, what we watched for regressions—in team channels and short write-ups so it lived beyond one-off tasks. That gave the org a durable reference for later maintenance and onboarding, not just isolated change lists.",
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
          en: "Blockchain gaming platform frontend — Led NFT marketplace work, monorepo adoption, and shared component system",
        },
        achievements: [
          {
            ko: "블록체인 트랜잭션은 <strong>되돌릴 수 없어</strong>, 일반 API보다 사용자가 상태를 오해할 때 자산 위험으로 직결됩니다. 그래서 <strong>대기·성공·실패</strong>를 명확히 분기하고 실패 유형별 에러 메시지를 나눠 다음 조치를 판단할 수 있게 했습니다. NFT 마켓플레이스·브릿지·트랜스퍼에서 지갑 연결과 송금·자산 이동 흐름을 이 기준으로 안정화했습니다.",
            en: "On-chain transactions are <strong>irreversible</strong>, so misunderstood states carry higher asset risk than typical REST flows. I split <strong>pending/success/failure</strong> explicitly and branched error copy by failure type so users could decide their next step. Applied that model across the NFT marketplace, bridge, and transfer UIs with wallet connect to stabilize send and asset-move journeys.",
          },
          {
            ko: "3~4개 독립 프로젝트에서 코드 중복과 디자인 불일치로 유지보수·협업 비용이 커졌습니다. 모노레포로 소스를 통합하고 <strong>10개 이상의 공통 컴포넌트</strong>를 설계했으며, 규격을 한곳에서 확인할 수 있는 문서 사이트를 제공해 디자이너·개발자 핸드오프 비용과 질의·재작업을 줄였습니다.",
            en: "Across 3–4 standalone projects, duplicated code and drifting UI drove up maintenance and collaboration cost. I consolidated into a monorepo, designed <strong>10+ shared components</strong>, and shipped a documentation site as a single spec source—lowering designer–developer handoff cost and the volume of clarifications and rework.",
          },
          {
            ko: "화면별 하드코딩 텍스트는 다국어 대응 시 누락·표현 불일치 위험이 컸습니다. 한·영 리소스를 공통 번역 객체로 모아 단일 출처에서 갱신하도록 i18n 구조를 설계·적용했습니다. 신규 화면에도 동일 패턴을 적용해 텍스트 관리 일관성과 유지보수성을 함께 확보했습니다.",
            en: "Per-screen hardcoded strings risked omissions and inconsistent copy when scaling to multiple locales. I structured i18n around a shared translation object for Korean and English so updates lived in one place. Rolled the same pattern to new screens to keep text management consistent and easier to maintain.",
          },
          {
            ko: "운영팀은 트랜잭션 시계열과 여러 지표를 한 화면에서 빠르게 읽어야 했습니다. <strong>ApexChart</strong>는 라인·바·영역 등 차트 유형을 조합해 블록체인 데이터 특성에 맞는 뷰를 구성하기 쉬워 선택했습니다. 백오피스 대시보드 도입 후 운영팀 셀프 점검이 가능해지면서 모니터링 효율이 개선되었습니다 (팀 피드백 기준).",
            en: "Ops needed to read transaction time series and varied KPIs in one glance. I chose <strong>ApexChart</strong> to mix line, bar, and area views suited to blockchain telemetry. After the back-office dashboard shipped, ops could self-check more issues before escalating and monitoring efficiency improved (based on team feedback).",
          },
          {
            ko: "그랜드 오픈은 일정 제약이 커 랜딩·핵심 콘텐츠·REST API 연동 순으로 우선순위를 정하고 마감 내 핵심 페이지를 납품했습니다. 디자인 시안 기반 반응형은 브레이크포인트별 타이포·여백 스케일을 맞춰 레이아웃 붕괴 없이 구현했습니다.",
            en: "With a tight grand-opening schedule, I prioritized landing, core content, then REST API integration to deliver critical pages on time. Responsive work from design specs aligned typography and spacing per breakpoint to keep layouts stable.",
          },
          {
            ko: "약 1년 3개월 재직 동안 모노레포와 공통 컴포넌트 문서 사이트를 팀 프론트엔드 작업의 기준점으로 자리 잡게 했습니다. 신규 기능 개발 시 카탈로그를 먼저 확인하는 흐름이 자연스러워져 중복 구현을 줄이는 방향으로 팀의 작업 방식이 정착했습니다.",
            en: "Across roughly fifteen months, I helped position the monorepo and shared component docs as the frontend team’s default reference. New work increasingly started from the catalog first, which reduced one-off duplicates and steadied how we built UI together.",
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
        hideInPrint: true,
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
        hideInPrint: true,
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
          ko: "2인 팀 · 한 달 반. 디파이 보험의 복잡한 스마트컨트랙트 로직을 사용자가 오해하지 않도록 UI 흐름으로 추상화하는 것이 가장 큰 과제였습니다. 팀장으로서 React·Solidity·Web3.js를 묶었는데, 온체인 상태와 트랜잭션은 Web3로 드러내고 화면·폼·피드백은 React에서 일관되게 다루기 위한 선택이었습니다. 그 결과 멋쟁이사자처럼 블록체인스쿨에서 대상을 수상했습니다.",
          en: "2-person team · ~6 weeks (~1.5 months). The hardest problem was abstracting intricate DeFi insurance contract logic into UI flows that kept irreversible actions legible. As team lead I standardized on React, Solidity, and Web3.js—Web3 for on-chain reads/writes and React for cohesive screens, forms, and feedback. That direction won the Likelion Blockchain School Grand Prize.",
        },
        tech: ["React", "Solidity", "Web3.js", "Tailwind CSS"],
        period: "2023",
        award: { ko: "블록체인스쿨 대상", en: "Blockchain School Grand Prize" },
        link: "https://props-frontend-eta.vercel.app/",
        github: "https://github.com/INSURSAND/INSURSAND-Frontend-v1",
      },
      {
        name: { ko: "킥-인 (KIKIN)", en: "KIKIN" },
        description: {
          ko: "풋살 팀 일정·출석을 카카오톡 공지와 임시 투표로만 돌리다 보니 맥락이 흩어져 불편했고, 그 실사용 경험에서 출발했습니다. 공지·일정 변경은 Supabase Realtime 구독으로 클라이언트에 바로 반영해 별도 푸시 없이도 빠르게 공유되도록 했으며, 팀 생성·초대·출석 투표·공지를 묶은 웹앱으로 개발을 이어가고 있습니다. 현재 팀 생성·초대·출석 투표·공지 등 핵심 플로우는 동작 중이며, Realtime 알림 고도화와 UI·모바일 사용성 개선을 진행 중입니다.",
          en: "Our futsal team juggled schedules and attendance through KakaoTalk threads and ad-hoc polls, so context kept scattering—I built KIKIN from that day-to-day friction. Announcements and schedule edits propagate via Supabase Realtime subscriptions for quick in-app updates without leaning on push alone; team setup, invites, attendance votes, and notices are wired while development continues. Core flows—team creation, invites, attendance voting, and announcements—are live; I am refining Realtime notification behavior and improving UI and mobile usability.",
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
          ko: "단순 이력서 페이지가 아니라 번역 객체 기반 i18n, App Router·MDX 정적 생성 블로그, 브라우저 인쇄와 @media print로 다듬은 PDF 출력까지 한 흐름으로 보여 주는 기술 쇼케이스입니다. 인쇄 시 네비·데코를 숨기고 타이포·여백을 조정해 A4 한 장에 읽히게 맞췄으며, 이력서 자체가 곧바로 포트폴리오가 되도록 구성했습니다.",
          en: "More than a CV page, it is a small product demo—object-based i18n, an MDX blog on App Router static generation, and PDF-oriented layout via print utilities and @media print. Export hides chrome and tunes typography and spacing for a clean A4 read; the resume is intentionally the portfolio artifact itself.",
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
