'use client';

import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import Image from 'next/image';

export function PreFooterSection() {
    return (
        <section className="py-12 md:py-16 bg-black px-6 md:px-12 lg:px-16">
            <div className="relative rounded-3xl overflow-hidden">

                {/* Background image — place your file at public/prefooter-bg.jpeg */}
                <Image
                    src="/prefooter-bg.jpeg"
                    alt="Section background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Thin dark overlay so text stays readable */}
                <div className="absolute inset-0 bg-black/50" />

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
