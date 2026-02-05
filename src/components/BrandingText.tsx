import React from "react";
import { ContentContainer } from "./ui/ContentContainer";
import { ScrollBlurReveal } from "./ui/scroll-blur-reveal";

export function BrandingText() {
    return (
        <section className="py-48 md:py-64 bg-black relative">
            <ContentContainer>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-2xl md:text-3xl text-purple-600 mb-4 font-[family-name:var(--font-cursive)]">
                        (hello)
                    </p>
                    <ScrollBlurReveal
                        text="You’re here because something needs to be built or improved. We listen, understand, and work with you to make it real."
                        className="text-3xl md:text-4xl lg:text-5xl font-satoshi font-medium leading-relaxed text-white"
                        stepOffset={0.008} // 0.008 * 100 chars ~= 0.8 range. Fits well.
                        animateFromWordIndex={5} // Skip: You’re(0) here(1) because(2) something(3) needs(4)
                    />
                </div>
            </ContentContainer>
        </section>
    );
}