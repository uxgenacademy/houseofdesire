"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Star,
  MapPin,
  ShieldCheck,
  CalendarCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function DesireGrid() {
  const deliverables = [
    {
      id: "website",
      icon: Globe,
      title: "Premium Look Website",
      subtitle: "Not Just A Site, A Status Symbol",
      image: "/assets/images/premium-website.jpg",
      description:
        "Luxury dark glassmorphism website jo mobile par 1 second me load hoti hai aur GenZ client ko instant 'Queen Aesthetic' vibe deti hai.",
      bullets: ["Before-After interactive slider", "1-tap WhatsApp slot reservation", "Mobile-first 2026 aesthetics"],
      tag: "VIBE CHECK",
      tagColor: "text-[#FF2E93] bg-[#FF2E93]/10 border-[#FF2E93]/20",
    },
    {
      id: "google-maps",
      icon: Star,
      title: "5-Star Desire Authority on Google Map",
      subtitle: "Dominating 'Best Bridal' Searches",
      image: "/assets/images/google-review1.jpg",
      description:
        "150+ verified glowing client photos aur real bridal reviews ka system jisse local Gurgaon search me aapka salon top recommendation bane.",
      bullets: ["Bridal photo reviews strategy", "Review auto-request trigger", "Google Local 3-Pack push"],
      tag: "SOCIAL PROOF",
      tagColor: "text-[#B8860B] bg-amber-500/10 border-amber-500/20",
    },
    {
      id: "gbp",
      icon: MapPin,
      title: "Perfect Google Business Profile",
      subtitle: "Zero Friction Walk-In Engine",
      image: "/assets/images/perfect-business-profile.jpg",
      description:
        "High-definition interior ambience photos, updated price-free desire service cards, aur direct Call & WhatsApp buttons jo 24/7 active dikhte hain.",
      bullets: ["Aesthetic salon tour photos", "Category & service keyword setup", "Direct inquiry routing"],
      tag: "DISCOVERY",
      tagColor: "text-[#8A5CFF] bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "reels",
      icon: InstagramIcon,
      title: "Viral Reels Instagram System",
      subtitle: "Turning Hair & Skin Into Pure Desire",
      image: "/assets/images/Viral-Reels-Instagram-System.jpg",
      description:
        "Sasti discount reel banana band. Ab aesthetic hooks, emotional bride transformations aur high-glow skincare stories jo screenshot lene par majboor karein.",
      bullets: ["Aesthetic lighting & color guides", "GenZ hook scripts that convert", "Highlight highlights & grid revamp"],
      tag: "VIRAL MAGNET",
      tagColor: "text-[#FF2E93] bg-[#FF2E93]/10 border-[#FF2E93]/20",
    },
    {
      id: "noshow",
      icon: ShieldCheck,
      title: "No-Show Protection System",
      subtitle: "Chair Khali Rehne Ka Khatma",
      image: "/assets/images/No-Show-Protection-System.jpg",
      description:
        "Automated WhatsApp VIP reminders jo client ko respectful accountability feel karwaye, eliminating last-minute cancelations to under 5%.",
      bullets: ["Polite 24h & 2h appointment reminder", "Easy 1-click reschedule prompt", "Micro token commitment psychology"],
      tag: "REVENUE SAVER",
      tagColor: "text-emerald-700 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      id: "booking",
      icon: CalendarCheck,
      title: "Advance Booking System",
      subtitle: "VIP WhatsApp Slot Locking",
      image: "/assets/images/advance-booking.jpg",
      description:
        "Bargaining khatam. Client pehle hi apna bridal, hair botox ya facial slot lock karta hai, without endless 'Price kitna hai?' back-and-forth.",
      bullets: ["Direct frictionless chat flow", "Pre-qualified high ticket questions", "Owner notification on lock"],
      tag: "VIP EXPERIENCE",
      tagColor: "text-[#B8860B] bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-[#FFF8F3]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#FF2E93]/5 via-[#8A5CFF]/5 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF2E93]/20 text-xs sm:text-sm font-semibold text-[#FF2E93] shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>The Complete 6-Pillar Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            Aapko Milega Aisa Ecosystem Jo{" "}
            <span className="text-gradient-violet-pink">
              GenZ Ko Comfortable Feel Karwaye
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#6B7280] font-normal"
          >
            Ye 6 assets milkar aapke salon ko ek local shop se Gurgaon ka elite desire brand bana dete hain.
          </motion.p>
        </div>

        {/* 6 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-1 bg-gradient-to-b from-white via-zinc-100 to-white hover:from-[#FF2E93]/30 hover:via-[#8A5CFF]/20 hover:to-[#D4AF37]/20 transition-all duration-500 flex flex-col h-full shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-xl"
              >

                <div className="absolute top-3 left-3" style={{ top: '-10px', left: '140px' }}>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-sm ${item.tagColor}`}>
                        <ItemIcon className="w-3.5 h-3.5" />
                        {item.tag}
                      </span>
                </div>

                <div className="bg-white rounded-[22px] p-6 flex flex-col h-full justify-between space-y-6 border border-zinc-200/70">
                
                  {/* Image with Tag */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  </div>

                  {/* Body Content */}
                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#FF2E93] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono text-[#D4AF37] font-semibold">
                        {item.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal pt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="pt-3 border-t border-zinc-100 space-y-2">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/919643903008?text=Hi%20mere%20parlour%20ka%20Revenue%20Leakage%20Audit%20karna%20hai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white border border-[#FF2E93]/20 hover:border-[#FF2E93]/50 text-[#1A1A1A] font-semibold text-sm hover:shadow-lg transition-all duration-300 shadow-sm"
          >
            <span>Apne Salon Ka Complete Desire Blueprint Check Karein</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
}
