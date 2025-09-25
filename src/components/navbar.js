import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navbar-04/logo";
import { NavMenu } from "@/components/navbar-04/nav-menu";
import { NavigationSheet } from "@/components/navbar-04/navigation-sheet";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 bg-secondary/50 backdrop-blur-xs h-16 border border-gray-800 max-w-(--breakpoint-xl) mx-auto rounded-full z-50 shadow-lg">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <SignedOut>
            <Link href={"/login"}>
              <Button className="rounded-full">Get Started</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-full",
                },
              }}
            />
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
