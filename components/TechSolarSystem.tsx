"use client";

import { Float, Html, OrbitControls, Stars } from "@react-three/drei";
import {
  Canvas,
  useFrame,
  useThree as useThreeFiber,
} from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

interface Tech {
  name: string;
  icon: string;
  color: string;
  textColor: string;
}

interface TechSolarSystemProps {
  techs: Tech[];
  isPaused: boolean;
  speed: number;
}

function Sun() {
  return (
    <group>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          emissive="#06b6d4"
          emissiveIntensity={2}
          color="#06b6d4"
          toneMapped={false}
        />
      </mesh>
      {/* Glow */}
      <pointLight distance={10} intensity={2} color="#06b6d4" />
      <mesh scale={[1.4, 1.4, 1.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function Planet({
  tech,
  index,
  total,
  radius,
  speed,
  isPaused,
}: {
  tech: Tech;
  index: number;
  total: number;
  radius: number;
  speed: number;
  isPaused: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const angle = (index / total) * Math.PI * 2;
  const currentAngleRef = useRef(angle);

  useFrame((state, delta) => {
    if (!meshRef.current || isPaused) return;
    currentAngleRef.current += delta * speed * 0.2;
    const currentAngle = currentAngleRef.current;
    meshRef.current.position.x = Math.cos(currentAngle) * radius;
    meshRef.current.position.z = Math.sin(currentAngle) * radius;
    meshRef.current.lookAt(state.camera.position);
  });

  const getColor = (cls: string) => {
    if (cls.includes("yellow")) return "#fbbf24";
    if (cls.includes("blue")) return "#2563eb";
    if (cls.includes("cyan")) return "#06b6d4";
    if (cls.includes("green")) return "#16a34a";
    if (cls.includes("pink")) return "#db2777";
    if (cls.includes("red")) return "#dc2626";
    if (cls.includes("orange")) return "#f97316";
    if (cls.includes("purple")) return "#9333ea";
    if (cls.includes("teal")) return "#14b8a6";
    if (cls.includes("black")) return "#000000";
    return "#ffffff";
  };

  const color = getColor(tech.color);

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color={color}
            metalness={0.6}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh scale={[1.1, 1.1, 1.1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            side={THREE.BackSide}
          />
        </mesh>
        <Html
          position={[0, 0.8, 0]}
          center
          distanceFactor={10}
          style={{ pointerEvents: "none" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl filter drop-shadow-lg">{tech.icon}</span>
            <span className="text-xs font-bold text-white bg-black/50 px-2 py-1 rounded-full backdrop-blur-md mt-1 whitespace-nowrap border border-white/20">
              {tech.name}
            </span>
          </div>
        </Html>
      </Float>
    </group>
  );
}

function OrbitPath({ radius }: { radius: number }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Scene({ techs, isPaused, speed }: TechSolarSystemProps) {
  const { viewport } = useThreeFiber();
  const isMobile = viewport.width < 10;
  const orbitRadius = isMobile ? 3.5 : 4.5;

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Sun />
      <OrbitPath radius={orbitRadius} />
      {techs.map((tech, i) => (
        <Planet
          key={tech.name}
          tech={tech}
          index={i}
          total={techs.length}
          radius={orbitRadius}
          speed={speed}
          isPaused={isPaused}
        />
      ))}
      <OrbitControls
        enableZoom={false}
        autoRotate={!isPaused}
        autoRotateSpeed={0.5 * speed}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Suspense>
  );
}

export default function TechSolarSystem({
  techs,
  isPaused,
  speed,
}: TechSolarSystemProps) {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px]">
      <Canvas camera={{ position: [0, 6, 10], fov: 45 }}>
        <Scene techs={techs} isPaused={isPaused} speed={speed} />
      </Canvas>
    </div>
  );
}
