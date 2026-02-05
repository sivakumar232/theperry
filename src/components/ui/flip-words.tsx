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
  const [isStarted, setIsStarted] = useState(false);
  const currentWord = words[currentIndex];

  useEffect(() => {
    // Start flipping only after the initial delay + initial word duration
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay * 1000 + 1000); // Wait for initial reveal + buffer

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration, isStarted]);

  return (
    <span className="inline-flex relative align-baseline">
      {/* Hidden words to establish natural max width */}
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
      </span>

      {/* Animated word positioned absolutely */}
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 10, filter: "blur(20px)", scale: 1.05 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, y: -10, filter: "blur(20px)", scale: 0.95 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className={cn(
            "absolute left-0 top-0 whitespace-nowrap",
            className
          )}
        >
          {currentWord.split("").map((letter, i) => (
            <motion.span
              key={`${currentWord}-${i}`}
              initial={{ opacity: 0, y: 10, filter: "blur(20px)", scale: 1.05 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{
                delay: i * 0.03 + (!isStarted && currentIndex === 0 ? delay : 0),
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
