"use client";

import React from "react";
import { motion } from "motion/react";

interface FloatingElementProps {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    yOffset?: number;
    xOffset?: number;
    rotation?: number;
    ease?: any;
}

export function FloatingElement({
    children,
    className = "",
    duration = 3,
    yOffset = 0,
    xOffset = 0,
    rotation = 0,
    ease = "easeInOut",
}: FloatingElementProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -yOffset, 0],
                x: [0, xOffset, 0],
                rotate: [0, rotation, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: ease,
            }}
        >
            {children}
        </motion.div>
    );
}
