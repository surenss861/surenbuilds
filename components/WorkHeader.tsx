"use client";

import { motion } from "framer-motion";

export default function WorkHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
      <p className="text-xl text-white/70">
        A collection of websites I've built, each with measurable results and client testimonials.
      </p>
    </motion.div>
  );
}

