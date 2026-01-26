"use client";

import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="mb-4 text-[#222] dark:text-[#f5f5f0] leading-relaxed transition-colors duration-300">
        사용자 경험을 중심으로 웹 서비스를 구현하는 프론트엔드 개발자입니다. <br />
        React와 TypeScript 기반의 프로젝트를 통해 복잡한 비즈니스 요구사항을
        화면 단에서 구조화하고, 유지보수하기 쉬운 UI를 만드는 데 관심이 많습니다.
      </p>
      <p className="text-[#222] dark:text-[#f5f5f0] leading-relaxed transition-colors duration-300">
        블록체인 게임 플랫폼 및 사내 웹 서비스 개발 경험을 통해 다양한 도메인의
        요구사항을 프론트엔드 관점에서 풀어왔으며, 모노레포 환경에서의 개발,
        공통 컴포넌트 설계 등 팀 단위 개발에 필요한 구조와 협업 방식에 대해
        고민해왔습니다.
      </p>
    </Section>
  );
}
