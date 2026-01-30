import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { TrustBar } from "@/components/TrustBar";
import { FloatingIntro } from "@/components/FloatingIntro";
import { FounderSection } from "@/components/FounderSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImmersiveServices } from "@/components/ImmersiveServices";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
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

      {/* Hero Section - Updated with specific, outcome-focused copy */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        {/* Availability Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm font-satoshi text-beige/80">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
            Accepting projects for February
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-satoshi text-beige text-center leading-tight tracking-tight">
          We Build Websites That{" "}
          <span className="text-green-300 font-normal italic">Actually</span>
          <br />
          <FlipWords words={flipWords} className="text-beige" />
        </h1>
        <p className="mt-6 text-lg md:text-xl text-beige/70 font-satoshi font-medium text-center max-w-3xl">
          Launch-ready in 3 weeks. Premium design. Performance guaranteed.
          <br className="hidden md:block" />
          <span className="text-beige/50">For startups and growing businesses who refuse to look average.</span>
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="/contact"
            className="px-8 py-4 bg-green-300 text-background font-satoshi font-semibold rounded-full hover:bg-green-400 transition-colors"
          >
            Book Free Strategy Call
          </a>
          <a
            href="#process"
            className="px-8 py-4 text-beige/70 font-satoshi font-medium hover:text-beige transition-colors flex items-center gap-2"
          >
            See Our Process
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="h-10" />

        {/* Scroll indicator */}
        <ScrollIndicator href="#services" />
      </section>
      <div className="h-10" />

      {/* Trust Bar - Technologies we use */}
      <TrustBar />

      {/* Floating Intro Section - Brand storytelling */}
      <FloatingIntro />

      {/* Founder Section - Personal trust building */}
      <FounderSection />

      {/* Process Section - Show professionalism */}
      <ProcessSection />

      {/* Services Section - Immersive Horizontal Scroll */}
      <ImmersiveServices />

      {/* Pricing Section - Transparency */}
      <PricingSection />

      {/* Guarantee Section - Risk reversal */}
      <GuaranteeSection />

      {/* Why Choose Us Section - Features (no fake stats) */}
      <WhyChooseUs />

      {/* FAQ Section - Handle objections */}
      <FAQ />

      {/* Final CTA - Convert warm visitors */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
