'use client';


import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { FloatingElement } from "@/components/ui/floating-element";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

import { BrandingText } from "@/components/BrandingText";
import { FounderSection } from "@/components/FounderSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImmersiveServices } from "@/components/ImmersiveServices";

import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { PremiumButton } from "@/components/ui/premium-button";
import DarkVeil from "@/components/ui/DarkVeil";


export default function Home() {
  const flipWords = ["Stand Out", "Scale", "Performs"];

  return (
    <main className="min-h-screen bg-black text-white tracking-tight">
      <Navbar />

      {/* Hero Section - Clean Dark Theme */}
      <section id="hero" className="relative isolate flex flex-col items-center pt-40 md:pt-64 min-h-[70vh] px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>

        {/* Clean Headline */}
        {/* Clean Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-satoshi text-[#F2F2F2] text-center leading-tight tracking-tight mb-6 relative z-10">
          We Turn Your{" "}
          <span className="text-zinc-300">Vision</span>
          <span className="inline-flex items-center justify-center align-middle ml-4 mr-2 relative z-20">
            <FloatingElement className="inline-block rotate-12 -translate-y-3" yOffset={4} xOffset={-4} duration={2.5} ease="easeOut">
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl border-4 border-slate-500/70 shadow-2xl shadow-black/50 overflow-hidden relative bg-[#010101] bg-clip-padding inline-block align-middle transform transition-transform">
                <img
                  src="/hero-hand.jpg"
                  alt="Hero Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </FloatingElement>
          </span>{" "}
          Into
          <br />
          <span className="inline-flex items-center justify-center align-middle mx-2 relative z-20">
            <FloatingElement className="inline-block rotate-12 -translate-y-3" yOffset={4} xOffset={-4} duration={2.5} ease="easeOut">
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl border-4 border-slate-500/70 shadow-2xl shadow-black/50 overflow-hidden relative bg-[#8B5CF6] bg-clip-padding inline-block align-middle transform transition-transform">
                <img
                  src="/hero-mobile.jpg"
                  alt="Mobile Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </FloatingElement>
          </span>
          <span className="text-[#8B5CF6]">Products</span> that <FlipWords words={flipWords} className="text-white" />
        </h1>

        {/* Clean Subheadline */}
        <p className="text-base md:text-lg text-gray-300 font-switcher font-medium text-center max-w-2xl leading-relaxed relative z-10">
          We partner with startups and B2B enterprises that refuse to blend in, shaping ideas into  digital products and platforms.
        </p>

        {/* Clean CTA */}
        <div className="flex justify-center mt-8 z-10">
          <button className="group relative bg-black px-4 py-2.5 text-white rounded-xl font-semibold text-md border border-white/40 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-zinc-900 transition-all duration-300 active:scale-95 hover:shadow-none">
            <span className="flex items-center gap-0 relative z-10">
              Book a 30-Minute Call
              <PhoneCall className="w-0 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:ml-2 group-hover:opacity-100" />
            </span>
          </button>
        </div>

        <div className="h-8 md:h-10" />
      </section>



      {/* Branding Text */}
      <BrandingText />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services Section - Horizontal Scroll */}
      <ImmersiveServices />

      {/* Process Section - How We Work Together */}
      <ProcessSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Founder Section - Story Behind */}
      <FounderSection />

      {/* Final CTA - Ready to Build */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}