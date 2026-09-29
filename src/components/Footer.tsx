"use client";

import React from "react";
import { Lock, MessageCircle, Shield } from "lucide-react";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20mere%20parlour%20ka%20Revenue%20Leakage%20Audit%20karna%20hai";

  return (
    <footer className="relative border-t border-[#FF2E93]/15 bg-[#FFFBF7] text-zinc-600 py-16 pb-24 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF2E93] via-[#8A5CFF] to-[#D4AF37] p-[2px] shadow-sm">
                <div className="w-full h-full bg-[#FFFBF7] rounded-[10px] flex items-center justify-center">
                  <Lock className="w-4 h-4 text-[#FF2E93]" />
                </div>
              </div>
              <span className="font-bold tracking-wider text-xl bg-gradient-to-r from-[#1A1A1A] via-[#D4AF37] to-[#FF2E93] bg-clip-text text-transparent">
                House of Desire
              </span>
            </div>

            <p className="text-sm text-zinc-800 max-w-md font-serif italic text-base">
              &ldquo;People pay for <span className="text-[#D4AF37] font-semibold">desire</span>. Not just utility.&rdquo;
            </p>

            <p className="text-xs text-[#6B7280] max-w-lg leading-relaxed">
              2026 ka customer pehle aapka digital ecosystem dekhta hai, phir visit karta hai.
              Transforming luxury salons, beauty parlours, and skin clinics into high-status GenZ magnets.
            </p>
          </div>

          {/* Right Links & Quick WhatsApp */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-4">
            <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-zinc-700 font-medium">
              <a href="#problem" className="hover:text-[#FF2E93] transition-colors">
                The Problem
              </a>
              <a href="#shift" className="hover:text-[#FF2E93] transition-colors">
                GenZ Shift
              </a>
              <a href="#calculator" className="hover:text-[#D4AF37] transition-colors">
                Leakage Calculator
              </a>
              <a href="#ecosystem" className="hover:text-[#8A5CFF] transition-colors">
                Desire Ecosystem
              </a>
              <a href="#transformation" className="hover:text-[#FF2E93] transition-colors">
                Transformation
              </a>
              <a href="#founder" className="hover:text-[#D4AF37] transition-colors">
                Leadership
              </a>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#FF2E93]/20 hover:border-[#FF2E93]/50 text-xs sm:text-sm text-[#1A1A1A] font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +91 9643903008</span>
              </a>
            </div>

            <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 pt-2">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Gurgaon &amp; Delhi NCR Salon Growth Architecture • &copy; 2026 REVENUE LOCK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
