"use client";

import { profileData } from "@/data/profile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Smartphone,
  Sparkles,
  Terminal,
  TestTube2,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState } from "react";

// Icon mapping for skill categories
const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  "Frontend Development": Layout,
  "Backend Development": Terminal,
  Backend: Terminal,
  Mobile: Smartphone,
  "DevOps & Cloud": Cloud,
  Database: Database,
  "Testing & Quality": TestTube2,
  "Messaging & Real-Time": Terminal,
  "Developer Tools": Wrench,
  "Core Knowledge": Brain,
  Frontend: Layout,
  "AI/ML": Brain,
  "Programming Languages": Code2,
  "Frontend & Web": Layout,
};

// Animated skill orb component
function SkillOrb({
  skill,
  index,
}: {
  skill: (typeof profileData.skills)[0]["skills"][0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
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
      style={{ x: xSpring, y: ySpring }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        className="relative p-4 md:p-6 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 overflow-hidden cursor-pointer"
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderColor: "rgba(139, 92, 246, 0.3)",
          scale: 1.02,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Gradient Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Skill Name */}
          <div className="mb-1">
            <h4 className="font-bold text-white text-sm md:text-base group-hover:text-aurora-cyan transition-colors">
              {skill.name}
            </h4>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Category Card Component
function CategoryCard({
  category,
  index,
  isExpanded,
  onToggle,
}: {
  category: (typeof profileData.skills)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = categoryIcons[category.category] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* Category Header */}
      <motion.button
        onClick={onToggle}
        className="w-full text-left"
        whileTap={{ scale: 0.99 }}
      >
        <motion.div
          className={`relative p-6 md:p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
            isExpanded
              ? "border-aurora-purple/30 bg-white/[0.04]"
              : "border-white/5 bg-white/[0.02] hover:bg-white/[0.03] hover:border-white/10"
          }`}
        >
          {/* Background Gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500`}
            animate={{ opacity: isExpanded ? 0.05 : 0 }}
          />

          {/* Animated Border Gradient (visible on expand) */}
          {isExpanded && (
            <motion.div
              className="absolute inset-0 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.1), transparent, rgba(6,182,212,0.1))",
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Icon Container */}
              <motion.div
                className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${category.color}`}
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>

              <div>
                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {category.category}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {category.skills.length} technologies
                </p>
              </div>
            </div>

            {/* Expand Indicator */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10"
            >
              <span className="text-gray-400 text-lg">↓</span>
            </motion.div>
          </div>

          {/* Skills Grid (Expanded) */}
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
            className="overflow-hidden"
          >
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {category.skills.map((skill, skillIdx) => (
                <SkillOrb key={skill.name} skill={skill} index={skillIdx} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

export default function SkillsUltraModern() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-aurora-cyan/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-aurora-cyan" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Technical Skills
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            <span className="block">Skills &</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-blue">
              Foundations
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Mastering the technologies that power
            <span className="text-white font-medium">
              {" "}
              complete Java full-stack applications
            </span>
            . From responsive interfaces to secure, cloud-ready services.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {[
            {
              label: "Technologies",
              value: profileData.skills.reduce(
                (acc, cat) => acc + cat.skills.length,
                0
              ),
            },
            { label: "Categories", value: profileData.skills.length },
            { label: "Role Focus", value: "Full Stack" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5"
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-aurora-cyan to-aurora-purple"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: idx * 0.1,
                }}
              >
                {stat.value}
              </motion.p>
              <p className="text-xs md:text-sm text-gray-500 font-medium mt-1 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-4">
          {profileData.skills.map((category, idx) => (
            <CategoryCard
              key={category.category}
              category={category}
              index={idx}
              isExpanded={expandedIndex === idx}
              onToggle={() =>
                setExpandedIndex(expandedIndex === idx ? null : idx)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
