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
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const currentWord = words[currentIndex];

  useEffect(() => {
    // Start flipping right after the initial delay + duration
    const initialTimer = setTimeout(() => {
      setIsInitialLoad(false);
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, delay * 1000 + duration);

    return () => clearTimeout(initialTimer);
  }, [delay, duration, words.length]);

  useEffect(() => {
    if (isInitialLoad) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration, isInitialLoad]);

  return (
    <span className="inline-flex relative align-baseline">
      {/* Hidden max-width placeholder */}
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
      </span>

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
                delay: (isInitialLoad ? delay : 0) + i * 0.02,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
