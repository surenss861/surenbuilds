"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Check, Wrench, TrendingUp, Zap, Server, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Care + Performance Boost",
    subtitle: "Perfect for growing brands that need long-term support.",
    target: "Any local business",
    pricing: "$100–300/mo",
    icon: Wrench,
    features: [
      "Content updates",
      "Security monitoring",
      "Performance optimization",
      "Monthly backups",
    ],
    slug: "website-care",
  },
  {
    title: "SEO & Content Refresh (Rank + Retain)",
    subtitle: "Perfect for med-spas, agencies, and SaaS companies.",
    target: "Med-spas, agencies, SaaS",
    pricing: "$300–600/mo",
    icon: TrendingUp,
    features: [
      "Monthly content updates",
      "SEO optimization",
      "Keyword research",
      "Performance tracking",
    ],
    slug: "seo-content",
  },
  {
    title: "Conversion A/B Testing (Optimize Results)",
    subtitle: "Perfect for SaaS and e-commerce businesses.",
    target: "SaaS, e-commerce",
    pricing: "$500–1,000/mo",
    icon: Zap,
    features: [
      "Conversion testing",
      "Data analysis",
      "Iterative improvements",
      "Performance reports",
    ],
    slug: "ab-testing",
  },
  {
    title: "Secure Hosting & Maintenance",
    subtitle: "Perfect for real estate and contractor businesses.",
    target: "Real estate, contractors",
    pricing: "$30–100/mo",
    icon: Server,
    features: [
      "Hosting included",
      "Security updates",
      "Uptime monitoring",
      "Basic support",
    ],
    slug: "hosting-maintenance",
  },
  {
    title: "Brand Strategy & Growth Sessions",
    subtitle: "Perfect for new founders and startups.",
    target: "New founders",
    pricing: "$250–500/session",
    icon: Target,
    features: [
      "1-on-1 consultation",
      "Brand strategy",
      "Growth planning",
      "Actionable roadmap",
    ],
    slug: "brand-strategy",
  },
];

// Dynamic client count (can be updated via API later)
const CLIENT_COUNT = 14;

// Animated counter component
function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(target * progress);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animate();
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function RetainerServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Gradient divider line */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#1B73FF]/30 to-transparent">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px bg-[#1B73FF] blur-sm" />
      </div>

      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 md:py-40 relative bg-gradient-to-b from-[#07080C] via-[#0D0F18] to-[#0A0A0A] overflow-hidden"
      >
        {/* Parallax dot grid texture overlay */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Gradient shimmer line - sweeps across every 20s */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(27,115,255,.1), transparent)",
            width: "30%",
            height: "100%",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Ongoing Services & Retainers
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Stay fast, secure, and growing — with done-for-you monthly support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03, 
                    rotate: 0.5,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#1B73FF]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-200 group cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient shimmer on card */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 15 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(27,115,255,.1), transparent)",
                      width: "50%",
                    }}
                  />

                  {/* Icon with gradient glow */}
                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="p-3 rounded-full bg-gradient-to-tr from-[#1B73FF]/20 to-[#8B5CF6]/20 flex-shrink-0"
                    >
                      <Icon className="w-5 h-5 text-[#1B73FF]" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1B73FF] transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-xs text-white/50 mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-white/60 mb-3">
                        {service.target}
                      </p>
                      <div className="text-2xl font-bold text-[#1B73FF] mb-4">
                        {service.pricing}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 relative z-10 mb-6">
                    {service.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <Check className="w-4 h-4 text-[#1B73FF] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More CTA */}
                  <Link
                    href={`/retainers/${service.slug}`}
                    className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1B73FF]/30 bg-[#1B73FF]/10 text-[#1B73FF] text-sm font-medium hover:bg-[#1B73FF]/20 hover:border-[#1B73FF]/50 transition-all duration-200 group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Social Proof Badge - Dynamic with animated counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-4"
          >
            <p className="text-sm text-white/50">
              💬 Trusted by{" "}
              <span className="text-[#1B73FF] font-semibold">
                +<AnimatedCounter target={CLIENT_COUNT} />
              </span>{" "}
              clients and counting across Toronto & beyond.
            </p>
          </motion.div>

          {/* Bundle & Save Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs text-white/40 mt-4 text-center"
          >
            Bundle your growth services — save <span className="text-[#1B73FF] font-semibold">15% every month</span>.
          </motion.p>
        </div>
      </motion.section>
    </>
  );
}
