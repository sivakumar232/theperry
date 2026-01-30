"use client";

import React from "react";
import { motion } from "motion/react";
import { MagneticButton } from "./ui/magnetic-button";

export function FinalCTA() {
    return (
        <section className="py-16 md:py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-beige/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi text-beige mb-4 leading-tight">
                        Ready to Build{" "}
                        <span className="text-beige/70 italic font-normal">Something Amazing?</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-base md:text-lg text-beige/50 font-satoshi max-w-xl mx-auto mb-8 leading-relaxed">
                        Let&apos;s discuss your project. No pressure, no obligation.
                        Just a friendly conversation about your goals and how we can help.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                        <MagneticButton>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-beige text-background font-satoshi font-semibold text-sm rounded-full hover:bg-beige/90 transition-colors group"
                            >
                                Book Your Free Strategy Call
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="group-hover:translate-x-0.5 transition-transform"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </MagneticButton>

                        <span className="text-beige/30 font-satoshi text-sm">or</span>

                        <a
                            href="mailto:hello@theperry.com"
                            className="text-beige/60 font-satoshi text-sm hover:text-beige transition-colors underline underline-offset-4"
                        >
                            hello@theperry.com
                        </a>
                    </div>

                    {/* Social Proof */}
                    <p className="text-xs text-beige/40 font-satoshi">
                        Response within 24 hours • Free consultation • No commitment required
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
