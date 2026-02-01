"use client";

import React from "react";
import { motion } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";
import { PremiumQualitySVG } from "./icons/PremiumQualitySVG";

const cards = [
    {
        id: 1,
        heading: "Launch in 3 Weeks",
        caption: "Fast-track your project with our proven rapid deployment process",
    },
    {
        id: 2,
        heading: "Design That Converts",
        caption: "Every element strategically crafted to turn visitors into customers",
    },
    {
        id: 3,
        heading: "Premium Quality",
        caption: "Stand out with professional design that builds instant credibility",
    },
    {
        id: 4,
        heading: "Lightning Fast",
        caption: "Sub-2-second load times that keep your audience engaged",
    },
    {
        id: 5,
        heading: "Built to Scale",
        caption: "Future-proof solutions that grow alongside your business",
    },
    {
        id: 6,
        heading: "Transparent Process",
        caption: "Clear communication and honest pricing at every step",
    },
];

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-16 md:py-24">
            <ContentContainer>
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-satoshi text-beige mb-3">
                        Why{" "}
                        <span className="text-beige/70 italic font-normal">Choose Us</span>
                    </h2>
                    <p className="text-base text-beige/50 font-satoshi max-w-xl mx-auto">
                        Six reasons clients trust us with their digital presence
                    </p>
                </motion.div>

                {/* Bento Grid - 3 Row Layout */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Row 1 & 2 Combined - Left Side */}
                        <div className="md:col-span-2 grid grid-rows-2 gap-4">
                            {/* Row 1 - Horizontal Rectangle (Container 1) */}
                            <motion.div
                                className="relative h-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/8 hover:border-beige/20 hover:scale-[1.02] transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0 }}
                            >
                                <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                    <h3 className="text-base md:text-lg font-bold font-satoshi text-beige mb-1 leading-tight">
                                        {cards[0].heading}
                                    </h3>
                                    <p className="text-xs text-beige/60 font-satoshi leading-relaxed">
                                        {cards[0].caption}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Row 2 - Two Squares (Containers 2 & 4) */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Container 2 - Square */}
                                <motion.div
                                    className="relative h-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/8 hover:border-beige/20 hover:scale-[1.02] transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                        <h3 className="text-base md:text-lg font-bold font-satoshi text-beige mb-1 leading-tight">
                                            {cards[1].heading}
                                        </h3>
                                        <p className="text-xs text-beige/60 font-satoshi leading-relaxed">
                                            {cards[1].caption}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Container 4 - Square */}
                                <motion.div
                                    className="relative h-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/8 hover:border-beige/20 hover:scale-[1.02] transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                        <h3 className="text-base md:text-lg font-bold font-satoshi text-beige mb-1 leading-tight">
                                            {cards[3].heading}
                                        </h3>
                                        <p className="text-xs text-beige/60 font-satoshi leading-relaxed">
                                            {cards[3].caption}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Container 3 - Vertical Rectangle (Spans Row 1 & 2) */}
                        <motion.div
                            className="relative h-48 md:h-[calc(2*14rem+1rem)] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/8 hover:border-beige/20 hover:scale-[1.02] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            {/* SVG Background */}
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <PremiumQualitySVG className="w-32 h-32 md:w-40 md:h-40 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-beige mb-1 leading-tight">
                                    {cards[2].heading}
                                </h3>
                                <p className="text-xs text-beige/60 font-satoshi leading-relaxed">
                                    {cards[2].caption}
                                </p>
                            </div>
                        </motion.div>

                        {/* Row 3 - Horizontal Rectangle & Square */}
                        {/* Container 5 - Horizontal Rectangle */}
                        <motion.div
                            className="md:col-span-2 relative h-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/8 hover:border-beige/20 hover:scale-[1.02] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-beige mb-1 leading-tight">
                                    {cards[4].heading}
                                </h3>
                                <p className="text-xs text-beige/60 font-satoshi leading-relaxed">
                                    {cards[4].caption}
                                </p>
                            </div>
                        </motion.div>

                        {/* Container 6 - Square */}
                        <motion.div
                            className="relative h-48 md:h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/8 hover:border-beige/20 hover:scale-[1.02] transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-beige mb-1 leading-tight">
                                    {cards[5].heading}
                                </h3>
                                <p className="text-xs text-beige/60 font-satoshi leading-relaxed">
                                    {cards[5].caption}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}
