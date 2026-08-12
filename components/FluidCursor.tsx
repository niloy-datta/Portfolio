"use client";

import { useEffect, useRef } from "react";

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Only enable on devices with fine pointers (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) {
      canvas.style.display = "none";
      return;
    }

    canvas.style.display = "block";

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const mouse = { x: 0, y: 0, px: 0, py: 0, down: false };

    class Particle {
      x: number;
      y: number;
      size: number;
      life: number;
      maxLife: number;
      vx: number;
      vy: number;

      constructor(x: number, y: number, vx: number, vy: number) {
        this.x = x;
        this.y = y;
        this.vx = vx * 0.2; // Slow movement
        this.vy = vy * 0.2;
        this.size = Math.random() * 3 + 1; // Very small particles (1px - 4px)
        this.maxLife = Math.random() * 0.4 + 0.2; // Short life
        this.life = this.maxLife;
      }

      update(dt: number) {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= dt;
        this.size *= 0.95; // Shrink
      }

      draw() {
        if (!ctx) return;
        const opacity = (this.life / this.maxLife) * 0.3; // Low opacity
        if (opacity <= 0) return;

        ctx.fillStyle = `rgba(180, 220, 255, ${opacity})`; // Pale water blue/white
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let lastTime = 0;
    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Create trail
      if (mouse.x !== 0 && mouse.y !== 0) {
        const dist = Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py);
        if (dist > 1) {
          const steps = Math.min(dist, 5); // Interpolate for smooth line
          for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const x = mouse.px + (mouse.x - mouse.px) * t;
            const y = mouse.py + (mouse.y - mouse.py) * t;
            // Add subtle scattering
            particles.push(
              new Particle(
                x + (Math.random() - 0.5) * 2,
                y + (Math.random() - 0.5) * 2,
                Math.random() - 0.5,
                Math.random() - 0.5
              )
            );
          }
        }
      }
      mouse.px = mouse.x;
      mouse.py = mouse.y;

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update(dt);
        particles[i].draw();
        if (particles[i].life <= 0) particles.splice(i, 1);
      }

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (mouse.x === 0 && mouse.y === 0) {
        mouse.px = e.clientX;
        mouse.py = e.clientY;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Non-interactive canvas so cursor visuals don't block page interactions
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998] fluid-cursor-canvas hidden"
      style={{ pointerEvents: "none" }}
    />
  );
}
