"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { ProjectFrontmatter } from "@/lib/projects";

interface ProjectGridProps {
  projects: ProjectFrontmatter[];
  alternateLayout?: boolean;
}

export default function ProjectGrid({ projects, alternateLayout = false }: ProjectGridProps) {
  return (
    <div className="grid gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProjectCard 
            project={project} 
            alternateLayout={alternateLayout}
          />
        </motion.div>
      ))}
    </div>
  );
}
