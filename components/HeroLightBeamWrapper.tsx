"use client";

import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";
import HeroLightBeam from "./HeroLightBeam";

export default function HeroLightBeamWrapper() {
  const glow = useSpring(0.5, { stiffness: 50, damping: 15 });

  useEffect(() => {
    // Sync with EnergyField glow if available
    const syncGlow = () => {
      const glowElement = document.querySelector('[data-glow-value]');
      if (glowElement) {
        const value = parseFloat(glowElement.getAttribute("data-glow-value") || "0.5");
        glow.set(value);
      }
    };

    const interval = setInterval(syncGlow, 100);
    return () => clearInterval(interval);
  }, [glow]);

  return <HeroLightBeam glow={glow} />;
}


