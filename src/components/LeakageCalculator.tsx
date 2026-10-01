"use client";

import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, MessageCircle, TrendingDown, Sparkles, EyeOff } from "lucide-react";

export default function LeakageCalculator() {
  const inquiriesId = useId();
  const ticketSizeId = useId();
  const noShowRateId = useId();
  const followUpMissedId = useId();

  const [inquiries, setInquiries] = useState(50);
  const [ticketSize, setTicketSize] = useState(2500);
  const [noShowRate, setNoShowRate] = useState(30);
  const [followUpMissed, setFollowUpMissed] = useState(40);

  // --- NEW LOSS AVERSION LOGIC ---
  const EXPECTED_MARKET_LEADS = 150; // Gurgaon me avg search volume

  // 1. Sabse Bada Loss - Google Pe Dikhe Hi Nahi
  const googleMissingLeads = Math.max(0, EXPECTED_MARKET_LEADS - inquiries);
  const googleLoss = Math.round(googleMissingLeads * ticketSize);

  // 2,3,4 - Existing leakages
  const followUpLoss = Math.round(inquiries * (followUpMissed / 100) * 0.22 * ticketSize);
  const bookingsMade = Math.max(1, inquiries * 0.35);
  const noShowLoss = Math.round(bookingsMade * (noShowRate / 100) * ticketSize);
  const bargainingLoss = Math.round(bookingsMade * 0.5 * 600);

  // Total Loss = Jo dikhe hi nahi + Jo aake gawa diye
  const totalDesireLoss = googleLoss + followUpLoss + noShowLoss + bargainingLoss;
  const yearlyLoss = totalDesireLoss * 12;

  const formattedLoss = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(totalDesireLoss);
  const formattedYearly = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(yearlyLoss);

  const dynamicWhatsappMessage = encodeURIComponent(
    `Hi Manoj, mere parlour ka lagbhag ₹${formattedLoss}/month (₹${formattedYearly}/year) ka Desire Loss ho raha hai. Google pe na dikhne se ${googleMissingLeads} clients kho rahe hain. Mujhe Revenue Leakage Audit karwana hai.`
  );
  const whatsappUrl = `https://wa.me/919643903008?text=${dynamicWhatsappMessage}`;

  return (
    <section id="calculator" className="relative py-12 sm:py-16 overflow-hidden bg-[#FFF8F3]">
      <div className="absolute top-1/2 right-1/4 w- h- bg-[#D4AF37]/10 rounded-full blur- pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w- h- bg-[#FF2E93]/8 rounded-full blur- pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/30 text-xs sm:text-sm font-semibold text-[#B8860B] shadow-sm"
          >
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span>Interactive Salon Audit Tool</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text- font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            Aap Kitna Gawa Rahe Ho,{" "}
            <span className="text-gradient-gold">Calculate Karo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#6B7280] font-normal"
          >
            Sliders ko adjust karke dekho har mahine kitna revenue chupke se bagal wale salon ke account me ja raha hai.
          </motion.p>
        </div>

        {/* Calculator Main Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-1 bg-gradient-to-br from-[#D4AF37]/30 via-white to-[#FF2E93]/20 shadow-[0_25px_60px_rgba(255,46,147,0.08),0_10px_25px_rgba(0,0,0,0.03)]"
        >
          <div className="rounded-3xl bg-white rounded- p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Sliders */}
              <div className="lg:col-span-7 space-y-7">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <label htmlFor={inquiriesId} className="font-semibold text-zinc-800">
                      1. Monthly Inquiries (Instagram + Call + Walkin)
                    </label>
                    <span className="font-mono font-bold text-lg text-[#FF2E93] bg-[#FF2E93]/10 px-3 py-0.5 rounded-lg border border-[#FF2E93]/20">
                      {inquiries} Leads
                    </span>
                  </div>
                  <input
                    id={inquiriesId}
                    type="range"
                    min="15"
                    max="200"
                    step="5"
                    value={inquiries}
                    onChange={(e) => setInquiries(Number(e.target.value))}
                    className="w-full cursor-pointer accent-[#FF2E93]"
                  />
                  <div className="flex justify-between text- text-zinc-400 font-mono">
                    <span>15 leads</span>
                    <span>100 leads</span>
                    <span>200+ leads</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <label htmlFor={ticketSizeId} className="font-semibold text-zinc-800">
                      2. Average Bill / Service Ticket Size
                    </label>
                    <span className="font-mono font-bold text-lg text-[#B8860B] bg-amber-500/10 px-3 py-0.5 rounded-lg border border-amber-500/20">
                      ₹{ticketSize.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    id={ticketSizeId}
                    type="range"
                    min="800"
                    max="8000"
                    step="100"
                    value={ticketSize}
                    onChange={(e) => setTicketSize(Number(e.target.value))}
                    className="w-full cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text- text-zinc-400 font-mono">
                    <span>₹800 (Basic)</span>
                    <span>₹3,500 (Mid-Luxury)</span>
                    <span>₹8,000+ (Bridal)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <label htmlFor={noShowRateId} className="font-semibold text-zinc-800">
                      3. Book Karke Na Aane Wale (No-Show %)
                    </label>
                    <span className="font-mono font-bold text-lg text-red-600 bg-red-500/10 px-3 py-0.5 rounded-lg border border-red-500/20">
                      {noShowRate}%
                    </span>
                  </div>
                  <input
                    id={noShowRateId}
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={noShowRate}
                    onChange={(e) => setNoShowRate(Number(e.target.value))}
                    className="w-full cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between text- text-zinc-400 font-mono">
                    <span>5% (Disciplined)</span>
                    <span>30% (Average)</span>
                    <span>60% (High Loss)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <label htmlFor={followUpMissedId} className="font-semibold text-zinc-800">
                      4. Late Reply / Follow-up Missed %
                    </label>
                    <span className="font-mono font-bold text-lg text-[#8A5CFF] bg-purple-500/10 px-3 py-0.5 rounded-lg border border-purple-500/20">
                      {followUpMissed}%
                    </span>
                  </div>
                  <input
                    id={followUpMissedId}
                    type="range"
                    min="10"
                    max="70"
                    step="5"
                    value={followUpMissed}
                    onChange={(e) => setFollowUpMissed(Number(e.target.value))}
                    className="w-full cursor-pointer accent-[#8A5CFF]"
                  />
                  <div className="flex justify-between text- text-zinc-400 font-mono">
                    <span>10% (Fast)</span>
                    <span>40% (Slow Replies)</span>
                    <span>70% (Lost leads)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Result Box */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFF5F8] via-[#FFFBF7] to-[#FFF0F4] border border-[#FF2E93]/20 shadow-xl relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-black/5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                      Real-Time Calculation
                    </span>
                    <span className="flex items-center gap-1 text-xs text-red-600 font-semibold">
                      <TrendingDown className="w-3.5 h-3.5" /> Direct Monthly Drain
                    </span>
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-xs sm:text-sm text-zinc-600 font-medium">
                      Aapka Har Mahine Ka Estimated
                    </span>
                    <div className="text-3xl sm:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-[#FF2E93] to-[#8A5CFF] tracking-tight">
                      ₹{formattedLoss}/mo
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#B8860B]">
                      ka Desire Loss ho raha hai
                    </div>
                    <div className="text- text-zinc-500 font-medium pt-1">
                      Saal ka total nuksaan: <span className="text-red-600 font-bold">~₹{formattedYearly}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2 text-xs text-zinc-700">
                    {/* NEW - Biggest Loss */}
                    <div className="flex justify-between p-2.5 rounded-lg bg-[#1A0A14] border border-[#FF2E93]/30 shadow-2xs">
                      <span className="text-zinc-300 flex items-center gap-1.5"><EyeOff className="w-3.5 h-3.5 text-[#FF2E93]" /> Google Pe Na Dikhe:</span>
                      <span className="font-mono font-bold text-[#FF85C0]">~₹{googleLoss.toLocaleString("en-IN")} ({googleMissingLeads} leads)</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-zinc-200/80 shadow-2xs">
                      <span className="text-zinc-500">Late Follow-up Ghosting:</span>
                      <span className="font-mono font-bold text-red-600">~₹{followUpLoss.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-zinc-200/80 shadow-2xs">
                      <span className="text-zinc-500">Empty Chairs No-Show:</span>
                      <span className="font-mono font-bold text-amber-700">~₹{noShowLoss.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between p-2.5 rounded-lg bg-white border border-zinc-200/80 shadow-2xs">
                      <span className="text-zinc-500">Bargaining & Discounting:</span>
                      <span className="font-mono font-bold text-purple-700">~₹{bargainingLoss.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 leading-relaxed">
                    <span className="font-bold">Ye wo paisa hai jo pichle 30 din me aapke bank account se nikal ke bagal wale salon ke account me chala gaya.</span> Kyuki aap Google pe dikhe hi nahi aur jo inquiry aayi usko time pe handle nahi kiya.
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#D81B60] to-[#8A5CFF] text-white font-extrabold text-sm sm:text-base shadow-[0_4px_25px_rgba(255,46,147,0.35)] hover:shadow-[0_6px_30px_rgba(255,46,147,0.5)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Mera Loss Bachao - 9643903008 Par WhatsApp Karo</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>
                  <p className="text- text-center text-zinc-400 mt-2">100% Free Audit • No Spam • Sirf 5 Mins Me Report</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}