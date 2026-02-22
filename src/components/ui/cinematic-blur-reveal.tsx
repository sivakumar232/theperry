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
    return (
        <Component className={cn("text-center tracking-tight", className)}>
            {text.split("").map((char, i) => {
                if (char === "\n") {
                    return <br key={i} className="block md:hidden" />;
                }
                return (
                    <motion.span
                        key={i}
                        initial={{
                            opacity: 0,
                            filter: "blur(20px)",
                            scale: 1.05,
                            y: 5,
                        }}
                        whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: delay + i * 0.03, // Faster stagger for smoother sentence flow
                            ease: [0.25, 0.4, 0.25, 1],
                        }}
                        viewport={{ once: true }}
                        className="inline-block whitespace-pre"
                    >
                        {char}
                    </motion.span>
                );
            })}
        </Component>
    );
};
