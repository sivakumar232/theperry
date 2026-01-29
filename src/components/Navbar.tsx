"use client";
import Link from "next/link";
import { SketchyLink } from "@/components/ui/sketchy-link";

import { ShinyButton } from "@/components/ui/shiny-button";

export default function Navbar() {
    const navLinks = [
        { name: "Our Work", href: "/#work" },
        { name: "Our Services", href: "/#services" },
        { name: "Our Campaigns", href: "/#campaigns" },
        { name: "About", href: "/#about" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-beige/5">
            <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
                {/* Left: Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold font-clash tracking-tight text-beige hover:text-beige/90 transition-colors"
                >
                    The Perry.
                </Link>

                {/* Middle: Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <SketchyLink
                            key={link.name}
                            href={link.href}
                            className="text-md font-medium font-clash text-beige"
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

