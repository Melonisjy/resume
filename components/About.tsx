"use client";

import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="mb-4 text-[#222] dark:text-[#f5f5f0] leading-relaxed transition-colors duration-300">
        블록체인과 웹3 기술에 관심이 많은 프론트엔드 개발자입니다. React와
        Web3.js를 활용하여 NFT 마켓플레이스, 블록체인 브릿지, 디파이 플랫폼 등
        다양한 블록체인 기반 서비스를 개발한 경험이 있습니다.
      </p>
      <p className="text-[#222] dark:text-[#f5f5f0] leading-relaxed transition-colors duration-300">
        제프(JEFF WORLD)에서 블록체인 기반 게임 플랫폼의 프론트엔드 개발 경험이
        있으며, 모노레포 환경에서의 효율적인 개발과 컴포넌트 공통화에 관심이
        많습니다.
      </p>
    </Section>
  );
}
