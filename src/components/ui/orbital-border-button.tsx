"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "motion/react";
import { cn } from "@/lib/utils";

interface OrbitalBorderButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function OrbitalBorderButton({
    children,
    className,
    ...props
}: OrbitalBorderButtonProps) {
    const [hovered, setHovered] = useState(false);

    // Motion value for the angle of the conic gradient (coverage)
    // 60 degrees is the initial "part" that moves around
    const coverage = useMotionValue(60);

    // Create dynamic background style
    // We use `from 0deg` and rotate the container. 
    // To make it look "clean" on corners, we use a larger gradient scale or smoother transition? 
    // Actually conic gradient is sharp. 
    const background = useMotionTemplate`conic-gradient(from 0deg, transparent 0deg, white 0deg, white ${coverage}deg, transparent ${coverage}deg)`;

    useEffect(() => {
        // Animate coverage based on hover state
        // We want it "smooth on hover elegant".
        animate(coverage, hovered ? 360 : 60, {
            type: "spring",
            stiffness: 100, // Reduced stiffness for more "elegant" slower feel?
            damping: 20,    // Smooth damping
            mass: 0.8,      // Slightly heavier feel
            duration: hovered ? 1.0 : 0.8 // Duration overrides spring if set? No, spring uses stiffness/damping.
        });
    }, [hovered, coverage]);

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "group relative flex items-center justify-center rounded-xl bg-transparent px-8 py-4 font-semibold text-white transition-transform active:scale-95",
                className
            )}
            {...props}
        >
            {/* Rotating Glow Layer */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className={cn(
                        "absolute inset-[-10%] blur-xl transition-opacity duration-300",
                        hovered ? "opacity-50" : "opacity-30"
                    )}
                    style={{
                        background,
                        width: "120%",
                        height: "120%",
                        left: "-10%",
                        top: "-10%"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        rotate: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }
                    }}
                />
            </div>

            {/* Border Container */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
                {/* Rotating Layer */}
                {/* "move cleanly" -> linear rotation is fine. */}
                <motion.div
                    className="absolute inset-[-150%] top-[-150%] left-[-150%]" // Make it huge so corners are covered cleanly by the conic wedge
                    style={{
                        background,
                        width: "400%",
                        height: "400%"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        rotate: {
                            duration: 4, // Slower rotation "elegant"
                            repeat: Infinity,
                            ease: "linear",
                        }
                    }}
                />
            </div>

            {/* Inner Background (Black) */}
            {/* Adjusted radius to 11px to match rounded-xl (12px) - 1px border. 
            "more elegant on corners" -> ensure this radius matches perfeclty.
        */}
            <div className="absolute inset-[1.5px] z-10 rounded-[10.5px] bg-black transition-colors duration-300 group-hover:bg-zinc-900" />

            {/* Content */}
            <div className="relative z-20 flex items-center gap-2">
                {children}
            </div>
        </button>
    );
}
