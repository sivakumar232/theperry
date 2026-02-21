"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { PremiumButton } from "@/components/ui/premium-button";
import { ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";


export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [backgroundStyle, setBackgroundStyle] = useState({});
    const navRef = useRef<HTMLDivElement>(null);
    const isScrolled = useScrollPosition(20);

    const navItems = [
        { name: "Process", href: "#process" },
        { name: "Services", href: "#services" },
        { name: "FAQ", href: "#faq" },
        { name: "Why Us", href: "#why-us" }
    ];

    useEffect(() => {
        if (hoveredIndex !== null && navRef.current) {
            const navElement = navRef.current;
            const linkElements = navElement.querySelectorAll('a');
            const hoveredElement = linkElements[hoveredIndex];

            if (hoveredElement) {
                const rect = hoveredElement.getBoundingClientRect();
                const navRect = navElement.getBoundingClientRect();

                setBackgroundStyle({
                    transform: `translateX(${rect.left - navRect.left}px)`,
                    width: `${rect.width}px`,
                    opacity: 1,
                });
            }
        } else {
            setBackgroundStyle({
                opacity: 0,
            });
        }
    }, [hoveredIndex]);

    return (
        <>
            <nav
                className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-xl border-2 transition-all duration-300 max-w-2xl w-[calc(100%-2rem)] md:w-full shadow-lg
                ${isScrolled
                        ? "bg-black/50 backdrop-blur-md border-white/20 shadow-black/10"
                        : "bg-black/95 backdrop-blur-sm border-white/20 shadow-black/5"
                    }`}
            >
                <div className="px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16 md:h-14 w-full">

                        {/* Logo - Left column */}
                        <div className="flex justify-start">
                            <Link
                                href="/"
                                className="text-lg font-bold font-satoshi tracking-tight text-white hover:text-white/80 transition-colors duration-200"
                            >
                                theperry.
                            </Link>
                        </div>

                        {/* Desktop Navigation - Center column */}
                        <div
                            ref={navRef}
                            className="hidden md:flex items-center justify-center space-x-3 relative"
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Animated hover background pill */}
                            <div
                                className="absolute top-0 left-0 h-full bg-white/10 rounded-full transition-all duration-300 ease-out pointer-events-none"
                                style={backgroundStyle}
                            />
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-3 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors duration-200 z-10 whitespace-nowrap"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right column — CTA on desktop, hamburger on mobile */}
                        <div className="flex justify-end items-center">
                            {/* Desktop CTA */}
                            <Link
                                href="https://cal.com/theperry/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200 shadow-sm group"
                            >
                                Let's Talk
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed top-[5.5rem] left-4 right-4 z-40 md:hidden rounded-2xl border border-white/20 bg-black/95 backdrop-blur-md shadow-xl overflow-hidden"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="p-6">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                                className="flex flex-col space-y-4"
                            >
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-lg font-medium text-white hover:text-white/70 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className="pt-2"
                                >
                                    <Link
                                        href="https://cal.com/theperry/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center w-full px-6 py-3 text-base font-medium rounded-xl bg-white text-black hover:bg-white/90 transition-all duration-300"
                                    >
                                        Let's Talk
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
