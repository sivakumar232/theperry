"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SketchyLink } from "@/components/ui/sketchy-link";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
                const rect = servicesSection.getBoundingClientRect();
                const isInServicesSection = rect.top <= 0 && rect.bottom > window.innerHeight;
                setIsHidden(isInServicesSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Process", href: "/#process" },
        { name: "About", href: "/#about" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-beige/5 transition-all duration-500 ${isHidden ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Left: Logo */}
                <Link
                    href="/"
                    className="text-lg font-bold font-satoshi tracking-tight text-beige hover:text-beige/90 transition-colors"
                >
                    theperry.
                </Link>

                {/* Middle: Navigation Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <SketchyLink
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium font-satoshi text-beige/70 hover:text-beige"
                        >
                            {link.name}
                        </SketchyLink>
                    ))}
                </div>

                {/* Right: CTA Button */}
                <div>
                    <ShinyButton href="/contact">
                        Get in Touch
                    </ShinyButton>
                </div>
            </div>
        </nav>
    );
}
