"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Disable on mobile and reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsEnabled(!isMobile && !prefersReducedMotion);

    if (!isEnabled || !glowRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{
        transform: "translate(-50%, -50%)",
        left: 0,
        top: 0,
      }}
    />
  );
}

