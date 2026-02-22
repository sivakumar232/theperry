"use client";

import React from "react";
import Lottie from "lottie-react";
import goalAnimation from "@/assets/lottie/goal.json";
import supportAnimation from "@/assets/lottie/support.json";
import flightmodeAnimation from "@/assets/lottie/flightmode.json";
import graphupAnimation from "@/assets/lottie/Graphup.json";
import handshakeAnimation from "@/assets/lottie/Handshake.json";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";
import { motion } from "motion/react";
import { AnimatedCollabIcon } from "./ui/AnimatedCollabIcon";
import { AnimatedHandshakeIcon } from "./ui/AnimatedHandshakeIcon";

const cards = [
    {
        id: 1,
        heading: "Built for Real Impact",
        caption: "We don’t just code features. We build products to create real business impact.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={goalAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
    },
    {
        id: 2,
        heading: "A True Technical Partner",
        caption: "No in-house tech team? Work directly with experienced engineers — zero layers, zero noise.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={handshakeAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
    },
    {
        id: 3,
        heading: "Fast & Reliable Delivery",
        caption: "Get high-quality results in days or weeks, not months.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={flightmodeAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
    },
    {
        id: 4,
        heading: "Visibility by Design",
        caption: "Exceptional UI, engineered for speed, designed to scale, and built to be seen.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={graphupAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
    },
    {
        id: 5,
        heading: "Post Launch Support",
        caption: "Launch is just the start. We maintain, improve, and evolve. Built for the long run.",
        icon: (
            <div className="w-10 h-10 md:w-14 md:h-14">
                <Lottie animationData={supportAnimation} loop={true} autoplay={true} style={{ width: "100%", height: "100%" }} />
            </div>
        ),
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
        <section id="why-us" className="py-24 md:py-32 bg-black relative overflow-hidden">
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
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
                        <span className="text-[11px] font-semibold font-satoshi text-neutral-300 uppercase tracking-[0.2em] leading-none mt-[1px]">WHY US</span>
                    </div>
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