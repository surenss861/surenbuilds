"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 backdrop-blur-sm">
            {badge}
          </span>
        </motion.div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-white/60 leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}

