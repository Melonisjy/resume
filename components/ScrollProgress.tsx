"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-[#f5f5f0]/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm">
      <motion.div
        className="h-full bg-[#222] dark:bg-[#f5f5f0] origin-left transition-colors duration-300"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

