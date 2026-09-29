"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function StoryTransition() {
  return (
    <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-gradient-to-b from-[#070507] via-[#1F1424] to-[#FFFBF7] flex items-center justify-center">
      {/* Soft atmospheric radial transition glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-gradient-to-r from-[#FF2E93]/20 via-[#8A5CFF]/25 to-[#D4AF37]/20 blur-[80px] pointer-events-none" />

      {/* Decorative gradient center divider */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_20px_rgba(255,46,147,0.2)] text-xs font-semibold text-white"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2E93] animate-pulse" />
          <span className="tracking-wide">THE TRANSFORMATION BRIDGE</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-medium tracking-wider uppercase text-zinc-300 flex items-center gap-2"
        >
          <span>Pain &amp; Suffering</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
          <span className="text-[#D4AF37] font-bold">Desire &amp; Premium Growth</span>
        </motion.p>
      </div>

      {/* Subtle bottom edge blend */}
      <div className="absolute bottom-0 left-0 right-0 h-1 divider-pink-gold" />
    </div>
  );
}
