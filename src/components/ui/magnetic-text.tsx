"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticTextProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // 0 to 1, default 0.2
}

export function MagneticText({ children, className = "", strength = 0.2 }: MagneticTextProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Only trigger if close
        if (Math.abs(distanceX) < width * 2 && Math.abs(distanceY) < height * 2) {
            x.set(distanceX * strength);
            y.set(distanceY * strength);
        } else {
            x.set(0);
            y.set(0);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}
