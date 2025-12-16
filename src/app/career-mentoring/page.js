"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingModal } from "@/components/booking/booking-modal";
import {
  Target,
  Brain,
  Map,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Minus,
} from "lucide-react";

const serviceSections = [
  {
    title: "Career Assessment",
    description:
      "We begin with a clear understanding of your journey so far — your experience, your strengths, and the responsibilities you've handled. This assessment highlights what sets you apart and what needs refinement so your career narrative supports your next step.",
    icon: Target,
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    bgGradient: "from-blue-500/5 via-blue-600/5 to-cyan-600/5",
  },
  {
    title: "Skill Set Evaluation",
    description:
      "Your skills are reviewed against the expectations of your target roles and industry trends.",
    icon: Brain,
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    bgGradient: "from-violet-500/5 via-purple-600/5 to-fuchsia-600/5",
    bulletPoints: [
      "Which skills are strong differentiators",
      "Which skills need development",
      "Which skills must be highlighted more clearly on your resume and LinkedIn",
    ],
    closingText:
      "This allows you to position yourself more accurately and confidently.",
  },
  {
    title: "Career Roadmap Creation",
    description:
      "Based on your goals, we create a practical roadmap that outlines the exact steps you need to take. This includes:",
    icon: Map,
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    bgGradient: "from-emerald-500/5 via-teal-600/5 to-cyan-600/5",
    bulletPoints: [
      "Target roles",
      "Possible career transitions",
      "Industry movement patterns",
      "What to improve and in what order",
      "Realistic timelines for progress",
    ],
    closingText: "Your roadmap becomes your personal direction guide.",
  },
  {
    title: "Job Search Strategy",
    description:
      "Today, job search has changed, and strategy matters more than ever.",
    icon: Search,
    gradient: "from-orange-500 via-red-600 to-pink-600",
    bgGradient: "from-orange-500/5 via-red-600/5 to-pink-600/5",
    subDescription:
      "We help you build a focused job search plan that includes:",
    bulletPoints: [
      "How to identify the right roles",
      "How to apply strategically",
      "How to use LinkedIn effectively",
      "How to approach hiring teams and recruiters",
      "How to increase your shortlisting chances",
    ],
    closingText:
      "You walk away with a clear, structured approach instead of trial-and-error.",
  },
];

export default function CareerMentoring() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        defaultServiceType="career_guidance"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-background via-muted/20 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-blue-500/20 via-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-br from-emerald-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <motion.div
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="px-5 py-2.5 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Career Mentoring
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Career Mentoring
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A structured mentoring process designed to help you understand
              where you stand, where you want to go, and how to move toward the
              roles you aim for with clarity, confidence, and direction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="relative">
        {serviceSections.map((section, index) => {
          const IconComponent = section.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={index}
              className={`relative py-16 md:py-24 ${
                isEven ? "bg-background" : "bg-muted/30"
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${section.bgGradient} opacity-50`}
              />

              {/* Decorative border */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50`}
              />

              <div className="relative container mx-auto px-4 max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="max-w-6xl mx-auto"
                >
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-12 items-start`}
                  >
                    {/* Icon and Title Section */}
                    <div className="shrink-0 lg:w-64">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-linear-to-br ${section.gradient} p-4 flex items-center justify-center shadow-lg backdrop-blur-sm`}
                          whileHover={{
                            scale: 1.15,
                            rotate: 5,
                            boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.3)",
                          }}
                          animate={{
                            boxShadow: [
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                              "0 20px 40px -5px rgba(0, 0, 0, 0.25)",
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            ],
                          }}
                          transition={{
                            boxShadow: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                            scale: { duration: 0.3 },
                            rotate: { duration: 0.3 },
                          }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </motion.div>
                        </motion.div>
                        <motion.h2
                          className="text-3xl md:text-4xl font-bold leading-tight"
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {section.title}
                        </motion.h2>
                        <motion.div
                          className={`w-16 h-1 bg-linear-to-r ${section.gradient} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: 64 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                          {section.description}
                        </p>

                        {section.subDescription && (
                          <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                            {section.subDescription}
                          </p>
                        )}

                        {section.bulletPoints && (
                          <div className="space-y-3 pt-2">
                            {section.title === "Skill Set Evaluation" && (
                              <p className="text-lg font-semibold text-foreground">
                                You'll know:
                              </p>
                            )}
                            <ul className="space-y-2">
                              {section.bulletPoints.map((point, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: 0.3 + idx * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                  }}
                                  viewport={{ once: true }}
                                  className="flex items-start gap-3 group"
                                  whileHover={{ x: 5 }}
                                >
                                  <motion.div
                                    className="shrink-0 mt-1 group/check"
                                    whileHover={{ scale: 1.3, rotate: 360 }}
                                    transition={{
                                      duration: 0.5,
                                      type: "spring",
                                      stiffness: 200,
                                    }}
                                  >
                                    <motion.div
                                      className={`w-5 h-5 rounded-full bg-linear-to-br ${section.gradient} flex items-center justify-center shadow-md backdrop-blur-sm`}
                                      animate={{
                                        scale: [1, 1.15, 1],
                                      }}
                                      whileHover={{
                                        boxShadow:
                                          "0 0 20px rgba(59, 130, 246, 0.5)",
                                      }}
                                      transition={{
                                        scale: {
                                          duration: 2,
                                          repeat: Infinity,
                                          delay: idx * 0.2,
                                        },
                                        boxShadow: { duration: 0.3 },
                                      }}
                                    >
                                      <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{
                                          duration: 3,
                                          repeat: Infinity,
                                          delay: idx * 0.3,
                                        }}
                                      >
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                      </motion.div>
                                    </motion.div>
                                  </motion.div>
                                  <motion.span
                                    className="text-base md:text-lg text-foreground/80 leading-relaxed pt-0.5"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                  >
                                    {point}
                                  </motion.span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {section.closingText && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-base md:text-lg text-foreground/90 leading-relaxed pt-2 italic"
                          >
                            {section.closingText}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom decorative border */}
              {index < serviceSections.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-30" />
              )}
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-linear-to-br from-primary/5 via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="relative container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Start your journey with our comprehensive career mentoring
              program. Get clarity, direction, and the tools you need to land
              your dream role.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl group"
                onClick={() => setBookingModalOpen(true)}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
