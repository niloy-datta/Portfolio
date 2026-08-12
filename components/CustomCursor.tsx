"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  // Hidden by default, only shown if mouse is detected
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotX = useSpring(mouseX, { damping: 15, stiffness: 400 });
  const dotY = useSpring(mouseY, { damping: 15, stiffness: 400 });

  useEffect(() => {
    // Only activate on devices with fine pointers (mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointerOver = (targetEl: EventTarget | null) => {
      const target = targetEl as HTMLElement | null;
      if (!target) return setIsHovering(false);
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOver = (e: MouseEvent) => handlePointerOver(e.target);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Outer Ring - Very thin and minimal */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/40 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
          mixBlendMode: "difference",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 0.5 : 1,
        }}
      />

      {/* Subtle Interaction Highlight */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-aurora-cyan/30 blur-md pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovering ? 0.8 : 0,
        }}
      />
    </>
  );
}
