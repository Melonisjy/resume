"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import BlogPosts from "@/components/BlogPosts";
import DarkModeToggle from "@/components/DarkModeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import ScrollProgress from "@/components/ScrollProgress";
import SideNav from "@/components/SideNav";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useRef } from "react";

export default function Home() {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Paper turning animation
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const shadowIntensity = useTransform(scrollYProgress, [0, 1], [0.1, 0.2]);

  return (
    <div className="min-h-screen bg-[#f5f5f0] dark:bg-[#0a0a0a] py-4 px-4 md:py-12 md:px-8 transition-colors duration-300">
      {/* 스크롤 진행도 인디케이터 */}
      <ScrollProgress />
      {/* 사이드 네비게이션 */}
      <SideNav />
      <div ref={containerRef} className="mx-auto max-w-4xl">
        {/* A4 Paper Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="resume-paper relative mx-auto bg-[#fdfcf8] shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-colors duration-300 dark:bg-[#1a1a1a] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] md:shadow-[0_0_40px_rgba(0,0,0,0.15)] dark:md:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
          style={{
            minHeight: "100vh",
            maxWidth: "100%",
            width: "100%",
            padding: "clamp(1.5rem, 4vw, 3.5rem)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Toggle Buttons */}
          <div className="absolute top-6 right-6 z-50 flex gap-2 print:hidden">
            <LanguageToggle />
            <DarkModeToggle />
            <button
              onClick={() => window.print()}
              className="p-2 text-[#999] dark:text-[#666] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
              title="PDF / Print"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>

          {/* Paper texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05] transition-opacity duration-300 print:hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Print-only: 웹/GitHub/블로그 안내 (화면에서는 hidden print:block) */}
          <div className="mb-4 hidden border-b border-[#ccc] pb-2.5 text-center print:block">
            <p className="text-[11px] leading-snug text-[#333] print:text-[#222]">
              {lang === "ko" ? (
                <>
                  <a
                    href="https://resume-seven-beige.vercel.app"
                    className="font-medium print:text-inherit"
                  >
                    웹 버전
                  </a>
                  <span className="text-[#999]"> · </span>
                  <a
                    href="https://github.com/Melonisjy"
                    className="font-medium print:text-inherit"
                  >
                    GitHub
                  </a>
                  <span className="text-[#999]"> · </span>
                  <a
                    href="https://velog.io/@meloncoder/posts"
                    className="font-medium print:text-inherit"
                  >
                    블로그
                  </a>
                  <span className="text-[#999]"> → </span>
                  <a
                    href="https://resume-seven-beige.vercel.app"
                    className="font-mono text-[11px] print:text-inherit"
                  >
                    resume-seven-beige.vercel.app
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="https://resume-seven-beige.vercel.app"
                    className="font-medium print:text-inherit"
                  >
                    Web
                  </a>
                  <span className="text-[#999]"> · </span>
                  <a
                    href="https://github.com/Melonisjy"
                    className="font-medium print:text-inherit"
                  >
                    GitHub
                  </a>
                  <span className="text-[#999]"> · </span>
                  <a
                    href="https://velog.io/@meloncoder/posts"
                    className="font-medium print:text-inherit"
                  >
                    Blog
                  </a>
                  <span className="text-[#999]"> → </span>
                  <a
                    href="https://resume-seven-beige.vercel.app"
                    className="font-mono text-[11px] print:text-inherit"
                  >
                    resume-seven-beige.vercel.app
                  </a>
                </>
              )}
            </p>
          </div>

          {/* Content */}
          <motion.div
            className="resume-print-root relative z-10"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg)`,
            }}
          >
            <Header />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <BlogPosts />

            {/* Last Updated */}
            <p className="mt-12 border-t border-[#ddd] pt-4 text-right font-mono text-xs text-[#bbb] transition-colors duration-300 print:mt-4 print:pt-2 print:text-[10px] dark:border-[#333] dark:text-[#555]">
              Last updated: 2026.04
            </p>
          </motion.div>

          {/* Page turn shadow effect */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.05)] to-transparent print:hidden"
            style={{
              opacity: shadowIntensity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
