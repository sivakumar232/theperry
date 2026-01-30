"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";

interface PremiumButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export function PremiumButton({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
}: PremiumButtonProps) {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    // Shine position
    const shineX = useMotionValue(-100);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.15;
        const deltaY = (e.clientY - centerY) * 0.15;
        x.set(deltaX);
        y.set(deltaY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Trigger shine sweep
        shineX.set(-100);
        setTimeout(() => shineX.set(200), 50);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-satoshi font-semibold text-sm rounded-full overflow-hidden transition-all duration-300";

    const variantStyles = {
        primary: "bg-beige text-background hover:shadow-[0_0_30px_rgba(254,251,227,0.3)]",
        secondary: "bg-white/10 text-beige border border-white/20 hover:bg-white/15 hover:border-white/30",
        outline: "bg-transparent text-beige border border-beige/50 hover:border-beige hover:bg-beige/5",
    };

    const ButtonContent = (
        <>
            {/* Shine sweep effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    x: useTransform(shineX, (v) => `${v}%`),
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{
                    boxShadow: isHovered
                        ? variant === "primary"
                            ? "0 0 40px rgba(254,251,227,0.4), inset 0 0 20px rgba(255,255,255,0.1)"
                            : "0 0 30px rgba(254,251,227,0.2)"
                        : "0 0 0px transparent",
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </>
    );

    const motionProps = {
        ref: buttonRef as React.RefObject<HTMLButtonElement>,
        className: `${baseStyles} ${variantStyles[variant]} ${className}`,
        style: { x: springX, y: springY },
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 25 },
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
