"use client";

import { profileData } from "@/data/profile";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

// Magnetic Button Component
function MagneticLink({
  children,
  className = "",
  href,
  onClick,
  isActive = false,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  isActive?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={className}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="activeIndicator"
          className="absolute inset-0 rounded-full bg-white/10"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.a>
  );
}

export default function HeaderUltraModern() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const scrollProgress = useMotionValue(0);
  const activeSectionRef = useRef(activeSection);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 112;
    const top = Math.max(
      0,
      element.getBoundingClientRect().top + window.scrollY - headerOffset
    );

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setIsScrolled((current) => {
        const next = scrollY > 50;
        return current === next ? current : next;
      });

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.set(maxScroll > 0 ? scrollY / maxScroll : 0);

      const scrollPosition = scrollY + 200;
      let nextSection = "about";

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          nextSection = navItems[i].id;
          break;
        }
      }

      if (activeSectionRef.current !== nextSection) {
        activeSectionRef.current = nextSection;
        setActiveSection(nextSection);
      }

      animationFrame = null;
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [scrollProgress]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const previous = {
      bodyOverflow: bodyStyle.overflow,
      bodyPosition: bodyStyle.position,
      bodyTop: bodyStyle.top,
      bodyWidth: bodyStyle.width,
      htmlOverflow: htmlStyle.overflow,
    };

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";
    htmlStyle.overflow = "hidden";

    return () => {
      bodyStyle.overflow = previous.bodyOverflow;
      bodyStyle.position = previous.bodyPosition;
      bodyStyle.top = previous.bodyTop;
      bodyStyle.width = previous.bodyWidth;
      htmlStyle.overflow = previous.htmlOverflow;
      window.scrollTo({ top: scrollY, behavior: "auto" });
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen || !pendingSection) return;

    const frame = window.requestAnimationFrame(() => {
      scrollToSection(pendingSection);
      setPendingSection(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isMobileMenuOpen, pendingSection]);

  const closeMobileMenuAndScroll = (id: string) => {
    setPendingSection(id);
    setIsMobileMenuOpen(false);
  };

  const scrollWidth = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-4 md:pt-6 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        <motion.div
          className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-full transition-all duration-500 border relative overflow-hidden ${
            isScrolled
              ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-4xl"
              : "bg-transparent border-transparent w-full max-w-6xl"
          }`}
          layout
        >
          {/* Gradient Border Effect */}
          {isScrolled && (
            <motion.div
              className="absolute inset-0 rounded-full opacity-50 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 50%, rgba(6,182,212,0.1) 100%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
          )}

          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 relative z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo Mark */}
            <motion.div
              className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-aurora-purple via-aurora-blue to-aurora-cyan flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-lg font-black text-white">N</span>
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
            </motion.div>

            <div className="hidden sm:block">
              <span className="text-sm font-black text-white tracking-tight">
                {profileData.name.full}
              </span>
              <span className="block text-[10px] text-gray-500 font-medium tracking-wider">
                {profileData.title.split(" • ")[0]}
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 relative z-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <MagneticLink
                  key={item.id}
                  href={`#${item.id}`}
                  isActive={isActive}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.id);
                    activeSectionRef.current = item.id;
                    scrollToSection(item.id);
                  }}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </MagneticLink>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 relative z-10">
            {/* Status Indicator */}
            <motion.div
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Available
              </span>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full"
                  animate={
                    isMobileMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-black uppercase tracking-wider overflow-hidden relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>

              {/* Hover Gradient */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <motion.span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Let&apos;s Talk →
              </motion.span>
            </motion.a>
          </div>

          {/* Scroll Progress Bar */}
          {isScrolled && (
            <motion.div
              className="absolute bottom-0 left-4 right-4 h-[2px] bg-white/5 rounded-full overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-blue rounded-full pointer-events-none"
                style={{ width: scrollWidth }}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col items-center gap-6 relative z-10">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenuAndScroll(item.id);
                  }}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <span className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aurora-cyan group-hover:via-aurora-purple group-hover:to-aurora-blue transition-all">
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-purple rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenuAndScroll("contact");
              }}
              className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-blue text-white font-bold uppercase tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Let&apos;s Work Together
            </motion.a>

            {/* Social Links */}
            <motion.div
              className="absolute bottom-12 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { label: "GitHub", href: profileData.social.github },
                { label: "LinkedIn", href: profileData.social.linkedin },
                { label: "CodeChef", href: profileData.social.codechef },
                { label: "Email", href: profileData.social.email },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 font-medium uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
