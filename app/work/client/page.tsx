import { getClientProjects } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

export default async function ClientWorkPage() {
  const projects = await getClientProjects();

  return (
    <div className="min-h-screen">
      <AnimatedSection delay={0.1}>
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4">
            <SectionHeader
              title="Client Work"
              subtitle="Case studies showcasing real results: speed improvements, conversion increases, and client success stories"
              badge="Client Success"
            />
            <div className="mt-12">
              {projects.length > 0 ? (
                <ProjectGrid projects={projects} />
              ) : (
                <div className="text-center py-16 text-white/50">
                  <p>No client projects yet. Check back soon!</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}


