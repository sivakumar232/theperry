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
        <section id="about" className="py-16 md:py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-satoshi text-beige mb-3">
                        The Story Behind{" "}
                        <span className="text-beige/70 italic font-normal">ThePerry</span>
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                    {/* Photo Side */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="relative aspect-square max-w-sm mx-auto">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-beige/20 to-transparent rounded-xl -rotate-3" />

                            {/* Photo container */}
                            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 h-full flex items-center justify-center">
                                {/* Replace with actual photo */}
                                <div className="text-center p-6">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-beige/30 to-white/10 flex items-center justify-center mb-3">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-beige/60">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <p className="text-beige/40 font-satoshi text-xs">
                                        Add your photo here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            <p className="text-base md:text-lg font-satoshi text-beige leading-relaxed">
                                Hi, I&apos;m the founder of ThePerry.
                            </p>

                            <p className="text-sm text-beige/60 font-satoshi leading-relaxed">
                                After years of working in the tech industry, I noticed something that
                                frustrated me: small businesses and startups were getting the short end
                                of the stick. They were stuck choosing between expensive agencies that
                                didn&apos;t care about their success, or cheap templates that made them
                                look like everyone else.
                            </p>

                            <p className="text-sm text-beige/60 font-satoshi leading-relaxed">
                                I started ThePerry to change that. We bring enterprise-level quality
                                to ambitious startups and growing businesses. No templates. No bloat.
                                Just premium, handcrafted work delivered fast.
                            </p>

                            <p className="text-sm text-beige/60 font-satoshi leading-relaxed">
                                We obsess over every pixel, every line of code, every conversion.
                                Because your success is our reputation.
                            </p>

                            {/* Signature */}
                            <div className="pt-2">
                                <p className="text-beige/70 font-satoshi italic text-base">
                                    — ThePerry Team
                                </p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-xs font-satoshi text-beige/40 uppercase tracking-widest mb-3">
                                Our Expertise
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 text-xs font-satoshi text-beige/60 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
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
