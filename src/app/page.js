"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Brain,
  FileText,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Target,
  TrendingUp,
  MessageSquare,
  Loader2,
  AlertCircle,
  Star,
} from "lucide-react";
import Link from "next/link";
import { api } from "@/components/api/api";
import { BookingAPI } from "@/components/api/booking";

const Home = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await BookingAPI.createBooking({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        serviceType: "interview_preparation", // Default to interview preparation for "Book yourself" button
      });

      if (response.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setIsContactDialogOpen(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(response.error || "Failed to submit booking");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error.error ||
          error.message ||
          "Failed to submit booking. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center pt-6 md:pt-12 pb-20 md:pb-28">
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
          <div className="text-center space-y-4 md:space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 text-primary text-xs md:text-sm font-semibold shadow-lg backdrop-blur-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                Comprehensive Career Services
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
                  Elevate Your Career Journey
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  with Expert Guidance
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                From interview preparation to career mentoring and AI-powered
                profile analysis - we provide comprehensive services to help you
                succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interview Preparation Services Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-muted/20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-primary text-sm font-semibold mb-6 shadow-lg">
              <Briefcase className="w-4 h-4" />
              Interview Preparation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Interview Preparation Services/Kit
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Comprehensive interview preparation package to help you ace your
              next interview with confidence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Interview Script Preparation",
                description:
                  "Get personalized interview scripts tailored to your role and experience level.",
                icon: FileText,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Interview Execution Demo",
                description:
                  "Watch sample interview demonstrations to understand best practices and techniques.",
                icon: MessageSquare,
                color: "from-violet-500 to-purple-500",
              },
              {
                title: "Mock Interview - Round 1",
                description:
                  "First round of expert-led mock interview to assess your current interview skills.",
                icon: Users,
                color: "from-emerald-500 to-teal-500",
              },
              {
                title: "Mock Interview - Round 2",
                description:
                  "Second round of mock interview to refine your skills and address improvement areas.",
                icon: Target,
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Mock Interview Report",
                description:
                  "Detailed analysis report with scoring, strengths, and areas for improvement.",
                icon: TrendingUp,
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Feedback Session",
                description:
                  "One-on-one feedback session with expert to discuss mock interview results.",
                icon: MessageSquare,
                color: "from-indigo-500 to-blue-500",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group relative h-full overflow-hidden border-0 bg-gradient-to-br from-card via-card to-card/80 hover:shadow-2xl transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <CardHeader className="relative space-y-3 pb-3 pt-6 px-5">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold leading-tight">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-foreground/70">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={() => setIsContactDialogOpen(true)}
              className="px-8 py-6 text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              Book yourself
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Career Guidance Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Career Guidance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Career Guidance & Mentoring Services
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              Get personalized career guidance from industry experts to navigate
              your career path successfully
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Career Assessment",
                description:
                  "Comprehensive assessment of your skills, interests, and career goals to identify the best career path for you.",
                icon: Brain,
                color: "from-violet-500 to-purple-600",
                bgGradient:
                  "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
              },
              {
                title: "Technical Assessment",
                description:
                  "Role-specific technical skills evaluation to identify strengths and areas for improvement (if applicable).",
                icon: Target,
                color: "from-blue-500 to-cyan-600",
                bgGradient:
                  "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
              },
              {
                title: "Career Roadmap Formulation",
                description:
                  "Create a personalized career roadmap with milestones, skill development plans, and timeline.",
                icon: TrendingUp,
                color: "from-emerald-500 to-teal-600",
                bgGradient:
                  "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
              },
              {
                title: "Job Search Strategies & Implementation",
                description:
                  "Learn effective job search strategies and get support in implementing them to land your dream job.",
                icon: BookOpen,
                color: "from-orange-500 to-red-600",
                bgGradient:
                  "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`relative h-full group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-gradient-to-br ${service.bgGradient}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <CardHeader className="relative pb-4 pt-8 px-8">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300 mb-6`}
                      >
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base md:text-lg leading-relaxed text-foreground/70">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Career Success Partner
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              We provide end-to-end career support to help you achieve your
              professional goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Guidance",
                description:
                  "Work with industry experts who understand the job market and can provide personalized advice tailored to your career goals.",
                icon: Users,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Proven Results",
                description:
                  "Our methods have helped thousands of professionals land their dream jobs and advance their careers successfully.",
                icon: TrendingUp,
                color: "from-violet-500 to-purple-500",
              },
              {
                title: "Comprehensive Support",
                description:
                  "From interview preparation to career planning, we offer a complete suite of services to support your entire career journey.",
                icon: Target,
                color: "from-emerald-500 to-teal-500",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group relative h-full overflow-hidden border-0 bg-gradient-to-br from-card via-card to-card/80 hover:shadow-2xl transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <CardHeader className="relative space-y-3 pb-3 pt-6 px-5">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold leading-tight">
                        {benefit.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-foreground/70">
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Analysis Services CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-muted/20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

              <CardContent className="relative p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                      <Brain className="w-4 h-4" />
                      AI-Powered Analysis
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      Optimize Your Professional Profile
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      Get instant AI-powered analysis of your LinkedIn profile,
                      resume, and their alignment. Receive detailed scoring and
                      actionable recommendations to improve your professional
                      presence.
                    </p>
                    <div className="space-y-4 mb-8">
                      {[
                        "LinkedIn Profile Review",
                        "Resume ATS Compatibility Check",
                        "LinkedIn vs Resume Alignment Analysis",
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-foreground font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="group relative px-8 py-6 text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                    >
                      <Link
                        href="/scoring-services"
                        className="inline-flex items-center"
                      >
                        Explore Analysis Services
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative hidden lg:block"
                  >
                    <div className="relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-2xl border border-border/50 backdrop-blur-sm">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                            <Brain className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              AI-Powered
                            </div>
                            <div className="text-2xl font-bold">
                              Instant Analysis
                            </div>
                          </div>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-muted/50 rounded-xl p-4">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                              98%
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Accuracy
                            </div>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4">
                            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                              5K+
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Reviews
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-muted/30 via-muted/50 to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-lg">
              ⭐ Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              See how professionals have transformed their careers with our
              comprehensive services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul Mehta",
                designation: "Software Engineer",
                company: "Tech Company",
                testimonial:
                  "The mock interview sessions were incredibly helpful! The feedback was detailed and actionable. I landed my dream job at a top tech company within 2 months.",
                rating: 5,
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Priya Sharma",
                designation: "Product Manager",
                company: "Startup",
                testimonial:
                  "Career guidance service helped me transition from engineering to product management. The roadmap and strategies were exactly what I needed.",
                rating: 5,
                color: "from-violet-500 to-purple-500",
              },
              {
                name: "Amit Kumar",
                designation: "Data Scientist",
                company: "Fortune 500",
                testimonial:
                  "The interview preparation kit was comprehensive. The scripts and demo sessions prepared me well, and I aced all my interviews. Highly recommended!",
                rating: 5,
                color: "from-emerald-500 to-teal-500",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="group relative h-full overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color}`}
                  />
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6 relative">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.designation}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />

              <CardContent className="relative p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4" />
                    Ready to Transform Your Career?
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Start Your Journey Today
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Whether you need interview preparation, career guidance, or
                    profile optimization, we're here to help you succeed. Get
                    started with our comprehensive services today.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      size="lg"
                      onClick={() => setIsContactDialogOpen(true)}
                      className="px-8 py-6 text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 text-lg border-2 hover:bg-primary/5 transition-colors"
                    >
                      <Link href="/scoring-services">Explore Services</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Book Interview Preparation Services
            </DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you soon to discuss
              your interview preparation needs.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleContactSubmit} className="space-y-6 mt-4">
            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Thank you for contacting us! We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="p-4 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    {errorMessage || "Failed to submit form. Please try again."}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name..."
                  value={formData.firstName}
                  onChange={handleFormChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name..."
                  value={formData.lastName}
                  onChange={handleFormChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address..."
                value={formData.email}
                onChange={handleFormChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your needs</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message..."
                className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                rows={6}
                value={formData.message}
                onChange={handleFormChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactDialogOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
