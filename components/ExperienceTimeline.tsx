"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ExperienceTimeline() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Building products, growing teams, and shipping features that matter
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aurora-blue via-aurora-purple to-transparent" />

          {profileData.experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex gap-8 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div className="absolute left-0 sm:left-1/2 -translate-x-1/2 mt-6">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-aurora-blue to-aurora-cyan border-4 border-black flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Content Card */}
              <div
                className={`flex-1 ml-20 sm:ml-0 ${
                  index % 2 === 0
                    ? "sm:text-right sm:pr-16"
                    : "sm:text-left sm:pl-16"
                }`}
              >
                <motion.div
                  className="group p-6 rounded-2xl border border-white/10 hover:border-aurora-cyan/50 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-aurora-cyan font-bold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-4 space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <ChevronRight className="w-4 h-4 text-aurora-cyan flex-shrink-0" />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Skills */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-aurora-blue/20 to-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
