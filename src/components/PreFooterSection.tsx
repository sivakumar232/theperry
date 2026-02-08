'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { PhoneCall, Mail } from 'lucide-react';
import { Suspense, useRef, useState, useEffect } from 'react';

// Lazy load ShaderGradient for better performance
const ShaderGradientCanvas = dynamic(
    () => import('@shadergradient/react').then((mod) => mod.ShaderGradientCanvas),
    { ssr: false }
);
const ShaderGradient = dynamic(
    () => import('@shadergradient/react').then((mod) => mod.ShaderGradient),
    { ssr: false }
);

export function PreFooterSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer to pause rendering when not visible
    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin: '200px', // Start rendering before visible
                threshold: 0
            }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-black">
            {/* White Container with Margins and Shader Background */}
            <div className="mx-6 md:mx-12 lg:mx-16 rounded-3xl p-12 md:p-16 lg:p-24 relative overflow-hidden">
                {/* Shader Gradient Background */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    {isVisible ? (
                        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-gray-500 to-purple-300" />}>
                            <ShaderGradientCanvas
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                }}
                                pixelDensity={0.8}
                                fov={45}
                            >
                                <ShaderGradient
                                    brightness={1.2}
                                    cAzimuthAngle={180}
                                    cDistance={3.61}
                                    cPolarAngle={90}
                                    cameraZoom={1}
                                    color1="#64b4ff"
                                    color2="#5c6c7c"
                                    color3="#d0bce1"
                                    envPreset="city"
                                    grain="on"
                                    lightType="3d"
                                    positionX={-1.4}
                                    positionY={0}
                                    positionZ={0}
                                    reflection={0.1}
                                    rotationX={0}
                                    rotationY={10}
                                    rotationZ={50}
                                    type="waterPlane"
                                    uAmplitude={1}
                                    uDensity={1.3}
                                    uFrequency={5.5}
                                    uSpeed={0.3}
                                    uStrength={4}
                                />
                            </ShaderGradientCanvas>
                        </Suspense>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-gray-500 to-purple-300" />
                    )}
                </div>

                {/* Content Layer */}
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-satoshi text-white leading-tight">
                            Ready to Elevate Your Digital Presence?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 font-switcher max-w-3xl mx-auto leading-relaxed">
                            Let's turn your vision into reality with designs that inspire, strategies that work, and development that delivers. Partner with us to make your mark online.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                    >
                        {/* Book a Call Button */}
                        <button className="group relative px-8 py-4 bg-white text-black font-satoshi font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 will-change-transform">
                            <PhoneCall className="w-5 h-5" />
                            <span>Book a Call</span>
                        </button>

                        {/* Email Us Button */}
                        <button className="group relative px-8 py-4 bg-white/10 text-white font-satoshi font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 will-change-transform">
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
