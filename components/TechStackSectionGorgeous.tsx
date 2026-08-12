"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { HiPause, HiPlay, HiSparkles } from "react-icons/hi";
import { RiRocketLine, RiStarLine } from "react-icons/ri";
import { TbBrandNodejs, TbBrandReact, TbTools } from "react-icons/tb";

const TechUniverseGorgeous = dynamic(() => import("./TechUniverseGorgeous"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[500px]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-cyan-400/20 border-t-cyan-400 animate-spin" />
          <div className="absolute inset-2">
            <div className="w-full h-full rounded-full border-4 border-purple-400/20 border-b-purple-400 animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
          </div>
          <HiSparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-cyan-400 animate-pulse" />
        </div>
        <p className="text-white/60 text-sm animate-pulse">
          Initializing Galaxy...
        </p>
      </div>
    </div>
  ),
});

interface TechItem {
  name: string;
  icon: string;
  color: string;
  textColor: string;
}

interface TechData {
  Frontend: TechItem[];
  Backend: TechItem[];
  Tools: TechItem[];
}

const techData: TechData = {
  Frontend: [
    {
      name: "React",
      icon: "⚛️",
      color: "bg-blue-500",
      textColor: "text-white",
    },
    { name: "Next.js", icon: "▲", color: "bg-black", textColor: "text-white" },
    {
      name: "TypeScript",
      icon: "🔷",
      color: "bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "Tailwind",
      icon: "💨",
      color: "bg-cyan-500",
      textColor: "text-white",
    },
    {
      name: "Angular",
      icon: "🅰️",
      color: "bg-red-600",
      textColor: "text-white",
    },
    {
      name: "Framer Motion",
      icon: "🎨",
      color: "bg-pink-500",
      textColor: "text-white",
    },
    {
      name: "Three.js",
      icon: "🌐",
      color: "bg-black",
      textColor: "text-white",
    },
    {
      name: "HTML5",
      icon: "📄",
      color: "bg-orange-500",
      textColor: "text-white",
    },
    { name: "CSS3", icon: "🎨", color: "bg-blue-600", textColor: "text-white" },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "💚",
      color: "bg-green-600",
      textColor: "text-white",
    },
    {
      name: "Python",
      icon: "🐍",
      color: "bg-yellow-500",
      textColor: "text-black",
    },
    {
      name: "FastAPI",
      icon: "⚡",
      color: "bg-teal-500",
      textColor: "text-white",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "bg-green-500",
      textColor: "text-white",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "bg-blue-600",
      textColor: "text-white",
    },
    { name: "Redis", icon: "🔴", color: "bg-red-500", textColor: "text-white" },
    {
      name: "GraphQL",
      icon: "◈",
      color: "bg-pink-600",
      textColor: "text-white",
    },
    {
      name: "Prisma",
      icon: "🔷",
      color: "bg-gray-700",
      textColor: "text-white",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "📦",
      color: "bg-orange-600",
      textColor: "text-white",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "AWS",
      icon: "☁️",
      color: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "Figma",
      icon: "🎨",
      color: "bg-purple-500",
      textColor: "text-white",
    },
    {
      name: "VS Code",
      icon: "💻",
      color: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "Linux",
      icon: "🐧",
      color: "bg-yellow-600",
      textColor: "text-black",
    },
    { name: "Vercel", icon: "▲", color: "bg-black", textColor: "text-white" },
    {
      name: "Postman",
      icon: "🔶",
      color: "bg-orange-500",
      textColor: "text-white",
    },
  ],
};

const categoryIcons = {
  Frontend: TbBrandReact,
  Backend: TbBrandNodejs,
  Tools: TbTools,
};

const categoryGradients = {
  Frontend: "from-cyan-400 via-blue-500 to-purple-500",
  Backend: "from-green-400 via-emerald-500 to-teal-500",
  Tools: "from-orange-400 via-red-500 to-pink-500",
};

const categoryGlows = {
  Frontend: "shadow-cyan-500/30",
  Backend: "shadow-emerald-500/30",
  Tools: "shadow-orange-500/30",
};

export default function TechStackSectionGorgeous() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] =
    useState<keyof TechData>("Frontend");
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const CategoryIcon = categoryIcons[activeCategory];

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Epic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Noise texture - using pseudo-element approach */}
      <div className="absolute inset-0 opacity-10 bg-noise" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl"
          >
            <RiStarLine
              className="text-cyan-400 animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Explore My Universe
            </span>
            <HiSparkles className="text-purple-400 animate-pulse" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Tech </span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Universe
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Navigate through my{" "}
            <span className="text-cyan-400 font-medium">cosmic collection</span>{" "}
            of technologies and frameworks I use to build{" "}
            <span className="text-purple-400 font-medium">
              stellar experiences
            </span>
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Control Panel */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            {/* Category Selector */}
            <div className="flex gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-x-auto">
              {(Object.keys(techData) as (keyof TechData)[]).map((category) => {
                const Icon = categoryIcons[category];
                const isActive = activeCategory === category;
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className={`absolute inset-0 bg-gradient-to-r ${categoryGradients[category]} rounded-xl`}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon
                      className={`relative z-10 text-lg ${isActive ? "animate-spin" : ""}`}
                      style={{ animationDuration: "3s" }}
                    />
                    <span className="relative z-10">{category}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Play/Pause */}
              <motion.button
                onClick={() => setIsPaused(!isPaused)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                  isPaused
                    ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400"
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                }`}
              >
                {isPaused ? (
                  <HiPlay className="text-xl" />
                ) : (
                  <HiPause className="text-xl" />
                )}
              </motion.button>

              {/* Speed Control */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                <RiRocketLine
                  className={`text-lg ${speed > 1 ? "text-cyan-400 animate-pulse" : "text-gray-500"}`}
                />
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  aria-label="Animation speed control"
                  title="Adjust animation speed"
                  className="w-24 h-1 accent-cyan-400 cursor-pointer"
                />
                <span className="text-xs font-mono text-cyan-400 min-w-[3ch]">
                  {speed.toFixed(1)}x
                </span>
              </div>
            </div>
          </div>

          {/* 3D Universe Container */}
          <div className="relative rounded-3xl overflow-hidden group">
            {/* Glowing border */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradients[activeCategory]} rounded-3xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500`}
            />

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-xl border border-white/10">
              {/* Top accent bar */}
              <div
                className={`h-1 bg-gradient-to-r ${categoryGradients[activeCategory]}`}
              />

              {/* 3D Scene */}
              <div className="h-[350px] sm:h-[450px] md:h-[550px]">
                {mounted && (
                  <TechUniverseGorgeous
                    techs={techData[activeCategory]}
                    isPaused={isPaused}
                    speed={speed}
                  />
                )}
              </div>

              {/* Bottom Info Bar */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-white/5 bg-black/40 backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Category Info */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${categoryGradients[activeCategory]}`}
                    >
                      <CategoryIcon className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {activeCategory}
                      </p>
                      <p className="text-xs text-gray-400">
                        {techData[activeCategory].length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2">
                    {techData[activeCategory].slice(0, 5).map((tech, i) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-default"
                      >
                        {tech.icon} {tech.name}
                      </motion.span>
                    ))}
                    {techData[activeCategory].length > 5 && (
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500">
                        +{techData[activeCategory].length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            {[
              { icon: "🖱️", text: "Drag to rotate" },
              { icon: "👆", text: "Hover planets" },
              { icon: "🎮", text: "Use controls" },
            ].map((hint, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5"
              >
                <span className="text-lg">{hint.icon}</span>
                <span className="text-xs text-gray-400">{hint.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
