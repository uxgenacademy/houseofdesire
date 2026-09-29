"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Play, ShieldCheck, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const whatsappUrl = "https://wa.me/919643903008?text=Hi%20Manoj%2C%20VSL%20dekhi%2C%20mere%20parlour%20ka%20leakage%20audit%20karna%20hai";

  // YAHAN APNA VIDEO LINK DALO
  const videoUrl = "https://www.youtube.com/embed/VYIx8dk0gNs?autoplay=1&rel=0&modestbranding=1&playsinline=1";

  

  return (
    <section id="vsl" className="relative py-12 sm:py-16 overflow-hidden bg-[#FFFBF7]">
      {/* Background glow - same as your leadership section */}
      <div className="absolute top-1/2 left-1/2 w- h- bg-[#FF2E93]/[0.07] rounded-full blur- pointer-events-none -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w- h- bg-[#D4AF37]/10 rounded-full blur- pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill + Headline - same style */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF2E93]/20 text-xs sm:text-sm font-semibold text-[#FF2E93] shadow-sm"
          >
            <Clock className="w-4 h-4" />
            <span>7 Minute Ka Eye-Opener - No Theory</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text- font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            Ye 3 Leakages Band Nahi Hue Toh <span className="text-[#FF2E93]">Next 6 Months Me</span> Aapka Salon 40% Peeche Chala Jayega
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#6B7280]"
          >
            Dekho kaise Gurgaon ke top salons ne apna Google + Instagram ka ecosystem fix kiya - Live breakdown
          </motion.p>
        </div>

        {/* Video Card - Same Gold Border + White Glass Logic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-1 bg-gradient-to-br from-[#D4AF37] via-white to-[#FF2E93]/40 shadow-[0_25px_60px_rgba(212,175,55,0.12),0_10px_25px_rgba(0,0,0,0.05)] max-w-4xl mx-auto"
        >
          <div className="bg-white rounded- p-2 sm:p-3" style={{borderRadius: '1.5rem'}}>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black group">
              {!isPlaying? (
                <>
                  {/* Thumbnail - Tum apni thumbnail yahan laga dena */}
                  <img
                    src="/assets/images/vsl.jpg"
                    alt="VSL Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />

                  {/* Play Button - Premium Pink */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#FF2E93] to-[#8A5CFF] shadow-[0_8px_30px_rgba(255,46,147,0.5)] flex items-center justify-center hover:scale-105 transition-transform">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                    </div>
                  </button>

                  {/* Bottom Trust Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/50 text-xs font-bold text-[#1A1A1A] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF2E93]" />
                      Be Perfect Funnel System Inside
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-bold text-white">
                      7:12
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}
            </div>

            {/* Bottom CTA Bar inside card */}
            <div className="pt-5 pb-2 px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100+ Salon Owners ne ye breakdown dekha hai</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white font-bold text-sm hover:bg-black transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Audit Lo - 9643903008
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}