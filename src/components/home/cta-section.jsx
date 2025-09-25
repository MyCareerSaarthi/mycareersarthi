"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 hover:border-gray-600 transition-all duration-300 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">
            Ready to Transform Your Career?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Join thousands of professionals who have accelerated their careers
            with our expert guidance and AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
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
              <Link href="/login">Book a Demo</Link>
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-6 animate-fade-in-up delay-300">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
