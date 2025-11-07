import { getPersonalProjects, getClientProjects } from "@/lib/projects";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeader from "@/components/SectionHeader";
import PricingAnchor from "@/components/PricingAnchor";
import RetainerServices from "@/components/RetainerServices";
import AnimatedSection from "@/components/AnimatedSection";
import FeaturedBuildsButtons from "@/components/FeaturedBuildsButtons";

export default async function Home() {
  const personalProjects = await getPersonalProjects();
  const clientProjects = await getClientProjects();

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Builds Section */}
      <AnimatedSection delay={0.2}>
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4">
            <SectionHeader
              title="Featured Builds"
              subtitle="Real projects. Real results."
              badge="My Work"
            />
            <FeaturedBuildsButtons />
          </div>
        </section>
      </AnimatedSection>

      {/* Client Work Section */}
      {clientProjects.length > 0 && (
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4">
            <SectionHeader
              title="Client Work"
              subtitle="Case studies showcasing real results: speed improvements, conversion increases, and client success stories"
              badge="Client Success"
            />
            <div className="mt-12">
              <ProjectGrid projects={clientProjects} />
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {personalProjects.length === 0 && clientProjects.length === 0 && (
        <section className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center py-16 text-white/50">
            <p>No projects yet. Check back soon!</p>
          </div>
        </section>
      )}

      <div className="py-20 md:py-32">
        <AnimatedSection delay={0.1}>
          <PricingAnchor />
        </AnimatedSection>
      </div>

      {/* Retainer Services Section */}
      <AnimatedSection delay={0.15}>
        <RetainerServices />
      </AnimatedSection>
    </div>
  );
}
