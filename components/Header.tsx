"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

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
  const { lang } = useLanguage();
  const t = translations.header;
  const nameChars = t.name[lang];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6 pb-6 pt-4 md:mb-10 md:pb-8 md:pt-6 transition-colors duration-300"
    >
      {/* 1. Name — 가장 크고 강한 계층 */}
      <motion.h1
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="font-heading text-4xl font-bold text-[#222] dark:text-[#f5f5f0] md:text-6xl transition-colors duration-300"
      >
        {nameChars.map((char, i) => (
          <SignatureText key={`${lang}-${i}`} delay={0.05 + i * 0.8}>
            {char}
          </SignatureText>
        ))}
      </motion.h1>

      {/* 2. Role — 이름 바로 아래, 보조 계층 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
        className="text-lg text-[#666] dark:text-[#aaa] mt-2 mb-4 transition-colors duration-300"
      >
        Frontend Developer
      </motion.p>

      {/* 3. Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 2.9 }}
        className="h-px bg-[#999] dark:bg-[#444] origin-left mb-4 transition-colors duration-300"
      />

      {/* 4. Contact — 가장 작은 유틸리티 계층 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.1 }}
        className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#888] dark:text-[#777] transition-colors duration-300"
      >
        <a
          href="mailto:dhy2458@gmail.com"
          className="hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
        >
          dhy2458@gmail.com
        </a>
        <span className="text-[#ccc] dark:text-[#444]">·</span>
        <a
          href="https://github.com/Melonisjy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
        >
          github.com/Melonisjy ↗
        </a>
      </motion.div>
    </motion.header>
  );
}
