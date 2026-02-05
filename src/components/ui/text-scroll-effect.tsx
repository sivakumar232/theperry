"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface TextScrollRevealProps {
    text: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
    variant?: "slide-up" | "fade" | "scale-out";
    splitBy?: "word" | "char";
    staggerDelay?: number;
    scrollOffset?: any;
}

export function TextScrollReveal({
    text,
    className = "",
    tag = "h2",
    variant = "slide-up",
    splitBy = "char",
    staggerDelay = 0.02, // faster trigger for chars
    scrollOffset = ["start 0.9", "start 0.6"]
}: TextScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: scrollOffset,
    });

    // Split logic
    let items: string[] = [];
    if (splitBy === "char") {
        items = text.split("");
    } else {
        items = text.split(" ");
    }

    const totalDuration = 0.3; // Duration of one item's animation window in scroll terms

    // Motion Tag
    const MotionTag = motion[tag] as any;

    return (
        <div ref={containerRef} className="relative">
            <MotionTag className={className}>
                {items.map((item, index) => {
                    // Calculate item's scroll window
                    const start = index * staggerDelay;
                    const end = start + totalDuration;

                    // --- VARIANTS ---

                    // 1. Opacity (always helpful)
                    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

                    // 2. Blur (standard common denominator)
                    const blur = useTransform(scrollYProgress, [start, end], [8, 0]);

                    // 3. Y Translate (for slide-up)
                    // If variant is slide-up, start at 50, go to 0. Else 0.
                    const y = useTransform(scrollYProgress, [start, end], variant === "slide-up" ? [50, 0] : [0, 0]);

                    // 4. Scale (for scale-out, the depth effect)
                    const scale = useTransform(scrollYProgress, [start, end], variant === "scale-out" ? [1.5, 1] : [1, 1]);

                    return (
                        <motion.span
                            key={index}
                            className="inline-block" // Chars need to be inline-block to transform
                            style={{
                                opacity,
                                filter: useTransform(blur, (v) => `blur(${v}px)`),
                                y,
                                scale,
                                marginRight: splitBy === "word" ? "0.25em" : (item === " " ? "0.25em" : "0"), // spacing handling
                            }}
                        >
                            {item === " " && splitBy === "char" ? "\u00A0" : item}
                        </motion.span>
                    );
                })}
            </MotionTag>
        </div>
    );
}
