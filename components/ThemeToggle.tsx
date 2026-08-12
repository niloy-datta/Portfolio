"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="relative w-12 h-6 sm:w-14 sm:h-7 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
        <div className="absolute top-1/2 left-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-br from-aurora-cyan via-aurora-purple to-aurora-blue transform -translate-y-1/2" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 sm:w-14 sm:h-7 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/30 touch-target group focus:outline-none focus:ring-2 focus:ring-aurora-cyan/50 focus:ring-offset-2 focus:ring-offset-transparent"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-aurora-purple/20 via-aurora-blue/20 to-aurora-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div
        className={`absolute top-1/2 left-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-br from-aurora-cyan via-aurora-purple to-aurora-blue transition-all duration-300 transform -translate-y-1/2 shadow-lg ${
          theme === "light" ? "translate-x-6 sm:translate-x-8" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === "dark" ? (
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}
