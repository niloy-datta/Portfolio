"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function StylizedEarth() {
  const earthRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={earthRef}>
      {/* Ocean Base */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshPhysicalMaterial
          color="#1e3a8a" // Deep blue ocean
          metalness={0.4}
          roughness={0.7}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Simple Continents Representation (Low Poly Isospheres scattered) to approximate stylized look without external assets */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <dodecahedronGeometry args={[2.22, 1]} />
        <meshStandardMaterial
          color="#10b981" // Green Land
          flatShading
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh rotation={[-0.5, 2, 0.4]}>
        <dodecahedronGeometry args={[2.21, 1]} />
        <meshStandardMaterial
          color="#059669" // Darker Green
          flatShading
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

function RibbonRing({
  radius,
  width,
  color,
  speed,
  rotationOffset,
}: {
  radius: number;
  width: number;
  color: string;
  speed: number;
  rotationOffset: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.x =
        rotationOffset[0] + Math.sin(t * speed * 0.5) * 0.2;
      ref.current.rotation.y += speed;
      ref.current.rotation.z =
        rotationOffset[2] + Math.cos(t * speed * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={ref} rotation={rotationOffset}>
      {/* Tube geometry to act as thick stylized ribbons */}
      <torusGeometry args={[radius, width, 16, 100]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.1}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default function ContactGlobe() {
  return (
    <div className="w-full h-full relative cursor-move">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#a855f7" />

        <group position={[0, -0.5, 0]}>
          <StylizedEarth />

          {/* Thick Stylized Ribbons imitating the reference image */}
          <RibbonRing
            radius={3.2}
            width={0.15}
            color="#e9d5ff"
            speed={0.005}
            rotationOffset={[0.5, 0, 0.2]}
          />
          <RibbonRing
            radius={3.5}
            width={0.12}
            color="#c084fc"
            speed={-0.007}
            rotationOffset={[-0.3, 0, -0.2]}
          />
          <RibbonRing
            radius={3.8}
            width={0.08}
            color="#a855f7"
            speed={0.004}
            rotationOffset={[0.8, 0, 0.5]}
          />

          {/* Floating particles/stars near the globe */}
          <Stars
            radius={15}
            depth={10}
            count={500}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />
        </group>
      </Canvas>
    </div>
  );
}
