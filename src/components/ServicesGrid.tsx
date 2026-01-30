"use client";

import React from "react";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

// Icons as simple SVG components
const CodeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const DesignIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
    </svg>
);

const ChartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
);

const RocketIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const GlobeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

// Skeleton headers for visual interest in each card
const SkeletonOne = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent" />
);

const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent" />
);

const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent" />
);

const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent" />
);

const SkeletonFive = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent" />
);

export function ServicesGrid() {
    const services = [
        {
            title: "Web Development",
            description: "Modern, responsive, and lightning-fast websites built with cutting-edge technologies.",
            header: <SkeletonOne />,
            icon: <CodeIcon />,
            className: "md:col-span-2", // Spans 2 columns
        },
        {
            title: "UI/UX Design",
            description: "Beautiful interfaces that users love. Pixel-perfect designs.",
            header: <SkeletonTwo />,
            icon: <DesignIcon />,
            className: "md:col-span-1",
        },
        {
            title: "SEO & Performance",
            description: "Dominate search rankings with optimized, blazing-fast pages.",
            header: <SkeletonThree />,
            icon: <ChartIcon />,
            className: "md:col-span-1",
        },
        {
            title: "Growth Strategy",
            description: "Beyond building—we help you scale with analytics and strategic roadmaps.",
            header: <SkeletonFour />,
            icon: <RocketIcon />,
            className: "md:col-span-2", // Spans 2 columns
        },
    ];

    return (
        <section id="services" className="py-20 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-beige mb-4">
                        Our <span className="text-green-300 italic font-normal">Services</span>
                    </h2>
                    <p className="text-lg text-beige/60 font-satoshi max-w-2xl mx-auto">
                        Everything you need to build, launch, and scale your digital presence.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <BentoGrid className="max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={service.className}
                        >
                            <BentoGridItem
                                title={service.title}
                                description={service.description}
                                header={service.header}
                                icon={service.icon}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
