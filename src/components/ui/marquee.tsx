"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    slowOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    speed?: number; // Speed in pixels per second roughly, or arbitrary units
    [key: string]: any;
}

export function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    slowOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    speed = 50,
    ...props
}: MarqueeProps) {
    const [containerSize, setContainerSize] = useState(0);
    const [contentSize, setContentSize] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const calculateDuration = () => {
            if (containerRef.current && contentRef.current) {
                const size = vertical
                    ? contentRef.current.offsetHeight
                    : contentRef.current.offsetWidth;
                setContentSize(size);
                setContainerSize(
                    vertical
                        ? containerRef.current.offsetHeight
                        : containerRef.current.offsetWidth
                );

                // Calculate duration based on speed (pixels per second)
                // Time = Distance / Speed
                const newDuration = size / speed;
                setDuration(newDuration);
            }
        };

        calculateDuration();
        window.addEventListener("resize", calculateDuration);
        return () => window.removeEventListener("resize", calculateDuration);
    }, [vertical, speed, children]);

    return (
        <div
            ref={containerRef}
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        ref={i === 0 ? contentRef : null}
                        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                            "group-hover:[animation-duration:100s]": slowOnHover, // Drastically increase duration to simulate slow down
                            "[animation-direction:reverse]": reverse,
                        })}
                        style={
                            {
                                "--marquee-duration": `${duration}s`,
                            } as React.CSSProperties
                        }
                    >
                        {children}
                    </div>
                ))}
            {/* We need to define the keyframes globally or in a module. 
            Since we are in a single component file, let's inject styles or rely on tailwind config.
            Assuming standard tailwind config might not have these keyframes, 
            we can use a style tag or rely on `animate-` utility classes if they existed.
            Use inline style for animation definition to be safe/self-contained.
         */}
            <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        @keyframes marquee-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(-100% - var(--gap)));
          }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .animate-marquee-vertical {
          animation: marquee-vertical var(--marquee-duration) linear infinite;
        }
      `}</style>
        </div>
    );
}
