"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Target,
  GraduationCap,
  Briefcase,
  Award,
  Search,
  ArrowRight,
  ShieldCheck,
  Star,
  Quote,
  ArrowLeftRight,
  AlertTriangle,
  FileText,
  Users,
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
  <Button
    size="lg"
    className="group rounded-full px-8 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border-0 cursor-pointer active:scale-95 bg-[#3f3fe2] hover:bg-[#3232c7] text-white shadow-[#3f3fe2]/20"
    asChild
  >
    <Link href={href}>
      <span className="flex items-center gap-2">
        {text}
        <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  </Button>
);

const JobSearchContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative font-sans">
      
      {/* 1. HERO SECTION (Light Theme) */}
      <section className="relative pt-10 pb-20 md:pb-24 lg:pb-32 bg-white dark:bg-background">
        {/* Soft Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[450px] w-full bg-gradient-to-b from-[#f8f9ff]/50 via-[#fcfcff]/20 to-transparent dark:from-primary/5 -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-[44px] font-black leading-[1.2] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Applying to 200 jobs but <br className="hidden md:inline" /> still not getting <span className="text-[#3f3fe2]">interview calls?</span>
                </h1>

                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-medium space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Most professionals think job search is a numbers game.
                  </p>
                  <p>
                    So they keep applying to more jobs, across more portals, with more urgency… hoping something finally works. But today’s hiring market does not reward random applications. It rewards clarity, positioning, recruiter visibility, and strategic targeting.
                  </p>
                  <p>
                    At MyCareerSarthi, our Job Search Services help professionals stop applying blindly and start approaching their job search with structure, intent, and direction.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold pt-1 border-t border-slate-100 dark:border-slate-800">
                    This is not about sending hundreds of applications. It is about targeting the right roles, approaching the right companies, and positioning your profile where hiring decisions actually happen.
                  </p>
                </div>

                <div className="pt-2">
                  <CTAButton text="Start My Job Search Strategy" />
                </div>
              </div>

              {/* Right Mockup Representation */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-full blur-[60px] pointer-events-none -z-10" />

                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.05)] relative z-10 w-full max-w-[420px]">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-3 mb-4">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Search Diagnostic</span>
                    <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                  </div>

                  <div className="space-y-4 text-xs">
                    {/* Block 1 */}
                    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
                      <div className="p-2 bg-rose-50 dark:bg-rose-950/20 text-rose-500 rounded-lg">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-100">Unstructured Approach</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">High Volume • Generic Apps</p>
                      </div>
                      <span className="ml-auto text-[9px] font-bold px-2 py-0.5 bg-rose-50 dark:bg-rose-950/45 text-rose-600 rounded">99% Failure</span>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center text-[#3f3fe2]">
                      <ArrowLeftRight className="w-5 h-5" />
                    </div>

                    {/* Block 2 */}
                    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-3.5 shadow-sm flex items-center gap-3">
                      <div className="p-2 bg-green-50 dark:bg-green-950/20 text-green-600 rounded-lg">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-100">Structured Search</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Targeted Companies • Direct outreach</p>
                      </div>
                      <span className="ml-auto text-[9px] font-bold px-2 py-0.5 bg-green-50 dark:bg-green-950/45 text-green-600 rounded">Strategic Fit</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS JOB SEARCH STRATEGY? (Light Theme) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                What is Job Search Strategy?
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                A job search strategy is a structured approach to finding and applying for jobs in a way that aligns with how recruiters and hiring managers actually hire today.
              </p>

              <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6">
                {/* Left Column Assumptions */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <p className="font-extrabold text-slate-800 dark:text-white text-xs uppercase tracking-wider mb-4">
                      Most apply randomly without understanding:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "whether the role truly fits their profile",
                        "whether the company is actively hiring",
                        "how recruiters shortlist candidates",
                        "how hiring managers evaluate applications"
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-500 dark:text-slate-400 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-4 leading-relaxed italic border-t border-slate-100 dark:border-slate-800 pt-3">
                    And that often leads to frustration, burnout, and low interview conversion.
                  </p>
                </div>

                {/* Right Column Solutions */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
                  <p className="font-extrabold text-[#3f3fe2] text-xs uppercase tracking-wider mb-4">
                    A structured strategy service helps:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "target the right roles",
                      "focus on companies with real hiring potential",
                      "improve recruiter visibility",
                      "avoid wasted applications",
                      "build a more focused process"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-xs font-bold text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300">
                Because job search today is no longer about volume. It is about <span className="text-[#3f3fe2] font-black">precision</span>.
              </div>

              <div className="pt-2">
                <CTAButton text="Help Me Build a Smarter Job Search" />
              </div>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/illustrations/job_hunt.svg"
                  alt="Job Search Strategy"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY MOST JOB SEARCHES FAIL (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Why Most Job Searches Fail
              </h2>

              <div className="space-y-4 text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                <p>
                  The biggest mistake professionals make is assuming more applications automatically lead to more interviews.
                </p>
                <p className="font-extrabold text-slate-800 dark:text-slate-100">
                  But most job searches fail because the strategy itself is broken.
                </p>

                <div className="bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20 rounded-2xl p-5 shadow-inner">
                  <p className="font-bold text-rose-700 dark:text-rose-400 text-xs uppercase tracking-wider mb-3">
                    Professionals often:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs">
                    {[
                      "apply to roles that don’t align with their experience",
                      "target the wrong companies",
                      "rely only on job portals",
                      "approach recruiters incorrectly",
                      "use unstructured application methods",
                      "apply emotionally instead of strategically"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-slate-700 dark:text-slate-300">
                  And over time, that creates confusion, frustration, and burnout. Even highly capable professionals struggle because their job search lacks clarity and structure.
                </p>

                <p className="border-l-4 border-[#3f3fe2] bg-[#f0f2ff] dark:bg-slate-900 rounded-r-xl p-4 text-slate-800 dark:text-slate-200 font-bold">
                  That is exactly where our job search mentor India service helps. We help professionals align their applications with recruiter behavior, hiring patterns, and realistic market opportunities.
                </p>
              </div>
            </div>

            {/* Right Column Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] p-6 shadow-sm w-full max-w-[380px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Search Strategy Mismatch</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-3 shadow-sm">
                      <p className="text-[9px] text-rose-500 uppercase font-bold mb-1">Broken Search Loop</p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-100">Portal Application Fatigue</p>
                      <p className="text-[9px] text-slate-400 leading-tight mt-1">Applying randomly • Unoptimized outreach</p>
                    </div>

                    <div className="bg-white dark:bg-slate-950 border border-green-150 dark:border-green-900/10 rounded-xl p-3 shadow-sm">
                      <p className="text-[9px] text-green-600 uppercase font-bold mb-1">Aligned Search Loop</p>
                      <p className="text-xs font-bold text-green-700 dark:text-green-400">Targeted Recruiter Mappings</p>
                      <p className="text-[9px] text-slate-400 leading-tight mt-1">Direct targeting • Structured response loops</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton text="Improve My Job Search Approach" />
          </div>
        </div>
      </section>

      {/* 4. A STRUCTURED APPROACH TO JOB SEARCH STRATEGY (DARK THEMED - PROCESS HIGHLIGHT EXCEPTION) */}
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              A Structured Approach to Job Search Strategy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              {
                num: "01",
                title: "1. Job Search Diagnostic",
                desc: "Before building a strategy, we first understand how you are currently searching for jobs. We review:",
                items: [
                  "the roles you are applying for",
                  "platforms you are using",
                  "application patterns and frequency",
                  "shortlisting history",
                  "recruiter response trends"
                ],
                finalText: "This diagnostic helps identify where effort is being wasted and why interviews may not be converting despite having good experience or skills.",
                icon: FileText,
                glow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              },
              {
                num: "02",
                title: "2. Role & Company Targeting",
                desc: "Most professionals apply to roles that look relevant on paper but are misaligned in reality. We help define:",
                items: [
                  "the right job titles for your experience level",
                  "companies that realistically match your background",
                  "industries where your profile has stronger conversion potential",
                  "transitions that make sense instead of risky jumps"
                ],
                finalText: "",
                icon: Target,
                glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              },
              {
                num: "03",
                title: "3. Job Search Strategy & Application Planning",
                desc: "Job search today is not about applying everywhere. It is about knowing:",
                items: [
                  "where to apply",
                  "where not to apply",
                  "how frequently to apply",
                  "which opportunities to prioritize",
                  "how to avoid low-quality listings and dead-end applications"
                ],
                finalText: "We help professionals build a structured job search strategy service that improves efficiency, clarity, and interview probability.",
                icon: Compass,
                glow: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              },
              {
                num: "04",
                title: "4. Recruiter & Hiring Manager Outreach",
                desc: "Many strong opportunities never come through job portals alone. They happen through recruiter searches, networking, referrals, and direct visibility. We guide professionals on:",
                items: [
                  "how recruiters actually search for candidates",
                  "how to approach hiring managers professionally",
                  "what to say during outreach",
                  "how to follow up correctly",
                  "how to improve recruiter visibility on LinkedIn"
                ],
                finalText: "",
                icon: Users,
                glow: "group-hover:border-green-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-white/5">
                    <span className="text-xl font-black text-indigo-400/40">{step.num}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 transition-colors">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-4">{step.desc}</p>
                  
                  {step.items.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-[11px] text-slate-300 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {step.finalText && (
                  <div className="text-[10px] font-semibold text-indigo-300 bg-white/5 border border-white/10 rounded-xl p-3 shadow-inner leading-relaxed">
                    {step.finalText}
                  </div>
                )}

                <div className={`absolute inset-0 rounded-2xl border border-transparent pointer-events-none transition-all duration-300 ${step.glow}`} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <CTAButton text="Find the Right Roles for My Profile" />
          </div>
        </div>
      </section>

      {/* 5. WHAT WE IMPROVE IN YOUR JOB SEARCH (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              What We Improve in Your Job Search
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our job search mentoring process focuses on improving the key areas that directly influence hiring outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
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
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                    <item.icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <h3 className="text-xs md:text-sm font-extrabold mb-1.5 text-slate-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <CTAButton text="Build My Job Search Plan" />
          </div>
        </div>
      </section>

      {/* 6. WHY JOB SEARCH STRATEGY MATTERS MORE THAN EVER (DARK THEMED - HIGHLIGHT EXCEPTION) */}
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Why Job Search Strategy Matters More Than Ever
            </h2>
            <div className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto space-y-4 font-semibold">
              <p>
                The hiring market today is extremely crowded. Thousands of professionals apply for the same roles, often using identical resumes, identical application methods, and identical job portals.
              </p>
              <p className="text-[#3f3fe2] font-extrabold">
                Which means visibility, positioning, and targeting matter more than ever.
              </p>
              <p className="text-slate-300 text-xs font-bold uppercase tracking-wider text-left max-w-md mx-auto pt-3 border-t border-white/5">
                Professionals who approach strategically:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2.5 text-xs text-left max-w-md mx-auto text-slate-400">
                {[
                  "receive better interview opportunities",
                  "reduce wasted applications",
                  "improve recruiter visibility",
                  "create stronger networking",
                  "avoid transition burnout"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-500 pt-3 italic">
                That is why job search strategy service and executive job search service support have become increasingly important in today’s hiring environment.
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <CTAButton text="Make My Job Search More Strategic" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. WONDERING IF JOB SEARCH SERVICES ARE RIGHT FOR YOU? (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Wondering If Job Search Services Are Right for You?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our Job Search Services are designed for:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Professionals entering the job market and needing clarity on how to approach applications strategically.",
                icon: GraduationCap,
                color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20"
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals looking for better opportunities, stronger growth, or career progression.",
                icon: Briefcase,
                color: "text-amber-650 bg-amber-50 dark:bg-amber-955/20"
              },
              {
                title: "Senior Professionals",
                desc: "Leaders planning strategic transitions, leadership roles, or executive-level opportunities.",
                icon: Award,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20"
              },
              {
                title: "Active Job Seekers",
                desc: "Professionals struggling with low interview conversion despite applying consistently.",
                icon: Search,
                color: "text-green-600 bg-green-50 dark:bg-green-950/20"
              },
              {
                title: "Professionals Planning Career Transitions",
                desc: "Individuals exploring realistic role changes, industries, or functional shifts.",
                icon: Target,
                color: "text-indigo-650 bg-indigo-50 dark:bg-indigo-950/20"
              },
              {
                title: "Professionals Feeling Burnt Out",
                desc: "People tired of random applications, low response rates, and unclear direction.",
                icon: AlertTriangle,
                color: "text-rose-600 bg-rose-50 dark:bg-rose-950/20"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fafaff] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:-translate-y-0.5 transition-all shadow-sm flex gap-4"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
              Whether you are actively searching or planning your next move strategically, our executive job search service and job search mentor India support help professionals approach hiring with more clarity and structure.
            </p>
            <CTAButton text="Yes, Help Me Build My Job Search Strategy" />
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE MYCAREERSARTHI? (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Why Choose MyCareerSarthi?
              </h2>
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#3f3fe2]">
                Most job search advice online is generic, outdated, or built around mass applications.
              </p>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                At MyCareerSarthi, we focus on recruiter behavior, role alignment, company targeting, hiring patterns, and strategic positioning. Our process combines career analysis, recruiter insights, application strategy, and market-focused job search planning to help professionals improve interview opportunities realistically.
              </p>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 font-bold">
                Instead of blindly applying everywhere, you build a focused and structured job search strategy designed around how hiring actually works today.
              </p>
              <div className="pt-2">
                <CTAButton text="Improve My Job Search Direction" />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="relative w-full aspect-[4/3] max-w-[300px] md:max-w-[360px] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/illustrations/career_progress.svg"
                  alt="Why Choose Us"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Real Stories from Professionals Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "“The strategy helped me stop wasting time on random applications and focus only on roles that actually matched my profile.”",
                author: "Mid-Level Operations Professional",
                tagColor: "text-purple-600 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/10"
              },
              {
                quote: "“The recruiter outreach guidance completely changed how I approached my job search.”",
                author: "Marketing Professional",
                tagColor: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-100 dark:border-cyan-900/10"
              },
              {
                quote: "“For the first time, my applications felt structured instead of reactive.”",
                author: "Product Management Candidate",
                tagColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/10"
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed font-medium">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${t.tagColor}`}>
                    — {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <CTAButton text="Build My Job Search Strategy" />
          </div>
        </div>
      </section>

      {/* 10. FAQs (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "What is a job search strategy service?",
                  a: "A job search strategy service helps professionals structure their job search approach through role targeting, company targeting, application planning, recruiter outreach, and strategic positioning."
                },
                {
                  q: "Can job search mentoring improve interview opportunities?",
                  a: "Yes. A structured job search approach improves recruiter visibility, role alignment, and application quality, which can improve interview conversion."
                },
                {
                  q: "Is this useful for experienced professionals?",
                  a: "Absolutely. Many mid-level and senior professionals struggle because their applications are not aligned strategically with hiring expectations."
                },
                {
                  q: "Does this include recruiter outreach guidance?",
                  a: "Yes. We help professionals understand how recruiters hire, how outreach works, and how to improve professional visibility."
                },
                {
                  q: "Is this only for active job seekers?",
                  a: "No. The service is also valuable for professionals planning future career transitions strategically."
                }
              ].map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-800 dark:text-white py-4.5 hover:no-underline text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-md bg-indigo-55 dark:bg-slate-800 text-[#3f3fe2] dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                        Q
                      </span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JobSearchContentPage;
