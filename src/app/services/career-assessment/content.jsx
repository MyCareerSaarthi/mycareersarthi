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
  ClipboardList,
  Layers,
  Compass,
  Map,
  MessageSquare,
  Zap,
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
    className="group rounded-full px-8 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 bg-[#3f3fe2] hover:bg-[#3232c7] text-white border-0 cursor-pointer active:scale-95 shadow-[#3f3fe2]/20"
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

const CareerAssessmentContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pb-24 lg:pb-32 bg-white dark:bg-background">
        {/* Soft Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[450px] w-full bg-gradient-to-b from-[#f8f9ff]/50 via-[#fcfcff]/20 to-transparent dark:from-primary/5 -z-10" />

        {/* Decorative background bottom-left dot matrix matching the mockup */}
        <div className="absolute bottom-10 left-10 grid grid-cols-6 gap-2.5 opacity-20 pointer-events-none hidden md:grid">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Even 50/50 Balanced Column Grid Layout */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content Column (Grid Column 6) */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.15] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Applying Everywhere… But Still Not Getting the Right <br />
                  Opportunities?
                </h1>

                {/* Subtitle paragraph layout matching the mockup */}
                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg font-medium space-y-4">
                  <p>
                    Most professionals are switching jobs, exploring career
                    changes, chasing higher salaries, and applying to multiple
                    roles without fully understanding where their experience
                    actually fits in the market.
                  </p>
                  {/* <p className="font-semibold text-destructive bg-destructive/5 border border-destructive/10 rounded-xl px-4 py-3 text-sm">
                    And that often leads to low interview conversion, career confusion, failed transitions, stagnant growth, and accepting roles that hurt long-term positioning.
                  </p> */}
                  <p className="text-slate-700 dark:text-slate-350 text-sm font-semibold">
                    Our Career Assessment Services is a structured, data-driven
                    career path assessment designed around real hiring patterns,
                    recruiter expectations, skills relevance, psychometric
                    evaluation, and market demand.
                  </p>
                </div>

                <div className="pt-2">
                  <CTAButton text="Get Career Clarity" />
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
                      <span>Career Match Score</span>
                    </div>

                    {/* Right: Tiny dot grid representing styling grid */}
                    <div className="flex items-center gap-1 opacity-25">
                      <div className="grid grid-cols-6 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <span
                            key={i}
                            className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Split body layout of the console */}
                  <div className="grid grid-cols-12 gap-5">
                    {/* Left: Professional modern Career Diagnostic radar/target preview */}
                    <div className="col-span-6 relative aspect-[3/4] rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#fafaff] dark:bg-slate-950/20 p-3.5 shadow-inner flex flex-col justify-between">
                      {/* Simulated target matrix */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#3f3fe2]/10 border border-[#3f3fe2]/20 flex items-center justify-center">
                            <Compass className="w-3.5 h-3.5 text-[#3f3fe2]" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="h-1.5 w-[70%] bg-slate-300 dark:bg-slate-750 rounded-full" />
                            <div className="h-1 w-[40%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          </div>
                        </div>
                        <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />

                        {/* Target Grid representing Career suitability mapping */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-2.5 flex flex-col items-center justify-center gap-2 relative overflow-hidden shadow-sm">
                          <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#3f3fe2]/30 flex items-center justify-center relative">
                            <div className="w-10 h-10 rounded-full border border-solid border-green-500/40 flex items-center justify-center">
                              <Target className="w-4 h-4 text-green-500 shrink-0" />
                            </div>
                          </div>
                          <span className="text-[8px] font-black text-slate-800 dark:text-slate-200 tracking-wide text-center">
                            Path Suitability Matrix
                          </span>
                        </div>

                        {/* Summary rating tags */}
                        <div className="grid grid-cols-2 gap-1.5 text-[8px] font-bold">
                          <div className="bg-purple-100/50 dark:bg-purple-950/20 border border-purple-500/10 p-1 rounded text-purple-600 text-center">
                            Psych: Match
                          </div>
                          <div className="bg-blue-100/50 dark:bg-blue-950/20 border border-blue-500/10 p-1 rounded text-blue-600 text-center">
                            Skills: High
                          </div>
                        </div>
                      </div>

                      {/* Status indicator */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-1.5 rounded-lg flex items-center justify-between shadow-sm text-[8px] font-black text-[#3f3fe2] uppercase tracking-wider">
                        <span>Domain Alignment</span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                      </div>
                    </div>

                    {/* Right: Feedback parameters grid */}
                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      {/* Parameter 1: Psychometric Fit */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-[#3f3fe2]/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center text-violet-600">
                            <Brain className="w-3 h-3" />
                          </div>
                          <span>Psychometric Fit</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div
                            className="h-full bg-purple-600 rounded-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 2: Skills Competency */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-green-500/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600">
                            <ClipboardList className="w-3 h-3" />
                          </div>
                          <span>Skills Competency</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 3: Role Suitability */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-blue-500/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                            <Target className="w-3.5 h-3.5" />
                          </div>
                          <span>Role Suitability</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: "80%" }}
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Active parsing console waveform matching mockup */}
                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Map className="w-4 h-4" />
                    </div>

                    {/* Visual simulated spectrum bars indicating active parsing */}
                    <div className="flex-1 flex items-end gap-0.75 h-6 px-2 justify-center">
                      {[...Array(24)].map((_, i) => {
                        const heights = [
                          "20%",
                          "40%",
                          "60%",
                          "75%",
                          "90%",
                          "70%",
                          "50%",
                          "30%",
                          "20%",
                          "45%",
                          "65%",
                          "85%",
                          "70%",
                          "50%",
                          "30%",
                          "45%",
                          "65%",
                          "85%",
                          "95%",
                          "75%",
                          "55%",
                          "35%",
                          "20%",
                          "40%",
                        ];
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
                      Market-Aligned
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT EXACTLY IS A CAREER ASSESSMENT */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-center tracking-tight">
                So, What Exactly is a Career Assessment?
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto font-medium">
                A career assessment is a structured evaluation process designed
                to help professionals understand how their profile is positioned
                in the market, what roles align with their experience, what
                skills are helping or limiting growth, and what career paths are
                realistically achievable.
              </p>

              {/* Structured Two-Column Content Layout */}
              <div className="grid md:grid-cols-12 gap-8 items-stretch mb-8">
                {/* Left Column: Context Card */}
                <div className="md:col-span-7 bg-background border border-border/80 rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                  <p className="font-semibold text-foreground text-xs md:text-sm lg:text-base leading-relaxed mb-3">
                    Most professionals make career decisions emotionally. They
                    apply randomly, switch careers impulsively, chase titles
                    without alignment, or follow market trends blindly without
                    understanding how recruiters actually evaluate their
                    profile.
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm font-semibold">
                    But long-term career growth requires clarity, positioning,
                    and strategic direction.
                  </p>
                </div>

                {/* Right Column: priorities card */}
                <div className="md:col-span-5 bg-background border border-border/80 rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                  <p className="text-primary text-[10px] uppercase font-extrabold tracking-wider mb-3">
                    Our professional career assessment helps professionals make
                    informed decisions based on:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "experience evaluation",
                      "recruiter expectations",
                      "role-fit analysis",
                      "hard & soft skills assessment",
                      "psychometric evaluation",
                      "market demand & alignment",
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

              <div className="text-center max-w-2xl mx-auto mb-8">
                <p className="text-sm md:text-base font-semibold text-destructive">
                  Because career growth without clarity often leads to
                  frustration.
                </p>
              </div>

              <div className="flex justify-center">
                <CTAButton text="Help Me Understand My Career Positioning" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOST PROFESSIONALS DON'T ACTUALLY KNOW HOW THE MARKET SEES THEM */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side text column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                Most Professionals Don’t Actually Know How the Market Sees Them
              </h2>

              <div className="space-y-4.5 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                <p>
                  That is one of the biggest reasons professionals struggle with
                  repeated rejections, failed transitions, stagnant growth, and
                  low interview conversion despite having relevant experience.
                </p>
                <p className="font-semibold text-foreground">
                  Because the market may interpret your profile very differently
                  from how you see yourself.
                </p>

                {/* What they assume list */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4.5 mt-3 shadow-inner">
                  <p className="font-bold text-foreground text-[10px] uppercase tracking-wider mb-2">
                    Many professionals assume:
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "more applications will solve the problem",
                      "another certification will fix growth issues",
                      "switching companies will improve opportunities",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-[11px] md:text-xs font-semibold"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 border border-primary/15 rounded-2xl p-4.5 mt-3 shadow-sm">
                  <p className="font-bold text-foreground mb-2.5 text-xs text-primary uppercase tracking-wider">
                    A suitability assessment bridges that gap by helping you
                    understand:
                  </p>
                  <ul className="grid grid-cols-2 gap-2.5 pl-0.5">
                    {[
                      "how recruiters interpret your profile",
                      "where you stand competitively",
                      "what strengths are valuable",
                      "what gaps are affecting growth",
                      "what realistic opportunities exist",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-xs font-bold capitalize"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold">
                  That clarity changes career decisions completely.
                </p>
              </div>
            </div>

            {/* Right side Dashboard map */}
            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-3xl p-5 md:p-6 shadow-sm">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-1.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">
                      Market Perception Gap
                    </span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                  </div>

                  <div className="space-y-3 text-[10px] md:text-xs">
                    <div className="grid grid-cols-2 gap-3.5">
                      {/* You */}
                      <div className="bg-background border border-border rounded-xl p-3 shadow-sm">
                        <p className="text-[9px] text-muted-foreground uppercase font-bold mb-1">
                          How You See Yourself
                        </p>
                        <p className="text-xs font-bold text-foreground mb-1">
                          Experienced Lead
                        </p>
                        <p className="text-[9px] text-muted-foreground leading-tight">
                          Certified • Multi-tasker • Ready for Executive Role
                        </p>
                      </div>

                      {/* Recruiter */}
                      <div className="bg-background border border-destructive/20 rounded-xl p-3 shadow-sm">
                        <p className="text-[9px] text-destructive uppercase font-bold mb-1">
                          How Recruiters See You
                        </p>
                        <p className="text-xs font-bold text-destructive mb-1">
                          Positioning Gap
                        </p>
                        <p className="text-[9px] text-muted-foreground leading-tight">
                          Timeline mismatch • Missing key domain keywords
                        </p>
                      </div>
                    </div>

                    {/* After Assessment */}
                    <div className="bg-background border border-primary/20 rounded-xl p-3.5 shadow-sm">
                      <p className="text-[9px] text-primary uppercase font-bold mb-1">
                        After Suitability Assessment
                      </p>
                      <div className="flex items-center gap-1.5 text-green-600 font-extrabold mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>100% Market Alignment</span>
                      </div>
                      <p className="text-[9px] text-muted-foreground leading-tight">
                        Clear role alignment, optimized keywords, and structured
                        progression milestones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS ROADMAP STEPS (HORIZONTAL STEPS MATRIX REDESIGN) */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight">
              What Does Our Career Assessment Process Include?
            </h2>
          </div>

          {/* Clean Steps matrix layout without confusing vertical timeline */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6 mb-12">
            {[
              {
                num: "01",
                title: "1. Career Diagnostic Assessment",
                desc: "We begin with a detailed evaluation of your current career journey, responsibilities, experience depth, and growth trajectory.",
                subText: "This includes:",
                items: [
                  "experience assessment",
                  "evaluating complexity handled",
                  "growth & leadership signals",
                  "analyzing current market positioning",
                ],
                icon: ClipboardList,
              },
              {
                num: "02",
                title: "2. Skills & Psychometric Assessments",
                desc: "Most professionals only evaluate themselves based on experience. But recruiters evaluate much more. We conduct hard & soft skills evaluations.",
                subText: "We conduct:",
                items: [
                  "online hard skills assessments",
                  "mock interview assessments",
                  "psychometric evaluations",
                ],
                icon: Brain,
              },
              {
                num: "03",
                title: "3. Profile & Positioning Analysis",
                desc: "Your resume and LinkedIn profile often reveal how the market currently perceives you.",
                subText: "We evaluate your:",
                items: [
                  "LinkedIn positioning",
                  "resume positioning",
                  "recruiter communications",
                  "market visibility",
                ],
                icon: FileCheck2,
              },
              {
                num: "04",
                title: "4. Role Fit Evaluation",
                desc: "Career confusion usually happens when professionals apply for roles that do not align with their actual positioning.",
                subText: "This helps identify:",
                items: [
                  "roles with strong potential",
                  "realistic transitions",
                  "missing capability gaps",
                  "long-term progression paths",
                ],
                icon: Target,
              },
              {
                num: "05",
                title: "5. Personalized Career Roadmap",
                desc: "Once the assessment process is complete, we create a structured and personalized career roadmap for your next steps.",
                subText: "Your roadmap includes:",
                items: [
                  "clear next-step direction",
                  "phase-wise growth plans",
                  "recommended certificates",
                  "growth roadmap execution",
                ],
                icon: Map,
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-4.5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Card Header with step number */}
                  <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-border/40">
                    <span className="text-xl font-black text-primary/35">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-xs md:text-sm font-black mb-1.5 text-slate-800 dark:text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-[11px] leading-relaxed mb-3.5 font-semibold">
                    {step.desc}
                  </p>

                  {step.subText && (
                    <p className="text-[9px] uppercase font-black tracking-widest text-slate-800 dark:text-slate-200 mb-1.5">
                      {step.subText}
                    </p>
                  )}

                  {step.items.length > 0 && (
                    <ul className="space-y-1">
                      {step.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-[10px] font-semibold text-muted-foreground leading-tight"
                        >
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
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
            <CTAButton text="Build My Career Roadmap" />
          </div>
        </div>
      </section>

      {/* 5. WHY CAREER ASSESSMENT MATTERS MORE THAN EVER */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
              Why Career Assessment Matters More Than Ever
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              The hiring market today is changing rapidly. Roles are evolving.
              AI is changing skill demand.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6">
              {/* Left Column */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm">
                <p className="font-extrabold text-sm mb-3.5 text-foreground flex items-center gap-2">
                  Many candidates spend months applying without realizing:
                </p>

                <ul className="space-y-2">
                  {[
                    "their target roles are misaligned",
                    "their positioning is weak",
                    "their skills are not translating properly",
                    "their experience is interpreted differently by recruiters",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-muted-foreground font-bold text-[10px] md:text-xs leading-none">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-3">
                  And without career clarity, professionals continue making the
                  same mistakes repeatedly. That is why career suitability
                  assessment matters more today.
                </p>
                <h3 className="text-xs md:text-sm font-extrabold text-foreground leading-snug">
                  Because before optimizing resumes, LinkedIn, or interviews……
                  professionals first need clarity on where they actually stand.
                </h3>
              </div>
            </div>

            <div className="border-t border-border/40 pt-5">
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 shadow-inner">
                <p className="text-foreground font-bold leading-relaxed text-sm">
                  Strategic growth requires data-driven assessments of actual
                  capabilities and professional alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU RECEIVE */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">
              What You Receive
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-semibold max-w-2xl mx-auto">
              At the end of the assessment process, you receive:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Career Diagnostic",
                desc: "A detailed understanding of your experience, growth patterns, and market positioning.",
                icon: ClipboardList,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Psychometric Review",
                desc: "Structured analysis of capabilities, interests, personality, and communication patterns.",
                icon: Brain,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Market Positioning",
                desc: "Rigorous evaluation of your LinkedIn, resume, and recruiter-facing positioning.",
                icon: FileCheck2,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Role Fit Insights",
                desc: "Clear mapping of roles and career directions that realistically align with your capabilities.",
                icon: Target,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Personal Roadmap",
                desc: "A structured roadmap designed around career growth, certifications, and milestones.",
                icon: Map,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-9.5 h-9.5 rounded-xl ${item.bg} flex items-center justify-center mb-3.5`}
                  >
                    <item.icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <h3 className="text-xs md:text-sm font-extrabold mb-1.5 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[11px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto font-semibold">
              You walk away with career clarity, realistic direction, and a
              practical growth strategy.
            </p>
            <CTAButton text="Get Career Direction Clarity" />
          </div>
        </div>
      </section>

      {/* 7. WONDERING IF RIGHT FOR YOU */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">
              Wondering If Career Assessment Services Are Right for You?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-semibold max-w-2xl mx-auto">
              Our Career Assessment Services are designed for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Professionals looking to understand which career paths align best with their strengths, interests, and skills.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals feeling confused about growth, transitions, stagnation, or future career direction.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Professionals",
                desc: "Leaders evaluating long-term positioning, leadership growth, or strategic career transitions.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Professionals Planning switches",
                desc: "Individuals exploring realistic transitions into new industries, functions, or roles.",
                icon: ArrowLeftRight,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Active Job Seekers",
                desc: "Professionals struggling with interview callbacks, callbacks conversion, and unclear market positioning.",
                icon: Search,
                color: "text-rose-500",
                bg: "bg-rose-500/10",
              },
              {
                title: "Seeking Career Clarity",
                desc: "Individuals wanting a structured and realistic understanding of where they stand professionally.",
                icon: ClipboardList,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-9.5 h-9.5 rounded-xl ${item.bg} flex items-center justify-center mb-3.5`}
                  >
                    <item.icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <h3 className="text-xs md:text-sm font-extrabold mb-1.5 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[11px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto font-semibold">
              Whether you are confused about your next step, struggling with
              career growth, or planning a transition, our professional career
              assessment services help you move forward strategically.
            </p>
            <CTAButton text="Yes, Assess My Career Strategically" />
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE MYCAREERSARTHI (STRUCTURED GRID LAYOUT REDESIGN) */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">
              Why Choose MyCareerSarthi?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-semibold max-w-2xl mx-auto">
              Most career guidance today is generic, motivational, or
              emotionally driven. We focus on:
            </p>
          </div>

          {/* 2x2 Feature Pillars Grid surrounding the central value block */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Psychometric Analysis",
                desc: "Mapping behavioral strengths, work preferences, interests, and natural career vectors.",
                icon: Brain,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Experience Diagnostics",
                desc: "Rigorous diagnostic audit of your past work history, responsibilities, and progression rate.",
                icon: ClipboardList,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Role-Fit Analysis",
                desc: "Empirical keyword and competency comparisons against active hiring benchmarks and target job requirements.",
                icon: Target,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Roadmap Planning",
                desc: "Delineating a phased strategic roadmap with certifications, milestone metrics, and skill-ups.",
                icon: Map,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-5.5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-9.5 h-9.5 rounded-xl ${item.bg} flex items-center justify-center mb-3.5`}
                  >
                    <item.icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <h3 className="text-sm md:text-base font-extrabold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-4.5 border border-primary/15 shadow-inner text-center font-semibold text-xs md:text-sm text-foreground/90 leading-relaxed">
              At MyCareerSarthi, we take a much more strategic and
              market-focused approach. Our process combines:{" "}
              <span className="text-primary font-extrabold">
                AI-driven analysis, career diagnostics, hard and soft skills
                assessments, psychometric evaluation, recruiter-focused
                interpretation, and structured roadmap planning
              </span>{" "}
              to help professionals understand how their profiles are actually
              perceived. The goal is simple — help you make career decisions
              with clarity instead of confusion.
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQS */}
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
                q: "What is a career assessment service?",
                a: "A career assessment service helps professionals understand their career positioning, role fit, skills relevance, strengths, and growth direction based on real market expectations and hiring patterns.",
              },
              {
                q: "Is this only for job seekers?",
                a: "No. Our career assessment services are useful for professionals at all stages including career growth, leadership positioning, transitions, and long-term planning.",
              },
              {
                q: "What is included in the assessment?",
                a: "The assessment includes career diagnostics, hard and soft skills assessments, psychometric evaluation, market alignment analysis, role-fit evaluation, profile assessment, and a personalized career roadmap.",
              },
              {
                q: "Can this help with career transitions?",
                a: "Yes. Our career suitability assessment helps professionals identify realistic transition opportunities based on transferable skills, market demand, and profile alignment.",
              },
              {
                q: "Is this based only on AI?",
                a: "No. While AI is used for structured evaluation and scoring, expert career analysis and recruiter-focused interpretation are core parts of the process.",
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

export default CareerAssessmentContentPage;
