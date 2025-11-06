"use client";

import { motion, useMotionValue, useSpring, useInView, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedPriceCounter({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <div ref={ref} className="text-5xl font-bold text-[#1B73FF] mb-2">
      ${displayValue.toLocaleString()} CAD
    </div>
  );
}

export default function PricingAnchor() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Transparent Pricing
          </h2>
          <p className="text-xl text-white/70">
            Fast, affordable, and delivered under 10 hours.
          </p>
          {/* Faint dividing line with glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#1B73FF]/50 to-transparent mt-8" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Standard Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 60px rgba(59,130,246,0.2)",
              borderColor: "rgba(59,130,246,0.4)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm hover:from-blue-500/15 hover:to-cyan-500/15 transition-all group overflow-hidden"
          >
            {/* Highlight ring on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-[#1B73FF]/0 group-hover:border-[#1B73FF]/50 transition-all duration-300 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            {/* Floating shadow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1B73FF]/0 via-[#1B73FF]/0 to-[#1B73FF]/0 group-hover:from-[#1B73FF]/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500 pointer-events-none blur-xl"
            />
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
              <AnimatedPriceCounter value={1250} />
              <div className="text-lg text-white/70 mb-4">Under 10 hours of work</div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "Custom design & development",
                "Fully responsive & mobile-optimized",
                "Modern tech stack (Next.js, TypeScript)",
                "SEO optimization",
                "Performance optimization (98+ Lighthouse)",
                "Source code & documentation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white/80">
                  <Check className="w-5 h-5 text-[#1B73FF] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 mb-4">
                Perfect for: Landing pages, portfolio sites, simple web apps, website redesigns
              </p>
              <p className="text-xs text-white/50">
                Larger or more complex projects quoted based on scope and requirements
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/60 mt-8 text-sm"
        >
          All projects include source code, documentation, and deployment. <br />
          Larger projects quoted based on complexity and timeline.
        </motion.p>
        
        {/* View full scope link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-4"
        >
          <a
            href="/contact"
            className="text-sm text-[#1B73FF] hover:text-[#0E4BDB] transition-colors inline-flex items-center gap-1"
          >
            View full scope →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

