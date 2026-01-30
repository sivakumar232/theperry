"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollRevealWordProps {
    text: string;
    scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
    startOffset: number;
    endOffset: number;
    className?: string;
}

function ScrollRevealWord({
    text,
    scrollProgress,
    startOffset,
    endOffset,
    className = "",
}: ScrollRevealWordProps) {
    const words = text.split(" ");
    const totalWords = words.length;

    return (
        <span className={className}>
            {words.map((word, index) => {
                const wordStart = startOffset + (index / totalWords) * (endOffset - startOffset);
                const wordEnd = wordStart + (endOffset - startOffset) / totalWords + 0.05;

                const opacity = useTransform(
                    scrollProgress,
                    [wordStart, wordEnd],
                    [0.15, 1]
                );

                const y = useTransform(
                    scrollProgress,
                    [wordStart, wordEnd],
                    [8, 0]
                );

                return (
                    <motion.span
                        key={index}
                        style={{ opacity, y }}
                        className="inline-block mr-[0.15em] whitespace-nowrap"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </span>
    );
}

export function FloatingIntro() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
    const orbOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="intro"
            ref={containerRef}
            className="relative h-[130vh]"
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background decorative orb - beige instead of green */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-beige/5 rounded-full blur-[120px] pointer-events-none"
                    style={{ scale: orbScale, opacity: orbOpacity }}
                />

                {/* Content container */}
                <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center h-full">

                    {/* Primary Headline Block */}
                    <div className="mb-10 md:mb-14 text-center w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-satoshi font-bold leading-[1.1] tracking-tight">
                            <span className="block mb-2">
                                <span className="text-beige">
                                    <ScrollRevealWord
                                        text="We "
                                        scrollProgress={scrollYProgress}
                                        startOffset={0.1}
                                        endOffset={0.2}
                                    />
                                </span>
                                <span className="text-beige/70 italic">
                                    <ScrollRevealWord
                                        text="specialize "
                                        scrollProgress={scrollYProgress}
                                        startOffset={0.15}
                                        endOffset={0.25}
                                    />
                                </span>
                                <span className="text-beige">
                                    <ScrollRevealWord
                                        text="in"
                                        scrollProgress={scrollYProgress}
                                        startOffset={0.2}
                                        endOffset={0.28}
                                    />
                                </span>
                            </span>
                            <span className="block whitespace-nowrap">
                                <span className="text-beige">
                                    <ScrollRevealWord
                                        text="customer "
                                        scrollProgress={scrollYProgress}
                                        startOffset={0.28}
                                        endOffset={0.38}
                                    />
                                </span>
                                <span className="text-beige/70 italic">
                                    <ScrollRevealWord
                                        text="happiness."
                                        scrollProgress={scrollYProgress}
                                        startOffset={0.35}
                                        endOffset={0.45}
                                    />
                                </span>
                            </span>
                        </h2>
                    </div>

                    {/* Secondary Content Block */}
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Subheadline */}
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-satoshi font-medium leading-snug mb-6 md:mb-8">
                            <span className="text-beige/70 inline-block">
                                <ScrollRevealWord
                                    text="Tailored strategies, "
                                    scrollProgress={scrollYProgress}
                                    startOffset={0.45}
                                    endOffset={0.55}
                                />
                            </span>
                            <span className="text-beige inline-block ml-2">
                                <ScrollRevealWord
                                    text="Guaranteed results."
                                    scrollProgress={scrollYProgress}
                                    startOffset={0.52}
                                    endOffset={0.62}
                                />
                            </span>
                        </div>

                        {/* Body text */}
                        <div className="text-sm sm:text-base md:text-lg font-satoshi text-beige/50 leading-relaxed max-w-2xl mx-auto">
                            <ScrollRevealWord
                                text="That's why we offer a full suite of services, each tailored to address your unique challenges and goals. Our team of experts combines creativity with data to build strategies that deliver results."
                                scrollProgress={scrollYProgress}
                                startOffset={0.62}
                                endOffset={0.85}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
