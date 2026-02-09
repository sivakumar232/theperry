"use client";

import Lottie from "lottie-react";
import handshakeAnimation from "../handshake.json";

export const AnimatedHandshakeIcon = () => {
    return (
        <div className="w-10 h-10 md:w-14 md:h-14">
            <Lottie
                animationData={handshakeAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};
