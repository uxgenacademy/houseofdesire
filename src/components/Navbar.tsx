"use client";

import React, { useState, useEffect } from "react";
import { Lock, Sparkles, MessageCircle, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Check if user has scrolled past Problem section into GenZ Shift section
      // We can check the top position of the #shift section
      const shiftSection = document.getElementById("shift");
      if (shiftSection) {
        const rect = shiftSection.getBoundingClientRect();
        setIsLightMode(rect.top <= 100);
      } else {
        setIsLightMode(scrollY > 1400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20mere%20parlour%20ka%20Revenue%20Leakage%20Audit%20karna%20hai";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isLightMode
            ? "bg-[#FFFBF7]/90 backdrop-blur-xl border-b border-[#FF2E93]/10 shadow-[0_10px_30px_rgba(255,46,147,0.06),0_4px_12px_rgba(0,0,0,0.03)] py-3 text-[#1A1A1A]"
            : "bg-[#070507]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3 text-white"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF2E93] via-[#8A5CFF] to-[#D4AF37] p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center transition-colors duration-300 ${
                isLightMode ? "bg-[#FFFBF7]" : "bg-[#070507]"
              }`}>
                <Lock className="w-5 h-5 text-[#FF2E93] transition-colors group-hover:text-[#D4AF37]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold tracking-wider text-xl transition-all duration-300 ${
                isLightMode
                  ? "bg-gradient-to-r from-[#1A1A1A] via-[#D4AF37] to-[#FF2E93] bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-white via-[#FFD700] to-[#FF2E93] bg-clip-text text-transparent"
              }`}>
                HOUSE OF DESIRE
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-medium -mt-1 flex items-center gap-1 transition-colors duration-300 ${
                isLightMode ? "text-zinc-500" : "text-zinc-400"
              }`}>
                We Build Premium, Not Parlours<Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${
            isLightMode ? "text-zinc-700" : "text-zinc-300"
          }`}>
            <a
              href="#problem"
              className="hover:text-[#FF2E93] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF2E93] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              The Problem
            </a>
            <a
              href="#shift"
              className="hover:text-[#FF2E93] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF2E93] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              2026 GenZ Shift
            </a>
            <a
              href="#calculator"
              className="hover:text-[#D4AF37] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF2E93] animate-ping" />
              Leakage Calculator
            </a>
            <a
              href="#ecosystem"
              className="hover:text-[#8A5CFF] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#8A5CFF] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Desire Ecosystem
            </a>
            <a
              href="#transformation"
              className="hover:text-[#FF2E93] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF2E93] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Transformation
            </a>
            <a
              href="#founder"
              className="hover:text-[#D4AF37] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Leadership
            </a>
          </nav>

          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg border transition-colors focus:outline-none ${
              isLightMode
                ? "bg-black/5 border-black/10 text-zinc-800"
                : "bg-white/5 border-white/10 text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-6 pt-2 flex flex-col gap-4 rounded-2xl p-5 border shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
            isLightMode
              ? "bg-[#FFFBF7]/95 border-[#FF2E93]/20 text-[#1A1A1A]"
              : "bg-[#0F0A12]/95 border-white/10 text-white"
          }`}>
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FF2E93] py-2 text-base font-medium border-b border-black/5 dark:border-white/5"
            >
              The Problem & Suffering
            </a>
            <a
              href="#shift"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FF2E93] py-2 text-base font-medium border-b border-black/5 dark:border-white/5"
            >
              2026 GenZ Customer Shift
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-2 text-base font-medium border-b border-black/5 dark:border-white/5 flex items-center justify-between"
            >
              <span>Leakage Calculator</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#FF2E93]/20 text-[#FF2E93] font-bold">Live Audit</span>
            </a>
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#8A5CFF] py-2 text-base font-medium border-b border-black/5 dark:border-white/5"
            >
              Desire Ecosystem
            </a>
            <a
              href="#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FF2E93] py-2 text-base font-medium border-b border-black/5 dark:border-white/5"
            >
              Transformation (Before/After)
            </a>
            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] py-2 text-base font-medium border-b border-black/5 dark:border-white/5"
            >
              Leadership & Trust
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF2E93] via-[#D81B60] to-[#8A5CFF] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FF2E93]/30"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>WhatsApp Pe Audit Karwao →</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
