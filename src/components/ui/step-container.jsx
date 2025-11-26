"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StepContainer = ({
  title,
  description,
  children,
  onNext,
  onPrevious,
  nextText = "Next",
  previousText = "Previous",
  isNextDisabled = false,
  isPreviousDisabled = false,
  showNext = true,
  showPrevious = true,
  className = "",
}) => {
  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <Card className="shadow-sm border">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-semibold mb-1">{title}</CardTitle>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {children}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4 border-t">
            <div>
              {showPrevious && (
                <Button
                  variant="outline"
                  onClick={onPrevious}
                  disabled={isPreviousDisabled}
                  className="min-w-[100px] h-9"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {previousText}
                </Button>
              )}
            </div>

            <div>
              {showNext && (
                <Button
                  onClick={onNext}
                  disabled={isNextDisabled}
                  className="min-w-[100px] h-9"
                >
                  {nextText}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepContainer;
