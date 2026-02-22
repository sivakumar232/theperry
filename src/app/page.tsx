'use client';


import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import { CinematicBlurReveal } from "@/components/ui/cinematic-blur-reveal";
import Image from "next/image";
import { FloatingElement } from "@/components/ui/floating-element";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { BrandingText } from "@/components/BrandingText";
import { FounderSection } from "@/components/FounderSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProcessCinematic } from "@/components/ProcessCinematic";
import { ImmersiveServices } from "@/components/ImmersiveServices";

import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";
import { PreFooterSection } from "@/components/PreFooterSection";
import { Footer } from "@/components/Footer";
import { PremiumButton } from "@/components/ui/premium-button";
import DarkVeil from "@/components/ui/DarkVeil";


const flipWords = ["Stand Out", "Scale", "Performs"];

export default function Home() {
  // Preload shader gradient module immediately on page load
  useEffect(() => {
    import('@shadergradient/react');
  }, []);

  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white tracking-tight">
      <Navbar />

      {/* Hero Section - Clean Dark Theme */}
      <section id="hero" className="relative isolate flex flex-col items-center justify-center pt-32 md:pt-48 pb-20 min-h-[90vh] md:min-h-[70vh] px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.8}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>

        {/* Clean Headline */}
        {/* Clean Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-satoshi text-[#F2F2F2] text-center leading-tight tracking-tight mb-6 relative z-10">
          <CinematicBlurReveal as="span" text="We Turn Your " className="inline-block" delay={0} />
          <span className="text-zinc-300"><CinematicBlurReveal as="span" text="Vision" className="inline-block" delay={0.4} /></span>
          <span className="hidden md:inline-flex items-center justify-center align-middle ml-4 mr-2 relative z-20">
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
          <CinematicBlurReveal as="span" text="Into" className="inline-block mr-2 md:mr-0" delay={0.8} />
          <br className="hidden md:block" />
          <span className="hidden md:inline-flex items-center justify-center align-middle mx-2 relative z-20">
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
          <span className="text-[#8B5CF6]"><CinematicBlurReveal as="span" text="Products" className="inline-block" delay={1.2} /></span> <span className="inline-block mr-2"><CinematicBlurReveal as="span" text="that" className="inline-block" delay={1.5} /></span> <FlipWords words={flipWords} className="text-white inline-block" delay={1.8} />
        </h1>

        {/* Clean Subheadline */}
        <p className="text-base md:text-lg text-neutral-300 font-switcher font-medium text-center max-w-2xl leading-relaxed relative z-10">
          We partner with startups and B2B enterprises that refuse to blend in, shaping ideas into  digital products and platforms.
        </p>

        {/* Clean CTA */}
        <div className="flex justify-center mt-8 z-10">
          <a
            href="https://cal.com/theperry/30min"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            <HoverBorderGradient
              containerClassName="rounded-xl group"
              as="div"
              className="bg-black text-white flex items-center space-x-0 cursor-pointer"
            >
              <span>Book a 30-Minute Call</span>
              <AnimatePresence>
                {ctaHovered && (
                  <motion.span
                    key="phone-icon"
                    initial={{ width: 0, opacity: 0, marginLeft: 0, rotate: 0 }}
                    animate={{
                      width: 20,
                      opacity: 1,
                      marginLeft: 8,
                      rotate: [0, -15, 15, -10, 10],
                    }}
                    transition={{
                      width: { duration: 0.15 },
                      opacity: { duration: 0.1 },
                      marginLeft: { duration: 0.15 },
                      rotate: {
                        duration: 0.4,
                        repeat: Infinity,
                        ease: "linear"
                      },
                    }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0, transition: { duration: 0.3 } }}
                    className="inline-flex items-center overflow-hidden"
                  >
                    <PhoneCall className="w-5 h-5 flex-shrink-0" />
                  </motion.span>
                )}
              </AnimatePresence>
            </HoverBorderGradient>
          </a>
        </div>

        <div className="h-8 md:h-10" />
      </section>



      {/* Branding Text */}
      <BrandingText />
      {/* Why Choose Us */}
      <WhyChooseUs />
      <ProcessCinematic />

      {/* Services Section - Horizontal Scroll */}
      <ImmersiveServices />

      {/* Process Section - How We Work Together */}

      {/* FAQ Section */}
      <FAQ />

      {/* Pre-Footer Section - now embedded inside Footer */}
      {/* <PreFooterSection /> */}


      {/* Footer */}
      <Footer />
    </main>
  );
}