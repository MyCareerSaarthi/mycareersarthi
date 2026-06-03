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
  <Button size="lg" className="group rounded-full px-8 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 bg-[#3f3fe2] hover:bg-[#3232c7] text-white border-0 cursor-pointer active:scale-95 shadow-[#3f3fe2]/20" asChild>
    <Link href={href}>
      <span className="flex items-center gap-2">
        {text}
        <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  </Button>
);

const PersonalBrandingContentPage = () => {
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
                  Strong LinkedIn personal branding can increase interview opportunities by up to 71%
                </h1>

                {/* Subtitle paragraph layout matching the mockup */}
                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg font-medium space-y-4">
                  {/* <p className="font-semibold text-foreground text-slate-800 dark:text-slate-200">
                    That’s because recruiters today are no longer evaluating candidates only through resumes.
                  </p> */}
                  <p>
                    Before shortlisting candidates, recruiters actively review LinkedIn profiles to assess professional credibility, communication style, visibility, expertise, and industry presence. Which means even highly capable professionals can stay invisible if they are not positioning themselves properly online.
                  </p>
                  {/* <p className="text-foreground/90 font-medium pt-2 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 max-w-2xl mx-auto text-sm">
                    This is not about becoming an influencer or posting for vanity metrics. It is about becoming professionally visible, credible, and memorable.
                  </p> */}
                </div>

                <div className="pt-2">
                  <CTAButton text="Build My Personal Brand" />
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
                      <span>Profile Discovery Rate</span>
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
                    {/* Left: Professional modern LinkedIn profile preview */}
                    <div className="col-span-6 relative aspect-[3/4] rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#fafaff] dark:bg-slate-950/20 p-3 shadow-inner flex flex-col justify-between overflow-hidden">
                      {/* Simulated LinkedIn banner and card */}
                      <div className="space-y-2">
                        {/* Banner */}
                        <div className="h-10 w-full bg-gradient-to-r from-blue-600 to-[#3f3fe2]/80 rounded-t-xl relative">
                          <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-black absolute bottom-[-14px] left-3 shadow-md text-[#3f3fe2]">
                            MCS
                          </div>
                        </div>

                        {/* Name Headline */}
                        <div className="pt-2 px-1 space-y-1">
                          <div className="h-2 w-[70%] bg-slate-400 dark:bg-slate-750 rounded-full" />
                          <div className="h-1.5 w-[90%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          <div className="h-1 w-[40%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                        </div>
                        
                        <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />
                        
                        {/* Featured Post preview */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 p-1.5 rounded-lg space-y-1 relative shadow-sm">
                          <div className="h-1 w-[35%] bg-slate-400 dark:bg-slate-700 rounded-full mb-1" />
                          <div className="h-1 w-[80%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          <div className="h-1 w-[70%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          {/* Likes bar */}
                          <div className="flex items-center justify-between text-[6px] font-bold text-green-600 pt-1">
                            <span>Likes: +71%</span>
                            <span>Engagement</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Credibility Indicator */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-1 rounded-lg flex items-center justify-between shadow-sm text-[7px] font-black text-[#3f3fe2] uppercase tracking-wider">
                        <span>Profile Credible</span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                      </div>
                    </div>

                    {/* Right: Feedback parameters grid */}
                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      {/* Parameter 1: Profile Credibility */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-[#3f3fe2]/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center text-violet-600">
                            <Award className="w-3 h-3" />
                          </div>
                          <span>Profile Credibility</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: "85%" }} />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 2: Strategic Visibility */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-green-500/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600">
                            <TrendingUp className="w-3 h-3" />
                          </div>
                          <span>Strategic Visibility</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[50%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 3: Recruiter Search */}
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-blue-500/10">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                            <Search className="w-3.5 h-3.5" />
                          </div>
                          <span>Recruiter Search</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }} />
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
                      <Rocket className="w-4 h-4" />
                    </div>
                    
                    {/* Visual simulated spectrum bars indicating active parsing */}
                    <div className="flex-1 flex items-end gap-0.75 h-6 px-2 justify-center">
                      {[...Array(24)].map((_, i) => {
                        const heights = ["20%", "40%", "60%", "75%", "90%", "70%", "50%", "30%", "20%", "45%", "65%", "85%", "70%", "50%", "30%", "45%", "65%", "85%", "95%", "75%", "55%", "35%", "20%", "40%"];
                        return (
                          <span 
                            key={i} 
                            className="w-0.75 bg-[#3f3fe2] dark:bg-primary/95 rounded-full" 
                            style={{ height: heights[i] }} 
                          />
                        );
                      })}
                    </div>

                    <div className="px-3 py-1 rounded-lg bg-green-50 dark:bg-green-950/20 text-[10px] font-bold text-green-600">
                      +71% Discovery
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS PERSONAL BRANDING? */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h2 className="text-2xl md:text-3xl font-extrabold mb-5 text-center tracking-tight">
                So, What Exactly is Personal Branding?
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto font-medium">
                Personal branding is the process of strategically building your professional identity online so recruiters and hiring managers clearly understand what makes you professionally credible.
              </p>

              {/* Structured Two-Column Content Layout */}
              <div className="grid md:grid-cols-12 gap-8 items-stretch mb-8">
                {/* Left Column: Context Card */}
                <div className="md:col-span-7 bg-background border border-border/80 rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                  <p className="font-semibold text-foreground text-xs md:text-sm lg:text-base leading-relaxed mb-3">
                    Today, recruiters often evaluate professionals long before interviews happen. They review LinkedIn profiles, observe professional activity, assess communication style, and look for signals that indicate expertise, confidence, and professional maturity.
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm font-semibold">
                    Which means your online presence has now become part of your professional positioning. And professionals who build visibility strategically often create stronger career opportunities.
                  </p>
                </div>

                {/* Right Column: priorities card */}
                <div className="md:col-span-5 bg-background border border-border/80 rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                  <p className="text-primary text-[10px] uppercase font-extrabold tracking-wider mb-3">
                    Hiring managers seek to clearly understand:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "what you do",
                      "what expertise you bring",
                      "what problems you solve",
                      "what makes you professionally credible"
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
                <CTAButton text="Help Me Build My Professional Presence" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOST PROFESSIONALS STAY INVISIBLE */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side text column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                Most Professionals Stay Invisible Despite Having Strong Experience
              </h2>
              
              <div className="space-y-4.5 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                <p>
                  Many professionals spend years building experience but very little time building visibility. They focus on projects, targets, deadlines, and company growth while completely neglecting how they are positioned professionally in the market.
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  Because recruiters cannot value expertise they cannot clearly see.
                </p>

                {/* The issues list */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4.5 mt-3 shadow-inner">
                  <p className="font-bold text-foreground text-[10px] uppercase tracking-wider mb-2">
                    Most professionals struggle with:
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {[
                      "Inconsistent LinkedIn activity",
                      "Unclear domain positioning",
                      "Weak professional outreach messaging",
                      "Low search discovery rates"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-destructive shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold bg-primary/5 border border-primary/20 rounded-xl p-3.5 text-xs">
                  The real power of personal branding: It helps recruiters remember you before opportunities even open up.
                </p>
              </div>
            </div>

            {/* Right side Dashboard map */}
            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-3xl p-5 md:p-6 shadow-sm">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-1.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">Recruiter Discovery Rate</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                  </div>

                  <div className="space-y-3 text-[10px] md:text-xs">
                    {/* Passive */}
                    <div className="bg-background border border-border rounded-xl p-3 shadow-sm flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-foreground mb-0.5">Passive Profile (Invisible)</p>
                        <p className="text-[9px] text-muted-foreground">Resume only • Outdated LinkedIn</p>
                      </div>
                      <span className="text-[8px] font-bold px-2 py-0.5 bg-amber-100 text-amber-700 rounded-md">Low Discovery</span>
                    </div>

                    {/* Branded */}
                    <div className="bg-background border border-primary/20 rounded-xl p-3 shadow-sm flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-foreground mb-0.5">Branded Profile (Credible)</p>
                        <p className="text-[9px] text-muted-foreground">Domain articles • Recruiter-focused summary</p>
                      </div>
                      <span className="text-[8px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-md">71% Increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LINKEDIN IS NO LONGER JUST A NETWORKING PLATFORM */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
              LinkedIn Is No Longer Just a Networking Platform
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              LinkedIn has become one of the biggest professional discovery platforms for recruiters and hiring managers.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6">
              {/* Left Column */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm">
                <p className="font-extrabold text-sm mb-3.5 text-foreground flex items-center gap-2">
                  Recruiters actively use LinkedIn to:
                </p>

                <ul className="space-y-2">
                  {[
                    "search candidates",
                    "validate experience",
                    "assess communication",
                    "understand expertise",
                    "evaluate professional credibility"
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

              {/* Right Column */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-3">
                  Your profile, content, activity, engagement, and network all influence recruiter perception.
                </p>
                <h3 className="text-xs md:text-sm font-extrabold text-foreground leading-snug">
                  That is why personal branding for job seekers matters more than ever in today’s hiring market.
                </h3>
              </div>
            </div>

            <div className="border-t border-border/40 pt-5">
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 shadow-inner">
                <p className="text-foreground font-bold leading-relaxed text-sm">
                  Active positioning on professional networks translates directly to inbound recruiter attraction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOT ABOUT BECOMING AN INFLUENCER */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
              Personal Branding Is Not About Becoming an Influencer
            </h2>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6">
              {/* Left Column */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm">
                <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-3">
                  Most professionals avoid LinkedIn because they believe personal branding means posting motivational content, chasing likes, or becoming a social media influencer.
                </p>
                <h3 className="text-xs md:text-sm font-extrabold text-foreground leading-snug">
                  Real personal branding is about building credibility, positioning expertise, improving visibility, and communicating professional maturity.
                </h3>
              </div>

              {/* Right Column */}
              <div className="bg-background border border-border/80 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-center">
                <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-3">
                  At MyCareerSarthi, we help professionals build LinkedIn presences that feel strategic, authentic, recruiter-credible, and professionally aligned without sounding overly promotional.
                </p>
              </div>
            </div>

            <div className="border-t border-border/40 pt-5">
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 shadow-inner">
                <p className="text-foreground font-bold leading-relaxed text-sm">
                  We build high-substance online footprints designed for recruiters, not superficial metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUILD YOUR BRAND IN 4 STRUCTURED STEPS (2-COLUMN STEP MATRIX REDESIGN) */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight">
              Build Your Personal Brand in 4 Structured Steps
            </h2>
          </div>

          {/* Clean 2-column matrix step grid layout */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              {
                num: "01",
                title: "1. Role-Aligned Content Strategy",
                desc: "We first create a clear content strategy aligned with your target roles, expertise, industry, and career goals.",
                subText: "This helps define:",
                items: [
                  "what recruiters actually pay attention to",
                  "what type of content supports your positioning",
                  "how to communicate expertise professionally",
                  "how to stay visible without sounding desperate"
                ],
                icon: Target,
              },
              {
                num: "02",
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
                icon: FileText,
              },
              {
                num: "03",
                title: "3. Networking & Managed Outreach",
                desc: "A strong personal brand is not just about posting content. It is also about building the right network. We help you connect through networking guidance.",
                subText: "This improves:",
                items: [
                  "profile visibility",
                  "recruiter familiarity",
                  "professional opportunities",
                  "inbound conversations"
                ],
                icon: Users,
              },
              {
                num: "04",
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
                icon: Award,
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
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Personal Brand Strategically" />
          </div>
        </div>
      </section>

      {/* 7. WHY PERSONAL BRANDING MATTERS MORE THAN EVER */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
              Why Personal Branding Matters More Than Ever
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Today, professionals are no longer competing only on experience. They are also competing on visibility, positioning, communication, credibility, and online presence.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="space-y-6 text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-semibold">
              <p>
                Recruiters often form first impressions through LinkedIn long before interviews happen. Which means professionals who consistently build visibility and credibility often create stronger professional opportunities over time.
              </p>
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 shadow-inner">
                <p className="text-foreground font-bold leading-relaxed text-sm">
                  That is why personal branding for job seekers has become an important part of modern career growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WONDERING IF PERSONAL BRANDING RIGHT FOR YOU */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">
              Wondering If Personal Branding Services Are Right for You?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-semibold max-w-2xl mx-auto">
              Our personal branding services are designed for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Building a strong LinkedIn presence early and creating a recruiter-ready professional identity.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level",
                desc: "Preparing for career growth, better opportunities, leadership visibility, or transitions.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Leaders",
                desc: "Strengthening industry credibility, professional positioning, and recruiter visibility.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Job Seekers",
                desc: "Professionals struggling with low visibility despite having strong domains and experience.",
                icon: Search,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Consultants",
                desc: "Building trust, authority, and a highly credible professional presence within their industry.",
                icon: Target,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
              {
                title: "Future Executives",
                desc: "Positioning themselves strategically for senior leadership and decision-making roles.",
                icon: ShieldCheck,
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
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto font-semibold">
              Whether you want stronger recruiter visibility, better professional positioning, or long-term credibility, our personal branding consultant India services help you build it strategically.
            </p>
            <CTAButton text="Yes, Build My Personal Brand" />
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
              Most personal branding services focus on vanity metrics, influencer-style content, and random posting. We focus on:
            </p>
          </div>

          {/* 2x2 Feature Pillars Grid surrounding the central value block */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Recruiter Credibility",
                desc: "Drafting optimized LinkedIn structures, hooks, and summaries that earn professional trust.",
                icon: TrendingUp,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Strategic Visibility",
                desc: "Creating target outreach patterns, network parameters, and domain-related keyword positioning.",
                icon: Activity,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Professional Positioning",
                desc: "Converting your past projects and hard skills into authoritative articles, case studies, and updates.",
                icon: Target,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Career Alignment",
                desc: "Coordinating your content schedule to align specifically with targeted leadership vectors and hiring metrics.",
                icon: ShieldCheck,
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
              Our Resume Optimization Services combine: <span className="text-primary font-extrabold">LinkedIn optimization, content strategy, content creation support, networking guidance, and recruiter-focused visibility building</span> to help professionals build personal brands that support real career growth. Not just impressions.
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL STORIES */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
              Real Stories from Professionals Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
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
            <CTAButton text="Build My Personal Brand" />
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

export default PersonalBrandingContentPage;
