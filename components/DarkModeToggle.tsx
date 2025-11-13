"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 저장된 테마 불러오기 (기본값: 라이트 모드)
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      // 기본값은 라이트 모드
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    const html = document.documentElement;
    
    if (newIsDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("Dark mode enabled", html.classList.contains("dark"));
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("Light mode enabled", html.classList.contains("dark"));
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-3 rounded-full bg-[#fdfcf8] dark:bg-[#1a1a1a] border-2 border-[#999] dark:border-[#444] shadow-lg hover:shadow-xl transition-all cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#222]"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

