"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-12 relative">
      {/* Animated gradient line divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B73FF] to-transparent"
      />
      
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-70">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p>© {new Date().getFullYear()} Suren Builds.</p>
          <p className="text-white/40">Built with Next.js.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@surenbuilds.com" className="hover:text-[#1B73FF] transition-colors">
            hello@surenbuilds.com
          </a>
          <Link href="/contact" className="underline hover:text-[#1B73FF] transition-colors">
            Book a 15‑min build consult →
          </Link>
        </div>
      </div>
    </footer>
  );
}

