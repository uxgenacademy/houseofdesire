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
  AlertTriangle,
  TrendingDown,
} from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function TheShift() {
  const oldSteps = [
    { num: "01", text: "Pehle physical shop visit kiya", loss: "Ab koi visit hi nahi karta" },
    { num: "02", text: "Reception pe price aur rate list pucha", loss: "Ab price se pehle premium vibe dekhta hai" },
    { num: "03", text: "Bargain kiya aur service li", loss: "Ab sasta dhoondne wala loyal nahi hota" },
  ];

  const genZSteps = [
    {
      num: "01",
      icon: InstagramIcon,
      text: "Pehle Instagram dekha",
      detail: "Reels aesthetic check ki, aesthetic lighting dekhi",
      loss: "Nahi dikha toh wahi se exit - 60% salons clients yahi kho rahe ho",
      color: "text-[#FF2E93] bg-[#FF2E93]/10",
    },
    {
      num: "02",
      icon: Star,
      text: "Google Reviews dekhe",
      detail: "Photo reviews me real bridal transformations dekhi",
      loss: "Reviews kam = Trust nahi = Booking bagal wale ko gayi",
      color: "text-[#D4AF37] bg-amber-500/10",
    },
    {
      num: "03",
      icon: Globe,
      text: "Website pe Vibe Check kiya",
      detail: "Kya ye salon mere status & Instagram aesthetic ko match karta hai?",
      loss: "Vibe match nahi = 'Meri league ka nahi hai' bol ke nikal gayi",
      color: "text-[#8A5CFF] bg-purple-500/10",
    },
    {
      num: "04",
      icon: MessageCircle,
      text: "WhatsApp pe enquiry kiya",
      detail: "Instant respectful VIP experience feel hua",
      loss: "2 ghante late reply = ₹2,500 ka client hamesha ke liye khoya",
      color: "text-[#25D366] bg-emerald-500/10",
    },
    {
      num: "05",
      icon: Heart,
      text: "Tab jaake physically visit kiya",
      detail: "Already mentally sold, zero price resistance, full trust!",
      loss: "Yaha tak pahuchi toh price puchti bhi nahi, direct book karti hai",
      color: "text-[#FF2E93] bg-[#FF2E93]/10",
    },
  ];

  return (
    <section id="shift" className="relative py-12 sm:py-16 overflow-hidden bg-[#FFFBF7]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-gradient-to-r from-[#FF2E93]/8 via-[#8A5CFF]/6 to-[#D4AF37]/10 rounded-full blur- pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Agar aapka digital system GenZ ke hisab se nahi hai, toh roz ke <span className="text-red-600 font-bold">100+ premium clients bina visit kiye hi competitor ko booking de rahe hain.</span>
          </motion.p>
        </div>

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
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Purana Tareeka - Ab Dead Hai</span>
                  <h3 className="text-xl font-bold text-zinc-800">Old Journey (2000-2020)</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
              </div>

              <div className="space-y-4">
                {oldSteps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 opacity-70">
                    <span className="text-sm font-mono font-bold text-zinc-400">{step.num}</span>
                    <div>
                      <span className="text-sm text-zinc-600 font-medium block">{step.text}</span>
                      <span className="text- text-red-600 font-semibold">⚠ {step.loss}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
                <p className="text-xs text-red-700 leading-relaxed">
                  <span className="font-bold text-red-800 flex items-center gap-1"><TrendingDown className="w-3.5 h-3.5" /> Is Model Ka Asli Nuksaan: </span>
                  Is model me client sirf "utility" dekh kar aata tha, isliye 10 dukaane ghoom ke sasta rate dhundhta tha. <span className="font-bold">Result? Aapka ₹2,500 wala client ₹800 wale parlour me chala gaya. Loyal hi nahi banta.</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-red-500 font-bold text-center flex items-center justify-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> Is tareeke se roz ke 100 leads kho rahe ho • Word of Mouth Only • Slow Death
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
            <div className="rounded-3xl bg-[#FFFFFF] rounded- p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block font-bold">
                    The Modern Standard - Nahi Kiya Toh Loss
                  </span>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2">
                    New GenZ Journey <span className="text-gradient-gold">(2026 Ahead)</span>
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF2E93]/10 border border-[#FF2E93]/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#FF2E93]" />
                </div>
              </div>

              <div className="space-y-3">
                {genZSteps.map((step) => {
                  const StepIcon = step.icon;
                  const isLossStep = step.num!== "05";
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
                          <span className="text- font-mono text-zinc-400 font-bold">
                            STEP {step.num}
                          </span>
                        </div>
                        <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">{step.detail}</p>
                        <p className={`text- mt-1.5 font-semibold px-2 py-1 rounded inline-block ${isLossStep? "bg-red-50 text-red-600 border border-red-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
                          {isLossStep? "❌ Miss kiya toh: " : "✅ Yaha tak aayi toh: "}{step.loss}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#1A0A14] border border-[#FF2E93]/30">
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  <span className="font-bold text-[#FF85C0] flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" /> The Loss Rule: </span>
                  <span className="text-white">GenZ ka ek bhi step miss kiya toh client agle step pe jayegi hi nahi.</span> Instagram kharab = Google tak jayegi hi nahi. Google Reviews kam = Website check karegi hi nahi. <span className="text-[#FFD700] font-bold">Har miss step = Ek premium client hamesha ke liye khoya.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden relative border border-[#FF2E93]/15 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
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

            <div className="md:col-span-7 p-6 sm:p-10 space-y-5">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF2E93]">
                CORE PHILOSOPHY - LOSS AVERSION
              </span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight font-serif italic">
                &ldquo;People don&apos;t pay for utility. They pay to avoid <span className="text-gradient-gold">FOMO of Desire</span>.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed">
                Aapka kaam best hai, par agar aapka Instagram GenZ jaisa premium nahi dikha, toh wo sochti hai <span className="text-red-600 font-bold">"Ye meri league ka nahi hai, bagal wala better hoga."</span> Aap ek client nahi, us client ke 3 referrals aur lifetime value bhi kho dete ho. <span className="text-[#1A1A1A] font-medium">Ek miss = ₹50,000+ ka lifetime loss.</span>
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF2E93] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm">G</div>
                  <div className="w-8 h-8 rounded-full bg-[#8A5CFF] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm">Z</div>
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] border-2 border-white flex items-center justify-center text-xs font-bold text-black shadow-sm">★</div>
                </div>
                <span className="text-xs text-zinc-500 font-medium">
                  Agar is mindset ko ignore kiya, toh GenZ aapko ignore kar degi - Hamesha ke liye
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}