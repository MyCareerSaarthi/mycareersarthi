"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowUpRight,
  FileText,
  Linkedin,
  Mic,
  Star,
  ChevronDown,
  Bot,
  Brain,
  Shield,
  Clock,
  AlertCircle,
  RefreshCw,
  Crown,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

// ─── API Configuration ─────────────────────────────────────────────
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const INTERVIEW_API_URL =
  process.env.NEXT_PUBLIC_INTERVIEW_API_URL || "http://localhost:4000";

// ─── Static expert mentoring pricing (booking-based) ───────────────
const careerCategories = [
  {
    id: "profile-optimization",
    name: "Profile Optimization & Re-Design",
    description:
      "Transform your professional presence with optimized LinkedIn and resume profiles that get noticed by recruiters.",
    icon: Linkedin,
    bundlePrice: 8999,
    bundleName: "Complete Profile Bundle",
    services: [
      {
        name: "LinkedIn Profile Re-Design & Optimization",
        price: 6000,
        description: "Transform your LinkedIn profile into a recruiter magnet with keyword optimization.",
        details: [
          "Current Profile Analysis along with Report",
          "Profile Optimization with a Target Score > 7+",
          "Professional Banner Custom Recommendation",
          "Headline & Bio Redrafting",
        ],
      },
      {
        name: "Resume Redesign & Enrichment",
        price: 4000,
        description: "A professional, industry-standard resume designed to pass ATS filters effortlessly.",
        details: [
          "Current Resume Analysis along with Report",
          "Resume Re-design & Optimization with a Target Score > 7+",
          "ATS Keyword Rich Integration",
          "Format & Alignment Cleanup",
        ],
      },
      {
        name: "LinkedIn & Resume Profile Alignment",
        price: 2000,
        description: "Align your professional branding across platforms to build recruiter trust.",
        details: [
          "Current Alignment Score with Gaps",
          "Closure of All gaps & Revised alignment Score > 7+",
          "Consistent Skills Mapping",
          "Unified Bio Elements",
        ],
      },
    ],
  },
  // {
  //   id: "personal-branding",
  //   name: "Personal Branding Services",
  //   description:
  //     "Build your professional brand and establish thought leadership in your industry.",
  //   icon: FileText,
  //   services: [
  //     {
  //       name: "LinkedIn Management & Personal Branding",
  //       price: 9999,
  //       description: "Establish thought leadership and build organic visibility in your industry.",
  //       details: [
  //         "Current Branding Activities Score and Report",
  //         "LinkedIn Posting - 4 Posts & One Article",
  //         "Engagement Strategy",
  //         "Network Expansion Strategies",
  //         "Monthly Strategy Alignment Calls",
  //       ],
  //     },
  //   ],
  // },
  {
    id: "career-services",
    name: "Career Services",
    description:
      "Get clarity on your career path and develop a winning job search strategy.",
    icon: Target,
    bundlePrice: 9999,
    bundleName: "Career Clarity Bundle",
    services: [
      {
        name: "Career Assessment & Career Roadmap",
        price: 6000,
        description: "Uncover your true career fit and path forward with diagnostics and mappings.",
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
        description: "Deploy automated inbound setup and targeted outbound outreach frameworks.",
        details: [
          "Strategies for InBound Job Search Session",
          "Strategies for OutBound Job Search",
          "Action Plan Framing",
          "Target Company Curated Lists",
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
    bundlePrice: 11999,
    bundleName: "Interview Mastery Bundle",
    mockInterviewBundle: 2499,
    services: [
      {
        name: "Mock Interview Service",
        price: 3000,
        bundlePrice: 2499,
        isPromo: true,
        description: "Live interactive mock rounds with seasoned corporate recruiters.",
        details: [
          "Mock Interview Round 1 to assess current level",
          "Mock Interview Report along with Gaps & Suggestions",
          "Realistic Video & Audio Simulator Environment",
        ],
      },
      {
        name: "Personalized Interview Playbook",
        price: 17000,
        priceBreakdown:
          "₹2,500 assessment + ₹12,000 training + ₹2,500 reassessment",
        description: "A personalized preparation program to help you craft compelling, authentic, and high-impact answers over 5–6 guided sessions.",
        details: [
          "5–6 Guided 1-on-1 Sessions to build your playbook",
          "Polished answers for: Tell Me About Yourself & Career Journey",
          "Leadership & Behavioral Questions response framing",
          "Strengths & Weaknesses + Situational Scenarios coaching",
          "Technical, Functional & Domain-Specific Questions support",
          "Salary & HR Discussions + Project Discussions preparation",
          "Final Outcome: Rehearsed, interview-ready booklet of answers",
        ],
      },
    ],
  },
];

// Helper to format price in INR
const formatPrice = (price) => new Intl.NumberFormat("en-IN").format(price);

// Helper to calculate savings on mentoring bundles
const calculateSavings = (category) => {
  if (!category || !category.services) return 0;
  const totalIndividual = category.services.reduce(
    (sum, s) => sum + s.price,
    0,
  );
  return totalIndividual - category.bundlePrice;
};

// ─── Skeleton Loader Component ─────────────────────────────────────
function SectionSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-8 bg-card text-card-foreground border border-border/40 animate-pulse rounded-3xl">
          <div className="h-4 bg-muted rounded w-1/4 mb-4" />
          <div className="h-8 bg-muted rounded w-1/2 mb-2" />
          <div className="h-3 bg-muted rounded w-3/4 mb-6" />
          <div className="h-10 bg-muted rounded-full w-full mb-6" />
          <div className="border-t border-border/30 my-6" />
          <div className="space-y-3">
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-5/6" />
            <div className="h-3 bg-muted rounded w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Error Fallback Component ───────────────────────────────────────
function ErrorFallback({ message, onRetry }) {
  return (
    <Card className="flex flex-col items-center justify-center p-8 text-center border-dashed border-2 border-border/60 rounded-3xl bg-card/20">
      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-3">
        <AlertCircle className="w-6 h-6 text-destructive" />
      </div>
      <h4 className="text-base font-semibold mb-1">Could not fetch pricing options</h4>
      <p className="text-xs text-muted-foreground mb-4 max-w-sm">{message}</p>
      <Button variant="outline" size="sm" onClick={onRetry} className="rounded-full">
        <RefreshCw className="w-3.5 h-3.5 mr-2" />
        Try Again
      </Button>
    </Card>
  );
}

// ─── Collapsible Feature List Component ─────────────────────────────
function CollapsibleFeatureList({ features, limit = 5 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!features || features.length === 0) return null;

  const displayed = isExpanded ? features : features.slice(0, limit);
  const hasMore = features.length > limit;
  const remainingCount = features.length - limit;

  return (
    <div className="pt-4 flex-1 flex flex-col justify-between">
      <ul className="space-y-3.5">
        {displayed.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground/95 leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
            {i < 2 && !isExpanded && <HelpCircle className="w-3.5 h-3.5 text-muted-foreground/35 shrink-0 mt-0.5 ml-auto cursor-help" />}
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[11px] font-bold text-primary hover:text-primary/80 transition-colors mt-4 flex items-center gap-1 cursor-pointer w-fit"
        >
          {isExpanded ? (
            <>
              Show less <ChevronDown className="w-3.5 h-3.5 rotate-180 shrink-0" />
            </>
          ) : (
            <>
              + {remainingCount} more features <ChevronDown className="w-3.5 h-3.5 shrink-0" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

// ─── FAQ Accordion Item ────────────────────────────────────────────
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-sm font-medium pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-muted-foreground text-xs leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqData = [
  {
    q: "How do the AI-Powered Tools work?",
    a: "Our proprietary AI systems analyze your LinkedIn profile and resume against standardized hiring algorithms and target roles. You will instantly receive a custom report with concrete scores, identified skill gaps, and precise wording adjustments.",
  },
  {
    q: "What is the difference between AI Practice and AI Mock interviews?",
    a: "AI Practice lets you rehearse with customizable, role-specific single questions at your own speed with instant suggestions. AI Mock interviews simulate a full live interview scenario including comprehensive voice feedback, scoring dashboards, and final report cards.",
  },
  {
    q: "How do I book 1-on-1 mentoring sessions?",
    a: "After selecting an expert-led service or a bundle deal and finalizing your booking, our coordination team will reach out directly within 24 hours to match you with a coach and set up sessions at a time that works for you.",
  },
  {
    q: "Do pricing packs or analysis credits expire?",
    a: "No! All AI analysis tokens and AI interview session packages carry a lifetime validity. Any unused credits carry over indefinitely and stack with any new bundle purchases.",
  },
  {
    q: "Can I combine the expert mentoring with AI tools?",
    a: "Absolutely! We highly recommend using our AI-Powered Profile Tools to gain instant, automated scores first. When you transition to 1-on-1 mentoring, your coach uses those detailed reports to fine-tune your strategy faster.",
  },
];

// ═══════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
const Pricing = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [activeCategory, setActiveCategory] = useState("profile-optimization");

  // Dynamically resolve categories to prevent index shifting bugs when categories are hidden
  const profileCategory = careerCategories.find(c => c.id === "profile-optimization");
  const personalBrandingCategory = careerCategories.find(c => c.id === "personal-branding");
  const careerCategory = careerCategories.find(c => c.id === "career-services");
  const interviewCategory = careerCategories.find(c => c.id === "interview-services");

  // Dynamic API states
  const [aiToolPlans, setAiToolPlans] = useState([]);
  const [interviewPlans, setInterviewPlans] = useState([]);
  const [loadingAiTools, setLoadingAiTools] = useState(true);
  const [loadingInterview, setLoadingInterview] = useState(true);
  const [errorAiTools, setErrorAiTools] = useState(null);
  const [errorInterview, setErrorInterview] = useState(null);

  // Fetch AI tools from main server DB
  const fetchAiToolPlans = async () => {
    setLoadingAiTools(true);
    setErrorAiTools(null);
    try {
      const res = await fetch(`${API_URL}/api/pricing/all?_t=${Date.now()}`);
      if (!res.ok) throw new Error("Could not fetch profile analysis pricing.");
      const data = await res.json();
      if (data.success) {
        setAiToolPlans(data.plans || []);
      } else {
        throw new Error("Invalid pricing structure received.");
      }
    } catch (err) {
      console.error("AI tools pricing fetch error:", err);
      setErrorAiTools(err.message);
    } finally {
      setLoadingAiTools(false);
    }
  };

  // Fetch Interview plans from interview prep server
  const fetchInterviewPlans = async () => {
    setLoadingInterview(true);
    setErrorInterview(null);
    try {
      const res = await fetch(`${INTERVIEW_API_URL}/api/payment/plans?_t=${Date.now()}`);
      if (!res.ok) throw new Error("Could not fetch AI simulator packages.");
      const data = await res.json();
      if (data.success && data.data?.plans) {
        setInterviewPlans(data.data.plans);
      } else {
        throw new Error("Invalid interview plans format.");
      }
    } catch (err) {
      console.error("Interview pricing fetch error:", err);
      setErrorInterview(err.message);
    } finally {
      setLoadingInterview(false);
    }
  };

  useEffect(() => {
    fetchAiToolPlans();
    fetchInterviewPlans();
  }, []);

  const handleBookingClick = (serviceName = null) => {
    setSelectedServiceType(serviceName);
    setBookingModalOpen(true);
  };

  // Sort interview packs (Free tier first, then price ascending)
  const sortedInterviewPlans = [...interviewPlans].sort((a, b) => {
    if (a.isFree && !b.isFree) return -1;
    if (!a.isFree && b.isFree) return 1;
    return (a.pricePaise || 0) - (b.pricePaise || 0);
  });

  const popularInterviewSlug = sortedInterviewPlans
    .filter((p) => !p.isFree)
    .reduce((best, p) => {
      if (!best || (p.mockQuota || 0) > (best.mockQuota || 0)) return p;
      return best;
    }, null)?.slug;

  // Custom tool visual map
  const aiToolMeta = {
    linkedin: {
      isPopular: false,
      link: "/linkedin/analyze",
      badgeText: null,
    },
    resume: {
      isPopular: false,
      link: "/resume/analyze",
      badgeText: null,
    },
    comparison: {
      isPopular: true,
      link: "/compare",
      badgeText: "RECOMMENDED",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <BookingModal
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        defaultServiceType={selectedServiceType}
      />

      {/* ─── Hero Section ───────────────────────────────────────────── */}
      <section className="relative pt-16 pb-8 overflow-hidden">
        {/* Soft atmospheric gradient background matching the branding */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
        
        <div className="relative container mx-auto px-4 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
              Simple, Transparent Pricing
            </h1>
           
          </motion.div>


          {/* ─── 4-Tab Category Navigation ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-8 w-full max-w-5xl mx-auto"
          >
            {careerCategories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 border border-primary"
                      : "bg-card hover:bg-muted text-muted-foreground border border-border/60 hover:text-foreground hover:shadow-xs"
                  }`}
                >
                  <IconComponent className="w-4 h-4 shrink-0" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Main Pricing Content Sections ─────────────────────────── */}
      <section className="relative py-4 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatePresence mode="wait">
            
            {/* ═══ TAB 1: Profile Optimization & Re-Design ═══ */}
            {activeCategory === "profile-optimization" && (
              <motion.div
                key="profile-opt"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* 1.1 AI-Powered Self Checkout Grid */}
                <div className="space-y-8">
                  <div className="text-center max-w-xl mx-auto mb-4">
                    <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20 text-[10px] uppercase font-bold tracking-wider mb-2">
                      Self-Checkout & Instant
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-black">
                      AI-Powered Instant Profile Scoring
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Obtain precise scoring dashboards and ATS compatibility analysis instantly.
                    </p>
                  </div>

                  {loadingAiTools ? (
                    <SectionSkeleton />
                  ) : errorAiTools ? (
                    <ErrorFallback message={errorAiTools} onRetry={fetchAiToolPlans} />
                  ) : (
                    <div className="grid gap-8 md:grid-cols-3 items-stretch max-w-5xl mx-auto">
                      {aiToolPlans.map((plan) => {
                        const meta = aiToolMeta[plan.serviceType] || {
                          isPopular: false,
                          link: "/",
                          badgeText: null,
                        };
                        
                        return (
                          <div
                            key={plan.id}
                            className={`relative p-8 transition-all duration-300 hover:shadow-2xl rounded-3xl flex flex-col h-full overflow-hidden border ${
                              meta.isPopular
                                ? "bg-card text-card-foreground border-2 border-primary shadow-xl md:scale-105 z-10 dark:bg-[#1a1a1a]"
                                : "bg-card text-card-foreground border-border/60 hover:border-foreground/30 dark:bg-[#121212] dark:border-zinc-800/80"
                            }`}
                          >
                            {/* Popular top badge */}
                            {meta.isPopular && (
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-foreground text-background border-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-wider">
                                  {meta.badgeText || "MOST POPULAR"}
                                </Badge>
                              </div>
                            )}
                            
                            <div className="mb-4">
                              <h4 className="text-base md:text-lg font-bold text-foreground">
                                {plan.name}
                              </h4>
                            </div>

                            <div className="mb-4 flex items-baseline gap-1">
                              <span className="text-4xl md:text-5xl font-black text-foreground">
                                ₹{formatPrice(plan.price)}
                              </span>
                              <span className="text-[11px] font-semibold text-muted-foreground">
                                / analysis
                              </span>
                            </div>

                            <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6 min-h-[40px]">
                              {plan.description || "Get deep insights and keyword gaps immediately."}
                            </p>

                            <Link href={meta.link} className="block w-full mb-6">
                              <Button
                                className={`w-full rounded-full font-bold text-xs py-5 px-6 flex items-center justify-center gap-1.5 transition-all duration-200 border shadow-sm ${
                                  meta.isPopular
                                    ? "bg-foreground text-background hover:bg-foreground/90 border-foreground dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                                    : "bg-transparent text-foreground border-border hover:bg-muted/40 hover:border-foreground/40 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/40"
                                }`}
                              >
                                Analyze Now
                                <ArrowUpRight className="w-4 h-4 shrink-0" />
                              </Button>
                            </Link>

                            <div className="border-t border-border/30 my-2 dark:border-zinc-800/60" />
                            <CollapsibleFeatureList features={plan.features} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 1.2 Expert-Led Services Grid */}
                <div className="space-y-8 pt-4">
                  <div className="text-center max-w-xl mx-auto">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20 text-[10px] uppercase font-bold tracking-wider mb-2">
                      1-on-1 Dedicated Support
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-black">
                      Expert-Led Re-Design & Mentoring
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Direct individual strategy consultations and professional redesign alignments.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-3 items-stretch max-w-5xl mx-auto">
                    {profileCategory?.services?.map((service, idx) => (
                      <div
                        key={service.name}
                        className="relative p-8 bg-card text-card-foreground border border-border/60 hover:border-foreground/30 transition-all duration-300 hover:shadow-2xl rounded-3xl flex flex-col h-full dark:bg-[#121212] dark:border-zinc-800/80"
                      >
                        <div className="mb-4">
                          <h4 className="text-base md:text-lg font-bold text-foreground">
                            {service.name}
                          </h4>
                        </div>

                        <div className="mb-4 flex items-baseline gap-1">
                          <span className="text-4xl md:text-5xl font-black text-foreground">
                            ₹{formatPrice(service.price)}
                          </span>
                        </div>

                        <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6 min-h-[40px]">
                          {service.description}
                        </p>

                        <Button
                          onClick={() => handleBookingClick(service.name)}
                          className="w-full rounded-full font-bold text-xs py-5 px-6 flex items-center justify-center gap-1.5 transition-all duration-200 border border-border bg-transparent text-foreground hover:bg-muted/40 hover:border-foreground/40 mb-6 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/40"
                        >
                          Book Custom Service
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </Button>

                        <div className="border-t border-border/30 my-2 dark:border-zinc-800/60" />
                        <CollapsibleFeatureList features={service.details} />
                      </div>
                    ))}
                  </div>

                  {/* 1.3 Complete Profile Bundle Deal */}
                  <div className="max-w-4xl mx-auto">
                    <Card className="relative p-8 bg-card text-card-foreground border-2 border-primary shadow-2xl rounded-3xl flex flex-col md:flex-row gap-8 items-center overflow-hidden dark:bg-[#1a1a1a]">
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground border-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                          BEST VALUE COMBO
                        </Badge>
                      </div>

                      <div className="flex-1 space-y-4">
                        <Badge className="bg-green-500/15 text-green-600 border-green-500/25 text-[10px] font-bold">
                          Save ₹{formatPrice(calculateSavings(profileCategory))}
                        </Badge>
                        <h4 className="text-xl font-black text-foreground">
                          {profileCategory?.bundleName}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Get a complete professional overhaul. Includes customized LinkedIn optimization, dynamic resume redesign, and comprehensive scoring alignment to ensure recruiter consistency.
                        </p>
                        
                        <div className="border-t border-border/30 my-2 pt-4 dark:border-zinc-800/60" />
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <li className="flex items-center gap-2 text-xs text-muted-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>LinkedIn Redesign</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs text-muted-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Resume Redesign</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs text-muted-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Branding Alignment</span>
                          </li>
                        </ul>
                      </div>

                      <div className="shrink-0 flex flex-col items-center md:items-end justify-center gap-4 bg-muted/30 p-6 rounded-2xl min-w-[240px] text-center md:text-right dark:bg-[#121212]/50">
                        <div>
                          <div className="text-xs text-muted-foreground line-through mb-1">
                            ₹{formatPrice(6000 + 4000 + 2000)}
                          </div>
                          <span className="text-4xl font-black block text-foreground">
                            ₹{formatPrice(profileCategory?.bundlePrice)}
                          </span>
                        </div>
                        <Button
                          onClick={() => handleBookingClick(profileCategory?.bundleName)}
                          className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full text-xs py-5 px-6 shadow-sm transition-all dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                        >
                          Book Complete Bundle
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ═══ TAB 2: Personal Branding Services ═══ */}
            {activeCategory === "personal-branding" && personalBrandingCategory && (
              <motion.div
                key="personal-brand"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto space-y-8"
              >
                <div className="text-center">
                  <Badge variant="secondary" className="bg-violet-500/10 text-violet-600 border-violet-500/20 text-[10px] uppercase font-bold tracking-wider mb-2">
                    Ongoing Engagement
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-black">
                    Personal Branding Solutions
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Take command of your online voice. Establish authority and organic visibility on LinkedIn.
                  </p>
                </div>

                <Card className="relative p-8 bg-card text-card-foreground border-2 border-primary shadow-2xl rounded-3xl flex flex-col md:flex-row gap-8 items-center overflow-hidden dark:bg-[#1a1a1a]">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] font-bold">
                      RETAINER PACKAGE
                    </Badge>
                  </div>

                  <div className="flex-1 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold">
                      {personalBrandingCategory.services[0].name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Deploy content blueprints, custom article publications, engagement cycles, and organic network expansion keys directly.
                    </p>
                    
                    <div className="border-t border-border/30 my-2 pt-4 dark:border-zinc-800/60" />
                    
                    <ul className="space-y-3 pt-2">
                      {personalBrandingCategory.services[0].details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground/95 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="shrink-0 flex flex-col items-center md:items-end justify-center gap-4 bg-muted/30 p-6 rounded-2xl min-w-[240px] text-center md:text-right dark:bg-[#121212]/50">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Monthly retainer</div>
                      <span className="text-4xl font-black block text-foreground">
                        ₹{formatPrice(personalBrandingCategory.services[0].price)}
                      </span>
                    </div>
                    <Button
                      onClick={() => handleBookingClick(personalBrandingCategory.services[0].name)}
                      className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full text-xs py-5 px-6 shadow-sm transition-all dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                    >
                      Book Free Consultation
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* ═══ TAB 3: Career Services ═══ */}
            {activeCategory === "career-services" && (
              <motion.div
                key="career-svcs"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                <div className="text-center max-w-xl mx-auto">
                  <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[10px] uppercase font-bold tracking-wider mb-2">
                    Systems Mapping
                  </Badge>
                  <h3 className="text-xl md:text-2xl font-black">
                    1-on-1 Career Clarity & Job Search Systems
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Map your path forward, understand industry fits, and launch systemic inbound/outbound strategies.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
                  {careerCategory?.services?.map((service) => (
                    <div
                      key={service.name}
                      className="relative p-8 bg-card text-card-foreground border border-border/60 hover:border-foreground/30 transition-all duration-300 hover:shadow-2xl rounded-3xl flex flex-col h-full dark:bg-[#121212] dark:border-zinc-800/80"
                    >
                      <div className="mb-4">
                        <h4 className="text-base md:text-lg font-bold text-foreground">
                          {service.name}
                        </h4>
                      </div>

                      <div className="mb-4 flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-black text-foreground">
                          ₹{formatPrice(service.price)}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6 min-h-[40px]">
                        {service.description}
                      </p>

                      <Button
                        onClick={() => handleBookingClick(service.name)}
                        className="w-full rounded-full font-bold text-xs py-5 px-6 flex items-center justify-center gap-1.5 transition-all duration-200 border border-border bg-transparent text-foreground hover:bg-muted/40 hover:border-foreground/40 mb-6 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/40"
                      >
                        Secure Service Slot
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                      </Button>

                      <div className="border-t border-border/30 my-2 dark:border-zinc-800/60" />
                      <CollapsibleFeatureList features={service.details} />
                    </div>
                  ))}
                </div>

                {/* Bundle Box */}
                <div className="max-w-4xl mx-auto">
                  <Card className="relative p-8 bg-card text-card-foreground border-2 border-primary shadow-2xl rounded-3xl flex flex-col md:flex-row gap-8 items-center overflow-hidden dark:bg-[#1a1a1a]">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground border-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                        BEST VALUE BUNDLE
                      </Badge>
                    </div>

                    <div className="flex-1 space-y-4">
                      <Badge className="bg-green-500/15 text-green-600 border-green-500/25 text-[10px] font-bold">
                        Save ₹{formatPrice(calculateSavings(careerCategory))}
                      </Badge>
                      <h4 className="text-xl font-black text-foreground">
                        {careerCategory?.bundleName}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Combines initial roadmap coaching, diagnostic career assessments, comprehensive training on inbound recruiter magnets, and active outbound deployment.
                      </p>
                      
                      <div className="border-t border-border/30 my-2 pt-4 dark:border-zinc-800/60" />
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 text-xs text-muted-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>Roadmap & Assessment</span>
                        </li>
                        <li className="flex items-center gap-2 text-xs text-muted-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>Job Search Inbound/Outbound</span>
                        </li>
                      </ul>
                    </div>

                    <div className="shrink-0 flex flex-col items-center md:items-end justify-center gap-4 bg-muted/30 p-6 rounded-2xl min-w-[240px] text-center md:text-right dark:bg-[#121212]/50">
                      <div>
                        <div className="text-xs text-muted-foreground line-through mb-1">
                          ₹{formatPrice(6000 + 7500)}
                        </div>
                        <span className="text-4xl font-black block text-foreground">
                          ₹{formatPrice(careerCategory?.bundlePrice)}
                        </span>
                      </div>
                      <Button
                        onClick={() => handleBookingClick(careerCategory?.bundleName)}
                        className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full text-xs py-5 px-6 shadow-sm transition-all dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                      >
                        Secure Clarity Bundle
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )}

            {/* ═══ TAB 4: Interview Services ═══ */}
            {activeCategory === "interview-services" && (
              <motion.div
                key="interview-svcs"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* 4.1 AI-Powered Mock Practice Grid */}
                <div className="space-y-8">
                  <div className="text-center max-w-xl mx-auto">
                    <Badge variant="secondary" className="bg-rose-500/10 text-rose-600 border-rose-500/20 text-[10px] uppercase font-bold tracking-wider mb-2">
                      Automated Simulator
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-black">
                      AI-Powered Interview Simulator
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Simulate full role-specific mock interviews and custom question practices with smart scoring.
                    </p>
                  </div>

                  {loadingInterview ? (
                    <SectionSkeleton />
                  ) : errorInterview ? (
                    <ErrorFallback message={errorInterview} onRetry={fetchInterviewPlans} />
                  ) : (
                    <div className={`grid gap-8 items-stretch max-w-5xl mx-auto ${sortedInterviewPlans.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                      {sortedInterviewPlans.map((plan) => {
                        const isPopular = plan.slug === popularInterviewSlug;
                        return (
                          <div
                            key={plan.slug}
                            className={`relative p-8 transition-all duration-300 hover:shadow-2xl rounded-3xl flex flex-col h-full overflow-hidden border ${
                              isPopular
                                ? "bg-card text-card-foreground border-2 border-primary shadow-xl md:scale-105 z-10 dark:bg-[#1a1a1a]"
                                : "bg-card text-card-foreground border-border/60 hover:border-foreground/30 dark:bg-[#121212] dark:border-zinc-800/80"
                            }`}
                          >
                            {isPopular && (
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-foreground text-background border-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                                  MOST POPULAR
                                </Badge>
                              </div>
                            )}

                            <div className="mb-4">
                              <h4 className="text-base md:text-lg font-bold text-foreground">
                                {plan.name}
                              </h4>
                            </div>

                            <div className="mb-4 flex items-baseline gap-1">
                              {plan.isFree ? (
                                <span className="text-4xl md:text-5xl font-black text-emerald-500">Free</span>
                              ) : (
                                <>
                                  <span className="text-4xl md:text-5xl font-black text-foreground">₹{formatPrice(plan.price)}</span>
                                  <span className="text-[11px] font-semibold text-muted-foreground">/ pack</span>
                                </>
                              )}
                            </div>

                            <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6 min-h-[40px]">
                              {plan.description}
                            </p>

                            <Link href="/interview-preparation" className="block w-full mb-6">
                              <Button
                                className={`w-full rounded-full font-bold text-xs py-5 px-6 flex items-center justify-center gap-1.5 transition-all duration-200 border shadow-sm ${
                                  isPopular
                                    ? "bg-foreground text-background hover:bg-foreground/90 border-foreground dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                                    : "bg-transparent text-foreground border-border hover:bg-muted/40 hover:border-foreground/40 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/40"
                                }`}
                              >
                                {plan.isFree ? "Start Free" : "Purchase Pack"}
                                <ArrowUpRight className="w-4 h-4 shrink-0" />
                              </Button>
                            </Link>

                            <div className="grid grid-cols-2 gap-3 mb-6 bg-muted/20 p-2.5 rounded-2xl border border-border/10 dark:bg-[#121212]/50">
                              <div className="text-center py-2 px-1 bg-card rounded-xl border border-border/20 dark:bg-[#1a1a1a]">
                                <div className="text-base font-black text-blue-500">
                                  {plan.practiceQuota}
                                </div>
                                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">
                                  Practice Sessions
                                </div>
                              </div>
                              <div className="text-center py-2 px-1 bg-card rounded-xl border border-border/20 dark:bg-[#1a1a1a]">
                                <div className="text-base font-black text-amber-500">
                                  {plan.mockQuota}
                                </div>
                                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">
                                  Mock Interviews
                                </div>
                              </div>
                            </div>

                            <div className="border-t border-border/30 my-2 dark:border-zinc-800/60" />
                            <CollapsibleFeatureList features={plan.features} />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Simulator instructions info banner */}
                  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex gap-3 items-start max-w-4xl mx-auto">
                    <Brain className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">🤖 Intelligent AI feedback:</strong> Our simulation engine allows you to upload custom job descriptions, uses synthesized voice asking precise situational questions, processes spoken audio transcripts, and scores you instant feedback alongside sample model answers.
                    </p>
                  </div>
                </div>

                {/* 4.2 Expert-Led Services Grid */}
                <div className="space-y-8 pt-4">
                  <div className="text-center max-w-xl mx-auto">
                    <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 border-amber-500/20 text-[10px] uppercase font-bold tracking-wider mb-2">
                      Live Coaching Rounds
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-black">
                      Expert-Led Interview Coaching & Live Mock Rounds
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Live mock interview sessions with executive recruiters, combined with response framing.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
                    {interviewCategory?.services?.map((service) => (
                      <div
                        key={service.name}
                        className="relative p-8 bg-card text-card-foreground border border-border/60 hover:border-foreground/30 transition-all duration-300 hover:shadow-2xl rounded-3xl flex flex-col h-full dark:bg-[#121212] dark:border-zinc-800/80"
                      >
                        <div className="mb-4">
                          <h4 className="text-base md:text-lg font-bold text-foreground mb-2">
                            {service.name}
                          </h4>
                          {service.isPromo && (
                            <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 text-[9px] uppercase tracking-wider font-bold">
                              Promo Pricing Active
                            </Badge>
                          )}
                        </div>

                        <div className="mb-4 flex items-baseline gap-1">
                          <span className="text-4xl md:text-5xl font-black text-foreground">
                            ₹{formatPrice(service.price)}
                          </span>
                          {service.priceBreakdown && (
                            <span className="text-[10px] text-muted-foreground ml-2">
                              ({service.priceBreakdown})
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-muted-foreground/80 leading-relaxed mb-6 min-h-[40px]">
                          {service.description}
                        </p>

                        <Button
                          onClick={() => handleBookingClick(service.name)}
                          className="w-full rounded-full font-bold text-xs py-5 px-6 flex items-center justify-center gap-1.5 transition-all duration-200 border border-border bg-transparent text-foreground hover:bg-muted/40 hover:border-foreground/40 mb-6 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/40"
                        >
                          Book Live Coaching
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </Button>

                        <div className="border-t border-border/30 my-2 dark:border-zinc-800/60" />
                        <CollapsibleFeatureList features={service.details} />
                      </div>
                    ))}
                  </div>

                  {/* Combo Card */}
                  <div className="max-w-4xl mx-auto">
                    <Card className="relative p-8 bg-card text-card-foreground border-2 border-primary shadow-2xl rounded-3xl flex flex-col md:flex-row gap-8 items-center overflow-hidden dark:bg-[#1a1a1a]">
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground border-0 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                          BEST VALUE BUNDLE
                        </Badge>
                      </div>

                      <div className="flex-1 space-y-4">
                        <Badge className="bg-green-500/15 text-green-600 border-green-500/25 text-[10px] font-bold">
                          Save ₹{formatPrice(calculateSavings(interviewCategory))}
                        </Badge>
                        <h4 className="text-xl font-black text-foreground">
                          {interviewCategory?.bundleName}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Offers full coverage: initial diagnostic mock rounds, specialized interview structural question training (4 dedicated coaching hours), and post-training feedback mock sessions.
                        </p>
                        
                        <div className="border-t border-border/30 my-2 pt-4 dark:border-zinc-800/60" />
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <li className="flex items-center gap-2 text-xs text-muted-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Mock Assessment Round 1 & 2</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs text-muted-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Q&A Response Framing (4 Sessions)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="shrink-0 flex flex-col items-center md:items-end justify-center gap-4 bg-muted/30 p-6 rounded-2xl min-w-[240px] text-center md:text-right dark:bg-[#121212]/50">
                        <div>
                          <div className="text-xs text-muted-foreground line-through mb-1">
                            ₹{formatPrice(3000 + 17000)}
                          </div>
                          <span className="text-4xl font-black block text-foreground">
                            ₹{formatPrice(interviewCategory?.bundlePrice)}
                          </span>
                        </div>
                        <Button
                          onClick={() => handleBookingClick(interviewCategory?.bundleName)}
                          className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full text-xs py-5 px-6 shadow-sm transition-all dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                        >
                          Book Mastery Bundle
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* ─── Why Choose Section ────────────────────────────────────── */}
      <section className="relative py-16 bg-muted/20 border-t border-b border-border/40 dark:bg-[#121212]/30 dark:border-zinc-800/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[11px] mb-4">
              Our Methodology
            </Badge>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
              Built-in AI + Expert Mentorship = Placement Success
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              We leverage advanced machine-learning metrics to provide automated checkpoints while ensuring real humans supervise and accelerate your strategic growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Deep-Learning Algorithms",
                description:
                  "Proprietary AI parses your resume and online scores against actual corporate applicant tracking system guidelines, locating hidden gaps immediately.",
                icon: Sparkles,
              },
              {
                title: "Elite Career Coaches",
                description:
                  "Our network of expert industry coaches brings direct hiring experience from world-class organizations, providing accountability and networking tips.",
                icon: Users,
              },
              {
                title: "Measurable Results Dashboard",
                description:
                  "Keep real tabs on your growth. Track target scorecard progress, view improvement curves, and obtain standardized benchmarks at every phase.",
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-card text-card-foreground border border-border/50 rounded-2xl dark:bg-[#121212] dark:border-zinc-800/80">
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25 shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Accordion Section ──────────────────────────────────── */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-muted-foreground">
              Everything you need to know about our dynamic tools, payment flows, and coaching modules.
            </p>
          </div>

          <Card className="p-6 md:p-8 bg-card text-card-foreground border border-border/40 rounded-3xl shadow-sm dark:bg-[#121212] dark:border-zinc-800/80">
            {faqData.map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </Card>
        </div>
      </section>

      {/* ─── Global Call-To-Action (CTA) Section ──────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="relative container mx-auto px-4 max-w-5xl">
          <Card className="relative p-10 md:p-14 bg-gradient-to-tr from-primary/10 via-card to-background border border-primary/20 shadow-2xl rounded-3xl overflow-hidden text-center dark:bg-[#121212] dark:border-zinc-800/80">
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Ready to Take the Next Career Step?
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Join hundreds of successful specialists who achieved high-impact career pivots and resume alignment using our built-in tools. Select a program and unlock your access today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button
                  onClick={() => handleBookingClick()}
                  className="bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full text-xs py-5 px-6 shadow-sm transition-all dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                >
                  Get Custom Support Now
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleBookingClick()}
                  className="rounded-full border-border/60 text-xs font-semibold py-5 px-6 hover:bg-primary/5 hover:border-primary/40 bg-transparent text-foreground dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/40"
                >
                  Schedule a Consultation Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
