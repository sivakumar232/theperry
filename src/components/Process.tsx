"use client";

import React from "react";
import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Discovery & Audit",
        description: "We dive deep into your business goals, current presence, and competitor landscape to find your winning edge.",
        tags: ["Research", "Analysis", "Goals"],
    },
    {
        number: "02",
        title: "Strategic Roadmap",
        description: "A clear, actionable plan that outlines every milestone from concept to conversion-ready product.",
        tags: ["Planning", "UI/UX Flow", "Sitemap"],
    },
    {
        number: "03",
        title: "Premium Design",
        description: "Visual identity and user interfaces crafted to wow your audience and reflect your brand's excellence.",
        tags: ["Visuals", "Interactions", "Identity"],
    },
    {
        number: "04",
        title: "High-End Build",
        description: "Development with high-performance code, ensuring your site is fast, secure, and scalable for growth.",
        tags: ["Next.js", "Motion", "Performance"],
    },
    {
        number: "05",
        title: "Launch & Growth",
        description: "We deploy with confidence and stick around to optimize, ensuring you scale effortlessly beyond launch.",
        tags: ["SEO", "Analytics", "Optimization"],
    },
];

export function Process() {
    return (
        <section id="process" className="py-20 md:py-32 px-6 bg-white/2 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="mb-16 md:mb-24"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-satoshi text-beige mb-6">
                        From Concept to <br />
                        <span className="text-green-300 italic font-normal">Conversion-Ready</span>
                    </h2>
                    <p className="text-lg text-beige/60 font-satoshi max-w-xl">
                        Our workflow is designed for speed, quality, and results. Here is how we get you to the finish line.
                    </p>
                </motion.div>

                {/* Steps List */}
                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-white/10 z-0">
                                    <motion.div
                                        className="h-full bg-green-300/50"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    />
                                </div>
                            )}

                            <div className="relative z-10">
                                {/* Number */}
                                <div className="text-5xl md:text-6xl font-satoshi font-bold text-white/5 group-hover:text-green-300/10 transition-colors duration-500 mb-4">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold font-satoshi text-beige mb-3 group-hover:text-green-300 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-beige/50 font-satoshi leading-relaxed mb-4">
                                    {step.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {step.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest text-green-300/50 px-2 py-1 rounded bg-green-300/5 border border-green-300/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
