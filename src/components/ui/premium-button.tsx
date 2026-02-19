"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";

interface PremiumButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    hoverText?: React.ReactNode;
}

export function PremiumButton({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    hoverText,
}: PremiumButtonProps) {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Shine position
    const shineX = useMotionValue(-100);

    // Idle Pulse for Primary buttons
    const [isIdle, setIsIdle] = useState(true);

    useEffect(() => {
        if (isHovered) {
            setIsIdle(false);
        } else {
            // Delay returning to idle animation so it doesn't snap back instantly
            const timeout = setTimeout(() => setIsIdle(true), 1000);
            return () => clearTimeout(timeout);
        }
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Trigger shine sweep
        shineX.set(-100);
        setTimeout(() => shineX.set(200), 50);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-satoshi font-bold text-sm rounded-full overflow-hidden transition-all duration-300 isolate";

    const variantStyles = {
        primary: "bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]",
        secondary: "bg-neutral-800 text-white border border-neutral-600 hover:bg-neutral-700 hover:border-neutral-500",
        outline: "bg-transparent text-white border border-neutral-600 hover:border-white hover:bg-neutral-900",
    };

    const ButtonContent = (
        <>
            {/* Shine sweep effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent)",
                    x: useTransform(shineX, (v) => `${v}%`),
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            />

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none -z-10"
                animate={{
                    boxShadow: isHovered
                        ? variant === "primary"
                            ? "0 0 50px rgba(255,255,255,0.3), inset 0 0 20px rgba(0,0,0,0.1)"
                            : "0 0 30px rgba(255,255,255,0.1)"
                        : isIdle && variant === "primary"
                            ? ["0 0 0px rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.2)", "0 0 0px rgba(255,255,255,0)"]
                            : "0 0 0px transparent",
                }}
                transition={{
                    boxShadow: { duration: 0.3 },
                    default: { repeat: isIdle ? Infinity : 0, duration: 3, ease: "easeInOut", repeatDelay: 1 }
                }}
            />

            {/* Content Swapper */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {/* Hover Text (Absolute, visible on hover) */}
                {hoverText && (
                    <motion.span
                        className="absolute inset-0 flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 20,
                            filter: isHovered ? "blur(0px)" : "blur(4px)"
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        aria-hidden={!isHovered}
                    >
                        {hoverText}
                    </motion.span>
                )}

                {/* Normal Text (Relative, visible when not hovered, dictates width) */}
                <motion.span
                    className="flex items-center gap-2"
                    animate={{
                        opacity: isHovered && hoverText ? 0 : 1,
                        y: isHovered && hoverText ? -20 : 0,
                        filter: isHovered && hoverText ? "blur(4px)" : "blur(0px)"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    {children}
                </motion.span>
            </span>
        </>
    );

    const motionProps = {
        ref: buttonRef as React.RefObject<HTMLButtonElement>,
        className: `${baseStyles} ${variantStyles[variant]} ${className}`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 25 } as any,
    };

    if (href) {
        return (
            <motion.a
                {...motionProps}
                ref={buttonRef as React.RefObject<HTMLAnchorElement>}
                href={href}
            >
                {ButtonContent}
            </motion.a>
        );
    }

    return (
        <motion.button {...motionProps} onClick={onClick}>
            {ButtonContent}
        </motion.button>
    );
}
