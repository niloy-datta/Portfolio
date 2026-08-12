"use client";

import { profileData } from "@/data/profile";
import Image from "next/image";
import { useEffect, useState } from "react";

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const CURSOR_BLINK_SPEED = 530;
const PAUSE_AFTER_TYPING = 1000;
const PAUSE_AFTER_DELETING = 500;

const socialLinks = [
  { href: profileData.social.linkedin, label: "LinkedIn", icon: "linkedin" },
  {
    href: profileData.social.hackerrank,
    label: "HackerRank",
    icon: "hackerrank",
  },
  { href: profileData.social.leetcode, label: "LeetCode", icon: "leetcode" },
  { href: profileData.social.email, label: "Email", icon: "email" },
];

export default function Hero() {
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
      {/* CREATIVE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        {/* Large Decorative Text */}

        {/* Glowing Orbs */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-aurora-blue/10 blur-[150px] rounded-full animate-float-slow" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-aurora-purple/10 blur-[120px] rounded-full animate-float-medium" />

        {/* Floating Geometric Shapes (Glass) */}
        <div className="absolute top-[15%] left-[10%] w-24 h-24 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl rotate-12 animate-float-slow" />
        <div className="absolute bottom-[30%] right-[15%] w-16 h-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full animate-float-medium" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Content */}
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-cyan"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  Available to Collaborate
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                Hi, I&apos;m <br />
                <span className="bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan bg-clip-text text-transparent">
                  Niloy Chandra.
                </span>
              </h1>
            </div>

            <div className="h-12 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-3xl font-medium text-gray-400">
                {displayedText}
                <span
                  className={`inline-block w-1.5 h-8 bg-aurora-cyan ml-2 transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`}
                />
              </p>
            </div>

            <p className="text-gray-400 text-lg sm:text-2xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Crafting high-performance digital experiences through elegant code
              and robust architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-aurora-cyan transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                Let&apos;s Build Together
              </a>
              <div className="flex items-center gap-6 px-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Creative Visual */}
          <div className="flex-1 w-full relative max-w-[500px]">
            <div className="relative aspect-square w-full">
              {/* Floating Profile Image Container */}
              <div className="absolute inset-4 rounded-[3rem] overflow-hidden border border-white/10 z-20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 bg-gray-900 group">
                {profileData.profilePicture && (
                  <Image
                    src={profileData.profilePicture}
                    fill
                    alt="Profile"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                )}
              </div>

              {/* Decorative Frames */}
              <div className="absolute inset-0 border-2 border-aurora-purple/30 rounded-[3rem] -rotate-3 z-10" />
              <div className="absolute inset-0 border-2 border-aurora-cyan/30 rounded-[3rem] rotate-6 z-0 translate-x-4 translate-y-4" />

              {/* Floating Badges */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full z-30 flex items-center justify-center animate-float-slow">
                <div className="text-center">
                  <span className="block text-2xl font-black text-white">
                    8+
                  </span>
                  <span className="block text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                    Projects
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-6 w-40 h-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl z-30 flex items-center justify-center gap-3 animate-float-medium">
                <div className="w-8 h-8 rounded-full bg-aurora-cyan/20 flex items-center justify-center text-xs">
                  🚀
                </div>
                <span className="text-[10px] font-black uppercase text-white tracking-[0.1em]">
                  Fast Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
