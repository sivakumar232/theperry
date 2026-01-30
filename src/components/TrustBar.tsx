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
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <section id="trust" className="py-6 border-y border-white/10 bg-white/[0.02] overflow-hidden">
            <div className="flex items-center">
                {/* Label */}
                <div className="flex-shrink-0 pl-6 pr-6">
                    <span className="text-xs font-satoshi text-beige/40 uppercase tracking-widest">
                        Built with
                    </span>
                </div>

                {/* Scrolling logos */}
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        className="flex gap-10"
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
                                    className="flex items-center gap-1.5 flex-shrink-0 group cursor-default"
                                >
                                    <Icon
                                        className="w-3.5 h-3.5 text-beige/30 group-hover:text-beige/60 transition-colors"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-xs font-satoshi text-beige/30 group-hover:text-beige/60 transition-colors whitespace-nowrap">
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
