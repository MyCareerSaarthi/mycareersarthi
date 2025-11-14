"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export default function SimpleLoader({ message = "Loading...", className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen gap-4",
        className
      )}
    >
      {/* Spinning Loader */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-muted-foreground/20" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
      </div>

      {/* Loading Message */}
      <p className="text-lg font-medium text-muted-foreground">{message}</p>
    </div>
  );
}
