"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

const services = [
    {
        id: 1,
        title: "Websites & Digital Presence",
        tagline: "Let's build your online home",
        description: "We'll create a beautiful website that feels just right for your brand — one that welcomes visitors and turns them into happy customers.",
        benefits: ["Business & Corporate Websites", "Startup Websites", "Personal & Portfolio Sites", "Website Redesigns"],
        details: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile-First Approach"]
    },
    {
        id: 2,
        title: "Custom Web Apps",
        tagline: "Your idea, built right",
        description: "Got a bigger vision? We love building dashboards, portals, and tools that make life easier for you and your users.",
        benefits: ["MVP Development", "Dashboards & Admin Panels", "Client / User Portals", "SaaS Platforms", "Backend Systems & APIs"],
        details: ["Scalable Architecture", "User Authentication", "Real-time Features", "API Integration"]
    },
    {
        id: 3,
        title: "Speed & Performance",
        tagline: "Fast, reliable, ready to grow",
        description: "Slow websites lose customers. We'll make sure yours loads quickly, runs smoothly, and can handle whatever growth comes your way.",
        benefits: ["Website & App Optimization", "Backend & Database Tuning", "Scalability Planning", "Cloud Setup & Deployment"],
        details: ["Performance Audits", "Code Optimization", "CDN Setup", "Monitoring & Alerts"]
    },
];

// Service Card Component with Hover Reveal
function ServiceCard({ service, index, total, isMobile }: { 
    service: typeof services[0], 
    index: number, 
    total: number, 
    isMobile: boolean 
}) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div
            className="flex-shrink-0 w-[80vw] h-full flex items-center justify-center relative overflow-hidden"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Content */}
            <motion.div 
                className="relative z-10 max-w-3xl px-6 md:px-12 text-center md:text-left"
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {/* Animated Counter */}
                <motion.p 
                    className="text-xs font-satoshi text-gray-400 uppercase tracking-widest mb-3"
                    key={index}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </motion.p>

                {/* Title with floating animation */}
                <motion.h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-satoshi font-bold text-white leading-none mb-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    {service.title}
                </motion.h2>

                {/* Tagline with subtle float */}
                <motion.p 
                    className="text-lg md:text-xl font-satoshi font-medium text-gray-300 italic mb-6"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    {service.tagline}
                </motion.p>

                {/* Description */}
                <motion.p 
                    className="text-sm md:text-base font-satoshi text-gray-300 max-w-xl mb-8 leading-relaxed mx-auto md:mx-0"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    {service.description}
                </motion.p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                    {service.benefits.map((benefit, i) => (
                        <motion.span
                            key={benefit}
                            className="px-3 py-1.5 text-xs font-satoshi text-gray-300 bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 hover:border-gray-500 transition-all duration-200 shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {benefit}
                        </motion.span>
                    ))}
                </div>

                {/* Hover Reveal Details */}
                <AnimatePresence>
                    {(isHovered || isMobile) && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-8"
                        >
                            <h4 className="text-sm font-satoshi font-semibold text-white mb-3">What's Included:</h4>
                            <ul className="space-y-2">
                                {service.details.map((detail, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="text-sm text-gray-300 flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0" />
                                        {detail}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA with icon animation */}
                <motion.button 
                    className="group inline-flex items-center gap-2 text-white font-satoshi font-medium text-sm hover:gap-3 transition-all duration-300 hover:text-gray-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Explore This Service</span>
                    <motion.svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform"
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

export function ImmersiveServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Check for mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Update current index based on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            const newIndex = Math.floor(latest * services.length);
            setCurrentIndex(Math.min(newIndex, services.length - 1));
        });
        return unsubscribe;
    }, [scrollYProgress]);

    const totalScrollPercent = (services.length - 1) * 80;
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalScrollPercent}%`]);

    return (
        <>
            {/* Section Header - Above the sticky content */}
            <div className="py-16 md:py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold font-satoshi text-white mb-3">
                        Our <span className="text-gray-300 italic font-normal">Services</span>
                    </h2>
                    <p className="text-base text-gray-400 font-satoshi max-w-xl mx-auto">
                        Everything you need to build and grow your digital presence
                    </p>
                </div>
            </div>

            <section
                ref={containerRef}
                id="services"
                className="relative bg-black"
                style={{ height: isMobile ? 'auto' : `${services.length * 40}vh` }}
            >
                
                {/* Mobile: Vertical Scroll */}
                {isMobile && (
                    <div className="py-12 px-6">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 hover:border-gray-600 hover:shadow-sm transition-all duration-300"
                                >
                                    <ServiceCard 
                                        service={service} 
                                        index={index} 
                                        total={services.length} 
                                        isMobile={true}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Desktop/Tablet: Horizontal Scroll */}
                {!isMobile && (
                    <div className="sticky top-0 h-screen overflow-hidden bg-black">
                        {/* Progress Bar */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-accent-primary origin-left z-20"
                            style={{ scaleX: scrollYProgress }}
                        />

                        {/* Main content */}
                        <motion.div
                            className="flex h-full"
                            style={{ x }}
                        >
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    index={index}
                                    total={services.length}
                                    isMobile={false}
                                />
                            ))}
                        </motion.div>

                        {/* Animated Counter */}
                        <motion.div className="absolute bottom-6 left-6 z-20">
                            <motion.span
                                key={currentIndex}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                className="text-sm text-gray-400 font-satoshi"
                            >
                                {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                            </motion.span>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute bottom-6 right-6 z-20 flex flex-col items-center gap-1.5 text-gray-400"
                        >
                            <span className="text-xs font-satoshi">Scroll</span>
                            <motion.div
                                className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5"
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <motion.div
                                    className="w-0.5 h-1.5 bg-white rounded-full"
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </section>
        </>
    );
}