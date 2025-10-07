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
  Linkedin,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  Star,
} from "lucide-react";
import Link from "next/link";

const LinkedinOptimizationPage = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Profile Optimization",
      description:
        "Complete LinkedIn profile makeover with keyword optimization, compelling headlines, and professional summaries.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Content Strategy",
      description:
        "Personalized content calendar and posting strategy to increase engagement and build thought leadership.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network Growth",
      description:
        "Strategic networking tactics to connect with industry leaders and expand your professional reach.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Engagement Boost",
      description:
        "Proven techniques to increase profile views, connection requests, and meaningful interactions.",
    },
  ];

  const benefits = [
    "Increase profile views by 300%",
    "Get 5x more connection requests",
    "Build thought leadership in your industry",
    "Attract better job opportunities",
    "Establish professional credibility",
    "Create meaningful business relationships",
  ];

  const process = [
    {
      step: "01",
      title: "Profile Audit",
      description:
        "Comprehensive analysis of your current LinkedIn profile and identification of improvement areas.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Custom strategy tailored to your industry, goals, and target audience.",
    },
    {
      step: "03",
      title: "Profile Optimization",
      description:
        "Complete profile makeover including headline, summary, experience, and skills optimization.",
    },
    {
      step: "04",
      title: "Content Planning",
      description:
        "30-day content calendar with engaging posts designed to showcase your expertise.",
    },
    {
      step: "05",
      title: "Implementation Support",
      description:
        "Ongoing guidance and support to implement the strategy and track results.",
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
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Optimization
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform Your LinkedIn Profile Into a{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Career Magnet
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Get expert LinkedIn optimization to attract better
                opportunities, build thought leadership, and grow your
                professional network with proven strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  <Link href="/linkedin/analyze">Get Started Now</Link>
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
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Profile Views</h3>
                      <p className="text-2xl font-bold text-primary">+300%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">New Connections</h3>
                      <p className="text-2xl font-bold text-blue-500">+500%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Job Opportunities</h3>
                      <p className="text-2xl font-bold text-green-500">+200%</p>
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
              What You'll Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive LinkedIn optimization services designed to maximize
              your professional impact
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
                Why LinkedIn Optimization Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                LinkedIn is the world's largest professional network with over
                900 million users. A well-optimized profile can be your gateway
                to career opportunities, business partnerships, and industry
                recognition.
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
                      Our clients see an average increase of 300% in profile
                      views and 500% more connection requests within 30 days.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">30+</div>
                      <div className="text-sm text-muted-foreground">
                        Industries Served
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-500">
                        1000+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Profiles Optimized
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
              A systematic approach to transform your LinkedIn presence
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
              Ready to Transform Your LinkedIn Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have elevated their careers
              through strategic LinkedIn optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              >
                <Link href="/linkedin/analyze">Start Your Optimization</Link>
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

export default LinkedinOptimizationPage;
