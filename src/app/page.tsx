'use client';


import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { FloatingElement } from "@/components/ui/floating-element";

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
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-satoshi text-stone-100 text-center leading-tight tracking-tight mb-6 relative z-10">
          We Turn Your{" "}
          <span className="inline-flex items-center justify-center align-middle mx-2 relative z-20">
            <FloatingElement className="inline-block rotate-12 -translate-y-3" yOffset={0} duration={2.5}>
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl border-4 border-white/20 shadow-2xl shadow-black/50 overflow-hidden relative bg-zinc-900 inline-block align-middle rotate-45 transform transition-transform">
                <img
                  src="/hero-hand.jpg"
                  alt="Hero Icon"
                  className="w-full h-full object-contain -rotate-45"
                />
              </div>
            </FloatingElement>
          </span>{" "}
          Vision Into
          <br />
          Products that <FlipWords words={flipWords} className="text-white" />
        </h1>

        {/* Clean Subheadline */}
        <p className="text-base md:text-lg text-gray-300 font-satoshi font-medium text-center max-w-2xl leading-relaxed relative z-10">
          Launch-ready in 3 weeks. Premium design. Performance guaranteed.
          <br className="hidden md:block" />
          <span className="text-gray-400 font-normal">For startups and growing businesses who refuse to look average.</span>
        </p>

        {/* Clean CTA */}
        <div className="flex justify-center mt-8">
          <div className="group">
            <PremiumButton href="/contact" variant="primary" hoverText="Let's Build It">
              <span className="flex items-center gap-2">
                Book Your Free Call
              </span>
            </PremiumButton>
          </div>
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