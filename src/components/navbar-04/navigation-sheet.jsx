"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Menu,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Linkedin,
  FileTextIcon,
  User,
  Compass,
  Search,
  MessageSquare,
  ArrowLeftRight,
} from "lucide-react";
import { HardLink } from "@/components/ui/hard-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useState } from "react";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

const reviewServices = [
  { href: "/services/linkedin-review", label: "LinkedIn Review Service", icon: Linkedin },
  { href: "/services/resume-review", label: "Resume Review Service", icon: FileTextIcon },
];

const optimizationServices = [
  { href: "/services/linkedin-optimization", label: "LinkedIn Profile Optimization", icon: Linkedin },
  { href: "/services/resume-optimization", label: "Resume Optimization", icon: FileTextIcon },
  { href: "/services/personal-branding", label: "Personal Branding", icon: User },
  { href: "/services/career-assessment", label: "Career Assessment & Roadmap", icon: Compass },
  { href: "/services/job-search", label: "Job Search Services", icon: Search },
  { href: "/services/interview-preparation", label: "Interview Preparation", icon: MessageSquare },
  { href: "/services/alignment", label: "LinkedIn vs Resume Alignment", icon: ArrowLeftRight },
];

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
        
        <div className="flex flex-col gap-5 h-full">
          <div className="flex-1 overflow-y-auto pr-1">
            <div className="space-y-1">
              {primaryLinks.slice(0, 2).map((link) => (
                <HardLink
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </HardLink>
              ))}
            </div>

            <div className="my-3 border-t border-border/60" />

            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  servicesOpen ? "rotate-180" : "",
                )}
              />
            </button>

            {servicesOpen && (
              <div className="mt-2 space-y-3">
                <div className="rounded-lg border border-border/60 bg-card/60 p-2">
                  <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Review
                  </p>
                  <div className="space-y-1">
                    {reviewServices.map((service) => (
                      <HardLink
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm hover:bg-accent transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <service.icon className="w-4 h-4 text-primary" />
                        <span>{service.label}</span>
                      </HardLink>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border/60 bg-card/60 p-2">
                  <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Optimization
                  </p>
                  <div className="space-y-1">
                    {optimizationServices.map((service) => (
                      <HardLink
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm hover:bg-accent transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <service.icon className="w-4 h-4 text-muted-foreground" />
                        <span>{service.label}</span>
                      </HardLink>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="my-3 border-t border-border/60" />
            <div className="space-y-1">
              {primaryLinks.slice(2).map((link) => (
                <HardLink
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </HardLink>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-6 border-t border-border/50">
            <SignedOut>
              <HardLink href="/login" className="block" onClick={() => setOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/30 hover:bg-primary/5"
                >
                  Sign In
                </Button>
              </HardLink>
              <HardLink href="/signup" className="block" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  Get Started
                </Button>
              </HardLink>
            </SignedOut>
            
            <SignedIn>
              <HardLink href="/dashboard" className="block" onClick={() => setOpen(false)}>
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
