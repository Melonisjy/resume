"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const educations = [
  {
    institution: "상명대학교",
    major: "정보통신공학과",
    period: "2017.03 ~ 2023.02",
    status: "졸업",
  },
  {
    institution: "멋쟁이사자처럼",
    major: "블록체인 스쿨 3기",
    period: "2023.03 ~ 2023.07",
    status: "수료",
  },
];

const awards = [
  {
    title: "멋쟁이사자처럼 블록체인스쿨 3기 대상",
    project: "INSURSAND - 디파이 보험 플랫폼",
    year: "2023",
  },
  {
    title: "상명대학교 캡스톤 디자인 경진대회 최우수상",
    project: "P2D - 블록체인 기반 기부 플랫폼",
    year: "2022",
  },
  {
    title: "제 31회 광자기술 학술회의 우수 논문상",
    project: "뉴럴네트워크를 이용한 물리 계층 보안 광전송 기술",
    year: "2022",
  },
  {
    title: "상명대학교 전공 소모임 장려상",
    project: "도담도담 - 머신러닝 기반 식단 관리 앱",
    year: "2021",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-4 border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            학력 —
          </p>
          <div className="space-y-3 flex flex-col gap-1">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300">
                    {edu.institution}
                  </span>
                  <span className="text-[#666] dark:text-[#aaa] transition-colors duration-300">
                    {edu.major}
                  </span>
                  <span className="text-xs text-[#999] dark:text-[#666] transition-colors duration-300">
                    · {edu.status}
                  </span>
                </div>
                <span className="text-sm text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
                  {edu.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300">
            수상 내역 —
          </p>
          <ul className="space-y-3 flex flex-col gap-1">
            {awards.map((award, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-[#222] dark:text-[#f5f5f0] select-none mt-0.5">
                  🏆
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span className="text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300">
                      {award.title}
                    </span>
                    <span className="text-sm text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-sm text-[#666] dark:text-[#aaa] transition-colors duration-300">
                    {award.project}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

