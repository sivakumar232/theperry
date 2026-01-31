
import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";

import { TrustBar } from "@/components/TrustBar";

import { FounderSection } from "@/components/FounderSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImmersiveServices } from "@/components/ImmersiveServices";

import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { PremiumButton } from "@/components/ui/premium-button";
import { ShineButton } from "@/components/ui/shine-button";

export default function Home() {
  const flipWords = ["Perform.", "Scale.", "Convert."];

  return (
    <main className="min-h-screen bg-background text-foreground tracking-tight">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-35" />

      {/* Hero Section - Green accents only here */}
      <section id="hero" className="relative isolate flex flex-col items-center justify-center min-h-[55vh] px-6 overflow-hidden">



        {/* Grid Background with Fade */}
        <div className="absolute inset-0 -z-10 bg-black/40">
          {/* Subtle Noise Texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
            }}
          ></div>


          {/* Fade overlay - transparent at top, dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Availability Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/20 rounded-full text-xs font-satoshi text-beige/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 cursor-default">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            Accepting projects for February
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-beige text-center leading-tight tracking-tight">
          We Build Websites That{" "}
          <span className="text-green-300 font-normal italic">Actually</span>
          <br />
          <FlipWords words={flipWords} className="text-beige" />
        </h1>
        <p className="mt-4 text-base md:text-lg text-beige/60 font-satoshi font-medium text-center max-w-2xl">
          Launch-ready in 3 weeks. Premium design. Performance guaranteed.
          <br className="hidden md:block" />
          <span className="text-beige/40">For startups and growing businesses who refuse to look average.</span>
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <div className="group">
            <PremiumButton href="/contact" variant="primary" hoverText="Let's Build It">
              <span className="flex items-center gap-2">
                Book Free Strategy Call
              </span>
            </PremiumButton>
          </div>
          <ShineButton href="#process" className="!bg-transparent !border-beige/40 !text-beige hover:!border-beige">
            See Our Process
          </ShineButton>
        </div>

        <div className="h-30 md:h-32" />


      </section>

      {/* Trust Bar */}

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
