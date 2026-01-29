import Navbar from "@/components/Navbar";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const flipWords = ["Perform.", "Scale.", "Grow."];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-satoshi text-beige text-center leading-tight tracking-tight">
          Built for Growth.
          <br />
          Designed to <FlipWords words={flipWords} className="text-beige" />
        </h1>
        <p className="mt-6 text-lg md:text-xl text-beige/70 font-satoshi font-medium text-center max-w-2xl">
          We create clean, fast, and scalable websites designed to grow with your needs.
        </p>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-20">
      </div>
    </main>
  );
}
