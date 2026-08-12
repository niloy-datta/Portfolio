"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  "About",
  "Highlights",
  "Skills",
  "Certifications",
  "Mobile",
  "Projects",
  "Contact",
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => {
        const id = item.toLowerCase().replace(/\s+/g, "");
        return { id, element: document.getElementById(id) };
      });

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          const sectionName = navItems.find(
            (item) => item.toLowerCase().replace(/\s+/g, "") === section.id
          );
          if (sectionName) {
            setActiveSection(sectionName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border ${
          isScrolled
            ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full max-w-5xl"
            : "bg-transparent border-transparent w-full max-w-7xl"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex flex-col leading-none"
        >
          <span className="text-xl font-black text-white tracking-tighter uppercase group-hover:text-aurora-cyan transition-colors">
            NILOY<span className="text-aurora-purple">.</span>
          </span>
          <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest opacity-60">
            Developer
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, "");
            const isActive = activeSection === item;
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item);
                  const element = document.getElementById(sectionId);
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full ${
                  isActive
                    ? "text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="lg:hidden text-white p-2"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5 w-6">
              <div
                className={`h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <div
                className={`h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <div
                className={`h-0.5 w-full bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>

          <a
            href="#contact"
            className="hidden sm:flex px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-[-1] flex flex-col items-center justify-center gap-8 pointer-events-auto">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-black text-white uppercase tracking-tighter hover:text-aurora-cyan transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
