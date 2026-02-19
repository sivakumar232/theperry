"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const navLinks = {
    navigate: [
        { label: "Home", href: "#hero" },
        { label: "Why Us", href: "#why-us" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "FAQ", href: "#faq" },
    ],
    services: [
        { label: "Web Development", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "SEO Optimization", href: "#services" },
        { label: "Growth Strategy", href: "#services" },
    ],
    company: [
        { label: "Contact us", href: "/contact" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
    ],
    social: [
        { label: "Twitter / X", href: "https://twitter.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "GitHub", href: "https://github.com" },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");

    return (
        <>
            {/* Pre-Footer CTA Card */}
            <section className="py-12 md:py-16 bg-black px-6 md:px-12 lg:px-16">
                <div className="relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#0a0a0a]" />
                    <div
                        className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-60 blur-3xl pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(20,180,80,0.55) 0%, rgba(10,90,40,0.2) 60%, transparent 100%)' }}
                    />
                    <div
                        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(20,160,70,0.4) 0%, transparent 70%)' }}
                    />
                    <div
                        className="absolute inset-0 pointer-events-none opacity-30"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
                            backgroundSize: '28px 28px',
                        }}
                    />
                    <div className="relative z-10 py-24 md:py-32 px-8 md:px-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 max-w-2xl mx-auto"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-white leading-tight">
                                Ready to dive in?
                            </h2>
                            <p className="text-base md:text-lg text-neutral-300 font-satoshi">
                                Let&apos;s build something great together — fast, precise, and built for impact.
                            </p>
                            <div className="pt-2">
                                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold font-satoshi rounded-full hover:bg-neutral-100 transition-colors shadow-lg">
                                    <PhoneCall className="w-4 h-4" />
                                    Book a Free Call
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer className="relative w-full overflow-hidden bg-[#080808]">
                {/* Dot pattern background */}
                <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                {/* Newsletter Section */}
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
                        {/* Left — big branding text */}
                        <div>
                            <span className="flex items-center gap-2 text-xs font-semibold font-satoshi text-neutral-500 uppercase tracking-widest mb-5">
                                <span className="w-2 h-2 rounded-full bg-white inline-block" />
                                Get in touch
                            </span>
                            <p className="text-4xl md:text-5xl font-bold font-satoshi text-white leading-[1.15]">
                                The fastest way to build your{" "}
                                <span className="text-neutral-400">digital presence.</span>
                            </p>
                        </div>

                        {/* Right — email input aligned to bottom */}
                        <div className="flex flex-col justify-end">
                            <span className="flex items-center gap-2 text-xs font-semibold font-satoshi text-neutral-500 uppercase tracking-widest mb-4">
                                <span className="w-2 h-2 rounded-full bg-white inline-block" />
                                E-MAIL
                            </span>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm font-satoshi text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                                />
                                <button
                                    className="px-5 py-3 bg-white text-black text-sm font-semibold font-satoshi rounded-lg hover:bg-neutral-100 transition-colors whitespace-nowrap"
                                    onClick={() => setEmail("")}
                                >
                                    Subscribe →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nav Columns */}
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
                        {/* Logo */}
                        <div className="col-span-2 md:col-span-1">
                            <Link href="/" className="inline-block mb-3">
                                <span className="text-2xl font-bold font-satoshi text-white">
                                    theperry.
                                </span>
                            </Link>
                            <p className="text-xs text-neutral-500 font-satoshi leading-relaxed max-w-[160px]">
                                Premium digital products for ambitious teams.
                            </p>
                        </div>

                        {/* Navigate */}
                        <div>
                            <p className="text-xs font-semibold font-satoshi text-white uppercase tracking-widest mb-5">
                                Navigate
                            </p>
                            <ul className="space-y-3">
                                {navLinks.navigate.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm font-satoshi text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <p className="text-xs font-semibold font-satoshi text-white uppercase tracking-widest mb-5">
                                Services
                            </p>
                            <ul className="space-y-3">
                                {navLinks.services.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm font-satoshi text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <p className="text-xs font-semibold font-satoshi text-white uppercase tracking-widest mb-5">
                                Company
                            </p>
                            <ul className="space-y-3">
                                {navLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm font-satoshi text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <p className="text-xs font-semibold font-satoshi text-white uppercase tracking-widest mb-5">
                                Social media
                            </p>
                            <ul className="space-y-3">
                                {navLinks.social.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-satoshi text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
                        <p className="text-sm font-satoshi text-white">
                            © {currentYear} theperry. All rights reserved.
                        </p>
                        <a
                            href="mailto:hello@theperry.com"
                            className="text-sm font-satoshi text-white transition-colors"
                        >
                            hello@theperry.com
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
