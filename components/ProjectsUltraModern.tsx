"use client";

import { profileData } from "@/data/profile";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

// 3D Tilt Card Component
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: (typeof profileData.projects)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const borderGradientClass = project.color.includes("purple")
    ? "project-border-purple"
    : "project-border-blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <TiltCard className="h-full">
        {/* Animated Border Gradient */}
        <motion.div
          className={`absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${borderGradientClass}`}
        />

        {/* Card Content */}
        <div
          ref={cardRef}
          className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 group-hover:border-transparent transition-colors duration-500"
          onClick={onToggle}
        >
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
            <svg className="w-full h-full">
              <filter id={`noise-${project.id}`}>
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
              </filter>
              <rect
                width="100%"
                height="100%"
                filter={`url(#noise-${project.id})`}
              />
            </svg>
          </div>

          {/* Top Highlight Line */}
          <motion.div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-8 md:p-10 flex flex-col h-full cursor-pointer">
            {/* Project Number */}
            <div className="absolute top-6 right-8 text-6xl font-black text-white/[0.03] select-none">
              0{index + 1}
            </div>

            {/* Header with Icon */}
            <div className="mb-8 relative z-10">
              <motion.div
                className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.color} mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {project.id === 1 ? (
                  <Layers className="w-6 h-6 text-white" />
                ) : (
                  <Zap className="w-6 h-6 text-white" />
                )}
              </motion.div>

              <motion.h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                {project.title}
              </motion.h3>
              <p className="text-lg text-gray-400 font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400/90 leading-relaxed mb-8 relative z-10">
              {project.description}
            </p>

            {/* Metrics Grid with Glass Effect */}
            <div className="grid grid-cols-2 gap-3 mb-8 relative z-10">
              {Object.entries(project.metrics)
                .slice(0, 4)
                .map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    className="relative overflow-hidden p-4 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/5 group/metric"
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      borderColor: "rgba(139, 92, 246, 0.3)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {/* Metric Shine Effect */}
                    <motion.div className="absolute inset-0 -translate-x-full group-hover/metric:translate-x-full transition-transform duration-1000 metric-shine" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">
                      {key}
                    </p>
                    <p className="text-xl font-black text-white">{value}</p>
                  </motion.div>
                ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8 relative z-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3 flex items-center gap-2">
                <Code2 className="w-3 h-3" />
                Technology Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech, idx) => (
                  <motion.span
                    key={tech}
                    className="group/tech relative px-4 py-1.5 text-xs font-bold rounded-full bg-white/[0.03] text-gray-300 border border-white/10 overflow-hidden"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{
                      borderColor: "rgba(6, 182, 212, 0.5)",
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                    }}
                  >
                    <span className="relative z-10">{tech}</span>
                    <motion.span className="absolute inset-0 bg-gradient-to-r from-aurora-cyan/20 to-aurora-blue/20 opacity-0 group-hover/tech:opacity-100 transition-opacity" />
                  </motion.span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-white/[0.03] text-gray-500 border border-white/5">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Expanded Content */}
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.04, 0.62, 0.23, 0.98] as const,
              }}
              className="overflow-hidden relative z-10"
            >
              <div className="pt-6 border-t border-white/5 space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Key Highlights */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Key Highlights
                  </p>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <motion.div
                          className="flex gap-3 text-sm text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-aurora-cyan/20 to-aurora-blue/20 flex items-center justify-center text-aurora-cyan text-xs font-bold">
                            {idx + 1}
                          </span>
                          {highlight}
                        </motion.div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features Grid */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3">
                    Features
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs text-gray-400 py-2 px-3 rounded-xl bg-white/[0.02] border border-white/5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        • {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <div className="flex items-center gap-4 mt-auto pt-8 relative z-10">
              <motion.a
                href={project.links.github}
                className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] text-white hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-bold transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Code2 className="w-4 h-4" />
                <span>Source</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href={project.links.live}
                className="group/btn relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} bg-size-200`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <ExternalLink className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Live Demo</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity relative z-10" />
              </motion.a>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="ml-auto text-gray-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
              >
                {isExpanded ? "Show less" : "Learn more"}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center"
                >
                  ↓
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ProjectsUltraModern() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full project-orb-blue"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[800px] h-[800px] rounded-full project-orb-purple"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] project-grid-pattern" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Selected Work
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            <span className="block">Featured Projects</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan">
              & Platforms
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Practical products spanning
            <span className="text-white font-medium">
              {" "}
              education, local services, fitness,
            </span>
            <span className="text-white font-medium">
              {" "}
              and programming practice
            </span>
            .
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profileData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
