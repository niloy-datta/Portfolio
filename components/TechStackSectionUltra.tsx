"use client";

import { motion } from "framer-motion";
import { Atom, Pause, Play, Rocket, Sparkles, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import TechUniverseUltra to avoid SSR issues with Canvas from Three.js
const TechUniverseUltra = dynamic(() => import("./TechUniverseUltra"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[450px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-2 border-aurora-cyan border-t-transparent animate-spin" />
        <p className="text-gray-400 text-sm">Loading Universe...</p>
      </div>
    </div>
  ),
});

const technologies = {
  "Frontend Mastery": [
    {
      name: "JavaScript",
      icon: "⚡",
      color: "bg-yellow-400",
      textColor: "text-black",
    },
    {
      name: "TypeScript",
      icon: "🔷",
      color: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "React.js",
      icon: "⚛️",
      color: "bg-cyan-500",
      textColor: "text-white",
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "bg-black",
      textColor: "text-white",
    },
    {
      name: "Tailwind",
      icon: "🎨",
      color: "bg-teal-500",
      textColor: "text-white",
    },
    {
      name: "React Native",
      icon: "📱",
      color: "bg-blue-500",
      textColor: "text-white",
    },
  ],
  "Backend & Data": [
    {
      name: "Node.js",
      icon: "💚",
      color: "bg-green-600",
      textColor: "text-white",
    },
    {
      name: "GraphQL",
      icon: "🔮",
      color: "bg-pink-500",
      textColor: "text-white",
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "Redis",
      icon: "🔴",
      color: "bg-red-600",
      textColor: "text-white",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "bg-green-500",
      textColor: "text-white",
    },
  ],
  "Tools & DevOps": [
    {
      name: "Git",
      icon: "🔀",
      color: "bg-orange-500",
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
      color: "bg-orange-400",
      textColor: "text-white",
    },
    {
      name: "CI/CD",
      icon: "⚙️",
      color: "bg-gray-600",
      textColor: "text-white",
    },
  ],
};

const categoryIcons = {
  "Frontend Mastery": <Zap className="w-5 h-5" />,
  "Backend & Data": <Atom className="w-5 h-5" />,
  "Tools & DevOps": <Rocket className="w-5 h-5" />,
};

export default function TechStackSectionUltra() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend Mastery");
  const [isPaused, setIsPaused] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const categories = Object.keys(technologies).map((cat) => ({
    name: cat,
    count: technologies[cat as keyof typeof technologies].length,
    icon: categoryIcons[cat as keyof typeof categoryIcons],
  }));

  const selectedTechs =
    technologies[selectedCategory as keyof typeof technologies] || [];

  return (
    <section
      id="techstack"
      className="w-full py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-aurora-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-aurora-purple/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02] project-grid-pattern" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aurora-cyan/10 to-aurora-purple/10 border border-aurora-cyan/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-aurora-cyan" />
            <span className="text-xs uppercase tracking-[0.2em] text-aurora-cyan font-medium">
              Interactive 3D Experience
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-white via-aurora-cyan to-aurora-purple bg-clip-text text-transparent">
              Tech Universe
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my constellation of technologies orbiting around robust
            solution architecture
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Panel - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[380px] space-y-6"
          >
            {/* Category Selector */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">
                Select Category
              </h3>
              <div className="space-y-3">
                {categories.map((category, idx) => (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-aurora-cyan/20 via-aurora-purple/20 to-aurora-blue/20 border border-aurora-cyan/30 shadow-lg shadow-aurora-cyan/10"
                        : "bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl transition-all ${
                        selectedCategory === category.name
                          ? "bg-aurora-cyan/20 text-aurora-cyan"
                          : "bg-white/5 text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-semibold transition-colors ${
                          selectedCategory === category.name
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {category.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {category.count} technologies
                      </p>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedCategory === category.name
                          ? "bg-aurora-cyan shadow-lg shadow-aurora-cyan/50"
                          : "bg-white/10"
                      }`}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 space-y-5">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium">
                Animation Controls
              </h3>

              {/* Play/Pause */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`w-full flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isPaused
                    ? "bg-gradient-to-r from-aurora-cyan to-aurora-purple text-white shadow-lg shadow-aurora-purple/20"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                {isPaused ? (
                  <>
                    <Play className="w-5 h-5" />
                    Resume Animation
                  </>
                ) : (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause Animation
                  </>
                )}
              </button>

              {/* Speed Control */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-300">Speed</label>
                  <span className="text-aurora-cyan font-mono font-bold">
                    {animationSpeed}x
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.5"
                    value={animationSpeed}
                    onChange={(e) =>
                      setAnimationSpeed(parseFloat(e.target.value))
                    }
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-aurora-cyan"
                    aria-label="Animation speed control"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-2 px-1">
                    <span>0.5x</span>
                    <span>1x</span>
                    <span>2x</span>
                    <span>3x</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">
                Current Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedTechs.map((tech, idx) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    <span>{tech.icon}</span>
                    <span className="text-gray-300">{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - 3D Universe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-aurora-cyan/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-aurora-purple/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-aurora-purple/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-aurora-cyan/30 rounded-br-3xl" />

              {/* 3D Canvas */}
              <div className="h-[500px] sm:h-[550px]">
                <TechUniverseUltra
                  techs={selectedTechs}
                  isPaused={isPaused}
                  speed={animationSpeed}
                />
              </div>

              {/* Interaction hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-xs text-gray-400">
                🖱️ Drag to rotate • Hover planets for details
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
