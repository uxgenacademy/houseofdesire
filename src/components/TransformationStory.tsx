"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Sparkles,
  Flame,
  Moon,
  Wallet,
  AlertTriangle,
  TrendingDown,
  Crown,
} from "lucide-react";

export default function TransformationStory() {
  const metrics = [
    {
      label: "Monthly Inquiries / Leads",
      before: "20 Leads/mo",
      after: "120+ Leads/mo",
      growth: "6x Growth",
      lossSaved: "₹2.5L/mo bachaya",
      highlight: true,
    },
    {
      label: "No-Show & Ghosting Rate",
      before: "40% Cancellations",
      after: "5% (Advance Token Lock)",
      growth: "8x Reduction",
      lossSaved: "₹45k/mo bachaya",
      highlight: false,
    },
    {
      label: "Average Bill / Ticket Size",
      before: "₹800 (Discount Seekers)",
      after: "₹3,500 (Premium Packages)",
      growth: "4.3x Ticket Value",
      lossSaved: "Bargaining khatam",
      highlight: true,
    },
    {
      label: "Bargaining & Price Haggling",
      before: "80% Ask for Discount",
      after: "10% (Desire Sold Before Visit)",
      growth: "Zero Price Resistance",
      lossSaved: "Premium pe shift",
      highlight: false,
    },
  ];

  return (
    <section id="transformation" className="relative py-12 sm:py-16 overflow-hidden bg-[#FFF8F3]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-gradient-to-r from-[#FF2E93]/6 via-[#8A5CFF]/6 to-[#D4AF37]/8 rounded-full blur- pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - LOSS VERSION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0A14] border border-[#FF2E93]/20 text-xs sm:text-sm font-semibold text-[#FF85C0] shadow-sm"
          >
            <Flame className="w-4 h-4 text-[#FF2E93]" />
            <span>The Real Salon Transformation Arc - Loss to Profit</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text- font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            Story Started From Pain, Problem, Suffering...{" "}
            <span className="text-gradient-gold">
              Then After Working With Us, Puri Duniya Badal Gayi
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#6B7280] font-normal"
          >
            Pehle roz ka <span className="text-red-600 font-bold bg-red-50 px-1.5 py-0.5 rounded">₹2.79L ka loss</span> soch ke neend nahi aati thi. Ab roz ka advance soch ke neend aati hai.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Left: BEFORE - Pain & Suffering */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-1 bg-gradient-to-b from-red-500/20 via-zinc-200 to-transparent flex flex-col"
          >
            <div className="rounded-3xl bg-white rounded- p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 border border-red-500/15 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                    <span className="text-sm font-mono uppercase font-bold text-red-600">
                      BEFORE WORKING WITH US
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-red-100 text-red-700 font-semibold">
                    The Pain & Burnout Era
                  </span>
                </div>

                <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-red-200 group shadow-inner">
                  <Image
                    src="/assets/images/dull-salon.jpg"
                    alt="Empty dull salon with stressed owner"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover filter grayscale contrast-125 brightness-[0.8]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-red-300 shadow-md">
                    <div className="text-xs font-semibold text-red-700 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>Average Bill: Only ₹800 + Roz ka ₹2.79L Loss</span>
                    </div>
                    <p className="text- text-zinc-600 mt-0.5">
                      Client says: &ldquo;Bhaiya paas wale parlour me toh ₹500 me kar rahe hain, aap discount do!&rdquo;
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Dull salon ambience & empty chairs even on busy weekend evenings. <span className="text-red-600 font-bold">100 leads roz Google pe kho rahe hain.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Owner works 12-14 hours with zero mental peace. <span className="text-red-600 font-bold">Raat ko loss ka calculation.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Clients ghost on WhatsApp as soon as rate list is shared. 40% leads dead.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Extreme price sensitivity: ₹50 ke liye bhi customer ladta hai. Premium feel zero.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-[#1A0A14] border border-red-500/30 text-xs text-zinc-300 font-medium flex items-center gap-2">
                <Moon className="w-4 h-4 text-red-400 shrink-0" />
                <span><span className="text-white font-bold">Raat ki soch BEFORE:</span> "Aaj phir ₹9,312 ka nuksaan hua, kal kaise bharpai hogi?"</span>
              </div>
            </div>
          </motion.div>

          {/* Right: AFTER - Growth & Luxury Desire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-1 bg-gradient-to-b from-[#D4AF37] via-[#FF2E93] to-[#8A5CFF] shadow-[0_20px_50px_rgba(255,46,147,0.15)] flex flex-col"
          >
            <div className="rounded-3xl bg-white rounded- p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 border border-zinc-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-sm font-mono uppercase font-bold text-gradient-gold">
                      AFTER WORKING WITH US
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#FF2E93]/10 text-[#FF2E93] font-bold border border-[#FF2E93]/20">
                    GenZ Desire Magnet
                  </span>
                </div>

                <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-md group">
                  <Image
                    src="/assets/images/after-working-with-us.jpg"
                    alt="Luxury bustling salon with premium clients"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
                    <div className="text-xs font-semibold text-[#1A1A1A] flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#FF2E93] shrink-0" />
                      <span>Average Bill: <strong className="text-[#FF2E93]">₹3,500+</strong> (Bridal: ₹18,000+) + Advance Full</span>
                    </div>
                    <p className="text- text-zinc-600 mt-0.5">
                      Client says: &ldquo;I saw your Instagram aesthetic & bridal reviews, I only want you for my wedding!&rdquo;
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Luxury atmosphere with waiting list and booked weekend calendar. <span className="font-bold">Chair khali nahi, advance se full.</span></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Clients tag salon in aesthetic Instagram stories & Reels daily. Free marketing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Advance token booking reduces no-shows to under 5%. No more ghosting loss.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Zero bargaining: High-ticket GenZ happily pays for Queen treatment. Premium price.</span>
                  </li>
                </ul>
              </div>

              {/* OLD RESULT BOX */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#FF2E93]/10 to-[#8A5CFF]/10 border border-[#FF2E93]/20 text-xs text-[#1A1A1A] font-medium flex items-center justify-between">
                <span>Result: Predictable high-margin revenue & proud brand status.</span>
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>

              {/* === NEW LOSS TWIST BOX - SABSE BADA AFTER === */}
              <div className="relative p-4 rounded-2xl bg-[#0A0A0A] border border-[#FFD700]/20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.15)_0%,transparent_60%)] pointer-events-none" />
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2 text- font-mono font-bold uppercase tracking-wider text-[#FFD700]">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Sabse Bada AFTER - Neend Wapsi</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                      <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                        <TrendingDown className="w-3 h-3 text-red-400" /> <span className="text-">PEHLE RAAT KO</span>
                      </div>
                      <p className="text-zinc-300 leading-snug">"Aaj kitna nuksaan hua? ₹9,312 gaye..."</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20">
                      <div className="flex items-center gap-1.5 text-[#FFD700] mb-1">
                        <Wallet className="w-3 h-3" /> <span className="text-">AB RAAT KO</span>
                      </div>
                      <p className="text-white leading-snug font-semibold">"Kal ka ₹42,000 advance aa chuka hai!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200/80 shadow-[0_20px_45px_rgba(0,0,0,0.04)] space-y-6"
        >
          <div className="text-center space-y-1">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#B8860B]">
              VERIFIED TRANSFORMATION METRICS - KITNA LOSS BACHA?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Being Liked By Today&apos;s Target Audience -{" "}
              <span className="text-[#FF2E93]">GenZ</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-[#FF2E93]/40 hover:bg-white transition-all space-y-3 group"
              >
                <div className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-700">
                  {item.label}
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs text-red-500 line-through font-mono flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> {item.before}
                    </div>
                    <div className="text-lg sm:text-xl font-black text-[#1A1A1A] font-mono">
                      {item.after}
                    </div>
                  </div>

                  <span className="text-xs px-2 py-1 rounded-full font-bold bg-[#FF2E93]/10 text-[#FF2E93] border border-[#FF2E93]/20">
                    {item.growth}
                  </span>
                </div>
                <div className="text- font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 inline-block">
                  ✅ {item.lossSaved}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <p className="text-sm text-zinc-500 italic">
              &ldquo;Jab aapki digital image standard se premium ho jaati hai, tab Gurgaon ka client price puchna band kar deta hai aur advance bhejna shuru karta hai. <span className="text-[#1A1A1A] font-bold not-italic">Pehle loss soch ke sote the, ab profit soch ke sote hain.</span>&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}