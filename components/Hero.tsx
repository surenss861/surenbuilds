"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import BuildEstimator from "./BuildEstimator";
import CursorTrail from "./CursorTrail";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax for S logo
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center noise-overlay vignette">
      <CursorTrail />
      
      {/* Radial glow behind S logo */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-[rgba(27,115,255,.15)] rounded-full blur-3xl pointer-events-none opacity-50" />
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-10 md:grid-cols-2 md:pt-16 w-full relative z-10">
        {/* Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-semibold md:text-6xl lg:text-7xl leading-tight tracking-[-0.03em]"
          >
            World-class websites & apps that feel{" "}
            <motion.span 
              className="text-[#1B73FF] relative inline-block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #1B73FF 0%, #3AA0FF 50%, #1B73FF 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              inevitable
            </motion.span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-xl text-white/70 text-lg md:text-xl font-light tracking-tight"
          >
            Precision. Design. Engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <BuildEstimator />
            <a
              href="#work"
              className="rounded-full border border-white/20 px-6 py-3 text-center font-medium hover:bg-white/10 transition-colors"
            >
              See work
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-white/50"
          >
            From $1,250 CAD • Under 10 hours
          </motion.p>
        </div>

        {/* Animated S Logo with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex items-center justify-center"
          style={{ y, scale }}
        >
          <motion.div
            animate={
              prefersReduced
                ? {}
                : {
                    rotateZ: [-6, 6, -6],
                    y: [0, -10, 0],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto w-[280px] md:w-[360px]"
            style={{
              filter: "drop-shadow(0 25px 80px rgba(27,115,255,.35))",
              animation: "logoGlow 5s ease-in-out infinite",
            }}
          >
            <Image
              src="/brand/s-logo.svg"
              alt="S"
              width={360}
              height={360}
              priority
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
