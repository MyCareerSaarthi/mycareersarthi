import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { HardLink } from "@/components/ui/hard-link";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <HardLink href="/">
            <Image
              src="/logo.svg"
              alt="MyCareerSarthi Logo"
              width={124}
              height={32}
              className="h-8 w-auto"
            />
          </HardLink>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                {href === "#" ? (
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {title}
                  </Link>
                ) : (
                  <HardLink
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {title}
                  </HardLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Separator className="bg-gray-800" />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <HardLink
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              MyCareerSarthi
            </HardLink>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-gray-400">
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
