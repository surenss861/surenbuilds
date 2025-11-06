import { Metadata } from "next";
import { getPersonalProjects } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Personal Work – surenbuilds",
  description: "Products, platforms, and experiments I've built — crafted with precision and obsession for detail.",
};

export default async function PersonalWorkPage() {
  const projects = await getPersonalProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative text-center py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-transparent to-transparent" />
        
        {/* Ambient particles/noise */}
        <div className="absolute inset-0 opacity-[0.03] noise-overlay" />
        
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Personal Work
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Products, platforms, and experiments I've built — crafted with precision and obsession for detail.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={project.slug}>
                  <AnimatedSection delay={index * 0.1}>
                    <ProjectGrid 
                      projects={[project]} 
                      alternateLayout={index % 2 === 1}
                    />
                  </AnimatedSection>
                  
                  {/* Gradient divider between projects */}
                  {index < projects.length - 1 && (
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-white/50">
                <p>No personal projects yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
