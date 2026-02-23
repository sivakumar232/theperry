// Server Component — no "use client" directive
// Client-only interactivity is isolated in HeroSection.tsx
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BrandingText } from "@/components/BrandingText";

// ── Below-fold sections loaded lazily ──────────────────────────────────────
// Each section is only downloaded + parsed when the browser has spare time,
// not blocking the critical hero render path.

const WhyChooseUs = dynamic(
  () => import("@/components/WhyChooseUs").then((m) => m.WhyChooseUs),
  {
    ssr: true, // still rendered server-side for SEO
    loading: () => <div className="h-96 bg-black" />,
  }
);

const ProcessCinematic = dynamic(
  () => import("@/components/ProcessCinematic").then((m) => m.ProcessCinematic),
  {
    ssr: true,
    loading: () => <div className="h-screen bg-black" />,
  }
);

const ImmersiveServices = dynamic(
  () => import("@/components/ImmersiveServices").then((m) => m.ImmersiveServices),
  {
    ssr: true,
    loading: () => <div className="h-96 bg-black" />,
  }
);

const FAQ = dynamic(
  () => import("@/components/FAQ").then((m) => m.FAQ),
  {
    ssr: true,
    loading: () => <div className="h-96 bg-black" />,
  }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((m) => m.Footer),
  {
    ssr: true,
    loading: () => <div className="h-64 bg-black" />,
  }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white tracking-tight">
      <Navbar />

      {/* Hero — client component (handles DarkVeil WebGL + CTA hover state) */}
      <HeroSection />

      {/* Branding strip — lightweight, server-rendered */}
      <BrandingText />

      {/* Below-fold sections — dynamically loaded */}
      <Suspense fallback={<div className="h-96 bg-black" />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<div className="h-screen bg-black" />}>
        <ProcessCinematic />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black" />}>
        <ImmersiveServices />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-black" />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-black" />}>
        <Footer />
      </Suspense>
    </main>
  );
}