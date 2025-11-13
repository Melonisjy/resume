"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 border-b border-[#999] dark:border-[#444] pb-6 pt-4 md:mb-12 md:pb-8 md:pt-8 transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-2 font-heading text-4xl font-bold text-[#222] dark:text-[#f5f5f0] md:text-6xl transition-colors duration-300"
      >
        이주열
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-2 text-xl text-[#666] dark:text-[#aaa] md:text-2xl transition-colors duration-300"
      >
        Frontend Engineer
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg text-[#666] dark:text-[#aaa] transition-colors duration-300"
      >
        React와 블록체인 기술로 혁신적인 웹 경험을 만드는 개발자
      </motion.p>
    </motion.header>
  );
}
