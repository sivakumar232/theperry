"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ContentContainerProps {
    children: React.ReactNode;
    className?: string;
    maxWidth?: "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl";
    showMarginIndicators?: boolean;
}

export function ContentContainer({
    children,
    className,
    maxWidth = "7xl",
    showMarginIndicators = false,
}: ContentContainerProps) {
    const maxWidthClass = {
        "7xl": "max-w-7xl",
        "6xl": "max-w-6xl",
        "5xl": "max-w-5xl",
        "4xl": "max-w-4xl",
        "3xl": "max-w-3xl",
        "2xl": "max-w-2xl",
    }[maxWidth];

    return (
        <div className="relative">
            {/* Dotted Margin Indicators */}
            {showMarginIndicators && (
                <>
                    {/* Left margin line */}
                    <div
                        className="fixed left-0 top-0 bottom-0 z-[100] pointer-events-none hidden lg:block"
                        style={{
                            left: `calc((100vw - ${maxWidth === "7xl" ? "1280px" : maxWidth === "6xl" ? "1152px" : maxWidth === "5xl" ? "1024px" : maxWidth === "4xl" ? "896px" : maxWidth === "3xl" ? "768px" : "672px"}) / 2)`,
                        }}
                    >
                        <div className="w-px h-full border-l-2 border-dotted border-beige/20" />
                    </div>

                    {/* Right margin line */}
                    <div
                        className="fixed right-0 top-0 bottom-0 z-[100] pointer-events-none hidden lg:block"
                        style={{
                            right: `calc((100vw - ${maxWidth === "7xl" ? "1280px" : maxWidth === "6xl" ? "1152px" : maxWidth === "5xl" ? "1024px" : maxWidth === "4xl" ? "896px" : maxWidth === "3xl" ? "768px" : "672px"}) / 2)`,
                        }}
                    >
                        <div className="w-px h-full border-r-2 border-dotted border-beige/20" />
                    </div>
                </>
            )}

            {/* Content */}
            <div className={cn(maxWidthClass, "mx-auto px-6", className)}>
                {children}
            </div>
        </div>
    );
}
