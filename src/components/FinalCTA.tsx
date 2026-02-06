"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "./ui/marquee";

export function FinalCTA() {
    return (
        <section className="py-12 md:pb-32 bg-black flex justify-center items-end min-h-[50vh]">
            <div className="w-[calc(100%-30px)] mx-auto bg-white rounded-[2.5rem] overflow-hidden p-8 md:p-12 lg:p-16 mb-20 relative z-10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side - Text */}
                    <div className="flex flex-col justify-between h-full space-y-8">
                        <div>
                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-7xl font-bold font-satoshi text-black leading-tight tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                Ready to build something amazing?
                            </motion.h2>
                            <motion.p
                                className="text-lg md:text-xl text-neutral-600 mt-6 font-satoshi max-w-md leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            >
                                Let's discuss your project. No pressure, no obligation. Just a friendly conversation about your goals.
                            </motion.p>
                        </div>


                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full">
                        <motion.form
                            className="space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-800 font-satoshi">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 text-black placeholder:text-neutral-400 focus:border-black transition-colors outline-none rounded-none font-satoshi"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-800 font-satoshi">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 text-black placeholder:text-neutral-400 focus:border-black transition-colors outline-none rounded-none font-satoshi"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="description" className="block text-sm font-medium text-neutral-800 font-satoshi">Project Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    placeholder="Tell us about your idea..."
                                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 text-black placeholder:text-neutral-400 focus:border-black transition-colors outline-none rounded-none font-satoshi resize-none"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full px-10 py-4 bg-black text-white font-bold font-satoshi rounded-xl hover:bg-neutral-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
                                >
                                    Send Message
                                </button>
                            </div>
                        </motion.form>
                    </div>

                </div>

                {/* Large Marquee at the bottom of the card */}
                <div className="w-full mt-12 md:mt-20 border-t border-neutral-100 pt-8 md:pt-12">
                    <Marquee className="py-2" pauseOnHover speed={60}>
                        <span className="text-4xl md:text-6xl font-bold font-satoshi text-neutral-300 hover:text-[#8B5CF6] transition-colors duration-300 mx-8">
                            hello@theperry.com
                        </span>
                        <span className="text-4xl md:text-6xl font-bold font-satoshi text-neutral-300 hover:text-[#8B5CF6] transition-colors duration-300 mx-8">
                            hello@theperry.com
                        </span>
                        <span className="text-4xl md:text-6xl font-bold font-satoshi text-neutral-300 hover:text-[#8B5CF6] transition-colors duration-300 mx-8">
                            hello@theperry.com
                        </span>
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
