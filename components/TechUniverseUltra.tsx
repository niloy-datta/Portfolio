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

// Pulsating Sun with multiple layers
function CoreSun() {
  const sunRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sunRef.current) {
      sunRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.3 + Math.sin(t * 1.5) * 0.1);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.sin(t * 2) * 0.1;
    }
    if (outerGlowRef.current) {
      outerGlowRef.current.scale.setScalar(1.6 + Math.sin(t) * 0.15);
      (outerGlowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.15 + Math.sin(t * 1.2) * 0.05;
    }
  });

  return (
    <group>
      {/* Inner Core - Bright */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial
          emissive="#06b6d4"
          emissiveIntensity={3}
          color="#ffffff"
          toneMapped={false}
        />
      </mesh>

      {/* Middle Glow */}
      <mesh ref={glowRef} scale={[1.3, 1.3, 1.3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer Glow */}
      <mesh ref={outerGlowRef} scale={[1.6, 1.6, 1.6]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Corona effect */}
      <mesh scale={[2.2, 2.2, 2.2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Multiple lights for dynamic effect */}
      <pointLight distance={15} intensity={3} color="#06b6d4" />
      <pointLight distance={8} intensity={1.5} color="#8b5cf6" />
      <pointLight distance={5} intensity={1} color="#3b82f6" />

      {/* Sparkles around sun */}
      <Sparkles
        count={50}
        size={2}
        scale={3}
        speed={0.5}
        color="#06b6d4"
        opacity={0.6}
      />
    </group>
  );
}

// Enhanced Planet with trail effect
function TechPlanet({
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
  const meshRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);

  const angle = (index / total) * Math.PI * 2;
  const currentAngleRef = useRef(angle);

  // Trail positions
  const trailLength = 30;
  const trailPositions = useMemo(() => new Float32Array(trailLength * 3), []);
  const trailIndex = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (!isPaused) {
      currentAngleRef.current += delta * speed * 0.15;
    }

    const currentAngle = currentAngleRef.current;
    const x = Math.cos(currentAngle) * radius;
    const z = Math.sin(currentAngle) * radius;
    const y = Math.sin(currentAngle * 2) * 0.3; // Slight vertical wave

    meshRef.current.position.set(x, y, z);
    meshRef.current.lookAt(state.camera.position);

    // Update trail
    if (trailRef.current && !isPaused) {
      const positions = trailRef.current.geometry.attributes.position
        .array as Float32Array;
      const idx = (trailIndex.current % trailLength) * 3;
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;
      trailRef.current.geometry.attributes.position.needsUpdate = true;
      trailIndex.current++;
    }

    // Hover effect
    if (hovered && meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
    } else if (meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  const getColor = (cls: string) => {
    if (cls.includes("yellow")) return "#fbbf24";
    if (cls.includes("blue-700")) return "#1d4ed8";
    if (cls.includes("blue-600")) return "#2563eb";
    if (cls.includes("blue-500")) return "#3b82f6";
    if (cls.includes("blue")) return "#3b82f6";
    if (cls.includes("cyan")) return "#06b6d4";
    if (cls.includes("green")) return "#16a34a";
    if (cls.includes("pink")) return "#db2777";
    if (cls.includes("red")) return "#dc2626";
    if (cls.includes("orange")) return "#f97316";
    if (cls.includes("purple")) return "#9333ea";
    if (cls.includes("teal")) return "#14b8a6";
    if (cls.includes("gray")) return "#6b7280";
    if (cls.includes("black")) return "#1f2937";
    return "#ffffff";
  };

  const color = getColor(tech.color);

  return (
    <group>
      {/* Trail */}
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[trailPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color={color}
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      <group ref={meshRef}>
        <Float speed={3} rotationIntensity={0.3} floatIntensity={0.3}>
          {/* Planet core */}
          <mesh
            onPointerOver={() => {
              setHovered(true);
              onHover(tech);
            }}
            onPointerOut={() => {
              setHovered(false);
              onHover(null);
            }}
          >
            <sphereGeometry args={[0.4, 48, 48]} />
            <meshStandardMaterial
              color={color}
              metalness={0.8}
              roughness={0.1}
              emissive={color}
              emissiveIntensity={hovered ? 1.2 : 0.5}
            />
          </mesh>

          {/* Inner glow */}
          <mesh scale={[1.15, 1.15, 1.15]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={hovered ? 0.5 : 0.25}
              side={THREE.BackSide}
            />
          </mesh>

          {/* Outer glow */}
          <mesh scale={[1.4, 1.4, 1.4]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={hovered ? 0.25 : 0.1}
              side={THREE.BackSide}
            />
          </mesh>

          {/* Ring for some planets */}
          {index % 3 === 0 && (
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <ringGeometry args={[0.55, 0.7, 32]} />
              <meshBasicMaterial
                color={color}
                transparent
                opacity={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          )}

          {/* Label */}
          <Html
            position={[0, 0.75, 0]}
            center
            distanceFactor={8}
            style={{ pointerEvents: "none" }}
          >
            <div
              className={`flex flex-col items-center transition-all duration-300 ${hovered ? "scale-110" : ""}`}
            >
              <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                {tech.icon}
              </span>
              <span
                className={`text-xs font-bold text-white px-3 py-1.5 rounded-full backdrop-blur-xl mt-1 whitespace-nowrap border transition-all duration-300 ${
                  hovered
                    ? "bg-white/30 border-white/50 shadow-lg shadow-white/20"
                    : "bg-black/60 border-white/20"
                }`}
              >
                {tech.name}
              </span>
            </div>
          </Html>

          {/* Point light on hover */}
          {hovered && <pointLight distance={3} intensity={2} color={color} />}
        </Float>
      </group>
    </group>
  );
}

// Animated orbit rings
function OrbitRing({
  radius,
  color = "#ffffff",
  opacity = 0.08,
}: {
  radius: number;
  color?: string;
  opacity?: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      const t = state.clock.getElapsedTime();
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
        opacity + Math.sin(t * 0.5) * 0.03;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.02, radius + 0.02, 128]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Nebula background effect
function NebulaField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 15 + Math.random() * 10;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#3b82f6"),
    ];
    for (let i = 0; i < count; i++) {
      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return cols;
  }, []);

  return (
    <points>
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
        size={0.3}
        transparent
        opacity={0.6}
        vertexColors
        sizeAttenuation
      />
    </points>
  );
}

export default function TechUniverseUltra({
  techs,
  isPaused,
  speed,
}: TechUniverseProps) {
  const [hoveredTech, setHoveredTech] = useState<Tech | null>(null);
  const orbitRadius = 4;

  return (
    <div className="w-full h-full min-h-[450px] relative">
      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-aurora-cyan/20 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-aurora-purple/10 rounded-full blur-[100px]" />
      </div>

      {/* Hovered tech info */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 z-10"
        >
          <p className="text-white font-bold text-center">{hoveredTech.name}</p>
        </motion.div>
      )}

      <Canvas
        camera={{ position: [0, 5, 9], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />

          {/* Background */}
          <Stars
            radius={80}
            depth={60}
            count={8000}
            factor={5}
            saturation={0.5}
            fade
            speed={0.5}
          />
          <NebulaField />

          {/* Core Sun */}
          <CoreSun />

          {/* Multiple orbit rings for depth */}
          <OrbitRing radius={orbitRadius} color="#06b6d4" opacity={0.12} />
          <OrbitRing
            radius={orbitRadius * 0.6}
            color="#8b5cf6"
            opacity={0.06}
          />
          <OrbitRing
            radius={orbitRadius * 1.4}
            color="#3b82f6"
            opacity={0.04}
          />

          {/* Tech Planets */}
          {techs.map((tech, i) => (
            <TechPlanet
              key={tech.name}
              tech={tech}
              index={i}
              total={techs.length}
              radius={orbitRadius}
              speed={speed}
              isPaused={isPaused}
              onHover={setHoveredTech}
            />
          ))}

          {/* Sparkles in space */}
          <Sparkles
            count={100}
            size={1.5}
            scale={12}
            speed={0.3}
            color="#ffffff"
            opacity={0.3}
          />

          {/* Orbit Controls */}
          <OrbitControls
            enableZoom={false}
            autoRotate={!isPaused}
            autoRotateSpeed={0.3 * speed}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            enablePan={false}
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
