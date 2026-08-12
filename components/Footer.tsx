"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Optimized with useMemo - Gmail icon first for better UX
  const socialLinks = useMemo(
    () => [
      {
        icon: Mail,
        href: profileData.social.email,
        label: "Email",
        color: "hover:text-aurora-cyan",
      },
      {
        icon: Github,
        href: profileData.social.github,
        label: "GitHub",
        color: "hover:text-white",
      },
      {
        icon: Linkedin,
        href: profileData.social.linkedin,
        label: "LinkedIn",
        color: "hover:text-aurora-blue",
      },
    ],
    []
  );

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">
                {profileData.name.first}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-stack developer crafting high-performance digital
                experiences
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-white">
                Navigation
              </h4>
              <nav className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-400 hover:text-white text-sm transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-white">
                Connect
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-500 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © {currentYear} {profileData.name.full}. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp className="w-3 h-3" />
              </motion.span>
            </motion.button>

            {/* Status Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-aurora-cyan" />
              </span>
              Open to opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
