"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import HeroLightBeamWrapper from "./HeroLightBeamWrapper";

function AnimatedPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  // Animate the plane
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.1) * 0.1;
      meshRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.15) * 0.05;
    }

    // Animate material color
    if (materialRef.current) {
      const time = clock.elapsedTime * 0.2;
      const hue = (time * 0.1) % 1;
      
      // Cycle through blue → purple → cyan
      const color1 = new THREE.Color().setHSL((hue * 0.3 + 0.55) % 1, 0.7, 0.5);
      const color2 = new THREE.Color().setHSL((hue * 0.3 + 0.65) % 1, 0.6, 0.4);
      
      materialRef.current.color.lerpColors(color1, color2, 0.5);
      materialRef.current.emissive.copy(materialRef.current.color).multiplyScalar(0.3);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} rotation={[0, 0, 0]}>
      <planeGeometry args={[8, 8, 32, 32]} />
      <meshStandardMaterial
        ref={materialRef}
        transparent
        opacity={0.15}
        emissive={new THREE.Color(0x1B73FF).multiplyScalar(0.3)}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

function FogPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.1) * 0.5;
      meshRef.current.rotation.z = clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1.5]}>
      <planeGeometry args={[12, 12, 1, 1]} />
      <meshStandardMaterial
        transparent
        opacity={0.08}
        color={new THREE.Color(0x1B73FF)}
        emissive={new THREE.Color(0x1B73FF).multiplyScalar(0.2)}
        side={THREE.DoubleSide}
        fog={false}
      />
    </mesh>
  );
}

function AmbientLightBeam() {
  const lightRef = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      // Subtle intensity pulse
      lightRef.current.intensity = 0.3 + Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        position={[2, 2, 3]}
        angle={0.4}
        penumbra={0.8}
        intensity={0.3}
        color={new THREE.Color(0x1B73FF)}
        castShadow={false}
      />
      <spotLight
        position={[-2, -2, 3]}
        angle={0.4}
        penumbra={0.8}
        intensity={0.2}
        color={new THREE.Color(0x8B5CF6)}
        castShadow={false}
      />
      <ambientLight intensity={0.2} />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <fog attach="fog" args={[new THREE.Color(0x0A0A0A), 8, 15]} />
        <AmbientLightBeam />
        <AnimatedPlane />
        <FogPlane />
        
        {/* Hero Light Beam - God ray effect behind logo */}
        <HeroLightBeamWrapper />
      </Canvas>
    </div>
  );
}

