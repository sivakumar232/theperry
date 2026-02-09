"use client";

import React from "react";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";
import { motion } from "motion/react";
import { Zap, ShieldCheck } from "lucide-react";
import { AnimatedEyeIcon } from "./ui/animated-icons";
import { AnimatedCollabIcon } from "./ui/AnimatedCollabIcon";
import { AnimatedImpactIcon } from "./ui/AnimatedImpactIcon";
import { AnimatedHandshakeIcon } from "./ui/AnimatedHandshakeIcon";

const cards = [
    {
        id: 1,
        heading: "Built for Real Impact",
        caption: "We don’t just code features. We build products to create real business impact.",
        icon: <AnimatedImpactIcon />,
    },
    {
        id: 2,
        heading: "A True Technical Partner",
        caption: "No in-house tech team? Work directly with experienced engineers — zero layers, zero noise.",
        icon: <AnimatedHandshakeIcon />,
    },
    {
        id: 3,
        heading: "Fast & Reliable Delivery",
        caption: "Get high-quality results in days or weeks, not months.",
        icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-white mb-4 group-hover:text-gray-300 transition-colors" />,
    },
    {
        id: 4,
        heading: "Visibility by Design",
        caption: "Exceptional UI, engineered for speed, designed to scale, and built to be seen.",
        icon: <AnimatedEyeIcon />,
    },
    {
        id: 5,
        heading: "Post Launch Support",
        caption: "Launch is just the start. We maintain, improve, and evolve. Built for the long run.",
        icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white mb-4 group-hover:text-gray-300 transition-colors" />,
    },
    {
        id: 6,
        heading: "Smooth Collaboration",
        caption: "Clear communication, transparent process, consistent progress - Pricing tailored for you.",
        icon: <AnimatedCollabIcon />,
    },
];

const Card = React.memo(({ title, body, icon, index }: { title: string; body: string; icon: React.ReactNode; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
        >
            <div className="relative h-64  border-neutral-800/80 w-full  bg-neutral-950  p-6 flex flex-col items-center text-center overflow-hidden transition-colors">
                <div className="mb-4">
                    {icon}
                </div>
                <h3 className="text-[24px] font-semibold font-satoshi text-neutral-100 mb-4 leading-tight transition-colors">
                    {title}
                </h3>
                <p className="text-md   text-neutral-400 font-satoshi font-medium">
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
                    <p className="text-md text-zinc-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                        Where real needs meet the right execution, meaningful products take shape. </p>                </motion.div>
            </ContentContainer>
            {/* Marquee section moved outside ContentContainer for full width */}
            {/* Static Grid Grid Section */}
            <div className="relative z-10 max-w-[1070px] mx-auto px-3 md:px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-6">
                    {cards.map((card, index) => (
                        <Card key={card.id} title={card.heading} body={card.caption} icon={card.icon} index={index} />
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/50 to-transparent z-0"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
        </section>
    );
}