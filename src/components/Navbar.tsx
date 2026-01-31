"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SketchyLink } from "@/components/ui/sketchy-link";
import { PremiumButton } from "@/components/ui/premium-button";
import { ArrowUpRight } from "lucide-react";

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



    return (
        <nav
            className={`fixed top-6 left-0 right-0 mx-auto max-w-7xl px-6 z-50 transition-all duration-500 ${isHidden ? "opacity-0 -translate-y-[150%] pointer-events-none" : "opacity-100 translate-y-0"
                }`}
        >
            <div className="flex items-center justify-between h-14">
                {/* Left: Logo */}
                <Link
                    href="/"
                    className="text-lg font-bold font-satoshi tracking-tight text-beige hover:text-beige/90 transition-colors"
                >
                    theperry.
                </Link>

                {/* Middle: Navigation Links in Pill */}


                {/* Right: CTA Button */}
                <div className="group">
                    <PremiumButton
                        href="/contact"
                        variant="primary"
                        className="!px-5 !py-3 !text-xs"
                    >
                        <span className="flex items-center gap-1">
                            Let's Talk <div className="flex items-center justify-center border border-black rounded-full bg-black h-6 w-6"><ArrowUpRight className="text-white w-3 h-3" /></div>
                        </span>
                    </PremiumButton>
                </div>
            </div>
        </nav>
    );
}
