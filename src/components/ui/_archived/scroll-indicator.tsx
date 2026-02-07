"use client";

import { motion } from "motion/react";

export function ScrollIndicator({ href }: { href: string }) {
    return (
        <motion.a
            href={href}
            className="mt-12 inline-flex flex-col items-center gap-2 text-text-tertiary hover:text-text-secondary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <span className="text-xs font-satoshi uppercase tracking-wider">Scroll</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </motion.a>
    );
}
