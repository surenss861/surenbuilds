import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import IframePreview from "@/components/IframePreview";
import Testimonial from "@/components/Testimonial";
import CaseStudyHero from "@/components/CaseStudyHero";
import QuickStatsBar from "@/components/QuickStatsBar";
import ProblemSolution from "@/components/ProblemSolution";
import TechStackShowcase from "@/components/TechStackShowcase";
import VisualShowcase from "@/components/VisualShowcase";
import ResultsImpact from "@/components/ResultsImpact";
import CaseStudyCTA from "@/components/CaseStudyCTA";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const { getAllProjects } = await import("@/lib/projects");
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    author: {
      "@type": "Person",
      name: "Suren Sureshkumar",
    },
    about: project.industry,
    url: `https://surenbuilds.com/work/${project.slug}`,
    ...(project.testimonial && {
      review: {
        "@type": "Review",
        reviewBody: project.testimonial.quote,
        reviewRating: {
          "@type": "Rating",
          ratingValue: project.testimonial.rating || 5,
        },
        author: {
          "@type": "Person",
          name: project.testimonial.author,
        },
      },
    }),
  };

  return {
    title: `${project.title} | Suren Builds`,
    description: `Case study: ${project.title} for ${project.client}. ${project.industry} website built with modern web technologies.`,
    openGraph: {
      title: project.title,
      description: `Case study: ${project.title} for ${project.client}`,
      images: [project.cover],
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd),
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get next project for navigation
  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = currentIndex !== -1 && currentIndex < allProjects.length - 1 
    ? allProjects[currentIndex + 1]
    : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CaseStudyHero project={project} />

      {/* Quick Stats Bar */}
      {project.metrics && project.metrics.length > 0 && (
        <QuickStatsBar metrics={project.metrics} />
      )}

      {/* Problem → Solution Section */}
      <ProblemSolution 
        project={project}
        mdxContent={
          <MDXRemote
            source={project.rawContent}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        }
      />

      {/* Tech Stack & Features */}
      {project.stack && (
        <TechStackShowcase project={project} />
      )}

      {/* Visual Showcase Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <VisualShowcase project={project} />
      )}

      {/* Results & Impact */}
      <ResultsImpact project={project} />

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4">
            <Testimonial testimonial={project.testimonial} />
          </div>
        </section>
      )}

      {/* Live Preview */}
      {project.previewUrl && (
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
              Live Preview
            </h2>
            <IframePreview src={project.previewUrl} />
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <CaseStudyCTA
        currentSlug={slug}
        nextProjectSlug={nextProject?.slug}
        nextProjectTitle={nextProject?.title}
      />
    </div>
  );
}
