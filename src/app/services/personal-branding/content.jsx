"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  CheckCircle2,
  Brain,
  FileCheck2,
  Target,
  GraduationCap,
  Briefcase,
  Award,
  Search,
  ArrowRight,
  Sparkles,
  TrendingUp,
  LineChart,
  ShieldCheck,
  Star,
  Quote,
  ArrowLeftRight,
  AlertTriangle,
  HelpCircle,
  FileText,
  Lock,
  Activity,
  Users,
  Compass,
  Map
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({ text, href = "/contact-us" }) => (
  <Button size="lg" className="group rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5" asChild>
    <Link href={href}>
      {text}
    </Link>
  </Button>
);

const PersonalBrandingContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-14 md:pb-18 lg:pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-70 animate-pulse -z-10" />
        <div className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-60 -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs md:text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Personal Branding Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2]"
            >
              Strong LinkedIn personal branding can increase interview opportunities by up to 71%
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto space-y-4"
            >
              <p className="font-semibold text-foreground">
                That’s because recruiters today are no longer evaluating candidates only through resumes.
              </p>
              <p>
                Before shortlisting candidates, recruiters actively review LinkedIn profiles to assess professional credibility, communication style, visibility, expertise, and industry presence. Which means even highly capable professionals can stay invisible if they are not positioning themselves properly online.
              </p>
              <p className="text-foreground/90 font-medium pt-2 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 max-w-2xl mx-auto">
                This is not about becoming an influencer or posting for vanity metrics. It is about becoming professionally visible, credible, and memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <CTAButton text="Build My Personal Brand →" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS PERSONAL BRANDING? */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                So, What Exactly is Personal Branding?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                Personal branding is the process of strategically building your professional identity online so recruiters and hiring managers clearly understand:
              </p>

              <div className="bg-background border border-border/50 rounded-2xl p-6 md:p-8 mb-8">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "what you do",
                    "what expertise you bring",
                    "what problems you solve",
                    "what makes you professionally credible"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      </div>
                      <span className="text-muted-foreground text-sm font-semibold capitalize">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                <p>
                  Today, recruiters often evaluate professionals long before interviews happen.
                </p>
                <p>
                  They review LinkedIn profiles, observe professional activity, assess communication style, and look for signals that indicate expertise, confidence, and professional maturity.
                </p>
                <p className="text-foreground font-bold">
                  Which means your online presence has now become part of your professional positioning.
                </p>
                <p>
                  And professionals who build visibility strategically often create stronger career opportunities.
                </p>
              </div>

              <div className="flex justify-center">
                <CTAButton text="Help Me Build My Professional Presence →" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MOST PROFESSIONALS STAY INVISIBLE */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Most Professionals Stay Invisible Despite Having Strong Experience
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Many professionals spend years building experience but very little time building visibility.
                </p>
                <p>
                  They focus on projects, targets, deadlines, and company growth while completely neglecting how they are positioned professionally in the market. And that becomes a serious problem during hiring cycles. <span className="font-semibold text-foreground">Because recruiters cannot value expertise they cannot clearly see.</span>
                </p>
                <p className="text-foreground font-semibold bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  Most professionals struggle with inconsistent LinkedIn activity, unclear positioning, weak professional messaging, and low recruiter visibility. Meanwhile, professionals who communicate their expertise more clearly often stand out faster, even when experience levels are similar.
                </p>
                <p className="text-primary font-bold">
                  That is the real power of personal branding. It helps recruiters remember you before opportunities even open up.
                </p>
              </div>

              <CTAButton text="Increase My Professional Visibility →" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-2xl relative z-10">
                <div className="relative rounded-2xl overflow-hidden min-h-[350px] bg-muted/10 flex flex-col justify-between p-6">
                  {/* Invisible vs Branding Graph */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground">Recruiter Discovery Rate</span>
                      <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-ping" />
                    </div>

                    <div className="space-y-4">
                      <div className="bg-background border border-border rounded-xl p-4 relative group hover:border-amber-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold">Passive Profile (Invisible)</p>
                            <p className="text-xs text-muted-foreground">Resume only • Outdated LinkedIn</p>
                          </div>
                          <span className="text-xs font-semibold px-2 py-1 bg-amber-100 text-amber-700 rounded-md">Low Discovery</span>
                        </div>
                      </div>

                      <div className="bg-background border border-border rounded-xl p-4 relative group hover:border-green-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold">Branded Profile (Credible)</p>
                            <p className="text-xs text-muted-foreground">Domain articles • Recruiter-focused summary</p>
                          </div>
                          <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-md">71% Increase</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Recruiter Visibility</span>
                    <span className="font-semibold text-green-600">Enhanced Discovery</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. LINKEDIN IS NO LONGER JUST A NETWORKING PLATFORM */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              LinkedIn Is No Longer Just a Networking Platform
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              LinkedIn has become one of the biggest professional discovery platforms for recruiters and hiring managers.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <p className="font-semibold text-lg mb-6 text-foreground/85">
              Recruiters actively use LinkedIn to:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "search candidates",
                "validate experience",
                "assess communication",
                "understand expertise",
                "evaluate professional credibility"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-muted-foreground font-semibold text-base capitalize">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/60 pt-6 space-y-4">
              <p className="text-base text-muted-foreground font-medium">
                Your profile, content, activity, engagement, and network all influence recruiter perception.
              </p>
              <p className="text-lg font-bold text-foreground bg-primary/5 p-4 rounded-xl border border-primary/20">
                That is why personal branding for job seekers matters more than ever in today’s hiring market.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Make My LinkedIn Profile Stand Out →" />
          </div>
        </div>
      </section>

      {/* 5. NOT ABOUT BECOMING AN INFLUENCER */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Personal Branding Is Not About Becoming an Influencer
            </h2>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Most professionals avoid LinkedIn because they believe personal branding means posting motivational content, chasing likes, or becoming a social media influencer.
              </p>
              <p className="font-bold text-foreground">
                That is not what professional personal branding is about.
              </p>
              <p>
                Real personal branding is about building credibility, positioning expertise, improving visibility, and communicating professional maturity consistently over time.
              </p>
              <p className="text-foreground bg-primary/5 p-4 border border-primary/25 rounded-xl">
                At MyCareerSarthi, we help professionals build LinkedIn presences that feel strategic, authentic, recruiter-credible, and professionally aligned without sounding overly promotional.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Build My Personal Brand →" />
          </div>
        </div>
      </section>

      {/* 6. BUILD YOUR BRAND IN 4 STRUCTURED STEPS (TIMELINE) */}
      <section className="py-24 bg-muted/40 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Build Your Personal Brand in 4 Structured Steps
            </h2>
          </motion.div>

          <div className="space-y-12 mb-16 relative">
            <div className="absolute left-[27px] md:left-1/2 md:-ml-px top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            {[
              {
                num: "1",
                title: "1. Role-Aligned Content Strategy",
                desc: "We first create a clear content strategy aligned with your target roles, expertise, industry, and career goals.",
                subText: "This helps define:",
                items: [
                  "what recruiters actually pay attention to",
                  "what type of content supports your positioning",
                  "how to communicate expertise professionally",
                  "how to stay visible without sounding desperate"
                ],
                finalText: "",
                icon: Target,
              },
              {
                num: "2",
                title: "2. Content Creation & Professional Write-Ups",
                desc: "Once the strategy is defined, we help you with professionally written LinkedIn content aligned with your domain and career direction.",
                subText: "The content focuses on:",
                items: [
                  "expertise-driven communication",
                  "professional storytelling",
                  "leadership positioning",
                  "industry insight-based content",
                  "recruiter-focused visibility"
                ],
                finalText: "",
                icon: FileText,
              },
              {
                num: "3",
                title: "3. Networking & Managed Outreach",
                desc: "A strong personal brand is not just about posting content. It is also about building the right network. We help you connect through networking guidance.",
                subText: "This improves:",
                items: [
                  "profile visibility",
                  "recruiter familiarity",
                  "professional opportunities",
                  "inbound conversations"
                ],
                finalText: "",
                icon: Users,
              },
              {
                num: "4",
                title: "4. Recruiter-Credible Online Presence",
                desc: "The final outcome is a LinkedIn presence that supports your career growth strategically.",
                subText: "You build:",
                items: [
                  "stronger recruiter visibility",
                  "clearer professional positioning",
                  "a stronger industry network",
                  "professionally aligned content",
                  "improved professional credibility"
                ],
                finalText: "",
                icon: Award,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`md:w-1/2 flex ${idx % 2 === 1 ? "md:justify-start" : "md:justify-end"} w-full`}>
                  <div className="bg-card border border-border/50 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow relative w-full group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2.5 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out" />
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-foreground">
                      <span className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {step.num}
                      </span>
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-base md:text-lg">
                      {step.desc}
                    </p>

                    {step.subText && (
                      <p className="text-sm font-bold mb-2 text-foreground/80">{step.subText}</p>
                    )}
                    
                    {step.items.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="hidden md:flex relative z-10 w-14 h-14 bg-background border-4 border-primary rounded-full items-center justify-center shadow-lg">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Personal Brand Strategically →" />
          </div>
        </div>
      </section>

      {/* 7. WHY PERSONAL BRANDING MATTERS MORE THAN EVER */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Personal Branding Matters More Than Ever
            </h2>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Today, professionals are no longer competing only on experience. They are also competing on visibility, positioning, communication, credibility, and online presence.
              </p>
              <p className="font-semibold text-foreground">
                Recruiters often form first impressions through LinkedIn long before interviews happen. Which means professionals who consistently build visibility and credibility often create stronger professional opportunities over time.
              </p>
              <p className="text-lg font-bold text-foreground bg-primary/5 p-4 rounded-xl border border-primary/20">
                That is why personal branding for job seekers has become an important part of modern career growth.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Strengthen My Professional Positioning →" />
          </div>
        </div>
      </section>

      {/* 8. WONDERING IF PERSONAL BRANDING RIGHT FOR YOU */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Wondering If Personal Branding Services Are Right for You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our personal branding services are designed for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Fresh Graduates",
                desc: "Building a strong LinkedIn presence early and creating a recruiter-ready professional identity.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Preparing for career growth, better opportunities, leadership visibility, or role transitions.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Professionals",
                desc: "Strengthening industry credibility, professional positioning, and recruiter visibility.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Job Seekers",
                desc: "Professionals struggling with low visibility despite having relevant experience and skills.",
                icon: Search,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Consultants & Independent Professionals",
                desc: "Building trust, authority, and a credible professional presence within their industry.",
                icon: Target,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
              {
                title: "Professionals Preparing for Leadership Roles",
                desc: "Positioning themselves strategically for senior leadership and decision-making opportunities.",
                icon: ShieldCheck,
                color: "text-rose-500",
                bg: "bg-rose-500/10",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300 hover:shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto font-semibold">
              Whether you want stronger recruiter visibility, better professional positioning, or long-term credibility, our personal branding consultant India services help you build it strategically.
            </p>
            <CTAButton text="Yes, Build My Professional Brand →" />
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE MYCAREERSARTHI */}
      <section className="py-24 bg-muted/40 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose MyCareerSarthi?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="font-semibold text-primary">
                  Most personal branding services focus on vanity metrics, influencer-style content, and random posting strategies.
                </p>
                <p>
                  We focus on recruiter credibility, strategic visibility, professional positioning, and career alignment.
                </p>
                <p>
                  Our approach combines LinkedIn optimization, content strategy, networking guidance, recruiter-focused positioning, and professional communication to help professionals build personal brands that support real career growth.
                </p>
                <p className="text-foreground font-bold border-l-4 border-primary pl-4 py-2">
                  Not just impressions.
                </p>
              </div>

              <CTAButton text="Improve My Recruiter Credibility →" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[450px] flex items-center justify-center bg-card/60 backdrop-blur-sm rounded-3xl border border-border shadow-2xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              
              <div className="grid grid-cols-2 gap-4 w-full h-full max-h-[350px] relative z-10">
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform translate-y-2 hover:-translate-y-1 transition-transform">
                  <div className="p-2.5 bg-blue-500/10 rounded-full text-blue-500">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Recruiter Credibility</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-2 hover:-translate-y-5 transition-transform">
                  <div className="p-2.5 bg-amber-500/10 rounded-full text-amber-500">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Strategic Visibility</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform translate-y-1 hover:-translate-y-2 transition-transform">
                  <div className="p-2.5 bg-purple-500/10 rounded-full text-purple-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Professional Positioning</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-4 hover:-translate-y-7 transition-transform">
                  <div className="p-2.5 bg-green-500/10 rounded-full text-green-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Career Alignment</h4>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold w-16 h-16 rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center">
                  MCS
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. REAL STORIES */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Real Stories from Professionals Like You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                text: "“After working with MCS, my LinkedIn presence became much more structured and professionally aligned.”",
                author: "Mid-Level Operations Professional",
                initial: "O",
              },
              {
                text: "“The content strategy helped me communicate my experience more clearly and connect with the right recruiters.”",
                author: "Senior Marketing Professional",
                initial: "M",
              },
              {
                text: "“I finally understood how to position myself professionally without sounding promotional.”",
                author: "Product Management Candidate",
                initial: "P",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative group flex flex-col justify-between"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-base mb-8 leading-relaxed italic text-foreground/90 font-semibold">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 bg-primary/10 text-primary font-bold rounded-full flex items-center justify-center text-base shrink-0">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm">Verified Professional</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Personal Brand →" />
          </div>
        </div>
      </section>

      {/* 11. FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "What is personal branding for job seekers?",
                  a: "Personal branding for job seekers is the process of building a professional online presence that communicates expertise, credibility, and career positioning clearly to recruiters and hiring managers.",
                },
                {
                  q: "Is personal branding only for influencers?",
                  a: "No. Professional personal branding is about visibility, credibility, and positioning — not social media popularity.",
                },
                {
                  q: "Do I need to post daily on LinkedIn?",
                  a: "No. Consistency and quality matter more than frequency.",
                },
                {
                  q: "Can personal branding help me get job opportunities?",
                  a: "Yes. Recruiters often evaluate candidates based on both their profiles and professional activity. A strong personal brand improves visibility and credibility.",
                },
                {
                  q: "What does your personal branding service include?",
                  a: "Our service includes LinkedIn positioning, content strategy, content creation support, networking guidance, and recruiter-focused visibility building.",
                },
              ].map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PersonalBrandingContentPage;
