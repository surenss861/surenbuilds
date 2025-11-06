"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

/**
 * Performance optimizer that:
 * - Pauses animations when tab is inactive
 * - Uses frameloop="demand" for idle performance
 */
export default function PerformanceOptimizer() {
  const { gl, setFrameloop } = useThree();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause rendering when tab is inactive
        setFrameloop("never");
        gl.setAnimationLoop(null);
      } else {
        // Resume rendering when tab becomes active
        setFrameloop("always");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [gl, setFrameloop]);

  return null;
}


