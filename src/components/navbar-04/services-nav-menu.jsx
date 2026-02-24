"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  ChevronRightIcon,
  FileTextIcon,
  Linkedin,
  User,
  Compass,
  Search,
  MessageSquare,
  ArrowLeftRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const services = [
  {
    icon: Linkedin,
    title: "LinkedIn Profile Optimization",
    description: "Enhance your professional presence",
    href: "/services/linkedin-optimization",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: FileTextIcon,
    title: "Resume Optimization",
    description: "ATS-friendly resume enhancement",
    href: "/services/resume-optimization",
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
  },
  {
    icon: User,
    title: "Personal Branding",
    description: "Build your unique professional identity",
    href: "/services/personal-branding",
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    icon: Compass,
    title: "Career Assessment & Roadmap",
    description: "Strategic career planning & guidance",
    href: "/services/career-assessment",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
  },
  {
    icon: Search,
    title: "Job Search Services",
    description: "Targeted job search assistance",
    href: "/services/job-search",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Ace your interviews with confidence",
    href: "/services/interview-preparation",
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
  },
];

const featuredService = {
  icon: ArrowLeftRight,
  title: "LinkedIn vs Resume Alignment",
  description: "Detect gaps & contradictions between your profiles",
  href: "/services/alignment",
  color: "text-teal-500",
  bgColor:
    "bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
};

const ServiceItem = React.forwardRef(
  (
    { className, title, children, icon: Icon, iconColor, iconBg, ...props },
    ref,
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "group flex items-center gap-3 select-none rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex-row",
              className,
            )}
            {...props}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                iconBg,
              )}
            >
              <Icon className={cn("w-5 h-5", iconColor)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium leading-none mb-1 group-hover:text-primary transition-colors">
                {title}
              </div>
              <p className="text-xs leading-snug text-muted-foreground line-clamp-1">
                {children}
              </p>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ServiceItem.displayName = "ServiceItem";

export const ServicesMenuItem = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10">
        Services
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-full min-w-xs sm:min-w-2xl p-4">
          {/* Two-column grid for services */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {services.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                href={service.href}
                icon={service.icon}
                iconColor={service.color}
                iconBg={service.bgColor}
              >
                {service.description}
              </ServiceItem>
            ))}
          </ul>

          {/* Featured Service */}
          <div className="mt-3 pt-3 border-t">
            <Link
              href={featuredService.href}
              className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-accent hover:text-accent-foreground"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                  featuredService.bgColor,
                )}
              >
                <featuredService.icon
                  className={cn("w-5 h-5", featuredService.color)}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium leading-none mb-1 group-hover:text-primary transition-colors">
                  {featuredService.title}
                </div>
                <p className="text-xs leading-snug text-muted-foreground line-clamp-1">
                  {featuredService.description}
                </p>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="mt-2 pt-3 border-t">
            <Link
              href="/contact-us"
              className="flex items-center justify-between p-3 rounded-xl bg-linear-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-all"
            >
              <span className="text-sm font-medium text-primary">
                Need Expert Help?
              </span>
              <ChevronRightIcon className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ServicesMenuItem;
