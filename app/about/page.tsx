"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import ProcessCard from "@/components/ProcessCard";
import TechBadge from "@/components/TechBadge";

export default function AboutPage() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Identify opportunities and growth gaps through comprehensive analysis.",
    },
    {
      step: "02",
      title: "Design & Strategy",
      description: "UX-first wireframes and conversion mapping for optimal results.",
    },
    {
      step: "03",
      title: "Development",
      description: "Next.js + Supabase builds engineered for scale and performance.",
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "Deploy, test, and iterate based on real-time analytics and feedback.",
    },
  ];

  const tools = [
    { name: "Next.js", description: "React framework for production" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Supabase", description: "Realtime backend" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
    { name: "Vercel", description: "Deployment platform" },
    { name: "Framer Motion", description: "Animation library" },
    { name: "PostgreSQL", description: "Reliable database" },
    { name: "SEO", description: "Search optimization" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0C1022] to-[#0A0A0A]">
        {/* Animated background gradient */}
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
        
        {/* Glow pulse */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(27,115,255,.15),transparent_70%)]"
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] noise-overlay" />

        <div className="relative max-w-6xl mx-auto px-4 py-32 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
              >
                Hey, I'm Suren — I build{" "}
                <motion.span
                  className="relative inline-block"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: "linear-gradient(90deg, #1B73FF 0%, #3AA0FF 50%, #1B73FF 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  high-performance
                </motion.span>{" "}
                websites that grow businesses.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-white/70 mt-6 mb-8 leading-relaxed"
              >
                Precision-built. Design-driven. Focused on measurable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton href="/work/personal" variant="primary">
                  See My Work
                </MagneticButton>
                <MagneticButton href="/contact" variant="secondary">
                  Get in Touch
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right: Avatar/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Blurred gradient behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B73FF]/30 to-[#0E4BDB]/30 rounded-full blur-3xl" />
                
                {/* Avatar placeholder */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full rounded-full bg-gradient-to-br from-[#1B73FF] to-[#0E4BDB] flex items-center justify-center text-white text-6xl md:text-7xl font-bold shadow-[0_0_80px_rgba(27,115,255,.4)]"
                >
                  S
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-32 md:py-40 relative bg-[#0F1419]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold mb-8"
            >
              My Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6"
            >
              I've spent the past few years helping small teams, founders, and real estate professionals turn simple ideas into scalable platforms.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/70 leading-relaxed"
            >
              I obsess over clean interfaces, fast load times, and clear conversions — because the best websites feel invisible and perform beautifully. Every project starts with understanding your goals, analyzing your audience, and identifying opportunities for improvement.
            </motion.p>
          </div>
        </section>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-32 md:py-40 relative bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold mb-16 text-center"
            >
              My Process
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, i) => (
                <ProcessCard
                  key={i}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tool Belt Section */}
      <AnimatedSection delay={0.3}>
        <section className="py-32 md:py-40 relative bg-[#0F1419]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          
          {/* Animated line separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B73FF] to-transparent"
          />

          <div className="relative max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold mb-6 text-center"
            >
              Tool Belt
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 text-center mb-12 max-w-2xl mx-auto"
            >
              My stack is built for speed, security, and scalability — from idea to launch.
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center">
              {tools.map((tool, i) => (
                <TechBadge
                  key={i}
                  name={tool.name}
                  description={tool.description}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.4}>
        <section className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0C1022] to-[#0A0A0A]">
          {/* Moving background glow */}
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

          <div className="relative max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/[0.02] backdrop-blur-xl p-12 md:p-20 overflow-hidden"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(27,115,255,.1), transparent, rgba(27,115,255,.1))",
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1B73FF]/20 via-transparent to-[#8B5CF6]/20 opacity-50 blur-xl" />

              <div className="relative z-10 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-semibold mb-6"
                >
                  Let's build something that feels modern, fast, and effortless to use.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
                >
                  Ready to transform your online presence? Let's discuss how I can help you achieve your goals.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-sm text-white/50 mb-8"
                >
                  Available for select collaborations — Toronto & remote.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <MagneticButton href="/contact" variant="primary">
                    Get in Touch
                  </MagneticButton>
                  <MagneticButton href="/work" variant="secondary">
                    View Work
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
