"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticCTA from "./MagneticCTA";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects - Blue Focused */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.15),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/[0.02] backdrop-blur-xl p-12 md:p-20 overflow-hidden"
        >
          {/* Decorative Elements - Tesla-blue with motion */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#1B73FF]/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, -10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#1B73FF]/10 rounded-full blur-3xl"
          />
          
          {/* Particle glow waves */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1B73FF]/10 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-[#1B73FF]" />
              <span className="text-sm text-[#1B73FF] font-medium">Let's Work Together</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Ready", "to", "transform"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }),
                  }}
                  custom={i}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="text-[#1B73FF] inline-block mr-2"
              >
                your online presence?
              </motion.span>
            </motion.h2>
            
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how a custom website can drive more leads, bookings, and revenue for your business.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                     <motion.div
                       animate={{
                         boxShadow: [
                           "0 0 20px rgba(255,255,255,0.1)",
                           "0 0 40px rgba(255,255,255,0.3)",
                           "0 0 20px rgba(255,255,255,0.1)",
                         ],
                       }}
                       transition={{
                         duration: 3,
                         repeat: Infinity,
                         ease: "easeInOut",
                       }}
                     >
                       <MagneticCTA>
                         <Link
                           href="/contact"
                           className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center gap-2 overflow-hidden"
                         >
                  {/* Particle glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2,
                    }}
                  />
                           <span className="relative z-10">Book a 15-min Call</span>
                           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                         </Link>
                       </MagneticCTA>
                     </motion.div>
              <Link
                href="/work"
                className="group px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm inline-flex items-center justify-center gap-2"
              >
                View Case Studies
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

