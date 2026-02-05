"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const mainStack = ["TypeScript", "React", "Next.js"];
const subStack = ["Zustand", "Redux", "TanStack Query", "Tailwind CSS", "Sass", "Monorepo", "Cursor AI"];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-col gap-4 border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        {/* Main Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-3 italic transition-colors duration-300">
            주로 사용하는 기술 —
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {mainStack.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-[#222] dark:text-[#f5f5f0] text-xl md:text-2xl font-heading font-semibold
                  border-b-2 border-[#222]/30 dark:border-[#f5f5f0]/30
                  transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Sub Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[#666] dark:text-[#aaa] text-sm mb-3 italic transition-colors duration-300">
            함께 사용하는 것들 —
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {subStack.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="text-[#666] dark:text-[#aaa] transition-colors duration-300"
              >
                {skill}{index < subStack.length - 1 && ","}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
