"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import BlogPosts from "@/components/BlogPosts";
import Archive from "@/components/Archive";
import DarkModeToggle from "@/components/DarkModeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import ScrollProgress from "@/components/ScrollProgress";
import SideNav from "@/components/SideNav";
import { useRef } from "react";

export default function Home() {
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
          className="relative mx-auto bg-[#fdfcf8] dark:bg-[#1a1a1a] shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] md:shadow-[0_0_40px_rgba(0,0,0,0.15)] dark:md:shadow-[0_0_60px_rgba(255,255,255,0.08)] transition-colors duration-300"
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
            className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05] transition-opacity duration-300"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Print-only: 웹사이트 안내 배너 */}
          <div className="hidden print:block mb-4 pb-3 border-b border-[#ddd] text-center">
            <p className="text-xs text-[#888]">
              이 이력서의 인터랙티브 버전을 웹에서 확인하실 수 있습니다
            </p>
            <a
              href="https://resume-seven-beige.vercel.app"
              className="text-sm text-[#444] font-medium"
            >
              https://resume-seven-beige.vercel.app
            </a>
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg)`,
            }}
          >
            <Header />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <BlogPosts />
            <Archive />

            {/* Last Updated */}
            <p className="mt-12 pt-4 border-t border-[#ddd] dark:border-[#333] text-xs text-[#bbb] dark:text-[#555] text-right font-mono transition-colors duration-300">
              Last updated: 2026.03
            </p>
          </motion.div>

          {/* Page turn shadow effect */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.05)] to-transparent"
            style={{
              opacity: shadowIntensity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
