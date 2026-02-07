"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 2500,
  className,
  delay = 0,
}: {
  words: string[];
  duration?: number;
  className?: string;
  delay?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const currentWord = words[currentIndex];

  // Wait for the delay before showing the component
  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(visibilityTimer);
  }, [delay]);

  // Start flipping only after the component becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration, isVisible]);

  return (
    <span className="inline-flex relative align-baseline">
      {/* Hidden words to establish natural max width */}
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
      </span>

      {/* Only show animated word after delay */}
      {isVisible && (
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentWord}
            className={cn(
              "absolute left-0 top-0 whitespace-nowrap",
              className
            )}
          >
            {currentWord.split("").map((char, i) => (
              <motion.span
                key={`${currentWord}-${i}`}
                initial={{ opacity: 0, filter: "blur(8px)", y: 5 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -5 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.02,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      )}
    </span>
  );
};
