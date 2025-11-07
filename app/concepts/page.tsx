"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Sparkles, Building2, ArrowRight, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const concepts = [
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    description: "Clean, conversion-focused design with intuitive navigation and product-first layouts",
    href: "/concepts/ecommerce-store",
    icon: ShoppingBag,
    gradient: "from-[#1B73FF] to-[#8B5CF6]",
    bgGradient: "from-[#1B73FF]/10 to-[#8B5CF6]/10",
  },
  {
    id: "med-spa",
    title: "Med Spa",
    description: "Serene, luxury aesthetic with calming colors and wellness-focused imagery",
    href: "/concepts/med-spa",
    icon: Sparkles,
    gradient: "from-[#FF6B9D] to-[#C44569]",
    bgGradient: "from-[#FF6B9D]/10 to-[#C44569]/10",
  },
  {
    id: "architecture-firm",
    title: "Architecture Firm",
    description: "Modern, sophisticated portfolio showcase with large imagery and minimalist layouts",
    href: "/concepts/architecture-firm",
    icon: Building2,
    gradient: "from-[#00D4AA] to-[#00A8CC]",
    bgGradient: "from-[#00D4AA]/10 to-[#00A8CC]/10",
  },
];

export default function ConceptsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0C1022] to-[#0A0A0A]">
        {/* Animated background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#1B73FF]/10 via-transparent to-[#0E4BDB]/10"
          style={{ backgroundSize: "200% 200%" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 py-32 z-10 w-full">
          {/* Header */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6"
              >
                Design Concepts
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto"
              >
                Explore examples of what we can build, tailored to your industry
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Concept Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {concepts.map((concept, index) => {
              const Icon = concept.icon;
              return (
                <AnimatedSection key={concept.id} delay={0.2 + index * 0.1}>
                  <Link href={concept.href}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative h-full"
                    >
                      {/* Glow effect */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute -inset-4 bg-gradient-to-r ${concept.bgGradient} blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      {/* Card */}
                      <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A0A0A] to-[#141620] p-8 transition-all duration-300 group-hover:border-white/20">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${concept.gradient} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-semibold mb-3 text-white">
                          {concept.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/60 mb-6 leading-relaxed">
                          {concept.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          <span>View Example</span>
                          <motion.span
                            animate={{
                              x: [0, 4, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Other Industries CTA */}
          <AnimatedSection delay={0.5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                <span>Not Your Industry?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                We Work Across All Industries
              </h2>
              <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
                While these are some of our featured concepts, we're ready to take on projects 
                in any industry. From healthcare to hospitality, technology to real estate, 
                we adapt our expertise to your unique needs.
              </p>
              <MagneticButton href="/contact" variant="primary">
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
