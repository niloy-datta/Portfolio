"use client";

import { Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { ErrorInfo } from "react";
import {
  Component,
  memo,
  ReactNode,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

const ROTATION_SPEED = 0.002;
const EARTH_SCALE = 2;
const EARTH_SEGMENTS = 48;
const STARS_COUNT = 8000;

class ModelErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("Earth model loading error:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const useEarthRotation = <T extends THREE.Object3D>(
  ref: React.RefObject<T | null>,
  speed = ROTATION_SPEED
) => {
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += speed;
    }
  });
};

const GlowingSwirls = memo(() => {
  const swirlsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (swirlsRef.current) {
      swirlsRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      swirlsRef.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  const swirls = useMemo(() => {
    return [
      {
        radius: 2.3,
        thickness: 0.15,
        color: "#06b6d4",
        speed: 0.2,
        rotation: [0.5, 0.5, 0],
      },
      {
        radius: 2.6,
        thickness: 0.1,
        color: "#ec4899",
        speed: -0.3,
        rotation: [-0.5, 1.2, 0.5],
      },
      {
        radius: 2.4,
        thickness: 0.08,
        color: "#a855f7",
        speed: 0.15,
        rotation: [1.5, -0.8, -0.3],
      },
      {
        radius: 2.8,
        thickness: 0.05,
        color: "#06b6d4",
        speed: 0.4,
        rotation: [2.1, 0.3, 1.1],
      },
    ];
  }, []);

  return (
    <group ref={swirlsRef}>
      {swirls.map((swirl, i) => (
        <group key={i} rotation={swirl.rotation as [number, number, number]}>
          <mesh>
            <torusGeometry args={[swirl.radius, swirl.thickness, 16, 100]} />
            <meshStandardMaterial
              color={swirl.color}
              emissive={swirl.color}
              emissiveIntensity={1.5}
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Outer Glow Layer */}
          <mesh scale={[1.05, 1.05, 1.05]}>
            <torusGeometry
              args={[swirl.radius, swirl.thickness * 1.2, 10, 80]}
            />
            <meshBasicMaterial
              color={swirl.color}
              transparent
              opacity={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
});
GlowingSwirls.displayName = "GlowingSwirls";

const TexturedEarth = memo(() => {
  const earthRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhongMaterial>(null);

  const [earthTexture, normalMap, specularMap] = useTexture([
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg",
  ]);

  useEffect(() => {
    const textures = [earthTexture, normalMap, specularMap];
    textures.forEach((texture: THREE.Texture) => {
      if (texture) {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        texture.anisotropy = 1;
      }
    });
  }, [earthTexture, normalMap, specularMap]);

  useEarthRotation(earthRef);

  const geometry = useMemo(
    () => new THREE.SphereGeometry(EARTH_SCALE, EARTH_SEGMENTS, EARTH_SEGMENTS),
    []
  );

  return (
    <group>
      <mesh ref={earthRef} geometry={geometry}>
        <meshPhongMaterial
          ref={materialRef}
          map={earthTexture}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={15}
          transparent={false}
          side={THREE.FrontSide}
        />
      </mesh>
      <GlowingSwirls />
    </group>
  );
});
TexturedEarth.displayName = "TexturedEarth";

const FallbackEarth = memo(() => {
  const earthRef = useRef<THREE.Mesh>(null);

  useEarthRotation(earthRef);

  const geometry = useMemo(
    () => new THREE.SphereGeometry(EARTH_SCALE, EARTH_SEGMENTS, EARTH_SEGMENTS),
    []
  );
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#2563eb",
        emissive: "#1e40af",
        emissiveIntensity: 0.3,
        roughness: 0.7,
        metalness: 0.1,
      }),
    []
  );

  return <mesh ref={earthRef} geometry={geometry} material={material} />;
});
FallbackEarth.displayName = "FallbackEarth";

function Earth() {
  return (
    <ModelErrorBoundary fallback={<FallbackEarth />}>
      <Suspense fallback={<FallbackEarth />}>
        <TexturedEarth />
      </Suspense>
    </ModelErrorBoundary>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow={false}
      />
      <pointLight
        position={[10, 10, 10]}
        intensity={0.6}
        distance={100}
        decay={2}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.2}
        distance={100}
        decay={2}
      />
    </>
  );
}

export default function EarthBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setDpr(Math.min(window.devicePixelRatio, 2));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={dpr}
        performance={{ min: 0.5 }}
        frameloop="always"
      >
        <SceneLights />
        <Earth />
        <Stars
          radius={300}
          depth={60}
          count={isMobile ? STARS_COUNT / 2 : STARS_COUNT}
          factor={4}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
