"use client";

import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { HardLink } from "@/components/ui/hard-link";
import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "LinkedIn Profile Review", href: "/linkedin/analyze" },
      { name: "Resume Review", href: "/resume/analyze" },
      { name: "Alignment Review", href: "/compare" },
      { name: "Expert Services", href: "/contact-us" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/mycareersarthi-1",
    label: "LinkedIn",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t border-border/50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand and newsletter section */}
          <div className="lg:col-span-5 space-y-6">
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

            <p className="text-muted-foreground leading-relaxed max-w-md">
              AI-powered career review platform helping professionals optimize
              their LinkedIn profiles and resumes with detailed feedback and
              actionable recommendations.
            </p>

            {/* Contact info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:support@mycareersarthi.com">
                  support@mycareersarthi.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer links sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <HardLink
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </HardLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom footer */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <HardLink
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                MyCareerSarthi
              </HardLink>
              . All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Empowering careers with AI-powered insights
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="pb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>ATS Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
