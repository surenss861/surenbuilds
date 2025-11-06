import { notFound } from "next/navigation";
import { Metadata } from "next";
import RetainerDetail from "@/components/RetainerDetail";

const retainers = [
  {
    slug: "website-care",
    title: "Website Care + Performance Boost",
    subtitle: "Perfect for growing brands that need long-term support.",
    target: "Any local business",
    pricing: "$100–300/mo",
    icon: "Wrench",
    features: [
      "Content updates",
      "Security monitoring",
      "Performance optimization",
      "Monthly backups",
    ],
    description: "Keep your website running smoothly with ongoing maintenance, security updates, and performance optimizations.",
    benefits: [
      "Peace of mind with 24/7 monitoring",
      "Regular security patches and updates",
      "Monthly performance reports",
      "Priority support for urgent issues",
    ],
    whatIncluded: [
      "Weekly content updates (up to 5 pages)",
      "Security monitoring and malware scanning",
      "Performance optimization and speed improvements",
      "Automated monthly backups with 30-day retention",
      "Uptime monitoring and alerts",
      "SSL certificate management",
      "Plugin and theme updates",
    ],
  },
  {
    slug: "seo-content",
    title: "SEO & Content Refresh (Rank + Retain)",
    subtitle: "Perfect for med-spas, agencies, and SaaS companies.",
    target: "Med-spas, agencies, SaaS",
    pricing: "$300–600/mo",
    icon: "TrendingUp",
    features: [
      "Monthly content updates",
      "SEO optimization",
      "Keyword research",
      "Performance tracking",
    ],
    description: "Improve your search rankings and maintain them with strategic content updates and SEO optimization.",
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Better conversion rates",
      "Competitive advantage in your market",
    ],
    whatIncluded: [
      "Monthly blog posts or content updates (2-4 pieces)",
      "On-page SEO optimization",
      "Keyword research and strategy",
      "Meta descriptions and title tag optimization",
      "Internal linking strategy",
      "Monthly SEO performance reports",
      "Competitor analysis",
    ],
  },
  {
    slug: "ab-testing",
    title: "Conversion A/B Testing (Optimize Results)",
    subtitle: "Perfect for SaaS and e-commerce businesses.",
    target: "SaaS, e-commerce",
    pricing: "$500–1,000/mo",
    icon: "Zap",
    features: [
      "Conversion testing",
      "Data analysis",
      "Iterative improvements",
      "Performance reports",
    ],
    description: "Systematically improve your conversion rates through data-driven A/B testing and optimization.",
    benefits: [
      "Higher conversion rates",
      "Data-driven decision making",
      "Improved user experience",
      "Increased revenue per visitor",
    ],
    whatIncluded: [
      "Monthly A/B test setup and execution",
      "Hypothesis development and testing strategy",
      "Statistical analysis of results",
      "Implementation of winning variants",
      "Conversion funnel optimization",
      "Heatmap and user behavior analysis",
      "Monthly conversion reports with insights",
    ],
  },
  {
    slug: "hosting-maintenance",
    title: "Secure Hosting & Maintenance",
    subtitle: "Perfect for real estate and contractor businesses.",
    target: "Real estate, contractors",
    pricing: "$30–100/mo",
    icon: "Server",
    features: [
      "Hosting included",
      "Security updates",
      "Uptime monitoring",
      "Basic support",
    ],
    description: "Affordable hosting with essential maintenance to keep your website secure and online.",
    benefits: [
      "All-in-one solution",
      "99.9% uptime guarantee",
      "Automatic security updates",
      "Fast, reliable hosting",
    ],
    whatIncluded: [
      "Managed WordPress hosting",
      "Daily automated backups",
      "Security updates and patches",
      "Uptime monitoring (24/7)",
      "Basic email support",
      "SSL certificate included",
      "CDN for faster loading",
    ],
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy & Growth Sessions",
    subtitle: "Perfect for new founders and startups.",
    target: "New founders",
    pricing: "$250–500/session",
    icon: "Target",
    features: [
      "1-on-1 consultation",
      "Brand strategy",
      "Growth planning",
      "Actionable roadmap",
    ],
    description: "Strategic guidance to help you build a strong brand and plan for sustainable growth.",
    benefits: [
      "Clear brand direction",
      "Strategic growth roadmap",
      "Expert guidance and insights",
      "Actionable next steps",
    ],
    whatIncluded: [
      "90-minute strategy session",
      "Brand positioning analysis",
      "Competitive landscape review",
      "Growth strategy development",
      "Actionable roadmap document",
      "30-day follow-up check-in",
      "Resource recommendations",
    ],
  },
];

export async function generateStaticParams() {
  return retainers.map((retainer) => ({
    slug: retainer.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const retainer = retainers.find((r) => r.slug === slug);

  if (!retainer) {
    return {
      title: "Retainer Not Found",
    };
  }

  return {
    title: `${retainer.title} | Suren Builds`,
    description: retainer.description,
  };
}

export default async function RetainerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const retainer = retainers.find((r) => r.slug === resolvedParams.slug);

  if (!retainer) {
    notFound();
  }

  return <RetainerDetail retainer={retainer} />;
}

