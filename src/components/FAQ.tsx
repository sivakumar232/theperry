"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";

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

function ThreadCard({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showTyping, setShowTyping] = useState(false);
    const [isHelpful, setIsHelpful] = useState(false);

    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true);
            setShowTyping(true);
            setTimeout(() => setShowTyping(false), 800);
        } else {
            setIsOpen(false);
            setShowTyping(false);
        }
    };

    return (
        <motion.div
            className="relative border-b border-border last:border-b-0 py-4 md:py-5 px-4 md:px-5 hover:bg-bg-surface transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
        >
            {/* Question Post */}
            <div className="flex gap-4 md:gap-5">
                {/* User Avatar */}
                <div className="flex-shrink-0">
                    <motion.div
                        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-bg-surface border border-border flex items-center justify-center"
                        whileHover={{ scale: 1.05, borderColor: "var(--accent-tertiary)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </motion.div>
                </div>

                {/* Question Content */}
                <div className="flex-1 min-w-0 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-satoshi font-semibold text-gray-300">Client</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs font-satoshi text-gray-400">asking</span>
                        {faq.badge && (
                            <>
                                <span className="text-xs text-text-tertiary">•</span>
                                <motion.span
                                    className="px-2 py-0.5 text-[10px] font-satoshi font-medium bg-bg-surface text-text-primary rounded-full border border-border shadow-sm"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                                >
                                    {faq.badge}
                                </motion.span>
                            </>
                        )}
                    </div>
                    <p className="text-sm md:text-base font-satoshi text-white leading-relaxed mb-3">
                        {faq.question}
                    </p>

                    {/* View Reply Button */}
                    <motion.button
                        onClick={handleClick}
                        className="flex items-center gap-2 text-xs font-satoshi text-text-tertiary hover:text-text-primary transition-colors group"
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </motion.svg>
                        <span className="group-hover:underline underline-offset-2">
                            {isOpen ? "Hide reply" : "View reply"}
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* Connecting Line - Thread line */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute left-5 md:left-[22px] top-14 w-px border-l-2 border-dashed border-border"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "calc(100% - 3.5rem)", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Answer Reply */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        className="flex gap-4 md:gap-5 ml-8 md:ml-12 mt-4 relative"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                    >
                        {/* Reply Indicator - horizontal dashed line */}
                        <motion.div
                            className="absolute -left-8 md:-left-12 top-5 w-6 md:w-10 h-px border-t-2 border-dashed border-border"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "2.5rem", opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                        />

                        {/* Brand Avatar */}
                        <div className="flex-shrink-0">
                            <motion.div
                                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent-primary border border-accent-primary flex items-center justify-center shadow-lg"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: 0.1
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-[8px] md:text-[9px] font-satoshi font-bold text-bg-primary">
                                    theperry
                                </span>
                            </motion.div>
                        </div>

                        {/* Answer Content */}
                        <div className="flex-1 min-w-0">
                            <motion.div
                                className="flex items-center gap-2 mb-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-xs font-satoshi font-bold text-white">theperry</span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs font-satoshi text-gray-400">replied</span>
                            </motion.div>

                            {/* Typing Indicator */}
                            <AnimatePresence mode="wait">
                                {showTyping ? (
                                    <motion.div
                                        className="bg-bg-surface border border-border rounded-2xl rounded-tl-sm px-5 py-3 inline-flex items-center gap-1.5"
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        {[0, 0.15, 0.3].map((delay, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-2 h-2 rounded-full bg-text-tertiary"
                                                animate={{
                                                    y: [0, -8, 0],
                                                    opacity: [0.5, 1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    repeat: Infinity,
                                                    delay,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        className="bg-gray-800 border border-gray-600 rounded-2xl rounded-tl-sm p-4 md:p-5 hover:border-gray-500 transition-all duration-300 shadow-lg"
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 20
                                        }}
                                    >
                                        <motion.p
                                            className="text-sm md:text-base font-satoshi text-white leading-relaxed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1, duration: 0.4 }}
                                        >
                                            {faq.answer}
                                        </motion.p>

                                        {/* Helpful Button */}
                                        <motion.div
                                            className="flex items-center gap-4 mt-4 pt-4 border-t border-border"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <motion.button
                                                onClick={() => setIsHelpful(!isHelpful)}
                                                className="flex items-center gap-1.5 text-xs font-satoshi group"
                                                whileHover={{ scale: 1.05, x: 2 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                animate={{
                                                    color: isHelpful ? "var(--accent-primary)" : "var(--text-tertiary)"
                                                }}
                                            >
                                                <motion.svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    animate={{
                                                        fill: isHelpful ? "var(--accent-primary)" : "none",
                                                        rotate: isHelpful ? [0, -10, 10, -10, 0] : 0
                                                    }}
                                                    transition={{
                                                        fill: { duration: 0.3 },
                                                        rotate: { duration: 0.5 }
                                                    }}
                                                >
                                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                                </motion.svg>
                                                <span>{isHelpful ? "Helpful!" : "Helpful?"}</span>
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ() {
    return (
        <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-black">
            <ContentContainer>
                <div className="max-w-2xl mx-auto relative">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold font-satoshi text-white mb-3">
                            Frequently Asked <span className="text-gray-300 italic font-normal">Questions</span>
                        </h2>
                        <p className="text-base text-gray-400 font-satoshi max-w-xl mx-auto">
                            Click any question to see our answer
                        </p>
                    </motion.div>

                    {/* Enhanced Thread-Style Container - Option 1 */}
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg">
                        {faqs.map((faq, index) => (
                            <ThreadCard key={faq.id} faq={faq} index={index} />
                        ))}
                    </div>

                    {/* CTA Footer */}
                    <div className="mt-12 text-center p-6 bg-gray-900 border border-gray-700 rounded-2xl shadow-sm">
                        <p className="text-sm text-gray-300 font-satoshi mb-4">
                            Still have questions? We're here to help.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-satoshi font-semibold text-sm rounded-full hover:bg-gray-200 transition-all shadow-lg hover:scale-105"
                        >
                            Start a Conversation
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </ContentContainer>
        </section >
    );
}
