"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import TechSolarSystem to avoid SSR issues with Canvas from Three.js
const TechSolarSystem = dynamic(() => import("./TechSolarSystem"), {
  ssr: false,
});

const technologies = {
  "Frontend Mastery": [
    {
      name: "JavaScript (ES6+)",
      icon: "JS",
      color: "bg-yellow-400",
      textColor: "text-black",
    },
    {
      name: "TypeScript",
      icon: "TS",
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
      name: "React Native",
      icon: "📱",
      color: "bg-blue-500",
      textColor: "text-white",
    },
    { name: "Next.js", icon: "▲", color: "bg-black", textColor: "text-white" },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "bg-teal-500",
      textColor: "text-white",
    },
  ],
  "Backend & Data": [
    {
      name: "Node.js",
      icon: "⬢",
      color: "bg-green-600",
      textColor: "text-white",
    },
    {
      name: "GraphQL",
      icon: "🔷",
      color: "bg-pink-500",
      textColor: "text-white",
    },
    {
      name: "PostgresSQL",
      icon: "🐘",
      color: "bg-blue-700",
      textColor: "text-white",
    },
    { name: "Redis", icon: "🔴", color: "bg-red-600", textColor: "text-white" },
  ],
  "Tools & DevOps": [
    {
      name: "Git & GitHub",
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
      name: "Testing",
      icon: "🧪",
      color: "bg-purple-600",
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

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend Mastery");
  const [isPaused, setIsPaused] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const categories = Object.keys(technologies).map((cat) => ({
    name: cat,
    count: technologies[cat as keyof typeof technologies].length,
  }));

  const selectedTechs =
    technologies[selectedCategory as keyof typeof technologies] || [];

  return (
    <section
      id="techstack"
      className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-aurora-cyan to-aurora-purple bg-clip-text text-transparent mb-4 flex items-center gap-3">
                Tech Universe
                <span className="flex gap-1">
                  <svg
                    className="w-6 h-6 text-yellow-400 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Explore my constellation of technologies, featuring{" "}
                <span className="text-aurora-cyan font-semibold">
                  frontend mastery
                </span>
                ,{" "}
                <span className="text-aurora-purple font-semibold">
                  backend & data
                </span>
                , and{" "}
                <span className="text-aurora-blue font-semibold">
                  tools & DevOps
                </span>{" "}
                revolving around robust solution architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 touch-target ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-blue text-white shadow-lg shadow-aurora-cyan/50 scale-105"
                      : "glass text-white/90 hover:text-white hover:bg-white/10 active:bg-white/5 border border-white/10 hover:border-white/20"
                  }`}
                >
                  {category.name}{" "}
                  <span className="opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="group flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-white hover:bg-white/10 active:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 touch-target"
              >
                {isPaused ? (
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="font-medium">
                  {isPaused ? "Play" : "Pause"}
                </span>
              </button>

              <div>
                <label
                  htmlFor="animation-speed"
                  className="text-gray-300 text-sm mb-3 block font-medium"
                >
                  Animation Speed
                </label>
                <input
                  id="animation-speed"
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
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>0.5x</span>
                  <span className="text-aurora-cyan font-semibold">1x</span>
                  <span>2x</span>
                  <span>3x</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative min-h-[400px] h-[500px]">
            <TechSolarSystem
              techs={selectedTechs}
              isPaused={isPaused}
              speed={animationSpeed}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
