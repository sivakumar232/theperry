"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface ShineButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export function ShineButton({ children, href, onClick, className = "" }: ShineButtonProps) {
    const ButtonContent = (
        <div className="relative overflow-hidden group">
            {/* Background & Base Styles */}
            <div className={`relative px-8 py-3 bg-zinc-900 border border-zinc-800 text-white font-satoshi font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-500/20 ${className}`}>

                {/* Shine Element */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] z-10">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
                </div>

                {/* Content */}
                <span className="relative z-20 flex items-center justify-center gap-2">
                    {children}
                </span>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                {ButtonContent}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className="inline-block">
            {ButtonContent}
        </button>
    );
}
