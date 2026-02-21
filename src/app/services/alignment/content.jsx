"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  Linkedin,
  Target,
  Zap,
  Award,
  Star,
  TrendingUp,
  BarChart3,
  AlertCircle,
  Lightbulb,
  ArrowLeftRight,
} from "lucide-react";
import Link from "next/link";

const ComparisonServicePage = () => {
  const features = [
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Comprehensive Alignment Analysis",
      description:
        "Deep comparison between your LinkedIn profile and resume to identify gaps, contradictions, and alignment opportunities.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Section-Wise Scoring",
      description:
        "Detailed scoring across skills, experience, education, keywords, and summary sections with actionable insights.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Role-Specific Analysis",
      description:
        "Optional role-based comparison to see how well your profile aligns with specific job requirements.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI-Powered Recommendations",
      description:
        "Intelligent suggestions to improve alignment, fix contradictions, and enhance your professional presence.",
    },
  ];

  const benefits = [
    "Identify gaps between LinkedIn and resume",
    "Fix contradictions in dates and job titles",
    "Ensure consistent professional branding",
    "Improve ATS compatibility",
    "Enhance role-specific alignment",
    "Get actionable improvement recommendations",
  ];

  const analysisSections = [
    {
      name: "Skills Alignment",
      description:
        "Compare skills listed on LinkedIn vs resume, identify missing skills, and ensure consistency.",
      icon: <Award className="w-5 h-5" />,
    },
    {
      name: "Experience Verification",
      description:
        "Detect contradictions in job titles, dates, and responsibilities between platforms.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Education & Certifications",
      description:
        "Ensure all educational qualifications and certifications are consistently represented.",
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: "About/Summary Analysis",
      description:
        "Compare professional summaries for tone, keywords, and messaging consistency.",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Keywords & Branding",
      description:
        "Analyze keyword overlap and branding consistency across both platforms.",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Upload Your Documents",
      description:
        "Provide your LinkedIn profile URL or PDF, and upload your resume PDF for analysis.",
    },
    {
      step: "02",
      title: "Optional Role Selection",
      description:
        "Optionally select a target role or paste a job description for role-specific alignment insights.",
    },
    {
      step: "03",
      title: "AI-Powered Analysis",
      description:
        "Our advanced AI analyzes both documents, comparing sections, detecting gaps, and identifying contradictions.",
    },
    {
      step: "04",
      title: "Comprehensive Report",
      description:
        "Receive a detailed report with scores, insights, and actionable recommendations for each section.",
    },
    {
      step: "05",
      title: "Take Action",
      description:
        "Use the recommendations to update your LinkedIn profile and resume for better alignment and consistency.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge variant="outline" className="w-fit">
                <ArrowLeftRight className="w-4 h-4 mr-2" />
                Profile Comparison
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Align Your LinkedIn & Resume for{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Maximum Impact
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive comparison service that identifies gaps,
                contradictions, and alignment opportunities between your
                LinkedIn profile and resume. Ensure consistency and optimize
                both for better career opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  <Link href="/compare">Start Comparison</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact-us">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Alignment Score</h3>
                      <p className="text-2xl font-bold text-primary">
                        0-10 Scale
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Section Analysis</h3>
                      <p className="text-2xl font-bold text-blue-500">
                        5 Sections
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Recommendations</h3>
                      <p className="text-2xl font-bold text-green-500">
                        Actionable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis and insights to improve your professional
              presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detailed Section Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive comparison across all key professional sections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analysisSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {section.icon}
                      </div>
                      <CardTitle className="text-lg">{section.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Profile Alignment Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Inconsistencies between your LinkedIn profile and resume can
                raise red flags with recruiters and hiring managers. Our
                comparison service helps you maintain a consistent, professional
                brand across all platforms.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-2xl p-8 border border-primary/10">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowLeftRight className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Comprehensive Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Get detailed insights into alignment, gaps, and
                      opportunities for improvement across all professional
                      sections.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">
                        Sections Analyzed
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-500">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        AI-Powered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 5-step process to get your comprehensive comparison report
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What's in Your Report?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get actionable insights with detailed scoring and recommendations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <CardTitle>Overall Alignment Score</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A comprehensive 0-10 score indicating how well your LinkedIn
                  and resume align across all sections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <CardTitle>Role Fit Score</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  When a role is provided, get a specific score showing how well
                  your profile matches the job requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <CardTitle>Actionable Recommendations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Specific, actionable recommendations to improve alignment and
                  fix identified issues.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Align Your Professional Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get comprehensive insights into how your LinkedIn profile and
              resume align, and take action to improve your professional brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              >
                <Link href="/compare">Start Comparison Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonServicePage;
