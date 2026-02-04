"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { MagneticButton } from "./ui/magnetic-button";
import { ScrollRevealWord } from "./ui/scroll-reveal-word";
import { ContentContainer } from "./ui/ContentContainer";

export function FinalCTA() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden bg-black">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px]" />
            </div>

            <ContentContainer>
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="text-center">
                        {/* Headline with word-by-word scroll trigger */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi mb-4 leading-tight">
                            <ScrollRevealWord
                                text="Ready to Build "
                                scrollProgress={scrollYProgress}
                                startOffset={0.2}
                                endOffset={0.35}
                                className="text-white"
                            />
                            <ScrollRevealWord
                                text="Something Amazing?"
                                scrollProgress={scrollYProgress}
                                startOffset={0.32}
                                endOffset={0.5}
                                className="text-gray-300 italic font-normal"
                            />
                        </h2>

                        {/* Subheadline with word-by-word scroll trigger */}
                        <p className="text-base md:text-lg font-satoshi max-w-xl mx-auto mb-8 leading-relaxed">
                            <ScrollRevealWord
                                text="Let's discuss your project. No pressure, no obligation. Just a friendly conversation about your goals and how we can help."
                                scrollProgress={scrollYProgress}
                                startOffset={0.4}
                                endOffset={0.65}
                                className="text-gray-300"
                            />
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <MagneticButton>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-bg-primary font-satoshi font-semibold text-sm rounded-full hover:bg-accent-secondary transition-colors group"
                                >
                                    Book Your Free Call
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

                            <span className="text-gray-400 font-satoshi text-sm">or</span>

                            <a
                                href="mailto:hello@theperry.com"
                                className="text-gray-300 font-satoshi text-sm hover:text-white transition-colors underline underline-offset-4"
                            >
                                hello@theperry.com
                            </a>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.p
                            className="text-xs text-gray-400 font-satoshi"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Response within 24 hours • Free consultation • No commitment required
                        </motion.p>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}
