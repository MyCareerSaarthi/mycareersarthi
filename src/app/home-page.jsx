"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const TestimonialCarousel = dynamic(
  () => import("@/components/TestimonialCarousel"),
  { ssr: false },
);
const BookingModal = dynamic(
  () =>
    import("@/components/booking/booking-modal").then(
      (mod) => mod.BookingModal,
    ),
  { ssr: false },
);
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HeroCarousel from "@/components/home/hero-carousel";
import Image from "next/image";
const StepsRoadmap = dynamic(() => import("@/components/home/steps-roadmap"), {
  ssr: false,
});
const FloatingLogos = dynamic(
  () => import("@/components/home/floating-logos"),
  { ssr: false },
);

const heroGlanceCards = [
  {
    title: "Career Assessment & Roadmap",
    copy: "Clarity on strengths, role-fit, and next steps with a tailored path toward your goals.",
    icon: Target,
    link: "/services/career-assessment",
  },
  {
    title: "Interview Preparation",
    copy: "Mock interviews and expert AI feedback for confident answers.",
    icon: MessageSquare,
    link: "/services/interview-preparation",
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
      "We guide you through career assessment, skill evaluation, roadmap creation, and job search strategy so you know exactly which roles to target and how to move toward them. You gain clarity on your strengths, direction, and next steps with a strong focus on building an effective job search strategy that works in today's market.",
    cta: "Get Started",
    icon: Briefcase,
    link: "/services/career-assessment",
    serviceType: "career_guidance",
  },
  {
    title: "Interview Preparation",
    description:
      "You can request mock interviews, receive expert evaluation, and get AI + manual feedback on your performance. We help you understand how hiring teams interpret your answers, improve how you present your experience, and prepare you confidently for real interview conversations.",
    cta: "Get Started",
    icon: MessageSquare,
    link: "/services/interview-preparation",
    serviceType: "interview_preparation",
  },
  {
    title: "AI-Powered Profile Scoring",
    description:
      "Our purpose-built AI engine compares your LinkedIn and resume against your target job roles, giving you clear insights on alignment, keywords, and gaps, and helping you refine your profile to meet hiring expectations confidently.",
    cta: "Get Started",
    icon: Brain,
    link: "/ai-powered-profile-scoring",
    serviceType: null,
  },
];

const featuredInLogos = [
  {
    src: "/newspaper-logo/economic-times.webp",
    alt: "Economic Times",
    bg: false,
  },
  {
    src: "/newspaper-logo/express-computer.webp",
    alt: "Express Computer",
    bg: false,
  },
  {
    src: "/newspaper-logo/hans-india.webp",
    alt: "Hans India",
    bg: false,
  },
  {
    src: "/newspaper-logo/daily-gaurdian.webp",
    alt: "The Daily Guardian",
    bg: false,
  },
  {
    src: "/newspaper-logo/people-matters.webp",
    alt: "People Matters",
    bg: true,
  },
  {
    src: "/newspaper-logo/startup-talky.webp",
    alt: "Startup Talky",
    bg: false,
  },
  {
    src: "/newspaper-logo/time-of-india.svg",
    alt: "Time of India",
    bg: false,
  },
];

const alumniThriveLogos = [
  { src: "/home/alumni-logo/godaddy.svg", alt: "GoDaddy" },
  { src: "/home/alumni-logo/acro.svg", alt: "Acro" },
  { src: "/home/alumni-logo/citibank.svg", alt: "CitiBank" },
  { src: "/home/alumni-logo/coforge.svg", alt: "Coforge" },
  { src: "/home/alumni-logo/epikdoc.svg", alt: "Epikdoc" },
  { src: "/home/alumni-logo/nagarro.svg", alt: "Nagarro" },
  { src: "/home/alumni-logo/tata-power.svg", alt: "Tata Power" },
];

const whyChoose = [
  {
    title: "Get Clarity on Your Job Readiness and Career Direction",
    body: "We help you assess your current career positioning and then identify the gaps and roles that genuinely fit your experience and guide you in the right direction, so your applications are focused and meaningful. Instead of applying everywhere, you move with clarity, purpose, and confidence, making steady progress toward opportunities that actually make sense for you.",
    icon: Target,
  },
  {
    title: "Present Your Experience the Way Hiring Teams Evaluate It",
    body: "We help you organise and present your experience so it matches how recruiters shortlist candidates today. From role alignment to achievements and keywords, we ensure your profile speaks the same language as the job market. This improves relevance, credibility, and interview shortlisting.",
    icon: FileText,
  },
  {
    title: "Get Hired with a Clear Job Search Strategy",
    body: "We help you target the right jobs, approach the right companies, and follow a clear job search strategy so your efforts lead to real interview calls, offer letters, and joining opportunities without random applications, confusion, or wasting months chasing roles & opportunities that were never right for you.",
    icon: Briefcase,
  },
  {
    title: "Crack Interviews and Secure the Offer Letter",
    body: "We prepare you to crack interviews through structured preparation, expert-led mock interviews, and targeted feedback, so you know exactly what hiring managers test, how to answer with impact, and how to convert interviews into real job offers.",
    icon: MessageSquare,
  },
];

