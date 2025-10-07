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
  Crown,
  Target,
  Zap,
  Award,
  Star,
  TrendingUp,
  Users,
  Globe,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const PersonalBrandingPage = () => {
  const services = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Brand Strategy",
      description:
        "Develop a comprehensive personal brand strategy aligned with your career goals and values.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Online Presence",
      description:
        "Optimize your digital footprint across LinkedIn, Twitter, and other professional platforms.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Content Strategy",
      description:
        "Create a content calendar and messaging framework to establish thought leadership.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Positioning",
      description:
        "Position yourself as an expert in your field through strategic networking and visibility.",
    },
  ];

  const benefits = [
    "Establish thought leadership in your industry",
    "Increase speaking and media opportunities",
    "Build a network of industry influencers",
    "Attract better career opportunities",
    "Command higher consulting rates",
    "Create multiple income streams",
  ];

  const process = [
    {
      step: "01",
      title: "Brand Discovery",
      description:
        "Deep dive into your values, expertise, and unique positioning in the market.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Create a comprehensive personal branding strategy with clear objectives and KPIs.",
    },
    {
      step: "03",
      title: "Content Framework",
      description:
        "Develop your messaging framework, content pillars, and communication style guide.",
    },
    {
      step: "04",
      title: "Platform Optimization",
      description:
        "Optimize all your professional platforms and create consistent brand presence.",
    },
    {
      step: "05",
      title: "Implementation & Growth",
      description:
        "Execute the strategy with ongoing support and optimization for maximum impact.",
    },
  ];

  const platforms = [
    {
      name: "LinkedIn",
      description: "Professional networking and thought leadership",
      icon: "💼",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      name: "Twitter/X",
      description: "Real-time industry conversations and networking",
      icon: "🐦",
      color: "bg-sky-500/10 text-sky-500",
    },
    {
      name: "Industry Publications",
      description: "Guest articles and expert commentary",
      icon: "📰",
      color: "bg-green-500/10 text-green-500",
    },
    {
      name: "Speaking Engagements",
      description: "Conference talks and industry events",
      icon: "🎤",
      color: "bg-purple-500/10 text-purple-500",
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
                <Crown className="w-4 h-4 mr-2" />
                Personal Branding
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Build Your Personal Brand and{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Become an Industry Leader
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your professional presence into a powerful personal
                brand that attracts opportunities, builds influence, and
                establishes you as a thought leader in your industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  <Link href="/contact-us">Start Building Your Brand</Link>
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
                      <h3 className="font-semibold">Brand Visibility</h3>
                      <p className="text-2xl font-bold text-primary">+500%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Network Growth</h3>
                      <p className="text-2xl font-bold text-blue-500">+300%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Opportunities</h3>
                      <p className="text-2xl font-bold text-green-500">+200%</p>
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
              Our Personal Branding Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to build and amplify your professional
              brand
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
                Why Personal Branding Matters for Experienced Professionals
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In today's digital age, your personal brand is your most
                valuable asset. It's how you differentiate yourself, build
                trust, and create opportunities. For experienced professionals,
                a strong personal brand can open doors to executive positions,
                board roles, speaking opportunities, and consulting engagements.
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
                      Our clients see an average 500% increase in brand
                      visibility and 200% more opportunities within 6 months of
                      implementation.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-500">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Brands Built
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
              Our 5-Step Brand Building Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A strategic approach to building your personal brand
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

      {/* Platforms Section */}
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
              Multi-Platform Brand Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build your brand across all the platforms that matter to your
              industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-3xl mb-3">{platform.icon}</div>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {platform.description}
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
              Ready to Build Your Personal Brand?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join industry leaders who have transformed their careers through
              strategic personal branding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              >
                <Link href="/contact-us">Start Building Your Brand</Link>
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

export default PersonalBrandingPage;
