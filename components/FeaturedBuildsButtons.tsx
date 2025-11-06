"use client";

import { motion } from "framer-motion";

export default function FeaturedBuildsButtons() {
  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.a
        href="/work/personal"
        className="group relative px-8 py-4 rounded-full bg-[#1B73FF] text-white font-medium shadow-[0_0_40px_rgba(27,115,255,.25)] hover:bg-[#0E4BDB] transition-all overflow-hidden"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <span className="relative z-10">Personal Work</span>
      </motion.a>
      <motion.a
        href="/work/client"
        className="group relative px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all overflow-hidden backdrop-blur-sm"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <span className="relative z-10">Client Work</span>
      </motion.a>
    </div>
  );
}

