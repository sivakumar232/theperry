"use client";

import { motion } from "framer-motion";

export const AnimatedEyeIcon = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 text-white"
        >
            {/* Eye outline - outer ellipse */}
            <motion.path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Pupil - inner circle */}
            <motion.circle
                cx="12"
                cy="12"
                r="3"
                fill="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
            />

            {/* Upper eyelid - creates blinking effect */}
            <motion.path
                d="M1 12s4-8 11-8 11 8 11 8"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ scaleY: 0, transformOrigin: "center" }}
                animate={{
                    scaleY: [0, 0, 1, 1, 0, 0],
                    y: [0, 0, 0, 0, 0, 0]
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.45, 0.5, 0.55, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                }}
            />

            {/* Lower eyelid - subtle movement */}
            <motion.path
                d="M1 12s4 8 11 8 11-8 11-8"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ scaleY: 0, transformOrigin: "center" }}
                animate={{
                    scaleY: [0, 0, 0.3, 0.3, 0, 0],
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.45, 0.5, 0.55, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                }}
            />
        </svg>
    );
};
