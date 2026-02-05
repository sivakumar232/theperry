import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";
import { CircularCTA } from "@/components/CircularCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-cursive",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThePerry | Web Design & Development Agency",
  description: "We design & build websites that scale with your business. Clean design, fast performance, and scalable web experiences for modern brands.",
  keywords: ["web design", "web development", "landing pages", "SaaS websites", "startup websites", "business websites", "UI/UX design"],
  authors: [{ name: "ThePerry" }],
  creator: "ThePerry",
  publisher: "ThePerry",
  metadataBase: new URL("https://theperry.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theperry.tech",
    siteName: "ThePerry",
    title: "ThePerry | Web Design & Development Agency",
    description: "We design & build websites that scale with your business. Clean design, fast performance, and scalable web experiences for modern brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ThePerry - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThePerry | Web Design & Development Agency",
    description: "We design & build websites that scale with your business. Clean design, fast performance, and scalable web experiences for modern brands.",
    images: ["/og-image.png"],
    creator: "@theperry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ThePerry",
              description: "Web Design & Development Agency",
              url: "https://theperry.com",
              logo: "https://theperry.com/logo.png",
              sameAs: [
                "https://twitter.com/theperry",
                "https://linkedin.com/company/theperry",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              offers: {
                "@type": "AggregateOffer",
                offerCount: "6",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Website Design",
                    description: "Modern, intuitive interfaces that make brands shine.",
                  },
                  {
                    "@type": "Offer",
                    name: "Web Development",
                    description: "Reliable, fast, and scalable websites for long-term growth.",
                  },
                  {
                    "@type": "Offer",
                    name: "Landing Pages",
                    description: "High-impact landing pages designed for conversions.",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${dancingScript.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
