"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-3 rounded-full bg-[#fdfcf8] dark:bg-[#1a1a1a] border-2 border-[#999] dark:border-[#444] shadow-lg hover:shadow-xl transition-all cursor-pointer"
      aria-label="Toggle language"
    >
      <span className="text-sm font-bold text-[#222] dark:text-[#f5f5f0] select-none w-6 h-6 flex items-center justify-center">
        {lang === "ko" ? "EN" : "한"}
      </span>
    </button>
  );
}
