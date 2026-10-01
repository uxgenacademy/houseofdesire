"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, TrendingDown } from "lucide-react";

export default function StickyLossBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [dailyLoss, setDailyLoss] = useState(28250);
  const [isDismissed, setIsDismissed] = useState(false);

  // Scroll pe dikhao - Hero ke baad
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Har 3 second me loss badhao - Loss Aversion ka meter
  useEffect(() => {
    if (!isVisible || isDismissed) return;
    const interval = setInterval(() => {
      setDailyLoss((prev) => prev + Math.floor(Math.random() * 47 + 12));
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible, isDismissed]);

  const formattedLoss = new Intl.NumberFormat("en-IN").format(dailyLoss);

  const whatsappMessage = encodeURIComponent(
    `Hi Manoj, aaj ka nuksaan ₹${formattedLoss} dikha raha hai. Mujhe abhi apna Leakage Audit karwana hai, kal ka nuksaan rokna hai.`
  );
  const whatsappUrl = `https://wa.me/919643903008?text=${whatsappMessage}`;

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] px-3 pb-3 md:px-4 md:pb-4 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto pointer-events-auto">
            <div className="relative rounded-full md:rounded-2xl bg-[#0A0A0A] border border-[#FF2E93]/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Mobile Version - Tumhara existing wala, ab loss ke saath */}
              <div className="flex md:hidden items-center justify-between p-3 pl-4 gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-bold text-white font-mono">
                    Aaj ka loss: ₹{formattedLoss}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF2E93] to-[#8A5CFF] text-white text-xs font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Rok lo
                  </a>
                  <button onClick={() => setIsDismissed(true)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>

              {/* Desktop Version - Ye sabse powerful hai */}
              <div className="hidden md:flex items-center justify-between p-3 pr-2">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-red-400 tracking-wider">LIVE LEAKAGE METER</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <p className="text-sm text-zinc-300">
                      Aaj ka nuksaan badh raha hai: <span className="font-mono font-black text-white text-base">₹{formattedLoss}+</span>
                      <span className="mx-3 text-zinc-600">|</span>
                      <span className="text-zinc-400">Kal ka nuksaan rokna hai toh abhi audit karo</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#D81B60] to-[#8A5CFF] text-white text-sm font-extrabold shadow-[0_4px_20px_rgba(255,46,147,0.4)] hover:scale-[1.02] transition-transform"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abhi Audit Karo, Kal Ka Loss Roko →</span>
                  </a>
                  <button
                    onClick={() => setIsDismissed(true)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors ml-1"
                  >
                    <X className="w-4 h-4 text-zinc-400" />
                  </button>
                </div>
              </div>

              {/* Top progress line */}
              <div className="absolute top-0 left-0 right-0 h- bg-gradient-to-r from-[#FF2E93] via-[#8A5CFF] to-[#D4AF37] opacity-60" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}