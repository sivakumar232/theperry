"use client";

import React from "react";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";
import { MonitorSmartphone, Code2, Sparkles, ArrowRight } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Websites",
        tagline: "Your brand's home on the web",
        description: "We build beautiful, high-performing websites that represent your brand and convert visitors into customers.",
        benefits: ["Brand & Startup websites", "E-commerce platforms", "High-converting landing pages", "Website redesigns"],
        details: ["Responsive Design", "SEO Optimized", "Mobile-First", "Fast Loading"],
        icon: MonitorSmartphone,
    },
    {
        id: 2,
        title: "Custom Tech Products",
        tagline: "Your idea, engineered to scale",
        description: "From MVPs to full-scale platforms — we build the software that powers your business and your users' experience.",
        benefits: ["Full-stack web applications", "SaaS platforms", "CRM & business systems", "Dashboards & client portals"],
        details: ["Scalable Architecture", "User Authentication", "Real-time Features", "API Integration"],
        icon: Code2,
    },
    {
        id: 3,
        title: "AI & Automation",
        tagline: "Work smarter, not harder",
        description: "We integrate AI and automation into your workflows and products so your business runs faster with less manual effort.",
        benefits: ["AI-integrated products", "AI-powered business tools", "Workflow automation systems", "Custom business automations"],
        details: ["LLM Integration", "Process Automation", "Custom AI Pipelines", "Tool & API Connectivity"],
        icon: Sparkles,
    },
];

// Simple Service Card Component
const ServiceCard = React.memo(function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const Icon = service.icon;

    return (
        <div className="flex flex-col h-full bg-[#050505] border border-white/10 rounded-3xl p-8 hover:bg-[#0a0a0a] hover:border-white/20 transition-all duration-300">
            {/* Visual Icon Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-satoshi text-zinc-500 uppercase tracking-widest font-semibold flex-1 text-right">
                    0{index + 1}
                </p>
            </div>

            {/* Main Text Content */}
            <h3 className="text-2xl font-bold font-satoshi text-white mb-2">
                {service.title}
            </h3>
            <p className="text-sm font-satoshi font-medium text-purple-400 mb-6 transition-colors">
                {service.tagline}
            </p>
            <p className="text-sm font-satoshi text-neutral-400 leading-relaxed mb-8 flex-grow">
                {service.description}
            </p>

            {/* Static Details List */}
            <ul className="space-y-3 mb-8 border-t border-white/10 pt-6">
                {service.details.map((detail, i) => (
                    <li key={i} className="text-sm font-satoshi text-neutral-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3" />
                        {detail}
                    </li>
                ))}
            </ul>

            {/* Simple CTA */}
            <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors group/btn mt-auto">
                Explore Service
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
        </div>
    );
});

export function ImmersiveServices() {
    return (
        <section id="services" className="py-24 md:py-32 bg-black relative">
            <ContentContainer>

                {/* Header Badge */}
                <div className="text-center mb-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
                            <span className="text-[11px] font-semibold font-satoshi text-neutral-300 uppercase tracking-[0.2em] leading-none mt-[1px]">OUR SERVICES</span>
                        </div>
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

                {/* Simple Grid Array */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
