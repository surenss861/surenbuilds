"use client";

import { motion } from "framer-motion";
import { Check, Code2, Zap, Database, Cloud, Palette } from "lucide-react";

interface TechStackShowcaseProps {
  project: {
    stack?: string[];
    slug: string;
  };
}

const techIcons: Record<string, any> = {
  "Next.js": Code2,
  "TypeScript": Code2,
  "Supabase": Database,
  "Tailwind CSS": Palette,
  "Vercel": Cloud,
  "Framer Motion": Zap,
};

export default function TechStackShowcase({ project }: TechStackShowcaseProps) {
  const getFeatures = () => {
    if (project.slug === "agentlinker") {
      return [
        "Smart scheduling and booking",
        "Lead CRM and property listing sync",
        "Dashboard analytics",
        "Mobile-first, SEO optimized",
        "98+ Lighthouse performance score",
      ];
    }
    if (project.slug === "scandish") {
      return [
        "Instant QR code generation",
        "Real-time menu updates",
        "Analytics dashboard",
        "Mobile-optimized viewing",
        "Multi-restaurant management",
      ];
    }
    if (project.slug === "warbuoy-marketing") {
      return [
        "Conversion-optimized design",
        "Service showcase sections",
        "Transparent process display",
        "Fast loading performance",
        "SEO optimization",
      ];
    }
    return [];
  };

  const features = getFeatures();

  return (
    <section className="py-32 md:py-40 relative bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-[#1B73FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Built With
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#1B73FF] flex items-center gap-2">
                ⚙️ Tech Stack
              </h3>
              {project.stack && project.stack.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => {
                    const Icon = techIcons[tech] || Code2;
                    return (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(27,115,255,.3)" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover:border-[#1B73FF]/30 transition-all cursor-default group"
                      >
                        <Icon className="w-4 h-4 text-[#1B73FF] group-hover:scale-110 transition-transform" />
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              ) : (
                <p className="text-white/60">Next.js • TypeScript • Tailwind CSS • Supabase</p>
              )}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#1B73FF] flex items-center gap-2">
                🧩 Features
              </h3>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1B73FF] to-[#8B5CF6] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <Check className="w-5 h-5 text-[#1B73FF] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-white/80 group-hover:text-white transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
