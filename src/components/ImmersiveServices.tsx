"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
    {
        id: 1,
        title: "Web Development",
        tagline: "Where Ideas Become Reality",
        description: "We craft high-performance digital experiences that captivate your audience and drive measurable results. From concept to launch, we build with precision and purpose.",
        benefits: ["Lightning Fast", "SEO Optimized", "Conversion Focused", "Future Proof"],
    },
    {
        id: 2,
        title: "UI/UX Design",
        tagline: "Design That Speaks Volumes",
        description: "Every pixel tells a story. We create intuitive interfaces and memorable experiences that connect with your users on a deeper level and keep them coming back.",
        benefits: ["User Centered", "Brand Aligned", "Research Driven", "Pixel Perfect"],
    },
    {
        id: 3,
        title: "SEO & Growth",
        tagline: "Visibility That Converts",
        description: "We don't just get you found—we get you chosen. Strategic optimization and data-driven growth tactics that put you ahead of the competition.",
        benefits: ["Data Driven", "Results Focused", "Sustainable Growth", "Market Leading"],
    },
];

export function ImmersiveServices() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Calculate total scroll distance
    const totalScrollPercent = (services.length - 1) * 100;
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalScrollPercent}%`]);

    // Parallax layer speeds (slower than main content)
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

                {/* Background parallax layer - slowest */}
                <motion.div
                    className="absolute inset-0 flex pointer-events-none"
                    style={{ x: backgroundX }}
                >
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-screen h-full relative"
                        >
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-green-300/5 to-transparent" />
                            <div className="absolute left-1/4 top-1/4 w-[40rem] h-[40rem] rounded-full bg-green-300/[0.03] blur-[100px]" />
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
                            <div className="absolute right-20 bottom-20 w-[30rem] h-[30rem] rounded-full bg-beige/[0.02] blur-[80px]" />
                        </div>
                    ))}
                </motion.div>

                {/* Service Names Navigation - Fixed at Top */}
                <div className="absolute top-8 left-0 right-0 z-30 flex justify-center gap-12 px-8">
                    {services.map((service, index) => {
                        const serviceStart = index / services.length;
                        const serviceEnd = (index + 1) / services.length;
                        const serviceMid = (serviceStart + serviceEnd) / 2;

                        return (
                            <motion.button
                                key={service.id}
                                className="text-sm md:text-base font-satoshi uppercase tracking-widest transition-colors duration-300 relative"
                                style={{
                                    opacity: useTransform(
                                        scrollYProgress,
                                        [serviceStart, serviceMid - 0.05, serviceMid, serviceMid + 0.05, serviceEnd],
                                        [0.3, 0.6, 1, 0.6, 0.3]
                                    ),
                                    color: useTransform(
                                        scrollYProgress,
                                        [serviceStart, serviceMid, serviceEnd],
                                        ["rgb(245, 245, 220)", "rgb(134, 239, 172)", "rgb(245, 245, 220)"]
                                    ),
                                }}
                            >
                                {service.title}
                                {/* Active indicator line */}
                                <motion.div
                                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-green-300"
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

                {/* Main content - Foreground (fastest) */}
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
                            <div className="absolute -right-10 md:right-10 top-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-satoshi font-black text-beige/[0.02] select-none pointer-events-none">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-4xl px-8 md:px-16 text-center md:text-left">
                                {/* Service number */}
                                <p className="text-sm font-satoshi text-green-300/60 uppercase tracking-widest mb-4">
                                    0{index + 1} / 0{services.length}
                                </p>

                                {/* Title */}
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-satoshi font-bold text-beige leading-none mb-6">
                                    {service.title}
                                </h2>

                                {/* Tagline */}
                                <p className="text-xl md:text-3xl font-satoshi font-medium text-green-300 italic mb-8">
                                    {service.tagline}
                                </p>

                                {/* Description */}
                                <p className="text-base md:text-lg font-satoshi text-beige/60 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
                                    {service.description}
                                </p>

                                {/* Benefits */}
                                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                                    {service.benefits.map((benefit) => (
                                        <span
                                            key={benefit}
                                            className="px-4 py-2 text-sm font-satoshi text-beige/80 border border-beige/20 rounded-full"
                                        >
                                            {benefit}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button className="group inline-flex items-center gap-3 text-green-300 font-satoshi font-medium text-lg hover:gap-5 transition-all duration-300">
                                    <span>Explore This Service</span>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom scroll hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-beige/30">
                    <motion.div
                        className="w-6 h-10 border border-beige/30 rounded-full flex justify-center pt-2"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-2 bg-beige/50 rounded-full"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
