"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Typically, a fully custom website takes 4-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
        question: "What technologies do you use?",
        answer: "We use modern, industry-leading technologies including Next.js, React, TypeScript, and Tailwind CSS. Our tech stack ensures your site is fast, secure, and future-proof.",
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Absolutely! We offer 24/7 support and maintenance packages. After launch, we're still here to help with updates, fixes, and improvements whenever you need them.",
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={onClick}
            >
                <span className="text-lg md:text-xl font-satoshi font-medium text-beige group-hover:text-green-300 transition-colors duration-300">
                    {question}
                </span>
                <motion.div
                    className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-300/20 transition-colors duration-300"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-beige group-hover:text-green-300 transition-colors duration-300"
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-beige/60 font-satoshi leading-relaxed pr-12">
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
        <section id="faq" className="py-20 md:py-32 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-beige mb-4">
                        Frequently Asked <span className="text-green-300 italic font-normal">Questions</span>
                    </h2>
                    <p className="text-lg text-beige/60 font-satoshi max-w-2xl mx-auto">
                        Got questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, reach out!
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-2 md:p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
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
        </section>
    );
}
