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
  Target,
  Zap,
  Award,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const ResumeOptimizationPage = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume Creation",
      description:
        "Professional resume creation from scratch tailored to your target role and industry.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Resume Review",
      description:
        "Comprehensive analysis of your existing resume with detailed feedback and recommendations.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ATS Optimization",
      description:
        "Optimize your resume to pass Applicant Tracking Systems and reach human recruiters.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Customization",
      description:
        "Tailored content and formatting specific to your industry and target companies.",
    },
  ];

  const benefits = [
    "Get 3x more interview callbacks",
    "Pass ATS screening systems",
    "Stand out from 250+ applicants per job",
    "Increase salary negotiation power",
    "Professional formatting and design",
    "Industry-specific optimization",
  ];

  const process = [
    {
      step: "01",
      title: "Career Consultation",
      description:
        "In-depth discussion about your career goals, target roles, and industry requirements.",
    },
    {
      step: "02",
      title: "Content Strategy",
      description:
        "Strategic positioning of your experience and skills to match job requirements.",
    },
    {
      step: "03",
      title: "Resume Creation/Review",
      description:
        "Professional resume creation or comprehensive review of your existing resume.",
    },
    {
      step: "04",
      title: "ATS Optimization",
      description:
        "Keyword optimization and formatting to ensure ATS compatibility and visibility.",
    },
    {
      step: "05",
      title: "Final Review & Delivery",
      description:
        "Quality check, final revisions, and delivery of your optimized resume in multiple formats.",
    },
  ];

  const formats = [
    {
      name: "ATS-Friendly PDF",
      description: "Optimized for Applicant Tracking Systems",
      icon: "📄",
    },
    {
      name: "Word Document",
      description: "Editable format for future updates",
      icon: "📝",
    },
    {
      name: "Plain Text",
      description: "For online applications and forms",
      icon: "📋",
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
                <FileText className="w-4 h-4 mr-2" />
                Resume Services
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Create a Resume That{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Gets You Hired
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional resume creation and optimization services to help
                you stand out from the competition and land your dream job with
                confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  <Link href="/resume/analyze">Get Started Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact-us">Schedule Consultation</Link>
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
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Interview Rate</h3>
                      <p className="text-2xl font-bold text-primary">+300%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">ATS Pass Rate</h3>
                      <p className="text-2xl font-bold text-blue-500">95%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Client Satisfaction</h3>
                      <p className="text-2xl font-bold text-green-500">98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Resume Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resume solutions to help you land your next
              opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Professional Resume Services Matter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In today's competitive job market, your resume is often your
                first impression. With recruiters spending an average of 7
                seconds scanning each resume, professional optimization can make
                the difference between landing an interview and being
                overlooked.
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
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Our clients see an average 300% increase in interview
                      callbacks and 95% ATS pass rate with our optimized
                      resumes.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">
                        Industries Covered
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-500">
                        2000+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Resumes Created
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
              Our 5-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to create your perfect resume
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

      {/* Formats Section */}
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
              Multiple Formats Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your resume in all the formats you need for different
              applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{format.icon}</div>
                    <CardTitle className="text-xl">{format.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {format.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Winning Resume?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have landed their dream jobs
              with our resume services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              >
                <Link href="/resume/analyze">Start Your Resume</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact-us">Book Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResumeOptimizationPage;
