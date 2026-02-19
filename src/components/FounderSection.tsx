"use client";

import React from "react";
import { motion } from "motion/react";

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
    "UI/UX Design",
    "SEO",
    "Performance",
];

export function FounderSection() {
    return (
        <section id="about" className="py-16 md:py-24 px-6 bg-black relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-white mb-3">
                        theperry
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                    {/* Photo Side */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <div className="relative aspect-square max-w-sm mx-auto">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-bg-surface to-transparent rounded-xl -rotate-3" />

                            {/* Photo container */}
                            <div className="relative rounded-xl overflow-hidden border border-border bg-bg-secondary h-full flex items-center justify-center">
                                {/* Replace with actual photo */}
                                <div className="text-center p-6">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-bg-surface to-bg-secondary flex items-center justify-center mb-3 border border-border">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-tertiary">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <p className="text-text-tertiary font-satoshi text-xs">
                                        Add your photo here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            <p className="text-base md:text-lg font-satoshi text-white leading-relaxed">
                                Hi, I&apos;m the founder of ThePerry.
                            </p>

                            <p className="text-sm text-neutral-300 font-satoshi leading-relaxed">
                                After years of working in the tech industry, I noticed something that
                                frustrated me: small businesses and startups were getting the short end
                                of the stick. They were stuck choosing between expensive agencies that
                                didn&apos;t care about their success, or cheap templates that made them
                                look like everyone else.
                            </p>

                            <p className="text-sm text-neutral-300 font-satoshi leading-relaxed">
                                I started ThePerry to change that. We bring enterprise-level quality
                                to ambitious startups and growing businesses. No templates. No bloat.
                                Just premium, handcrafted work delivered fast.
                            </p>

                            <p className="text-sm text-neutral-300 font-satoshi leading-relaxed">
                                We obsess over every pixel, every line of code, every conversion.
                                Because your success is our reputation.
                            </p>

                            {/* Signature */}
                            <div className="pt-2">
                                <p className="text-neutral-300 font-satoshi italic text-base">
                                    — ThePerry Team
                                </p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-8 pt-6 border-t border-neutral-700">
                            <p className="text-xs font-satoshi text-neutral-400 uppercase tracking-widest mb-3">
                                Our Expertise
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 text-xs font-satoshi text-neutral-300 bg-neutral-800 border border-neutral-600 rounded-full hover:bg-neutral-700 hover:border-neutral-500 transition-colors cursor-default shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
