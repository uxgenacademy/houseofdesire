"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, EyeOff, Camera, Clock, MessageSquareWarning, ArrowRight, ShieldAlert } from "lucide-react";

export default function ProblemAgitation() {
  const painCards = [
    {
      id: "discovery",
      tag: "PAIN POINT 01",
      badge: "Discovery Pain",
      badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
      icon: Search,
      title: "Google Pe Aap Dikhte Hi Nahi",
      image: "/assets/images/not-on-google.jpg",
      imageAlt: "Girl searching Google for Best Bridal salon near me",
      mockupOverlay: {
        title: "Google Search: 'Best Bridal in Gurgaon'",
        rank: "Aap: Rank #8 (Invisible Zone)",
        stat: "92% Clicks go to Top 3",
      },
      story:
        "Client Google pe 'Best Bridal in Gurgaon' search karta hai. Aap 8th number pe ho. Wo upar wale 3 ko hi call karta hai. Aap dikhe hi nahi.",
      agitation:
        "Aapki bridal makeup artistry 10x better ho sakti hai, lekin jab client pehle 3 options me book kar leta hai, toh aapki skill dekhne koi aayega hi nahi.",
    },
    {
      id: "trust",
      tag: "PAIN POINT 02",
      badge: "Trust & Vibe Pain",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: Camera,
      title: "Instagram Feed 3 Mahine Puraana Hai",
      image: "/assets/images/instagram-feed.jpg",
      imageAlt: "Old dull salon feed without aesthetic vibe",
      mockupOverlay: {
        title: "Instagram Profile Check",
        rank: "Last Post: 84 Days Ago",
        stat: "Vibe Check: FAILED ❌",
      },
      story:
        "Client Instagram pe dekhta hai, last post 3 mahine purana. Usse lagta hai salon band ho gaya. Wo bharosa hi nahi karta.",
      agitation:
        "2026 ki ladki salon aane se pehle Instagram stories aur ambience reel dekhti hai. Dull lighting aur blurry photos dekh ke wo scroll kar ke next competitor pe shift ho jaati hai.",
    },
    {
      id: "booking",
      tag: "PAIN POINT 03",
      badge: "Speed & Booking Pain",
      badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      icon: MessageSquareWarning,
      title: "WhatsApp Par 'Price?' Bol Kar Gayab",
      image: "/assets/images/price-gayab.jpg",
      imageAlt: "WhatsApp Price conversation ghosting",
      mockupOverlay: {
        title: "WhatsApp Inquiry: 'Hair Botox ka price?'",
        rank: "Reply Time: 4 Hours 42 Mins",
        stat: "Status: Already Booked Elsewhere",
      },
      story:
        "Inquiry aayi, aapne 5 ghante baad reply diya. Tab tak client 3 aur parlour ko message kar chuka hai. Speed ka zamana hai.",
      agitation:
        "Aur jab aap sirf '₹3500' bolte ho without showing Desire, wo bargaining mode me chala jaata hai ya 'theek hai soch ke batati hu' bol ke gayab ho jaata hai.",
    },
  ];

  return (
    <section id="problem" className="relative py-12 sm:py-16 overflow-hidden bg-[#070507]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF2E93]/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#8A5CFF]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-xs sm:text-sm font-semibold text-red-400"
          >
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Problem Agitation & Suffering</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Problem Aapke Parlour Me Nahi,{" "}
            <span className="text-gradient-pain">Aapke Digital Ecosystem Me Hai</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light"
          >
            Har mahine 40-50 high-ticket clients Gurgaon ke salon me aana chahte hain, lekin in 3
            silent leakages ki wajah se aapke paas aane se pehle hi filter ho jaate hain:
          </motion.p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl p-1 bg-gradient-to-b from-white/10 via-white/[0.03] to-white/5 hover:from-[#FF2E93]/40 hover:via-[#8A5CFF]/20 hover:to-white/10 transition-all duration-500 flex flex-col h-full shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
              >
                <div className="bg-[#0E0814] rounded-[22px] p-6 flex flex-col h-full space-y-6">
                  {/* Card Visual Header */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0814] via-black/40 to-transparent" />

                    {/* Mockup Overlay */}
                    

                    <div className="absolute bottom-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${card.badgeColor}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase mb-1">
                        {card.tag}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FF85C0] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-zinc-300 mt-2.5 leading-relaxed font-normal">
                        {card.story}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 mt-4">
                      <p className="text-xs text-red-300 leading-normal">
                        <span className="font-semibold text-red-200">Asli Nuksan: </span>
                        {card.agitation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Agitation Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/30 via-[#1C0F1B] to-purple-950/30 border border-red-500/20 text-center max-w-4xl mx-auto"
        >
          <p className="text-base sm:text-lg text-zinc-200 font-medium">
            Jab tak ye 3 leakages open hain, aap kitna bhi flyer baant lo ya discount de do,{" "}
            <span className="text-[#FF2E93] font-bold">har mahine naye high-paying clients doosre salons ke paas shift hote rahenge.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
