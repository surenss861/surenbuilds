"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import PostFXComposer from "./PostFXComposer";
import ScrollCameraTimeline from "./ScrollCameraTimeline";
import PerformanceOptimizer from "./PerformanceOptimizer";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function CameraController({ camRef }: { camRef: React.RefObject<THREE.PerspectiveCamera | null> }) {
  useFrame(() => {
    if (!camRef.current) return;

    // Get scroll progress (0 to 1)
    const lenis = (window as any).lenis;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = lenis ? lenis.scroll : window.scrollY;
    const progress = Math.min(scrolled / Math.max(scrollHeight, 1), 1);

    // Smooth camera movement through Z-depth (fallback if ScrollTrigger timeline isn't active)
    const targetZ = 5 + progress * 4; // 5 to 9
    const targetY = -progress * 1.5; // 0 to -1.5
    
    // Smooth interpolation (only if GSAP isn't controlling it)
    if (Math.abs(camRef.current.position.z - targetZ) > 0.1) {
      camRef.current.position.z += (targetZ - camRef.current.position.z) * 0.05;
    }
    if (Math.abs(camRef.current.position.y - targetY) > 0.1) {
      camRef.current.position.y += (targetY - camRef.current.position.y) * 0.05;
    }

    // Subtle rotation based on scroll direction
    const rotationX = -progress * 0.05;
    const rotationY = progress * 0.03;
    
    camRef.current.rotation.x += (rotationX - camRef.current.rotation.x) * 0.05;
    camRef.current.rotation.y += (rotationY - camRef.current.rotation.y) * 0.05;
  });

  return null;
}

export default function WorldReveal() {
  const [isEnabled, setIsEnabled] = useState(true);
  const camRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    // Disable on mobile and reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enabled = !isMobile && !prefersReducedMotion;
    setIsEnabled(enabled);

    if (!enabled) return;

    // GSAP ScrollTrigger for section-based animations
    const timeoutId = setTimeout(() => {
      if (camRef.current) {
        ScrollTrigger.refresh();
        
        const sections = document.querySelectorAll("section");
        
        if (sections.length > 0) {
          sections.forEach((section) => {
            gsap.to(camRef.current!, {
              scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self) => {
                  if (!camRef.current) return;
                  // Subtle parallax per section
                  const sectionProgress = self.progress;
                  camRef.current.rotation.z = (sectionProgress - 0.5) * 0.02;
                },
              },
            });
          });
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        frameloop="always"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <PerspectiveCamera
          ref={camRef}
          makeDefault
          position={[0, 0, 5]}
          fov={45}
        />
        
        {/* Camera controller for scroll-based movement */}
        <CameraController camRef={camRef} />
        
        {/* Scroll-based camera timeline */}
        <ScrollCameraTimeline />
        
        {/* Subtle fog for depth */}
        <fog attach="fog" args={[new THREE.Color(0x0A0A0A), 8, 15]} />
        
        {/* Optional: Faint background planes for parallax depth */}
        <BackgroundPlanes />
        
        {/* Post-processing effects */}
        <PostFXComposer />
        
        {/* Performance optimizations */}
        <PerformanceOptimizer />
      </Canvas>
    </div>
  );
}

function BackgroundPlanes() {
  const plane1Ref = useRef<THREE.Mesh>(null);
  const plane2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (plane1Ref.current) {
      plane1Ref.current.rotation.z += 0.0002;
      plane1Ref.current.position.y = Math.sin(clock.elapsedTime * 0.1) * 0.1;
    }
    if (plane2Ref.current) {
      plane2Ref.current.rotation.z -= 0.0003;
      plane2Ref.current.position.y = Math.sin(clock.elapsedTime * 0.15 + Math.PI) * 0.1;
    }
  });

  return (
    <>
      {/* Far background plane */}
      <mesh ref={plane1Ref} position={[0, 0, -8]} rotation={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          transparent
          opacity={0.05}
          color={new THREE.Color(0x1B73FF)}
          emissive={new THREE.Color(0x1B73FF).multiplyScalar(0.2)}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Mid background plane */}
      <mesh ref={plane2Ref} position={[0, 0, -6]} rotation={[0, 0, Math.PI / 4]}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial
          transparent
          opacity={0.04}
          color={new THREE.Color(0x8B5CF6)}
          emissive={new THREE.Color(0x8B5CF6).multiplyScalar(0.15)}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
