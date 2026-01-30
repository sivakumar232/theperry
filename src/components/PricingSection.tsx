"use client";

import React from "react";
import { motion } from "motion/react";

const plans = [
    {
        name: "Starter",
        price: "$2,000",
        description: "Perfect for landing pages and MVPs",
        timeline: "2 weeks",
        features: [
            "1 page design",
            "Mobile responsive",
            "2 revision rounds",
            "Basic SEO setup",
            "Contact form",
            "14 days support",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Growth",
        price: "$4,500",
        description: "Ideal for small business websites",
        timeline: "4 weeks",
        features: [
            "Up to 5 pages",
            "Custom design",
            "CMS integration",
            "5 revision rounds",
            "Full SEO optimization",
            "Blog setup",
            "Analytics integration",
            "30 days support",
        ],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Scale",
        price: "$8,000+",
        description: "For complex web applications",
        timeline: "6-8 weeks",
        features: [
            "Unlimited pages",
            "Custom functionality",
            "E-commerce ready",
            "Advanced integrations",
            "Performance optimization",
            "Unlimited revisions",
            "Priority support",
            "90 days support",
        ],
        cta: "Let's Talk",
        popular: false,
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="py-20 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi text-beige mb-4">
                        Transparent{" "}
                        <span className="text-beige/70 italic font-normal">Pricing</span>
                    </h2>
                    <p className="text-lg text-beige/60 font-satoshi max-w-2xl mx-auto">
                        No hidden fees. No surprises. Just honest pricing for exceptional work.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${plan.popular
                                ? "bg-gradient-to-b from-white/10 to-transparent border-2 border-beige/50 scale-[1.02]"
                                : "bg-white/5 border border-white/10 hover:border-white/20"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1.5 bg-beige text-background text-sm font-satoshi font-semibold rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-xl font-bold font-satoshi text-beige mb-2">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="text-4xl lg:text-5xl font-bold font-satoshi text-beige">
                                    {plan.price}
                                </span>
                                <span className="text-beige/50 font-satoshi ml-2">
                                    / {plan.timeline}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-beige/60 font-satoshi mb-6">
                                {plan.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-sm font-satoshi text-beige/80"
                                    >
                                        <svg
                                            className="w-5 h-5 text-beige/60 flex-shrink-0 mt-0.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <a
                                href="/contact"
                                className={`block w-full py-3 text-center font-satoshi font-semibold rounded-full transition-all ${plan.popular
                                    ? "bg-beige text-background hover:bg-beige/90"
                                    : "bg-white/10 text-beige hover:bg-white/20"
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Included Note */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-sm text-beige/50 font-satoshi">
                        All plans include: Design + Development + Hosting setup + Free support period
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
