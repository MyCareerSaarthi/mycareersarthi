"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({
  text,
  href = "/linkedin/analyze",
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
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </Button>
  );
};

const LinkedinOptimizationPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative font-sans">
      
      {/* 1. HERO SECTION (Light Theme) */}
      <section className="relative pt-20 pb-20 md:pb-24 lg:pb-32 bg-white dark:bg-background">
        {/* Soft Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-[#f8f9ff]/60 via-[#fcfcff]/30 to-transparent dark:from-primary/5 -z-10" />

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
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Optimize your LinkedIn profile to get{" "}
                  <span className="text-[#3f3fe2]">10X interviews</span>
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
                  Get a customized, detailed analysis of your LinkedIn profile to
                  understand your profile’s strengths, weaknesses, and suggestions
                  to rank your profile higher in LinkedIn search to get more views
                  from recruiters, job opportunities, and interviews.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <CTAButton
                    text="Yes, I want a personalized LinkedIn profile makeover"
                    href="/linkedin/analyze"
                    variant="blue"
                  />
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
                      <span>LinkedIn Score Tracker</span>
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
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/40 border border-blue-500/25 flex items-center justify-center text-[10px] font-bold text-blue-650">
                            in
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="h-1.5 w-[70%] bg-slate-300 dark:bg-slate-700 rounded-full" />
                            <div className="h-1 w-[40%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          </div>
                        </div>
                        <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />

                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5 relative overflow-hidden shadow-sm">
                          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/20 border-2 border-solid border-[#3f3fe2]/20 flex items-center justify-center relative">
                            <Briefcase className="w-5 h-5 text-[#3f3fe2]" />
                          </div>
                          <div className="bg-green-100 dark:bg-green-950/40 border border-green-500/10 px-2 py-0.5 rounded text-[7px] font-black text-green-650 uppercase tracking-wide">
                            Open to Work
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5 text-[8px] font-bold">
                          <div className="bg-blue-100/50 dark:bg-blue-950/20 border border-blue-500/10 p-1 rounded text-blue-600 text-center">
                            Views: +240%
                          </div>
                          <div className="bg-purple-100/50 dark:bg-purple-950/20 border border-purple-500/10 p-1 rounded text-purple-600 text-center">
                            SEO Rank: High
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-1.5 rounded-lg flex items-center justify-between shadow-sm text-[8px] font-black text-[#3f3fe2] uppercase tracking-wider">
                        <span>Keywords Audit</span>
                        <Check className="w-2.5 h-2.5 text-green-500 stroke-[3.5]" />
                      </div>
                    </div>

                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#3f3fe2]/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                            <KeyIcon />
                          </div>
                          <span>Keyword Relevance</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-purple-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center text-purple-600">
                            <Brain className="w-3 h-3" />
                          </div>
                          <span>Profile Completeness</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: "95%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600">
                            <TrendingUp className="w-3.5 h-3.5" />
                          </div>
                          <span>Search Appearances</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wave Visualizer at Bottom */}
                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Search className="w-4 h-4" />
                    </div>

                    <div className="flex-1 flex items-end gap-0.75 h-6 px-2 justify-center">
                      {[12, 22, 38, 48, 58, 42, 28, 18, 12, 28, 42, 52, 42, 28, 18, 28, 42, 52, 62, 48, 32, 18, 12].map((h, i) => (
                        <span
                          key={i}
                          className="w-0.75 bg-[#3f3fe2] rounded-full"
                          style={{ height: `${h * 1.5}%` }}
                        />
                      ))}
                    </div>

                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      Active Searches
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS LINKEDIN OPTIMIZATION? (Light Theme) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#3f3fe2]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                  Definition
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                  So, what exactly is LinkedIn Profile Optimization?
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                  LinkedIn profile optimization is the process of transforming your profile using the right keywords that recruiters search for in the linkedin search for hiring for various roles to get more views, stronger connections and ultimately job interviews.
                </p>

                <div className="space-y-3 pt-2">
                  <p className="font-extrabold text-[#3f3fe2] dark:text-indigo-400 text-xs uppercase tracking-wider">
                    And this service includes optimizing your:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-0.5">
                    {[
                      "LinkedIn headline",
                      "About section (professional summary)",
                      "Work experience descriptions",
                      "Skills and endorsements",
                      "Industry keywords",
                      "Profile structure and clarity",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <CTAButton text="Optimize my linkedin profile for recruiters" href="/linkedin/analyze" variant="blue" />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center relative">
                {/* Soft backdrop glow behind illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3f3fe2]/8 dark:bg-[#3f3fe2]/4 rounded-full blur-3xl pointer-events-none -z-10" />

                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.02)]"
                >
                  <Image
                    src="/scoring/linkedin_report.webp"
                    alt="LinkedIn Report Makeover"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MYTH BUSTER SECTION (Dark Theme) */}
      <section className="relative w-full bg-slate-900 text-gray-100 py-16 md:py-24 overflow-hidden selection:bg-indigo-500/30">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
            {/* Left Content Column */}
            <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-6">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                LinkedIn <span className="text-[#3f3fe2]">=</span> Resume.
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-[#3f3fe2] bg-clip-text text-transparent underline decoration-destructive/50 decoration-wavy underline-offset-8">
                  Right?
                </span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                It is unfortunate to see that many job seekers unknowingly
                optimize their linkedin profile just like their resume believing
                that LinkedIn = Resume.
              </p>

              {/* Warning block */}
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 font-semibold text-sm px-6 py-4.5 rounded-xl border border-destructive/20 inline-block text-left">
                And believing this myth... is your first career mistake.
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto self-start">
                <CTAButton text="Give me a powerful linkedin profile makeover" href="/linkedin/analyze" variant="blue" />
              </div>
            </div>

            {/* Right Column (Visual Comparison) */}
            <div className="w-full lg:w-[48%] grid sm:grid-cols-2 gap-4">
              {/* Resume Card */}
              <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all opacity-80 hover:opacity-100">
                <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded-xl flex items-center justify-center mb-4 text-slate-400">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Your Resume</h3>
                <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                  Most professionals treat LinkedIn exactly like their resume.
                  Fill in the job titles, add work experience, mention education,
                  and consider it done. But that's not how LinkedIn works at all.
                </p>
                <ul className="space-y-2 text-[10px] text-slate-300">
                  <li className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                    <span>A static document you send after applying.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                    <span>Nobody finds you through it.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                    <span>You send it, you wait, you hope.</span>
                  </li>
                </ul>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-slate-950/60 border border-violet-500/20 rounded-2xl p-5 relative overflow-hidden group hover:border-violet-500/40 transition-all shadow-[0_0_20px_rgba(168,85,247,0.05)]">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Rocket className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-violet-600 flex items-center justify-center rounded-xl mb-4 shadow-lg shadow-violet-600/20">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Your LinkedIn Profile</h3>
                  <p className="text-[11px] text-slate-300 mb-4 leading-relaxed font-semibold">
                    LinkedIn gives you what your resume never can: a unique public
                    profile where recruiters actively search and find you before
                    you even know a job exists.
                  </p>
                  <ul className="space-y-2 text-[10px] text-slate-350">
                    {[
                      "Headline tells recruiters exactly who you are",
                      "Featured section showcases work visually",
                      "About section tells your journey in your voice",
                      "Recommendations build third-party credibility",
                      "Endorsements validate your skills publicly",
                      "Activity & posts show how you think in real time",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center border-t border-white/5 pt-10">
            <p className="text-base md:text-lg font-medium mb-6 max-w-2xl mx-auto">
              <span className="text-[#3f3fe2] dark:text-indigo-400 mr-2 font-bold">The verdict:</span>
              LinkedIn isn't where you list your experience. It's where you
              build your professional reputation publicly, so opportunities find
              you instead of you chasing them.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CONSEQUENCES SECTION (Dark Theme) */}
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-rose-400 uppercase tracking-wider bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20 shadow-sm">
              Consequences
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
              So, what happens when you treat LinkedIn like just another resume?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {[
              {
                icon: TrendingUp,
                desc: "Recruiters search for your skills, and you don't appear because your profile isn't optimized for your target role.",
                glowColor: "group-hover:border-rose-500/30 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]",
                iconColor: "text-rose-400 bg-rose-500/10"
              },
              {
                icon: Search,
                desc: "Even if a recruiter finds your profile, it's not positioned clearly enough for them to understand your value.",
                glowColor: "group-hover:border-orange-500/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
                iconColor: "text-orange-400 bg-orange-500/10"
              },
              {
                icon: LineChart,
                desc: "Someone with lesser skills & experience but with a strategically built LinkedIn profile ends up getting the interview call.",
                glowColor: "group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
                iconColor: "text-amber-400 bg-amber-500/10"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-350 group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconColor}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
                {/* Visual border glow */}
                <div className={`absolute inset-0 rounded-2xl border border-transparent pointer-events-none transition-all duration-300 ${item.glowColor}`} />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-slate-900/75 border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl shadow-primary/5 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white relative z-10">
              Stop missing out on life-changing opportunities.
            </h3>
            <p className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto relative z-10 font-semibold">
              At MyCareerSarthi, with our linkedin profile optimization
              services, we ensure that your profile is perfectly aligned with
              your target job role and you finally get that interview call
              you've been waiting for.
            </p>
            <div className="relative z-10">
              <CTAButton
                text="Yes, I’m Ready for a LinkedIn Profile Makeover"
                href="/linkedin/analyze"
                variant="blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS STEPS SECTION (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
              Get a Recruiter-Ready LinkedIn Profile in 3 Easy Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                num: "01",
                title: "1. AI Profile Scoring (Role-Based)",
                desc: "We begin by scoring your LinkedIn profile against your target role or job description in our proprietary Linkedin profile AI scorer.",
                icon: Brain,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                num: "02",
                title: "2. Profile Diagnostic Assessment",
                desc: "After scoring your Linkedin profile, our experts conduct a detailed profile review against your target role based on professional judgment and recruiter expectations, not just automation.",
                icon: ShieldCheck,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                num: "03",
                title: "3. Role-Aligned Profile Optimization",
                desc: "Through our linkedin profile development service, we optimize your profile specifically for the roles you are targeting by refining each section to 10X your views and land interviews.",
                icon: Target,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#fafaff] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xl font-black text-slate-300 dark:text-slate-700">{step.num}</span>
                    <div className={`w-8 h-8 rounded-full ${step.bg} flex items-center justify-center ${step.color}`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold mb-2 text-slate-800 dark:text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs md:text-sm font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Yes, Make My LinkedIn Profile Recruiter-Ready" href="/linkedin/analyze" variant="blue" />
          </div>
        </div>
      </section>

      {/* 6. WHO IS IT FOR? (Light Theme) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Target Audience
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2">
              Wondering If LinkedIn Profile Optimization Services Are Right for You?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our LinkedIn profile optimizations services are exactly what you need if you are a:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduate",
                desc: "Students entering the job market who need an optimized linkedin profile for linkedin search engine.",
                icon: GraduationCap,
                color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20",
              },
              {
                title: "Mid-Level Professional",
                desc: "Professionals preparing for career growth, change or role transitions.",
                icon: Briefcase,
                color: "text-amber-600 bg-amber-50 dark:bg-amber-955/20",
              },
              {
                title: "Senior Leader",
                desc: "CXOs building authority and credibility within their specific industry.",
                icon: Award,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20",
              },
              {
                title: "Job Seeker",
                desc: "Professionals actively searching for new job opportunities.",
                icon: Search,
                color: "text-green-600 bg-green-50 dark:bg-green-950/20",
              },
            ].map((target, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-6 flex gap-4 hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${target.color}`}
                >
                  <target.icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {target.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {target.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Yes, Turn My LinkedIn Profile Into a Career Asset" href="/linkedin/analyze" variant="blue" />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE MYCAREERSARTHI? (Light Theme) */}
      <section className="py-24 md:py-28 lg:py-32 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Why Choose MyCareerSarthi?
              </h2>
              <p className="text-sm sm:text-base text-slate-655 dark:text-slate-350 leading-relaxed font-medium">
                We don't do things in bits and pieces. We offer a holistic
                approach to your career journey.
              </p>
              <div className="space-y-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                <p>
                  While others focus on just one thing, leaving professionals
                  doing the work of connecting all the pieces themselves, we
                  give you everything in one place. Here you get your LinkedIn
                  profile optimized, your resume optimized and aligned with your
                  target role, job search strategy, and interview prep.
                </p>
                <p>
                  Our{" "}
                  <span className="text-slate-800 dark:text-white font-extrabold">
                    linkedin profile writing service
                  </span>{" "}
                  ensures your profile includes all the right keywords, is
                  searchable, and aligned with targeted roles. Through our
                  makeover service, we restructure your profile so recruiters
                  quickly understand your experience.
                </p>
                <p>
                  We go beyond cosmetic edits. We align your LinkedIn profile,
                  resume, and career positioning so everything works together to
                  improve visibility, attract recruiter attention, and increase
                  interview calls.
                </p>
              </div>
              <div className="pt-2">
                <CTAButton text="Convert my linkedin profile into a job magnet" href="/linkedin/analyze" variant="blue" />
              </div>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Soft backdrop glow behind illustration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.02)]"
              >
                <Image
                  src="/illustrations/career_progress.svg"
                  alt="Holistic Career Progress"
                  fill
                  className="object-contain relative z-10"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Light Theme) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
              Real Stories from Professionals Like You
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Discover how our optimization services transform careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {[
              {
                text: "Before MCS, my profile was just an online resume. After their optimization, I received 3 interview calls from top tier companies within a month!",
                role: "Senior Marketing Manager",
                initial: "S",
              },
              {
                text: "Their approach is entirely different. They understood my target role perfectly and re-worded my experience. The results were instant.",
                role: "Software Engineering Lead",
                initial: "A",
              },
              {
                text: "I was skeptical about paying for an optimization, but the AI scoring combined with their expert review showed me exactly what I was missing.",
                role: "Operations Director",
                initial: "M",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-605 dark:text-slate-300 italic leading-relaxed">
                    “{testimonial.text}”
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 dark:bg-slate-850 text-[#3f3fe2] dark:text-indigo-400 font-bold rounded-full flex items-center justify-center text-xs shrink-0">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-850 dark:text-white leading-none">
                      Verified Professional
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Yes, Optimize My LinkedIn Profile for Recruiters" href="/linkedin/analyze" variant="blue" />
          </div>
        </div>
      </section>

      {/* 9. FAQs (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              FAQ
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "Is LinkedIn optimization worth it?",
                  a: "95% of recruiters now use LinkedIn to search for candidates with thousands of them searching for specific roles every minute. So an optimized linkedin profile not only increases your visibility, but 10X your chance of getting relevant job opportunities well before the hiring post goes live.",
                },
                {
                  q: "Why am I not getting job offers on LinkedIn?",
                  a: "In majority of the cases, your linkedin profile lacks the right keywords required for specific roles, hence they don't appear in recruiter's linkedin searches.",
                },
                {
                  q: "I don't know how to begin with LinkedIn. How will I do this?",
                  a: "You don't even have to lift a finger. Once you sign up for our services, our experts conduct a detailed AI + manual review and provide a done-for-you profile builder service.",
                },
                {
                  q: "I have a very demanding schedule. How much time will this require from me?",
                  a: "Very minimal. You only need to share your career journey, target roles, and your current profile with us. Our experts will handle everything.",
                },
                {
                  q: "I have never optimized my LinkedIn profile before. Can it still be improved?",
                  a: "Why not?! There is always a first time. No matter if it's your first or \"nth\" time, we provide you with services to improve visibility to recruiters.",
                },
                {
                  q: "Will your services really help me land better job opportunities?",
                  a: "Without a doubt! A perfectly optimized profile with the right keywords 10X your chance to land relevant job opportunities.",
                },
                {
                  q: "Why should I choose MCS LinkedIn optimization services and not others?",
                  a: "Because we don't treat your career in bits and pieces. With our unique AI + expert approach, we reverse engineer your target role to help you land exactly what you've been dreaming of.",
                },
                {
                  q: "I'm not actively looking for a job right now. Will this still be helpful?",
                  a: "Definitely! If your profile is ready with the right keywords, it becomes easy peasy for you to land any new opportunities that interest you before you even actively look.",
                },
                {
                  q: "I'm currently employed. Will optimizing my LinkedIn profile affect my current job?",
                  a: "Absolutely not! An optimized profile does not notify your employer or indicate that you are actively job searching. Many companies encourage profile optimization.",
                },
                {
                  q: "How is the MCS proprietary AI profile scorer different from other tools?",
                  a: "While other AI tools just score cosmetics, the MCS AI scorer scores your profile against your specific target role or job description so you come up in relevant searches.",
                },
                {
                  q: "Why should I opt for MCS when ChatGPT is free?",
                  a: "Because ChatGPT doesn't have years of knowledge of transforming careers. It doesn't know what Indian companies are looking for or have a recruiter network. We guide you through the do's and don'ts with human expertise.",
                },
                {
                  q: "How do you ensure my sensitive information remains confidential?",
                  a: "Your data is handled with strict confidentiality and used only for optimizing your profile. Every piece of info you share is 100% confidential.",
                },
                {
                  q: "Do I need to write the content myself?",
                  a: "No. Our team of the best linkedin profile writers in India handle everything from banner to headline to about or experience sections.",
                },
                {
                  q: "What if I feel something needs to be adjusted?",
                  a: "Not a problem! Just let us know and we refine your profile until it accurately reflects your experience.",
                },
                {
                  q: "I'm a fresher or recent graduate. Will this still be beneficial for me?",
                  a: "Yes. LinkedIn optimization helps fresh graduates build a strong professional presence and improve visibility to recruiters from day one.",
                },
                {
                  q: "I am at an executive level. Will this service help me?",
                  a: "Yes. Senior professionals benefit from clear positioning, leadership visibility, and stronger professional branding.",
                },
                {
                  q: "I have a career gap. Can LinkedIn optimization still help?",
                  a: "Yes. A well-structured profile can present your experience clearly and address career gaps professionally.",
                },
                {
                  q: "How long does the service take?",
                  a: "Most optimizations are completed within a few days, depending on the complexity of the profile or target role.",
                },
                {
                  q: "Will you ensure my LinkedIn and resume are aligned?",
                  a: "Yes. We don't treat your career in bits and pieces; we ensure they communicate your experience consistently.",
                },
              ].map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-slate-100 dark:border-slate-800 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-850 dark:text-white py-4.5 hover:no-underline text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer">
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

      {/* 10. FINAL CTA (Dark Theme) */}
      <section className="py-24 md:py-32 lg:py-36 bg-[#070714]/95 backdrop-blur-md border-t border-white/5 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-tight leading-[1.1]">
              Your LinkedIn Profile Shouldn't Be Left to Chance
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-bold">
              Optimize your profile. Attract recruiters. Land interviews.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto text-center font-medium">
              With our AI+expert LinkedIn optimization, you'll get noticed by top companies and generate the callbacks you deserve.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <CTAButton
              text="Yes, Optimize My LinkedIn Profile for Recruiters"
              href="/linkedin/analyze"
              variant="blue"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

// SVG Icon Helpers
const KeyIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

export default LinkedinOptimizationPage;
