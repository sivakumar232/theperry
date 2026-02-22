"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MouseTooltipProps {
    label: string;
    children: React.ReactNode;
    className?: string;
}

export function MouseTooltip({ label, children, className }: MouseTooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLSpanElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const calculatePosition = (mouseX: number, mouseY: number) => {
        if (!tooltipRef.current || !containerRef.current)
            return { x: mouseX + 14, y: mouseY - 46 };

        const tooltipW = tooltipRef.current.offsetWidth || 180;
        const tooltipH = tooltipRef.current.offsetHeight || 36;
        const containerRect = containerRef.current.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        let finalX = mouseX + 14;
        let finalY = mouseY - tooltipH - 10;

        // Clamp right
        if (containerRect.left + finalX + tooltipW > vw)
            finalX = mouseX - tooltipW - 14;
        // Clamp left
        if (containerRect.left + finalX < 0)
            finalX = -containerRect.left + 8;
        // Clamp top — flip below cursor if not enough room
        if (containerRect.top + finalY < 0)
            finalY = mouseY + 10;

        return { x: finalX, y: finalY };
    };

    const update = (mouseX: number, mouseY: number) => {
        setMouse({ x: mouseX, y: mouseY });
        setPosition(calculatePosition(mouseX, mouseY));
    };

    // Recalculate when tooltip mounts (sizes may change)
    useEffect(() => {
        if (isVisible) setPosition(calculatePosition(mouse.x, mouse.y));
    }, [isVisible]);

    const fromEvent = (e: React.MouseEvent<HTMLSpanElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    return (
        <span
            ref={containerRef}
            className={`relative inline-block ${className ?? ""}`}
            onMouseEnter={(e) => { const p = fromEvent(e); update(p.x, p.y); setIsVisible(true); }}
            onMouseLeave={() => setIsVisible(false)}
            onMouseMove={(e) => { if (isVisible) { const p = fromEvent(e); update(p.x, p.y); } }}
        >
            {children}

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        ref={tooltipRef}
                        className="pointer-events-none absolute z-[9999] px-3 py-1.5 rounded-lg text-xs font-satoshi font-medium text-white/85 whitespace-nowrap"
                        style={{
                            left: position.x,
                            top: position.y,
                            background: "rgba(14,14,14,0.92)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
                        }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                        {label}
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}
