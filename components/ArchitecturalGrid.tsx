"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function ArchitecturalGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.5, 0.3]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ rotateX, rotateY, opacity }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(27, 115, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(27, 115, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "perspective(1000px) rotateX(60deg)",
        }}
      />
    </motion.div>
  );
}


