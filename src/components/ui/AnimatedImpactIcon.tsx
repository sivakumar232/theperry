"use client";

import Lottie from "lottie-react";
import impactAnimation from "@/assets/lottie/impacticon.json";

export const AnimatedImpactIcon = () => {
    return (
        <div className="w-10 h-10 md:w-14 md:h-14">
            <Lottie
                animationData={impactAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};
