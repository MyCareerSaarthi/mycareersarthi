import * as React from "react";
import { cn } from "@/lib/utils";

const CIRCUMFERENCE = 2 * Math.PI * 42; // r=42 for 96x96 viewBox with padding

export function CircularProgress({
  size = 96,
  strokeWidth = 8,
  value = 0,
  className,
  trackClassName,
  indicatorClassName,
  children,
}) {
  const radius = 48 - strokeWidth; // keep inside 96 viewBox
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(value, 0), 100);
  const dash = (progress / 100) * circumference;

  return (
    <div
      className={cn(
        "relative inline-grid place-items-center",
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 96 96"
        className="block rotate-[-90deg]"
        width={size}
        height={size}
        aria-hidden
      >
        <circle
          cx="48"
          cy="48"
          r={radius}
          className={cn(
            "text-muted/30",
            trackClassName
          )}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="48"
          cy="48"
          r={radius}
          className={cn("text-primary transition-all", indicatorClassName)}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        {children ?? (
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        )}
      </div>
    </div>
  );
}


