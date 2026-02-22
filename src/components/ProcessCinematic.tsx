"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Lottie from "lottie-react";
import brainstormAnimation from "@/assets/lottie/brainstorm.json";
import trainingAnimation from "@/assets/lottie/training.json";
import missionAnimation from "@/assets/lottie/mission.json";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";

const steps = [
    {
        id: 1,
        stepLabel: "01",
        title: "Understand the Vision",
        description:
            "Share what's on your mind — your goals, ideas, or even rough thoughts. We listen, understand, and move with clarity.",
        icon: brainstormAnimation,
        accent: "#6366f1",
    },
    {
        id: 2,
        stepLabel: "02",
        title: "Shape the Solution",
        description:
            "We define the scope, plan the strategy, and map the right approach. You review, we refine — until it's perfect.",
        icon: trainingAnimation,
        accent: "#8b5cf6",
    },
    {
        id: 3,
        stepLabel: "03",
        title: "Bring It to Life",
        description:
            "Our experts build with precision, keeping you updated throughout. A smooth, confident launch — every time.",
        icon: missionAnimation,
        accent: "#a78bfa",
    },
];

// LEFT: one icon shown at a time, swaps based on scroll
function StickyIcon({
    step,
    scrollYProgress,
    index,
    total,
}: {
    step: typeof steps[0];
    scrollYProgress: MotionValue<number>;
    index: number;
    total: number;
}) {
    const start = index / total;
    const end = (index + 1) / total;

    const opacity = useTransform(
        scrollYProgress,
        [start - 0.03, start + 0.07, end - 0.07, end + 0.03],
        [0, 1, 1, 0]
    );

    // Blur: 14px when entering/exiting, 0 when active
    const blur = useTransform(
        scrollYProgress,
        [start - 0.03, start + 0.07, end - 0.07, end + 0.03],
        [14, 0, 0, 14]
    );
    const filter = useTransform(blur, (b) => `blur(${b}px)`);

    return (
        <motion.div
            style={{ opacity, filter }}
            className="absolute inset-0 flex flex-col justify-center items-center"
        >
            <div
                className="rounded-3xl p-8 flex items-center justify-center mb-8"
                style={{
                    background: `rgba(255,255,255,0.03)`,
                    border: `1px solid rgba(255,255,255,0.15)`,
                    boxShadow: `0 0 50px -12px rgba(255,255,255,0.12)`,
                    width: 220,
                    height: 220,
                }}
            >
                <Lottie animationData={step.icon} loop autoplay style={{ width: 140, height: 140 }} />
            </div>
        </motion.div>
    );
}

// RIGHT: each step card — normal flow, heading + description reveals on whileInView
function StepCard({ step }: { step: typeof steps[0] }) {
    return (
        <div className="min-h-screen flex flex-col justify-center py-24 md:py-0">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-start"
            >
                <span className="text-xs font-satoshi font-bold tracking-widest mb-4 block text-neutral-400">
                    {step.stepLabel}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi text-white leading-tight mb-6">
                    {step.title}
                </h3>
                <p className="text-base md:text-lg text-neutral-400 font-satoshi leading-relaxed max-w-sm">
                    {step.description}
                </p>
            </motion.div>
        </div>
    );
}

export function ProcessCinematic() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll through the entire content container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="process" className="bg-black relative">

            {/* Section header — scrolls normally */}
            <div className="py-20 text-center relative z-10 max-w-4xl mx-auto px-6">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
                    <span className="text-[11px] font-semibold font-satoshi text-neutral-300 uppercase tracking-[0.2em] leading-none mt-[1px]">
                        PROCESS
                    </span>
                </div>
                <CinematicBlurReveal
                    text="Our Way of Building With You"
                    as="h2"
                    className="text-3xl md:text-6xl font-bold font-satoshi text-white mb-4 leading-tight"
                />
                <p className="text-md text-zinc-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                    Simple approach. Real collaboration. Work that moves you forward.
                </p>
            </div>


            {/* Main two-column container */}
            <div
                ref={containerRef}
                className="relative max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-0 md:gap-16"
            >
                {/* === LEFT — sticky, swaps icon on scroll === */}
                <div className="hidden md:block md:w-[44%] shrink-0">
                    <div className="sticky top-0 h-screen">
                        <div className="relative h-full">
                            {steps.map((step, i) => (
                                <StickyIcon
                                    key={step.id}
                                    step={step}
                                    scrollYProgress={scrollYProgress}
                                    index={i}
                                    total={steps.length}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="hidden md:block w-px bg-white/[0.06] shrink-0 self-stretch" />

                {/* === RIGHT — normal scroll, 3 stacked heading+desc cards === */}
                <div className="flex-1 flex flex-col">
                    {steps.map((step) => (
                        <StepCard key={step.id} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
}
