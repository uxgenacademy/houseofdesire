"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, TrendingDown, MessageCircle } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [dailyLoss, setDailyLoss] = useState(28250);

  useEffect(() => {
    // Pehle se dikhaya hai kya? 1 session me 1 baar hi dikhana hai
    const alreadyShown = sessionStorage.getItem("loss_popup_shown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Loss meter thoda badhate raho
    const lossInterval = setInterval(() => {
      setDailyLoss((prev) => prev + Math.floor(Math.random() * 30 + 10));
    }, 2000);

    // DESKTOP: Mouse upar le jaye toh
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 &&!hasShown &&!alreadyShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("loss_popup_shown", "true");
      }
    };

    // MOBILE: 70% scroll + 20 sec rukne pe
    let scrollTimer: any;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrolled > 70 &&!hasShown &&!alreadyShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem("loss_popup_shown", "true");
        }
      }, 1500);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(lossInterval);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [hasShown]);

  const formattedLoss = new Intl.NumberFormat("en-IN").format(dailyLoss);
  const whatsappMessage = encodeURIComponent(
    `Hi Manoj, mai site band kar rahi thi, par aaj ka loss ₹${formattedLoss} dekha. Mujhe abhi audit karwana hai, kal ka loss rokna hai.`
  );
  const whatsappUrl = `https://wa.me/919643903008?text=${whatsappMessage}`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-md rounded-3xl bg-white p- shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded- bg-white p-6 sm:p-7 space-y-5 relative overflow-hidden">
            {/* Top red line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-[#FF2E93] to-[#8A5CFF]" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                RUKO! LOSS BADH RAHA HAI
              </div>

              <h3 className="text-2xl sm:text- font-black leading-tight text-[#1A1A1A]">
                Aaj ka <span className="text-red-600">₹{formattedLoss}</span> ka nuksaan bina roke ja rahe ho?
              </h3>

              <div className="p-3 rounded-xl bg-[#1A0A14] border border-red-500/20 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <p className="text-xs sm:text- leading-relaxed text-zinc-300">
                  Tumne calculator me dekha tha - <span className="text-white font-bold">Mahine ka ₹2.79L, Saal ka ₹33.5L</span> bagal wale ke paas ja raha hai. Ek aur din wait kiya toh kal ka bhi <span className="text-red-400 font-bold">₹9,312</span> gaya.
                </p>
              </div>

              <p className="text-sm text-zinc-600">
                Kal ka loss rokna hai toh abhi 2 minute ka <span className="font-bold text-[#1A1A1A]">Free Leakage Audit</span> le lo. No spam, sirf sach.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-[#FF2E93] to-[#8A5CFF] text-white font-extrabold text-sm shadow-[0_8px_25px_rgba(255,46,147,0.4)] hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Haan, Mera Kal Ka Loss Rok Do →
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs text-zinc-400 hover:text-zinc-600 font-medium py-1"
              >
                Nahi, mujhe roz ka nuksaan chalta hai
              </button>

              <p className="text- text-center text-zinc-400 flex items-center justify-center gap-1">
                <TrendingDown className="w-3 h-3" /> Ye popup 1 baar hi dikhega. Agla mauka kal milega.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}