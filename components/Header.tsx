"use client";

import { motion } from "framer-motion";

const SignatureText = ({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) => {
  return (
    <motion.span
      className="inline-block relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
    >
      <motion.span
        className="inline-block text-[#222] dark:text-[#f5f5f0] transition-colors duration-300"
        initial={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        }}
        animate={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        transition={{
          duration: 0.7,
          delay: delay + 0.05,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 border-b border-[#999] dark:border-[#444] pb-6 pt-4 md:mb-12 md:pb-8 md:pt-8 transition-colors duration-300"
    >
      <div className="relative mb-2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="font-heading text-4xl font-bold text-[#222] dark:text-[#f5f5f0] md:text-6xl transition-colors duration-300"
        >
          <SignatureText delay={0.05}>이</SignatureText>
          <SignatureText delay={0.85}>주</SignatureText>
          <SignatureText delay={1.65}>열</SignatureText>
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="mb-2 text-xl text-[#666] dark:text-[#aaa] md:text-2xl transition-colors duration-300"
      >
        Frontend Engineer
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
        className="text-lg text-[#666] dark:text-[#aaa] transition-colors duration-300"
      >
        React와 블록체인 기술로 혁신적인 웹 경험을 만드는 개발자
      </motion.p>
    </motion.header>
  );
}
