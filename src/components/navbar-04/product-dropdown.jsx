"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, FileTextIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const ProductDropdown = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-2 hover:bg-accent">
          <span className="text-sm font-normal">Products</span>
          <ChevronDownIcon className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/resume/analyze" className="flex items-center gap-2">
            <FileTextIcon className="h-4 w-4" />
            <span>Analyze Resume</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/linkedin/analyze" className="flex items-center gap-2">
            <LinkedinIcon className="h-4 w-4" />
            <span>Analyze LinkedIn</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
