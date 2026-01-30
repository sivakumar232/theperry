import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { TrustBar } from "@/components/TrustBar";

import { FounderSection } from "@/components/FounderSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImmersiveServices } from "@/components/ImmersiveServices";

import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { PremiumButton } from "@/components/ui/premium-button";

export default function Home() {
  const flipWords = ["Perform.", "Scale.", "Convert."];

  return (
    <main className="min-h-screen bg-background text-foreground tracking-tight">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-35" />

      {/* Hero Section - Green accents only here */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-[55vh] px-6">
        {/* Availability Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/20 rounded-full text-xs font-satoshi text-beige/70">
            <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
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
            <PremiumButton href="/contact" variant="primary">
              <span className="flex items-center gap-2">
                Book Free Strategy Call
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-[18px] transition-all duration-300"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
            </PremiumButton>
          </div>
          <PremiumButton href="#process" variant="outline">
            See Our Process
          </PremiumButton>
        </div>

        <div className="h-30 md:h-32" />

        {/* Scroll indicator */}
        <ScrollIndicator href="#services" />
      </section>

      {/* Trust Bar */}
      <TrustBar />

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
