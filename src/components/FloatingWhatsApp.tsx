"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20mere%20parlour%20ka%20Revenue%20Leakage%20Audit%20karna%20hai";

  return (
    <>
      {/* Floating Desktop / Tablet Button (Bottom Right) */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 hidden sm:flex items-center gap-3 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-1.5 pr-5 rounded-full bg-white/95 border border-[#FF2E93]/30 backdrop-blur-xl shadow-[0_10px_35px_rgba(255,46,147,0.25),0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_45px_rgba(255,46,147,0.45)] transition-all duration-300 hover:scale-105"
        >
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-md">
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#FF2E93] border-2 border-white animate-pulse" />
            <MessageCircle className="w-6 h-6 text-white" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8860B] font-bold flex items-center gap-1">
              Online • Instant Audit <Sparkles className="w-2.5 h-2.5" />
            </span>
            <span className="text-xs font-extrabold text-[#1A1A1A] group-hover:text-[#FF2E93] transition-colors">
              Chat on WhatsApp (9643903008)
            </span>
          </div>
        </a>
      </div>

      {/* Sticky Mobile Bar (Visible on mobile screens at bottom) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-2xl border-t border-[#FF2E93]/15 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#D81B60] to-[#8A5CFF] text-white font-extrabold text-xs shadow-lg shadow-[#FF2E93]/30 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="truncate">GenZ Ready Banna Hai? WhatsApp Karo</span>
          </div>

          <div className="flex items-center gap-1 text-[#FFF4B8] font-mono text-[11px] shrink-0 font-black">
            <span>9643903008</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </>
  );
}
