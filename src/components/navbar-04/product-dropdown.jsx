"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  FileTextIcon,
  LinkedinIcon,
  // CrownIcon, // Commented out - Personal Branding service
  SparklesIcon,
  ArrowLeftRight,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const ProductDropdown = () => {
  const { isSignedIn } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-2 hover:bg-accent">
          <span className="text-sm font-normal">Products</span>
          <ChevronDownIcon className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuItem asChild>
          <Link
            href="/services/linkedin-optimization"
            className="flex items-center gap-2"
          >
            <LinkedinIcon className="h-4 w-4" />
            <span>LinkedIn Optimization</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/services/resume-optimization"
            className="flex items-center gap-2"
          >
            <FileTextIcon className="h-4 w-4" />
            <span>Resume Services</span>
          </Link>
        </DropdownMenuItem>
        {/* Personal Branding - Commented out
        <DropdownMenuItem asChild>
          <Link
            href="/services/personal-branding"
            className="flex items-center gap-2"
          >
            <CrownIcon className="h-4 w-4" />
            <span>Personal Branding</span>
          </Link>
        </DropdownMenuItem>
        */}
        <DropdownMenuItem asChild>
          <Link href="/services/comparison" className="flex items-center gap-2">
            <ArrowLeftRight className="h-4 w-4" />
            <span>Profile Comparison</span>
          </Link>
        </DropdownMenuItem>
        {isSignedIn && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/resume/analyze" className="flex items-center gap-2">
                <SparklesIcon className="h-4 w-4" />
                <span>Quick Resume Analysis</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/linkedin/analyze"
                className="flex items-center gap-2"
              >
                <SparklesIcon className="h-4 w-4" />
                <span>Quick LinkedIn Analysis</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/compare" className="flex items-center gap-2">
                <SparklesIcon className="h-4 w-4" />
                <span>Linkedin & Resume Comparison</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
