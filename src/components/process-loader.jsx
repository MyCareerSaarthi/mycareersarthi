"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import { cn } from "@/lib/utils";

export default function ProcessLoader({
  stepTitle = "Processing",
  stepSubtitle,
  currentStep = 1,
  totalSteps = 5,
  percent = 0,
  vector, // optional ReactNode for custom lined vector
  className,
}) {
  const safeTotal = Math.max(totalSteps, 1);
  const clampedPercent = Math.min(Math.max(percent, 0), 100);

  return (
    <Card
      className={cn(
        "border-0 shadow-none bg-accent/30 dark:bg-input/20",
        className
      )}
    >
      <CardContent className="p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[auto,1fr] items-center">
          {/* Visual */}
          <div className="relative">
            <AnimatedLines className="absolute -inset-6 text-muted-foreground/20" />
            <CircularProgress
              size={120}
              strokeWidth={8}
              value={clampedPercent}
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-semibold">{stepTitle}</h2>
              <span className="text-xs text-muted-foreground">
                Step {currentStep} of {safeTotal}
              </span>
            </div>
            {stepSubtitle ? (
              <p className="text-sm text-muted-foreground">{stepSubtitle}</p>
            ) : null}
          </div>
        </div>
      </CardContent>
      {vector ? <div className="p-4">{vector}</div> : null}
    </Card>
  );
}

function AnimatedLines({ className }) {
  return (
    <svg
      viewBox="0 0 300 200"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path
          className="animate-[dash_3s_linear_infinite]"
          d="M10 60 Q 80 10 150 60 T 290 60"
        />
        <path
          className="animate-[dash_4s_linear_infinite] opacity-70"
          d="M10 100 Q 80 50 150 100 T 290 100"
        />
        <path
          className="animate-[dash_5s_linear_infinite] opacity-50"
          d="M10 140 Q 80 90 150 140 T 290 140"
        />
      </g>
      <style>{`
        @keyframes dash { to { stroke-dashoffset: -600; } }
        path { stroke-dasharray: 200 400; stroke-dashoffset: 0; }
      `}</style>
    </svg>
  );
}
