"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  FileTextIcon,
  Linkedin,
  Sparkles,
  ArrowLeftRight,
} from "lucide-react";
import { HardLink } from "@/components/ui/hard-link";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";

const services = [
  {
    icon: Linkedin,
    title: "LinkedIn Review",
    description: "Profile analysis & feedback",
    href: "/linkedin/analyze",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: FileTextIcon,
    title: "Resume Review",
    description: "ATS & keyword analysis",
    href: "/resume/analyze",
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
  },
  {
    icon: ArrowLeftRight,
    title: "Alignment Review",
    description: "Compare & sync profiles",
    href: "/compare",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
  },
];

export const ProductDropdown = () => {
  const { isSignedIn } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 h-auto"
        >
          <span className="text-sm font-normal relative z-10">Services</span>
          <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-80 p-2 border border-border/50 shadow-xl bg-background/95 backdrop-blur-xl"
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1">
          Review Services
        </DropdownMenuLabel>

        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <DropdownMenuItem key={service.title} asChild>
              <HardLink href={service.href}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer w-full"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${service.bgColor} flex items-center justify-center shrink-0 group-hover:-translate-y-1 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <IconComponent className={`w-5 h-5 ${service.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {service.description}
                    </div>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-muted-foreground -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </HardLink>
            </DropdownMenuItem>
          );
        })}

        {isSignedIn && (
          <>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1">
              Quick Actions
            </DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <HardLink href="/dashboard">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer w-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm">View Dashboard</span>
                </div>
              </HardLink>
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator className="my-2" />
        <DropdownMenuItem asChild>
          <HardLink href="/contact-us">
            <div className="flex items-center justify-between p-3 rounded-lg bg-linear-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors cursor-pointer w-full">
              <span className="text-sm font-medium text-primary">
                Need Expert Help?
              </span>
              <ChevronDownIcon className="w-4 h-4 text-primary -rotate-90" />
            </div>
          </HardLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};