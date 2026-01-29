"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
    {
        id: 1,
        title: "Web Development",
        subtitle: "Performant & Scalable",
        description: "We build blazing-fast websites and web applications using modern technologies like Next.js, React, and Node.js. Every line of code is optimized for performance and SEO.",
        features: ["Next.js & React", "E-commerce Solutions", "Custom CMS", "API Development"],
    },
    {
        id: 2,
        title: "UI/UX Design",
        subtitle: "Beautiful & Intuitive",
        description: "We craft stunning user interfaces and seamless experiences that convert visitors into customers. Every pixel is placed with purpose.",
        features: ["Brand Identity", "User Research", "Wireframing", "Prototyping"],
    },
    {
        id: 3,
        title: "SEO & Growth",
        subtitle: "Visible & Dominant",
        description: "We optimize your digital presence to rank higher, attract more traffic, and convert better. Data-driven strategies for sustainable growth.",
        features: ["Technical SEO", "Content Strategy", "Analytics", "Conversion Optimization"],
    },
];

export function ImmersiveServices() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Calculate total scroll distance: (number of cards - 1) * 100%
    // 3 cards means we need to scroll 200% total (0% -> -200%)
    const totalScrollPercent = (services.length - 1) * 100;
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalScrollPercent}%`]);

    return (
        <section
            ref={containerRef}
            id="services"
            className="relative"
            style={{ height: `${services.length * 100}vh` }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden bg-background">
                {/* Subtle green gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-300/5 via-transparent to-green-300/5 pointer-events-none" />

                {/* Section indicator */}
                <div className="absolute top-8 left-8 z-20">
                    <p className="text-sm font-satoshi text-green-300 uppercase tracking-widest">
                        Our Services
                    </p>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
                    {services.map((service, index) => {
                        const dotStart = index / services.length;
                        const dotEnd = (index + 1) / services.length;
                        return (
                            <motion.div
                                key={service.id}
                                className="flex items-center gap-2"
                            >
                                <motion.div
                                    className="w-8 h-[2px] bg-beige/20 overflow-hidden"
                                >
                                    <motion.div
                                        className="h-full bg-green-300"
                                        style={{
                                            scaleX: useTransform(
                                                scrollYProgress,
                                                [dotStart, dotEnd],
                                                [0, 1]
                                            ),
                                            transformOrigin: "left",
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Horizontal scroll content - strict horizontal movement */}
                <motion.div
                    className="flex h-full"
                    style={{ x }}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="flex-shrink-0 w-screen h-full flex items-center justify-center relative overflow-hidden"
                        >
                            {/* Large background number */}
                            <div className="absolute -right-10 md:right-20 top-1/2 -translate-y-1/2 text-[25rem] md:text-[35rem] font-clash font-black text-beige/[0.03] select-none pointer-events-none">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Content - no opacity or Y changes, just pure horizontal scroll */}
                            <div className="relative z-10 max-w-5xl px-8 md:px-16">
                                {/* Service number */}
                                <p className="text-sm font-satoshi text-green-300 uppercase tracking-widest mb-6">
                                    Service {String(index + 1).padStart(2, "0")}
                                </p>

                                {/* Title */}
                                <h2 className="text-6xl md:text-8xl lg:text-9xl font-clash font-bold text-beige leading-none mb-4">
                                    {service.title}
                                </h2>

                                {/* Subtitle */}
                                <p className="text-2xl md:text-4xl font-satoshi font-medium text-green-300 italic mb-8">
                                    {service.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-lg md:text-xl font-satoshi text-beige/60 max-w-2xl mb-12 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-3">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-4 py-2 text-sm font-satoshi text-green-300 bg-green-300/10 border border-green-300/20 rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative orb - stays in place, no animation */}
                            <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] rounded-full bg-green-300/5 blur-[120px] pointer-events-none" />
                        </div>
                    ))}
                </motion.div>

                {/* Scroll hint */}
                <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2 text-beige/40">
                    <span className="text-xs font-satoshi uppercase tracking-widest">Scroll</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
