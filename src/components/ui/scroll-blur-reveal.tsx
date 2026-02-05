"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollBlurRevealProps {
    text: string;
    className?: string;
    stepOffset?: number; // Distance between words engaging
    animateFromWordIndex?: number;
}

export const ScrollBlurReveal = ({
    text,
    className,
    stepOffset = 0.02,
    animateFromWordIndex = 0,
}: ScrollBlurRevealProps) => {
    const element = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "end 0.2"],
    });

    const words = text.split(" ");
    let charIndex = 0;

    return (
        <div ref={element} className={cn("flex flex-wrap gap-x-2 gap-y-1 justify-center", className)}>
            {words.map((word, wordIndex) => {
                const shouldAnimateWord = wordIndex >= animateFromWordIndex;
                const splitWord = word.split("");

                return (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {splitWord.map((char, charLocalIndex) => {
                            const currentGlobalIndex = charIndex++;

                            if (!shouldAnimateWord) {
                                return <span key={charLocalIndex} className="inline-block">{char}</span>;
                            }

                            // Animation logic per char
                            const transitionDuration = 0.05;
                            const charStart = Math.min(0.9, currentGlobalIndex * stepOffset);
                            const charEnd = charStart + transitionDuration;

                            return (
                                <Char
                                    key={charLocalIndex}
                                    char={char}
                                    progress={scrollYProgress}
                                    range={[charStart, charEnd]}
                                />
                            );
                        })}
                    </span>
                );
            })}
        </div>
    );
};

const Char = ({
    char,
    progress,
    range,
}: {
    char: string;
    progress: MotionValue<number>;
    range: [number, number];
}) => {
    const opacity = useTransform(progress, range, [0.2, 1]);

    return (
        <motion.span
            style={{
                opacity,
            }}
            className="inline-block"
        >
            {char}
        </motion.span>
    );
};
