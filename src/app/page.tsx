import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { TrustBar } from "@/components/TrustBar";
import { FloatingIntro } from "@/components/FloatingIntro";
import { FounderSection } from "@/components/FounderSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImmersiveServices } from "@/components/ImmersiveServices";

import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

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
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
          <a
            href="/contact"
            className="px-6 py-3 bg-green-300 text-background font-satoshi font-semibold text-sm rounded-full hover:bg-green-400 transition-colors"
          >
            Book Free Strategy Call
          </a>
          <a
            href="#process"
            className="px-6 py-3 text-beige/60 font-satoshi font-medium text-sm hover:text-beige transition-colors flex items-center gap-2"
          >
            See Our Process
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="h-30 md:h-32" />

        {/* Scroll indicator */}
        <ScrollIndicator href="#services" />
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Floating Intro */}
      <FloatingIntro />

      {/* Founder Section */}
      <FounderSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <ImmersiveServices />

      {/* Guarantee Section */}


      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
