"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const Tooltip = ({
    content,
    children,
    containerClassName,
    forceRight = false,
}: {
    content: string | React.ReactNode;
    children: React.ReactNode;
    containerClassName?: string;
    forceRight?: boolean;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [height, setHeight] = useState(0);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isVisible, content]);

    const calculatePosition = (mouseX: number, mouseY: number) => {
        if (!contentRef.current || !containerRef.current)
            return { x: mouseX + 12, y: mouseY + 12 };

        const tooltip = contentRef.current;
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const tooltipWidth = 200;
        const tooltipHeight = tooltip.scrollHeight;
        const absoluteX = containerRect.left + mouseX;
        const absoluteY = containerRect.top + mouseY;

        let finalX = mouseX + 12;
        let finalY = mouseY - tooltipHeight - 12; // default: above cursor

        if (!forceRight && absoluteX + 12 + tooltipWidth > viewportWidth) finalX = mouseX - tooltipWidth - 12;
        if (!forceRight && absoluteX + finalX < 0) finalX = -containerRect.left + 12;
        if (absoluteY + finalY < 0) finalY = mouseY + 12; // flip below if no room above
        if (absoluteY + 12 + tooltipHeight > viewportHeight) finalY = mouseY - tooltipHeight - 12;

        return { x: finalX, y: finalY };
    };

    const updateMousePosition = (mouseX: number, mouseY: number) => {
        setMouse({ x: mouseX, y: mouseY });
        setPosition(calculatePosition(mouseX, mouseY));
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsVisible(true);
        const rect = e.currentTarget.getBoundingClientRect();
        updateMousePosition(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        setMouse({ x: 0, y: 0 });
        setPosition({ x: 0, y: 0 });
        setIsVisible(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isVisible) return;
        const rect = e.currentTarget.getBoundingClientRect();
        updateMousePosition(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        updateMousePosition(touch.clientX - rect.left, touch.clientY - rect.top);
        setIsVisible(true);
    };

    const handleTouchEnd = () => {
        setTimeout(() => {
            setIsVisible(false);
            setMouse({ x: 0, y: 0 });
            setPosition({ x: 0, y: 0 });
        }, 2000);
    };

    useEffect(() => {
        if (isVisible && contentRef.current) {
            setPosition(calculatePosition(mouse.x, mouse.y));
        }
    }, [isVisible, height, mouse.x, mouse.y]);

    return (
        <div
            ref={containerRef}
            className={cn("relative inline-block", containerClassName)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="tooltip"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 220, damping: 22 }}
                        className="pointer-events-none absolute z-[9999] min-w-max overflow-hidden rounded-lg"
                        style={{
                            top: position.y,
                            left: position.x,
                            background: "rgba(10,10,10,0.92)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
                        }}
                    >
                        <div
                            ref={contentRef}
                            className="px-3 py-1.5 text-[11px] font-satoshi font-medium text-white/85 whitespace-nowrap"
                        >
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
