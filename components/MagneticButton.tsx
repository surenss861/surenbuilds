"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const baseStyles =
    variant === "primary"
      ? "bg-[#1B73FF] text-white hover:bg-[#0E4BDB] shadow-[0_0_40px_rgba(27,115,255,.25)]"
      : "border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm";

  return (
    <motion.a
      ref={ref}
      href={href}
      className={clsx(
        "group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden",
        baseStyles,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: variant === "primary" ? "0 0 20px rgba(27,115,255,0.35)" : undefined,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ripple effect */}
      {isHovered && (
        <motion.span
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
      <motion.span
        style={{ transform: "translateZ(75px)" }}
        className="relative z-10"
      >
        {children}
      </motion.span>
      {variant === "primary" && (
        <motion.span
          style={{ transform: "translateZ(75px)" }}
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      )}
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          transform: "translateZ(50px)",
          backgroundPosition: `${(mouseXSpring.get() + 0.5) * 100}%`,
        }}
      />
    </motion.a>
  );
}

