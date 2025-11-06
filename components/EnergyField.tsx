"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo, useEffect, useState, forwardRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function EnergyField() {
  const [isEnabled, setIsEnabled] = useState(true);
  const mouseVelocity = useMotionValue(0);
  const glow = useSpring(0.5, { stiffness: 50, damping: 15 });

  useEffect(() => {
    // Disable on mobile
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enabled = !isMobile && !prefersReducedMotion;
    setIsEnabled(enabled);

    if (!enabled) return;

    // Track mouse velocity for reactivity
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const deltaTime = (now - lastTime) / 1000; // in seconds
      lastTime = now;

      if (deltaTime > 0) {
        const vx = Math.abs(e.clientX - lastX) / deltaTime;
        const vy = Math.abs(e.clientY - lastY) / deltaTime;
        const velocity = Math.sqrt(vx * vx + vy * vy);
        
        mouseVelocity.set(velocity);
        // Map velocity to glow intensity (0-1)
        glow.set(Math.min(velocity / 1000, 1));
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseVelocity, glow]);

  // Update glow value in DOM for HeroLightBeam to read
  useEffect(() => {
    const unsubscribe = glow.on("change", (latest) => {
      const element = document.querySelector('[data-glow-value]');
      if (element) {
        element.setAttribute('data-glow-value', latest.toString());
      }
    });
    return () => unsubscribe();
  }, [glow]);

  if (!isEnabled) return null;

  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <EnergyFieldCanvas glow={glow} />
      </div>
      {/* Export glow for use in HeroLightBeam */}
      <div data-glow-value={glow.get()} style={{ display: "none" }} />
    </>
  );
}

const EnergyFieldPoints = forwardRef<THREE.Points, { 
  positions: Float32Array;
  colors: Float32Array;
  glow: any;
}>(({ positions, colors, glow }, ref) => {
  const internalRef = useRef<THREE.Points>(null);
  const pointsRef = (ref as React.MutableRefObject<THREE.Points | null>) || internalRef;
  
  // Create geometry with positions and colors
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [positions, colors]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    // Gentle drift
    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0005;

    // Minor pulse via sin()
    const t = state.clock.elapsedTime;
    const baseSize = 0.05;
    const pulseSize = Math.sin(t * 0.5) * 0.015;
    const reactiveSize = glow.get() * 0.03;
    
    if (pointsRef.current.material instanceof THREE.PointsMaterial) {
      pointsRef.current.material.size = baseSize + pulseSize + reactiveSize;
      // Increase opacity with glow
      pointsRef.current.material.opacity = Math.min(0.7 + glow.get() * 0.3, 1);
    }

    // Slight reactive rotation
    pointsRef.current.rotation.z += glow.get() * 0.0002;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        transparent
        color="#1B73FF"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
});

function EnergyFieldCanvas({ glow }: { glow: any }) {
  const ref = useRef<THREE.Points>(null);
  const count = 8000;

  // Random sphere distribution (concentrated around center)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create a more concentrated sphere distribution
      const radius = Math.random() * 2 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  // Colors array (blue to purple gradient)
  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const hue = Math.random() * 0.3 + 0.55; // Blue to purple range
      const color = new THREE.Color().setHSL(hue, 0.7, 0.6);
      arr[i * 3] = color.r;
      arr[i * 3 + 1] = color.g;
      arr[i * 3 + 2] = color.b;
    }
    return arr;
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
      frameloop="always"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight intensity={0.3} />
      <EnergyFieldPoints ref={ref} positions={positions} colors={colors} glow={glow} />
    </Canvas>
  );
}

