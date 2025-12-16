"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { BookingModal } from "@/components/booking/booking-modal";
import {
  BarChart3,
  Linkedin,
  FileText,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const sections = [
  {
    sectionTitle: "SECTION 1 — LINKEDIN OPTIMIZATION",
    services: [
      {
        title: "LinkedIn Profile Scoring",
        description: "Our AI evaluates your profile on:",
        icon: BarChart3,
        gradient: "from-blue-500 via-blue-600 to-cyan-600",
        bgGradient: "from-blue-500/5 via-blue-600/5 to-cyan-600/5",
        bulletPoints: [
          "Keyword relevance",
          "Search visibility",
          "Content clarity",
          "Professional positioning",
          "Role alignment",
        ],
        closingText:
          "You receive a score along with actionable steps to strengthen it.",
        image: "/scoring/linkedin_report.png",
        showImage: true,
      },
      {
        title: "Profile Optimization Support",
        description: "We help you refine every section of your LinkedIn:",
        icon: Linkedin,
        gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
        bgGradient: "from-violet-500/5 via-purple-600/5 to-fuchsia-600/5",
        bulletPoints: [
          "Profile photo and banner selection",
          "Headline and About section clarity",
          "Experience structure and achievements",
          "Skills, certifications, and keywords",
          "Role-aligned positioning",
          "Consistency across your entire profile",
        ],
        closingText: "This ensures recruiters understand your value instantly.",
      },
      {
        title: "Custom LinkedIn Banner Design",
        description:
          "Your banner is redesigned to reflect your skills, direction, and professional identity so your profile looks polished and credible the moment someone visits it.",
        icon: TrendingUp,
        gradient: "from-emerald-500 via-teal-600 to-cyan-600",
        bgGradient: "from-emerald-500/5 via-teal-600/5 to-cyan-600/5",
        cta: "Get Started",
      },
    ],
  },
  {
    sectionTitle: "SECTION 2 — RESUME SCORING & OPTIMIZATION",
    services: [
      {
        title: "Resume Scoring",
        description: "Your resume is scored for:",
        icon: FileText,
        gradient: "from-orange-500 via-red-600 to-pink-600",
        bgGradient: "from-orange-500/5 via-red-600/5 to-pink-600/5",
        bulletPoints: [
          "ATS compatibility",
          "Keyword alignment",
          "Structure and clarity",
          "Role-fit",
          "Impact of achievements",
          "Formatting effectiveness",
        ],
        closingText: "You see exactly what needs improvement and why.",
        image: "/scoring/resume_report.png",
        showImage: true,
      },
      {
        title: "Resume Optimization Support",
        description:
          "We help you refine your resume so it aligns with your target roles and passes ATS filters easily by:",
        icon: FileText,
        gradient: "from-amber-500 via-orange-600 to-red-600",
        bgGradient: "from-amber-500/5 via-orange-600/5 to-red-600/5",
        bulletPoints: [
          "Improving keyword relevance",
          "Rewriting role descriptions",
          "Highlighting measurable achievements",
          "Aligning content with job expectations",
          "Strengthening clarity and readability",
        ],
        closingText:
          "The end result: a resume that positions you strongly and improves your shortlisting chances.",
        cta: "Get Started",
      },
    ],
  },
  {
    sectionTitle: "SECTION 3 — PROFESSIONAL PRESENCE BUILDING",
    services: [
      {
        title: "Professional Presence Building",
        description:
          "We help you establish a stronger professional presence on LinkedIn by publishing posts that highlight your credibility, expertise, and thought process. You receive:",
        icon: MessageSquare,
        gradient: "from-indigo-500 via-purple-600 to-pink-600",
        bgGradient: "from-indigo-500/5 via-purple-600/5 to-pink-600/5",
        bulletPoints: [
          "3–4 customized posts crafted for your domain and target roles",
          "Topics that highlight your strengths, technical skills, and industry awareness",
          "Posts designed to make a strong impression when recruiters or hiring managers visit your profile",
          "Engagement guidance on how to comment, respond, and stay active in a way that builds visibility",
          "Networking recommendations to help you connect with the right professionals, hiring teams, and industry peers",
        ],
        closingText:
          "This ensures your profile reflects more than your experience; it reflects your voice, confidence, and presence in the professional community.",
        cta: "Get Started",
      },
    ],
  },
];

export default function ScoringServices() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        defaultServiceType={null}
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
                className="px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2 inline" />
                AI-Powered Profile Scoring
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              AI-Powered Scoring
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Score and refine your LinkedIn profile and resume using our
              purpose-built, in-house AI. You receive a clear score, precise
              insights, and structured guidance to improve visibility and
              role-fit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="relative">
        {sections.map((sectionGroup, sectionIndex) => {
          return (
            <div key={sectionIndex}>
              {/* Section Title */}
              <section className="relative py-8 bg-muted/20">
                <div className="container mx-auto px-4 max-w-7xl">
                  <motion.h2
                    className="text-xl md:text-2xl font-bold text-center text-muted-foreground uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {sectionGroup.sectionTitle}
                  </motion.h2>
                </div>
              </section>

              {/* Services in this section */}
              {sectionGroup.services.map((service, serviceIndex) => {
                const IconComponent = service.icon;
                const isEven = (sectionIndex + serviceIndex) % 2 === 0;

                return (
                  <section
                    key={serviceIndex}
                    className={`relative py-16 md:py-24 ${
                      isEven ? "bg-background" : "bg-muted/30"
                    }`}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${service.bgGradient} opacity-50`}
                    />

                    {/* Decorative border */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50" />

                    <div className="relative container mx-auto px-4 max-w-7xl">
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                      >
                        {service.showImage && service.image ? (
                          // Layout with image: Title/Icon on top, Content, then Full-width Image
                          <div className="space-y-8">
                            {/* Icon and Title Section - Full Width */}
                            <div className="flex items-center gap-6">
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                  rotate: -10,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                  rotate: 0,
                                }}
                                transition={{
                                  duration: 0.6,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                <motion.div
                                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} p-4 flex items-center justify-center shadow-lg`}
                                  animate={{
                                    boxShadow: [
                                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                      "0 20px 40px -5px rgba(0, 0, 0, 0.2)",
                                      "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                    ],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <IconComponent className="w-8 h-8 text-white" />
                                </motion.div>
                              </motion.div>
                              <motion.div
                                className="flex-1"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                              >
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                                  {service.title}
                                </h3>
                                <motion.div
                                  className={`w-24 h-1 bg-linear-to-r ${service.gradient} rounded-full`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: 96 }}
                                  transition={{ duration: 0.8, delay: 0.4 }}
                                  viewport={{ once: true }}
                                />
                              </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4">
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                              >
                                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                                  {service.description}
                                </p>

                                {service.bulletPoints && (
                                  <div className="space-y-3 pt-2">
                                    <ul className="space-y-2">
                                      {service.bulletPoints.map(
                                        (point, idx) => (
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
                                              whileHover={{
                                                scale: 1.3,
                                                rotate: 360,
                                              }}
                                              transition={{
                                                duration: 0.5,
                                                type: "spring",
                                                stiffness: 200,
                                              }}
                                            >
                                              <motion.div
                                                className={`w-5 h-5 rounded-full bg-linear-to-br ${service.gradient} flex items-center justify-center shadow-md backdrop-blur-sm`}
                                                whileHover={{
                                                  boxShadow:
                                                    "0 0 20px rgba(59, 130, 246, 0.5)",
                                                }}
                                                animate={{
                                                  scale: [1, 1.15, 1],
                                                }}
                                                transition={{
                                                  scale: {
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: idx * 0.2,
                                                  },
                                                  boxShadow: {
                                                    duration: 0.3,
                                                  },
                                                }}
                                              >
                                                <motion.div
                                                  animate={{
                                                    rotate: [0, 10, -10, 0],
                                                  }}
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
                                              transition={{
                                                delay: 0.4 + idx * 0.1,
                                              }}
                                              viewport={{ once: true }}
                                            >
                                              {point}
                                            </motion.span>
                                          </motion.li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}

                                {service.closingText && (
                                  <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-base md:text-lg text-foreground/90 leading-relaxed pt-2 italic"
                                  >
                                    {service.closingText}
                                  </motion.p>
                                )}
                              </motion.div>
                            </div>

                            {/* Full Width Image Preview with Fade from Bottom */}
                            <motion.div
                              initial={{ opacity: 0, y: 100 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              viewport={{ once: true, margin: "-100px" }}
                              className="w-full"
                            >
                              <motion.div
                                className="relative group"
                                transition={{
                                  duration: 0.3,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                              >
                                {/* Animated glow effect */}
                                <motion.div
                                  className={`absolute -inset-1 bg-linear-to-br ${service.gradient} rounded-2xl opacity-20 blur-xl`}
                                  animate={{
                                    opacity: [0.2, 0.3, 0.2],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                                {/* Image container with fade from bottom mask */}
                                <motion.div
                                  className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm group/image w-full"
                                  whileHover={{
                                    boxShadow:
                                      "0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)",
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                >
                                  {/* Fade from bottom overlay - animated */}
                                  <motion.div
                                    className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent pointer-events-none z-10"
                                    initial={{ opacity: 1 }}
                                    whileInView={{ opacity: 0 }}
                                    transition={{
                                      duration: 1,
                                      delay: 0.5,
                                      ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                  />
                                  {/* Gradient overlay on hover */}
                                  <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                                  <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                      duration: 0.8,
                                      delay: 0.4,
                                      ease: [0.16, 1, 0.3, 1],
                                    }}
                                    viewport={{ once: true }}
                                    className="relative w-full"
                                  >
                                    <Image
                                      src={service.image}
                                      alt={`${service.title} preview`}
                                      width={1200}
                                      height={900}
                                      className="w-full h-auto object-cover"
                                      priority={serviceIndex === 0}
                                    />
                                  </motion.div>
                                  {/* Animated overlay gradient */}
                                  <motion.div
                                    className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none z-10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                      duration: 0.6,
                                      delay: 0.8,
                                    }}
                                    viewport={{ once: true }}
                                  />
                                  {/* Shine effect on hover */}
                                  <motion.div
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{
                                      duration: 0.8,
                                      ease: "easeInOut",
                                    }}
                                  />
                                </motion.div>
                              </motion.div>
                            </motion.div>
                          </div>
                        ) : (
                          // Layout without image: Standard two-column
                          <div
                            className={`flex flex-col ${
                              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                            } gap-8 lg:gap-12 items-start`}
                          >
                            {/* Icon and Title Section */}
                            <div className="shrink-0 lg:w-64">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                              >
                                <motion.div
                                  className={`w-16 h-16 rounded-xl bg-linear-to-br ${service.gradient} p-4 flex items-center justify-center shadow-lg backdrop-blur-sm`}
                                  whileHover={{
                                    scale: 1.15,
                                    rotate: 5,
                                    boxShadow:
                                      "0 20px 40px -5px rgba(0, 0, 0, 0.3)",
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
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                  {service.title}
                                </h3>
                                <div
                                  className={`w-16 h-1 bg-linear-to-r ${service.gradient} rounded-full`}
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
                                  {service.description}
                                </p>

                                {service.bulletPoints && (
                                  <div className="space-y-3 pt-2">
                                    <ul className="space-y-2">
                                      {service.bulletPoints.map(
                                        (point, idx) => (
                                          <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                              duration: 0.5,
                                              delay: 0.3 + idx * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3 group"
                                          >
                                            <div className="shrink-0 mt-1">
                                              <div
                                                className={`w-5 h-5 rounded-full bg-linear-to-br ${service.gradient} flex items-center justify-center shadow-md transition-transform`}
                                              >
                                                <CheckCircle2 className="w-3 h-3 text-white" />
                                              </div>
                                            </div>
                                            <span className="text-base md:text-lg text-foreground/80 leading-relaxed pt-0.5">
                                              {point}
                                            </span>
                                          </motion.li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}

                                {service.closingText && (
                                  <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-base md:text-lg text-foreground/90 leading-relaxed pt-2 italic"
                                  >
                                    {service.closingText}
                                  </motion.p>
                                )}

                                {service.cta && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="pt-4"
                                  >
                                    {service.title === "Custom LinkedIn Banner Design" ? (
                                      <Button
                                        size="lg"
                                        className="bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl group"
                                        onClick={() => setBookingModalOpen(true)}
                                      >
                                        {service.cta}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                      </Button>
                                    ) : service.title === "LinkedIn Profile Scoring" ? (
                                      <Link href="/linkedin/analyze">
                                        <Button
                                          size="lg"
                                          className="bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl group w-full"
                                        >
                                          {service.cta}
                                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                      </Link>
                                    ) : service.title === "Resume Optimization Support" ? (
                                      <Link href="/resume/analyze">
                                        <Button
                                          size="lg"
                                          className="bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl group w-full"
                                        >
                                          {service.cta}
                                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                      </Link>
                                    ) : (
                                      <Button
                                        size="lg"
                                        className="bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl group"
                                        onClick={() => setBookingModalOpen(true)}
                                      >
                                        {service.cta}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                      </Button>
                                    )}
                                  </motion.div>
                                )}
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Bottom decorative border */}
                    {serviceIndex < sectionGroup.services.length - 1 && (
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-30" />
                    )}
                  </section>
                );
              })}
            </div>
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
              Ready to Optimize Your Profile?
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get started with AI-powered scoring and optimization to improve
              your visibility, role-fit, and professional presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl group"
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
