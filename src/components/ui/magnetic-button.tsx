"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
    children: React.ReactNode;
    strength?: number;
}

export function MagneticButton({ children, strength = 0.3 }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const rafRef = useRef<number | null>(null);

    // Throttle mousemove with requestAnimationFrame for better performance
    const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (rafRef.current) return; // Skip if already scheduled

        rafRef.current = requestAnimationFrame(() => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current!.getBoundingClientRect();
            const middleX = left + width / 2;
            const middleY = top + height / 2;

            const offsetX = (clientX - middleX) * strength;
            const offsetY = (clientY - middleY) * strength;

            setPosition({ x: offsetX, y: offsetY });
            rafRef.current = null;
        });
    }, [strength]);

    const reset = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        setPosition({ x: 0, y: 0 });
    }, []);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
