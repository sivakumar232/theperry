"use client";

import React, { useState, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
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

type CardData = {
    id: number;
    heading: string;
    caption: string;
    tooltip: string;
    animationData?: object;
    staticIcon?: React.ReactNode;
};

const cards: CardData[] = [
    {
        id: 1,
        heading: "Built for Real Impact",
        tooltip: "Strategy-first — every decision ties to your goals",
        caption: "We don't just code features. We build products to create real business impact.",
        animationData: goalAnimation,
    },
    {
        id: 2,
        heading: "A True Technical Partner",
        tooltip: "Direct access to senior engineers, no middlemen",
        caption: "No in-house tech team? Work directly with experienced engineers — zero layers, zero noise.",
        animationData: handshakeAnimation,
    },
    {
        id: 3,
        heading: "Fast & Reliable Delivery",
        tooltip: "Sprints · Milestones · On-time, every time",
        caption: "Get high-quality results in days or weeks, not months.",
        animationData: flightmodeAnimation,
    },
    {
        id: 4,
        heading: "Visibility by Design",
        tooltip: "Core Web Vitals · SEO-first · Performance optimised",
        caption: "Exceptional UI, engineered for speed, designed to scale, and built to be seen.",
        animationData: graphupAnimation,
    },
    {
        id: 5,
        heading: "Post Launch Support",
        tooltip: "Monitoring · Updates · Feature iteration",
        caption: "Launch is just the start. We maintain, improve, and evolve. Built for the long run.",
        animationData: supportAnimation,
    },
    {
        id: 6,
        heading: "Smooth Collaboration",
        tooltip: "Slack · Notion · Loom · Weekly stand-ups",
        caption: "Clear communication, transparent process, consistent progress - Pricing tailored for you.",
        staticIcon: <AnimatedCollabIcon />,
    },
];

const Card = React.memo(({ title, body, tooltip, animationData, staticIcon, index }: {
    title: string;
    body: string;
    tooltip: string;
    animationData?: object;
    staticIcon?: React.ReactNode;
    index: number;
}) => {
    const [hovered, setHovered] = useState(false);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const handleMouseEnter = () => {
        setHovered(true);
        lottieRef.current?.pause();
    };
    const handleMouseLeave = () => {
        setHovered(false);
        lottieRef.current?.play();
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
        >
            <div
                className={`relative h-64 w-full bg-neutral-950 p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-300 border ${hovered
                    ? "border-white/25 shadow-[0_0_24px_0px_rgba(255,255,255,0.08)]"
                    : "border-neutral-800/80"
                    }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    className="mb-4"
                    animate={{ scale: hovered ? 1.15 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {animationData ? (
                        <div className="w-10 h-10 md:w-14 md:h-14">
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={animationData}
                                loop={true}
                                autoplay={true}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    ) : (
                        staticIcon
                    )}
                </motion.div>
                <h3 className="text-[24px] font-semibold font-satoshi text-neutral-100 mb-4 leading-tight transition-colors">
                    {title}
                </h3>
                <p className="text-md text-neutral-400 font-satoshi font-medium">
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

            {/* Staggered Grid Section */}
            <div className="relative z-10 max-w-[1070px] mx-auto px-3 md:px-6 py-10">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {cards.map((card, index) => (
                        <Card key={card.id} title={card.heading} body={card.caption} tooltip={card.tooltip} animationData={card.animationData} staticIcon={card.staticIcon} index={index} />
                    ))}
                </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/50 to-transparent z-0"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/50 to-transparent z-0"></div>
        </section>
    );
}