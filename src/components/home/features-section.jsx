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
import { Brain, Target, ArrowLeftRight, UserCheck } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const features = [
  {
    title: "AI-Powered LinkedIn Review",
    description:
      "Get instant, data-driven feedback on your LinkedIn profile with detailed scoring across multiple sections and actionable recommendations.",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    bgGradient:
      "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
  },
  {
    title: "Resume ATS Review",
    description:
      "Comprehensive resume analysis for ATS compatibility with keyword review, formatting checks, and role-specific improvement suggestions.",
    icon: Target,
    color: "from-blue-500 to-cyan-600",
    bgGradient:
      "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    title: "Alignment Scoring & Review",
    description:
      "Compare your LinkedIn profile and resume to identify gaps, mismatches, and inconsistencies with detailed alignment scoring.",
    icon: ArrowLeftRight,
    color: "from-emerald-500 to-teal-600",
    bgGradient:
      "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
  },
  {
    title: "Professional Optimization Services",
    description:
      "Want expert help to implement changes? Connect with our career experts for personalized LinkedIn and resume optimization services.",
    icon: UserCheck,
    color: "from-orange-500 to-red-600",
    bgGradient:
      "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
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

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            ✨ Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Choose MyCareerSarthi?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Comprehensive AI-driven career analysis tools that help
            professionals review and improve their LinkedIn profiles, resumes,
            and professional consistency with detailed feedback.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 0 || index === 3 ? "md:col-span-2" : ""}
              >
                <Card
                  className={`relative h-full group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br ${feature.bgGradient}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-primary/5 via-transparent to-transparent" />

                  <CardHeader className="relative pb-4 pt-8 px-8">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br opacity-20 absolute -top-4 -right-4 group-hover:opacity-40 group-hover:rotate-45 transition-all duration-700" />
                    </div>

                    <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg leading-relaxed text-foreground/70">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative px-8 pb-8">
                    <SignedOut>
                      <Button
                        asChild
                        variant="ghost"
                        className="group/btn p-0 h-auto font-semibold text-base hover:bg-transparent"
                      >
                        <Link
                          href="/signup"
                          className="inline-flex items-center gap-2"
                        >
                          Get started
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </Button>
                    </SignedOut>
                    <SignedIn>
                      <Button
                        asChild
                        variant="ghost"
                        className="group/btn p-0 h-auto font-semibold text-base hover:bg-transparent"
                      >
                        <Link
                          href="/dashboard"
                          className="inline-flex items-center gap-2"
                        >
                          Try now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </Button>
                    </SignedIn>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
