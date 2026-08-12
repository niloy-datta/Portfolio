"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SkillsShowcase() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-aurora-cyan/20 to-transparent blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Mastering a diverse range of technologies and frameworks
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {profileData.skills.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              variants={categoryVariants}
              className="group"
            >
              <motion.button
                onClick={() =>
                  setExpandedIndex(
                    expandedIndex === categoryIdx ? null : categoryIdx
                  )
                }
                className="w-full"
              >
                <motion.div
                  className={`relative p-6 rounded-2xl border transition-all ${
                    expandedIndex === categoryIdx
                      ? "border-aurora-cyan/50 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/8"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {/* Gradient Background for Active */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative flex items-center justify-between">
                    <h3
                      className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.category}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: expandedIndex === categoryIdx ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-aurora-cyan"
                    >
                      ▼
                    </motion.div>
                  </div>
                </motion.div>
              </motion.button>

              {/* Expanded Skills */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === categoryIdx ? "auto" : 0,
                  opacity: expandedIndex === categoryIdx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <motion.div className="pt-4 space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: expandedIndex === categoryIdx ? 1 : 0,
                        x: expandedIndex === categoryIdx ? 0 : -20,
                      }}
                      transition={{
                        delay: skillIdx * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                        <h4 className="font-bold text-white">{skill.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: "Projects", value: profileData.stats.launches },
            { label: "Team Velocity", value: profileData.stats.velocity },
            { label: "Web Vitals", value: profileData.stats.vitals },
            { label: "Codeforces", value: profileData.stats.codeforces },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-xl border border-white/10 bg-white/5 text-center hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.p
                className="text-2xl sm:text-3xl font-black text-white mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
