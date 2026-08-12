"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function AcademicProjectsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 overflow-hidden bg-black/20">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-purple-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400"
            >
              <BookOpen className="w-3 h-3" />
              University Portfolio
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Academic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Milestones.
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-md font-medium">
            Core curriculum projects that established my foundation in computer
            science principles and engineering excellence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {(profileData as any).academicProjects?.map((project: any) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400/80">
                    {project.subtitle}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-300 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-white/20">
                    {project.year}
                  </span>
                  <a
                    href={project.github}
                    title={`View ${project.title} on GitHub`}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-blue-400 transition-colors"
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Hover Line */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.color} w-0 group-hover:w-full transition-all duration-700`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
