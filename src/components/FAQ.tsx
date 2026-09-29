"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Mere paas bilkul time nahi hai, salon me hi subah se shaam ho jaati hai?",
      a: "Aapko bilkul time nikalne ki zaroorat nahi hai! Hamari Trained Operators squad pura technical setup, website design, Google Business Profile optimization aur Reels aesthetic system khud handle karti hai. Aapko sirf daily clients serve karne hain aur hamare sath WhatsApp par 5-minute ka quick coordination karna hai. Raw footage aap hame week me 2 provide kar denge jo mobile shoot bhi chalgea. Hamari well trained team usse high engaging Reels ready kar ke aapke Instagarm par upload kar degi with proper copy writing. Agar aap khud apne end se upload karna chahe to kar sakte hai. Aapko provide kar diya jayega.",
    },
    {
      q: "Mere area me sab sasta bechte hain, har koi discount maangta hai?",
      a: "Discount wahi maangta hai jisse sirf 'utility' dikhti hai (jaise haircut ya basic facial). Jab aapka digital ecosystem GenZ aesthetic aur luxury desire reflect karta hai, toh client discount nahi maangta, wo bolta hai 'Mujhe Be Perfect jaisi glow treatment chahiye'. Gurgaon ki high-paying audience cheap salon avoid karti hai kyunki unhe apne face aur hair pe risk nahi lena.",
    },
    {
      q: "Result kitne din me dekhne ko milega?",
      a: "Pehle 7-14 din ke andar aapki website, Google reviews sync aur high-converting WhatsApp engine live ho jaata hai. Discovery rank improve hone lagti hai aur WhatsApp inquiries me rate puch ke ghost hone wale clients ka behavior instant change ho jaata hai.",
    },
    {
      q: "Kya mere salon staff ko kuch technical karna padega?",
      a: "Zero technical work for your staff! Na coding, na complex software sikhna. Staff ko sirf hum ek simple 2-step Photo/Video guideline dete hain ki client ka after-look kaise phone se aesthetic light me capture karna hai. Baaki sab hamari team streamline karegi.",
    },
  ];

  const whatsappUrl =
    "https://wa.me/919643903008?text=Hi%20mujhe%20ek%20aur%20sawal%20puchna%20hai%20salon%20audit%20ke%20bare%20me";

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-[#FFFBF7]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#8A5CFF]/6 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-500/20 text-xs sm:text-sm font-semibold text-[#8A5CFF] shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-tight"
          >
            Salon Owners Ke <span className="text-gradient-gold">Dil Ke Sawal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-[#6B7280] font-normal"
          >
            Hinglish me seedhe aur sachhe jawab - koi ghuma-fira ke baatein nahi.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#FF2E93]/30 shadow-[0_10px_30px_rgba(255,46,147,0.08)]"
                    : "bg-white/70 border-zinc-200/80 hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#FF2E93] text-white rotate-180 shadow-md"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 text-sm sm:text-base text-[#6B7280] leading-relaxed font-normal border-t border-zinc-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Small question helper */}
        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">
            Koi aur sawal hai jo yahan nahi mila?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2E93] hover:text-[#D4AF37] font-semibold underline underline-offset-4 ml-1 inline-flex items-center gap-1"
            >
              Direct WhatsApp pe puch lo <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
