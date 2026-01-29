import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FloatingIntro } from "@/components/FloatingIntro";
import { ImmersiveServices } from "@/components/ImmersiveServices";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  const flipWords = ["Perform.", "Scale.", "Grow."];

  return (
    <main className="min-h-screen bg-background text-foreground tracking-tight">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-30" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-satoshi text-beige text-center leading-tight tracking-tight">
          Built for <span className="text-green-300 font-normal  italic">Growth.</span>
          <br />
          Designed to <FlipWords words={flipWords} className="text-beige" />
        </h1>
        <p className="mt-6 text-lg md:text-xl text-beige/70 font-satoshi font-medium text-center max-w-3xl">
          We transform your vision into a high-performance digital experience that converts visitors and scales effortlessly.
        </p>
        <div className="h-10" />

        {/* Scroll indicator */}
        <ScrollIndicator href="#services" />
      </section>
      <div className="h-10" />

      {/* Floating Intro Section */}
      <FloatingIntro />

      {/* Services Section - Immersive Horizontal Scroll */}
      <ImmersiveServices />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
