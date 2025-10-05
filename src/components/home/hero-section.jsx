"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
              ✨ AI-Powered Career Growth Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          >
            Elevate Your Career With
            <span className="block mt-2">Expert-Powered Insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Unlock your professional potential with personalized feedback on
            your career materials and interview skills. Our AI-powered platform
            combined with expert guidance helps you stand out in today's
            competitive job market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg hover:bg-accent/50 backdrop-blur-sm border-primary/30"
            >
              <Link href="#services">View Our Solutions</Link>
            </Button>
          </motion.div>

          {/* Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-card/40 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Profile Optimization
              </h3>
              <p className="text-sm text-muted-foreground">
                Enhance your digital presence to attract top recruiters
              </p>
            </div>

            <div className="bg-card/40 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 2h-8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10l-6-6zm-1 12h-6v-2h6v2zm0-4h-6v-2h6v2zm7.293-6.707l-4.293-4.293a.999.999 0 0 0-1.414 0l-2.586 2.586 6 6 2.586-2.586a.999.999 0 0 0 0-1.414z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Document Scoring</h3>
              <p className="text-sm text-muted-foreground">
                Ensure your materials pass through applicant tracking systems
              </p>
            </div>

            <div className="bg-card/40 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Interview Preparation
              </h3>
              <p className="text-sm text-muted-foreground">
                Master interviews with AI-powered practice and feedback
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced background elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-primary rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-1/3 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 -z-10"></div>
    </section>
  );
};

export default HeroSection;
