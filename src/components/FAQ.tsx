"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";
import { Plus, Minus } from "lucide-react";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";

const faqs = [
    {
        id: 1,
        question: " What kind of clients do you usually work with?",
        answer: "Founders, growing startups, and businesses focused on building stable, long-term digital products — not short-term fixes.",
        badge: "Popular",
    },
    {
        id: 2,
        question: "Can you work with an existing website?",
        answer: "Yes. We review your current setup, identify gaps or performance issues, and improve, rebuild, or extend it based on what makes the most practical sense.",
        badge: "Popular",
    },
    {
        id: 3,
        question: "Can I request custom features or changes later?",
        answer: "Yes. We can implement new features, updates, or changes as your needs evolve — even after delivery. The product grows with you.",
        badge: "Popular",
    },
    {
        id: 4,
        question: "What kind of timeline should I expect?",
        answer: "Each project differs, but we define clear timelines early and maintain steady, visible progress from start to finish.",
        badge: "Timeline",
    },
    {
        id: 5,
        question: "How will we communicate during the project?",
        answer: "We adapt to your preferred platform — WhatsApp, Teams, Discord, email, or scheduled calls — and stay responsive throughout working hours.",
        badge: "Getting Started",
    },
    {
        id: 6,
        question: "How is pricing structured?",
        answer: "We don’t sell fixed packages. Pricing is tailored to your goals and requirements, discussed clearly before any work begins.",
        badge: "Pricing",
    },
];

const AccordionItem = React.memo(function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-fit">
            <div
                className={`group rounded-2xl border transition-colors duration-200 overflow-hidden
                ${isOpen
                        ? "bg-zinc-900/80 border-white/20"
                        : "bg-zinc-900/40 border-white/10 hover:border-white/20 hover:bg-zinc-900/60"
                    }`}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 md:p-7 text-left outline-none cursor-pointer"
                >
                    <span className="text-lg md:text-xl font-satoshi font-medium text-white group-hover:text-neutral-100 transition-colors pr-8">
                        {faq.question}
                    </span>
                    <div
                        className={`flex-shrink-0 p-0.5 rounded-full bg-white text-black transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                        {isOpen ? (
                            <Minus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        ) : (
                            <Plus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        )}
                    </div>
                </button>

                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut"
                    }}
                    className="overflow-hidden"
                >
                    <div className="px-6 md:px-7 pb-6 md:pb-7">
                        <p className="text-base md:text-lg text-neutral-400 font-satoshi leading-relaxed max-w-3xl">
                            {faq.answer}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

export function FAQ() {
    return (
        <section id="faq" className="py-24 md:py-32 relative overflow-hidden bg-black">
            <ContentContainer>
                <div className="max-w-6xl mx-auto relative px-4 md:px-0">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16 md:mb-20"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Option 1: Glassmorphic with glowing dot (Current) */}

                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
                            <span className="text-[11px] font-semibold font-satoshi text-neutral-300 uppercase tracking-[0.2em] leading-none mt-[1px]">FAQs</span>
                        </div>
                        <CinematicBlurReveal
                            text="Your Questions, Answered"
                            className="text-3xl md:text-6xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                        />
                        <p className="text-md text-neutral-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                            Helping you understand our process and offerings at theperry.
                        </p>
                    </motion.div>

                    {/* Accordion Container (Masonry Layout) */}
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        {/* Column 1 */}
                        <div className="flex-1 w-full space-y-4">
                            {faqs.filter((_, i) => i % 2 === 0).map((faq, i) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
                                >
                                    <AccordionItem faq={faq} index={i * 2} />
                                </motion.div>
                            ))}
                        </div>
                        {/* Column 2 */}
                        <div className="flex-1 w-full space-y-4">
                            {faqs.filter((_, i) => i % 2 !== 0).map((faq, i) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 + 0.04 }}
                                >
                                    <AccordionItem faq={faq} index={i * 2 + 1} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Footer */}

                </div>
            </ContentContainer>
        </section >
    );
}
