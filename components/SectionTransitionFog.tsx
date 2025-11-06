"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionTransitionFog() {
  const fogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fogRef.current) return;

    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
      if (index === 0) return; // Skip hero section

      // Create a gradient sweep on section enter
      gsap.to(fogRef.current, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          onEnter: () => {
            gsap.fromTo(
              fogRef.current,
              {
                opacity: 0,
                y: -20,
              },
              {
                opacity: 0.15,
                y: 0,
                duration: 1,
                ease: "power2.out",
              }
            );
          },
          onLeave: () => {
            gsap.to(fogRef.current, {
              opacity: 0,
              duration: 0.8,
              ease: "power2.in",
            });
          },
          onEnterBack: () => {
            gsap.fromTo(
              fogRef.current,
              {
                opacity: 0,
                y: 20,
              },
              {
                opacity: 0.15,
                y: 0,
                duration: 1,
                ease: "power2.out",
              }
            );
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={fogRef}
      className="section-transition-fog"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        opacity: 0,
      }}
    />
  );
}


