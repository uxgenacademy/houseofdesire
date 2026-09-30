"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Flame, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20mere%20parlour%20ka%20Revenue%20Leakage%20Audit%20karna%20hai";

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden bg-gradient-to-b from-[#FFFBF7] via-[#FFF5F8] to-[#FFFBF7]">
      {/* Background radial dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#FF2E93]/10 via-[#8A5CFF]/8 to-[#D4AF37]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Scarcity badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FF2E93]/20 text-xs sm:text-sm font-bold text-[#FF2E93] shadow-[0_4px_20px_rgba(255,46,147,0.12)] mb-8"
        >
          <Flame className="w-4 h-4 text-[#FF2E93]" />
          <span>Strict Cap: Is Mahine Sirf 5 Salons Ka Intake Khula Hai</span>
        </motion.div>

        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text- font-bold text-[#1A1A1A] leading-[1.15] tracking-tight max-w-4xl mx-auto"
        >
          Sasta Bechoge Toh Saste Client Milenge.{" "}
          <span className="text-gradient-gold">Desire Bechoge Toh Premium.</span>{" "}
          <span className="text-[#FF2E93]">Aaj Ka Customer GenZ Hai.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-xl text-[#6B7280] font-normal mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Is mahine sirf 5 salons ka ecosystem GenZ ready bana rahe hain. Digital presence se hi
          enquiry decide hoti hai ab. Har din delay karne ka matlab hai aur ₹1,500 ka revenue table se girna.
        </motion.p>

        {/* Big Magnetic Gold Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-12 py-5 rounded-full btn-gold-luxury text-base sm:text-xl font-black shadow-[0_12px_40px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 text-black fill-black/10" />
            <span>Mujhe Premium Ecosystem Banana Hai - 9643903008 Par WhatsApp Karo</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </a>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-500 mt-4">
            <div className="flex items-center gap-1.5 text-zinc-700">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Focused on Salons &amp; Skin Clinics</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-700">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>No-Risk Free Revenue Audit First</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-700">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct WhatsApp Communication</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
