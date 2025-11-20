"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { HardLink } from "@/components/ui/hard-link";
import { useAuth } from "@clerk/nextjs";
import { ProductDropdown } from "./product-dropdown";

export const NavMenu = (props) => {
  const { isSignedIn } = useAuth();

  const { links } = props;

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink href="/">Home</HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink href="/pricing">Pricing</HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ProductDropdown />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink href="/about-us">About</HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HardLink href="/contact-us">Contact Us</HardLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
