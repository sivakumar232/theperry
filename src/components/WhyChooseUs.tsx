"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

const cards = [
    {
        id: 1,
        problem: {
            title: "Months of Waiting",
            description: "Most agencies take 4-6 months. That's half a year of lost leads, zero traffic, and competitors capturing your market share.",
        },
        solution: {
            title: "3-Week Launch",
            description: "Launch-ready in 21 days. Start capturing revenue while others are still in planning. Fast-mover advantage is yours.",
        },
    },
    {
        id: 2,
        problem: {
            title: "Template Hell",
            description: "95% of agencies use WordPress templates. You and your competitors look identical. No differentiation, no pricing power.",
        },
        solution: {
            title: "100% Custom Design",
            description: "Every pixel crafted for your brand. Stand out instantly and command premium prices with strategic positioning.",
        },
    },
    {
        id: 3,
        problem: {
            title: "Slow Performance",
            description: "Slow sites rank lower, bounce higher, and convert at a fraction of the rate. You're invisible on page 3.",
        },
        solution: {
            title: "Lightning Fast",
            description: "Under 2 second loads. 90+ PageSpeed scores. Performance-first architecture that ranks higher and converts better.",
        },
    },
    {
        id: 4,
        problem: {
            title: "Pretty But Broke",
            description: "Designers make things beautiful but don't understand funnels. High traffic, low revenue, wasted marketing spend.",
        },
        solution: {
            title: "Conversion-First",
            description: "Every element designed to drive action. Turn browsers into buyers at 3-5x industry average conversion rates.",
        },
    },
    {
        id: 5,
        problem: {
            title: "Zero Organic Traffic",
            description: "Sites built first, SEO added later. Launch to crickets and spend months fixing it. 100% reliant on paid ads.",
        },
        solution: {
            title: "SEO-First Architecture",
            description: "Optimized from day one. Launch ready to rank and capture organic traffic immediately. Own your audience.",
        },
    },
    {
        id: 6,
        problem: {
            title: "Black Box Development",
            description: "Pay upfront, hear nothing for weeks. No idea what's happening or when you'll launch. Total uncertainty.",
        },
        solution: {
            title: "Weekly Demos",
            description: "See progress every single week. Clear milestones. Direct founder access throughout. Total transparency.",
        },
    },
];

function Card({ item, index }: { item: typeof cards[0]; index: number }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            className="group relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ minHeight: "280px" }}
        >
            {/* Subtle gradient - same for both states */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Label */}
                <div className="mb-6">
                    <motion.span
                        className="inline-block text-xs font-satoshi font-medium uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border transition-all duration-300"
                        animate={{
                            backgroundColor: isHovered ? "rgba(134, 239, 172, 0.1)" : "rgba(255, 255, 255, 0.05)",
                            borderColor: isHovered ? "rgba(134, 239, 172, 0.3)" : "rgba(255, 255, 255, 0.1)",
                            color: isHovered ? "rgb(134, 239, 172)" : "rgba(245, 245, 220, 0.5)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {isHovered ? "Solution" : "Problem"}
                    </motion.span>
                </div>

                {/* Title with smooth crossfade */}
                <div className="relative mb-4 min-h-[72px]">
                    <AnimatePresence mode="wait">
                        <motion.h3
                            key={isHovered ? "solution" : "problem"}
                            className="text-2xl md:text-3xl font-bold font-satoshi text-beige leading-tight"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            {isHovered ? item.solution.title : item.problem.title}
                        </motion.h3>
                    </AnimatePresence>
                </div>

                {/* Description with smooth crossfade */}
                <div className="relative flex-1">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={isHovered ? "solution-desc" : "problem-desc"}
                            className="text-base md:text-lg text-beige/60 font-satoshi leading-relaxed"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
                        >
                            {isHovered ? item.solution.description : item.problem.description}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className="mt-6 h-px bg-gradient-to-r from-transparent via-green-300/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-20 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-beige mb-4">
                        Why{" "}
                        <span className="text-green-300 italic font-normal">Choose Us</span>
                    </h2>
                    <p className="text-lg text-beige/50 font-satoshi max-w-2xl mx-auto">
                        Every problem has a solution. Hover to see how we solve what others can&apos;t.
                    </p>
                </motion.div>

                {/* Perfect 2x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((item, index) => (
                        <Card key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
