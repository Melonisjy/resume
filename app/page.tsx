"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
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
    <div className="min-h-screen bg-[#f5f5f0] py-4 px-4 md:py-12 md:px-8">
      <div ref={containerRef} className="mx-auto max-w-4xl">
        {/* A4 Paper Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto bg-[#fdfcf8] shadow-[0_0_20px_rgba(0,0,0,0.1)] md:shadow-[0_0_40px_rgba(0,0,0,0.15)]"
          style={{
            minHeight: "100vh",
            maxWidth: "100%",
            width: "100%",
            padding: "clamp(1.5rem, 4vw, 3.5rem)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Paper texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

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
            <Contact />
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
