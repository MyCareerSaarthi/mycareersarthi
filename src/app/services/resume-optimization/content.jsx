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
  Map,
  Zap,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({ text, href = "/contact-us" }) => (
  <Button size="lg" className="group rounded-full px-8 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 bg-[#3f3fe2] hover:bg-[#3232c7] text-white border-0 cursor-pointer active:scale-95 shadow-[#3f3fe2]/20" asChild>
    <Link href={href}>
      <span className="flex items-center gap-2">
        {text}
        <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  </Button>
);

const ResumeOptimizationContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pb-24 lg:pb-32 bg-white dark:bg-background">
        {/* Soft Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[450px] w-full bg-gradient-to-b from-[#f8f9ff]/50 via-[#fcfcff]/20 to-transparent dark:from-primary/5 -z-10" />

        {/* Decorative background bottom-left dot matrix matching the mockup */}
        <div className="absolute bottom-10 left-10 grid grid-cols-6 gap-2.5 opacity-20 pointer-events-none hidden md:grid">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full" />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Even 50/50 Balanced Column Grid Layout */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content Column (Grid Column 6) */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.15] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Build a recruiter-ready resume to unlock 10X more <br />
                  opportunities
                </h1>

                {/* Subtitle paragraph layout matching the mockup */}
                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg font-medium space-y-4">
                  <p>
                    Recruiters spend less than 10 seconds scanning most resumes.
                    And before your resume even reaches a recruiter, ATS systems
                    often filter it first.
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-sm">
                    At MyCareerSarthi, our Resume Optimization Services help
                    professionals build ATS-friendly, recruiter-ready, and
                    role-aligned resumes designed to improve visibility,
                    increase shortlisting chances, and generate better interview
                    opportunities.
                  </p>
                </div>

                <div className="pt-2">
                  <CTAButton text="Yes, I want a recruiter-ready resume makeover" />
                </div>
              </div>

              {/* Right Mockup Console Column (Grid Column 6) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
                {/* Soft glow purple droplet in the background matching mockup shape */}
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-[120px_200px_150px_220px] blur-[60px] pointer-events-none -z-10" />
                
                {/* Rounded mockup console container */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[500px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500">
                  
                  {/* Top Bar of the console */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    {/* Left: Outlined Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#3f3fe2]" />
                      <span>ATS Match Evaluator</span>
                    </div>

                    {/* Right: Tiny dot grid representing styling grid */}
                    <div className="flex items-center gap-1 opacity-25">
                      <div className="grid grid-cols-6 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <span key={i} className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Split body layout of the console */}
                  <div className="grid grid-cols-12 gap-5">
                    {/* Left: Professional modern resume mockup preview */}
                    <div className="col-span-6 relative aspect-[3/4] rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#fafaff] dark:bg-slate-950/20 p-3.5 shadow-inner flex flex-col justify-between">
                      {/* Simulated resume structure */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#3f3fe2]/10 border border-[#3f3fe2]/20 flex items-center justify-center text-[10px] font-bold text-[#3f3fe2]">
                            JD
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="h-1.5 w-[70%] bg-slate-300 dark:bg-slate-750 rounded-full" />
                            <div className="h-1 w-[40%] bg-slate-200 dark:bg-slate-850 rounded-full" />
                          </div>
                        </div>
                        <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />
                        
                        {/* Summary Block */}
                        <div className="space-y-1">
                          <div className="h-1 w-[30%] bg-slate-400 dark:bg-slate-700 rounded-full mb-1" />
                          <div className="h-1 w-[90%] bg-slate-200 dark:bg-slate-850 rounded-full" />
                          <div className="h-1 w-[80%] bg-slate-200 dark:bg-slate-850 rounded-full" />
                        </div>

                        {/* Experience block */}
                        <div className="space-y-1.5 pt-1">
                          <div className="h-1.5 w-[50%] bg-slate-400 dark:bg-slate-700 rounded-full mb-1.5" />
                          <div className="border border-green-500/20 bg-green-500/5 rounded p-1 space-y-1">
                            <div className="h-1 w-[85%] bg-slate-300 dark:bg-slate-750 rounded-full" />
                            <div className="h-1 w-[70%] bg-slate-200 dark:bg-slate-850 rounded-full" />
                          </div>
                          <div className="border border-purple-500/20 bg-purple-500/5 rounded p-1 space-y-1">
                            <div className="h-1 w-[80%] bg-slate-300 dark:bg-slate-750 rounded-full" />
                            <div className="h-1 w-[60%] bg-slate-200 dark:bg-slate-850 rounded-full" />
                          </div>
                        </div>
                      </div>
                      
                      {/* ATS Score Indicator */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-1.5 rounded-lg flex items-center justify-between shadow-sm text-[8px] font-black text-[#3f3fe2] uppercase tracking-wider">
                        <span>Parser Audit Passed</span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                      </div>
                    </div>

                    {/* Right: Feedback parameters grid */}
                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      {/* Parameter 1: ATS Score Match */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-[#3f3fe2]/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center text-purple-600">
                            <Target className="w-3 h-3" />
                          </div>
                          <span>ATS Score Match</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: "94%" }} />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 2: Keyword Alignment */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-green-500/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Keyword Alignment</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "88%" }} />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 3: Recruiter Impact */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-blue-500/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                            <Award className="w-3.5 h-3.5" />
                          </div>
                          <span>Recruiter Impact</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }} />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Speech Voice Console waveform matching mockup */}
                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <FileText className="w-4 h-4" />
                    </div>
                    
                    {/* Visual simulated spectrum bars indicating active ATS keyword scanning */}
                    <div className="flex-1 flex items-end gap-0.75 h-6 px-2 justify-center">
                      {[...Array(24)].map((_, i) => {
                        const heights = ["25%", "35%", "55%", "65%", "80%", "95%", "85%", "70%", "50%", "30%", "20%", "45%", "60%", "75%", "90%", "75%", "55%", "35%", "25%", "45%", "65%", "85%", "50%", "25%"];
                        return (
                          <span 
                            key={i} 
                            className="w-0.75 bg-[#3f3fe2] dark:bg-primary/95 rounded-full" 
                            style={{ height: heights[i] }} 
                          />
                        );
                      })}
                    </div>

                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-850 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      94% Score
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS RESUME OPTIMIZATION? */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-center tracking-tight">
                So, What Exactly is Resume Optimization?
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto font-medium">
                Resume optimization is the process of strategically improving your resume so recruiters and ATS systems can quickly understand your experience, skills, impact, and role relevance.
              </p>

              {/* Structured Two-Column Content Layout */}
              <div className="grid md:grid-cols-12 gap-8 items-stretch mb-8">
                {/* Left Column: Context Card */}
                <div className="md:col-span-7 bg-background border border-border/80 rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                  <p className="font-semibold text-foreground text-xs md:text-sm lg:text-base leading-relaxed mb-3">
                    Because today, resumes are not just read by recruiters. They are first scanned by Applicant Tracking Systems (ATS) that evaluate resumes based on keywords, structure, formatting, and job relevance before they even reach human recruiters.
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm font-semibold">
                    Which means even highly experienced professionals can get filtered out if their resumes are not properly optimized.
                  </p>
                </div>

                {/* Right Column: Priorities card */}
                <div className="md:col-span-5 bg-background border border-border/80 rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                  <p className="text-primary text-[10px] uppercase font-extrabold tracking-wider mb-3">
                    Our professional resume writing service focuses on:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "ATS Optimization",
                      "Recruiter Readability",
                      "Interview Callback Shortlisting",
                      "Strategic Keyword Mapping"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-xs md:text-sm font-bold capitalize">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center">
                <CTAButton text="Optimize My Resume Strategically" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOST RESUMES DON'T FAIL BECAUSE OF LACK OF EXPERIENCE */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side text column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                Most Resumes Don’t Fail Because of Lack of Experience
              </h2>
              
              <div className="space-y-4.5 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                <p className="font-semibold text-destructive uppercase tracking-wide">
                  They fail because they fail to communicate value clearly.
                </p>
                
                <p>
                  Most professionals write resumes like internal company documents. They list responsibilities, tools, daily tasks, and generic descriptions, assuming recruiters will automatically understand their contribution.
                </p>
                <p className="font-bold text-slate-800 dark:text-white">
                  But recruiters are not looking for task lists.
                </p>

                {/* What they seek list */}
                <div className="bg-muted border border-border/80 rounded-xl p-4.5 mt-3 shadow-inner">
                  <p className="font-bold text-foreground text-[10px] uppercase tracking-wider mb-2.5">
                    They are trying to quickly understand:
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "what impact you created",
                      "what ownership you handled",
                      "how your work contributed to business outcomes",
                      "whether your experience matches the role"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-[11px] md:text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="capitalize">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold bg-primary/5 border border-primary/20 rounded-xl p-3.5 text-xs">
                  A strong resume does not just explain what you did. It positions your professional value strategically.
                </p>
              </div>
            </div>

            {/* Right side comparative rewritten dashboard */}
            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-3xl p-5 md:p-6 shadow-sm">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-1.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">Impact Communication Diagnostic</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                  </div>

                  <div className="space-y-3 text-[10px] md:text-xs">
                    {/* Before Card */}
                    <div className="bg-background border border-border rounded-xl p-3.5 shadow-sm">
                      <p className="text-[9px] text-destructive uppercase font-bold mb-1">Standard Task List</p>
                      <p className="text-xs italic line-through text-muted-foreground mb-1.5">“Handled operations and team.”</p>
                      <span className="text-destructive font-extrabold block">Low Recruiter Engagement</span>
                    </div>

                    {/* After Card */}
                    <div className="bg-background border border-primary/20 rounded-xl p-3.5 shadow-sm">
                      <p className="text-[9px] text-green-600 uppercase font-bold mb-1">Quantifiable Impact (MCS Rewritten)</p>
                      <p className="text-xs font-bold text-foreground mb-1.5">“Led a 12-member engineering unit; reduced turnaround time by 32% while driving delivery schedules ahead of deadlines by 18%.”</p>
                      <span className="text-green-600 font-extrabold block">Excellent Recruiter Engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ATS SYSTEMS REJECT THOUSANDS */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
              ATS Systems Reject Thousands of Resumes Every Day
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Most companies today use ATS software to filter resumes before recruiters review them manually.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm mb-10">
            {/* Split Grid Content Layout */}
            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6.5">
              {/* Left Side: ATS parameters */}
              <div className="flex flex-col justify-center bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm">
                <p className="font-extrabold text-sm mb-3.5 text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  These systems scan resumes for:
                </p>

                <ul className="space-y-2">
                  {[
                    "relevant keywords",
                    "role alignment",
                    "technical skills",
                    "formatting",
                    "industry relevance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-2.5 h-2.5 text-primary shrink-0" />
                      </div>
                      <span className="text-muted-foreground font-bold text-[10px] md:text-xs capitalize leading-none">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Rejection realities */}
              <div className="flex flex-col justify-center bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-3">
                  So if your resume lacks important keywords, is poorly structured, is difficult to scan, or is not aligned to the target role… it may never even reach the recruiter.
                </p>
                <h3 className="text-xs md:text-sm font-extrabold text-foreground leading-snug">
                  That is why ATS optimization has become one of the most important parts of modern resume writing.
                </h3>
              </div>
            </div>

            {/* Bottom Callout block */}
            <div className="border-t border-border/40 pt-5">
              <div className="bg-primary/5 rounded-2xl p-4 md:p-5 border border-primary/20 shadow-inner">
                <p className="text-foreground font-semibold leading-relaxed text-sm md:text-base">
                  Our Resume Optimization Services combine AI-powered ATS analysis with recruiter-focused optimization to help your resume perform better with both: ATS systems and human recruiters.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Get ATS Resume Analysis" />
          </div>
        </div>
      </section>

      {/* 5. ONE RESUME DOESN'T FIT EVERY JOB */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side text column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                One Resume Doesn’t Fit Every Job
              </h2>
              
              <div className="space-y-4.5 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                <p>
                  One of the biggest mistakes professionals make is using the same resume for every application. Different roles prioritize different skills, keywords, achievements, and experience.
                </p>
                
                <p className="font-semibold text-foreground">
                  A Product Manager resume cannot be positioned the same way as a Marketing, Operations, Leadership, or Technical resume.
                </p>

                <div className="bg-primary/5 border border-primary/15 rounded-2xl p-4.5 shadow-sm">
                  <p className="font-bold text-foreground mb-2.5 text-xs text-primary uppercase tracking-wider">
                    That is why our resume writing services focus on role-specific optimization based on your:
                  </p>
                  <ul className="grid grid-cols-2 gap-2.5 pl-0.5">
                    {[
                      "target role",
                      "industry",
                      "experience level",
                      "career direction"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-xs font-bold capitalize">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold">
                  Because stronger alignment improves recruiter relevance, ATS matching, and interview conversion.
                </p>
              </div>
            </div>

            {/* Right side Dashboard map */}
            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-3xl p-5 md:p-6 shadow-sm">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">Target Role Optimization Map</span>
                    <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                      Role Specific
                    </span>
                  </div>

                  <div className="space-y-3 text-xs md:text-sm">
                    {/* Generalist bar */}
                    <div className="bg-background border border-border rounded-xl p-3 shadow-sm">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Generalist Resume</p>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-amber-500" style={{ width: "45%" }} />
                      </div>
                      <span className="text-amber-500 font-extrabold text-[10px] block mt-1.5">45% ATS Matching</span>
                    </div>

                    {/* Target Optimized bar */}
                    <div className="bg-background border border-primary/20 rounded-xl p-3 shadow-sm">
                      <p className="text-[10px] text-primary uppercase font-bold mb-1">Target Optimized Resume</p>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-green-500" style={{ width: "95%" }} />
                      </div>
                      <span className="text-green-600 font-extrabold text-[10px] block mt-1.5">95% ATS Matching</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GET RECRIUTER READY IN 3 STRUCTURED STEPS (HORIZONTAL 3-COLUMN REDESIGN) */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight">
              Get a Recruiter-Ready Resume in 3 Structured Steps
            </h2>
          </div>

          {/* Clean Steps matrix layout without confusing vertical timeline */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                num: "01",
                title: "1. AI Resume & ATS Analysis",
                desc: "We begin by analyzing your resume against your target role or job description to identify compatibility gaps.",
                subText: "We identify:",
                items: [
                  "ATS compatibility gaps",
                  "missing keywords",
                  "weak positioning",
                  "readability issues",
                  "role alignment problems"
                ],
                icon: BarChart3,
              },
              {
                num: "02",
                title: "2. Resume Diagnostic Review",
                desc: "Once the ATS analysis is complete, our experts evaluate your resume based on recruiter expectations.",
                subText: "Our experts evaluate your resume based on:",
                items: [
                  "recruiter expectations",
                  "hiring patterns",
                  "industry standards",
                  "role-specific positioning"
                ],
                icon: Search,
              },
              {
                num: "03",
                title: "3. Resume Optimization & Strategic Rewriting",
                desc: "We then strategically optimize and rewrite your resume to improve final callback outcomes.",
                subText: "We strategically optimize and rewrite to improve:",
                items: [
                  "ATS performance & keywords",
                  "recruiter readability",
                  "achievement communication",
                  "professional positioning",
                  "role alignment"
                ],
                icon: FileText,
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

                  <h3 className="text-base md:text-lg font-black mb-2 text-slate-800 dark:text-white leading-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 font-semibold">
                    {step.desc}
                  </p>

                  {step.subText && (
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-800 dark:text-slate-200 mb-2">{step.subText}</p>
                  )}

                  {step.items.length > 0 && (
                    <ul className="space-y-1.5 mb-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-muted-foreground leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="capitalize">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Recruiter-Ready Resume" />
          </div>
        </div>
      </section>

      {/* 7. WHY RESUME OPTIMIZATION MATTERS MORE THAN EVER */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
              Why Resume Optimization Matters More Than Ever
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Recruiters today review hundreds of resumes for a single role. They do not read resumes in detail initially. They scan.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6">
              {/* Left Column: Quick scans */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm">
                <p className="font-extrabold text-sm mb-3.5 text-foreground flex items-center gap-2">
                  They quickly look for:
                </p>

                <ul className="space-y-2">
                  {[
                    "role relevance",
                    "impact",
                    "keywords",
                    "measurable outcomes",
                    "clarity",
                    "leadership",
                    "technical alignment"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-muted-foreground font-bold text-[10px] md:text-xs capitalize leading-none">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Decisions */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-3">
                  If your resume cannot communicate value within seconds, recruiters simply move on to the next application.
                </p>
                <h3 className="text-xs md:text-sm font-extrabold text-foreground leading-snug">
                  That is why resume optimization today directly impacts:
                </h3>
                <ul className="space-y-1 mt-2.5">
                  {[
                    "recruiter visibility",
                    "ATS performance",
                    "shortlisting chances",
                    "interview opportunities"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-[10px] md:text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="capitalize">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border/40 pt-5">
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 shadow-inner">
                <p className="text-foreground font-bold leading-relaxed text-sm">
                  And that is exactly why a professionally optimized resume matters more than ever in today’s hiring market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WONDERING IF RIGHT FOR YOU */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">
              Wondering If Resume Optimization Services Are Right for You?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-semibold max-w-2xl mx-auto">
              Our professional resume writing service is designed for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Building their first recruiter-ready resume.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Preparing for better opportunities, growth, or transitions.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Professionals",
                desc: "Strengthening leadership positioning and strategic visibility.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Executives & CXOs",
                desc: "Seeking executive resume writing service for senior leadership roles.",
                icon: ShieldCheck,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Active Job Seekers",
                desc: "Struggling with low callbacks despite relevant experience.",
                icon: Search,
                color: "text-rose-500",
                bg: "bg-rose-500/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-9.5 h-9.5 rounded-xl ${item.bg} flex items-center justify-center mb-3.5`}>
                    <item.icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <h3 className="text-xs md:text-sm font-extrabold mb-1.5 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[11px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <CTAButton text="Yes, Optimize My Resume" />
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE MYCAREERSARTHI (STRUCTURED GRID LAYOUT REDESIGN) */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">
              Why Choose MyCareerSarthi?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-semibold max-w-2xl mx-auto">
              Most resume writing services focus only on formatting resumes. We focus on:
            </p>
          </div>

          {/* 2x2 Feature Pillars Grid surrounding the central value block */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "ATS Optimization",
                desc: "Optimizing structure, formats, keywords, and fields to satisfy the scanner rules.",
                icon: Zap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Recruiter Psychology",
                desc: "Strategic narrative structures designed to convince recruiters within the initial 10-second scan.",
                icon: Brain,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Role Positioning",
                desc: "Quantifying your specific projects, outcomes, achievements, and leadership contributions.",
                icon: Target,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Interview Alignment",
                desc: "Structuring the resume summary, content, and sections to seamlessly lead into actual interviews.",
                icon: Award,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-5.5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-9.5 h-9.5 rounded-xl ${item.bg} flex items-center justify-center mb-3.5`}>
                    <item.icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <h3 className="text-sm md:text-base font-extrabold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-4.5 border border-primary/15 shadow-inner text-center font-semibold text-xs md:text-sm text-foreground/90 leading-relaxed">
              Our Resume Optimization Services combine: <span className="text-primary font-extrabold">AI-powered ATS analysis, recruiter-aware positioning, strategic rewriting, and role-specific optimization</span> to help professionals build resumes designed not just to look good…… but to perform better in real hiring environments.
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL STORIES */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight animate-fade-in">
              Real Stories from Professionals Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                text: "“I realized my resume looked visually good but completely lacked impact positioning. The optimization changed that completely.”",
                author: "Mid-Level Operations Professional",
                initial: "O",
              },
              {
                text: "“The ATS analysis helped me understand exactly why my resume wasn’t getting shortlisted.”",
                author: "Product Management Candidate",
                initial: "P",
              },
              {
                text: "“After restructuring my resume with MCS, I started receiving significantly more interview calls.”",
                author: "Senior Marketing Professional",
                initial: "M",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-card p-7 rounded-2xl border border-border/80 shadow-sm relative group flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-primary/15 absolute top-5 right-5" />
                <div className="flex gap-0.5 mb-4 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs md:text-sm mb-6 leading-relaxed italic text-foreground/80 font-medium">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 bg-primary/10 text-primary font-bold rounded-full flex items-center justify-center text-xs shrink-0">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-extrabold text-[11px] text-foreground">Verified Professional</p>
                    <p className="text-[10px] text-muted-foreground font-semibold">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Recruiter-Ready Resume" />
          </div>
        </div>
      </section>

      {/* 11. FAQS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              {
                q: "What does your Resume Optimization Service include?",
                a: "Our Resume Optimization Services include ATS analysis, AI resume scoring, recruiter-focused review, strategic rewriting, keyword optimization, and role-based positioning.",
              },
              {
                q: "Is this ATS-friendly?",
                a: "Yes. Our resumes are optimized for ATS systems as well as recruiter readability.",
              },
              {
                q: "Do you provide executive resume writing service?",
                a: "Yes. We provide executive resume writing service for senior professionals, leadership roles, and CXO-level positioning.",
              },
              {
                q: "Will my resume be customized for my target role?",
                a: "Absolutely. Every resume is optimized based on your target role, industry, and career direction.",
              },
              {
                q: "Can resume optimization improve interview callbacks?",
                a: "Yes. Strategically optimized resumes improve recruiter visibility, ATS performance, and shortlisting potential.",
              },
              {
                q: "I already have a resume. Can it still be improved?",
                a: "Almost always, yes. Most resumes have keyword, ATS, positioning, or achievement communication gaps that can be improved significantly.",
              },
            ].map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card border border-border/80 rounded-2xl px-5.5 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-extrabold text-sm md:text-base hover:no-underline py-4.5 text-foreground leading-tight">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs md:text-sm leading-relaxed pb-4.5 font-medium">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default ResumeOptimizationContentPage;
