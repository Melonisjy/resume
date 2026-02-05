"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const values = [
  {
    keyword: "더 나은 사용자경험",
    note: "UX를 위해 끊임없이 고민합니다",
  },
  {
    keyword: "사용자 관점에서 서비스 바라보기",
    note: "항상 사용자 입장에서 생각합니다",
  },
  {
    keyword: "함께 성장하는 것에 즐거움",
    note: "팀과 함께 나아가는 것을 좋아합니다",
  },
  {
    keyword: "깔끔하고 직관적인 것",
    note: "군더더기 없는 인터페이스를 추구합니다",
  },
  {
    keyword: "팀원들과의 소통",
    note: "좋은 결과는 좋은 소통에서 나옵니다",
  },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        <ul className="space-y-4">
          {values.map((value, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3 group"
            >
              {/* Hand-drawn style checkbox */}
              <span className="mt-1 text-[#222] dark:text-[#f5f5f0] transition-colors duration-300 
                font-mono text-sm select-none">
                [✓]
              </span>
              
              <div className="flex-1">
                <span className="text-[#222] dark:text-[#f5f5f0] font-medium transition-colors duration-300
                  border-b-2 border-[#222]/20 dark:border-[#f5f5f0]/20
                  group-hover:border-[#222]/50 dark:group-hover:border-[#f5f5f0]/50
                  transition-all duration-300">
                  {value.keyword}
                </span>
                <span className="ml-2 text-[#999] dark:text-[#666] text-sm transition-colors duration-300">
                  — {value.note}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
