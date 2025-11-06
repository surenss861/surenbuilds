"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface RetainerDetailProps {
  retainer: {
    slug: string;
    title: string;
    subtitle: string;
    target: string;
    pricing: string;
    icon: string;
    features: string[];
    description: string;
    benefits: string[];
    whatIncluded: string[];
  };
}

export default function RetainerDetail({ retainer }: RetainerDetailProps) {
  return (
    <div className="min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{retainer.title}</h1>
          <p className="text-xl text-white/70 mb-4">{retainer.subtitle}</p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/50">Perfect for: {retainer.target}</span>
            <span className="text-2xl font-bold text-[#1B73FF]">{retainer.pricing}</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-lg text-white/80 leading-relaxed">{retainer.description}</p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {retainer.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <Check className="w-5 h-5 text-[#1B73FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
          <div className="space-y-3">
            {retainer.whatIncluded.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-[#1B73FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href={`/contact?service=${retainer.slug}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1B73FF] text-white font-semibold hover:bg-[#0E4BDB] transition-colors shadow-[0_0_40px_rgba(27,115,255,.25)]"
          >
            Get Started with {retainer.title}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

