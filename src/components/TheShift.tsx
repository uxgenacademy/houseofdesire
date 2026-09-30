"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  XCircle,
  Heart,
  Star,
  Globe,
  MessageCircle,
} from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function TheShift() {
  const oldSteps = [
    { num: "01", text: "Pehle physical shop visit kiya" },
    { num: "02", text: "Reception pe price aur rate list pucha" },
    { num: "03", text: "Bargain kiya aur service li" },
  ];

  const genZSteps = [
    {
      num: "01",
      icon: InstagramIcon,
      text: "Pehle Instagram dekha",
      detail: "Reels aesthetic check ki, aesthetic lighting dekhi",
      color: "text-[#FF2E93] bg-[#FF2E93]/10",
    },
    {
      num: "02",
      icon: Star,
      text: "Google Reviews dekhe",
      detail: "Photo reviews me real bridal transformations dekhi",
      color: "text-[#D4AF37] bg-amber-500/10",
    },
    {
      num: "03",
      icon: Globe,
      text: "Website pe Vibe Check kiya",
      detail: "Kya ye salon mere status & Instagram aesthetic ko match karta hai?",
      color: "text-[#8A5CFF] bg-purple-500/10",
    },
    {
      num: "04",
      icon: MessageCircle,
      text: "WhatsApp pe enquiry kiya",
      detail: "Instant respectful VIP experience feel hua",
      color: "text-[#25D366] bg-emerald-500/10",
    },
    {
      num: "05",
      icon: Heart,
      text: "Tab jaake physically visit kiya",
      detail: "Already mentally sold, zero price resistance, full trust!",
      color: "text-[#FF2E93] bg-[#FF2E93]/10",
    },
  ];

  return (
    <section id="shift" className="relative py-12 sm:py-16 overflow-hidden bg-[#FFFBF7]">
      {/* Subtle light ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#FF2E93]/8 via-[#8A5CFF]/6 to-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF2E93]/20 text-xs sm:text-sm font-semibold text-[#FF2E93] shadow-[0_4px_15px_rgba(255,46,147,0.1)]"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>The 2026 Customer Mindset Shift</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text- font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            2026 Ka Customer Pehle Visit Nahi Karta.{" "}
            <span className="text-gradient-violet-pink">
              Pehle Aapka Digital Ecosystem Check Karta Hai.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#6B7280] font-normal"
          >
            Zamana badal chuka hai. Aaj ka high-paying GenZ client utility ke liye nahi, status aur vibe ke liye salon chunta hai.
          </motion.p>
        </div>

        {/* Big Contrast Visual: Old Journey vs New GenZ Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Old Customer Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white border border-red-500/15 shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Purana Tareeka</span>
                  <h3 className="text-xl font-bold text-zinc-800">Old Customer Journey (2000-2020)</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
              </div>

              <div className="space-y-4">
                {oldSteps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/60">
                    <span className="text-sm font-mono font-bold text-zinc-400">{step.num}</span>
                    <span className="text-sm text-zinc-600 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
                <p className="text-xs text-red-700 leading-relaxed">
                  <span className="font-bold text-red-800">Kyu Fail Hota Hai: </span>
                  Is model me client sirf &quot;utility&quot; (baal kaatna) dekh kar aata tha, isliye 10 dukaane ghoom ke sasta rate dhundhta tha. Zero loyalty.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-400 text-center">
              Offline Pamphlets • Word of Mouth Only • Slow Growth
            </div>
          </motion.div>

          {/* Right Column: New GenZ Journey (2026 Ahead) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl p-1 bg-gradient-to-br from-[#FF2E93] via-[#8A5CFF] to-[#D4AF37] shadow-[0_20px_45px_rgba(255,46,147,0.12)] flex flex-col"
          >
            <div className="bg-[#FFFFFF] rounded-[22px] p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block font-bold">
                    The Modern Standard
                  </span>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    New GenZ Journey <span className="text-gradient-gold">(2026 Ahead)</span>
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF2E93]/10 border border-[#FF2E93]/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#FF2E93]" />
                </div>
              </div>

              {/* GenZ Step Flow */}
              <div className="space-y-3">
                {genZSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="p-3.5 sm:p-4 rounded-xl bg-zinc-50 hover:bg-white border border-zinc-200/80 hover:border-[#FF2E93]/30 hover:shadow-md transition-all flex items-start gap-3.5 group"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${step.color}`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#FF2E93] transition-colors">
                            {step.text}
                          </h4>
                          <span className="text-[11px] font-mono text-zinc-400 font-bold">
                            STEP {step.num}
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Crucial Insight Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FF2E93]/10 via-[#8A5CFF]/10 to-[#D4AF37]/10 border border-[#FF2E93]/20">
                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                  <span className="font-bold text-[#D4AF37]">The Golden Rule: </span>
                  Agar digital ecosystem GenZ jaisa nahi, toh wo comfortable hi feel nahi karega,
                  enquiry karega hi nahi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Feature: GenZ Client Selfie + High-Impact Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden relative border border-[#FF2E93]/15 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Image Side with Soft Glow Overlay */}
            <div className="md:col-span-5 relative h-72 sm:h-96 w-full">
              <Image
                src="/assets/images/buy-desire.jpg"
                alt="GenZ girl selfie beauty desire"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-white/20 to-white" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-xs font-semibold text-[#1A1A1A] shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF2E93]" />
                <span>Today&apos;s High-Paying Buyer</span>
              </div>
            </div>

            {/* Quote Side */}
            <div className="md:col-span-7 p-6 sm:p-10 space-y-5">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF2E93]">
                CORE PHILOSOPHY
              </span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight font-serif italic">
                &ldquo;People pay for <span className="text-gradient-gold">desire</span>. Not just utility.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed">
                Aapka business ka ecosystem bhi GenZ ke hisab se badalna padega. Tabhi aaj ka
                customer comfortable feel karega. Jab wo aapki digital presence dekhe, toh usse lage
                ki <span className="text-[#1A1A1A] font-medium">&quot;Ye salon meri league ka hai.&quot;</span>
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF2E93] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm">G</div>
                  <div className="w-8 h-8 rounded-full bg-[#8A5CFF] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm">Z</div>
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] border-2 border-white flex items-center justify-center text-xs font-bold text-black shadow-sm">★</div>
                </div>
                <span className="text-xs text-zinc-500 font-medium">
                  Designed exclusively for GenZ & Millennial Aesthetic High-Ticket Spenders
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
