"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ContentContainer } from "./ui/ContentContainer";
import { CinematicBlurReveal } from "./ui/cinematic-blur-reveal";

const services = [
    {
        id: 0,
        num: "01",
        label: "Websites",
        description:
            "We build beautiful, stunning websites that represent your brand and convert visitors into customers.",
        gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2d1b69 100%)",
        accent: "#7c3aed",
    },
    {
        id: 1,
        num: "02",
        label: "Custom Tech Products",
        description:
            "From MVPs to full-scale platforms — we build the software that powers your business and users' experience.",
        gradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #0c4a6e 100%)",
        accent: "#06b6d4",
    },
    {
        id: 2,
        num: "03",
        label: "AI & Automation",
        description:
            "We integrate AI and automation into your workflows so your business runs faster with less manual effort.",
        gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #78350f 100%)",
        accent: "#f59e0b",
    },
];

// Position slots: [front, mid, back]
// rotateY gives the 3D Z-angle on back cards (requires perspective on parent)
const slots = [
    { x: 0, y: 0, rotateZ: 0, rotateY: 0, scale: 1, zIndex: 30, opacity: 1 }, // front
    { x: -72, y: 22, rotateZ: -6, rotateY: 18, scale: 0.88, zIndex: 20, opacity: 0.85 }, // mid
    { x: 55, y: 42, rotateZ: 10, rotateY: -22, scale: 0.76, zIndex: 10, opacity: 0.70 }, // back
];

export function ImmersiveServices() {
    const [order, setOrder] = useState([0, 1, 2]);
    const [paused, setPaused] = useState(false);
    const pausedRef = useRef(false);

    useEffect(() => {
        const t = setInterval(() => {
            if (!pausedRef.current) {
                setOrder(([a, b, c]) => [b, c, a]);
            }
        }, 2800);
        return () => clearInterval(t);
    }, []);

    const handleMouseEnter = () => { pausedRef.current = true; setPaused(true); };
    const handleMouseLeave = () => { pausedRef.current = false; setPaused(false); };

    const activeSvc = services[order[0]];

    return (
        <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden">
            <ContentContainer>
                {/* ── Header ── */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
                        <span className="text-[11px] font-semibold font-satoshi text-neutral-300 uppercase tracking-[0.2em] leading-none mt-[1px]">
                            OUR SERVICES
                        </span>
                    </div>
                    <CinematicBlurReveal
                        text="Powering Your Next Stage"
                        as="h2"
                        className="text-3xl md:text-6xl font-bold font-satoshi text-white mb-4 md:mb-6 leading-tight"
                    />
                    <p className="text-md text-zinc-400 font-satoshi max-w-xl mx-auto leading-relaxed">
                        Explore our solutions — crafted for reliability, scalability, and success.
                    </p>
                </motion.div>

                {/* ── 3D Card Deck — perspective enables the rotateY depth ── */}
                <motion.div
                    className="relative mx-auto flex items-center justify-center"
                    style={{ height: 340, width: 300, perspective: "900px" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                    {order.map((svcId, slotIdx) => {
                        const svc = services[svcId];
                        const pos = slots[slotIdx];

                        return (
                            <motion.div
                                key={svcId}
                                className="absolute rounded-2xl border border-white/10 overflow-hidden"
                                style={{
                                    width: 240,
                                    height: 310,
                                    background: svc.gradient,
                                    boxShadow: `0 24px 60px -12px ${svc.accent}55`,
                                    transformStyle: "preserve-3d",
                                }}
                                animate={pos}
                                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                            />
                        );
                    })}
                </motion.div>

                {/* ── Pill + description ── */}
                <motion.div
                    className="flex flex-col items-center text-center mt-10 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/20 bg-white/[0.05] mb-6">
                        <span className="text-xs font-satoshi text-white/40 font-semibold tracking-widest">
                            {activeSvc.num}
                        </span>
                        <span className="w-px h-3 bg-white/20" />
                        <span className="text-sm font-satoshi font-semibold text-white tracking-wide">
                            {activeSvc.label}
                        </span>
                    </div>

                    <motion.p
                        key={`desc-${order[0]}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.06 }}
                        className="text-sm font-satoshi text-neutral-400 leading-relaxed"
                    >
                        {activeSvc.description}
                    </motion.p>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-2 mt-8">
                        {services.map((svc) => {
                            const isActive = order[0] === svc.id;
                            return (
                                <button
                                    key={svc.id}
                                    className="h-1.5 rounded-full transition-all duration-500"
                                    style={{
                                        width: isActive ? 32 : 6,
                                        background: isActive ? activeSvc.accent : "rgba(255,255,255,0.2)",
                                    }}
                                />
                            );
                        })}
                    </div>
                </motion.div>
            </ContentContainer>
        </section>
    );
}
