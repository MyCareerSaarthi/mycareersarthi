"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking/booking-modal";
import {
  CheckCircle2,
  Target,
  Sparkles,
  Package,
  Zap,
  Award,
  TrendingUp,
  Users,
  MessageSquare,
  ArrowRight,
  Briefcase,
  FileText,
  Linkedin,
  Mic,
  Star,
  ChevronRight,
} from "lucide-react";

// Pricing data organized by service categories
const pricingCategories = [
  {
    id: "profile-optimization",
    name: "Profile Optimization & Re-Design",
    description:
      "Transform your professional presence with optimized LinkedIn and resume profiles that get noticed by recruiters.",
    icon: Linkedin,
    color: "blue-500",
    bundlePrice: 8999,
    bundleName: "Complete Profile Bundle",
    services: [
      {
        name: "LinkedIn Profile Re-Design & Optimization",
        price: 6000,
        details: [
          "Current Profile Analysis along with Report",
          "Profile Optimization with a Target Score > 7+",
        ],
      },
      {
        name: "Resume Redesign & Enrichment",
        price: 4000,
        details: [
          "Current Resume Analysis along with Report",
          "Resume Re-design & Optimization with a Target Score > 7+",
        ],
      },
      {
        name: "LinkedIn & Resume Profile Alignment",
        price: 2000,
        details: [
          "Current Alignment Score with Gaps",
          "Closure of All gaps & Revised alignment Score > 7+",
        ],
      },
    ],
  },
  {
    id: "personal-branding",
    name: "Personal Branding Services",
    description:
      "Build your professional brand and establish thought leadership in your industry.",
    icon: FileText,
    color: "violet-500",
    bundlePrice: null,
    bundleName: null,
    services: [
      {
        name: "LinkedIn Management & Personal Branding",
        price: 9999,
        details: [
          "Current Branding Activities Score and Report",
          "LinkedIn Posting - 4 Posts & One Article",
          "Engagement Strategy",
          "Network Expansion Strategies",
        ],
      },
    ],
  },
  {
    id: "career-services",
    name: "Career Services",
    description:
      "Get clarity on your career path and develop a winning job search strategy.",
    icon: Target,
    color: "emerald-500",
    bundlePrice: 9999,
    bundleName: "Career Clarity Bundle",
    services: [
      {
        name: "Career Assessment & Career Roadmap",
        price: 6000,
        details: [
          "Discovery Session - Current Profile & Career Journey & Aspirations",
          "Written Test",
          "Mock Interview",
          "Current Career Assessment along with Report with Gaps",
          "Career Roadmap With Suggested Action Plan",
        ],
      },
      {
        name: "Job Search Strategy & System Implementation",
        price: 7500,
        details: [
          "Strategies for InBound Job Search Session",
          "Strategies for OutBound Job Search",
          "Action Plan Framing",
        ],
      },
    ],
  },
  {
    id: "interview-services",
    name: "Interview Services",
    description:
      "Ace your interviews with expert coaching and comprehensive preparation.",
    icon: Mic,
    color: "orange-500",
    bundlePrice: 11999,
    bundleName: "Interview Mastery Bundle",
    mockInterviewBundle: 2499,
    services: [
      {
        name: "Mock Interview Service",
        price: 3000,
        bundlePrice: 2499,
        isPromo: true,
        details: [
          "Mock Interview Round 1 to assess current level",
          "Mock Interview Report along with Gaps & Suggestions",
        ],
      },
      {
        name: "Interview Preparation Module",
        price: 17000,
        priceBreakdown:
          "₹2,500 assessment + ₹12,000 training + ₹2,500 reassessment",
        details: [
          "Mock Interview Round 1 to assess current level",
          "Mock Interview Report along with Gaps & Suggestions",
          "Interview Preparation Training Sessions - Qs Response Framing - 4 Sessions",
          "Mock Interview Round 2 to Reassess Gap Closure",
          "Final Mock Interview Report along with Gaps & Suggestions",
        ],
      },
    ],
  },
];

