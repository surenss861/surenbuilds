"use client";

import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollCameraTimeline() {
  const { camera } = useThree();
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!camera) return;

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.current
        .to(camera.position, { z: 6.5, duration: 1, ease: "power1.inOut" }, 0) // Hero → Builds
        .to(camera.position, { z: 8, y: -0.5, duration: 1, ease: "power1.inOut" }, 0.3) // Pricing
        .to(camera.position, { z: 9.5, y: -1, duration: 1, ease: "power1.inOut" }, 0.6) // CTA
        .to(camera.rotation, { x: -0.05, y: 0.04, duration: 1.5, ease: "power1.inOut" }, 0);

      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (tl.current) {
        tl.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [camera]);

  return null;
}

