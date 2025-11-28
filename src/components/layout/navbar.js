import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet";
import { HardLink } from "@/components/ui/hard-link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UserDropdown } from "@/components/user/user-dropdown";
import { ModeToggle } from "../theme-toggle";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 bg-background/60 backdrop-blur-xs h-16  max-w-(--breakpoint-xl) mx-auto rounded-md z-50 shadow-lg">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ModeToggle />
          <SignedOut>
            <HardLink href={"/login"}>
              <Button className="rounded-full">Get Started</Button>
            </HardLink>
          </SignedOut>
          <SignedIn>
            <UserDropdown />
          </SignedIn>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
