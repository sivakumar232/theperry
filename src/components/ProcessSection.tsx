"use client";

import React, { useState } from "react";
import { ContentContainer } from "./ui/ContentContainer";

const steps = [
    {
        title: "Discovery & Strategy",
        description: "We start by understanding your vision, goals, and challenges. Through collaborative sessions, we define the project scope and create a strategic roadmap.",
        image: "/process-1.jpg"
    },
    {
        title: "Design & Development",
        description: "Our team brings your vision to life with modern design and clean code. We iterate quickly, keeping you involved at every stage.",
        image: "/process-2.jpg"
    },
    {
        title: "Launch & Growth",
        description: "We deploy your product with confidence and continue optimizing for performance and user experience. Your success is our success.",
        image: "/process-3.jpg"
    }
];

export function ProcessSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 md:py-32 bg-black relative">
            <ContentContainer>
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-white mb-4">
                        How We Work Together
                    </h2>
                    <p className="text-lg text-gray-400 font-satoshi max-w-2xl mx-auto">
                        A simple, collaborative process that turns your ideas into reality
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-5xl mx-auto justify-items-center">
                    {/* Left Side - Steps */}
                    <div className="space-y-4 w-full">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-6 rounded-xl transition-all duration-200 will-change-auto ${activeStep === index
                                    ? 'bg-zinc-900 border border-zinc-700 scale-105'
                                    : 'bg-zinc-900/30 border border-transparent hover:bg-zinc-900/50'
                                    }`}
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                {/* Step Title - Removed whileInView animation */}
                                <h3
                                    className={`text-2xl font-bold font-satoshi mb-2 transition-colors duration-200 ${activeStep === index ? 'text-white' : 'text-gray-500'
                                        }`}
                                >
                                    {step.title}
                                </h3>

                                {/* Step Description - Always visible */}
                                <p className={`text-base font-satoshi leading-relaxed max-w-sm transition-colors duration-200 ${activeStep === index ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Dynamic Image */}
                    <div className="relative w-full">
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto lg:mx-0">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-300 ease-out ${activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                                        }`}
                                    style={{
                                        transform: activeStep === index ? 'translateY(0)' : 'translateY(50px)'
                                    }}
                                >
                                    {/* Placeholder gradient - replace with actual images */}
                                    <div
                                        className="w-full h-full"
                                        style={{
                                            background: `linear-gradient(135deg, 
                                                ${index === 0 ? '#6366f1, #8b5cf6' :
                                                    index === 1 ? '#8b5cf6, #ec4899' :
                                                        '#ec4899, #f59e0b'})`
                                        }}
                                    >
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white/10 text-7xl font-bold">
                                                {index + 1}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}
