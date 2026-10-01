"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Globe,
  Star,
  Video,
  Lock,
  ArrowRight,
  CheckCircle,
  Crown,
  AlertTriangle,
  TrendingDown,
  EyeOff,
  MessageCircleX,
  BadgePercent,
} from "lucide-react";

export default function DesireEcosystem() {
  const steps = [
    {
      stepNum: "STEP 01",
      title: "Desire Website (Pain → Premium Transformation)",
      subtitle: "Vibe and Energy Transfer Machine",
      icon: Globe,
      color: "from-[#FF2E93] to-[#8A5CFF]",
      badge: "Phase 1 • Core Pillar",
      badgeColor: "bg-[#FF2E93]/10 text-[#FF2E93] border-[#FF2E93]/20",
      image: "/assets/images/premium-website.jpg",
      imageAlt: "Bridal Desire High-Converting Luxury Website",
      story:
        "Pehle aapki website thi hi nahi, ya sasti wali thi. Ab aisi website jise dekh ke GenZ client bole 'Haan, yahi vibe hai'. Vibe and Energy aapke ecosystem se aapke leads/customer tak transfer hona chaiye.",
      highlights: [
        "Instant 'Queen Vibe' Aesthetics on Mobile",
        "Interactive Before/After Transformation Slider",
        "Direct One-Tap WhatsApp VIP Booking",
        "Live Google Reviews Auto-Sync Badge",
      ],
      // LOSS AVERSION ADDITION
      lossIcon: EyeOff,
      lossTitle: "Agar Ye Nahi Hai Toh Kya Kho Rahe Ho?",
      lossAmount: "~₹2,50,000/mo",
      lossText: "GenZ bina website dekhe booking hi nahi karti. Aapki sasti website dekh ke bolegi 'Cheap lag raha hai' aur bagal wale ke premium website pe chali jayegi. 100 premium leads yahi se kho rahe ho.",
      isLocked: false,
    },
    {
      stepNum: "STEP 02",
      title: "Google 5-Star Authority & Bridal Proof",
      subtitle: "Gurgaon Map Pe Local Dominance",
      icon: Star,
      color: "from-[#D4AF37] to-[#F59E0B]",
      badge: "Phase 1 • Social Proof",
      badgeColor: "bg-amber-500/10 text-[#B8860B] border-amber-500/20",
      image: "/assets/images/google-review1.jpg",
      imageAlt: "Luxury Salon 5 Star Reviews with Bridal Photos",
      story:
        "Pehle 20 reviews the. Ab 150+ reviews jisme har bridal apni photo ke saath bol rahi hai 'Best bridal ever'. Yehi social proof GenZ ko chahiye enquiry karne se pehle.",
      highlights: [
        "150+ Verified Client Photos on Google Profile",
        "Top 3 Map Pack Optimization for 'Best Bridal Gurgaon'",
        "High-Trust Keywords for Skin & Hair Clinics",
        "Zero Bargaining: Reviews Speak Before Price",
      ],
      lossIcon: TrendingDown,
      lossTitle: "Reviews Kam = Trust Zero = Booking Gayi",
      lossAmount: "~₹1,70,000/mo",
      lossText: "Aapke 23 reviews hain, bagal wali ke 187 hain. Client sochti hai '23 wali kaam kharab hoga'. Isliye bina call kiye hi competitor ko booking de deti hai. Roz ke 3-4 bridal bookings ka loss.",
      isLocked: false,
    },
    {
      stepNum: "STEP 03",
      title: "Content That Sells Desire (Not Utility)",
      subtitle: "From 'Keratin Rate' to 'Queen Transformation'",
      icon: Video,
      color: "from-[#8A5CFF] to-[#FF2E93]",
      badge: "Phase 1 • High Ticket Magnet",
      badgeColor: "bg-purple-500/10 text-[#8A5CFF] border-purple-500/20",
      image: "/assets/images/content-that-sell2.jpg",
      imageAlt: "Viral Skincare Glow and Aesthetics Reel Grid",
      story:
        "Pehle aap service bechte the 'Keratin ₹3000'. Ab aap desire bechte ho 'Dekho kaise normal ladki queen bani'. Yehi content aaj ka GenZ dekhta hai aur screenshot leke aata hai - mujhe aisi hi chahiye.",
      highlights: [
        "Aesthetic Reels Architecture (Hook → Glow → Queen)",
        "Zero Price Haggling: Client Comes With Screenshot",
        "High-Ticket Bridal & Hydra-Facial Attraction",
        "Emotional Storytelling That Elevates Salon Brand",
      ],
      lossIcon: BadgePercent,
      lossTitle: "Sasta Content = Saste Clients + Bargaining",
      lossAmount: "~₹85,000/mo",
      lossText: "Aap 'Keratin ₹3000' likhte ho, toh client bolegi '₹2500 me kar do'. Aap 'Queen Transformation' dikhaoge, toh wo screenshot leke bolegi 'Mujhe yahi chahiye, kitna bhi lage'. Content ne hi aapko sasta bana diya.",
      isLocked: false,
    },
    {
      stepNum: "STEP 04",
      title: "Auto Nurture Ecosystem (Phase 2)",
      subtitle: "Unlocks After 100 Leads/Month",
      icon: Lock,
      color: "from-[#D4AF37] to-[#E5B80B]",
      badge: "Phase 2 • Coming Soon",
      badgeColor: "bg-amber-400/20 text-[#B8860B] border-amber-400/30",
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Automated VIP Nurture Salon Ecosystem Phase 2",
      story:
        "Jab 100+ inquiries aayenge, tab Phase 2 - Auto system jo har lead ko queen feel karwayega. Abhi aap Phase 1 se premium bano, Phase 2 uske profit se khulega. Unlocks after 100 leads/month.",
      highlights: [
        "Automated VIP WhatsApp Sequences",
        "Smart Calendar Slot Locking & Advance Tokens",
        "Birthday & Anniversary Retention Engine",
        "Built Out of Phase 1 Profits (Zero upfront risk)",
      ],
      lossIcon: MessageCircleX,
      lossTitle: "Manual Follow-up = Roz Ke 10 Leads Ghost",
      lossAmount: "~₹1,20,000/mo",
      lossText: "Aap 5 ghante baad reply karte ho, tab tak client 3 aur salons ko message kar chuki hai. Auto system nahi hai toh 40% leads 'seen' pe chhod ke chali jati hain. Ye sabse mehenga loss hai.",
      isLocked: true,
    },
  ];

  return (
    <section id="ecosystem" className="relative py-12 sm:py-16 overflow-hidden bg-[#FFFBF7]">
      <div className="absolute top-1/4 right-0 w- h- bg-[#8A5CFF]/6 rounded-full blur- pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w- h- bg-[#FF2E93]/6 rounded-full blur- pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - LOSS VERSION */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0A14] border border-[#FF2E93]/20 text-xs sm:text-sm font-semibold text-[#FF85C0] shadow-sm"
          >
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>The 4-Step Desire Blueprint - Cost of Inaction</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text- font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            Aapka Digital Ecosystem Aisa Hona Chahiye Jisse Lage{" "}
            <span className="text-gradient-violet-pink">
              They Are Buying Desire, Not Simple Utility
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#6B7280] font-normal"
          >
            Har step jo aapke paas nahi hai, wo roz ka nuksaan hai.{" "} <br/> <br/>
            <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">
              Ye 4 steps miss = ~₹6.2 Lakhs/month bagal wale ke account me
            </span>
          </motion.p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const LossIcon = step.lossIcon;
            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={step.stepNum}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-1 ${
                  step.isLocked
                   ? "bg-gradient-to-r from-amber-400/20 via-zinc-200 to-amber-400/10"
                    : "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/15 hover:from-[#FF2E93]/30 hover:via-[#8A5CFF]/20 hover:to-[#D4AF37]/20"
                } transition-all duration-500 shadow-[0_20px_45px_rgba(0,0,0,0.04)]`}
              >
                <div className="rounded-3xl bg-white rounded- p-6 sm:p-10 relative overflow-hidden">
                  {step.isLocked && (
                    <div className="absolute inset-0 bg-[#FFFBF7]/85 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F59E0B] p-0.5 shadow-lg mb-4">
                        <div className="rounded-2xl w-full h-full bg-white rounded- flex items-center justify-center">
                          <Lock className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold">
                        PHASE 2 • LOCKED FOR STAGE 1
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-1 mb-3">
                        Auto Nurture Ecosystem
                      </h3>
                      <p className="max-w-xl text-sm sm:text-base text-zinc-600 leading-relaxed">
                        Jab 100+ inquiries aayenge, tab Phase 2 - Auto system jo har lead ko queen
                        feel karwayega. Abhi aap Phase 1 se premium bano, Phase 2 uske profit se
                        khulega.
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-[#B8860B]">
                        <Sparkles className="w-4 h-4" />
                        <span>Unlocks automatically after 100 leads/month</span>
                      </div>
                      {/* LOSS FOR LOCKED TOO */}
                      <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 max-w-xl">
                        <p className="text-xs text-red-800 font-semibold flex items-center justify-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" /> Iske bina abhi ka loss: {step.lossAmount} - 40% leads ghost kar rahi hain
                        </p>
                      </div>
                    </div>
                  )}

                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${step.isLocked? "filter blur-" : ""}`}>
                    <div className={`lg:col-span-6 ${isEven? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-md group">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </div>

                    <div className={`lg:col-span-6 space-y-5 ${isEven? "lg:order-1" : "lg:order-2"}`}>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-zinc-500">
                          <span className="text-[#FF2E93]">{step.stepNum}</span>
                          <span>•</span>
                          <span>{step.subtitle}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] leading-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-normal">
                        {step.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {step.highlights.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                            <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* === COST OF INACTION BOX - LOSS AVERSION === */}
                      <div className="relative mt-4 p-4 rounded-2xl bg-[#0A0A0A] border border-[#2A1A1A] overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,50,80,0.12)_0%,transparent_60%)] pointer-events-none" />
                        <div className="relative z-10 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text- font-mono font-bold uppercase tracking-wider text-[#FF4D6A]">
                              <LossIcon className="w-3.5 h-3.5" />
                              <span>{step.lossTitle}</span>
                            </div>
                            <span className="text-xs font-mono font-black text-white bg-[#FF324B]/20 px-2 py-1 rounded border border-[#FF324B]/30">
                              {step.lossAmount}
                            </span>
                          </div>
                          <p className="text-xs sm:text- leading-relaxed text-zinc-300">
                            {step.lossText}
                          </p>
                        </div>
                      </div>

                      <div className="pt-1">
                        <a
                          href="https://wa.me/919643903008?text=Hi%20mere%20parlour%20ka%20Revenue%20Leakage%20Audit%20karna%20hai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF2E93] hover:text-[#8A5CFF] transition-colors"
                        >
                          <span>Is loss ko abhi roko → Audit Karo</span>
                          <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}