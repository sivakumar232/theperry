"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SketchyLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function SketchyLink({
    href,
    children,
    className = "",
}: SketchyLinkProps) {
    const [isHovered, setIsHovered] = useState(false);

    /**
     * Generate tiny randomness per hover
     * - slight vertical offset
     * - slight rotation
     */
    const variation = useMemo(() => {
        return {
            yOffset: (Math.random() - 0.5) * 0.8, // ±0.4px
            rotate: (Math.random() - 0.5) * 2,   // ±1deg
        };
    }, [isHovered]);

    // Smooth, readable center-crossing curve
    const sketchyPath =
        "M0 8 \
     C15 7.6, 30 8.4, 45 8 \
     C60 7.4, 75 8.6, 90 8 \
     C95 8.2, 100 8, 100 8";

    return (
        <Link
            href={href}
            className={`relative inline-block z-20 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative z-40">{children}</span>

            <svg
                className="absolute left-0 z-60 top-1/2 w-full h-6 -translate-y-1/2 pointer-events-none"
                viewBox="0 0 100 16"
                preserveAspectRatio="none"
            >
                <motion.path
                    d={sketchyPath}
                    fill="none"
                    stroke="red"
                    strokeWidth="1.5"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    initial={{
                        pathLength: 0,
                        opacity: 0,
                    }}
                    animate={
                        isHovered
                            ? {
                                pathLength: [0, 1], // ⬅️ forward → back → forward
                                opacity: 1,
                                y: variation.yOffset,
                                rotate: variation.rotate,
                            }
                            : {
                                pathLength: 0,
                                opacity: 0,
                            }
                    }
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformOrigin: "50% 50%",
                    }}
                />
            </svg>
        </Link>
    );
}
