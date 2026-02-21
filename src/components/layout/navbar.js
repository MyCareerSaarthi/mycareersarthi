"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet";
import { HardLink } from "@/components/ui/hard-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UserDropdown } from "@/components/user/user-dropdown";
import { ModeToggle } from "../theme-toggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 group"
          >
            <HardLink href="/" className="flex items-center gap-3">
              <div className="">
                <Image
                  src="/logo.svg"
                  alt="MyCareerSarthi Logo"
                  width={200}
                  height={200}
                  className="inverted-colors:invert"
                />
              </div>
            </HardLink>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavMenu />
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            <SignedOut>
              <HardLink href={"/login"}>
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex hover:bg-primary/10 transition-colors"
                >
                  Sign In
                </Button>
              </HardLink>
              <HardLink href={"/signup"}>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl">
                  Get Started
                </Button>
              </HardLink>
            </SignedOut>

            <SignedIn>
              <HardLink href={"/dashboard"}>
                <Button
                  variant="ghost"
                  className="hidden md:inline-flex hover:bg-primary/10 transition-colors"
                >
                  Dashboard
                </Button>
              </HardLink>
              <UserDropdown />
            </SignedIn>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border gradient */}
      {isScrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
