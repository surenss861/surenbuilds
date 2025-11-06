"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Lenis from "lenis";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateProgress = () => {
      const lenis = (window as any).lenis as Lenis | undefined;
      
      if (lenis) {
        // Use Lenis scroll position
        const scroll = lenis.scroll;
        const limit = lenis.limit;
        const progressPercent = limit > 0 ? (scroll / limit) * 100 : 0;
        setProgress(Math.max(0, Math.min(100, progressPercent)));
      } else {
        // Fallback to native scroll
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressPercent = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
        setProgress(Math.max(0, Math.min(100, progressPercent)));
      }
    };

    // Listen to Lenis scroll events if available
    const lenis = (window as any).lenis as Lenis | undefined;
    
    if (lenis) {
      lenis.on("scroll", updateProgress);
      updateProgress();
      
      return () => {
        lenis.off("scroll", updateProgress);
      };
    } else {
      // Fallback to native scroll
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();
      
      return () => window.removeEventListener("scroll", updateProgress);
    }
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-[#1B73FF]/30 z-50 pointer-events-none"
      style={{ originX: 0 }}
    >
      <motion.div
        className="h-full bg-[#1B73FF]"
        animate={{ scaleX: progress / 100 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
    </motion.div>
  );
}

