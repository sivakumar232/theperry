'use client';


import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";

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
  const flipWords = ["Perform.", "Scale.", "Convert."];

  return (
    <main className="min-h-screen bg-black text-white tracking-tight">
      <Navbar />

      {/* Hero Section - Clean Dark Theme */}
      <section id="hero" className="relative isolate flex flex-col items-center pt-32 md:pt-48 min-h-[70vh] px-6 overflow-hidden bg-black">
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
          We Build Websites That Actually{" "}
          <br />
          <FlipWords words={flipWords} className="text-white" />
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

      {/* Separator */}
      <div className="w-full border-b border-dashed border-white/10" />

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