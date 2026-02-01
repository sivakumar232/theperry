"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.7, // Faster, snappier scrolling
            easing: (t) => 1 - Math.pow(1 - t, 3), // Simpler cubic ease-out
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.5, // Slightly faster wheel
            touchMultiplier: 2.0,
            infinite: false,
            autoResize: true,
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
