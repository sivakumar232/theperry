"use client";

import React from "react";
import Lottie from "lottie-react";
import brainstormAnimation from "./brainstorm.json";
import trainingAnimation from "./training.json";
import missionAnimation from "./mission.json";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";
import { motion } from "motion/react";

const steps = [
    {
        id: 1,
        step: "Step 1",
        title: "Understand the Vision",
        description:
            "Share what's on your mind — your goals, ideas, or even rough thoughts. We listen, understand, and move forward only after everything is clear.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={brainstormAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
    },
    {
        id: 2,
        step: "Step 2",
        title: "Shape the Solution",
        description:
            "We define the scope, design the strategy, and map the right approach for your project. You review everything, we refine together, and move ahead only after your approval.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={trainingAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
    },
    {
        id: 3,
        step: "Step 3",
        title: "Bring It to Life",
        description:
            "Our experts get to work, keep you updated throughout the process, and build with precision. Everything is prepared for a smooth, confident launch.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={missionAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
    },
];

const StepCard = React.memo(({ step, index }: { step: typeof steps[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
        >
            <div className="relative h-64 border-neutral-800/80 w-full bg-neutral-950 p-6 flex flex-col items-center text-center overflow-hidden transition-colors">
                <div className="mb-4">
                    {step.icon}
                </div>
                <p className="text-xs font-medium font-satoshi text-neutral-500 uppercase tracking-widest mb-4">
                    {step.step}
                </p>
                <h3 className="text-[24px] font-semibold font-satoshi text-neutral-100 mb-4 leading-tight transition-colors">
                    {step.title}
                </h3>
                <p className="text-md text-neutral-400 font-satoshi font-medium">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
});

StepCard.displayName = "StepCard";

export function ProcessSection() {
    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            <ContentContainer>
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
                        <span className="text-[11px] font-semibold font-satoshi text-neutral-300 uppercase tracking-[0.2em] leading-none mt-[1px]">PROCESS</span>
                    </div>
                    <CinematicBlurReveal
                        text="How We Work Together"
                        as="h2"
                        className="text-3xl md:text-6xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                    />
                    <p className="text-md text-zinc-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                        A simple, collaborative process that turns your ideas into reality.
                    </p>
                </motion.div>
            </ContentContainer>

            {/* Cards Grid */}
            <div className="relative z-10 max-w-[1070px] mx-auto px-3 md:px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-6">
                    {steps.map((step, index) => (
                        <StepCard key={step.id} step={step} index={index} />
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/50 to-transparent z-0" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/50 to-transparent z-0" />
        </section>
    );
}
