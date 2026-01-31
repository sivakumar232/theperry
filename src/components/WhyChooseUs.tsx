"use client";

import React from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";

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

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [3, -3]);
    const rotateY = useTransform(x, [-100, 100], [-3, 3]);

    // Spotlight Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="group relative h-full perspective-1000"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="relative h-full p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-colors duration-500"
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
            >
                {/* Spotlight Gradient */}
                <motion.div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: useTransform(
                            [mouseX, mouseY],
                            ([latestX, latestY]: any[]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(254, 251, 227, 0.1), transparent 40%)`
                        ),
                    }}
                />

                {/* Subtle base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(20px)" }}>
                    {/* Label */}
                    <div className="mb-4">
                        <motion.span
                            className="inline-block text-xs font-satoshi font-medium uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border transition-all duration-300"
                            animate={{
                                backgroundColor: isHovered ? "rgba(254, 251, 227, 0.1)" : "rgba(255, 255, 255, 0.05)",
                                borderColor: isHovered ? "rgba(254, 251, 227, 0.3)" : "rgba(255, 255, 255, 0.1)",
                                color: isHovered ? "rgb(254, 251, 227)" : "rgba(254, 251, 227, 0.5)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {isHovered ? "Solution" : "Problem"}
                        </motion.span>
                    </div>

                    {/* Title */}
                    <div className="relative mb-3 min-h-[56px]">
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={isHovered ? "solution" : "problem"}
                                className="text-xl md:text-2xl font-bold font-satoshi text-beige leading-tight"
                                initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                {isHovered ? item.solution.title : item.problem.title}
                            </motion.h3>
                        </AnimatePresence>
                    </div>

                    {/* Description */}
                    <div className="relative flex-1">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={isHovered ? "solution-desc" : "problem-desc"}
                                className="text-sm md:text-base text-beige/50 font-satoshi leading-relaxed"
                                initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                                transition={{ duration: 0.2, ease: "easeOut", delay: 0.03 }}
                            >
                                {isHovered ? item.solution.description : item.problem.description}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Bottom accent */}
                    <motion.div
                        className="mt-4 h-px bg-gradient-to-r from-transparent via-beige/30 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-16 md:py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-satoshi text-beige mb-3">
                        Why{" "}
                        <span className="text-beige/70 italic font-normal">Choose Us</span>
                    </h2>
                    <p className="text-base text-beige/50 font-satoshi max-w-xl mx-auto">
                        Every problem has a solution. Hover to see how we solve what others can&apos;t.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((item, index) => (
                        <Card key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
