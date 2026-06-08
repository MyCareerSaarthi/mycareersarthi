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
  Users
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({ text, href = "/compare" }) => (
  <Button size="lg" className="group rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5" asChild>
    <Link href={href}>
      {text}
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </Button>
);

const AlignmentContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO SECTION (SINGLE COLUMN CENTERED REDESIGN) */}
      <section className="relative pt-12 pb-14 md:pb-18 lg:pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-primary/15 rounded-full blur-[120px] opacity-60 -z-10" />
        <div className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-40 -z-10" />

        <div className="container mx-auto px-4 max-w-4xl relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight mb-6 md:mb-8 leading-[1.15] text-[#0f172a]"
          >
            Your LinkedIn Profile Can Either{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Support Your Resume…
            </span>{" "}
            Or Weaken It
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 space-y-4 font-medium max-w-3xl mx-auto"
          >
            <p>
              Today, recruiters don’t evaluate candidates through resumes alone.
            </p>
            <p>
              They cross-check LinkedIn profiles, resumes, timelines, job titles, achievements, skills, and professional positioning before making shortlisting decisions.
            </p>
            <p className="font-bold text-destructive bg-destructive/5 border border-destructive/20 rounded-xl px-4 py-3 max-w-2xl mx-auto">
              And when both platforms tell different stories, it creates confusion, weakens credibility, and raises recruiter red flags instantly.
            </p>
            <p>
              At MyCareerSarthi, our LinkedIn vs Resume Alignment service helps professionals identify inconsistencies, positioning gaps, keyword mismatches, and branding issues between both platforms.
            </p>
            <p className="text-foreground/90 font-bold pt-2">
              The goal is simple — make sure your LinkedIn profile and resume work together to strengthen recruiter trust, visibility, and professional positioning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <CTAButton text="Start Alignment Analysis" />
          </motion.div>
        </div>
      </section>


      {/* 2. DOES YOUR LINKEDIN MATCH STORY SECTION (SPACIOUS 2-COLUMN SPLIT) */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Does Your LinkedIn Match the Story Your Resume Tells?
              </h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Most recruiters today evaluate candidates across multiple platforms before shortlisting them.
                </p>
                <p>
                  Which means your resume and LinkedIn profile are no longer separate documents. Together, they shape your professional credibility.
                </p>
                <p>
                  But many professionals unknowingly create inconsistencies between the two. Different job titles, conflicting timelines, missing skills, inconsistent achievements, outdated summaries, and weak keyword alignment can immediately reduce recruiter confidence.
                </p>
                <p className="text-foreground font-semibold bg-primary/5 border border-primary/20 rounded-xl p-4">
                  Even small inconsistencies can weaken positioning and affect interview conversion. That is why LinkedIn Optimization Services and Resume Optimization Services must work together strategically.
                </p>
              </div>

              <CTAButton text="Check My Profile Alignment" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border/50 rounded-2xl p-4 shadow-2xl relative z-10 transition-all duration-300 hover:shadow-primary/5">
                <div className="relative rounded-xl overflow-hidden min-h-[350px] bg-muted/20 flex flex-col justify-between p-6">
                  {/* Visual design showing alignment vs misalignment */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Verification Engine</span>
                      <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                    </div>

                    <div className="space-y-4">
                      {/* Resume Card */}
                      <div className="bg-background border border-border rounded-xl p-4 relative group hover:border-red-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-muted rounded-lg">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">Resume Profile</p>
                            <p className="text-xs text-muted-foreground">Product Manager • 5 yrs Exp</p>
                          </div>
                          <span className="ml-auto text-xs font-semibold px-2 py-1 bg-red-100 dark:bg-red-950/40 text-red-700 rounded-md">Timeline Conflict</span>
                        </div>
                      </div>

                      {/* Connection Line */}
                      <div className="flex justify-center">
                        <ArrowLeftRight className="w-6 h-6 text-destructive animate-pulse" />
                      </div>

                      {/* LinkedIn Card */}
                      <div className="bg-background border border-border rounded-xl p-4 relative group hover:border-red-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 dark:bg-blue-950/40 rounded-lg">
                            <Activity className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">LinkedIn Profile</p>
                            <p className="text-xs text-muted-foreground">Marketing Lead • Product Consultant</p>
                          </div>
                          <span className="ml-auto text-xs font-semibold px-2 py-1 bg-red-100 dark:bg-red-950/40 text-red-700 rounded-md">Role Mismatch</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Recruiter Evaluation Score: 4.2 / 10</span>
                    <span className="font-semibold text-destructive">Red Flags Detected</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS ALIGNMENT SECTION (SPACIOUS 2-COLUMN SPLIT) */}
      <section className="py-24 relative overflow-hidden animate-pulse-slow">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Decorative radial gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Context Card (Span 5) */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  What is LinkedIn vs Resume Alignment?
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  LinkedIn vs Resume Alignment is a structured comparison service designed to evaluate how consistently your LinkedIn profile and resume represent your experience, expertise, positioning, and career direction.
                </p>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl space-y-2">
                  <p className="text-sm font-bold text-foreground">
                    Because recruiters trust consistency.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    And strong professional positioning requires alignment across every recruiter-facing platform.
                  </p>
                </div>
                <div className="pt-4">
                  <CTAButton text="Analyze My LinkedIn & Resume" />
                </div>
              </div>

              {/* Right Column: Focus Areas List (Span 7) */}
              <div className="lg:col-span-7 bg-background border border-border/50 rounded-2xl p-6 md:p-8">
                <h3 className="text-base font-black mb-6 text-foreground tracking-wide uppercase">
                  Our analysis helps professionals understand:
                </h3>

                <ul className="space-y-4">
                  {[
                    "whether both profiles support the same target role",
                    "whether skills and achievements align properly",
                    "whether recruiter-facing messaging is consistent",
                    "whether positioning gaps exist",
                    "whether both platforms strengthen professional credibility together"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="p-1 rounded-full bg-primary/10 mt-0.5 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      </div>
                      <span className="text-muted-foreground font-semibold text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY RECRUITERS CROSS-CHECK */}
      <section className="py-24 bg-muted/40 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Why Recruiters Cross-Check LinkedIn Profiles Before Shortlisting
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
              Recruiters today rarely rely on resumes alone. They require cohesive stories before extending an interview offer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* What they Validate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 border border-border/50 shadow-md relative overflow-hidden hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">What They Validate</h3>
                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  Before scheduling interviews, they often validate candidates through LinkedIn to assess:
                </p>
                <ul className="space-y-4">
                  {[
                    "career consistency",
                    "expertise depth",
                    "professional credibility",
                    "communication quality",
                    "recruiter-facing visibility",
                    "industry relevance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-sm md:text-base font-semibold text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Recruiter Red Flags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-destructive/5 rounded-3xl p-8 border border-destructive/20 shadow-md relative overflow-hidden hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <AlertTriangle className="w-32 h-32 text-destructive" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-destructive">Recruiter Doubts</h3>
                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  If both platforms communicate different things, recruiters start questioning:
                </p>
                <ul className="space-y-4">
                  {[
                    "profile accuracy",
                    "role relevance",
                    "career direction",
                    "authenticity of achievements"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-sm md:text-base font-semibold text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-destructive shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-base text-muted-foreground mb-4">
              Which means your LinkedIn profile has now become an extension of your resume.
            </p>
            <p className="text-lg md:text-xl font-bold mb-8 text-foreground">
              That is why profile alignment matters more than ever in today’s hiring market.
            </p>
            <CTAButton text="Improve My Recruiter Credibility" />
          </motion.div>
        </div>
      </section>

      {/* 5. A STRUCTURED APPROACH (TIMELINE REMOVED -> 2-COLUMN STEP GRID REDESIGN) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              A Structured Approach to LinkedIn vs Resume Alignment
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage an analytical and standard framework to align your public identity with your career assets.
            </p>
          </motion.div>

          {/* Redesigned to 2-Column Grid Matrix, completely removing the connector timeline lines */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              {
                num: "01",
                title: "1. Upload Your Documents",
                desc: "We begin by collecting your LinkedIn profile and resume for structured analysis.",
                subText: "You can submit:",
                items: [
                  "LinkedIn profile URL",
                  "LinkedIn profile PDF",
                  "resume in PDF format",
                  "optional target role or job description"
                ],
                finalText: "Once uploaded, both profiles are securely prepared for AI-powered comparison and recruiter-focused evaluation.",
                icon: FileText,
              },
              {
                num: "02",
                title: "2. AI-Powered Alignment Analysis",
                desc: "Our AI engine performs a deep comparison between your LinkedIn profile and resume across all major sections.",
                subText: "The analysis evaluates:",
                items: [
                  "skills overlap and missing skills",
                  "experience consistency",
                  "job titles and timelines",
                  "responsibilities and achievements",
                  "education and certifications",
                  "summary and About section messaging",
                  "recruiter keyword alignment",
                  "professional branding consistency"
                ],
                finalText: "",
                icon: Brain,
              },
              {
                num: "03",
                title: "3. Role-Specific Fit Assessment",
                desc: "When a target role or job description is provided, the analysis goes deeper to evaluate how effectively both profiles support your intended career direction.",
                subText: "This includes:",
                items: [
                  "recruiter keyword alignment",
                  "role-specific positioning analysis",
                  "experience framing assessment",
                  "skill relevance evaluation",
                  "alignment between stated goals and actual profile content"
                ],
                finalText: "",
                icon: Target,
              },
              {
                num: "04",
                title: "4. Actionable Recommendations Report",
                desc: "Once the analysis is complete, you receive a detailed LinkedIn vs Resume Alignment report with scores, insights, and structured recommendations.",
                subText: "Your report includes:",
                items: [
                  "overall alignment score",
                  "section-wise scoring breakdown",
                  "contradictions and inconsistencies flagged",
                  "keyword and positioning gaps",
                  "recruiter-facing alignment issues",
                  "prioritized recommendations for improvement"
                ],
                finalText: "",
                icon: ShieldCheck,
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  {/* Step Card Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                    <span className="text-3xl font-black text-primary/30 tracking-tight">{step.num}</span>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 font-semibold">
                    {step.desc}
                  </p>

                  {step.subText && (
                    <p className="text-xs uppercase font-black tracking-widest text-foreground/80 mb-3">{step.subText}</p>
                  )}

                  {step.items.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-muted-foreground leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {step.finalText && (
                  <div className="text-xs font-semibold text-foreground/90 bg-primary/5 rounded-xl p-4 border border-primary/15 mt-3 shadow-inner leading-relaxed">
                    {step.finalText}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Get My Alignment Report" />
          </div>
        </div>
      </section>

      {/* 6. GAPS / SILENT KILLER SECTION */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black mb-6 leading-tight"
            >
              Most Professionals Don’t Realize Their LinkedIn Is Hurting Their Resume
            </motion.h2>
            <p className="text-base md:text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
              Many professionals update resumes regularly but completely neglect LinkedIn.
            </p>
            <p className="text-base md:text-lg text-background/80 max-w-2xl mx-auto mt-2 leading-relaxed">
              Others optimize LinkedIn but fail to align it with their resume strategy. And over time, that creates inconsistencies without them even realizing it.
            </p>
          </div>

          <div className="bg-background text-foreground rounded-3xl p-8 border border-border/20 shadow-2xl mb-16 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Common problems include:
            </h3>

            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "resumes focused on one role direction while LinkedIn suggests another",
                "skills listed on one platform but missing on the other",
                "inconsistent summaries and messaging",
                "outdated LinkedIn profiles",
                "weak recruiter keyword alignment",
                "conflicting positioning across platforms"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                  <span className="font-semibold text-muted-foreground text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
              <p className="text-muted-foreground font-medium">
                These gaps reduce professional credibility and create recruiter doubt during shortlisting.
              </p>
              <p className="text-xs font-black bg-destructive/10 text-destructive border border-destructive/20 rounded-lg px-3 py-1.5 text-center shrink-0">
                Red Flags Flagged Globally
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl shadow-2xl text-center"
          >
            <p className="text-base md:text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our linkedin profile optimization services and resume optimization services help professionals eliminate these inconsistencies strategically.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="group rounded-full px-8 py-6 text-lg text-primary font-bold shadow-md hover:bg-muted"
              asChild
            >
              <Link href="/compare">
                Improve My Professional Positioning →
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 7. WHAT WE EVALUATE */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              What We Evaluate During Alignment Analysis
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Our analysis focuses on the key areas recruiters evaluate while cross-checking professional profiles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {[
              {
                title: "Professional Positioning",
                desc: "Does your LinkedIn profile support the same career direction as your resume?",
                icon: Target,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Skills Consistency",
                desc: "Are important recruiter-facing skills aligned across both platforms?",
                icon: Brain,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Experience Alignment",
                desc: "Do your responsibilities, achievements, timelines, and job titles match consistently?",
                icon: FileCheck2,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Keyword Optimization",
                desc: "Are both profiles optimized around the same recruiter-facing keywords and role direction?",
                icon: Search,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Messaging & Branding",
                desc: "Do both platforms communicate one strong and credible professional identity?",
                icon: ShieldCheck,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Analyze My Recruiter Visibility" />
          </div>
        </div>
      </section>

      {/* 8. WHY ALIGNMENT IMPROVES TRUST */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Why Alignment Improves Recruiter Trust
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Recruiters often spend only seconds evaluating candidates initially. Inconsistency raises direct skepticism.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <p className="font-bold text-base md:text-lg mb-6 text-foreground/80">
              When both your LinkedIn profile and resume:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "communicate the same strengths",
                "support the same role direction",
                "reinforce the same expertise",
                "present consistent messaging"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <span className="text-muted-foreground font-semibold text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/60 pt-6 space-y-4">
              <p className="text-base md:text-lg font-extrabold text-primary">
                …it strengthens credibility immediately.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-semibold">
                But when inconsistencies appear, recruiters often lose confidence quickly.
              </p>
              <p className="text-sm md:text-base text-muted-foreground font-bold italic">
                That is why strong professional branding depends heavily on consistency and alignment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Build a Consistent Professional Brand" />
          </div>
        </div>
      </section>

      {/* 9. WONDERING IF RIGHT FOR YOU */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Wondering If This Service Is Right for You?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Our LinkedIn vs Resume Alignment service is ideal for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {[
              {
                title: "Active Job Seekers",
                desc: "Professionals applying for opportunities and wanting stronger recruiter credibility.",
                icon: Search,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals preparing for growth, transitions, or better opportunities.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Professionals & Executives",
                desc: "Leaders wanting stronger strategic positioning across recruiter-facing platforms.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Professionals Changing Roles or Industries",
                desc: "Individuals needing both profiles aligned with a new career direction.",
                icon: Target,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Professionals Updating Their LinkedIn After Years",
                desc: "People whose LinkedIn profiles no longer match their resumes or current expertise.",
                icon: GraduationCap,
                color: "text-rose-500",
                bg: "bg-rose-500/10",
              },
              {
                title: "Professionals Seeking Better Recruiter Visibility",
                desc: "Candidates wanting stronger consistency, positioning, and professional branding.",
                icon: Users,
                color: "text-cyan-500",
                bg: "bg-cyan-500/10",
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
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
              Whether you are actively job searching or improving your professional visibility, our linkedin profile writing service India and resume optimization services help ensure recruiters see one clear and credible professional story.
            </p>
            <CTAButton text="Yes, Align My Profiles" />
          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE US */}
      <section className="py-24 bg-muted/40 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                Why Choose MyCareerSarthi?
              </h2>
              <p className="text-lg font-bold text-primary">
                Most professionals optimize LinkedIn and resumes separately.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 font-semibold">
                We help professionals align both strategically.
              </p>

              <div className="bg-background rounded-2xl border border-border p-6 mb-8 shadow-sm">
                <p className="text-sm text-muted-foreground font-bold tracking-wide uppercase mb-4">
                  Our process combines:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "AI-powered profile comparison",
                    "recruiter-focused analysis",
                    "keyword alignment evaluation",
                    "professional branding consistency",
                    "role-fit assessment",
                    "positioning strategy"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-sm font-semibold text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                <p>
                  to help professionals strengthen recruiter trust, improve profile consistency, and create stronger professional visibility.
                </p>
                <p className="text-foreground font-bold">
                  Because today, recruiters evaluate your entire professional presence — not just one document.
                </p>
              </div>

              <CTAButton text="Improve My Professional Alignment" />
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              {/* Soft backdrop glow behind illustration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/illustrations/destination.svg"
                  alt="Resume Alignment"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
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
                  q: "What is LinkedIn vs Resume Alignment?",
                  a: "It is a structured analysis service that compares your LinkedIn profile and resume to identify inconsistencies, positioning gaps, keyword mismatches, and alignment issues.",
                },
                {
                  q: "Why does alignment matter?",
                  a: "Recruiters often cross-check LinkedIn profiles and resumes during hiring. Inconsistencies can reduce trust and weaken professional positioning.",
                },
                {
                  q: "Does this include keyword analysis?",
                  a: "Yes. The service evaluates recruiter-facing keyword consistency and role-specific optimization across both platforms.",
                },
                {
                  q: "Can this help improve recruiter visibility?",
                  a: "Yes. Better alignment improves professional credibility, positioning clarity, and recruiter trust.",
                },
                {
                  q: "Is this useful even if I already have a strong resume?",
                  a: "Absolutely. Even strong resumes often lose impact when LinkedIn profiles are outdated or misaligned.",
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

export default AlignmentContentPage;
