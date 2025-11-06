"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring } from "framer-motion";
import * as THREE from "three";

interface HeroLightBeamProps {
  glow: any; // Spring value from EnergyField
}

export default function HeroLightBeam({ glow }: HeroLightBeamProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current || !materialRef.current) return;

    // Pulse opacity in sync with energy field glow
    const baseOpacity = 0.2;
    const pulseAmount = 0.2;
    const glowValue = glow.get();
    const timePulse = Math.sin(clock.elapsedTime * 0.8) * 0.5 + 0.5;
    
    const finalOpacity = baseOpacity + (pulseAmount * timePulse) + (glowValue * 0.1);
    materialRef.current.opacity = Math.min(finalOpacity, 0.5);

    // Subtle position drift on scroll
    const scrollProgress = (window.scrollY || 0) / (document.documentElement.scrollHeight - window.innerHeight);
    meshRef.current.position.y = scrollProgress * 0.3;
    meshRef.current.rotation.z = scrollProgress * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]} rotation={[0, 0, Math.PI / 4]}>
      <planeGeometry args={[4, 6, 32, 32]} />
      <meshStandardMaterial
        ref={materialRef}
        transparent
        opacity={0.2}
        color={new THREE.Color(0x1B73FF)}
        emissive={new THREE.Color(0x1B73FF).multiplyScalar(0.5)}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}


