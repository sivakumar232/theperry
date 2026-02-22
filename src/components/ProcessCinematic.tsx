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
    },
    {
        id: 2,
        stepLabel: "02",
        title: "Shape the Solution",
        description:
            "We define the scope, plan the strategy, and map the right approach. You review, we refine — until it's perfect.",
        icon: trainingAnimation,
    },
    {
        id: 3,
        stepLabel: "03",
        title: "Bring It to Life",
        description:
            "Our experts build with precision, keeping you updated throughout. A smooth, confident launch — every time.",
        icon: missionAnimation,
    },
];

/**
 * ALIGNMENT MATH:
 * Container = 300vh  |  Each card = min-h-screen (100vh)  |  No padding offsets
 * Scroll distance = 300 - 100 = 200vh
 *
 * Card[i] center in container = i * 100 + 50 (vh)
 * → at viewport center when scroll = i * 100 + 50 - 50 = i * 100 vh
 * → scrollYProgress = (i * 100) / 200 = i / 2
 *   Step 0: progress = 0.0
 *   Step 1: progress = 0.5
 *   Step 2: progress = 1.0
 *
 * Switch thresholds (midpoints between centers):
 *   0→1 switch at 0.25
 *   1→2 switch at 0.75
 */
const N = steps.length;
const cardCenterAt = (i: number) => i / (N - 1); // 0, 0.5, 1
const switchAt = (i: number) =>
    (cardCenterAt(i) + cardCenterAt(i + 1)) / 2; // 0.25, 0.75

function getRange(index: number): [number, number] {
    const start = index === 0 ? 0 : switchAt(index - 1);
    const end = index === N - 1 ? 1 : switchAt(index);
    return [start, end];
}

// LEFT sticky icon: blurs out at transitions, fully sharp in the middle of its range
function StickyIcon({
    step,
    scrollYProgress,
    index,
}: {
    step: typeof steps[0];
    scrollYProgress: MotionValue<number>;
    index: number;
}) {
    const [start, end] = getRange(index);
    const isFirst = index === 0;
    const isLast = index === N - 1;
    const FADE = 0.06;

    const opacity = useTransform(
        scrollYProgress,
        isFirst && isLast
            ? [0, 1]
            : isFirst
                ? [0, end - FADE, end + FADE]
                : isLast
                    ? [start - FADE, start + FADE, 1]
                    : [start - FADE, start + FADE, end - FADE, end + FADE],
        isFirst && isLast
            ? [1, 1]
            : isFirst
                ? [1, 1, 0]
                : isLast
                    ? [0, 1, 1]
                    : [0, 1, 1, 0]
    );

    const blur = useTransform(
        scrollYProgress,
        isFirst && isLast
            ? [0, 1]
            : isFirst
                ? [0, end - FADE, end + FADE]
                : isLast
                    ? [start - FADE, start + FADE, 1]
                    : [start - FADE, start + FADE, end - FADE, end + FADE],
        isFirst && isLast
            ? [0, 0]
            : isFirst
                ? [0, 0, 14]
                : isLast
                    ? [14, 0, 0]
                    : [14, 0, 0, 14]
    );
    const filter = useTransform(blur, (b) => `blur(${b}px)`);

    return (
        <motion.div
            style={{ opacity, filter }}
            className="absolute inset-0 flex flex-col justify-center items-center"
        >
            <div
                className="rounded-3xl p-8 flex items-center justify-center"
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

// RIGHT card: opacity + y tied to same range as icon, first starts fully visible
function StepCard({
    step,
    scrollYProgress,
    index,
}: {
    step: typeof steps[0];
    scrollYProgress: MotionValue<number>;
    index: number;
}) {
    const [start, end] = getRange(index);
    const isFirst = index === 0;
    const isLast = index === N - 1;
    const FADE = 0.06;
    const SLIDE = 0.08;

    const opacity = useTransform(
        scrollYProgress,
        isFirst && isLast
            ? [0, 1]
            : isFirst
                ? [0, end - FADE, end + FADE]
                : isLast
                    ? [start - FADE, start + SLIDE, 1]
                    : [start - FADE, start + SLIDE, end - FADE, end + FADE],
        isFirst && isLast
            ? [1, 1]
            : isFirst
                ? [1, 1, 0]
                : isLast
                    ? [0, 1, 1]
                    : [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        isFirst
            ? [0, 1] // first card: no slide-up needed
            : [start - FADE, start + SLIDE],
        isFirst
            ? [0, 0]
            : [28, 0]
    );

    return (
        <div className="min-h-screen flex flex-col justify-center">
            <motion.div style={{ opacity, y }} className="flex flex-col items-start">
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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section id="process" className="bg-black relative">

            {/* Section header */}
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

            {/* MOBILE: simple stacked list */}
            <div className="md:hidden max-w-xl mx-auto px-6 pb-20 flex flex-col gap-12">
                {steps.map((step) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center text-center gap-5"
                    >
                        <div
                            className="rounded-2xl p-5 flex items-center justify-center"
                            style={{
                                background: `rgba(255,255,255,0.03)`,
                                border: `1px solid rgba(255,255,255,0.15)`,
                                width: 96,
                                height: 96,
                            }}
                        >
                            <Lottie animationData={step.icon} loop autoplay style={{ width: 56, height: 56 }} />
                        </div>
                        <div>
                            <span className="text-xs font-satoshi font-bold tracking-widest mb-2 block text-neutral-400">
                                {step.stepLabel}
                            </span>
                            <h3 className="text-2xl font-bold font-satoshi text-white leading-tight mb-3">
                                {step.title}
                            </h3>
                            <p className="text-base text-neutral-400 font-satoshi leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* DESKTOP: cinematic sticky scroll */}
            <div
                ref={containerRef}
                className="hidden md:flex relative max-w-6xl mx-auto px-12 flex-row gap-16"
                style={{ height: "300vh" }}
            >
                {/* LEFT sticky icon panel */}
                <div className="w-[44%] shrink-0">
                    <div className="sticky top-0 h-screen">
                        <div className="relative h-full">
                            {steps.map((step, i) => (
                                <StickyIcon
                                    key={step.id}
                                    step={step}
                                    scrollYProgress={scrollYProgress}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-px bg-white/[0.06] shrink-0 self-stretch" />

                {/* RIGHT scrolling step cards — each min-h-screen, no padding offset */}
                <div className="flex-1 flex flex-col">
                    {steps.map((step, i) => (
                        <StepCard
                            key={step.id}
                            step={step}
                            scrollYProgress={scrollYProgress}
                            index={i}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}
