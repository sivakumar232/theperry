"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 2500,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration]);

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
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className={cn(
            "absolute left-0 top-0 whitespace-nowrap",
            className
          )}
        >
          {currentWord.split("").map((letter, i) => (
            <motion.span
              key={`${currentWord}-${i}`}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: i * 0.025,
                duration: 0.15,
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
