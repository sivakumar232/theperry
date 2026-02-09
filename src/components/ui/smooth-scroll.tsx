"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.0, // Smoother scrolling
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.0, // Normal wheel speed to prevent overshooting
            touchMultiplier: 1.5, // Reduced touch multiplier
            infinite: false,
            autoResize: true,
            lerp: 0.1, // Lower lerp for smoother deceleration at boundaries
        });

        lenisRef.current = lenis;

        // Optimized RAF loop
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        // Handle resize for responsive behavior
        const handleResize = () => {
            lenis.resize();
        };
        window.addEventListener("resize", handleResize);

        // Ensure Lenis doesn't interfere with anchor links
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a[href^='#']");
            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href && href.startsWith("#")) {
                    e.preventDefault();
                    const element = document.querySelector(href) as HTMLElement | null;
                    if (element) {
                        lenis.scrollTo(element, {
                            offset: 0,
                            duration: 1.2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        });
                    }
                }
            }
        };
        document.addEventListener("click", handleClick);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return <>{children}</>;
}
