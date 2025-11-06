"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Cloud, Palette, Zap, Search } from "lucide-react";

interface TechBadgeProps {
  name: string;
  description: string;
  delay?: number;
}

const techIcons: Record<string, any> = {
  "Next.js": Code2,
  "TypeScript": Code2,
  "Supabase": Database,
  "Tailwind CSS": Palette,
  "Vercel": Cloud,
  "Framer Motion": Zap,
  "PostgreSQL": Database,
  "SEO": Search,
};

export default function TechBadge({ name, description, delay = 0 }: TechBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = techIcons[name] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[#0A0A0A] border border-white/20 text-xs text-white/80 whitespace-nowrap z-20"
        >
          {description}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-[#0A0A0A] border-r border-b border-white/20 rotate-45" />
        </motion.div>
      )}

      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(27,115,255,.3)" }}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1B73FF]/30 transition-all cursor-default backdrop-blur-sm"
      >
        <Icon className="w-4 h-4 text-[#1B73FF] group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium">{name}</span>
      </motion.div>
    </motion.div>
  );
}


