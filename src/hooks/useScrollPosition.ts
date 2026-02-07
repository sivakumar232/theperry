import { useState, useEffect } from 'react';

// Shared scroll position state
let scrollY = 0;
const listeners = new Set<(y: number) => void>();

// Single scroll listener for entire app
if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        listeners.forEach(fn => fn(scrollY));
    }, { passive: true });
}

/**
 * Optimized hook for checking scroll position
 * Shares a single scroll listener across all components
 * @param threshold - Y position threshold to check against
 * @returns boolean indicating if scrolled past threshold
 */
export function useScrollPosition(threshold?: number): boolean {
    const [isPastThreshold, setIsPastThreshold] = useState(false);

    useEffect(() => {
        const handler = (y: number) => {
            if (threshold !== undefined) {
                setIsPastThreshold(y > threshold);
            }
        };

        listeners.add(handler);
        handler(scrollY); // Initial check

        return () => {
            listeners.delete(handler);
        };
    }, [threshold]);

    return isPastThreshold;
}
