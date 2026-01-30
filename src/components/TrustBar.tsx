"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Code2,
    Triangle,
    FileCode,
    Palette,
    Figma,
    Zap,
    Sparkles,
    Server
} from "lucide-react";

const technologies = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Triangle },
    { name: "TypeScript", icon: FileCode },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Figma", icon: Figma },
    { name: "Vercel", icon: Zap },
    { name: "Framer Motion", icon: Sparkles },
    { name: "Node.js", icon: Server },
];

export function TrustBar() {
    // Duplicate for infinite scroll effect
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <section className="py-8 border-y border-white/10 bg-white/[0.02] overflow-hidden">
            <div className="flex items-center">
                {/* Label */}
                <div className="flex-shrink-0 pl-6 pr-8">
                    <span className="text-sm font-satoshi text-beige/50 uppercase tracking-widest">
                        Built with
                    </span>
                </div>

                {/* Scrolling logos */}
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        className="flex gap-12"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedTech.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex items-center gap-2 flex-shrink-0 group cursor-default"
                                >
                                    <Icon
                                        className="w-4 h-4 text-beige/40 group-hover:text-green-300 transition-colors"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-sm font-satoshi text-beige/40 group-hover:text-green-300 transition-colors whitespace-nowrap">
                                        {tech.name}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
