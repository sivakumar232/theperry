"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
    {
        id: 1,
        title: "Digital Presence & Websites",
        tagline: "Your Brand's Digital Home",
        description: "We craft stunning, high-performance websites that capture your brand essence and convert visitors into customers.",
        benefits: ["Business & Corporate Websites", "Startup Websites", "Personal & Portfolio Sites", "Website Redesigns"],
    },
    {
        id: 2,
        title: "Conversion & Landing Pages",
        tagline: "Pages That Convert",
        description: "Strategic landing pages engineered for maximum conversions. Every element optimized to turn visitors into leads and customers.",
        benefits: ["Product Landing Pages", "Marketing & Campaign Pages", "Lead Generation Pages", "Sales Pages"],
    },
    {
        id: 3,
        title: "Custom Web Products",
        tagline: "Built for Scale",
        description: "From MVPs to enterprise platforms, we build robust web applications that power your business growth.",
        benefits: ["MVP Development", "Dashboards & Admin Panels", "Client / User Portals", "SaaS Platforms", "Backend Systems & APIs"],
    },
    {
        id: 4,
        title: "E-Commerce & Payments",
        tagline: "Sell Seamlessly Online",
        description: "Complete e-commerce solutions with smooth checkout experiences and secure payment integrations.",
        benefits: ["E-commerce Websites", "Custom Checkout Experiences", "Payment Gateway Integration", "Product & Inventory Systems"],
    },
    {
        id: 5,
        title: "Performance & Infrastructure",
        tagline: "Speed That Scales",
        description: "Optimize your digital infrastructure for lightning-fast performance and seamless scaling as you grow.",
        benefits: ["Website & App Performance Optimization", "Backend & Database Optimization", "Scalability Architecture", "Cloud Deployment & Setup"],
    },
    {
        id: 6,
        title: "Product Launch & Growth",
        tagline: "Launch with Impact",
        description: "End-to-end launch support with analytics, user feedback systems, and growth optimization strategies.",
        benefits: ["Product Launch Support", "User Onboarding Experiences", "Analytics & Tracking Setup", "User Feedback & Review Collection"],
    },
];

export function ImmersiveServices() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const totalScrollPercent = (services.length - 1) * 100;
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalScrollPercent}%`]);

    const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalScrollPercent * 0.3}%`]);
    const midgroundX = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalScrollPercent * 0.6}%`]);

    return (
        <section
            ref={containerRef}
            id="services"
            className="relative"
            style={{ height: `${services.length * 100}vh` }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden bg-background">

                {/* Background parallax layer */}
                <motion.div
                    className="absolute inset-0 flex pointer-events-none"
                    style={{ x: backgroundX }}
                >
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-screen h-full relative"
                        >
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-beige/5 to-transparent" />
                            <div className="absolute left-1/4 top-1/4 w-[30rem] h-[30rem] rounded-full bg-beige/[0.03] blur-[80px]" />
                        </div>
                    ))}
                </motion.div>

                {/* Midground parallax layer */}
                <motion.div
                    className="absolute inset-0 flex pointer-events-none"
                    style={{ x: midgroundX }}
                >
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-screen h-full relative"
                        >
                            <div className="absolute right-20 bottom-20 w-[25rem] h-[25rem] rounded-full bg-beige/[0.02] blur-[60px]" />
                        </div>
                    ))}
                </motion.div>

                {/* Service Names Navigation */}
                <div className="absolute top-6 left-0 right-0 z-30 flex justify-center gap-4 md:gap-8 px-6 overflow-x-auto">
                    {services.map((service, index) => {
                        const serviceStart = index / services.length;
                        const serviceEnd = (index + 1) / services.length;
                        const serviceMid = (serviceStart + serviceEnd) / 2;

                        return (
                            <motion.button
                                key={service.id}
                                className="text-[10px] md:text-xs font-satoshi uppercase tracking-widest transition-colors duration-300 relative whitespace-nowrap"
                                style={{
                                    opacity: useTransform(
                                        scrollYProgress,
                                        [serviceStart, serviceMid - 0.05, serviceMid, serviceMid + 0.05, serviceEnd],
                                        [0.3, 0.6, 1, 0.6, 0.3]
                                    ),
                                    color: useTransform(
                                        scrollYProgress,
                                        [serviceStart, serviceMid, serviceEnd],
                                        ["rgb(254, 251, 227)", "rgb(254, 251, 227)", "rgb(254, 251, 227)"]
                                    ),
                                }}
                            >
                                {service.title}
                                {/* Active indicator line */}
                                <motion.div
                                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-beige"
                                    style={{
                                        scaleX: useTransform(
                                            scrollYProgress,
                                            [serviceStart, serviceMid - 0.1, serviceMid, serviceMid + 0.1, serviceEnd],
                                            [0, 0.5, 1, 0.5, 0]
                                        ),
                                    }}
                                />
                            </motion.button>
                        );
                    })}
                </div>

                {/* Main content */}
                <motion.div
                    className="flex h-full"
                    style={{ x }}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="flex-shrink-0 w-screen h-full flex items-center justify-center relative overflow-hidden"
                        >
                            {/* Large background number */}
                            <div className="absolute -right-10 md:right-10 top-1/2 -translate-y-1/2 text-[15rem] md:text-[22rem] font-satoshi font-black text-beige/[0.02] select-none pointer-events-none">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-3xl px-6 md:px-12 text-center md:text-left">
                                {/* Service number */}
                                <p className="text-xs font-satoshi text-beige/50 uppercase tracking-widest mb-3">
                                    0{index + 1} / 0{services.length}
                                </p>

                                {/* Title */}
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-satoshi font-bold text-beige leading-none mb-4">
                                    {service.title}
                                </h2>

                                {/* Tagline */}
                                <p className="text-lg md:text-xl font-satoshi font-medium text-beige/70 italic mb-6">
                                    {service.tagline}
                                </p>

                                {/* Description */}
                                <p className="text-sm md:text-base font-satoshi text-beige/50 max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
                                    {service.description}
                                </p>

                                {/* Benefits */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                                    {service.benefits.map((benefit) => (
                                        <span
                                            key={benefit}
                                            className="px-3 py-1.5 text-xs font-satoshi text-beige/70 border border-beige/20 rounded-full"
                                        >
                                            {benefit}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button className="group inline-flex items-center gap-2 text-beige font-satoshi font-medium text-sm hover:gap-3 transition-all duration-300">
                                    <span>Explore This Service</span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="group-hover:translate-x-0.5 transition-transform"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom scroll hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-beige/30">
                    <motion.div
                        className="w-5 h-8 border border-beige/30 rounded-full flex justify-center pt-1.5"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-0.5 h-1.5 bg-beige/50 rounded-full"
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
