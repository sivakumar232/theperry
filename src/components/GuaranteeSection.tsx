"use client";

import React from "react";
import { motion } from "motion/react";

export function GuaranteeSection() {
    return (
        <section className="py-12 md:py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    className="relative rounded-xl p-6 md:p-10 bg-gradient-to-br from-white/10 via-transparent to-transparent border border-white/20 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background decoration */}
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-beige/10 rounded-full blur-[80px]" />

                    <div className="relative z-10 text-center">
                        {/* Shield Icon */}
                        <motion.div
                            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-beige/20 mb-4"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
                        >
                            <svg
                                width="28"
                                height="28"
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
                        <h2 className="text-2xl md:text-3xl font-bold font-satoshi text-beige mb-3">
                            Our <span className="text-beige/80">100% Money-Back</span> Guarantee
                        </h2>

                        {/* Description */}
                        <p className="text-base text-beige/60 font-satoshi max-w-xl mx-auto mb-4 leading-relaxed">
                            If you&apos;re not completely satisfied with the first design draft,
                            we&apos;ll refund your deposit. No questions asked.
                        </p>

                        <p className="text-sm text-beige/40 font-satoshi">
                            Why? Because we&apos;re confident in our work. And we&apos;d rather lose
                            money than disappoint you.
                        </p>

                        {/* Divider */}
                        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-beige/40 to-transparent my-6" />

                        {/* Trust Points */}
                        <div className="flex flex-wrap justify-center gap-4 text-xs font-satoshi text-beige/50">
                            <span className="flex items-center gap-1.5">
                                <span className="text-beige/60">✓</span>
                                Risk-free first project
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-beige/60">✓</span>
                                Unlimited revisions
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-beige/60">✓</span>
                                Your satisfaction, guaranteed
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
