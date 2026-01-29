"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const textSections = [
    {
        text: "We specialize in",
        highlight: false,
        size: "text-5xl md:text-7xl lg:text-8xl",
    },
    {
        text: "customer happiness.",
        highlight: true,
        size: "text-5xl md:text-7xl lg:text-8xl",
    },
    {
        text: "Tailored strategies,",
        highlight: false,
        size: "text-4xl md:text-6xl lg:text-7xl",
    },
    {
        text: "Guaranteed results.",
        highlight: true,
        size: "text-4xl md:text-6xl lg:text-7xl",
    },
    {
        text: "That's why we offer a full suite of services,",
        highlight: false,
        size: "text-2xl md:text-4xl lg:text-5xl",
    },
    {
        text: "each tailored to your unique challenges.",
        highlight: false,
        size: "text-2xl md:text-4xl lg:text-5xl",
    },
    {
        text: "Our team combines creativity with data",
        highlight: false,
        size: "text-2xl md:text-4xl lg:text-5xl",
    },
    {
        text: "to build strategies that deliver.",
        highlight: true,
        size: "text-2xl md:text-4xl lg:text-5xl",
    },
    {
        text: "Your Journey",
        highlight: false,
        size: "text-5xl md:text-7xl lg:text-8xl",
    },
    {
        text: "With Us",
        highlight: true,
        size: "text-5xl md:text-7xl lg:text-8xl",
    },
];

export function ScrollTextExperience() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: `${textSections.length * 60}vh` }}
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background gradient orbs */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full bg-green-300/5 blur-[150px] pointer-events-none"
                    style={{
                        x: useTransform(scrollYProgress, [0, 1], [-200, 200]),
                        y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
                    }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none"
                    style={{
                        x: useTransform(scrollYProgress, [0, 1], [200, -200]),
                        y: useTransform(scrollYProgress, [0, 1], [100, -100]),
                    }}
                />

                {/* Text container */}
                <div className="relative z-10 text-center px-6 max-w-6xl">
                    {textSections.map((section, index) => {
                        const start = index / textSections.length;
                        const end = (index + 1) / textSections.length;
                        const midPoint = (start + end) / 2;

                        return (
                            <TextLine
                                key={index}
                                text={section.text}
                                highlight={section.highlight}
                                size={section.size}
                                scrollProgress={scrollYProgress}
                                start={start}
                                midPoint={midPoint}
                                end={end}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

interface TextLineProps {
    text: string;
    highlight: boolean;
    size: string;
    scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
    start: number;
    midPoint: number;
    end: number;
}

function TextLine({
    text,
    highlight,
    size,
    scrollProgress,
    start,
    midPoint,
    end,
}: TextLineProps) {
    // Fade in and scale up until midpoint, then fade out and scale down
    const opacity = useTransform(
        scrollProgress,
        [start, midPoint - 0.02, midPoint, midPoint + 0.02, end],
        [0, 1, 1, 1, 0]
    );

    const scale = useTransform(
        scrollProgress,
        [start, midPoint, end],
        [0.8, 1, 0.8]
    );

    const y = useTransform(
        scrollProgress,
        [start, midPoint, end],
        [60, 0, -60]
    );

    const blur = useTransform(
        scrollProgress,
        [start, midPoint - 0.02, midPoint, midPoint + 0.02, end],
        [10, 0, 0, 0, 10]
    );

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
                opacity,
                scale,
                y,
                filter: useTransform(blur, (v) => `blur(${v}px)`),
            }}
        >
            <h2
                className={`${size} font-clash font-bold leading-tight tracking-tight ${highlight ? "text-green-300 italic" : "text-beige"
                    }`}
            >
                {text}
            </h2>
        </motion.div>
    );
}
