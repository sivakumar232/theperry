"use client";

import React from "react";
import { motion } from "motion/react";

export function PremiumQualitySVG({ className = "" }: { className?: string }) {
    return (
        <motion.svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            initial="initial"
            whileHover="hover"
            animate="animate"
        >
            {/* Background ambient glow */}
            <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="url(#ambientGlow)"
                variants={{
                    initial: { opacity: 0.3, scale: 0.9 },
                    hover: { opacity: 0.6, scale: 1.15 },
                    animate: {
                        opacity: [0.3, 0.4, 0.3],
                        scale: [0.9, 0.95, 0.9]
                    }
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Rotating outer ring with gradient */}
            <motion.circle
                cx="100"
                cy="100"
                r="75"
                stroke="url(#ringGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 12"
                variants={{
                    initial: { rotate: 0 },
                    animate: { rotate: 360 },
                    hover: { scale: 1.1 }
                }}
                transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.4, ease: "easeOut" }
                }}
                style={{ transformOrigin: "center" }}
            />

            {/* Secondary rotating ring (opposite direction) */}
            <motion.circle
                cx="100"
                cy="100"
                r="65"
                stroke="url(#ringGradient2)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 8"
                variants={{
                    initial: { rotate: 0 },
                    animate: { rotate: -360 },
                    hover: { scale: 1.05 }
                }}
                transition={{
                    rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.4, ease: "easeOut" }
                }}
                style={{ transformOrigin: "center" }}
            />

            {/* Main diamond shape with gradient fill */}
            <motion.g
                variants={{
                    initial: { scale: 1, rotate: 0 },
                    hover: { scale: 1.15, rotate: 5 },
                    animate: { y: [0, -3, 0] }
                }}
                transition={{
                    scale: { duration: 0.4, ease: "easeOut" },
                    rotate: { duration: 0.4, ease: "easeOut" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ transformOrigin: "center" }}
            >
                {/* Diamond body with vibrant gradient */}
                <motion.path
                    d="M100 30 L150 80 L100 170 L50 80 Z"
                    fill="url(#diamondGradient)"
                    stroke="url(#diamondStroke)"
                    strokeWidth="2"
                    variants={{
                        initial: { filter: "drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3))" },
                        hover: { filter: "drop-shadow(0 8px 25px rgba(139, 92, 246, 0.5))" }
                    }}
                />

                {/* Top left facet - lighter */}
                <motion.path
                    d="M100 30 L100 80 L50 80 Z"
                    fill="url(#facetLight)"
                    variants={{
                        initial: { opacity: 0.9 },
                        hover: { opacity: 1 }
                    }}
                />

                {/* Top right facet - medium */}
                <motion.path
                    d="M100 30 L150 80 L100 80 Z"
                    fill="url(#facetMedium)"
                    variants={{
                        initial: { opacity: 0.8 },
                        hover: { opacity: 1 }
                    }}
                />

                {/* Bottom right facet - darker */}
                <motion.path
                    d="M100 80 L150 80 L100 170 Z"
                    fill="url(#facetDark)"
                    variants={{
                        initial: { opacity: 0.7 },
                        hover: { opacity: 0.9 }
                    }}
                />

                {/* Bottom left facet - medium dark */}
                <motion.path
                    d="M100 80 L50 80 L100 170 Z"
                    fill="url(#facetMediumDark)"
                    variants={{
                        initial: { opacity: 0.75 },
                        hover: { opacity: 0.95 }
                    }}
                />

                {/* Center lines */}
                <motion.line
                    x1="100" y1="30" x2="100" y2="170"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                />
                <motion.line
                    x1="50" y1="80" x2="150" y2="80"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                />

                {/* Shine effect on diamond */}
                <motion.path
                    d="M100 30 L110 50 L100 80 L90 50 Z"
                    fill="rgba(255,255,255,0.6)"
                    variants={{
                        initial: { opacity: 0.4 },
                        hover: { opacity: 0.8 }
                    }}
                />
            </motion.g>

            {/* Animated sparkles with colors */}
            {[
                { x: 45, y: 50, color: "#EC4899", delay: 0, size: 1 },
                { x: 155, y: 55, color: "#8B5CF6", delay: 0.5, size: 1.2 },
                { x: 160, y: 110, color: "#06B6D4", delay: 1, size: 0.9 },
                { x: 40, y: 105, color: "#F59E0B", delay: 1.5, size: 1.1 },
                { x: 100, y: 15, color: "#10B981", delay: 2, size: 0.8 },
                { x: 100, y: 185, color: "#EC4899", delay: 2.5, size: 0.7 },
            ].map((sparkle, i) => (
                <motion.g
                    key={i}
                    transform={`translate(${sparkle.x}, ${sparkle.y}) scale(${sparkle.size})`}
                    variants={{
                        initial: { scale: 0, opacity: 0 },
                        hover: { scale: 1.5, opacity: 1 }
                    }}
                >
                    <motion.path
                        d="M0 -8 L0 8 M-8 0 L8 0"
                        stroke={sparkle.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        variants={{
                            animate: {
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                rotate: [0, 180, 360]
                            }
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: sparkle.delay,
                            ease: "easeInOut"
                        }}
                    />
                    {/* Sparkle glow */}
                    <motion.circle
                        cx="0"
                        cy="0"
                        r="4"
                        fill={sparkle.color}
                        variants={{
                            animate: {
                                scale: [0, 1.5, 0],
                                opacity: [0, 0.5, 0]
                            }
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: sparkle.delay,
                            ease: "easeInOut"
                        }}
                    />
                </motion.g>
            ))}

            {/* Orbiting particles */}
            {[0, 1, 2].map((i) => (
                <motion.circle
                    key={`orbit-${i}`}
                    cx="100"
                    cy="25"
                    r="4"
                    fill={["#EC4899", "#8B5CF6", "#06B6D4"][i]}
                    variants={{
                        animate: {
                            rotate: 360
                        },
                        hover: { scale: 1.5 }
                    }}
                    style={{
                        transformOrigin: "100px 100px"
                    }}
                    transition={{
                        rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2.67
                        },
                        scale: { duration: 0.3 }
                    }}
                />
            ))}

            {/* Gradient definitions */}
            <defs>
                {/* Ambient glow - purple/pink */}
                <radialGradient id="ambientGlow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#EC4899" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </radialGradient>

                {/* Ring gradient */}
                <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                </linearGradient>

                {/* Secondary ring gradient */}
                <linearGradient id="ringGradient2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
                </linearGradient>

                {/* Diamond main gradient */}
                <linearGradient id="diamondGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>

                {/* Diamond stroke gradient */}
                <linearGradient id="diamondStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F0ABFC" />
                    <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>

                {/* Facet gradients */}
                <linearGradient id="facetLight" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.7" />
                </linearGradient>

                <linearGradient id="facetMedium" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6" />
                </linearGradient>

                <linearGradient id="facetDark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.5" />
                </linearGradient>

                <linearGradient id="facetMediumDark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.55" />
                </linearGradient>
            </defs>
        </motion.svg>
    );
}
