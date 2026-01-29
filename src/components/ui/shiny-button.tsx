"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationFrame } from "motion/react";
import { cn } from "@/lib/utils";

type ShinyButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
};

export const ShinyButton = ({ children, className, href }: ShinyButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLAnchorElement>(null);
    const [pathLength, setPathLength] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, borderRadius: 24 });

    // Measure the button dimensions
    useEffect(() => {
        if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            setDimensions({ width, height, borderRadius: 24 });
            // Approximate perimeter of rounded rectangle
            const perimeter = 2 * (width + height) - 8 * 24 + 2 * Math.PI * 24;
            setPathLength(perimeter);
        }
    }, []);

    return (
        <motion.a
            ref={containerRef}
            href={href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative inline-flex items-center justify-center px-6 py-3 rounded-full cursor-pointer",
                "bg-beige text-neutral-900 font-medium font-clash text-sm",
                "overflow-visible",
                className
            )}
        >
            {/* SVG for the border beam */}
            <svg
                className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] pointer-events-none"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    {/* Multi-color gradient for the beam */}
                    <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4285f4" />
                        <stop offset="25%" stopColor="#9c27b0" />
                        <stop offset="50%" stopColor="#ea4335" />
                        <stop offset="75%" stopColor="#fbbc04" />
                        <stop offset="100%" stopColor="#34a853" />
                    </linearGradient>

                    {/* Glow filter */}
                    <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>


                </defs>

                {/* Background track (optional subtle border) */}
                <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="24"
                    ry="24"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                />

                {/* Animated beam */}
                <motion.rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="24"
                    ry="24"
                    fill="none"
                    stroke="url(#beamGradient)"
                    strokeWidth="4"                 // ✅ thicker beam
                    strokeLinecap="round"
                    filter="url(#glow)"
                    strokeDasharray={`${pathLength * 0.45} ${pathLength}`} // ✅ long beam
                    animate={{
                        strokeDashoffset: [-pathLength, 0],
                    }}
                    transition={{
                        duration: 3.2,                // ✅ smooth Google-like speed
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

            </svg>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
                <motion.span
                    animate={{
                        x: isHovered ? 0 : -10,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    →
                </motion.span>
            </span>
        </motion.a>
    );
};
