"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";

interface CinematicBlurRevealProps {
    text: string;
    className?: string;
    delay?: number;
    as?: React.ElementType;
}

export const CinematicBlurReveal = ({
    text,
    className,
    delay = 0,
    as: Component = "h2",
}: CinematicBlurRevealProps) => {
    // Split by words instead of characters for better performance
    const words = text.split(" ");

    return (
        <Component className={cn("text-center tracking-tight", className)}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                        y: 5,
                    }}
                    whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.08, // Slightly faster stagger for words
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    viewport={{ once: true }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </Component>
    );
};
