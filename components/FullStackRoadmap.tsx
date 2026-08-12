"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";

export default function FullStackRoadmap() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-cyan/10 border border-aurora-cyan/20 mb-5">
            <Sparkles className="w-4 h-4 text-aurora-cyan" />
            <span className="text-xs font-bold uppercase tracking-widest text-aurora-cyan">
              Full-Stack Roadmap
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Next Flagship Builds
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mt-4 leading-relaxed">
            Planned end-to-end projects for strengthening full-stack engineering,
            distributed workflows, and real-time product development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileData.fullStackRoadmap.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-7 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-aurora-cyan/30 transition-colors"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-300">
                Planned Build
              </span>
              <div className="flex items-start justify-between gap-4 mt-4">
                <div>
                  <h3 className="text-2xl font-black text-white">{project.title}</h3>
                  <p className="text-sm text-aurora-cyan mt-1">{project.subtitle}</p>
                </div>
                <Layers3 className="w-6 h-6 text-white/30" />
              </div>
              <p className="text-sm leading-relaxed text-gray-400 mt-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 bg-white/5 border border-white/10"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white/50 mt-7">
                Learning roadmap <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
