"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "How long does it take to build a website?",
        answer: "Typically, a fully custom website takes 3-4 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
        badge: "Popular",
    },
    {
        id: 2,
        question: "What technologies do you use?",
        answer: "We use modern, industry-leading technologies including Next.js, React, TypeScript, and Tailwind CSS. Our tech stack ensures your site is fast, secure, and future-proof.",
        badge: "Technical",
    },
    {
        id: 3,
        question: "Do you provide ongoing support?",
        answer: "Absolutely! We offer support and maintenance packages. After launch, we're still here to help with updates, fixes, and improvements whenever you need them.",
        badge: "Popular",
    },
    {
        id: 4,
        question: "What's included in your pricing?",
        answer: "Our pricing includes design, development, testing, deployment, and initial SEO optimization. We provide transparent quotes with no hidden fees—what you see is what you get.",
        badge: "Pricing",
    },
    {
        id: 5,
        question: "Can you help with existing websites?",
        answer: "Yes! We work on redesigns, performance optimization, and feature additions for existing sites. We'll audit your current setup and recommend the best path forward.",
        badge: null,
    },
    {
        id: 6,
        question: "How do we get started?",
        answer: "Simply reach out through our contact form or schedule a free consultation. We'll discuss your vision, goals, and budget to create a tailored plan for your project.",
        badge: "Getting Started",
    },
];

function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="h-fit"
        >
            <div
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden
                ${isOpen
                        ? "bg-zinc-900/80 border-white/20 shadow-lg shadow-black/20"
                        : "bg-zinc-900/40 border-white/10 hover:border-white/20 hover:bg-zinc-900/60"
                    }`}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 md:p-7 text-left outline-none cursor-pointer"
                >
                    <span className="text-lg md:text-xl font-satoshi font-medium text-white group-hover:text-gray-100 transition-colors pr-8">
                        {faq.question}
                    </span>
                    <div
                        className="flex-shrink-0 p-1.5 rounded-full bg-white text-black"
                    >
                        {isOpen ? (
                            <Minus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        ) : (
                            <Plus className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        )}
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-6 md:px-7 pb-6 md:pb-7">
                                <p className="text-base md:text-lg text-gray-400 font-satoshi leading-relaxed max-w-3xl">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

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
                        <span className="block text-sm font-medium font-satoshi text-gray-500 mb-3">(FAQs)</span>
                        <h2 className="text-3xl md:text-6xl font-bold font-satoshi text-white mb-4 md:mb-6">
                            Your Questions, Answered
                        </h2>
                        <p className="text-md text-gray-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                            Helping you understand our process and offerings at Agero.
                        </p>
                    </motion.div>

                    {/* Accordion Container (Masonry Layout) */}
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        {/* Column 1 */}
                        <div className="flex-1 w-full space-y-4">
                            {faqs.filter((_, i) => i % 2 === 0).map((faq, i) => (
                                <AccordionItem key={faq.id} faq={faq} index={i * 2} />
                            ))}
                        </div>
                        {/* Column 2 */}
                        <div className="flex-1 w-full space-y-4">
                            {faqs.filter((_, i) => i % 2 !== 0).map((faq, i) => (
                                <AccordionItem key={faq.id} faq={faq} index={i * 2 + 1} />
                            ))}
                        </div>
                    </div>

                    {/* CTA Footer */}

                </div>
            </ContentContainer>
        </section >
    );
}
