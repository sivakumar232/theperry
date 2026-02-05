"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ShinyButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
};

export const ShinyButton = ({
    children,
    className,
    href,
}: ShinyButtonProps) => {
    const containerRef = useRef<HTMLAnchorElement>(null);
    const [pathLength, setPathLength] = useState<number>(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const { width, height } =
            containerRef.current.getBoundingClientRect();

        const r = 24;
        const perimeter =
            2 * (width + height) - 8 * r + 2 * Math.PI * r;

        setPathLength(perimeter);
    }, []);

    return (
        <motion.a
            ref={containerRef}
            href={href}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative inline-flex items-center justify-center px-6 py-3 rounded-full",
                "bg-accent-primary text-bg-primary font-medium font-satoshi text-sm",
                className
            )}
        >
            {/* SVG BORDER */}
            <svg
                className="absolute -inset-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] pointer-events-none"
                overflow="visible"
            >
                <defs>
                    {/* Gradient beam */}
                    <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="25%" stopColor="#4285f4" />
                        <stop offset="55%" stopColor="#ea4335" />
                        <stop offset="100%" stopColor="#34a853" stopOpacity="0.25" />
                    </linearGradient>

                    {/* Glow */}
                    <filter id="glow" x="-70%" y="-70%" width="240%" height="240%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Static base border */}
                <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="24"
                    ry="24"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                />

                {/* 🔥 NON-STOP ROTATING BEAM */}
                {pathLength > 0 && (
                    <motion.rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="24"
                        ry="24"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        strokeDasharray={`${pathLength * 0.35} ${pathLength}`}
                        animate={{
                            strokeDashoffset: [-pathLength, 0],
                        }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                )}
            </svg>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
                <span aria-hidden>→</span>
            </span>
        </motion.a>
    );
};
