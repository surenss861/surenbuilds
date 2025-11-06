"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import MetricChip from "./MetricChip";
import type { ProjectFrontmatter } from "@/lib/projects";

interface ProjectCardProps {
  project: ProjectFrontmatter;
  alternateLayout?: boolean;
}

export default function ProjectCard({ project, alternateLayout = false }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasPreview = project.liveUrl || project.previewUrl;
  const previewUrl = project.previewUrl || project.liveUrl;

  // Extract tagline - use first sentence from description or default
  const getTagline = () => {
    // For AgentLinker
    if (project.slug === "agentlinker") {
      return "Built to help real estate agents grow faster and centralize their online presence.";
    }
    // For Scandish
    if (project.slug === "scandish") {
      return "Instant QR menu platform that helps restaurants save on printing costs.";
    }
    // For Warbuoy
    if (project.slug === "warbuoy-marketing") {
      return "Complete business growth solutions with transparent processes and rapid implementation.";
    }
    return "Built with precision and attention to detail.";
  };
  
  const tagline = getTagline();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Soft radial glow behind card on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-4 bg-gradient-to-r from-[#1B73FF]/20 via-[#1B73FF]/10 to-transparent blur-2xl rounded-3xl -z-10"
      />

      <div className="card overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-white/10 bg-gradient-to-br from-[#0A0A0A] to-[#141620]">
        <div className={`flex flex-col ${alternateLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          {/* Preview/Image Section */}
          <div className="relative w-full md:w-2/3 aspect-[16/10] md:aspect-auto md:h-[500px] overflow-hidden bg-black">
            {/* Cover Image */}
            {!showPreview && (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-white/5 animate-pulse" />
                )}
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority={false}
                  onLoad={() => setImageLoaded(true)}
                />
              </>
            )}

            {/* Live Website Preview */}
            {showPreview && hasPreview && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white"
              >
                <iframe
                  src={previewUrl}
                  className="w-full h-full border-0 scale-75 origin-top-left"
                  style={{ width: "133.33%", height: "133.33%" }}
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
                  loading="lazy"
                  title={`${project.title} preview`}
                />
              </motion.div>
            )}

            {/* Hover Overlay with Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10"
            >
              {hasPreview && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowPreview(!showPreview);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#1B73FF] text-white font-medium hover:bg-[#0E4BDB] transition-colors flex items-center gap-2"
                >
                  {showPreview ? "Show Image" : "Live Preview"}
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
              {hasPreview && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/70 hover:text-white transition-colors underline flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open in new tab
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-gradient-to-br from-[#0A0A0A] to-[#141620]">
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-2xl font-semibold leading-tight text-white">{project.title}</h3>
                {project.type === "personal" && (
                  <span className="text-xs px-2 py-1 rounded-full bg-[#1B73FF]/20 border border-[#1B73FF]/30 text-[#1B73FF] whitespace-nowrap flex-shrink-0">
                    Personal
                  </span>
                )}
              </div>
              
              {/* Tagline */}
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                {tagline}
              </p>
              
              <p className="text-sm opacity-70 mb-6">
                {project.client} • {project.industry}
                {project.year && ` • ${project.year}`}
              </p>
              
              {project.metrics && project.metrics.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Metrics</p>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.slice(0, 3).map((metric, i) => (
                      <MetricChip key={i} label={metric.label} value={metric.value} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all text-sm font-medium mt-auto relative overflow-hidden"
            >
              {/* Glow ring on hover */}
              <motion.div
                animate={{
                  opacity: isHovered ? 0.3 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                className="absolute inset-0 rounded-lg bg-[#1B73FF]/20 blur-md -z-10"
              />
              
              <span>View Case Study</span>
              <motion.span
                animate={{
                  x: isHovered ? 4 : 0,
                  rotate: isHovered ? 45 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
