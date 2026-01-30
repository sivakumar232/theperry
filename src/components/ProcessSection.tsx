"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Discovery",
        duration: "Week 1",
        description: "We dive deep into your business, goals, and target audience. This foundation ensures everything we build is strategically aligned.",
        deliverables: [
            "60-minute strategy call",
            "Competitor analysis",
            "Project roadmap & timeline",
        ],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Design",
        duration: "Week 2",
        description: "We craft pixel-perfect designs that capture your brand essence and convert visitors. You'll see everything before we write a single line of code.",
        deliverables: [
            "Wireframes & mockups",
            "2 revision rounds",
            "Interactive prototype",
        ],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Develop",
        duration: "Week 3-4",
        description: "We bring the designs to life with clean, performant code. Every site scores 90+ on PageSpeed and is built for long-term maintainability.",
        deliverables: [
            "Responsive development",
            "CMS integration",
            "SEO optimization",
        ],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Launch",
        duration: "Week 5",
        description: "We handle deployment, run final tests, and make sure everything is perfect. Plus, we stick around to help you succeed.",
        deliverables: [
            "Deployment & DNS setup",
            "Training session",
            "30 days free support",
        ],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    },
];

// Individual step component with its own inView detection
function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
    const stepRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(stepRef, {
        margin: "-40% 0px -40% 0px", // Trigger when step is in center 20% of viewport
        once: false
    });

    return (
        <motion.div
            ref={stepRef}
            className="relative flex gap-6 md:gap-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Timeline Dot - Fills with color when in view */}
            <div className="flex-shrink-0 relative z-10">
                {/* Main dot - fills with green when active */}
                <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-400"
                    animate={{
                        backgroundColor: isInView ? "rgb(134, 239, 172)" : "rgb(10, 10, 10)",
                        borderColor: isInView ? "rgb(134, 239, 172)" : "rgba(255, 255, 255, 0.2)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <motion.span
                        className="text-lg font-bold font-satoshi"
                        animate={{
                            color: isInView ? "rgb(10, 10, 10)" : "rgba(245, 245, 220, 0.7)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {step.number}
                    </motion.span>
                </motion.div>
            </div>


            {/* Content */}
            <div className="flex-1 pb-4">
                <div className="py-2">
                    {/* Title Row */}
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-beige/50">
                            {step.icon}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold font-satoshi text-beige">
                            {step.title}
                        </h3>
                    </div>

                    {/* Duration Badge */}
                    <span className="inline-block text-xs font-satoshi font-medium text-beige/50">
                        {step.duration}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Start earlier, end later for more forward progress
    });

    // Animate the line height based on scroll - extend to 120% to ensure full fill
    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <section id="process" ref={containerRef} className="py-20 md:py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-beige mb-4">
                        How We{" "}
                        <span className="text-beige/70 italic font-normal">Work Together</span>
                    </h2>
                    <p className="text-lg text-beige/60 font-satoshi font-normal max-w-2xl mx-auto">
                        A transparent, collaborative process designed to deliver exceptional results on time.
                    </p>
                </motion.div>

                {/* Process Steps - Vertical Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Background Line (static) */}
                    <div className="absolute left-[28px] md:left-8 top-0 bottom-0 w-px bg-white/10" />

                    {/* Animated Progress Line - GREEN accent for the active line */}
                    <motion.div
                        className="absolute left-[28px] md:left-8 top-0 w-px bg-gradient-to-b from-green-300 via-green-300/50 to-transparent origin-top"
                        style={{ height: lineHeight }}
                    />

                    <div className="space-y-4 md:space-y-6">
                        {steps.map((step, index) => (
                            <ProcessStep key={step.number} step={step} index={index} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-beige text-background font-satoshi font-semibold rounded-full hover:bg-beige/90 transition-colors"
                    >
                        Start Your Project
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