const professionalServices = [
  {
    title: "LinkedIn Profile Review & Optimization",
    description:
      "A detailed evaluation of your profile with specific recommendations to improve relevance and recruiter engagement.",
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
      "A resume that reflects your achievements and passes ATS screening.",
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
    q: "Who is MyCareerSarthi best suited for?",
    a: "MyCareerSarthi is designed for students, early-career professionals, mid-level managers, and experienced professionals who want clarity, better positioning, and structured guidance in their job search or career growth.",
  },
  {
    q: "I already have a resume and LinkedIn profile. Do I still need this?",
    a: "Most professionals do. Having a resume or LinkedIn profile is not the same as having one that reflects your real impact, aligns with your target roles, and works the way recruiters evaluate candidates today. We help refine, align, and position what you already have.",
  },
  {
    q: "Will this help if I am actively looking for a job right now?",
    a: "Yes. Our services are especially useful if you are currently job searching, getting limited interview calls, or feeling unsure about your approach. We focus on clarity, job search strategy, profile positioning, and interview preparation.",
  },
  {
    q: "What if I am not sure about my next career move yet?",
    a: "That's exactly where we start. Through career assessment, coaching, and mentoring, we help you gain clarity on direction, realistic role options, and next steps before you invest time and effort in applications.",
  },
  {
    q: "How is MyCareerSarthi different from resume writing services?",
    a: "We do not just create documents. We work on your overall career positioning through a highly personalised approach. This includes career assessment, LinkedIn and resume alignment, job search strategy, interview preparation, AI-powered evaluation, and one-on-one discussions with our experts to guide you at every step.",
  },
  {
    q: "Do you provide one-on-one guidance or only AI-based reports?",
    a: "You receive both. Our in-house AI helps identify gaps and alignment issues, while expert mentors guide you on decisions, positioning, and execution. AI supports the process; humans guide the journey.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes. You can upgrade or move to another plan at any point based on your evolving needs.",
  },
  {
    q: "Do you offer any discounts?",
    a: "Yes. We offer special pricing for students and discounted annual plans. If you are unsure, you can speak with us before enrolling.",
  },
  {
    q: "What payment methods are supported?",
    a: "We accept all major credit cards, UPI, and bank transfers for convenience.",
  },
  {
    q: "Is there a trial or refund policy?",
    a: "Yes. Our paid plans come with a 7-day trial period. If you feel the service is not right for you, you can request a refund within this period.",
  },
  {
    q: "How soon can I expect results?",
    a: "This depends on your starting point and goals. Some professionals see improvements in visibility and interview calls within weeks, while others benefit from longer-term clarity, positioning, and confidence building.",
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

const videoShowcase = [
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/o0JvhOMlSig?si=OpfoBMfyA_zqcgJ9",
  },
];

function VideoCarousel({ items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  const active = items[currentIndex];

  return (
    <div className="relative w-full">
      <div className="bg-card/50 rounded-xl backdrop-blur-sm shadow-lg overflow-hidden">
        <div className="">
          <div className="relative w-full overflow-hidden rounded-xl ">
            <div className="aspect-video">
              {active.type === "youtube" ? (
                <iframe
                  className="h-full w-full"
                  src={active.src}
                  title={active.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <video
                  className="h-full w-full"
                  src={active.src}
                  poster={active.poster}
                  controls
                  playsInline
                  preload="metadata"
                />
              )}
            </div>

            {items.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-2 rounded-full bg-background/70 backdrop-blur border border-border px-3 py-2 shadow-sm">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-6 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {items.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/80 hover:bg-background border border-border shadow-sm"
              onClick={goToPrevious}
              aria-label="Previous video"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/80 hover:bg-background border border-border shadow-sm"
              onClick={goToNext}
              aria-label="Next video"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home({ h1Text }) {
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
      <HeroCarousel />

      {/* Featured In Section */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        <div
          className="text-center animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <p className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Featured In
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
            {featuredInLogos.map((logo, idx) => (
              <div
                key={idx}
                className={`hover:grayscale-0 transition-all duration-300 opacity-0 hover:opacity-100 animate-fade-in ${idx - 1 ? "grid-cols-2 mx-auto" : ""} ${logo.bg ? "bg-black rounded-sm px-2 py-1" : ""}`}
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Image
                  src={logo.src}
                  alt={`Featured in publication ${idx + 1}`}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto dark:invert "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Watch and learn
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Video highlights from your career growth journey
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              See how MyCareerSarthi helps you get role clarity, improve your profile positioning, and prepare for interviews with structured guidance backed by AI insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <VideoCarousel items={videoShowcase} />
          </motion.div>
        </div>
      </section> */}

      {/* Why Choose Section */}
      {/* <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/10 to-background" />
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div
            className="mb-16 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium mb-6 mx-auto block w-fit"
            >
              <Award className="w-4 h-4 mr-2 inline" />
              AI-Powered Career Growth Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-center">
              Transform Your Career with Expert Guidance
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed text-center">
              Today's job market is confusing, crowded, and unforgiving. Hard
              work alone doesn't guarantee growth anymore. What professionals
              need is clarity on direction, the right positioning in the market,
              and guidance that helps them move forward with confidence.
              MyCareerSarthi supports you through this entire journey so you are
              not guessing, applying blindly, or feeling stuck.
            </p>
          </div>

          <div className="space-y-8">
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationFillMode: "forwards" }}
            >
              <Card className="relative p-10 md:p-12 bg-linear-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm border-2 border-primary/40 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative flex flex-col md:flex-row gap-8 items-start">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-linear-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl transition-all duration-500">
                      {React.createElement(whyChoose[0].icon, {
                        className:
                          "w-10 h-10 md:w-12 md:h-12 text-primary-foreground",
                      })}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                      1
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {whyChoose[0].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify text-base md:text-lg mb-6">
                      {whyChoose[0].body}
                    </p>
                    <Link href="/about-us">
                      <Button className="group/btn">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyChoose.slice(1).map((item, idx) => (
                <div
                  key={item.title}
                  className="h-full opacity-0 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms`, animationFillMode: "forwards" }}
                >
                  <Card className="relative h-full p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <item.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">
                            {idx + 2}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-4 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed text-justify text-sm mb-6 flex-1">
                        {item.body}
                      </p>

                      <Link href="/about-us">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group/btn p-0 h-auto text-primary hover:text-primary font-semibold hover:bg-transparent w-fit"
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 opacity-40 mask-[radial-gradient(ellipse_at_center,black,transparent_65%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.18)_1px,transparent_0)] bg-size-[22px_22px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Where Our Professionals Are Placed Today
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Real Career Outcomes Across Top Companies
              </h2>

              <div className="w-24 h-1 bg-primary rounded-full mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Behind every logo is a working professional who moved from
                confusion to clarity, secured more interview shortlists, cracked
                hiring rounds, and converted their job search into real offers
                through structured mentoring, job search strategy, and interview
                preparation.
              </p>
            </div>

            <div className="relative animate-fade-in">
              {/* Static subtle background */}
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
              <FloatingLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background to-muted/10" />
        <div className="relative container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6 animate-fade-in">
              <div className="max-w-7xl mx-auto px-4">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium mb-4"
                >
                  <Rocket className="w-4 h-4 mr-2 inline" />
                  Your Career Transformation Journey
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  A Proven Career Path to Interview Calls, Job Offers, and Top
                  Companies
                </h2>
                <p className="text-lg text-muted-foreground">
                  A step-by-step career process combining expert mentoring and
                  proprietary AI to improve positioning, boost visibility, and
                  convert job applications into interviews and offers.
                </p>
              </div>
              <StepsRoadmap />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="relative py-10 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-12 animate-fade-in">
            <div>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium mb-4"
              >
                <Users className="w-4 h-4 mr-2 inline" />
                Success stories
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Real Results from Real Professionals
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story, idx) => (
              <div
                key={story.name}
                className="hover:translate-y-[-8px] transition-transform duration-300"
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-full">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <p className="text-sm font-semibold">{story.name}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/10 to-background" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4 mr-2 inline" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Answers to Your Questions
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground">
              Everything you need to know before getting started with
              MyCareerSarthi.
            </p>
          </div>

          <div className="animate-fade-in">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${idx}`}
                  className="border-2 border-primary/20 rounded-lg px-6 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section className="relative py-10 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />
        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <div className="relative my-16 animate-fade-in">
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
                    Ready to Transform Your Career?
                  </h3>
                  <p className="text-base text-muted-foreground mb-3">
                    If you are aiming for better roles, your profile and
                    positioning must support that goal.
                    <br />
                    Start refining your LinkedIn and resume with a process built
                    to help you move toward the opportunities you want.
                  </p>
                  <Button
                    size="lg"
                    className="rounded-full font-semibold px-6 py-2"
                    tabIndex={-1}
                    onClick={() => handleBookingClick()}
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
          </div>
        </div>
      </section>
    </div>
  );
}
