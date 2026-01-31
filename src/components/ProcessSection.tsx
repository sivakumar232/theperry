"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Strategy & Discovery",
        caption: "Understand Your Vision",
        description: "Deep dive into your business goals, target audience, and competitive landscape. We align on strategy before touching design.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Design & Build",
        caption: "Craft Your Experience",
        description: "Custom designs that capture your brand, then built with performance-first code. You see everything before launch.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Launch & Grow",
        caption: "Go Live with Confidence",
        description: "Seamless deployment, final testing, and 30 days of support. We ensure you launch strong and keep winning.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    },
];

function ProcessStep({ step, index, scrollProgress }: { step: typeof steps[0]; index: number; scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
    // Faster reaction - tighter offsets
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
        <motion.div
            className="relative flex gap-5 md:gap-8 active-step-container"
            initial={{ opacity: 0.5, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            {/* Timeline Dot */}
            <div className="flex-shrink-0 relative z-10">
                <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative overflow-hidden"
                    style={{
                        backgroundColor: useTransform(isActive, [0, 0.5, 1], ["rgb(10, 10, 10)", "rgb(254, 251, 227)", "rgb(254, 251, 227)"]),
                        borderColor: useTransform(isActive, [0, 0.5, 1], ["rgba(255, 255, 255, 0.2)", "rgb(254, 251, 227)", "rgb(254, 251, 227)"]),
                    }}
                >
                    {/* Pulse from center when active */}
                    {/* Pulse from center when active - REMOVED */}

                    <motion.span
                        className="text-sm font-bold font-satoshi relative z-10"
                        style={{
                            color: useTransform(isActive, [0, 0.5, 1], ["rgba(254, 251, 227, 0.7)", "rgb(10, 10, 10)", "rgb(10, 10, 10)"])
                        }}
                    >
                        {step.number}
                    </motion.span>
                </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-6">
                <div className="py-1">
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-2 mb-1">
                        <motion.div
                            className="text-2xl"
                            animate={{
                                rotate: activeState ? [0, -10, 10, -10, 0] : 0,
                                scale: activeState ? 1.1 : 1
                            }}
                            transition={{ duration: 0.5 }}
                            style={{
                                color: useTransform(isActive, [0, 0.5, 1], ["rgba(254, 251, 227, 0.4)", "rgb(254, 251, 227)", "rgb(254, 251, 227)"])
                            }}
                        >
                            {/* Animated Icon Drawing */}
                            {React.cloneElement(step.icon as any, {
                                className: "w-6 h-6",
                                initial: { pathLength: 0, opacity: 0.5 },
                                animate: {
                                    pathLength: activeState ? 1 : 0,
                                    opacity: activeState ? 1 : 0.5
                                },
                                transition: { duration: 0.8, ease: "easeInOut" }
                            })}
                        </motion.div>
                        <h3 className="text-lg md:text-xl font-bold font-satoshi text-beige">
                            {step.title}
                        </h3>
                    </div>

                    {/* Caption */}
                    <motion.p
                        className="text-xs font-satoshi font-medium uppercase tracking-wider mb-2"
                        style={{
                            color: useTransform(isActive, [0, 0.5, 1], ["rgba(254, 251, 227, 0.4)", "rgba(254, 251, 227, 0.8)", "rgba(254, 251, 227, 0.8)"])
                        }}
                    >
                        {step.caption}
                    </motion.p>

                    {/* Description - Staggered Reveal */}
                    <div className="text-sm text-beige/50 font-satoshi leading-relaxed relative min-h-[48px]">
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
                                        className="inline-block mr-1 text-beige/80"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

    return (
        <section
            id="process"
            ref={containerRef}
            className="relative py-16 md:py-24"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-satoshi text-beige mb-3">
                        How We{" "}
                        <span className="text-beige/70 italic font-normal">Work Together</span>
                    </h2>
                    <p className="text-base text-beige/50 font-satoshi font-normal max-w-xl mx-auto">
                        A streamlined 3-step process designed to deliver exceptional results in 3 weeks.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative max-w-2xl mx-auto">
                    {/* Background Line */}
                    <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-white/10" />

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-5 md:left-6 top-0 w-px bg-gradient-to-b from-beige via-beige/50 to-transparent origin-top"
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
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-beige text-background font-satoshi font-semibold text-sm rounded-full hover:bg-beige/90 transition-colors"
                    >
                        Start Your Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
