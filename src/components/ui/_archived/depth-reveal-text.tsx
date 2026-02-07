"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface DepthRevealTextProps {
    text: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
    staggerDelay?: number;
    scrollOffset?: any; // Simpler type to avoid strict union matching issues for now, or copy exact type
}

export function DepthRevealText({
    text,
    className = "",
    tag = "h2",
    staggerDelay = 0.05,
    scrollOffset = ["start 0.9", "start 0.6"] // Defaults that trigger as it enters view
}: DepthRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: scrollOffset,
    });

    // Split text into words
    const words = text.split(" ");
    const totalDuration = 0.3; // Duration of animation portion for a single word relative to scroll range

    // Create motion values for each word
    const wordAnimations = words.map((_, index) => {
        // Calculate start and end points for this word's timeline
        // normalize animation across the scroll range
        const start = index * staggerDelay;
        const end = start + totalDuration;

        // Ensure we don't go past 1 (though useTransform handles clamping usually)

        const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]
        );

        const blur = useTransform(
            scrollYProgress,
            [start, end],
            [12, 0]
        );

        const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1.5, 1] // Starts 1.5x larger (closer), settles to 1x
        );

        const y = useTransform(
            scrollYProgress,
            [start, end],
            [20, 0] // Slight Y movement to help "settle"
        );

        return { opacity, blur, scale, y };
    });

    const MotionTag = motion[tag] as any;

    return (
        <div ref={containerRef} className="relative">
            <MotionTag className={className}>
                {words.map((word, index) => {
                    const { opacity, blur, scale, y } = wordAnimations[index];

                    return (
                        <motion.span
                            key={index}
                            className="inline-block mr-2 origin-center" // origin-center crucial for scale
                            style={{
                                opacity,
                                filter: useTransform(blur, (value) => `blur(${value}px)`),
                                scale,
                                y,
                            }}
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </MotionTag>
        </div>
    );
}
