"use client";

import React from "react";
import { motion } from "motion/react";

export function GuaranteeSection() {
    return (
        <section className="py-16 md:py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-white/10 via-transparent to-transparent border border-white/20 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background decoration */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-beige/10 rounded-full blur-[100px]" />

                    <div className="relative z-10 text-center">
                        {/* Shield Icon */}
                        <motion.div
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-beige/20 mb-6"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-beige"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                        </motion.div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi text-beige mb-4">
                            Our <span className="text-beige">100% Money-Back</span> Guarantee
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-beige/70 font-satoshi max-w-2xl mx-auto mb-6 leading-relaxed">
                            If you&apos;re not completely satisfied with the first design draft,
                            we&apos;ll refund your deposit. No questions asked.
                        </p>

                        <p className="text-beige/50 font-satoshi">
                            Why? Because we&apos;re confident in our work. And we&apos;d rather lose
                            money than disappoint you.
                        </p>

                        {/* Divider */}
                        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-beige/50 to-transparent my-8" />

                        {/* Trust Points */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-satoshi text-beige/60">
                            <span className="flex items-center gap-2">
                                <span className="text-beige/70">✓</span>
                                Risk-free first project
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-beige/70">✓</span>
                                Unlimited revisions
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-beige/70">✓</span>
                                Your satisfaction, guaranteed
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
