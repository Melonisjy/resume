"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
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
      className="mb-8 scroll-mt-20 md:mb-12"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
        }}
        className="mb-3 font-heading text-2xl font-semibold text-[#222] dark:text-[#f5f5f0] md:mb-4 md:text-4xl transition-colors duration-300"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
        }}
        className="border-t border-[#999] dark:border-[#444] pt-3 md:pt-4 transition-colors duration-300"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

