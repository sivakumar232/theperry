"use client";

import React, { useState } from "react";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";

const services = [
    {
        id: 1,
        title: "Websites",
        tagline: "Your brand's home on the web",
        description: "We build beautiful, high-performing websites that represent your brand and convert visitors into customers.",
        benefits: ["Brand & Startup websites", "E-commerce platforms", "High-converting landing pages", "Website redesigns"],
        details: ["Responsive Design", "SEO Optimized", "Mobile-First", "Fast Loading"]
    },
    {
        id: 2,
        title: "Custom Tech Products",
        tagline: "Your idea, engineered to scale",
        description: "From MVPs to full-scale platforms — we build the software that powers your business and your users' experience.",
        benefits: ["Full-stack web applications", "SaaS platforms", "CRM & business systems", "Dashboards & client portals"],
        details: ["Scalable Architecture", "User Authentication", "Real-time Features", "API Integration"]
    },
    {
        id: 3,
        title: "AI & Automation",
        tagline: "Work smarter, not harder",
        description: "We integrate AI and automation into your workflows and products so your business runs faster with less manual effort.",
        benefits: ["AI-integrated products", "AI-powered business tools", "Workflow automation systems", "Custom business automations"],
        details: ["LLM Integration", "Process Automation", "Custom AI Pipelines", "Tool & API Connectivity"]
    },
];

// Service Card Component with Hover Reveal
const ServiceCard = React.memo(function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col h-full bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900 hover:border-white/20 transition-colors duration-200 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated Counter */}
            <p className="text-xs font-satoshi text-zinc-500 uppercase tracking-widest mb-6">
                {String(index + 1).padStart(2, '0')}
            </p>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold font-satoshi text-white mb-2 transition-colors">
                {service.title}
            </h3>


            {/* Description */}
            <p className="text-sm font-satoshi text-neutral-400 leading-relaxed mb-8 flex-grow">
                {service.description}
            </p>

            {/* Hover Reveal Details - CSS Grid transition instead of AnimatePresence */}
            <div className="mt-auto">
                <div
                    className={`grid transition-all duration-200 ease-out ${isHovered ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <ul className="space-y-2 mb-6 pt-4 border-t border-white/10">
                            {service.details.map((detail, i) => (
                                <li key={i} className="text-sm font-satoshi text-neutral-300 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-medium text-white group/btn">
                    Explore Service
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
});

export function ImmersiveServices() {
    return (
        <section id="services" className="py-24 md:py-32 bg-black relative">
            <ContentContainer>

                <div className="text-center mb-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <span className="block text-sm font-medium font-satoshi text-neutral-500 mb-3">(Our Services)</span>
                        <CinematicBlurReveal
                            text="Our Services"
                            as="h2"
                            className="text-3xl md:text-6xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                        />
                        <p className="text-md text-neutral-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                            Everything you need to build and grow your digital presence
                        </p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}