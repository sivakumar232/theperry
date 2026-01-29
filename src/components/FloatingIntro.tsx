"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface ScrollRevealTextProps {
    text: string;
    className?: string;
    startOffset?: number;
    endOffset?: number;
}

function ScrollRevealText({
    text,
    className = "",
    startOffset = 0,
    endOffset = 1,
}: ScrollRevealTextProps) {
    const characters = text.split("");
    const totalChars = characters.length;

    return (
        <span className={className}>
            {characters.map((char, index) => {
                // Calculate the scroll range for this character
                const charStart = startOffset + (index / totalChars) * (endOffset - startOffset) * 0.8;
                const charEnd = charStart + 0.15; // Each char takes 15% of scroll to fully reveal

                return (
                    <ScrollChar
                        key={index}
                        char={char}
                        start={charStart}
                        end={charEnd}
                    />
                );
            })}
        </span>
    );
}

interface ScrollCharProps {
    char: string;
    start: number;
    end: number;
}

function ScrollChar({ char, start, end }: ScrollCharProps) {
    const ref = useRef<HTMLSpanElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

    return (
        <motion.span
            ref={ref}
            style={{ opacity }}
            className="inline-block"
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
}

export function FloatingIntro() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section
            ref={containerRef}
            className="relative min-h-[150vh] flex flex-col justify-center px-6 md:px-16 py-32 overflow-hidden"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-300/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Line 1: We specialize in */}
                <div className="mb-4">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-clash font-bold text-beige leading-[0.95] tracking-tight">
                        <ScrollRevealText
                            text="We specialize in"
                            startOffset={0}
                            endOffset={0.2}
                        />
                    </h2>
                </div>

                {/* Line 2: customer happiness. */}
                <div className="mb-12">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-clash font-bold text-green-300 leading-[0.95] tracking-tight italic">
                        <ScrollRevealText
                            text="customer happiness."
                            startOffset={0.1}
                            endOffset={0.3}
                        />
                    </h2>
                </div>

                {/* Line 3: Subheadline */}
                <div className="mb-8">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-satoshi font-medium leading-tight max-w-4xl">
                        <span className="text-beige/80">
                            <ScrollRevealText
                                text="Tailored strategies, "
                                startOffset={0.2}
                                endOffset={0.35}
                            />
                        </span>
                        <span className="text-beige">
                            <ScrollRevealText
                                text="Guaranteed results"
                                startOffset={0.25}
                                endOffset={0.4}
                            />
                        </span>
                    </p>
                </div>

                {/* Line 4: Description */}
                <div className="max-w-3xl">
                    <p className="text-lg md:text-xl lg:text-2xl font-satoshi text-beige/50 leading-relaxed">
                        <ScrollRevealText
                            text="That's why we offer a full suite of services, each tailored to address your unique challenges and goals. Our team of experts combines creativity with data to build strategies that deliver results."
                            startOffset={0.3}
                            endOffset={0.55}
                        />
                    </p>
                </div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute -right-20 top-1/4 w-96 h-96 bg-green-300/5 rounded-full blur-3xl pointer-events-none"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
                        scale: useTransform(scrollYProgress, [0, 0.3], [0.5, 1]),
                    }}
                />
                <motion.div
                    className="absolute -left-32 bottom-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
                    style={{
                        opacity: useTransform(scrollYProgress, [0.1, 0.4], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1]),
                    }}
                />
            </div>
        </section>
    );
}
