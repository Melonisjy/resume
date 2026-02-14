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
      className="mb-6 border-b border-[#999] dark:border-[#444] pb-4 pt-4 md:mb-10 md:pb-6 md:pt-6 transition-colors duration-300"
    >
      <div className="relative mb-2">
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
      </div>
      <motion.p
        key={`subtitle-${lang}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
        className="text-lg text-[#666] dark:text-[#aaa] transition-colors duration-300"
      >
        {t.subtitle[lang]}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
        className="flex items-center gap-4 mt-2"
      >
        <a
          href="mailto:dhy2458@gmail.com"
          className="text-sm text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
        >
          dhy2458@gmail.com
        </a>
        <span className="text-[#999] dark:text-[#666] text-sm transition-colors duration-300">·</span>
        <a
          href="https://github.com/Melonisjy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
        >
          GitHub <span className="text-[#999] dark:text-[#666]">↗</span>
        </a>
      </motion.div>
    </motion.header>
  );
}
