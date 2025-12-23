"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { BookingModal } from "@/components/booking/booking-modal";
import {
  Sparkles,
  Target,
  Brain,
  FileText,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Zap,
  Briefcase,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import HeroCarousel from "@/components/home/hero-carousel";
import Image from "next/image";
import StepsRoadmap from "@/components/home/steps-roadmap";

const heroGlanceCards = [
  {
    title: "Career Assessment & Roadmap",
    copy: "Clarity on strengths, role-fit, and next steps with a tailored path toward your goals.",
    icon: Target,
    link: "/career-mentoring",
  },
  {
    title: "Interview Preparation",
    copy: "Mock interviews and expert AI feedback for confident answers.",
    icon: MessageSquare,
    link: "/interview-preparation",
  },
  {
    title: "Your Profile Scorer",
    copy: "Built-in AI compares your LinkedIn and resume to target roles, highlighting alignment and gaps.",
    icon: BarChart3,
    link: "/ai-powered-profile-scoring",
  },
];

const serviceStrip = [
  {
    title: "Career Mentoring",
    description:
      "We guide you through career assessment, skill evaluation, roadmap creation, and job search strategy so you know exactly which roles to target and how to move toward them.",
    cta: "Get Started",
    icon: Briefcase,
    link: "/career-mentoring",
    serviceType: "career_guidance",
  },
  {
    title: "Interview Preparation",
    description:
      "Request mock interviews, receive expert evaluation, and get AI + manual feedback so you know how hiring teams interpret your answers.",
    cta: "Get Started",
    icon: MessageSquare,
    link: "/interview-preparation",
    serviceType: "interview_preparation",
  },
  {
    title: "AI-Powered Profile Scoring",
    description:
      "Our purpose-built AI compares your LinkedIn and resume against your target roles, revealing alignment, keywords, and gaps with clear guidance.",
    cta: "Get Started",
    icon: Brain,
    link: "/ai-powered-profile-scoring",
    serviceType: null,
  },
];

const whyChoose = [
  {
    title: "AI-Powered Analysis",
    body: "Understand strengths, role-fit, and career path so you know exactly which opportunities to target and how to approach them.",
    icon: Brain,
  },
  {
    title: "Expert Guidance",
    body: "Recommendations grounded in hiring insights and recruiter behavior to align your profile with decision-makers' expectations.",
    icon: Award,
  },
  {
    title: "Comprehensive Reports",
    body: "Clear steps to refine LinkedIn, resume, and narrative so your professional identity communicates your value effectively.",
    icon: FileText,
  },
  {
    title: "Measurable Improvement",
    body: "Mentoring on visibility, engagement, and strategy so you see progress in recruiter interest and search performance.",
    icon: TrendingUp,
  },
];

const professionalServices = [
  {
    title: "LinkedIn Profile Review & Optimization",
    description:
      "A detailed evaluation with specific recommendations to improve relevance and recruiter engagement.",
    items: [
      "Headline and summary enhancement",
      "Keywords based on target roles",
      "Experience section restructuring",
      "Visual and content recommendations",
    ],
    cta: "Get Started",
    icon: Users,
    route: "/linkedin/analyze",
    serviceType: null,
  },
  {
    title: "Resume Creation, Review & Optimization",
    description:
      "A resume that reflects achievements and passes ATS screening.",
    items: [
      "Resume creation or restructuring",
      "ATS compatibility check",
      "Keyword and role-fit alignment",
      "Formatting and clarity improvements",
    ],
    cta: "Get Started",
    icon: FileText,
    route: "/resume/analyze",
    serviceType: null,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Best for getting started with profile improvement",
    price: "₹2,499",
    period: "",
    highlights:
      "A structured beginning to strengthen your LinkedIn and resume with essential insights.",
    features: [
      "LinkedIn profile optimisation",
      "Basic resume analysis and ATS scoring",
      "Access to built-in MCS AI tools",
      "Community support",
      "Essential career resources",
    ],
    cta: "I'm Ready for Better Roles",
    badge: "",
  },
  {
    name: "Professional",
    subtitle: "Designed for active job seekers",
    price: "₹4,999",
    period: "/month",
    highlights:
      "Advanced optimisation, deeper analysis, and a clear roadmap toward your target roles.",
    features: [
      "Comprehensive LinkedIn optimisation",
      "Full resume optimisation and rewriting for ATS",
      "Three AI mock interviews each month",
      "Personalized career roadmap",
      "Priority email support",
      "Access to premium resources",
      "Role-fit guidance",
    ],
    cta: "I'm Ready for Better Roles",
    badge: "Recommended",
    note: "7-day money-back guarantee",
  },
  {
    name: "Expert",
    subtitle: "For professionals who want structured mentoring",
    price: "₹8,999",
    period: "/month",
    highlights:
      "Expert-led mentoring combined with AI insights and one-on-one coaching.",
    features: [
      "Everything in Professional",
      "Two one-on-one coaching sessions each month",
      "Personalized job recommendations",
      "Interview preparation strategies",
      "Unlimited AI mock interviews",
      "Dedicated career coaches",
      "Resume writing assistance from scratch",
    ],
    cta: "I'm Ready for Better Roles",
    badge: "",
    note: "7-day money-back guarantee",
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time.",
  },
  {
    q: "Do you offer discounts?",
    a: "We offer special pricing for students and annual subscriptions.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit cards, UPI, and bank transfers.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, our paid plans come with a 7-day free trial.",
  },
];

const successStories = [
  {
    name: "Product Manager • Fintech",
    quote:
      "The AI-backed assessment pinpointed exactly what my resume missed. Interviews picked up within two weeks.",
  },
  {
    name: "Data Analyst • SaaS",
    quote:
      "Mock interviews plus tailored feedback made me confident and precise. I landed my top-choice role.",
  },
  {
    name: "Senior Engineer • Healthtech",
    quote:
      "Clear positioning, keyword alignment, and a roadmap I could follow. Recruiter responses improved fast.",
  },
];

export default function Home() {
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
      {/* Hero Section */}
      <HeroCarousel />

      {/* Stats card */}

      <div className="p-5 rounded-lg max-w-7xl mx-auto">
        <p className="text-xl font-semibold tracking-wider text-foreground mb-4 text-center">
          Featured In
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 rounded-xl bg-card/50 border border-border">
            <p className="text-xl font-bold text-primary mb-1">3x</p>
            <p className="text-xs text-muted-foreground">Profile views</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-card/50 border border-border">
            <p className="text-xl font-bold text-primary mb-1">2.5x</p>
            <p className="text-xs text-muted-foreground">Interview calls</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-card/50 border border-border">
            <p className="text-xl font-bold text-primary mb-1">14d</p>
            <p className="text-xs text-muted-foreground">Time to clarity</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/10 to-background" />
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
              AI-Powered Career Growth Platform
            </Badge>
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-balance">
              Transform Your Career With Expert Guidance and Built-in AI
              Insights
            </h2>
            <div className="w-26 h-1 bg-primary mx-auto rounded-full" />
            <p className="max-w-6xl text-md text-muted-foreground mx-auto mt-6">
              MyCareerSarthi combines career coaching, mentoring, and profile
              transformation so you move confidently toward the roles you want.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{item.body}</p>
                      <Link href="/about-us">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                        >
                          Learn more <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background to-muted/10" />
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium mb-4"
              >
                <Rocket className="w-4 h-4 mr-2 inline" />
                Your Career Transformation Journey
              </Badge>
              <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-balance">
                A simple, structured process combining expert mentoring and
                in-house AI
              </h2>
              <p className="text-lg text-muted-foreground">
                Strengthen your positioning, improve visibility, and move closer
                to the roles you want.
              </p>
              <StepsRoadmap />
              {/* <div className="grid gap-4 sm:grid-cols-2">
               
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="relative py-10 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex flex-col items-center text-center gap-4"
    >
      <Badge
        variant="secondary"
        className="px-4 py-2 text-sm font-medium"
      >
        <Users className="w-4 h-4 mr-2 inline" />
        Success stories
      </Badge>

      <h2 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Real impact across professionals
      </h2>
    </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story, idx) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-full">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <p className="text-sm font-semibold">{story.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-10 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
        <div className="relative container mx-auto px-4 max-w-7xl z-10">
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
              <Target className="w-4 h-4 mr-2 inline" />
              Choose a plan that fits
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              If your current profile isn't opening doors, choose the support
              that will
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground mx-auto">
              All plans include access to our built-in, in-house AI for analysis
              and insights.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="relative flex h-full flex-col gap-4 p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                  {plan.badge && (
                    <Badge className="absolute right-4 top-4">
                      {plan.badge}
                    </Badge>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      {plan.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.highlights}
                  </p>
                  <ul className="space-y-2 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                    onClick={() => handleBookingClick()}
                  >
                    {plan.name === "Starter"
                      ? "Get Started"
                      : "Start Free Trial"}
                  </Button>
                  {plan.note && (
                    <p className="text-center text-xs font-semibold text-muted-foreground">
                      {plan.note}
                    </p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/10 to-background" />
        <div className="relative container mx-auto px-4 max-w-4xl">
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
              <MessageSquare className="w-4 h-4 mr-2 inline" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Answers to common questions
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground">
              Everything you need to know about plans, payments, and support.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-10 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <motion.div
            className="relative my-16"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-tr from-primary/5 via-card to-background shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch gap-0 relative">
              {/* Left: Visual + Motivation */}
              <div className="md:w-1/2 flex flex-col items-center justify-center relative p-8 bg-gradient-to-tr from-primary/10 via-card to-background">
                <div className="absolute left-6 md:left-10 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <img
                  src="/home/progress_overview.svg"
                  alt="Mentoring for your next step"
                  className="w-full max-w-xs md:max-w-sm h-auto relative z-10 drop-shadow-xl"
                />
                <div className="mt-6 mb-3 flex flex-col items-center text-center z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 text-primary">
                    Ready for Career Growth?
                  </h3>
                  <p className="text-base text-muted-foreground mb-3">
                    Real results start with real guidance.
                    <br />
                    Take your first step with a proven method—align your
                    strengths, tell your story, and open new doors.
                  </p>
                  <Button
                    size="lg"
                    className="rounded-full font-semibold px-6 py-2"
                    tabIndex={-1}
                  >
                    Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right: Social Proof & Trust */}
              <div className="md:w-1/2 p-8 bg-gradient-to-bl from-background via-primary/5 to-muted flex flex-col justify-center relative">
                <div className="mb-6">
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1"
                  >
                    Trust & Results
                  </Badge>
                  <h4 className="text-lg md:text-2xl font-bold mb-2">
                    Professionals Trust MyCareerSarthi:
                  </h4>
                </div>
                <ul className="mb-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="inline-block h-4 w-4 bg-primary/70 rounded-full shadow-sm" />
                    <span className="text-sm md:text-base text-foreground">
                      1,200+ careers accelerated across tech, ops, and
                      analytics.
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="inline-block h-4 w-4 bg-sky-400 rounded-full shadow-sm" />
                    <span className="text-sm md:text-base text-foreground">
                      74% report securing more interviews within 8 weeks.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block h-4 w-4 bg-emerald-400 rounded-full shadow-sm" />
                    <span className="text-sm md:text-base text-foreground">
                      Documented improvements in visibility on LinkedIn and
                      resume callback rates.
                    </span>
                  </li>
                </ul>
                {/* Testimonial Carousel */}
                <TestimonialCarousel
                  testimonials={[
                    {
                      quote:
                        "I never realized how much clarity and positioning could matter—landed two interviews within a month!",
                      name: "Anjali D.",
                    },
                    {
                      quote:
                        "MyCareerSarthi gave me direct, actionable advice that made my resume stand out and improved my LinkedIn profile.",
                      name: "Vikram S.",
                    },
                    {
                      quote:
                        "The AI insights were unique and the mentoring was supportive all along. Highly recommend for anyone switching careers.",
                      name: "Neha P.",
                    },
                  ]}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
