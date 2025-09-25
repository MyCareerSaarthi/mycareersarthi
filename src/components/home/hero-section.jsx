"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in-down">
            Unlock Your Career Potential
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Get expert guidance to perfect your LinkedIn profile, resume, and
            interview skills. Our AI-powered platform helps you land your dream
            job faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg  shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 animate-slide-in-up"
            >
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-gray-700 hover:bg-gray-800/50 backdrop-blur-sm animate-slide-in-up delay-100"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
