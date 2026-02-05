"use client";

import React from "react";
import { ContentContainer } from "./ui/ContentContainer";
import { PremiumQualitySVG } from "./icons/PremiumQualitySVG";

const cards = [
    {
        id: 1,
        heading: "Modern Digital Products",
        caption: "We replace outdated websites and apps with fast, reliable products that represent your business properly.",
    },
    {
        id: 2,
        heading: "Streamlined Workflows",
        caption: "We build focused tools that simplify operations and remove friction from your team's daily work.",
    },
    {
        id: 3,
        heading: "Clear Scope, Clear Pricing",
        caption: "Defined deliverables, honest timelines, and pricing aligned to the actual work.",
    },
    {
        id: 4,
        heading: "Consistent Experience",
        caption: "Your website, app, and tools will feel cohesive, predictable, and professional everywhere.",
    },
    {
        id: 5,
        heading: "Built for Visibility",
        caption: "Our work is structured for performance, SEO, and long-term discoverability — not just looks.",
    },
    {
        id: 6,
        heading: "Long-Term Support",
        caption: "We stay involved after launch to improve performance, fix issues, and evolve your product.",
    },
];

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-16 md:py-24 bg-black relative">
            <ContentContainer>
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold font-satoshi text-white mb-3">
                        Why{" "}
                        <span className="text-gray-300 italic font-normal">Choose theperry</span>
                    </h2>
                    <p className="text-base text-gray-400 font-satoshi max-w-xl mx-auto">
                        Six reasons clients trust us with their digital presence
                    </p>
                </div>

                {/* Interactive Bento Grid - Option 1 */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Row 1 - Horizontal Rectangle spanning 2 cols + Square */}
                        {/* Container 1 - Horizontal Rectangle */}
                        <div className="md:col-span-2 relative h-56 rounded-2xl bg-gray-900 border border-gray-700 shadow-sm overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-white mb-1 leading-tight group-hover:text-gray-300 transition-colors duration-200">
                                    {cards[0].heading}
                                </h3>
                                <p className="text-xs text-gray-300 font-satoshi leading-relaxed">
                                    {cards[0].caption}
                                </p>
                            </div>
                        </div>

                        {/* Container 2 - Square */}
                        <div className="relative h-56 rounded-2xl bg-gray-900 border border-gray-700 shadow-sm overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-white mb-1 leading-tight group-hover:text-gray-300 transition-colors duration-200">
                                    {cards[1].heading}
                                </h3>
                                <p className="text-xs text-gray-300 font-satoshi leading-relaxed">
                                    {cards[1].caption}
                                </p>
                            </div>
                        </div>

                        {/* Row 2 - Square + Horizontal Rectangle spanning 2 cols */}
                        {/* Container 3 - Square with SVG */}
                        <div className="relative h-56 rounded-2xl bg-gray-900 border border-gray-700 shadow-sm overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            {/* SVG Background */}
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <PremiumQualitySVG className="w-32 h-32 md:w-40 md:h-40 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-white mb-1 leading-tight group-hover:text-gray-300 transition-colors duration-200">
                                    {cards[2].heading}
                                </h3>
                                <p className="text-xs text-gray-300 font-satoshi leading-relaxed">
                                    {cards[2].caption}
                                </p>
                            </div>
                        </div>

                        {/* Container 4 - Horizontal Rectangle */}
                        <div className="md:col-span-2 relative h-56 rounded-2xl bg-gray-900 border border-gray-700 shadow-sm overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-white mb-1 leading-tight group-hover:text-gray-300 transition-colors duration-200">
                                    {cards[3].heading}
                                </h3>
                                <p className="text-xs text-gray-300 font-satoshi leading-relaxed">
                                    {cards[3].caption}
                                </p>
                            </div>
                        </div>

                        {/* Row 3 - Horizontal Rectangle spanning 2 cols + Square */}
                        {/* Container 5 - Horizontal Rectangle */}
                        <div className="md:col-span-2 relative h-56 rounded-2xl bg-gray-900 border border-gray-700 shadow-sm overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            <div className="p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-white mb-1 leading-tight group-hover:text-gray-300 transition-colors duration-200">
                                    {cards[4].heading}
                                </h3>
                                <p className="text-xs text-gray-300 font-satoshi leading-relaxed">
                                    {cards[4].caption}
                                </p>
                            </div>
                        </div>

                        {/* Container 6 - Square with Video */}
                        <div className="relative h-56 rounded-2xl bg-gray-900 border border-gray-700 shadow-sm overflow-hidden group cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                            {/* Video Background */}
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                                >
                                    <source src="/Active Support.mp4" type="video/mp4" />
                                </video>
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 p-4 md:p-5 flex flex-col justify-end h-full">
                                <h3 className="text-base md:text-lg font-bold font-satoshi text-white mb-1 leading-tight group-hover:text-gray-300 transition-colors duration-200">
                                    {cards[5].heading}
                                </h3>
                                <p className="text-xs text-gray-300 font-satoshi leading-relaxed">
                                    {cards[5].caption}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}