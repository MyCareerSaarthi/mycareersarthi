"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
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
  Rocket
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({
  text,
  href = "/compare",
  primary = true,
  variant = "blue",
}) => {
  const getVariantStyles = () => {
    if (!primary) {
      return "bg-white hover:bg-slate-50 text-[#3f3fe2] shadow-slate-200/50 border border-slate-200";
    }
    switch (variant) {
      case "purple":
        return "bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-[#7c3aed]/20";
      case "green":
        return "bg-[#047857] hover:bg-[#065f46] text-white shadow-[#047857]/20";
      case "blue":
      default:
        return "bg-[#3f3fe2] hover:bg-[#3232c7] text-white shadow-[#3f3fe2]/20";
    }
  };

  return (
    <Button
      size="lg"
      className={`group rounded-full px-7 py-5 text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border-0 cursor-pointer active:scale-95 ${getVariantStyles()}`}
      style={{ cursor: "pointer" }}
      asChild
    >
      <Link href={href} style={{ cursor: "pointer" }}>
        <span className="flex items-center gap-2">
          {text}
          <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </Button>
  );
};

const AlignmentContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative font-sans">
      
      {/* 1. HERO SECTION (Light Theme - Redesigned to 12-Column Split) */}
      <section className="relative pt-20 pb-20 md:pb-24 lg:pb-32 bg-white dark:bg-background">
        {/* Soft Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[450px] w-full bg-gradient-to-b from-[#f8f9ff]/60 via-[#fcfcff]/30 to-transparent dark:from-primary/5 -z-10" />

        {/* Decorative background bottom-left dot matrix */}
        <div className="absolute bottom-10 left-10 grid grid-cols-6 gap-2.5 opacity-20 pointer-events-none hidden md:grid">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full" />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                  LinkedIn vs Resume Alignment Services
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Your LinkedIn Profile Can Either <span className="text-[#3f3fe2]">Support Your Resume… Or Weaken It</span>
                </h1>

                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-medium space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 font-semibold">
                    Today, recruiters don’t evaluate candidates through resumes alone.
                  </p>
                  <p>
                    They cross-check LinkedIn profiles, resumes, timelines, job titles, achievements, skills, and professional positioning before making shortlisting decisions.
                  </p>
                  
                  {/* Warning Highlight Callout */}
                  <div className="text-rose-700 dark:text-rose-400 bg-rose-500/5 border border-rose-500/15 rounded-2xl px-4 py-3 text-sm font-bold shadow-inner">
                    And when both platforms tell different stories, it creates confusion, weakens credibility, and raises recruiter red flags instantly.
                  </div>

                  <p>
                    At MyCareerSarthi, our LinkedIn vs Resume Alignment service helps professionals identify inconsistencies, positioning gaps, keyword mismatches, and branding issues between both platforms.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold pt-1 border-t border-slate-100 dark:border-slate-800">
                    The goal is simple — make sure your LinkedIn profile and resume work together to strengthen recruiter trust, visibility, and professional positioning.
                  </p>
                </div>

                <div className="pt-2">
                  <CTAButton text="Start Alignment Analysis" href="/compare" variant="blue" />
                </div>
              </div>

              {/* Right Mockup Console Column */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-[120px_200px_150px_220px] blur-[60px] pointer-events-none -z-10" />

                {/* Mockup Container */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[420px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#3f3fe2]" />
                      <span>Alignment Radar</span>
                    </div>

                    <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse" />
                  </div>

                  {/* Body Content */}
                  <div className="space-y-4">
                    
                    {/* Resume Card */}
                    <div className="bg-[#fafaff] dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-inner flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-900/65 text-slate-500 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-extrabold text-xs text-slate-800 dark:text-slate-100">Resume Profile</p>
                        <p className="text-[10px] text-slate-450 font-semibold">Product Manager • 5 yrs Exp</p>
                      </div>
                      <span className="ml-auto text-[9px] font-black px-2 py-1 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg border border-rose-200/20">Timeline Conflict</span>
                    </div>

                    {/* Arrow / Match Loop */}
                    <div className="flex justify-center text-rose-500 my-1">
                      <div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-slate-950 border border-rose-100 dark:border-slate-800 flex items-center justify-center shadow-sm">
                        <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="bg-[#fafaff] dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-inner flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-extrabold text-xs text-slate-800 dark:text-slate-100">LinkedIn Profile</p>
                        <p className="text-[10px] text-slate-450 font-semibold">Marketing Lead • Product Consultant</p>
                      </div>
                      <span className="ml-auto text-[9px] font-black px-2 py-1 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg border border-rose-200/20">Role Mismatch</span>
                    </div>

                    {/* Extra Metric Bar */}
                    <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 rounded-xl p-3.5 mt-3 flex items-center justify-between gap-3 shadow-sm">
                      <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                        <Rocket className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between text-[8px] font-black text-slate-500 uppercase tracking-wider">
                          <span>Recruiter Evaluation Index</span>
                          <span className="text-rose-500 font-extrabold">Red Flags Detected</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full" style={{ width: "42%" }} />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. DOES YOUR LINKEDIN MATCH STORY SECTION (SPACIOUS 2-COLUMN SPLIT - Light Theme) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6 text-left">
              <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                Verification Engine
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Does Your LinkedIn Match the Story Your Resume Tells?
              </h2>
              
              <div className="space-y-6 text-sm sm:text-base text-slate-655 dark:text-slate-350 leading-relaxed font-medium">
                <p>
                  Most recruiters today evaluate candidates across multiple platforms before shortlisting them.
                </p>
                <p>
                  Which means your resume and LinkedIn profile are no longer separate documents. Together, they shape your professional credibility.
                </p>
                <p>
                  But many professionals unknowingly create inconsistencies between the two. Different job titles, conflicting timelines, missing skills, inconsistent achievements, outdated summaries, and weak keyword alignment can immediately reduce recruiter confidence.
                </p>
                
                {/* Highlight Callout */}
                <div className="text-slate-850 dark:text-white font-bold bg-[#3f3fe2]/5 border border-[#3f3fe2]/10 rounded-xl p-4 text-sm">
                  Even small inconsistencies can weaken positioning and affect interview conversion. That is why LinkedIn Optimization Services and Resume Optimization Services must work together strategically.
                </div>
              </div>

              <div className="pt-2">
                <CTAButton text="Check My Profile Alignment" href="/compare" variant="blue" />
              </div>
            </div>

            {/* Right Column Graphic */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative z-10 w-full max-w-[440px]">
                <div className="rounded-2xl overflow-hidden bg-[#fafaff] dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800 p-5">
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-800/80 pb-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Verification Engine</span>
                      <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
                    </div>

                    <div className="space-y-4 text-xs">
                      {/* Resume Card */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 shadow-sm relative hover:border-red-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg text-slate-400">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div className="space-y-0.5">
                            <p className="font-extrabold text-slate-800 dark:text-white">Resume Profile</p>
                            <p className="text-[10px] text-slate-450 font-semibold">Product Manager • 5 yrs Exp</p>
                          </div>
                          <span className="ml-auto text-[9px] font-black px-2.5 py-1 bg-red-50 dark:bg-red-950/40 text-red-600 rounded-md">Timeline Conflict</span>
                        </div>
                      </div>

                      {/* Connection Line */}
                      <div className="flex justify-center text-red-500">
                        <ArrowLeftRight className="w-5 h-5 animate-pulse" />
                      </div>

                      {/* LinkedIn Card */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 shadow-sm relative hover:border-red-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-600">
                            <Activity className="w-5 h-5" />
                          </div>
                          <div className="space-y-0.5">
                            <p className="font-extrabold text-slate-800 dark:text-white">LinkedIn Profile</p>
                            <p className="text-[10px] text-slate-450 font-semibold">Marketing Lead • Product Consultant</p>
                          </div>
                          <span className="ml-auto text-[9px] font-black px-2.5 py-1 bg-red-50 dark:bg-red-950/40 text-red-600 rounded-md">Role Mismatch</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <span>Recruiter Evaluation Score: 4.2 / 10</span>
                    <span className="font-black text-red-500">Red Flags Detected</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT IS ALIGNMENT SECTION (SPACIOUS 2-COLUMN SPLIT - Light Theme) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Decorative radial gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context Card (Span 5) */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                  Framework Context
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  What is LinkedIn vs Resume Alignment?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                  LinkedIn vs Resume Alignment is a structured comparison service designed to evaluate how consistently your LinkedIn profile and resume represent your experience, expertise, positioning, and career direction.
                </p>
                <div className="p-4 bg-[#3f3fe2]/5 border border-[#3f3fe2]/10 rounded-2xl space-y-2 text-left shadow-inner">
                  <p className="text-xs sm:text-sm font-extrabold text-slate-850 dark:text-white">
                    Because recruiters trust consistency.
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    And strong professional positioning requires alignment across every recruiter-facing platform.
                  </p>
                </div>
                <div className="pt-2">
                  <CTAButton text="Analyze My LinkedIn & Resume" href="/compare" variant="blue" />
                </div>
              </div>

              {/* Right Column: Focus Areas List (Span 7) */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xs md:text-sm font-black mb-6 text-slate-800 dark:text-white tracking-wide uppercase">
                  Our analysis helps professionals understand:
                </h3>

                <ul className="space-y-4 text-left">
                  {[
                    "whether both profiles support the same target role",
                    "whether skills and achievements align properly",
                    "whether recruiter-facing messaging is consistent",
                    "whether positioning gaps exist",
                    "whether both platforms strengthen professional credibility together"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5">
                      <div className="p-1 rounded-full bg-indigo-50 dark:bg-slate-900 mt-0.5 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#3f3fe2] shrink-0" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs md:text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY RECRUITERS CROSS-CHECK SECTION (Dark Theme) */}
      <section className="relative w-full bg-slate-900 text-gray-105 py-16 md:py-24 overflow-hidden selection:bg-indigo-500/30">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20 shadow-sm">
              Mindset Shift
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why Recruiters Cross-Check LinkedIn Profiles Before Shortlisting
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-semibold">
              Recruiters today rarely rely on resumes alone. They require cohesive stories before extending an interview offer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* What they Validate */}
            <div className="bg-slate-950/40 rounded-3xl p-8 border border-white/5 shadow-lg relative overflow-hidden group text-left flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold mb-4 text-white">What They Validate</h3>
                <p className="text-slate-400 mb-6 text-xs md:text-sm leading-relaxed font-semibold">
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
                    <li key={idx} className="flex gap-3 items-center text-xs md:text-sm font-semibold text-slate-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recruiter Red Flags */}
            <div className="bg-rose-500/5 rounded-3xl p-8 border border-rose-500/15 shadow-lg relative overflow-hidden group text-left flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <AlertTriangle className="w-32 h-32 text-rose-500" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6 text-rose-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold mb-4 text-white">Recruiter Doubts</h3>
                <p className="text-slate-400 mb-6 text-xs md:text-sm leading-relaxed font-semibold">
                  If both platforms communicate different things, recruiters start questioning:
                </p>
                <ul className="space-y-4">
                  {[
                    "profile accuracy",
                    "role relevance",
                    "career direction",
                    "authenticity of achievements"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-xs md:text-sm font-semibold text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <div className="max-w-2xl mx-auto space-y-6 pt-4">
            <p className="text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed">
              Which means your LinkedIn profile has now become an extension of your resume.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-200">
              That is why profile alignment matters more than ever in today’s hiring market.
            </p>
            <div className="flex justify-center pt-2">
              <CTAButton text="Improve My Recruiter Credibility" href="/compare" variant="blue" />
            </div>
          </div>

        </div>
      </section>

      {/* 5. A STRUCTURED APPROACH TO ALIGNMENT (Dark Theme - Process Step Grid) */}
      <section className="py-24 bg-[#070714] text-white relative border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20 shadow-sm">
              Process Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
              A Structured Approach to LinkedIn vs Resume Alignment
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold mt-3 max-w-xl mx-auto">
              We leverage an analytical and standard framework to align your public identity with your career assets.
            </p>
          </div>

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
                glow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
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
                glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
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
                glow: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
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
                glow: "group-hover:border-green-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden text-left"
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
                  
                  {step.subText && (
                    <p className="text-[10px] uppercase font-black tracking-wider text-slate-205 mb-2.5">{step.subText}</p>
                  )}

                  {step.items.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-[10px] text-slate-300 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-455 shrink-0 mt-0.5" />
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
            <CTAButton text="Get My Alignment Report" href="/compare" variant="purple" />
          </div>
        </div>
      </section>

      {/* 6. GAPS / SILENT KILLER SECTION (Light Theme, Black Slate Card Contrast) */}
      <section className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-7xl text-center">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-rose-400 uppercase tracking-wider bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20 shadow-sm">
              Silent Killer
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
              Most Professionals Don’t Realize Their LinkedIn Is Hurting Their Resume
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-semibold">
              Many professionals update resumes regularly but completely neglect LinkedIn.
            </p>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-semibold">
              Others optimize LinkedIn but fail to align it with their resume strategy. And over time, that creates inconsistencies without them even realizing it.
            </p>
          </div>

          <div className="bg-slate-950/60 text-slate-100 rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl mb-16 max-w-4xl mx-auto text-left relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-amber-500/10 to-rose-500/10 rounded-[28px] opacity-10 blur-xl pointer-events-none" />
            
            <h3 className="text-base font-extrabold mb-6 flex items-center gap-2 text-white">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Common problems include:
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 text-xs font-semibold">
              {[
                "resumes focused on one role direction while LinkedIn suggests another",
                "skills listed on one platform but missing on the other",
                "inconsistent summaries and messaging",
                "outdated LinkedIn profiles",
                "weak recruiter keyword alignment",
                "conflicting positioning across platforms"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-550 mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between text-xs font-semibold">
              <p className="text-slate-400">
                These gaps reduce professional credibility and create recruiter doubt during shortlisting.
              </p>
              <span className="text-[10px] font-black bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg px-3 py-1.5 shrink-0 uppercase tracking-wider">
                Red Flags Flagged Globally
              </span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-950/80 text-slate-205 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl space-y-6">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-semibold">
              Our linkedin profile optimization services and resume optimization services help professionals eliminate these inconsistencies strategically.
            </p>
            
            <div className="flex justify-center">
              <CTAButton text="Improve My Professional Positioning" href="/compare" variant="blue" />
            </div>
          </div>

        </div>
      </section>

      {/* 7. WHAT WE EVALUATE SECTION (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Deliverables
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
              What We Evaluate During Alignment Analysis
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">
              Our analysis focuses on the key areas recruiters evaluate while cross-checking professional profiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
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
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-sm flex flex-col justify-between text-left"
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
            <CTAButton text="Analyze My Recruiter Visibility" href="/compare" variant="blue" />
          </div>
        </div>
      </section>

      {/* 8. WHY ALIGNMENT IMPROVES TRUST (Dark Theme) */}
      <section className="py-24 bg-[#070714] text-white relative border-b border-white/5">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-6">
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Why Alignment Improves Recruiter Trust
          </h2>
          <p className="text-sm sm:text-base text-slate-350 leading-relaxed max-w-2xl mx-auto font-semibold">
            Recruiters often spend only seconds evaluating candidates initially.
          </p>

          <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/5 text-left space-y-6">
            <p className="font-extrabold text-sm text-slate-200">
              When both your LinkedIn profile and resume:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-300">
              {[
                "communicate the same strengths",
                "support the same role direction",
                "reinforce the same expertise",
                "present consistent messaging"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-indigo-500/10 mt-0.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                  </div>
                  <span className="leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/5 pt-6 space-y-4">
              <p className="text-sm sm:text-base font-extrabold text-indigo-400">
                …it strengthens credibility immediately.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
                But when inconsistencies appear, recruiters often lose confidence quickly.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-bold italic">
                That is why strong professional branding depends heavily on consistency and alignment.
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <CTAButton text="Build a Consistent Professional Brand" href="/compare" variant="blue" />
          </div>
        </div>
      </section>

      {/* 9. WONDERING IF RIGHT FOR YOU SECTION (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Target Audience
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2">
              Wondering If This Service Is Right for You?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our LinkedIn vs Resume Alignment service is ideal for:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                title: "Active Job Seekers",
                desc: "Professionals applying for opportunities and wanting stronger recruiter credibility.",
                icon: Search,
                color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20"
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals preparing for growth, transitions, or better opportunities.",
                icon: Briefcase,
                color: "text-amber-600 bg-amber-50 dark:bg-amber-90/20"
              },
              {
                title: "Senior Professionals & Executives",
                desc: "Leaders wanting stronger strategic positioning across recruiter-facing platforms.",
                icon: Award,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20"
              },
              {
                title: "Professionals Changing Roles or Industries",
                desc: "Individuals needing both profiles aligned with a new career direction.",
                icon: Target,
                color: "text-green-600 bg-green-50 dark:bg-green-950/20"
              },
              {
                title: "Professionals Updating Their LinkedIn After Years",
                desc: "People whose LinkedIn profiles no longer match their resumes or current expertise.",
                icon: GraduationCap,
                color: "text-rose-600 bg-rose-50 dark:bg-rose-950/20"
              },
              {
                title: "Professionals Seeking Better Recruiter Visibility",
                desc: "Candidates wanting stronger consistency, positioning, and professional branding.",
                icon: Users,
                color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/20"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fafaff] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:-translate-y-0.5 transition-all shadow-sm flex gap-4 text-left"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
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
              Whether you are actively job searching or improving your professional visibility, our linkedin profile writing service India and resume optimization services help ensure recruiters see one clear and credible professional story.
            </p>
            <CTAButton text="Yes, Align My Profiles" href="/compare" variant="blue" />
          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE US SECTION (Light Theme, Split Layout) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                Why Choose Us
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Why Choose MyCareerSarthi?
              </h2>
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#3f3fe2] dark:text-indigo-400">
                Most professionals optimize LinkedIn and resumes separately.
              </p>
              <p className="text-sm md:text-base text-slate-655 dark:text-slate-350 leading-relaxed font-semibold">
                We help professionals align both strategically.
              </p>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800 p-5 mb-8 shadow-sm">
                <p className="text-xs text-slate-550 dark:text-slate-450 font-black tracking-wide uppercase mb-4">
                  Our process combines:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-xs font-bold text-slate-600 dark:text-slate-300">
                  {[
                    "AI-powered profile comparison",
                    "recruiter-focused analysis",
                    "keyword alignment evaluation",
                    "professional branding consistency",
                    "role-fit assessment",
                    "positioning strategy"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-center">
                      <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 font-semibold">
                <p>
                  to help professionals strengthen recruiter trust, improve profile consistency, and create stronger professional visibility.
                </p>
                <p className="text-slate-850 dark:text-white font-extrabold bg-[#3f3fe2]/5 border border-[#3f3fe2]/10 rounded-xl px-4 py-3 text-sm">
                  Because today, recruiters evaluate your entire professional presence — not just one document.
                </p>
              </div>

              <CTAButton text="Improve My Professional Alignment" href="/compare" variant="blue" />
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <motion.div 
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.02)]"
              >
                <Image
                  src="/illustrations/destination.svg"
                  alt="Resume Alignment"
                  fill
                  className="object-contain relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION (Light Theme Accordion) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white text-center mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "What is LinkedIn vs Resume Alignment?",
                  a: "It is a structured analysis service that compares your LinkedIn profile and resume to identify inconsistencies, positioning gaps, keyword mismatches, and alignment issues."
                },
                {
                  q: "Why does alignment matter?",
                  a: "Recruiters often cross-check LinkedIn profiles and resumes during hiring. Inconsistencies can reduce trust and weaken professional positioning."
                },
                {
                  q: "Does this include keyword analysis?",
                  a: "Yes. The service evaluates recruiter-facing keyword consistency and role-specific optimization across both platforms."
                },
                {
                  q: "Can this help improve recruiter visibility?",
                  a: "Yes. Better alignment improves professional credibility, positioning clarity, and recruiter trust."
                },
                {
                  q: "Is this useful even if I already have a strong resume?",
                  a: "Absolutely. Even strong resumes often lose impact when LinkedIn profiles are outdated or misaligned."
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

      {/* 12. FINAL CTA SECTION (Dark Theme) [NEW SECTION] */}
      <section className="py-24 md:py-32 lg:py-36 bg-[#070714]/95 backdrop-blur-md border-t border-white/5 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-tight leading-[1.1]">
              Your LinkedIn Profile and Resume Shouldn't Tell Different Stories
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-bold">
              Ensure consistent positioning. Build recruiter trust. Stand out in the job market.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto text-center font-medium">
              With our LinkedIn vs Resume Alignment service, you'll establish a cohesive and credible professional presence that matches recruiter expectations.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <CTAButton
              text="Start Alignment Analysis"
              href="/compare"
              variant="blue"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AlignmentContentPage;
