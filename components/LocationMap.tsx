"use client";

import { motion } from "framer-motion";

export default function LocationMap() {
  return (
    <div className="w-full h-full relative group">
      {/* Map Container - Dark Mode Filter Applied via CSS */}
      <iframe
        title="Location Map - Sylhet, Bangladesh"
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=D+Block,+Upashahar,+Sylhet,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        className="w-full h-full grayscale invert-[.9] contrast-[0.85] opacity-80 hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Overlay Gradient for better integration */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />

      {/* Custom Marker/Label Overlay (Decorative) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative">
          <div className="w-4 h-4 bg-aurora-cyan rounded-full animate-ping absolute inset-0" />
          <div className="w-4 h-4 bg-aurora-cyan rounded-full border-2 border-white relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg whitespace-nowrap">
            <span className="text-xs font-bold text-white">Sylhet Base</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
