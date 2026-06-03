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
  Map,
  Compass,
  ClipboardList
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

const JobSearchContentPage = () => {
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2]"
            >
              Applying to 200 jobs but still not getting interview calls?
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto space-y-4"
            >
              <p className="font-semibold text-foreground">
                Most professionals think job search is a numbers game.
              </p>
              <p>
                So they keep applying to more jobs, across more portals, with more urgency… hoping something finally works. But today’s hiring market does not reward random applications. It rewards clarity, positioning, recruiter visibility, and strategic targeting.
              </p>
              <p>
                At MyCareerSarthi, our Job Search Services help professionals stop applying blindly and start approaching their job search with structure, intent, and direction.
              </p>
              <p className="text-foreground/90 font-medium pt-2">
                This is not about sending hundreds of applications. It is about targeting the right roles, approaching the right companies, and positioning your profile where hiring decisions actually happen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <CTAButton text="Start My Job Search Strategy →" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS JOB SEARCH STRATEGY SECTION */}
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
              {/* Decorative radial gradient */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                What is Job Search Strategy?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                A job search strategy is a structured approach to finding and applying for jobs in a way that aligns with how recruiters and hiring managers actually hire today.
              </p>

              <div className="bg-background border border-border/50 rounded-2xl p-6 md:p-8 mb-8">
                <p className="font-semibold text-foreground mb-4">
                  Most professionals apply randomly without understanding:
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    "whether the role truly fits their profile",
                    "whether the company is actively hiring",
                    "how recruiters shortlist candidates",
                    "how hiring managers evaluate applications"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-muted-foreground">
                      <div className="p-0.5 rounded-full bg-red-100 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 block shrink-0" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base text-muted-foreground leading-relaxed mb-6 pt-4 border-t border-border/60">
                  And that often leads to frustration, burnout, and low interview conversion.
                </p>

                <p className="font-bold text-foreground mb-4">
                  A structured job search strategy service helps professionals:
                </p>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "target the right roles",
                    "focus on companies with real hiring potential",
                    "improve recruiter visibility",
                    "avoid wasted applications",
                    "build a more focused and effective job search process"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      </div>
                      <span className="text-muted-foreground text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-center max-w-2xl mx-auto mb-10">
                <p className="text-lg font-medium text-foreground">
                  Because job search today is no longer about volume.
                </p>
                <p className="text-xl font-bold text-primary">
                  It is about precision.
                </p>
              </div>

              <div className="flex justify-center">
                <CTAButton text="Help Me Build a Smarter Job Search →" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY MOST JOB SEARCHES FAIL */}
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
                Why Most Job Searches Fail
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  The biggest mistake professionals make is assuming more applications automatically lead to more interviews.
                </p>
                <p className="font-semibold text-foreground">
                  But most job searches fail because the strategy itself is broken.
                </p>
                <p>
                  Professionals often:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 pl-2">
                  {[
                    "apply to roles that don’t align with their experience",
                    "target the wrong companies",
                    "rely only on job portals",
                    "approach recruiters incorrectly",
                    "use unstructured application methods",
                    "apply emotionally instead of strategically"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  And over time, that creates confusion, frustration, and burnout.
                </p>
                <p>
                  Even highly capable professionals struggle because their job search lacks clarity and structure.
                </p>
                <p className="text-foreground font-semibold bg-primary/5 border border-primary/20 rounded-xl p-4">
                  That is exactly where our job search mentor India service helps. We help professionals align their applications with recruiter behavior, hiring patterns, and realistic market opportunities.
                </p>
              </div>

              <CTAButton text="Improve My Job Search Approach →" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border/50 rounded-2xl p-4 shadow-2xl relative z-10">
                <div className="relative rounded-xl overflow-hidden min-h-[350px] bg-muted/20 flex flex-col justify-between p-6">
                  {/* Strategy Diagnostic Diagram */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Search Diagnostic</span>
                      <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-ping" />
                    </div>

                    <div className="space-y-4">
                      {/* Fragmented Search */}
                      <div className="bg-background border border-border rounded-xl p-4 relative group hover:border-amber-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-destructive/10 rounded-lg text-destructive">
                            <AlertTriangle className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">Unstructured Approach</p>
                            <p className="text-xs text-muted-foreground">High Volume • Generic Resumes</p>
                          </div>
                          <span className="ml-auto text-xs font-semibold px-2 py-1 bg-red-100 text-red-700 rounded-md">99% Failure</span>
                        </div>
                      </div>

                      {/* Transition Arrow */}
                      <div className="flex justify-center">
                        <ArrowLeftRight className="w-6 h-6 text-primary" />
                      </div>

                      {/* Aligned Strategy */}
                      <div className="bg-background border border-border rounded-xl p-4 relative group hover:border-green-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg text-green-700">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">Structured Search</p>
                            <p className="text-xs text-muted-foreground">Targeted Companies • Direct Outreach</p>
                          </div>
                          <span className="ml-auto text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-md">Strategic Fit</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Visibility to Recruiters</span>
                    <span className="font-semibold text-green-600">Enhanced 5X</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. A STRUCTURED APPROACH (2-COLUMN STEP GRID REDESIGN) */}
      <section className="py-20 bg-muted/40 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight">
              A Structured Approach to Job Search Strategy
            </h2>
          </div>

          {/* Redesigned to a balanced 2-column step grid matrix */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              {
                num: "01",
                title: "1. Job Search Diagnostic",
                desc: "Before building a strategy, we first understand how you are currently searching for jobs.",
                subText: "We review:",
                items: [
                  "the roles you are applying for",
                  "platforms you are using",
                  "application patterns and frequency",
                  "shortlisting history",
                  "recruiter response trends"
                ],
                finalText: "This diagnostic helps identify where effort is being wasted and why interviews may not be converting despite having good experience or skills.",
                icon: FileText,
              },
              {
                num: "02",
                title: "2. Role & Company Targeting",
                desc: "Most professionals apply to roles that look relevant on paper but are misaligned in reality.",
                subText: "We help define:",
                items: [
                  "the right job titles for your experience level",
                  "companies that realistically match your background",
                  "industries where your profile has stronger conversion potential",
                  "transitions that make sense instead of risky jumps"
                ],
                finalText: "",
                icon: Target,
              },
              {
                num: "03",
                title: "3. Job Search Strategy & Application Planning",
                desc: "Job search today is not about applying everywhere. It is about knowing where to apply, where not to apply, how frequently to apply, which opportunities to prioritize, and how to avoid low-quality listings and dead-end applications.",
                subText: "",
                items: [],
                finalText: "We help professionals build a structured job search strategy service that improves efficiency, clarity, and interview probability.",
                icon: Compass,
              },
              {
                num: "04",
                title: "4. Recruiter & Hiring Manager Outreach",
                desc: "Many strong opportunities never come through job portals alone. They happen through recruiter searches, networking, referrals, and direct visibility.",
                subText: "We guide professionals on:",
                items: [
                  "how recruiters actually search for candidates",
                  "how to approach hiring managers professionally",
                  "what to say during outreach",
                  "how to follow up correctly",
                  "how to improve recruiter visibility on LinkedIn"
                ],
                finalText: "",
                icon: Users,
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-card border border-border rounded-3xl p-5 md:p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  {/* Card Header with step number */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/40">
                    <span className="text-2xl font-black text-primary/35">{step.num}</span>
                    <div className="w-8.5 h-8.5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-black mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 font-semibold">
                    {step.desc}
                  </p>

                  {step.subText && (
                    <p className="text-[10px] uppercase font-black tracking-widest text-foreground/80 mb-2">{step.subText}</p>
                  )}

                  {step.items.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-muted-foreground leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {step.finalText && (
                  <div className="text-[11px] font-semibold text-foreground/90 bg-primary/5 rounded-xl p-3.5 border border-primary/15 mt-2.5 shadow-inner leading-relaxed">
                    {step.finalText}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Find the Right Roles for My Profile →" />
          </div>
        </div>
      </section>

      {/* 5. WHAT WE IMPROVE SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What We Improve in Your Job Search
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our job search mentoring process focuses on improving the key areas that directly influence hiring outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Role Positioning",
                desc: "We help align your profile with the roles you are realistically suited for.",
                icon: Target,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Company Targeting",
                desc: "We identify companies and industries where your experience has stronger hiring potential.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Application Strategy",
                desc: "Your applications become more focused, intentional, and conversion-oriented.",
                icon: ClipboardList,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Recruiter Visibility",
                desc: "We help improve your visibility to recruiters and hiring managers through better positioning and outreach.",
                icon: Users,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Job Search Clarity",
                desc: "You stop relying on guesswork and start following a structured strategy.",
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
                <p className="text-muted-foreground leading-relaxed text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Job Search Plan →" />
          </div>
        </div>
      </section>

      {/* 6. WHY JOB SEARCH STRATEGY MATTERS MORE THAN EVER */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Job Search Strategy Matters More Than Ever
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The hiring market today is extremely crowded.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Thousands of professionals apply for the same roles, often using identical resumes, identical application methods, and identical job portals. Which means visibility, positioning, and targeting matter more than ever.
            </p>

            <p className="font-semibold text-lg mb-6 text-foreground/80">
              Professionals who approach their job search strategically often:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "receive better-quality interview opportunities",
                "reduce wasted applications",
                "improve recruiter visibility",
                "create stronger networking opportunities",
                "avoid burnout during job transitions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  </div>
                  <span className="text-muted-foreground font-semibold text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/60 pt-6 space-y-4">
              <p className="text-base text-muted-foreground font-medium">
                That is why job search strategy service and executive job search service support have become increasingly important in today’s hiring environment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Make My Job Search More Strategic →" />
          </div>
        </div>
      </section>

      {/* 7. WONDERING IF RIGHT FOR YOU */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Wondering If Job Search Services Are Right for You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our Job Search Services are designed for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Fresh Graduates",
                desc: "Professionals entering the job market and needing clarity on how to approach applications strategically.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals looking for better opportunities, stronger growth, or career progression.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Professionals",
                desc: "Leaders planning strategic transitions, leadership roles, or executive-level opportunities.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Active Job Seekers",
                desc: "Professionals struggling with low interview conversion despite applying consistently.",
                icon: Search,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Professionals Planning Career Transitions",
                desc: "Individuals exploring realistic role changes, industries, or functional shifts.",
                icon: Target,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
              {
                title: "Professionals Feeling Burnt Out by Job Searching",
                desc: "People tired of random applications, low response rates, and unclear direction.",
                icon: AlertTriangle,
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
              Whether you are actively searching or planning your next move strategically, our executive job search service and job search mentor India support help professionals approach hiring with more clarity and structure.
            </p>
            <CTAButton text="Yes, Help Me Build My Job Search Strategy →" />
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE MYCAREERSARTHI */}
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
                  Most job search advice online is generic, outdated, or built around mass applications.
                </p>
                <p>
                  At MyCareerSarthi, we focus on recruiter behavior, role alignment, company targeting, hiring patterns, and strategic positioning.
                </p>
                <p>
                  Our process combines career analysis, recruiter insights, application strategy, and market-focused job search planning to help professionals improve interview opportunities realistically.
                </p>
                <p className="text-foreground font-bold border-l-4 border-primary pl-4 py-2">
                  Instead of blindly applying everywhere, you build a focused and structured job search strategy designed around how hiring actually works today.
                </p>
              </div>

              <CTAButton text="Improve My Job Search Direction →" />
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
                    <Search className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Recruiter Behavior</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-2 hover:-translate-y-5 transition-transform">
                  <div className="p-2.5 bg-amber-500/10 rounded-full text-amber-500">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Role Alignment</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform translate-y-1 hover:-translate-y-2 transition-transform">
                  <div className="p-2.5 bg-purple-500/10 rounded-full text-purple-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Company Targeting</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-4 hover:-translate-y-7 transition-transform">
                  <div className="p-2.5 bg-green-500/10 rounded-full text-green-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Strategic Positioning</h4>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold w-16 h-16 rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center">
                  MCS
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
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
                text: "“The strategy helped me stop wasting time on random applications and focus only on roles that actually matched my profile.”",
                author: "Mid-Level Operations Professional",
                initial: "O",
              },
              {
                text: "“The recruiter outreach guidance completely changed how I approached my job search.”",
                author: "Marketing Professional",
                initial: "M",
              },
              {
                text: "“For the first time, my applications felt structured instead of reactive.”",
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
                <p className="text-base mb-8 leading-relaxed italic text-foreground/90 font-medium">
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
            <CTAButton text="Build My Job Search Strategy →" />
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
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
                  q: "What is a job search strategy service?",
                  a: "A job search strategy service helps professionals structure their job search approach through role targeting, company targeting, application planning, recruiter outreach, and strategic positioning.",
                },
                {
                  q: "Can job search mentoring improve interview opportunities?",
                  a: "Yes. A structured job search approach improves recruiter visibility, role alignment, and application quality, which can improve interview conversion.",
                },
                {
                  q: "Is this useful for experienced professionals?",
                  a: "Absolutely. Many mid-level and senior professionals struggle because their applications are not aligned strategically with hiring expectations.",
                },
                {
                  q: "Does this include recruiter outreach guidance?",
                  a: "Yes. We help professionals understand how recruiters hire, how outreach works, and how to improve professional visibility.",
                },
                {
                  q: "Is this only for active job seekers?",
                  a: "No. The service is also valuable for professionals planning future career transitions strategically.",
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

export default JobSearchContentPage;
