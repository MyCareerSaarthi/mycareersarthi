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
} from "lucide-react";

const bundles = [
  {
    name: "Profile & Resume Foundation",
    price: "₹7,999",
    description:
      "This bundle focuses on fixing the core assets recruiters evaluate first: your LinkedIn profile and your resume.",
    includes: [
      "Detailed analysis of your current LinkedIn profile with a diagnostic report",
      "LinkedIn profile redesign and optimization with a target performance score above 7",
      "In-depth review of your existing resume with a structured report",
      "Resume redesign and optimization aligned to hiring expectations, with a target score above 7",
      "LinkedIn and resume alignment check to identify gaps and inconsistencies",
      "Closure of all identified gaps and delivery of a revised alignment score above 7",
    ],
    outcome:
      "A strong, consistent LinkedIn and resume foundation that improves recruiter trust and shortlisting potential.",
    icon: Package,
  },
  {
    name: "Interview Preparation & Final Readiness",
    price: "₹9,999",
    description:
      "This bundle focuses on interview performance and closing gaps that block final offers.",
    includes: [
      "Mock Interview Round 1 to assess your current interview readiness",
      "Detailed mock interview report highlighting gaps, strengths, and improvement areas",
      "Interview script preparation and structured response review",
      "Mock Interview Round 2 to reassess improvements and validate gap closure",
    ],
    outcome:
      "Improved confidence, sharper responses, and stronger interview performance aligned with your target role.",
    icon: MessageSquare,
  },
  {
    name: "Career Clarity & Job Search Strategy",
    price: "₹15,999",
    description:
      "This bundle goes beyond documents and focuses on direction, clarity, and how you approach the job market.",
    includes: [
      "Comprehensive career assessment with a gap analysis report",
      "Evaluation of future career aspirations, target roles, and goals",
      "Personalized career roadmap with a clear, actionable plan",
      "Structured job search strategy for inbound opportunities",
      "Structured job search strategy for outbound applications and outreach",
      "Clear action plan framing to guide execution",
    ],
    outcome:
      "Clarity on where you are, where you should go next, and a practical strategy to approach the job market with intent instead of guesswork.",
    icon: Target,
  },
];

const Pricing = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState(null);

  const handleBookingClick = (serviceType = null) => {
    setSelectedServiceType(serviceType);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        defaultServiceType={selectedServiceType}
      />

      {/* Bundles Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
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
              <Package className="w-4 h-4 mr-2 inline" />
              One-Time Bundles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Comprehensive Career Transformation Bundles
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete packages designed to address specific career challenges
              with measurable outcomes.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {bundles.map((bundle, idx) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="relative flex h-full flex-col gap-6 p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <bundle.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{bundle.name}</h3>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold text-primary">
                          {bundle.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{bundle.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-foreground">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {bundle.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      Outcome:
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {bundle.outcome}
                    </p>
                    <Button
                      className="w-full rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                      onClick={() => handleBookingClick()}
                    >
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
