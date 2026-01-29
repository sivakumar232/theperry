"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
    children: React.ReactNode;
    strength?: number;
}

export function MagneticButton({ children, strength = 0.3 }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current!.getBoundingClientRect();
        const middleX = left + width / 2;
        const middleY = top + height / 2;

        const offsetX = (clientX - middleX) * strength;
        const offsetY = (clientY - middleY) * strength;

        setPosition({ x: offsetX, y: offsetY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

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
