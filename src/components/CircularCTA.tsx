"use client";

import React from "react";
import { motion } from "motion/react";

export function CircularCTA() {
    return (
        <div className="fixed bottom-8 right-8 z-[9999] pointer-events-none">
            <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* Circular rotating text */}
                <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                    </defs>
                    <text className="text-[16px] font-satoshi font-bold fill-beige uppercase tracking-[0.3em]">
                        <textPath href="#circlePath" startOffset="0%">
                            LET&apos;S WORK • LET&apos;S WORK • LET&apos;S WORK •
                        </textPath>
                    </text>
                </svg>
            </motion.div>
        </div>
    );
}
