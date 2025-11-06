"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface VisualShowcaseProps {
  project: {
    title: string;
    gallery?: string[];
    cover: string;
    liveUrl?: string;
  };
}

export default function VisualShowcase({ project }: VisualShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const images = project.gallery && project.gallery.length > 0 
    ? [project.cover, ...project.gallery]
    : [project.cover];

  const captions = [
    "Property Dashboard",
    "Agent Calendar",
    "Lead Pipeline",
    "Analytics View",
    "Mobile Interface",
  ];

  return (
    <section ref={containerRef} className="py-32 md:py-40 relative bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
            Visual Showcase
          </h2>

          {/* Horizontal scroll container */}
          <div className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {images.slice(0, 5).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ y }}
                  className="group relative flex-shrink-0 w-[600px]"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 mb-4 shadow-[0_20px_60px_rgba(0,0,0,.5)]">
                    {/* Gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                    
                    {/* Drop shadow overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,.3)] z-20" />
                    
                    <Image
                      src={src}
                      alt={`${project.title} ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="600px"
                    />
                    
                    {/* Hover overlay with CTA */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-30"
                    >
                      <div className="text-white/90 font-medium mb-2">
                        {captions[i] || `Screenshot ${i + 1}`}
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B73FF] text-white text-sm font-medium hover:bg-[#0E4BDB] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View live dashboard
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>

                    {/* Glow border on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 rounded-2xl border-2 border-[#1B73FF]/50 shadow-[0_0_40px_rgba(27,115,255,.3)] z-20 pointer-events-none"
                    />
                  </div>
                  <p className="text-sm text-white/60 text-center font-medium">
                    {captions[i] || `Screenshot ${i + 1}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
