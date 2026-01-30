"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        subtitle: "We Listen & Learn",
        description: "We dive deep into your business goals, target audience, and competitive landscape to uncover opportunities.",
        deliverables: ["Brand Audit", "Market Research", "Goal Setting"],
        color: "from-blue-500/20 to-purple-500/20",
    },
    {
        number: "02",
        title: "Strategy",
        subtitle: "We Plan & Map",
        description: "A clear roadmap with defined milestones, user flows, and content hierarchy tailored to your vision.",
        deliverables: ["Sitemap", "User Flows", "Content Plan"],
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        number: "03",
        title: "Design",
        subtitle: "We Create & Refine",
        description: "Premium visual designs that capture your brand essence and create memorable user experiences.",
        deliverables: ["UI Design", "Prototypes", "Design System"],
        color: "from-pink-500/20 to-orange-500/20",
    },
    {
        number: "04",
        title: "Develop",
        subtitle: "We Build & Optimize",
        description: "High-performance code with modern technologies ensuring speed, security, and scalability.",
        deliverables: ["Next.js Build", "CMS Setup", "Integrations"],
        color: "from-orange-500/20 to-yellow-500/20",
    },
    {
        number: "05",
        title: "Launch",
        subtitle: "We Deploy & Support",
        description: "Seamless deployment with ongoing optimization to ensure your success beyond launch day.",
        deliverables: ["Go Live", "SEO Setup", "Analytics"],
        color: "from-yellow-500/20 to-green-500/20",
    },
];

export function HorizontalProcess() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Transform vertical scroll (0-1) to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    // Progress bar
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            id="process"
            className="relative h-[400vh]" // Tall container for scroll space
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
                {/* Header */}
                <div className="pt-20 pb-8 px-8 md:px-16">
                    <motion.p
                        className="text-green-300 font-satoshi text-sm uppercase tracking-widest mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        How We Work
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-6xl font-satoshi font-bold text-beige"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Your Journey With Us
                    </motion.h2>
                </div>

                {/* Progress bar */}
                <div className="px-8 md:px-16 mb-8">
                    <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-green-300 to-green-500"
                            style={{ width: progressWidth }}
                        />
                    </div>
                </div>

                {/* Horizontal scroll content */}
                <div className="flex-1 flex items-center">
                    <motion.div
                        className="flex gap-8 pl-8 md:pl-16"
                        style={{ x }}
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                className={`flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] rounded-3xl p-8 md:p-12 bg-gradient-to-br ${step.color} border border-white/10 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Background number */}
                                <div className="absolute -right-8 -bottom-16 text-[20rem] font-satoshi font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-700">
                                    {step.number}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <span className="text-green-300 font-satoshi text-sm font-medium tracking-wider">
                                        STEP {step.number}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-satoshi font-bold text-beige mt-2 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-beige/70 font-satoshi mb-2">
                                        {step.subtitle}
                                    </p>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-beige/60 font-satoshi text-base leading-relaxed mb-6 max-w-md">
                                        {step.description}
                                    </p>

                                    {/* Deliverables */}
                                    <div className="flex flex-wrap gap-2">
                                        {step.deliverables.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 text-xs font-satoshi text-green-300/80 bg-green-300/10 border border-green-300/20 rounded-full"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Final CTA card */}
                        <motion.div
                            className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] rounded-3xl p-8 md:p-12 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-300/30 backdrop-blur-sm flex flex-col items-center justify-center text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-4xl md:text-5xl font-satoshi font-bold text-beige mb-4">
                                Ready to Start?
                            </h3>
                            <p className="text-beige/60 font-satoshi text-lg mb-8 max-w-sm">
                                Let&apos;s turn your vision into a conversion-ready digital experience.
                            </p>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-green-300 text-background font-satoshi font-semibold rounded-full hover:bg-green-400 transition-colors duration-300"
                            >
                                Start a Project
                            </a>
                        </motion.div>

                        {/* Spacer for end */}
                        <div className="w-16 flex-shrink-0" />
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-beige/40">
                    <span className="text-xs font-satoshi uppercase tracking-widest">Scroll to explore</span>
                    <motion.div
                        className="w-5 h-8 border-2 border-beige/30 rounded-full flex justify-center"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-2 bg-beige/50 rounded-full mt-1"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
