"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export interface TestimonialData {
  author: string;
  quote: string;
  rating?: number;
}

export default function Testimonial({ testimonial }: { testimonial: TestimonialData }) {
  const words = testimonial.quote.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#1B73FF]/10 via-[#0E4BDB]/5 to-transparent backdrop-blur-xl p-8 md:p-12 overflow-hidden"
    >
      {/* Floating quote mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-4 right-4 w-16 h-16 text-[#1B73FF]/20"
      >
        <Quote className="w-full h-full" />
      </motion.div>

      {/* Soft horizontal blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B73FF]/5 via-transparent to-transparent" />

      {/* Avatar placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B73FF] to-[#0E4BDB] flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10 shadow-[0_0_30px_rgba(27,115,255,.3)]"
      >
        {testimonial.author.charAt(0).toUpperCase()}
      </motion.div>

      <div className="relative z-10">
        {testimonial.rating && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-1 mb-4"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < testimonial.rating! ? "text-yellow-400" : "text-white/20"
                }`}
              >
                ★
              </span>
            ))}
          </motion.div>
        )}
        
        <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block"
          >
            "
          </motion.span>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.6 + i * 0.03,
              }}
              className="inline-block mr-1.5"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block"
          >
            "
          </motion.span>
        </blockquote>
        
        <motion.cite
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-sm opacity-80 not-italic font-medium text-[#1B73FF]"
        >
          — {testimonial.author}
        </motion.cite>
      </div>
    </motion.div>
  );
}
