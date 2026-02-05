"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";

const services = [
    {
        id: 1,
        title: "Websites & Digital Presence",
        tagline: "Let's build your online home",
        description: "We'll create a beautiful website that feels just right for your brand — one that welcomes visitors and turns them into happy customers.",
        benefits: ["Business & Corporate Websites", "Startup Websites", "Personal & Portfolio Sites", "Website Redesigns"],
        details: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile-First Approach"]
    },
    {
        id: 2,
        title: "Custom Web Apps",
        tagline: "Your idea, built right",
        description: "Got a bigger vision? We love building dashboards, portals, and tools that make life easier for you and your users.",
        benefits: ["MVP Development", "Dashboards & Admin Panels", "Client / User Portals", "SaaS Platforms", "Backend Systems & APIs"],
        details: ["Scalable Architecture", "User Authentication", "Real-time Features", "API Integration"]
    },
    {
        id: 3,
        title: "Speed & Performance",
        tagline: "Fast, reliable, ready to grow",
        description: "Slow websites lose customers. We'll make sure yours loads quickly, runs smoothly, and can handle whatever growth comes your way.",
        benefits: ["Website & App Optimization", "Backend & Database Tuning", "Scalability Planning", "Cloud Setup & Deployment"],
        details: ["Performance Audits", "Code Optimization", "CDN Setup", "Monitoring & Alerts"]
    },
];

// Service Card Component with Hover Reveal
function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="flex flex-col h-full bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300 group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Animated Counter */}
            <p className="text-xs font-satoshi text-zinc-500 uppercase tracking-widest mb-6">
                {String(index + 1).padStart(2, '0')}
            </p>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold font-satoshi text-white mb-2 group-hover:text-purple-400 transition-colors">
                {service.title}
            </h3>

            {/* Tagline */}
            <p className="text-lg font-medium text-zinc-400 italic mb-6">
                {service.tagline}
            </p>

            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow">
                {service.description}
            </p>

            {/* Hover Reveal Details */}
            <div className="mt-auto">
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <ul className="space-y-2 mb-6 pt-4 border-t border-white/10">
                                {service.details.map((detail, i) => (
                                    <li key={i} className="text-sm text-zinc-300 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button className="flex items-center gap-2 text-sm font-medium text-white group/btn">
                    Explore Service
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
}

export function ImmersiveServices() {
    return (
        <section className="py-24 md:py-32 bg-black relative">
            <ContentContainer>

                {/* Section Header - Above the sticky content */}
                <div className="py-16 md:py-24 bg-black">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <span className="block text-sm font-medium font-satoshi text-zinc-500 mb-3">(Our Services)</span>
                        <CinematicBlurReveal
                            text="Our Services"
                            as="h2"
                            className="text-3xl md:text-5xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                        />
                        <p className="text-base text-zinc-400 font-satoshi max-w-xl mx-auto">
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