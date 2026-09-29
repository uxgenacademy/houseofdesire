import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemAgitation from "@/components/ProblemAgitation";
import VSLSection from "@/components/VSLSection";
import StoryTransition from "@/components/StoryTransition";
import TheShift from "@/components/TheShift";
import LeakageCalculator from "@/components/LeakageCalculator";
import DesireEcosystem from "@/components/DesireEcosystem";
import TransformationStory from "@/components/TransformationStory";
import ChecklistLeadMagnet from "@/components/ChecklistLeadMagnet"
import FounderAuthority from "@/components/FounderAuthority";
import DesireGrid from "@/components/DesireGrid";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#FF2E93] selection:text-white">
      {/* 1. Adaptive Sticky Navbar (Switches from dark to light on scroll) */}
      <Navbar />

      {/* --- ZONE 1: PAIN & SUFFERING (DARK #070507) --- */}
      <div className="bg-[#070507] text-[#F4E8F8]">
        {/* 2. Hero: Start with Pain Story */}
        <Hero />

        {/* 3. Problem Agitation - Suffering Fold (3 leakages) */}
        <ProblemAgitation />
      </div>

      {/* --- TRANSITION EFFECT: DARK TO LIGHT BRIDGE --- */}
      <StoryTransition />

      {/* --- ZONE 2: DESIRE & GROWTH (WARM WHITE #FFFBF7 / #FFF8F3) --- */}
      <div className="bg-[#FFFBF7] text-[#1A1A1A]">

         {/* 3.5 VSL - YE NAYA ADD KARO */}
       <VSLSection />


        {/* 4. The Shift - GenZ Insight Fold (Turning Point) */}
        <TheShift />

        {/* 5. Interactive Leakage Calculator - Pain to Realization */}
        <LeakageCalculator />

        {/* 6. Solution - Digital Ecosystem That Sells Desire, Not Utility */}
        <DesireEcosystem />

        {/* 7. Transformation Story - Before/After (Pain to Growth) */}
        <TransformationStory />

       {/* 7.7 Lead Magnet*/}
        <ChecklistLeadMagnet />

        {/* 8. Founder Authority - Leadership Component */}
        <FounderAuthority />

        {/* 9. What You Get - 6-Pillar Desire Ecosystem Grid */}
        <DesireGrid />

        {/* 10. FAQ - Hinglish Salon Owner Answers */}
        <FAQ />

        {/* 11. Final CTA - Growth Transformation */}
        <FinalCTA />

        {/* 12. Minimal Luxury Footer */}
        <Footer />
      </div>

      {/* 13. Floating WhatsApp & Sticky Mobile Bar */}
      <FloatingWhatsApp />
    </main>
  );
}
