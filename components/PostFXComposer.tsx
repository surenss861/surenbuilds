"use client";

import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { useState, useEffect } from "react";

export default function PostFXComposer() {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Disable on mobile for performance
    const isMobile = window.innerWidth < 768;
    setIsEnabled(!isMobile);
  }, []);

  if (!isEnabled) return null;

  return (
    <EffectComposer multisampling={0}>
      <Bloom intensity={0.35} luminanceThreshold={0.45} mipmapBlur />
      <Vignette eskil={false} offset={0.25} darkness={0.6} />
      <Noise opacity={0.03} premultiply />
    </EffectComposer>
  );
}


