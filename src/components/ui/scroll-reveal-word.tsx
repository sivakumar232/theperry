"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollRevealWordProps {
    text: string;
    scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
    startOffset: number;
    endOffset: number;
    className?: string;
}

export function ScrollRevealWord({
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
