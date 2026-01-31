"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Typically, a fully custom website takes 3-4 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
        question: "What technologies do you use?",
        answer: "We use modern, industry-leading technologies including Next.js, React, TypeScript, and Tailwind CSS. Our tech stack ensures your site is fast, secure, and future-proof.",
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Absolutely! We offer support and maintenance packages. After launch, we're still here to help with updates, fixes, and improvements whenever you need them.",
    },
    {
        question: "What's included in your pricing?",
        answer: "Our pricing includes design, development, testing, deployment, and initial SEO optimization. We provide transparent quotes with no hidden fees—what you see is what you get.",
    },
    {
        question: "Can you help with existing websites?",
        answer: "Yes! We work on redesigns, performance optimization, and feature additions for existing sites. We'll audit your current setup and recommend the best path forward.",
    },
    {
        question: "How do we get started?",
        answer: "Simply reach out through our contact form or schedule a free consultation. We'll discuss your vision, goals, and budget to create a tailored plan for your project.",
    },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
    return (
        <motion.div
            className="border-b border-white/10 last:border-b-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <button
                className="w-full py-4 flex items-center justify-between text-left group"
                onClick={onClick}
            >
                <span className="text-base md:text-lg font-satoshi font-medium text-beige group-hover:text-beige/80 transition-colors duration-300">
                    {question}
                </span>
                <motion.div
                    className="flex-shrink-0 ml-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-beige/20 transition-colors duration-300"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-beige/70 group-hover:text-beige transition-colors duration-300"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-sm text-beige/50 font-satoshi leading-relaxed pr-10">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-24">
            <ContentContainer>
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-satoshi text-beige mb-3">
                            Frequently Asked <span className="text-beige/70 italic font-normal">Questions</span>
                        </h2>
                        <p className="text-base text-beige/50 font-satoshi max-w-xl mx-auto">
                            Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, reach out!
                        </p>
                    </motion.div>

                    {/* FAQ Items */}
                    <motion.div
                        className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-4 md:p-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </motion.div>
                </div>
            </ContentContainer>
        </section>
    );
}
