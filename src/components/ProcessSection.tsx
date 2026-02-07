"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";

const steps = [
    {
        number: "01",
        title: "Share Your Idea",
        caption: "Understand Your Vision",
        description: "Deep dive into your business goals, target audience, and competitive landscape. We align on strategy before touching design.",
    },
    {
        number: "02",
        title: "We Build It",
        caption: "Craft Your Experience",
        description: "Custom designs that capture your brand, then built with performance-first code. You see everything before launch.",
    },
    {
        number: "03",
        title: "Ship It",
        caption: "Go Live with Confidence",
        description: "Seamless deployment, final testing, and 30 days of support. We ensure you launch strong and keep winning.",
    },
];

function ProcessStep({ step, index, scrollProgress }: { step: typeof steps[0]; index: number; scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
    const totalSteps = steps.length;
    const stepPosition = index / (totalSteps - 1);
    const beamReachesStep = 0.15 + (stepPosition * 0.7);

    // OPTIMIZED: Reduced from 10+ useTransform calls to just 2
    const glowIntensity = useTransform(
        scrollProgress,
        [beamReachesStep - 0.08, beamReachesStep, beamReachesStep + 0.02],
        [0, 0.7, 1]
    );

    const stepStart = index * 0.2;
    const stepMid = stepStart + 0.1;
    const stepEnd = stepStart + 0.2;

    const isFullyActive = useTransform(scrollProgress, (v) => v >= stepMid - 0.05 && v <= stepEnd + 0.1);
    const [activeState, setActiveState] = React.useState(false);

    React.useEffect(() => {
        const unsubscribe = isFullyActive.on("change", (latest) => {
            setActiveState(latest);
        });
        return () => unsubscribe();
    }, [isFullyActive]);

    return (
        <div className="relative flex gap-5 md:gap-8 active-step-container">
            {/* Timeline Dot - OPTIMIZED: Using CSS classes instead of useTransform */}
            <div className="flex-shrink-0 relative z-10">
                <motion.div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 relative overflow-hidden cursor-pointer transition-all duration-300 ${activeState
                            ? 'bg-white border-white shadow-lg'
                            : 'bg-zinc-800 border-zinc-700'
                        }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={`text-sm font-bold font-satoshi transition-colors duration-300 ${activeState ? 'text-black' : 'text-zinc-400'
                        }`}>
                        {step.number}
                    </span>
                </motion.div>
            </div>

            {/* Content Card - OPTIMIZED: CSS transitions instead of useTransform */}
            <div className="flex-1 pb-6">
                <div className={`py-4 px-4 rounded-lg border transition-all duration-300 cursor-pointer ${activeState
                        ? 'bg-zinc-800 border-purple-500/30 shadow-lg'
                        : 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-purple-500/20'
                    }`}>
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold font-satoshi text-white mb-1">
                        {step.title}
                    </h3>

                    {/* Caption */}
                    <p className={`text-xs font-satoshi font-medium uppercase tracking-wider mb-2 transition-colors duration-300 ${activeState ? 'text-purple-400' : 'text-zinc-500'
                        }`}>
                        {step.caption}
                    </p>

                    {/* Description - Simplified animation */}
                    <div className="text-sm font-satoshi leading-relaxed">
                        <p className={`transition-colors duration-300 ${activeState ? 'text-white' : 'text-zinc-400'
                            }`}>
                            {step.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"],
    });

    const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

    return (
        <section
            id="process"
            ref={containerRef}
            className="relative py-16 md:py-24 bg-black"
        >
            <ContentContainer className="w-full">
                {/* Section Header */}
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="block text-sm font-medium font-satoshi text-zinc-500 mb-3">(How We Work)</span>
                    <CinematicBlurReveal
                        text="How We Work Together"
                        as="h2"
                        className="text-3xl md:text-5xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                    />
                    <p className="text-base text-zinc-400 font-satoshi font-normal max-w-xl mx-auto">
                        A streamlined 3-step process designed to deliver exceptional results in 3 weeks.
                    </p>
                </motion.div>

                {/* Interactive 3D Timeline - Option 1 */}
                <div className="relative max-w-2xl mx-auto">
                    {/* Background Line */}
                    <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-zinc-800" />

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-5 md:left-6 top-0 w-px bg-gradient-to-b from-purple-500 via-purple-400 to-transparent origin-top"
                        style={{ height: lineHeight }}
                    />

                    <div className="space-y-3">
                        {steps.map((step, index) => (
                            <ProcessStep
                                key={step.number}
                                step={step}
                                index={index}
                                scrollProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-satoshi font-semibold text-sm rounded-full hover:bg-zinc-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </ContentContainer>
        </section>
    );
}
