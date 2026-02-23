"use client";

import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { CinematicBlurReveal } from "@/components/ui/cinematic-blur-reveal";
import { FloatingElement } from "@/components/ui/floating-element";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DarkVeil from "@/components/ui/DarkVeil";

const flipWords = ["Stand Out", "Scale", "Performs"];

export function HeroSection() {
    const [ctaHovered, setCtaHovered] = useState(false);

    return (
        <section
            id="hero"
            className="relative isolate flex flex-col items-center justify-center pt-32 md:pt-48 pb-20 min-h-[90vh] md:min-h-[70vh] px-6 overflow-hidden bg-black"
        >
            {/* WebGL background — half resolution for 2× GPU savings */}
            <div className="absolute inset-0 w-full h-full z-0">
                <DarkVeil
                    hueShift={0}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.8}
                    scanlineFrequency={0}
                    warpAmount={0}
                    resolutionScale={0.5}
                />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-satoshi text-[#F2F2F2] text-center leading-tight tracking-tight mb-6 relative z-10">
                <CinematicBlurReveal as="span" text="We Turn Your " className="inline-block" delay={0} />
                <span className="text-zinc-300">
                    <CinematicBlurReveal as="span" text="Vision" className="inline-block" delay={0.4} />
                </span>

                {/* Floating image — hero-hand */}
                <span className="hidden md:inline-flex items-center justify-center align-middle ml-4 mr-2 relative z-20">
                    <FloatingElement
                        className="inline-block rotate-12 -translate-y-3"
                        yOffset={4}
                        xOffset={-4}
                        duration={2.5}
                        ease="easeOut"
                    >
                        <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl border-4 border-slate-500/70 shadow-2xl shadow-black/50 overflow-hidden relative bg-[#010101] inline-block align-middle">
                            <Image
                                src="/hero-hand.jpg"
                                alt="Hero hand"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px"
                                priority
                            />
                        </div>
                    </FloatingElement>
                </span>{" "}

                <CinematicBlurReveal as="span" text="Into" className="inline-block mr-2 md:mr-0" delay={0.8} />
                <br className="hidden md:block" />

                {/* Floating image — hero-mobile */}
                <span className="hidden md:inline-flex items-center justify-center align-middle mx-2 relative z-20">
                    <FloatingElement
                        className="inline-block rotate-12 -translate-y-3"
                        yOffset={4}
                        xOffset={-4}
                        duration={2.5}
                        ease="easeOut"
                    >
                        <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl border-4 border-slate-500/70 shadow-2xl shadow-black/50 overflow-hidden relative bg-[#8B5CF6] inline-block align-middle">
                            <Image
                                src="/hero-mobile.jpg"
                                alt="Mobile design"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px"
                                priority
                            />
                        </div>
                    </FloatingElement>
                </span>

                <span className="text-[#8B5CF6]">
                    <CinematicBlurReveal as="span" text="Products" className="inline-block" delay={1.2} />
                </span>{" "}
                <span className="inline-block mr-2">
                    <CinematicBlurReveal as="span" text="that" className="inline-block" delay={1.5} />
                </span>{" "}
                <FlipWords words={flipWords} className="text-white inline-block" delay={1.9} />
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-md text-neutral-300 font-switcher font-medium text-center max-w-2xl leading-relaxed relative z-10">
                We partner with startups and B2B enterprises that refuse to blend in,
                shaping ideas into digital products and platforms.
            </p>

            {/* CTA */}
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
                        <span className="font-semibold">Book a 30-Minute Call</span>
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
                                            ease: "linear",
                                        },
                                    }}
                                    exit={{
                                        width: 0,
                                        opacity: 0,
                                        marginLeft: 0,
                                        transition: { duration: 0.3 },
                                    }}
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
    );
}
