"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { HardLink } from "@/components/ui/hard-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl hover:bg-primary/10 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-80 bg-background/95 backdrop-blur-xl border-l border-border/50"
      >
        <SheetHeader className="text-left mb-8">
          <SheetTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              MyCareerSarthi
            </span>
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-6">
          {/* Navigation Menu */}
          <div className="flex-1">
            <NavMenu
              orientation="vertical"
              className="[&>div]:flex [&>div]:flex-col [&>div]:items-stretch [&>div]:gap-2"
            />
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-6 border-t border-border/50">
            <SignedOut>
              <HardLink href="/login" className="block">
                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/30 hover:bg-primary/5"
                >
                  Sign In
                </Button>
              </HardLink>
              <HardLink href="/signup" className="block">
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  Get Started
                </Button>
              </HardLink>
            </SignedOut>
            
            <SignedIn>
              <HardLink href="/dashboard" className="block">
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  Go to Dashboard
                </Button>
              </HardLink>
            </SignedIn>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
