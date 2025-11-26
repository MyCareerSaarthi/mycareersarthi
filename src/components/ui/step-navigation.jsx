"use client";

import { cn } from "@/lib/utils";

const StepNavigation = ({ currentStep, totalSteps, steps, className = "" }) => {
  return (
    <div className={cn("w-full max-w-xl mx-auto", className)}>
      {/* Minimal Progress Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-1">
          <div
            className="bg-primary h-1 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Minimal Step Dots */}
      <div className="flex items-center justify-center space-x-2">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={stepNumber}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                isCompleted && "bg-primary",
                isCurrent && "bg-primary ring-2 ring-primary/30",
                !isCompleted && !isCurrent && "bg-muted"
              )}
              title={`${step.title}${
                step.description ? ` - ${step.description}` : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StepNavigation;
