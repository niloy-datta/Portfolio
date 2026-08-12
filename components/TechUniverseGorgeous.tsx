"use client";

import { Float, Html, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

interface Tech {
  name: string;
  icon: string;
  color: string;
  textColor: string;
}

interface TechUniverseProps {
  techs: Tech[];
  isPaused: boolean;
  speed: number;
}

// Stunning Galaxy Core with multiple layers and effects
function GalaxyCore() {
  const coreRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.1;
    }

    if (innerRef.current) {
      innerRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.08);
    }

    if (pulseRef.current) {
      const scale = 1.8 + Math.sin(t * 2) * 0.2;
      pulseRef.current.scale.setScalar(scale);
      (pulseRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.15 + Math.sin(t * 2) * 0.1;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.1;
      ringRef1.current.rotation.z = t * 0.3;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x = Math.PI / 3;
      ringRef2.current.rotation.z = -t * 0.2;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Ultra bright inner core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          emissive="#00fff2"
          emissiveIntensity={5}
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>

      {/* Hot glow layer 1 */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.5}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Hot glow layer 2 */}
      <mesh scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Pulsing outer aura */}
      <mesh ref={pulseRef} scale={[1.8, 1.8, 1.8]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Mega corona */}
      <mesh scale={[2.5, 2.5, 2.5]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Rotating ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>

      {/* Rotating ring 2 */}
      <mesh ref={ringRef2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>

      {/* Central lights */}
      <pointLight distance={20} intensity={5} color="#06b6d4" />
      <pointLight distance={12} intensity={3} color="#8b5cf6" />
      <pointLight distance={8} intensity={2} color="#ffffff" />

      {/* Core sparkles */}
      <Sparkles
        count={80}
        size={3}
        scale={2.5}
        speed={0.8}
        color="#00fff2"
        opacity={0.8}
      />
      <Sparkles
        count={40}
        size={2}
        scale={3}
        speed={0.5}
        color="#8b5cf6"
        opacity={0.6}
      />
    </group>
  );
}

