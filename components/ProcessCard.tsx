"use client";

import { motion } from "framer-motion";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessCard({ step, title, description, delay = 0 }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#1B73FF]/30 transition-all group"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl font-bold text-[#1B73FF] flex-shrink-0"
        >
          {step}
        </motion.div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#1B73FF] transition-colors">
            {title}
          </h3>
          <p className="text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}


