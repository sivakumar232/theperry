"use client";

import React from "react";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";
import { motion } from "motion/react";

const cards = [
    {
        id: 1,
        heading: "Modern Digital Products",
        caption: "We replace outdated websites and apps with fast, reliable products.",
    },
    {
        id: 2,
        heading: "Streamlined Workflows",
        caption: "We build focused tools that simplify operations and remove friction.",
    },
    {
        id: 3,
        heading: "Clear Scope, Clear Pricing",
        caption: "Defined deliverables, honest timelines, and pricing aligned to work.",
    },
    {
        id: 4,
        heading: "Consistent Experience",
        caption: "Your website, app, and tools will feel cohesive and professional.",
    },
    {
        id: 5,
        heading: "Built for Visibility",
        caption: "Our work is structured for performance, SEO, and discoverability.",
    },
    {
        id: 6,
        heading: "Long-Term Support",
        caption: "We stay involved after launch to improve performance and fix issues.",
    },
];

const Card = React.memo(({ title, body, index }: { title: string; body: string; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
        >
            <div className="relative h-64 w-full bg-black border-2 border-white/20 p-8 flex flex-col justify-end overflow-hidden group hover:border-white/40 transition-colors">
                <h3 className="text-lg font-bold font-satoshi text-white mb-2 leading-tight group-hover:text-gray-300 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 font-satoshi leading-relaxed">
                    {body}
                </p>
            </div>
        </motion.div>
    );
});

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 bg-black relative overflow-hidden">
            <ContentContainer>
                {/* Section Header */}
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="block text-sm font-medium font-satoshi text-gray-500 mb-3">(Why Us)</span>
                    <CinematicBlurReveal
                        text="Why Choose theperry"
                        as="h2"
                        className="text-3xl md:text-6xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                    />
                    <p className="text-lg text-zinc-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                        Six reasons clients trust us with their digital presence
                    </p>
                </motion.div>
            </ContentContainer>
            {/* Marquee section moved outside ContentContainer for full width */}
            {/* Static Grid Grid Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <Card key={card.id} title={card.heading} body={card.caption} index={index} />
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/50 to-transparent z-0"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
        </section>
    );
}