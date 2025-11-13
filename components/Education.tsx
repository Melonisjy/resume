"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const educations = [
  {
    institution: "상명대학교",
    major: "정보통신공학과",
    period: "2017.03 ~ 2023.02",
  },
  {
    institution: "멋쟁이사자처럼",
    major: "블록체인 스쿨",
    period: "2023.03 ~ 2023.07",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-[#999] dark:border-[#444] pl-4 pb-4 md:pl-6 last:pb-0 transition-colors duration-300"
          >
            <div className="mb-1 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#222] dark:text-[#f5f5f0] transition-colors duration-300">
                  {edu.institution}
                </h3>
                <p className="text-[#666] dark:text-[#aaa] transition-colors duration-300">{edu.major}</p>
              </div>
              <span className="text-sm text-[#999] dark:text-[#666] md:text-base transition-colors duration-300">{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

