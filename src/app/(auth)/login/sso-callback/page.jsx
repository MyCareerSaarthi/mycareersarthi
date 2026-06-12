"use client";

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SignInSSOCallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background blobs for premium aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-md w-full p-8 rounded-3xl bg-card/40 backdrop-blur-xl border border-border shadow-2xl flex flex-col items-center text-center space-y-6 relative">
        <div className="relative">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-pulse" />
          {/* Main animated spinner */}
          <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin relative z-10" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Verifying account
          </h2>
          <p className="text-muted-foreground text-sm max-w-[280px]">
            Please wait while we securely sign you into your MyCareerSarthi account
          </p>
        </div>

        {/* Subtle decorative progress bar */}
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-secondary w-2/3 rounded-full animate-pulse" />
        </div>
      </div>

      <AuthenticateWithRedirectCallback
        signInFallbackRedirectUrl="/"
      />
    </div>
  );
}
