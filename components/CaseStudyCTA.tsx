"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCTAProps {
  currentSlug?: string;
  nextProjectSlug?: string;
  nextProjectTitle?: string;
}

export default function CaseStudyCTA({ currentSlug, nextProjectSlug, nextProjectTitle }: CaseStudyCTAProps) {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#141620]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" />
      
      {/* Subtle motion background */}
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
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/[0.02] backdrop-blur-xl p-12 md:p-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold mb-4"
          >
            Interested in a build like this?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Let's design your next product with precision and speed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1B73FF] text-white font-medium hover:bg-[#0E4BDB] transition-all shadow-[0_0_40px_rgba(27,115,255,.25)] hover:shadow-[0_0_60px_rgba(27,115,255,.35)] hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            {nextProjectSlug && (
              <Link
                href={`/work/${nextProjectSlug}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all hover:scale-105"
              >
                View Next: {nextProjectTitle || "Next Project"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {!nextProjectSlug && (
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all hover:scale-105"
              >
                See More Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