// Beautiful orbiting planet with trails and effects
function OrbitingPlanet({
  tech,
  index,
  total,
  radius,
  speed,
  isPaused,
  onHover,
}: {
  tech: Tech;
  index: number;
  total: number;
  radius: number;
  speed: number;
  isPaused: boolean;
  onHover: (tech: Tech | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const angleRef = useRef((index / total) * Math.PI * 2);
  const orbitTilt = (index % 3) * 0.1 - 0.1;

  useFrame((state, delta) => {
    if (!groupRef.current || !planetRef.current) return;

    if (!isPaused) {
      angleRef.current += delta * speed * 0.12;
    }

    const angle = angleRef.current;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.sin(angle * 2 + index) * 0.4 * Math.cos(orbitTilt);

    groupRef.current.position.set(x, y, z);

    // Planet rotation
    planetRef.current.rotation.y += delta * 0.5;

    // Glow pulse
    if (glowRef.current) {
      const t = state.clock.getElapsedTime();
      glowRef.current.scale.setScalar(1.3 + Math.sin(t * 3 + index) * 0.1);
    }

    // Smooth hover scale
    const targetScale = hovered ? 1.4 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  const getColor = (cls: string) => {
    if (cls.includes("yellow")) return "#fbbf24";
    if (cls.includes("blue-700")) return "#1d4ed8";
    if (cls.includes("blue-600")) return "#2563eb";
    if (cls.includes("blue-500")) return "#3b82f6";
    if (cls.includes("blue")) return "#3b82f6";
    if (cls.includes("cyan")) return "#06b6d4";
    if (cls.includes("green-600")) return "#16a34a";
    if (cls.includes("green-500")) return "#22c55e";
    if (cls.includes("green")) return "#22c55e";
    if (cls.includes("pink")) return "#ec4899";
    if (cls.includes("red")) return "#ef4444";
    if (cls.includes("orange")) return "#f97316";
    if (cls.includes("purple")) return "#a855f7";
    if (cls.includes("teal")) return "#14b8a6";
    if (cls.includes("gray")) return "#6b7280";
    if (cls.includes("black")) return "#3f3f46";
    return "#ffffff";
  };

  const color = getColor(tech.color);
  const colorObj = new THREE.Color(color);

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Planet core with fancy material */}
        <mesh
          ref={planetRef}
          onPointerOver={() => {
            setHovered(true);
            onHover(tech);
          }}
          onPointerOut={() => {
            setHovered(false);
            onHover(null);
          }}
        >
          <sphereGeometry args={[0.35, 48, 48]} />
          <meshStandardMaterial
            color={color}
            metalness={0.9}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={hovered ? 1.5 : 0.6}
          />
        </mesh>

        {/* Inner glow */}
        <mesh ref={glowRef} scale={[1.3, 1.3, 1.3]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={hovered ? 0.5 : 0.3}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Outer glow */}
        <mesh scale={[1.6, 1.6, 1.6]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={hovered ? 0.3 : 0.12}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Saturn-like ring for some planets */}
        {index % 2 === 0 && (
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[0.5, 0.65, 32]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.5}
              side={THREE.DoubleSide}
            />
          </mesh>
        )}

        {/* Label */}
        <Html
          position={[0, 0.7, 0]}
          center
          distanceFactor={8}
          style={{ pointerEvents: "none" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: hovered ? 1.15 : 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center"
          >
            <span className="text-3xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              {tech.icon}
            </span>
            <span
              className={`mt-1 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap backdrop-blur-xl border transition-all duration-300 ${
                hovered
                  ? "bg-white/40 border-white/60 text-white shadow-lg shadow-white/30 scale-110"
                  : "bg-black/70 border-white/20 text-white/90"
              }`}
            >
              {tech.name}
            </span>
          </motion.div>
        </Html>

        {/* Hover light */}
        {hovered && <pointLight distance={4} intensity={3} color={color} />}
      </Float>
    </group>
  );
}

// Glowing orbit path
function OrbitPath({
  radius,
  color = "#ffffff",
  opacity = 0.1,
}: {
  radius: number;
  color?: string;
  opacity?: number;
}) {
  const pathRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (pathRef.current) {
      const t = state.clock.getElapsedTime();
      (pathRef.current.material as THREE.MeshBasicMaterial).opacity =
        opacity + Math.sin(t) * 0.03;
    }
  });

  return (
    <mesh ref={pathRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 200]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// Cosmic dust field
function CosmicDust() {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.5;
      pos[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#3b82f6"),
      new THREE.Color("#ec4899"),
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return cols;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        transparent
        opacity={0.7}
        vertexColors
        sizeAttenuation
      />
    </points>
  );
}

// Nebula background clouds
function NebulaCloud({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.scale.setScalar(scale + Math.sin(t * 0.5) * 0.1);
      (ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.08 + Math.sin(t * 0.3) * 0.02;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[3, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.08}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export default function TechUniverseGorgeous({
  techs,
  isPaused,
  speed,
}: TechUniverseProps) {
  const [hoveredTech, setHoveredTech] = useState<Tech | null>(null);
  const mainOrbitRadius = 4;

  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] relative">
      {/* Outer glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 bg-cyan-400/30 rounded-full blur-[60px] sm:blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/15 rounded-full blur-[50px] sm:blur-[80px]" />
      </div>

      {/* Hovered tech tooltip */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">{hoveredTech.icon}</span>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">
                  {hoveredTech.name}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400">
                  Tap to explore
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <Canvas
        camera={{ position: [0, 4, 10], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.5}
            color="#ffffff"
          />

          {/* Deep space background */}
          <Stars
            radius={100}
            depth={80}
            count={10000}
            factor={6}
            saturation={0.8}
            fade
            speed={0.3}
          />

          {/* Nebula clouds */}
          <NebulaCloud position={[-8, 3, -10]} color="#06b6d4" scale={1.5} />
          <NebulaCloud position={[10, -2, -8]} color="#8b5cf6" scale={1.2} />
          <NebulaCloud position={[0, 5, -12]} color="#3b82f6" scale={1.8} />

          {/* Cosmic dust */}
          <CosmicDust />

          {/* Galaxy Core */}
          <GalaxyCore />

          {/* Orbit paths */}
          <OrbitPath radius={mainOrbitRadius} color="#06b6d4" opacity={0.15} />
          <OrbitPath
            radius={mainOrbitRadius * 0.65}
            color="#8b5cf6"
            opacity={0.08}
          />
          <OrbitPath
            radius={mainOrbitRadius * 1.35}
            color="#3b82f6"
            opacity={0.06}
          />

          {/* Tech Planets */}
          {techs.map((tech, i) => (
            <OrbitingPlanet
              key={tech.name}
              tech={tech}
              index={i}
              total={techs.length}
              radius={mainOrbitRadius}
              speed={speed}
              isPaused={isPaused}
              onHover={setHoveredTech}
            />
          ))}

          {/* Extra sparkles */}
          <Sparkles
            count={150}
            size={2}
            scale={15}
            speed={0.4}
            color="#ffffff"
            opacity={0.4}
          />
          <Sparkles
            count={80}
            size={1.5}
            scale={12}
            speed={0.3}
            color="#06b6d4"
            opacity={0.3}
          />

          {/* Camera controls */}
          <OrbitControls
            enableZoom={false}
            autoRotate={!isPaused}
            autoRotateSpeed={0.2 * speed}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.6}
            enablePan={false}
            dampingFactor={0.03}
            rotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
