"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const CURSOR_BLINK_SPEED = 530;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 500;

const socialLinks = [
  { href: profileData.social.linkedin, label: "LinkedIn", icon: "linkedin" },
  {
    href: profileData.social.hackerrank,
    label: "HackerRank",
    icon: "hackerrank",
  },
  { href: profileData.social.leetcode, label: "LeetCode", icon: "code" },
  { href: profileData.social.email, label: "Email", icon: "email" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
    },
  },
};

export default function HeroEnhanced() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = profileData.title;

  useEffect(() => {
    const textLength = fullText.length;

    if (!isDeleting && currentIndex < textLength) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex >= textLength) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPING);
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
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, CURSOR_BLINK_SPEED);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-aurora-blue to-aurora-cyan blur-[150px] rounded-full opacity-20"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-aurora-purple to-aurora-blue blur-[120px] rounded-full opacity-20"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-[30%] right-[15%] w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-full"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Content */}
          <div className="flex-1 space-y-10 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl hover:bg-white/10 transition-all mx-auto lg:mx-0"
            >
              <motion.span
                className="relative flex h-2 w-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-cyan opacity-75"
                  animate={{ scale: [1, 2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-cyan" />
              </motion.span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                {profileData.availableForWork
                  ? "Available to Collaborate"
                  : "Currently Unavailable"}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                Hi, I&apos;m{" "}
                <motion.span
                  className="bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan bg-clip-text text-transparent animate-text-gradient"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  Niloy
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Chandra.
                </motion.span>
              </h1>

              {/* Typing Animation */}
              <motion.div
                variants={itemVariants}
                className="h-12 sm:h-14 flex items-center justify-center lg:justify-start"
              >
                <p className="text-xl sm:text-3xl font-semibold bg-gradient-to-r from-aurora-cyan to-aurora-blue bg-clip-text text-transparent">
                  {displayedText}
                  <motion.span
                    className={`inline-block w-1.5 h-8 bg-aurora-cyan ml-2 ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                    animate={{ opacity: showCursor ? 1 : 0 }}
                  />
                </p>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              {profileData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black font-black uppercase tracking-widest text-sm rounded-xl group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let&apos;s Build Together
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              {/* Social Links */}
              <motion.div className="flex items-center gap-6 px-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors group"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest group-hover:text-aurora-cyan transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center justify-center lg:justify-start gap-2 text-gray-600 mt-8"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs uppercase tracking-widest font-semibold">
                Scroll to Explore
              </span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex-1 w-full relative max-w-[500px]"
          >
            <motion.div
              className="relative aspect-square w-full"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Rotating Border Ring */}
              <motion.div
                className="absolute inset-0 rounded-[3rem] border-2 border-transparent bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan bg-clip-border"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile Image */}
              <div className="absolute inset-2 rounded-[2.8rem] overflow-hidden border border-white/10 z-20 shadow-2xl bg-gradient-to-br from-gray-900 to-black">
                {profileData.profilePicture && (
                  <Image
                    src={profileData.profilePicture}
                    fill
                    priority
                    alt="Niloy Chandra Datta"
                    className="object-cover"
                  />
                )}
              </div>

              {/* Floating Accent Shapes */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-aurora-blue/20 blur-3xl rounded-full"
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-40 h-40 bg-aurora-purple/20 blur-3xl rounded-full"
                animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
