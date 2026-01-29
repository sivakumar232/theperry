"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.5, // Very slow, heavy scroll
            easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out for "heavy" feel
            wheelMultiplier: 0.8, // Reduce wheel speed for more control
            touchMultiplier: 1.5,
            infinite: false,
            autoResize: true,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Also handle keyboard navigation
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp" ||
                e.key === "PageDown" || e.key === "PageUp" ||
                e.key === " " || e.key === "Home" || e.key === "End") {
                // Let Lenis handle these naturally
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            lenis.destroy();
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return <>{children}</>;
}

