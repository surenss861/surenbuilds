"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function IntroSequence() {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      hasAnimated.current = true;

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      // Set initial states
      const heroContent = document.getElementById("heroContent");
      const energyField = document.getElementById("energyField");
      const heroText = document.getElementById("heroText");
      const heroLogo = document.getElementById("heroLogo");
      
      if (!heroContent || !energyField || !heroText || !heroLogo) {
        // Fallback if elements aren't ready
        if (heroContent) heroContent.style.opacity = "1";
        if (energyField) energyField.style.opacity = "1";
        if (heroText) heroText.style.opacity = "1";
        if (heroLogo) heroLogo.style.opacity = "1";
        return;
      }

      tl.set(heroContent, { opacity: 0, y: 30 })
        .set("#heroText span", { opacity: 0, y: 10 })
        // Hero content fade in
        .to(
          heroContent,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5"
        )
        // Staggered text reveal
        .to(
          "#heroText span",
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        )
        // Logo fade in
        .to(
          heroLogo,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)",
          },
          "-=0.6"
        );

      return () => {
        tl.kill();
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
