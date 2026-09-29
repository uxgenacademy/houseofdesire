"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Award } from "lucide-react";

export default function FounderAuthority() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20Manoj%2C%20mere%20parlour%20ka%20ecosystem%20discuss%20karna%20hai";

  return (
    <section id="founder" className="relative py-12 sm:py-16 overflow-hidden bg-[#FFFBF7]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 text-xs sm:text-sm font-semibold text-[#B8860B] shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Real Leadership & Accountability</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            Ye System <span className="text-gradient-gold">Banayega Kaun?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#6B7280] font-normal"
          >
            Koi random agency nahi, ek dedicated operator jo salon industry aur GenZ buying mindset dono ko jeeta hai.
          </motion.p>
        </div>

        {/* Founder Card with Gold Border & White Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-1 bg-gradient-to-br from-[#D4AF37] via-white to-[#FF2E93]/40 shadow-[0_25px_60px_rgba(212,175,55,0.12),0_10px_25px_rgba(0,0,0,0.02)]"
        >
          <div className="bg-white rounded-[22px] p-6 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left: Founder Premium Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-lg group">
                  <Image
                    src="/assets/images/manoj.jpg"
                    alt="Manoj - Salon Ecosystem Architect"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Trust Pill on photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-md">
                    <div className="text-sm font-bold text-[#1A1A1A] flex items-center gap-1.5">
                      <span>Manoj</span>
                      <span className="text-[#B8860B] font-semibold">• Founder & Ecosystem Architect</span>
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF2E93]" />
                      <span>Specializing in High-Ticket Beauty Salons</span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges under photo */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-sm font-bold text-[#B8860B]">10+ Salons</div>
                    <div className="text-[10px] text-zinc-500">Transformed</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <div className="text-sm font-bold text-[#FF2E93]">Be Perfect</div>
                    <div className="text-[10px] text-zinc-500">Funnel System</div>
                  </div>
                </div>
              </div>

              {/* Right: Story in 3 short paras */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-[#B8860B]">
                  <Award className="w-3.5 h-3.5" />
                  <span>The Real Visionary Behind Revenue Lock</span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  <p>
                    Main jab salon industry ke ground reality me gaya, toh dekha ki{" "}
                    <span className="text-[#1A1A1A] font-semibold">owners subah 9 baje se raat 10 baje tak mehnat karte hain</span>,
                    cutting se le kar bridal tak perfect delivery karte hain. Lekin marketing ke naam
                    pe unhe generic agencies wahi 10 saal purana &apos;Poster bana denge&apos; wala formula bechti hain,
                    jisse ek bhi genuine high-paying client nahi aata.
                  </p>

                  <p>
                    Humne <span className="text-[#B8860B] font-bold">Be Perfect</span> jaise luxury salons ke saath din-raat kaam karke
                    ye desire-driven funnel system design kiya. Hamari{" "}
                    <span className="text-[#1A1A1A] font-semibold">Trained Operators</span> ki dedicated squad sirf aur sirf beauty parlours,
                    luxury salons aur skin clinics ke digital infrastructure par kaam karti hai.
                  </p>

                  <p>
                    Aapko koi call-center agent ya disconnected freelancer nahi milega. Aapko ek aisa
                    strategic growth partner milega jo salon owner ki daily takleef bhi samajhta hai aur{" "}
                    <span className="text-[#FF2E93] font-semibold">2026 ke GenZ customer ki psychological triggers</span> ko bhi.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Trained Operators exclusively dedicated to salon brand positioning</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Direct WhatsApp access to Manoj for strategy & monthly review</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Battle-tested with 10+ salons including Be Perfect Funnel System</span>
                  </div>
                </div>

                {/* WhatsApp Direct CTA */}
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F59E0B] to-[#FF2E93] text-black font-bold text-base shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5 text-black" />
                    <span>Manoj Se Direct Baat Karo - 9643903008</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
