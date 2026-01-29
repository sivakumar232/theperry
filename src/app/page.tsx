import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold">Content Placeholders</h1>
      </div>
    </main>
  );
}
