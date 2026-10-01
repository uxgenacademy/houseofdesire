"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  TrendingDown,
  MessageCircle,
  Clock,
  UserX,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20mere%20parlour%20ka%20Revenue%20Leakage%20Audit%20karna%20hai";

  // LIVE Loss Strip Logic - Hero ke andar hi
  const [count, setCount] = useState(127);
  const [loss, setLoss] = useState(24000);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setLoss((prev) => prev + (Math.floor(Math.random() * 3) + 1) * 850);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen pt-32 pb-12 lg:pb-16 overflow-hidden flex flex-col justify-center">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-gradient-to-tr from-[#FF2E93]/20 via-[#8A5CFF]/15 to-transparent rounded-full blur- pointer-events-none -z-10 animate-ambient-1" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FFD700]/10 rounded-full blur- pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF2E93]/15 rounded-full blur- pointer-events-none -z-10 animate-ambient-2" />

        {/* Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Urgent Alert Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start mb-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A0A14] border border-[#FF2E93]/40 shadow-[0_0_20px_rgba(255,46,147,0.25)] text-xs sm:text-sm font-semibold text-[#FF85C0]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF2E93] animate-ping" />
              <AlertTriangle className="w-4 h-4 text-[#FF2E93]" />
              <span>2026 Beauty Parlour, Salon & Skin Care Survival Reality Check</span>
              <span className="hidden sm:inline text-zinc-500">|</span>
              <span className="hidden sm:inline text-zinc-400 font-normal">
                Gurgaon, Delhi NCR & Metro Salons
              </span>
            </div>
          </motion.div>

          {/* Main 2-Column Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Pain Story & Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
                Aapka Kaam Best Hai, Phir Bhi Aapki Chair
                <span className="text-gradient-gold"> Khali Kyu Hai?</span> 3 Jagah Se Leak Ho Raha Hai.
              </h1>

              <p className="sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Gurgaon Ke 80% Premium Salons Ka <span className="text-white font-medium">₹1-3 Lakh Har Mahine</span> <span className="text-[#FF85C0] font-semibold">Sirf 3 Jagah Se Leak Ho Raha Hai </span>
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF2E93] via-[#8A5CFF] to-[#FFD700]" />
                <p className="text-sm sm:text-base text-zinc-300 italic font-normal">
                  &ldquo;Ye aapki galti nahi hai. Aapki cutting, facial aur makeup me koi kami nahi hai. <span className="text-[#FFD700] font-semibold">Ye aapke system ki galti hai.</span>&rdquo;
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#D81B60] to-[#8A5CFF] text-white font-bold text-base sm:text-lg shadow-[0_0_35px_rgba(255,46,147,0.5)] hover:shadow-[0_0_50px_rgba(255,46,147,0.8)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-6 h-6 text-[#25D366] fill-[#25D366]/20" />
                  <span>Free Leakage Audit Karo</span>
                  <ArrowRight className="w-5 h-5 text-[#FFD700]" />
                </a>
              </div>

              {/* Micro Strip */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD700]" />
                  <span>Yehi kahani thi Be Perfect, VLCC jaise salons ki...</span>
                </div>
                <span className="text-zinc-500">•</span>
                <span className="text-[#FF85C0] font-semibold">
                  Jab tak unhone digital ecosystem nahi badla.
                </span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#FF2E93]">80%</div>
                  <div className="text- text-zinc-400">Price Shoppers</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#8A5CFF]">35-45%</div>
                  <div className="text- text-zinc-400">No-Show Loss</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#FFD700]">₹ 3 Lakhs </div>
                  <div className="text- text-zinc-400">Monthly Leakage</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Stressed Salon + Animated Leaking Funnel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-b from-[#FF2E93]/40 via-white/10 to-[#8A5CFF]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                <img src="/assets/images/leakage.jpg" alt="Stressed Salon" className="w-full h-full object-cover" style={{ borderRadius: '20px' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 2. LIVE LOSS STRIP - Hero ke niche, Problem se pehle === */}
      <div
        className={`w-full bg-[#0A0A0A] border-y border-[#2A1A1A] py-3 px-4 flex items-center justify-center gap-3 relative overflow-hidden ${
          shake? "animate-[shake_0.4s_ease-in-out]" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,50,80,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative w- h- bg-[#FF324B] rounded-full shrink-0">
          <span className="absolute inset-0 rounded-full bg-[#FF324B] animate-ping" />
          <span className="absolute -inset-1.5 border border-[#FF324B]/50 rounded-full animate-[pulse-ring_1.5s_infinite]" />
        </div>
        <p className="text-[#E5E5E5] text-[12.5px] md:text- font-medium tracking-[0.2px] text-center leading-[1.4] relative z-10">
          <span className="font-bold text-white">🔴 LIVE:</span> Aaj Gurgaon me{" "}
          <span className="font-bold text-white">{count}</span> logon ne 'Best Bridal Salon' search kiya. Aap dikhe hi nahi.
          <span className="ml-0 md:ml-2 mt-1 md:mt-0 inline-block text-[#FF4D6A] font-bold bg-[rgba(255,77,106,0.12)] px-2 py-0.5 rounded border border-[rgba(255,77,106,0.2)]">
            Aaj ka andaza nuksaan: ₹{loss.toLocaleString("en-IN")}+
          </span>
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-1.5px); }
          75% { transform: translateX(1.5px); }
        }
      `}</style>
    </>
  );
}