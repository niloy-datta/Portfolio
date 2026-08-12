"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Re-enabled with optimizations
  const [loadingText, setLoadingText] = useState("Initializing...");

  const loadingStages = useMemo(
    () => [
      { progress: 20, text: "Loading assets..." },
      { progress: 50, text: "Rendering components..." },
      { progress: 80, text: "Almost ready..." },
      { progress: 100, text: "Welcome!" },
    ],
    []
  );

  useEffect(() => {
    let currentStage = 0;

    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        setProgress(loadingStages[currentStage].progress);
        setLoadingText(loadingStages[currentStage].text);
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, 300); // Faster intervals for quicker loading

    // Optimized: Faster timeout for better performance
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Reduced from 2500ms

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loadingStages]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black pointer-events-none"
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated gradient orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-[100px]"
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-12"
            >
              <h1 className="text-3xl md:text-5xl font-black text-center">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base text-center mt-2">
                Loading Experience
              </p>
            </motion.div>

            {/* Animated loader */}
            <div className="relative mb-8 md:mb-12">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-400"
              />

              {/* Middle rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 md:inset-3 rounded-full border-2 border-transparent border-b-blue-400 border-l-pink-400"
              />

              {/* Inner pulsing core */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-6 md:inset-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"
              />

              {/* Sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-64 md:w-80 mb-4">
              <div className="h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </div>

            {/* Progress text */}
            <div className="flex items-center gap-3">
              <motion.span
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-400 text-sm md:text-base"
              >
                {loadingText}
              </motion.span>
              <span className="text-cyan-400 font-mono text-sm md:text-base">
                {progress}%
              </span>
            </div>

            {/* Hint text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 md:mt-8 text-gray-500 text-xs md:text-sm text-center max-w-xs"
            >
              Crafting an immersive experience with 3D graphics...
            </motion.p>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex gap-1 md:gap-2"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
