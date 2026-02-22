"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, animate, useMotionValue } from "motion/react";
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

// Stacked deck: front on top, two cards peeking behind
const slots = [
    { x: 0, y: 0, rotateZ: 0, rotateY: 0, scale: 1, zIndex: 30, opacity: 1 }, // front
    { x: -72, y: 22, rotateZ: -6, rotateY: 18, scale: 0.88, zIndex: 20, opacity: 0.85 }, // mid
    { x: 55, y: 42, rotateZ: 10, rotateY: -22, scale: 0.76, zIndex: 10, opacity: 0.70 }, // back
];

const DRAG_THRESHOLD = 60;

function DraggableCard({
    svcId,
    slotIdx,
    onBringToFront,
    onDragStart,
    onDragEnd,
}: {
    svcId: number;
    slotIdx: number;
    onBringToFront: (slotIdx: number) => void;
    onDragStart: () => void;
    onDragEnd: () => void;
}) {
    const svc = services[svcId];
    const pos = slots[slotIdx];
    const isFront = slotIdx === 0;
    const isDraggable = !isFront;

    const dragX = useMotionValue(0);
    const dragY = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <motion.div
            drag={isDraggable}
            dragElastic={0.18}
            dragMomentum={false}
            dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
            whileHover={!isDragging ? (
                isFront
                    ? { scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 20 } }
                    : { y: pos.y - 10, scale: pos.scale + 0.04, transition: { type: "spring", stiffness: 300, damping: 20 } }
            ) : undefined}
            style={{
                x: isDraggable ? dragX : undefined,
                y: isDraggable ? dragY : undefined,
                position: "absolute",
                width: 240,
                height: 310,
                borderRadius: 16,
                background: svc.gradient,
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                cursor: isDraggable ? (isDragging ? "grabbing" : "pointer") : "default",
                transformStyle: "preserve-3d",
            }}
            animate={{
                x: isFront || isDragging ? 0 : pos.x,
                y: isFront || isDragging ? 0 : pos.y,
                rotateZ: isDragging ? 0 : pos.rotateZ,
                rotateY: isDragging ? 0 : pos.rotateY,
                scale: isDragging ? 1.04 : pos.scale,
                opacity: pos.opacity,
                zIndex: isDragging ? 50 : pos.zIndex,
                boxShadow: isDragging
                    ? `0 32px 80px -8px ${svc.accent}88`
                    : `0 24px 60px -12px ${svc.accent}55`,
            }}
            transition={{ type: "spring", stiffness: 55, damping: 18 }}
            onTap={() => {
                if (isDraggable) onBringToFront(slotIdx);
            }}
            onDragStart={() => {
                setIsDragging(true);
                onDragStart();
            }}
            onDragEnd={(_, info) => {
                setIsDragging(false);
                onDragEnd();
                const dist = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
                if (dist > DRAG_THRESHOLD) {
                    onBringToFront(slotIdx);
                } else {
                    animate(dragX, 0, { type: "spring", stiffness: 200, damping: 24 });
                    animate(dragY, 0, { type: "spring", stiffness: 200, damping: 24 });
                }
            }}
        />
    );
}

export function ImmersiveServices() {
    const [order, setOrder] = useState([0, 1, 2]);
    const pausedRef = useRef(false);

    useEffect(() => {
        const t = setInterval(() => {
            if (!pausedRef.current) {
                setOrder(([a, b, c]) => [b, c, a]);
            }
        }, 2800);
        return () => clearInterval(t);
    }, []);

    const handleMouseEnter = () => { pausedRef.current = true; };
    const handleMouseLeave = () => { pausedRef.current = false; };

    const bringToFront = (slotIdx: number) => {
        setOrder((prev) => {
            const next = [...prev];
            const [removed] = next.splice(slotIdx, 1);
            next.unshift(removed);
            return next;
        });
    };

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

                {/* ── 3D Card Deck ── */}
                <motion.div
                    className="relative mx-auto flex items-center justify-center select-none"
                    style={{ height: 340, width: 300, perspective: "900px" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                    {[...order].reverse().map((svcId, revIdx) => {
                        const slotIdx = order.length - 1 - revIdx;
                        return (
                            <DraggableCard
                                key={svcId}
                                svcId={svcId}
                                slotIdx={slotIdx}
                                onBringToFront={bringToFront}
                                onDragStart={() => { pausedRef.current = true; }}
                                onDragEnd={() => { pausedRef.current = false; }}
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
