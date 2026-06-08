"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
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
  Compass,
  Map,
  ClipboardList,
  ArrowLeftRight
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative font-sans">
      
      {/* 1. HERO SECTION (Light Theme) */}
      <section className="relative pt-10 pb-20 md:pb-24 lg:pb-32 bg-white dark:bg-background">
        {/* Soft Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[450px] w-full bg-gradient-to-b from-[#f8f9ff]/50 via-[#fcfcff]/20 to-transparent dark:from-primary/5 -z-10" />

        {/* Decorative background bottom-left dot matrix */}
        <div className="absolute bottom-10 left-10 grid grid-cols-6 gap-2.5 opacity-20 pointer-events-none hidden md:grid">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-[44px] font-black leading-[1.2] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Applying Everywhere… <br className="hidden md:inline" /> But Still Not Getting the <span className="text-[#3f3fe2]">Right Opportunities?</span>
                </h1>

                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg font-medium space-y-4">
                  <p>
                    You wouldn't start a journey without knowing the destination. Yet many professionals are making career decisions without a roadmap leading to confusion, missed opportunities, and slower growth.
                  </p>
                </div>

                <div className="pt-2">
                  <CTAButton text="Get Career Clarity" />
                </div>
              </div>

              {/* Right Mockup Console Column */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-[120px_200px_150px_220px] blur-[60px] pointer-events-none -z-10" />

                {/* Rounded mockup container */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[500px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#3f3fe2]" />
                      <span>Career Match Score</span>
                    </div>

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

                  {/* Body */}
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6 relative aspect-[3/4] rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#fafaff] dark:bg-slate-950/20 p-3.5 shadow-inner flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#3f3fe2]/10 border border-[#3f3fe2]/20 flex items-center justify-center">
                            <Compass className="w-3.5 h-3.5 text-[#3f3fe2]" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="h-1.5 w-[70%] bg-slate-300 dark:bg-slate-700 rounded-full" />
                            <div className="h-1 w-[40%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          </div>
                        </div>
                        <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />

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

                        <div className="grid grid-cols-2 gap-1.5 text-[8px] font-bold">
                          <div className="bg-purple-100/50 dark:bg-purple-950/20 border border-purple-500/10 p-1 rounded text-purple-600 text-center">
                            Psych: Match
                          </div>
                          <div className="bg-blue-100/50 dark:bg-blue-950/20 border border-blue-500/10 p-1 rounded text-blue-600 text-center">
                            Skills: High
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-1.5 rounded-lg flex items-center justify-between shadow-sm text-[8px] font-black text-[#3f3fe2] uppercase tracking-wider">
                        <span>Domain Alignment</span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                      </div>
                    </div>

                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#3f3fe2]/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600">
                            <Brain className="w-3 h-3" />
                          </div>
                          <span>Psychometric Fit</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600">
                            <ClipboardList className="w-3 h-3" />
                          </div>
                          <span>Skills Competency</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-blue-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600">
                            <Target className="w-3.5 h-3.5" />
                          </div>
                          <span>Role Suitability</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "80%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Map className="w-4 h-4" />
                    </div>

                    <div className="flex-1 flex items-end gap-0.75 h-6 px-2 justify-center">
                      {[15, 30, 45, 55, 65, 50, 35, 20, 15, 35, 50, 60, 50, 35, 20, 35, 50, 60, 70, 55, 40, 25, 15].map((h, i) => (
                        <span
                          key={i}
                          className="w-0.75 bg-[#3f3fe2] rounded-full"
                          style={{ height: `${h * 1.4}%` }}
                        />
                      ))}
                    </div>

                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      Market-Aligned
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS A CAREER ASSESSMENT? (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#3f3fe2]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  So, What Exactly is a Career Assessment?
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  A career assessment is a structured evaluation process designed to help professionals understand how their profile is positioned in the market, what roles align with their experience, what skills are helping or limiting growth, and what career paths are realistically achievable.
                </p>
                <div className="pt-2">
                  <CTAButton text="Help Me Understand My Career Positioning" />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center relative">
                {/* Soft backdrop glow behind illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/illustrations/analysis.svg"
                    alt="Career Assessment Analysis"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOST PROFESSIONALS DON'T ACTUALLY KNOW HOW THE MARKET SEES THEM (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
                Most Professionals Don’t Actually Know How the Market Sees Them
              </h2>

              <div className="space-y-4 text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                
                {/* Assumptions warning block */}
                <div className="bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20 rounded-2xl p-5 mt-3 shadow-inner">
                  <p className="font-bold text-rose-700 dark:text-rose-400 text-xs uppercase tracking-wider mb-3">
                    Many professionals assume:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "more applications will solve the problem",
                      "another certification will fix growth issues",
                      "switching companies will improve opportunities"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-center text-xs text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="capitalize">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-400 mt-3 italic">
                    …but the real issue is often poor positioning, unclear role alignment, and lack of career clarity.
                  </p>
                </div>

                <div className="bg-[#f0f2ff] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 mt-4 shadow-sm">
                  <p className="font-bold text-[#3f3fe2] mb-3 text-xs uppercase tracking-wider">
                    A structured career suitability assessment helps bridge that gap by helping professionals understand:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-0.5">
                    {[
                      "how recruiters interpret their profile",
                      "where they stand competitively",
                      "what strengths are valuable",
                      "what gaps are affecting growth",
                      "what realistic opportunities exist"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-xs font-bold text-slate-600 dark:text-slate-300" style={{ textTransform: "none" }}>
                        <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Right Column visual perceptions */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      Market Perception Gap
                    </span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-[#3f3fe2] animate-pulse" />
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-3 shadow-sm">
                        <p className="text-[9px] text-[#3f3fe2] uppercase font-bold mb-1">
                          How You See Yourself
                        </p>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                          Experienced Lead
                        </p>
                        <p className="text-[9px] text-slate-400 mt-1 leading-tight">
                          Certified • Ready for Growth
                        </p>
                      </div>

                      <div className="bg-white dark:bg-slate-950 border border-rose-100 dark:border-rose-900/10 rounded-xl p-3 shadow-sm">
                        <p className="text-[9px] text-rose-500 uppercase font-bold mb-1">
                          Recruiter Interpretation
                        </p>
                        <p className="text-xs font-bold text-rose-650 dark:text-rose-400">
                          Positioning Mismatch
                        </p>
                        <p className="text-[9px] text-slate-400 mt-1 leading-tight">
                          Keywords missing • Unclear focus
                        </p>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-950 border border-green-100 dark:border-green-900/10 rounded-xl p-3 shadow-sm">
                      <p className="text-[9px] text-green-600 uppercase font-bold mb-1">
                        With Career Suitability Assessment
                      </p>
                      <div className="flex items-center gap-1 text-green-600 font-extrabold text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Empirical Alignment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton text="Understand My Market Positioning" />
          </div>
        </div>
      </section>

      {/* 4. WHAT DOES OUR CAREER ASSESSMENT PROCESS INCLUDE? (DARK THEMED - COLOR CONTRAST EXCEPTION) */}
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              What Does Our Career Assessment Process Include?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "1. Career Diagnostic Assessment",
                desc: "experience assessment to evaluate your current responsibilities and progression",
                subText: "This includes:",
                items: [
                  "complexity of work you handled",
                  "growth patterns & leadership signals",
                  "current market positioning"
                ],
                icon: ClipboardList,
                glow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              },
              {
                num: "02",
                title: "2. Skills & Psychometric",
                desc: "online hard skills assessments & mock interview soft skills evaluations",
                subText: "We conduct:",
                items: [
                  "hard skills evaluation",
                  "psychometric strengths mappings",
                  "personality & interests fit"
                ],
                icon: Brain,
                glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              },
              {
                num: "03",
                title: "3. Profile & Positioning Analysis",
                desc: "We evaluate your resume, LinkedIn profile, and market communication.",
                subText: "We evaluate your:",
                items: [
                  "LinkedIn profile positioning",
                  "resume positioning",
                  "recruiter communications",
                  "market visibility fit"
                ],
                icon: FileCheck2,
                glow: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              },
              {
                num: "04",
                title: "4. Role Fit Evaluation",
                desc: "We map capabilities against realistic target roles and hiring expectations.",
                subText: "We map your:",
                items: [
                  "hard & soft skills suitability",
                  "interests & strengths fit",
                  "experience depth mapping"
                ],
                icon: Target,
                glow: "group-hover:border-green-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              },
              {
                num: "05",
                title: "5. Personalized Career Roadmap",
                desc: "Your roadmap outlines clear next-step career direction and milestone execution plans.",
                subText: "Your roadmap includes:",
                items: [
                  "phase-wise growth planning",
                  "skills & certifications advice",
                  "milestones & roadmap execution"
                ],
                icon: Map,
                glow: "group-hover:border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]"
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                    <span className="text-xl font-black text-indigo-400/40">{step.num}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 transition-colors">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-extrabold text-white leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-semibold mb-4">
                    {step.desc}
                  </p>

                  <p className="text-[9px] uppercase font-bold tracking-widest text-[#3f3fe2] mb-2">
                    {step.subText}
                  </p>
                  <ul className="space-y-1.5">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-[10px] text-slate-300 leading-tight">
                        <CheckCircle2 className="w-3 h-3 text-indigo-455 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Card Glow Highlight */}
                <div className={`absolute inset-0 rounded-2xl border border-transparent pointer-events-none transition-all duration-300 ${step.glow}`} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <CTAButton text="Build My Career Roadmap" />
          </div>
        </div>
      </section>

      {/* 5. VISUAL PART (WHAT YOU RECEIVE) - (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
              What You Receive
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              At the end of the suitability assessment process, you walk away with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
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
        </div>
      </section>

      {/* 6. TARGET AUDIENCE (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Wondering If Career Assessment Services Are Right for You?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our Career Assessment Services are designed for:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Professionals looking to understand which career paths align best with their strengths, interests, and skills.",
                icon: GraduationCap,
                color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20"
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals feeling confused about growth, transitions, stagnation, or future career direction.",
                icon: Briefcase,
                color: "text-amber-650 bg-amber-50 dark:bg-amber-955/20"
              },
              {
                title: "Senior Professionals",
                desc: "Leaders evaluating long-term positioning, leadership growth, or strategic career transitions.",
                icon: Award,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20"
              },
              {
                title: "Professionals Planning Career Switches",
                desc: "Individuals exploring realistic transitions into new industries, functions, or roles.",
                icon: ArrowLeftRight,
                color: "text-green-600 bg-green-50 dark:bg-green-950/20"
              },
              {
                title: "Job Seekers Facing Repeated Rejections",
                desc: "Professionals struggling with interview conversion and unclear market positioning.",
                icon: Search,
                color: "text-rose-600 bg-rose-50 dark:bg-rose-950/20"
              },
              {
                title: "Professionals Seeking Career Clarity",
                desc: "Individuals wanting a structured and realistic understanding of where they stand professionally.",
                icon: ClipboardList,
                color: "text-indigo-650 bg-indigo-50 dark:bg-indigo-950/20"
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

          <div className="flex justify-center mt-12">
            <CTAButton text="Yes, Assess My Career Strategically" />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE MYCAREERSARTHI? (DARK THEMED - COLOR CONTRAST EXCEPTION) */}
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none -z-10" />
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-7 space-y-6 text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Why Choose MyCareerSarthi?
                </h2>
                <p className="text-base text-slate-300 leading-relaxed font-medium">
                  Our process combines AI-driven analysis, career diagnostics, hard and soft skills assessments, psychometric evaluation, recruiter-focused interpretation, and structured roadmap planning to help professionals understand how their profiles are actually perceived in today’s hiring market.
                </p>
                <div className="pt-2">
                  <CTAButton text="Improve My Career Direction" />
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center relative">
                {/* Soft backdrop glow behind illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="relative w-full aspect-[4/3] max-w-[300px] md:max-w-[360px] hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/illustrations/career_progress.svg"
                    alt="Why Choose MyCareerSarthi"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs (Light Theme, Slate Background) */}
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
                  q: "What is a career assessment service?",
                  a: "A career assessment service helps professionals understand their career positioning, role fit, skills relevance, strengths, and growth direction based on real market expectations and hiring patterns."
                },
                {
                  q: "Is this only for job seekers?",
                  a: "No. Our career assessment services are useful for professionals at all stages including career growth, leadership positioning, transitions, and long-term planning."
                },
                {
                  q: "What is included in the assessment?",
                  a: "The assessment includes career diagnostics, hard and soft skills assessments, psychometric evaluation, market alignment analysis, role-fit evaluation, profile assessment, and a personalized career roadmap."
                },
                {
                  q: "Can this help with career transitions?",
                  a: "Yes. Our suitability assessment helps professionals identify realistic transition opportunities based on transferable skills, market demand, and profile alignment."
                },
                {
                  q: "Is this based only on AI?",
                  a: "No. While AI is used for structured evaluation and scoring, expert career analysis and recruiter-focused interpretation are core parts of the process."
                }
              ].map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-800 dark:text-white py-4.5 hover:no-underline text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-slate-800 text-[#3f3fe2] dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold shrink-0">
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

export default CareerAssessmentContentPage;
