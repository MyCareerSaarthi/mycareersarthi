"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { HardLink } from "@/components/ui/hard-link";
import { useAuth } from "@clerk/nextjs";
import { ServicesMenuItem } from "./services-nav-menu";
import { motion } from "framer-motion";

export const NavMenu = (props) => {
  const { isSignedIn } = useAuth();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start data-[orientation=vertical]:gap-2">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink
              href="/"
              className="group relative px-4 py-2 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-lg opacity-0 transition-opacity" />
            </HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink
              href="/blog"
              className="group relative px-4 py-2 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="relative z-10">Blog</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-lg opacity-0 transition-opacity" />
            </HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Services Navigation Menu with hover submenus */}
        <ServicesMenuItem />

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink
              href="/pricing"
              className="group relative px-4 py-2 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="relative z-10">Pricing</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-lg opacity-0 transition-opacity" />
            </HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink
              href="/about-us"
              className="group relative px-4 py-2 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-lg opacity-0 transition-opacity" />
            </HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink
              href="/contact-us"
              className="group relative px-4 py-2 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-lg opacity-0 transition-opacity" />
            </HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
