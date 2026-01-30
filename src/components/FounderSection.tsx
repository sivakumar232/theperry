"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
    "UI/UX Design",
    "SEO",
    "Performance Optimization",
];

export function FounderSection() {
    return (
        <section id="about" className="py-20 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-beige mb-4">
                        The Story Behind{" "}
                        <span className="text-beige/70 italic font-normal">ThePerry</span>
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Photo Side */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-beige/20 to-transparent rounded-2xl -rotate-3" />

                            {/* Photo container */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-full flex items-center justify-center">
                                {/* Placeholder - replace with actual photo */}
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-beige/30 to-white/10 flex items-center justify-center mb-4">
                                        <span className="text-5xl">👋</span>
                                    </div>
                                    <p className="text-beige/50 font-satoshi text-sm">
                                        Add your photo here
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl font-satoshi text-beige leading-relaxed">
                                Hi, I&apos;m the founder of ThePerry.
                            </p>

                            <p className="text-beige/70 font-satoshi leading-relaxed">
                                After years of working in the tech industry, I noticed something that
                                frustrated me: small businesses and startups were getting the short end
                                of the stick. They were stuck choosing between expensive agencies that
                                didn&apos;t care about their success, or cheap templates that made them
                                look like everyone else.
                            </p>

                            <p className="text-beige/70 font-satoshi leading-relaxed">
                                I started ThePerry to change that. We bring enterprise-level quality
                                to ambitious startups and growing businesses. No templates. No bloat.
                                Just premium, handcrafted work delivered fast.
                            </p>

                            <p className="text-beige/70 font-satoshi leading-relaxed">
                                We obsess over every pixel, every line of code, every conversion.
                                Because your success is our reputation.
                            </p>

                            {/* Signature */}
                            <div className="pt-4">
                                <p className="text-beige/80 font-satoshi italic text-lg">
                                    — ThePerry Team
                                </p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-10 pt-8 border-t border-white/10">
                            <p className="text-sm font-satoshi text-beige/50 uppercase tracking-widest mb-4">
                                Our Expertise
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-satoshi text-beige/70 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
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
