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
    const glowStart = beamReachesStep - 0.08;
    const glowComplete = beamReachesStep + 0.02;

    const glowIntensity = useTransform(
        scrollProgress,
        [glowStart, beamReachesStep, glowComplete],
        [0, 0.7, 1]
    );

    const stepStart = index * 0.2;
    const stepMid = stepStart + 0.1;
    const stepEnd = stepStart + 0.2;

    const isActive = useTransform(
        scrollProgress,
        [stepStart, stepMid, stepEnd],
        [0, 1, 0.8]
    );

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
            {/* Timeline Dot */}
            <div className="flex-shrink-0 relative z-10">
                <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 relative overflow-hidden cursor-pointer"
                    style={{
                        backgroundColor: useTransform(
                            glowIntensity,
                            [0, 0.5, 1],
                            ["var(--bg-secondary)", "var(--bg-surface)", "var(--accent-primary)"]
                        ),
                        borderColor: useTransform(
                            glowIntensity,
                            [0, 0.5, 1],
                            ["var(--border)", "var(--accent-secondary)", "var(--accent-primary)"]
                        ),
                        boxShadow: useTransform(
                            glowIntensity,
                            [0, 1],
                            ["0 0 0px rgba(0, 0, 0, 0)", "0 10px 15px rgba(0, 0, 0, 0.1)"]
                        ),
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        className="text-sm font-bold font-satoshi relative z-10"
                        style={{
                            color: useTransform(
                                glowIntensity,
                                [0, 0.5, 1],
                                ["var(--text-secondary)", "var(--text-primary)", "var(--bg-primary)"]
                            )
                        }}
                    >
                        {step.number}
                    </motion.span>
                </motion.div>
            </div>

            {/* Content Card - Dark Theme */}
            <div className="flex-1 pb-6">
                <div className="py-4 px-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-purple-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer shadow-black/50">
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold font-satoshi text-white mb-1">
                        {step.title}
                    </h3>

                    {/* Caption */}
                    <motion.p
                        className="text-xs font-satoshi font-medium uppercase tracking-wider mb-2"
                        style={{
                            color: useTransform(isActive, [0, 0.5, 1], ["#52525b", "#a1a1aa", "#c084fc"]) // zinc-600, zinc-400, purple-400
                        }}
                    >
                        {step.caption}
                    </motion.p>

                    {/* Description - Staggered Reveal */}
                    <div className="text-sm text-zinc-400 font-satoshi leading-relaxed relative min-h-[48px]">
                        {/* Static fallback for layout */}
                        <p className={activeState ? "opacity-0 absolute inset-0" : "opacity-100 transition-opacity duration-300"}>
                            {step.description}
                        </p>

                        {/* Animated version */}
                        {activeState && (
                            <motion.p
                                className="absolute inset-0"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.02
                                        }
                                    }
                                }}
                            >
                                {step.description.split(" ").map((word, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 5 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="inline-block mr-1 text-white"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.p>
                        )}
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
                <div className="text-center mb-12">
                    <span className="block text-sm font-medium font-satoshi text-zinc-500 mb-3">(How We Work)</span>
                    <CinematicBlurReveal
                        text="How We Work Together"
                        as="h2"
                        className="text-3xl md:text-5xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                    />
                    <p className="text-base text-zinc-400 font-satoshi font-normal max-w-xl mx-auto">
                        A streamlined 3-step process designed to deliver exceptional results in 3 weeks.
                    </p>
                </div>

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
