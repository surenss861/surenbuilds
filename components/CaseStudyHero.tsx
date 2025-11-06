"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Code, ChevronDown } from "lucide-react";

interface CaseStudyHeroProps {
  project: {
    title: string;
    slug: string;
    client: string;
    industry: string;
    year?: number;
    cover: string;
    liveUrl?: string;
    repoUrl?: string;
    previewUrl?: string;
  };
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#141620]"
    >
      {/* Radial gradient depth layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(27,115,255,.08),transparent_60%)]" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-transparent to-transparent" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] noise-overlay" />

      {/* Subtle motion blur gradient */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#1B73FF]/5 via-transparent to-[#0E4BDB]/5"
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-32 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="mb-6" style={{ opacity: titleOpacity }}>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Light reflection animation */}
                <motion.span
                  className="block relative"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(27,115,255,.3) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {project.title}
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-white/70 mb-2"
              >
                {project.industry}
                {project.year && ` • ${project.year}`}
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
            >
              {project.slug === "agentlinker" && (
                <>
                  Helping real estate agents close more deals by{" "}
                  <span className="text-[#1B73FF] font-medium">unifying listings</span>, scheduling, and{" "}
                  <span className="text-[#1B73FF] font-medium">lead capture</span> in one powerful app.
                </>
              )}
              {project.slug === "scandish" && (
                <>
                  Instant QR menu platform that helps restaurants{" "}
                  <span className="text-[#1B73FF] font-medium">save on printing costs</span> and update menus in seconds.
                </>
              )}
              {project.slug === "warbuoy-marketing" && (
                <>
                  Complete business growth solutions with{" "}
                  <span className="text-[#1B73FF] font-medium">transparent processes</span> and rapid implementation.
                </>
              )}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B73FF] text-white font-medium hover:bg-[#0E4BDB] transition-all shadow-[0_0_40px_rgba(27,115,255,.25)] hover:shadow-[0_0_60px_rgba(27,115,255,.35)] hover:scale-105"
                >
                  Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all hover:scale-105"
                >
                  View Code
                  <Code className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Right: Product Mockup with tilt effect */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_100px_rgba(27,115,255,.2)]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B73FF]/20 to-transparent blur-2xl" />
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover relative z-10"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm">Explore Case Study</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
