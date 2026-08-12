"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectsShowcase() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-aurora-blue/20 to-transparent blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-aurora-purple/20 to-transparent blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Showcasing my best work across backend systems, mobile apps, and
            scalable architectures
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {profileData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Background */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                whileHover={{ border: "1px solid rgba(139, 92, 246, 0.3)" }}
                transition={{ duration: 0.3 }}
              />

              {/* Accent Gradient */}
              <motion.div
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur transition-opacity duration-300`}
                aria-hidden="true"
              />

              {/* Content */}
              <motion.div
                className="relative p-8 flex flex-col h-full cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
              >
                {/* Header */}
                <div className="mb-6">
                  <motion.h3
                    className={`text-2xl font-black mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 font-semibold">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <motion.div
                      key={key}
                      className="p-3 rounded-lg bg-white/5 border border-white/10"
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                        {key}
                      </p>
                      <p className="text-lg font-black text-white">{value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-aurora-blue/20 to-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/5 text-gray-400 border border-white/10">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedId === project.id ? "auto" : 0,
                    opacity: expandedId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-6 space-y-6"
                >
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {project.longDescription}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
                        Key Highlights
                      </p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm text-gray-400"
                          >
                            <span className="text-aurora-cyan font-bold">
                              →
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
                        Features
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-400 py-1 px-2 rounded bg-white/5 border border-white/10"
                          >
                            • {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.links.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 text-sm font-bold transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-aurora-blue to-aurora-cyan text-white text-sm font-bold transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(
                        expandedId === project.id ? null : project.id
                      );
                    }}
                    className="ml-auto flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white text-sm font-bold transition-colors"
                  >
                    {expandedId === project.id ? "Less" : "More"}
                    <motion.span
                      animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