const Pricing = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [activeCategory, setActiveCategory] = useState("profile-optimization");

  const handleBookingClick = (serviceType = null) => {
    setSelectedServiceType(serviceType);
    setBookingModalOpen(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  const calculateSavings = (category) => {
    const totalIndividual = category.services.reduce(
      (sum, s) => sum + s.price,
      0,
    );
    return totalIndividual - category.bundlePrice;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        defaultServiceType={selectedServiceType}
      />

      <section className="relative pt-12 pb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

        <div className="relative container mx-auto px-4 max-w-6xl">
          {/* Minimal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground">
              Individual services or bundles – choose what works for you.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card hover:bg-primary/10 border border-border hover:border-primary/30"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative py-8 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {pricingCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: activeCategory === category.id ? 1 : 0,
                y: activeCategory === category.id ? 0 : 30,
                display: activeCategory === category.id ? "block" : "none",
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Category Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {category.name}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className={``}>
                {/* Individual Services Column */}
                <div className="space-y-4">
                  <div
                    className={`grid gap-8 lg:grid-cols-${category.services.length} ${category.services.length === 1 ? "max-w-xl mx-auto" : ""}`}
                  >
                    {category.services.map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div className="">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="text-lg font-semibold">
                                  {service.name}
                                </h4>
                                {service.isPromo && (
                                  <Badge
                                    variant="secondary"
                                    className="bg-green-500/10 text-green-600 border-green-500/20"
                                  >
                                    <Star className="w-3 h-3 mr-1" />
                                    Special Offer
                                  </Badge>
                                )}
                              </div>
                              {service.priceBreakdown && (
                                <p className="text-xs text-muted-foreground mb-2">
                                  {service.priceBreakdown}
                                </p>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-foreground">
                                ₹{formatPrice(service.price)}
                              </div>
                              {service.bundlePrice && (
                                <div className="text-sm text-green-600 font-medium">
                                  Bundle: ₹{formatPrice(service.bundlePrice)}
                                </div>
                              )}
                            </div>
                          </div>

                          <ul className="space-y-2 mb-4">
                            {service.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                {detail}
                              </li>
                            ))}
                          </ul>

                          <Button
                            variant="outline"
                            className="w-full rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                            onClick={() => handleBookingClick(service.name)}
                          >
                            Get Started
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {category.bundlePrice && (
                  <div className="col-span-3 mt-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Save with Bundle
                    </h3>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <Card
                        className={`relative p-8 bg-${category.color} border-0 shadow-2xl overflow-hidden`}
                      >
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                              <Award className="w-4 h-4 mr-1" />
                              Best Value
                            </Badge>
                            {calculateSavings(category) > 0 && (
                              <Badge className="bg-white text-green-600 border-0 font-bold">
                                Save ₹{formatPrice(calculateSavings(category))}
                              </Badge>
                            )}
                          </div>

                          <h4 className="text-2xl font-bold text-white mb-2">
                            {category.bundleName}
                          </h4>

                          <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-5xl font-bold text-white">
                              ₹{formatPrice(category.bundlePrice)}
                            </span>
                            {calculateSavings(category) > 0 && (
                              <span className="text-lg text-white/60 line-through">
                                ₹
                                {formatPrice(
                                  category.services.reduce(
                                    (sum, s) => sum + s.price,
                                    0,
                                  ),
                                )}
                              </span>
                            )}
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                            <p className="text-white/90 font-medium mb-3">
                              Everything included:
                            </p>
                            <ul className="space-y-2">
                              {category.services.map((service, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-white/90"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                  <span className="text-sm">
                                    {service.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            size="lg"
                            className="w-full rounded-full bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                            onClick={() =>
                              handleBookingClick(category.bundleName)
                            }
                          >
                            Get the Bundle
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>

                          {category.mockInterviewBundle && (
                            <div className="mt-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                              <p className="text-white/90 text-sm text-center">
                                Or get Mock Interview Only:{" "}
                                <strong>
                                  ₹{formatPrice(category.mockInterviewBundle)}
                                </strong>
                              </p>
                            </div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
        <div className="relative container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4 mr-2 inline" />
              Why Choose MyCareerSarthi
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Built-in AI + Expert Guidance = Real Results
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every plan includes access to our proprietary AI tools designed
              specifically for career growth and profile optimization.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "AI-Powered Analysis",
                description:
                  "Our in-house AI analyzes your profile against target roles, identifying gaps and opportunities with precision.",
                icon: Sparkles,
              },
              {
                title: "Expert Mentoring",
                description:
                  "Human coaches provide personalized guidance, strategic advice, and accountability throughout your journey.",
                icon: Users,
              },
              {
                title: "Measurable Outcomes",
                description:
                  "Track your progress with scoring systems, performance metrics, and clear improvement benchmarks.",
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="relative container mx-auto px-4 max-w-5xl z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-12 bg-gradient-to-tr from-primary/10 via-card to-background border-2 border-primary/30 shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of professionals who have accelerated their
                careers with MyCareerSarthi. Start with a plan that fits your
                needs today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8"
                  onClick={() => handleBookingClick()}
                >
                  Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 px-8"
                  onClick={() => handleBookingClick()}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
