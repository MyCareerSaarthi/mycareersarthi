import * as React from "react";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

const LoadingButton = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      loading = false, // Support both isLoading and loading props
      loadingText = "Loading...",
      children,
      ...props
    },
    ref
  ) => {
    // Use either isLoading or loading prop
    const isActuallyLoading = isLoading || loading;

    // Explicitly exclude loading-related props from being passed to Button
    // (they're already destructured, but this ensures they never reach the DOM)
    const {
      loading: _loading,
      isLoading: _isLoading,
      loadingText: _loadingText,
      ...buttonProps
    } = props;

    return (
      <Button
        ref={ref}
        className={cn(className)}
        variant={variant}
        size={size}
        asChild={asChild}
        disabled={isActuallyLoading || buttonProps.disabled}
        {...buttonProps}
      >
        {isActuallyLoading ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4 animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            {loadingText}
          </>
        ) : (
          children
        )}
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";

export { LoadingButton };
