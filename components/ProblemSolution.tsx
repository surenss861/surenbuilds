"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProblemSolutionProps {
  project: {
    slug: string;
    cover: string;
    title?: string;
  };
  mdxContent?: React.ReactNode;
}

export default function ProblemSolution({ project, mdxContent }: ProblemSolutionProps) {
  const getProblemSolution = () => {
    if (project.slug === "agentlinker") {
      return {
        problem: "Most agents juggle Calendly links, Google Forms, and listing PDFs — losing leads in the process.",
        solution: "AgentLinker unifies listings, showings, and client follow-ups into one sleek dashboard built for speed and conversion.",
        highlights: ["unified dashboard", "lead capture", "real-time updates"],
      };
    }
    if (project.slug === "scandish") {
      return {
        problem: "Restaurants struggle with expensive printing costs, update delays, and lack of menu analytics.",
        solution: "Scandish provides instant QR menu creation with real-time updates and analytics — all in under 10 minutes.",
        highlights: ["instant updates", "analytics dashboard", "cost savings"],
      };
    }
    if (project.slug === "warbuoy-marketing") {
      return {
        problem: "Marketing agencies need to demonstrate fresh perspective and transparent processes to stand out.",
        solution: "Warbuoy's website showcases complete business growth solutions with clear value propositions and rapid implementation.",
        highlights: ["transparent processes", "rapid implementation", "clear value"],
      };
    }
    return {
      problem: "Businesses need modern, high-performing web solutions.",
      solution: "Built with precision and attention to detail.",
      highlights: [],
    };
  };

  const { problem, solution, highlights } = getProblemSolution();

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((highlight) => {
      const regex = new RegExp(`(${highlight})`, "gi");
      result = result.replace(
        regex,
        `<span class="text-[#1B73FF] font-medium">$1</span>`
      );
    });
    return result;
  };

  return (
    <>
      {/* Problem Section - Dark background */}
      <section className="py-32 md:py-40 relative bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-semibold mb-8"
                >
                  The Problem
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-white/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: highlightText(problem, highlights) }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src={project.cover}
                  alt="Problem illustration"
                  fill
                  className="object-cover grayscale opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vertical gradient divider */}
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-[#1B73FF]/30 to-transparent">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-[#1B73FF] blur-sm" />
      </div>

      {/* Solution Section - Navy background */}
      <section className="py-32 md:py-40 relative bg-[#0F1419]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1 shadow-[0_0_60px_rgba(27,115,255,.1)]"
              >
                <Image
                  src={project.cover}
                  alt="Solution"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <div className="order-1 md:order-2">
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-semibold mb-8"
                >
                  The Solution
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{ __html: highlightText(solution, highlights) }}
                />
                {mdxContent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="prose prose-invert max-w-none"
                  >
                    {mdxContent}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
