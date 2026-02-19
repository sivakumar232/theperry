'use client';

import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export function PreFooterSection() {
    return (
        <section className="py-12 md:py-16 bg-black px-6 md:px-12 lg:px-16">
            {/* Rounded card with dark gradient background */}
            <div className="relative rounded-3xl overflow-hidden">

                {/* Dark background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />

                {/* Gradient blobs */}
                <div
                    className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-60 blur-3xl pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(20,180,80,0.55) 0%, rgba(10,90,40,0.2) 60%, transparent 100%)',
                    }}
                />
                <div
                    className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(20,160,70,0.4) 0%, transparent 70%)',
                    }}
                />

                {/* Subtle dot pattern */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />

                {/* Content */}
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
                            Let's build something great together — fast, precise, and built for impact.
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
    );
}
