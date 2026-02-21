"use client";

import Lottie from "lottie-react";
import collabAnimation from "@/assets/lottie/collabicon.json";

export const AnimatedCollabIcon = () => {
    return (
        <div className="w-10 h-10 md:w-14 md:h-14">
            <Lottie
                animationData={collabAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};
