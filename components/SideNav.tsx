"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function SideNav() {
  const [activeId, setActiveId] = useState("");
  const isClickScrolling = useRef(false);

  const updateActiveByScroll = useCallback(() => {
    if (isClickScrolling.current) return;

    let currentId = "";
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          currentId = id;
        }
      }
    }
    if (currentId) setActiveId(currentId);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveByScroll, { passive: true });
    updateActiveByScroll();
    return () => window.removeEventListener("scroll", updateActiveByScroll);
  }, [updateActiveByScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      isClickScrolling.current = true;
      setActiveId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // 스크롤 애니메이션 끝나면 다시 스크롤 감지 활성화
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3 print:!hidden">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="flex items-center gap-2"
        >
          {/* Label */}
          <span
            className={`text-xs font-mono transition-colors duration-300 ${
              activeId === id
                ? "text-[#222] dark:text-[#f5f5f0]"
                : "text-[#bbb] dark:text-[#555]"
            }`}
          >
            {label}
          </span>

          {/* Dot */}
          <span
            className={`block rounded-full transition-all duration-300 ${
              activeId === id
                ? "w-2.5 h-2.5 bg-[#222] dark:bg-[#f5f5f0]"
                : "w-1.5 h-1.5 bg-[#bbb] dark:bg-[#555]"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
