"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface BlurRevealTextProps {
    text: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
    startColor?: string;
    endColor?: string;
    staggerDelay?: number;
    scrollOffset?: ["start start" | "start center" | "start end" | "end start" | "end center" | "end end" | `start ${number}` | `end ${number}`, "start start" | "start center" | "start end" | "end start" | "end center" | "end end" | `start ${number}` | `end ${number}`];
    direction?: "up" | "down" | "left" | "right";
}

export function BlurRevealText({
    text,
    className = "",
    tag = "h2",
    startColor = "var(--text-tertiary)",
    endColor = "var(--text-primary)",
    staggerDelay = 0.05,
    scrollOffset = ["start center", "start start"] as const,
    direction = "up"
}: BlurRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: scrollOffset,
    });

    // Split text into words
    const words = text.split(" ");

    // Create motion values for each word
    const wordAnimations = words.map((_, index) => {
        const start = index * staggerDelay;
        const end = start + 0.3;
        
        const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [0.3, 1]
        );
        
        const blur = useTransform(
            scrollYProgress,
            [start, end],
            [3, 0]
        );
        
        const y = useTransform(
            scrollYProgress,
            [start, end],
            direction === "up" ? [20, 0] : 
            direction === "down" ? [-20, 0] : [0, 0]
        );
        
        const x = useTransform(
            scrollYProgress,
            [start, end],
            direction === "left" ? [20, 0] : 
            direction === "right" ? [-20, 0] : [0, 0]
        );
        
        const colorProgress = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]
        );

        return { opacity, blur, y, x, colorProgress };
    });

    const MotionTag = motion[tag] as any;

    return (
        <div ref={containerRef} className="relative">
            <MotionTag className={className}>
                {words.map((word, index) => {
                    const { opacity, blur, y, x, colorProgress } = wordAnimations[index];
                    
                    return (
                        <motion.span
                            key={index}
                            className="inline-block mr-2"
                            style={{
                                opacity,
                                filter: useTransform(blur, (value) => `blur(${value}px)`),
                                y,
                                x,
                                color: useTransform(
                                    colorProgress,
                                    [0, 1],
                                    [startColor, endColor]
                                ),
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