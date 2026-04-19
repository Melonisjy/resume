"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  /** Experience 등: 섹션 상단 여백만 확대 (인쇄는 compact 유지) */
  emphasizeLeadSpacing?: boolean;
}

export default function Section({
  id,
  title,
  children,
  emphasizeLeadSpacing = false,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-8 scroll-mt-20 md:mb-12 print:mb-4 print:scroll-mt-0 ${
        emphasizeLeadSpacing ? "mt-16 md:mt-20 print:mt-0" : ""
      }`}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
        }}
        className="mb-3 flex items-center gap-2 font-heading text-2xl font-semibold text-[#222] transition-colors duration-300 print:mb-1.5 print:text-xl dark:text-[#f5f5f0] md:mb-4 md:text-4xl"
      >
        <span
          className="inline-block h-5 w-[3px] shrink-0 rounded-sm bg-amber-500 print:bg-amber-600 dark:bg-amber-400"
          aria-hidden
        />
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
        }}
        className="border-t border-[#999] pt-3 transition-colors duration-300 print:pt-2 dark:border-[#444] md:pt-4"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

