export interface Concept {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  useCase: string;
  image?: string;
}

export const concepts: Concept[] = [
  {
    id: "saas-platform",
    title: "SaaS Platform",
    description: "A complete software-as-a-service platform with user authentication, subscription management, and admin dashboard.",
    category: "Web Application",
    features: [
      "User authentication & authorization",
      "Subscription billing integration",
      "Admin dashboard & analytics",
      "Real-time data synchronization",
      "API integrations"
    ],
    useCase: "Perfect for startups launching their first product or established businesses looking to digitize their services.",
    image: "/work/agentlinker/cover.jpg" // Placeholder - you can add concept images later
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    description: "A modern, high-performance online store with product management, shopping cart, and secure checkout.",
    category: "E-commerce",
    features: [
      "Product catalog & search",
      "Shopping cart & checkout",
      "Payment processing",
      "Order management system",
      "Inventory tracking"
    ],
    useCase: "Ideal for retailers wanting to expand online or brands launching their first digital storefront.",
    image: "/work/scandish/cover.jpg"
  },
  {
    id: "landing-page",
    title: "High-Converting Landing Page",
    description: "A beautifully designed, conversion-optimized landing page that turns visitors into customers.",
    category: "Marketing",
    features: [
      "Conversion-focused design",
      "A/B testing capabilities",
      "Lead capture forms",
      "Analytics integration",
      "Mobile-responsive layout"
    ],
    useCase: "Great for product launches, marketing campaigns, or businesses needing a focused entry point.",
    image: "/work/warbuoy-marketing/cover.jpg"
  },
  {
    id: "dashboard-analytics",
    title: "Analytics Dashboard",
    description: "A comprehensive data visualization platform with real-time metrics, custom reports, and insights.",
    category: "Data & Analytics",
    features: [
      "Real-time data visualization",
      "Custom report builder",
      "Interactive charts & graphs",
      "Data export capabilities",
      "User permission management"
    ],
    useCase: "Perfect for businesses that need to track KPIs, monitor performance, or make data-driven decisions.",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A stunning showcase website that highlights your work, skills, and achievements with modern design.",
    category: "Portfolio",
    features: [
      "Project showcase gallery",
      "Case study pages",
      "Contact form integration",
      "Blog/content management",
      "SEO optimization"
    ],
    useCase: "Ideal for designers, developers, agencies, or professionals wanting to showcase their work online.",
  },
  {
    id: "web-app",
    title: "Custom Web Application",
    description: "A tailored web application built to solve your specific business challenges with modern technology.",
    category: "Web Application",
    features: [
      "Custom functionality",
      "User management system",
      "Database integration",
      "Third-party API connections",
      "Scalable architecture"
    ],
    useCase: "Perfect for businesses with unique requirements that off-the-shelf solutions can't address.",
  },
  {
    id: "membership-site",
    title: "Membership Platform",
    description: "A gated content platform with membership tiers, payment processing, and exclusive content delivery.",
    category: "Membership",
    features: [
      "Tiered membership levels",
      "Content gating & access control",
      "Payment & subscription handling",
      "Member directory & profiles",
      "Community features"
    ],
    useCase: "Great for creators, educators, or businesses offering premium content or services to members.",
  },
  {
    id: "booking-system",
    title: "Booking & Scheduling System",
    description: "An intuitive booking platform that manages appointments, availability, and customer communications.",
    category: "Business Tools",
    features: [
      "Calendar & availability management",
      "Automated booking confirmations",
      "Email & SMS notifications",
      "Payment processing",
      "Customer management"
    ],
    useCase: "Perfect for service-based businesses like salons, consultants, or healthcare providers.",
  },
];

export function getConceptsByCategory(category?: string): Concept[] {
  if (!category) return concepts;
  return concepts.filter(c => c.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(concepts.map(c => c.category)));
}


