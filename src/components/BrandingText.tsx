"use client";

import { ContentContainer } from "./ui/ContentContainer";
import { BlurRevealText } from "./ui/blur-reveal-text";

export function BrandingText() {
    return (
        <section className="py-8 md:py-12 bg-black relative">
            <ContentContainer>
                <div className="max-w-5xl mx-auto text-center">
                    <div>
                        <BlurRevealText
                            text="Reshaping what exists, we're here to help you stand out — with clarity, creativity, and edge."
                            tag="h2"
                            className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-satoshi font-bold leading-tight"
                            startColor="#666666"
                            endColor="#FFFFFF"
                            staggerDelay={0.04}
                            scrollOffset={["start 0.8", "start 0.2"]}
                            direction="up"
                        />
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}