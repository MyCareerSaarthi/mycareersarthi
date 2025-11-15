"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Messages for analysis
const ANALYSIS_MESSAGES = [
  "Reviewing your profile details...",
  "Gathering essential insights from your profile...",
  "Reviewing uploaded profile or resume...",
  "Evaluating all sections for a comprehensive overview...",
  "Uncovering unique strengths and improvements...",
];

// Generic messages for LinkedIn vs Resume comparison (major steps)
const COMPARISON_MESSAGES = [
  "Comparing LinkedIn profile with your resume...",
  "Matching skills and endorsements across both profiles...",
  "Reviewing education and certification overlaps...",
  "Highlighting gaps between LinkedIn and resume...",
  "Generating actionable alignment insights...",
];

// Slide left/right and scale animation
const slideKeyframes = `
@keyframes smoothSlideIn {
  0% {
    opacity: 0;
    transform: translateY(32px) rotateY(18deg);
  }
  35% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateY(0deg);
  }
}
@keyframes smoothSlideOut {
  0% {
    opacity: 1;
    transform: translateY(0) rotateY(0deg);
  }
  80% {
    opacity: 0.22;
  }
  100% {
    opacity: 0;
    transform: translateY(-40px) rotateY(-15deg);
  }
}
`;

export default function SimpleLoader({ message = "Loading...", className }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [show, setShow] = React.useState(true);

  // Select correct message set
  const isComparison = message.toLowerCase().includes("compar");
  const messages = isComparison ? COMPARISON_MESSAGES : ANALYSIS_MESSAGES;

  React.useEffect(() => {
    // Slide out text prior to swap
    const timeout1 = setTimeout(() => setShow(false), 2400); // start slide out at 2.4s
    // Change index after slide out is done, slide in after short delay
    const timeout2 = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setShow(true);
    }, 2950); // 0.55s slide out, 0.05s buffer

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [currentIndex, messages.length]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen px-6",
        className
      )}
    >
      <style>{slideKeyframes}</style>
      <div className="relative w-full max-w-3xl flex items-center justify-center overflow-hidden min-h-[56px]">
        <p
          key={currentIndex}
          className={cn(
            "text-xl md:text-2xl lg:text-3xl font-medium",
            // Neutral, gentle color for soft contrast in both themes
            "text-neutral-500 dark:text-neutral-300",
            "text-center px-8 absolute inset-0 flex items-center justify-center select-none tracking-tight leading-[1.22]"
          )}
          style={{
            animation: show
              ? "smoothSlideIn 0.55s cubic-bezier(0.65,0.14,0.42,1.01)"
              : "smoothSlideOut 0.55s cubic-bezier(0.82,0.14,0.52,1.13)",
            fontFamily: "var(--font-sans)",
            letterSpacing: "-0.018em",
            textShadow:
              "0 2px 14px rgba(100,100,100,0.05), 0 1px 3px rgba(10,12,28,0.10)",
            opacity: 1,
            willChange: "transform, filter",
            userSelect: "none",
          }}
        >
          {messages[currentIndex]}
        </p>
      </div>
    </div>
  );
}
