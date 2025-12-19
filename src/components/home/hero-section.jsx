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
import {
  Linkedin,
  FileText,
  ArrowLeftRight,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const services = [
  {
    icon: Linkedin,
    title: "LinkedIn Profile Review",
    description:
      "AI-powered section-by-section analysis with detailed scoring.",
    href: "/linkedin/analyze",
    color: "from-blue-500 to-cyan-500",
    bgLight:
      "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    icon: FileText,
    title: "Resume Review",
    description: "ATS compatibility check with keyword optimization feedback.",
    href: "/resume/analyze",
    color: "from-violet-500 to-purple-500",
    bgLight:
      "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
  },
  {
    icon: ArrowLeftRight,
    title: "Alignment Review",
    description: "Compare LinkedIn and resume to ensure consistency.",
    href: "/compare",
    color: "from-emerald-500 to-teal-500",
    bgLight:
      "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden flex items-center pt-6 md:pt-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl z-10 w-full">
        {/* Top content - Badge, heading, subtitle, CTAs */}
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 text-primary text-xs md:text-sm font-semibold shadow-lg backdrop-blur-sm">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              AI-Powered Career Review Platform
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 md:space-y-4"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Transform Your Career
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                with Expert Guidance
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Get comprehensive analysis and actionable feedback on your
              LinkedIn profile, resume, and professional alignment.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <SignedOut>
              <Button
                asChild
                size="lg"
                className="group px-6 md:px-8 py-5 md:py-6 text-base md:text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                <Link href="/signup" className="inline-flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-6 md:px-8 py-5 md:py-6 text-base md:text-lg border-2 border-primary/30 hover:bg-primary/5 transition-colors"
              >
                <Link href="/contact-us">Talk to Expert</Link>
              </Button>{" "}
            </SignedOut>
          </motion.div>
        </div>

        {/* Service cards - Always visible in viewport */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Card
                  className={`relative h-full overflow-hidden border-0 bg-gradient-to-br ${service.bgLight} hover:shadow-2xl transition-all duration-500`}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                  />

                  <CardHeader className="relative space-y-3 pb-3 pt-6 px-5">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>

                    <div className="space-y-2">
                      <CardTitle className="text-lg md:text-xl font-bold leading-tight">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-foreground/70">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="relative pt-0 px-5 pb-5">
                    <SignedOut>
                      <Button
                        asChild
                        size="sm"
                        className={`w-full bg-gradient-to-r ${service.color} text-white border-0 hover:opacity-90 transition-opacity shadow-lg text-sm`}
                      >
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </SignedOut>

                    <SignedIn>
                      <Button
                        asChild
                        size="sm"
                        className={`w-full bg-gradient-to-r ${service.color} text-white border-0 hover:opacity-90 transition-opacity shadow-lg text-sm`}
                      >
                        <Link href={service.href}>Start Review</Link>
                      </Button>
                    </SignedIn>
                  </CardContent>

                  {/* Decorative element */}
                  <div
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 rounded-tl-full group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-6 md:mt-8 text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            Need professional optimization?{" "}
            <Link
              href="/contact-us"
              className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
            >
              Contact our experts
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
