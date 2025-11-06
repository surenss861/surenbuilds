"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Zap, Users } from "lucide-react";

interface ResultsImpactProps {
  project: {
    slug: string;
    metrics?: Array<{ label: string; value: string }>;
    testimonial?: {
      author: string;
      quote: string;
      rating?: number;
    };
  };
}

// Animated counter component
function AnimatedNumber({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract number from value (e.g., "60% faster" -> 60)
    const numMatch = value.match(/\d+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const num = parseInt(numMatch[0]);
    const suffix = value.replace(numMatch[0], "");
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(num * progress);
      setDisplayValue(`${current}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function ResultsImpact({ project }: ResultsImpactProps) {
  const getResults = () => {
    if (project.slug === "agentlinker") {
      return {
        title: "Results & Impact",
        metrics: [
          { icon: TrendingUp, label: "Reduced response time", value: "60% faster" },
          { icon: Zap, label: "Streamlined scheduling", value: "3x more efficient" },
          { icon: Users, label: "Lead conversion", value: "2+ new clients/month" },
        ],
        description: "Streamlined scheduling and boosted agent lead conversions through unified dashboard experience.",
      };
    }
    if (project.slug === "scandish") {
      return {
        title: "Results & Impact",
        metrics: [
          { icon: TrendingUp, label: "Printing costs", value: "85% reduction" },
          { icon: Zap, label: "Update time", value: "5 seconds" },
          { icon: Users, label: "Restaurants onboarded", value: "500+" },
        ],
        description: "Restaurants save an average of $199/month on printing costs while gaining instant menu update capabilities.",
      };
    }
    if (project.slug === "warbuoy-marketing") {
      return {
        title: "Results & Impact",
        metrics: [
          { icon: TrendingUp, label: "Page speed", value: "98 Lighthouse" },
          { icon: Zap, label: "Conversion rate", value: "12%" },
          { icon: Users, label: "24/7 Support", value: "100%" },
        ],
        description: "Fast loading times, clear value propositions, and transparent processes drive qualified leads.",
      };
    }
    return {
      title: "Results & Impact",
      metrics: [],
      description: "Built with precision and attention to detail.",
    };
  };

  const { title, metrics, description } = getResults();

  return (
    <section className="py-32 md:py-40 relative bg-[#0F1419] overflow-hidden">
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#1B73FF] rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
            {title}
          </h2>

          <p className="text-xl text-white/80 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {description}
          </p>

          {metrics.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {metrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center shadow-[0_0_40px_rgba(27,115,255,.1)] hover:shadow-[0_0_60px_rgba(27,115,255,.2)] hover:border-[#1B73FF]/30 transition-all group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-10 h-10 text-[#1B73FF] mx-auto mb-6" />
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-bold text-[#1B73FF] mb-3">
                      <AnimatedNumber value={metric.value} />
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Project Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 justify-center bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-6 rounded-2xl"
            >
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center px-4">
                  <div className="text-3xl font-bold text-[#1B73FF] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/60">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
