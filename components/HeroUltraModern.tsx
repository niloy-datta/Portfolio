"use client";

import { profileData } from "@/data/profile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const CURSOR_BLINK_SPEED = 500;
const PAUSE_AFTER_TYPING = 2500;
const PAUSE_AFTER_DELETING = 400;

const socialLinks = [
  { href: profileData.social.github, label: "GitHub", icon: "github" },
  { href: profileData.social.linkedin, label: "LinkedIn", icon: "linkedin" },
  { href: profileData.social.hackerrank, label: "HackerRank", icon: "hackerrank" },
  { href: profileData.social.leetcode, label: "LeetCode", icon: "code" },
  { href: profileData.social.codechef, label: "CodeChef", icon: "codechef" },
  { href: profileData.social.email, label: "Email", icon: "email" },
];

// Magnetic button component
function MagneticButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function HeroEnhanced() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const fullText = profileData.title;

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const textLength = fullText.length;

    if (!isDeleting && currentIndex < textLength) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex >= textLength) {
      const pauseTimeout = setTimeout(
        () => setIsDeleting(true),
        PAUSE_AFTER_TYPING
      );
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setDisplayedText(fullText.slice(0, currentIndex - 1));
      }, DELETING_SPEED);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(false);
        setDisplayedText("");
      }, PAUSE_AFTER_DELETING);
      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, fullText, isDeleting]);

  useEffect(() => {
    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      CURSOR_BLINK_SPEED
    );
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Ultra Modern Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03] hero-grid" />

        {/* Floating Orbs with Parallax */}
        <motion.div
          className="absolute top-[15%] right-[10%] w-[600px] h-[600px]"
          style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-aurora-blue/30 via-aurora-purple/20 to-transparent blur-[100px] rounded-full animate-pulse" />
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px]"
          style={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-aurora-cyan/25 via-aurora-blue/15 to-transparent blur-[80px] rounded-full" />
        </motion.div>

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay hero-noise" />

        {/* Floating Glass Elements */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-20 h-20"
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[20%] w-14 h-14"
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-aurora-cyan/20 to-aurora-blue/10 backdrop-blur-xl border border-white/10" />
        </motion.div>

        <motion.div
          className="absolute top-[40%] right-[8%] w-8 h-8"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 2,
          }}
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-aurora-purple/30 to-transparent backdrop-blur-sm border border-white/5" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Status Badge - Ultra Modern */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-white/[0.08] to-white/[0.03] border border-white/10 rounded-full backdrop-blur-2xl hover:border-aurora-cyan/30 transition-all duration-500 group cursor-default mx-auto lg:mx-0"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-aurora-cyan animate-ping opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-aurora-cyan to-aurora-blue" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70 group-hover:text-white/90 transition-colors">
                {profileData.availableForWork
                  ? "Open to Opportunities"
                  : "Currently Unavailable"}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-aurora-cyan/70" />
            </motion.div>

            {/* Main Heading - Ultra Bold */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-black text-white tracking-[-0.04em] leading-[0.9]">
                <span className="block">Hi, I&apos;m</span>
                <span className="relative inline-block mt-2">
                  <motion.span
                    className="bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan bg-clip-text text-transparent bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear" as const,
                    }}
                  >
                    {profileData.name.first}
                  </motion.span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 1,
                      duration: 0.8,
                      ease: [0.25, 0.4, 0.25, 1] as const,
                    }}
                  />
                </span>
                <motion.span
                  className="block text-white/90 mt-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {profileData.name.last}.
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing Animation - Modern Style */}
            <motion.div
              variants={itemVariants}
              className="h-14 sm:h-16 flex items-center justify-center lg:justify-start"
            >
              <div className="relative">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-white/90 via-aurora-cyan to-aurora-blue bg-clip-text text-transparent">
                  {displayedText}
                </p>
                <motion.span
                  className={`inline-block w-[3px] h-7 sm:h-8 bg-gradient-to-b from-aurora-cyan to-aurora-blue ml-1 rounded-full ${showCursor ? "opacity-100" : "opacity-0"}`}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>

            {/* Description - Clean & Modern */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              {profileData.description}
            </motion.p>

            {/* CTA Buttons - Ultra Modern */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <MagneticButton
                href="#contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer z-20 pointer-events-auto"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-widest">
                  Let&apos;s Connect
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-aurora-cyan to-aurora-blue"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </MagneticButton>

              <motion.a
                href="#projects"
                className="group px-8 py-4 border border-white/20 text-white font-bold rounded-2xl hover:border-aurora-cyan/50 hover:bg-white/5 transition-all duration-300 cursor-pointer relative z-20 pointer-events-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm uppercase tracking-widest flex items-center gap-2">
                  Explore Projects
                  <span className="group-hover:rotate-45 transition-transform duration-300">
                    ↗
                  </span>
                </span>
              </motion.a>
            </motion.div>

            {/* Social icons stay visible while their new links are pending. */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-8 pt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href || undefined}
                  aria-disabled={!social.href}
                  onClick={(event) => {
                    if (!social.href) event.preventDefault();
                  }}
                  target={social.href ? "_blank" : undefined}
                  rel={social.href ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white/40 hover:text-white hover:border-aurora-cyan/30 hover:bg-white/[0.08] transition-all duration-300 group relative overflow-hidden z-20 cursor-pointer pointer-events-auto"
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {social.icon === "github" && <Github className="w-5 h-5 relative z-10" />}
                  {social.icon === "linkedin" && <Linkedin className="w-5 h-5 relative z-10" />}
                  {social.icon === "hackerrank" && <Terminal className="w-5 h-5 relative z-10" />}
                  {social.icon === "code" && <Code2 className="w-5 h-5 relative z-10" />}
                  {social.icon === "codechef" && <Trophy className="w-5 h-5 relative z-10" />}
                  {social.icon === "email" && <Mail className="w-5 h-5 relative z-10" />}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-aurora-cyan/20 to-aurora-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Profile Image - Ultra Modern */}
          <motion.div
            variants={imageVariants}
            className="flex-1 w-full relative max-w-[480px]"
          >
            <motion.div
              className="relative aspect-square w-full"
              style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
            >
              {/* Animated Gradient Ring */}
              <motion.div
                className="absolute -inset-4 rounded-[3rem] opacity-60"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
                  padding: "2px",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear" as const,
                }}
              />

              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-aurora-blue/30 via-aurora-purple/20 to-aurora-cyan/30 blur-3xl rounded-full opacity-50" />

              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                {profileData.profilePicture && (
                  <Image
                    src={profileData.profilePicture}
                    fill
                    priority
                    alt={profileData.name.full}
                    className="object-cover"
                  />
                )}
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-aurora-blue to-aurora-cyan rounded-xl shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  {profileData.stats.launches} Projects
                </span>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -top-4 -left-4 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Java Backend Focus
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
