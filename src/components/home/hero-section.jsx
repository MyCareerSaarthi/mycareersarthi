"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, FileText, ArrowLeftRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden mt-0 pt-10 pb-32">
      {/* ---------------------------------------------------------------- */}
      {/*                       TRUE TASKHARBOR SVG BACKGROUND             */}
      {/* ---------------------------------------------------------------- */}
      {/* ONLY CHANGE: dark:hidden added */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none dark:hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="blurMe" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="120" />
          </filter>
        </defs>

        {/* MAIN TOP OVAL */}
        <ellipse
          cx="50%"
          cy="5%"
          rx="550"
          ry="320"
          fill="oklch(0.9604 0.0186 265.9842 / 0.65)"
          filter="url(#blurMe)"
        />

        {/* INNER PURPLE HALO */}
        <ellipse
          cx="50%"
          cy="10%"
          rx="380"
          ry="220"
          fill="oklch(0.5106 0.2301 276.9656 / 0.55)"
          filter="url(#blurMe)"
        />

        {/* BLUE/PURPLE RING */}
        <ellipse
          cx="50%"
          cy="5%"
          rx="450"
          ry="260"
          fill="oklch(0.9299 0.0334 272.7879 / 0.55)"
          filter="url(#blurMe)"
        />

        {/* BOTTOM SWEEP */}
        <ellipse
          cx="50%"
          cy="100%"
          rx="600"
          ry="260"
          fill="oklch(0.9604 0.0186 265.9842 / 0.45)"
          filter="url(#blurMe)"
        />

        {/* LEFT BEAM */}
        <rect
          x="-20%"
          y="0"
          width="60%"
          height="120%"
          transform="rotate(-20)"
          fill="white"
          opacity="0.22"
        />

        {/* RIGHT BEAM */}
        <rect
          x="70%"
          y="-10%"
          width="50%"
          height="120%"
          transform="rotate(18)"
          fill="white"
          opacity="0.18"
        />
      </svg>

      {/* ---------------------------------------------------------------- */}
      {/*                           HERO CONTENT                           */}
      {/* ---------------------------------------------------------------- */}
      <div className="mt-8 relative container mx-auto px-6 max-w-6xl text-center z-10">
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 flex justify-center"
        >
          <div className="px-1 rounded-full bg-secondary/50 text-[12px] font-medium shadow-sm">
            ✨ AI-Powered Career Growth Platform
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold text-4xl md:text-4xl leading-tight text-foreground"
        >
          Transform Your Career with
          <span
            className="block"
            style={{ color: "oklch(0.5106 0.2301 276.9656)" }}
          >
            Expert Guidance
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-md md:text-md max-w-3xl mx-auto text-muted-foreground"
        >
          Unlock tailored recommendations, role-fit analysis, and powerful
          branding using next-gen AI models built for modern professionals.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 flex justify-center gap-4"
        >
          <Button className="px-6 rounded-[10px] bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>

          <Button
            variant="outline"
            className="px-6 rounded-[10px] border-primary/50 text-primary hover:bg-primary/10"
          >
            Learn More
          </Button>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/*                               CARDS                              */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto max-w-5xl"
        >
          {/* CARD 1 */}
          <Card className="w-full h-50 shadow-md hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur border-border text-left">
            <CardHeader className="items-start p-0 m-0">
              <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center ml-2">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>

              <CardTitle className="text-[18px] ml-4 text-card-foreground">
                LinkedIn Profile Review
              </CardTitle>

              <CardDescription className="ml-4 mb-0 text-muted-foreground">
                Optimize your LinkedIn to attract top recruiters.
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-3">
              <Button
                className="mt-0 bg-primary/20 rounded-[10px] text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => (window.location.href = "/linkedin/analyze")}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* CARD 2 */}
          <Card className="w-full h-50 shadow-md hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur border-border text-left">
            <CardHeader className="items-start p-0 m-0">
              <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center ml-2">
                <FileText className="h-5 w-5 text-primary" />
              </div>

              <CardTitle className="text-[18px] ml-4 text-card-foreground">
                Resume Review
              </CardTitle>

              <CardDescription className="ml-4 mb-0 text-muted-foreground">
                Create and optimize resumes that pass ATS screening.
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-3">
              <Button
                className="mt-0 bg-primary/20 rounded-[10px] text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => (window.location.href = "/resume/analyze")}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* CARD 3 */}
          <Card className="w-full h-50 shadow-md hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur border-border text-left">
            <CardHeader className="items-start p-0 m-0">
              <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center ml-2">
                <ArrowLeftRight className="h-5 w-5 text-primary" />
              </div>

              <CardTitle className="text-[17px] ml-4 text-card-foreground">
                LinkedIn & Resume Alignment
              </CardTitle>

              <CardDescription className="ml-4 mb-0 text-muted-foreground">
                Ensure your LinkedIn & Resume reflect a cohesive personal brand.
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-3">
              <Button
                className="mt-0 bg-primary/20 rounded-[10px] text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => (window.location.href = "/linkedin/analyze")}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
