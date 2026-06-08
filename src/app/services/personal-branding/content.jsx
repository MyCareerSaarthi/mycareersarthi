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
  TrendingUp,
  ShieldCheck,
  Star,
  Quote,
  ArrowLeftRight,
  FileText,
  Users,
  Activity,
  Rocket
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

const PersonalBrandingContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative font-sans">
      
      {/* 1. HERO SECTION (Light Theme) */}
      <section className="relative pt-10 pb-20 md:pb-24 lg:pb-32 bg-white dark:bg-background">
        {/* Soft Background gradient */}
        <div className="absolute top-0 inset-x-0 h-[450px] w-full bg-gradient-to-b from-[#f8f9ff]/50 via-[#fcfcff]/20 to-transparent dark:from-primary/5 -z-10" />

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
                <h1 className="text-3xl md:text-5xl lg:text-[44px] font-black leading-[1.2] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Strong LinkedIn personal branding can increase <span className="text-[#3f3fe2]">interview opportunities by up to 71%</span>
                </h1>

                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-medium space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    That’s because recruiters today are no longer evaluating candidates only through resumes.
                  </p>
                  <p>
                    Before shortlisting candidates, recruiters actively review LinkedIn profiles to assess professional credibility, communication style, visibility, expertise, and industry presence. Which means even highly capable professionals can stay invisible if they are not positioning themselves properly online.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold pt-1 border-t border-slate-100 dark:border-slate-800">
                    This is not about becoming an influencer or posting for vanity metrics. It is about becoming professionally visible, credible, and memorable.
                  </p>
                </div>

                <div className="pt-2">
                  <CTAButton text="Build My Personal Brand" />
                </div>
              </div>

              {/* Right Mockup Console Column */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-[120px_200px_150px_220px] blur-[60px] pointer-events-none -z-10" />
                
                {/* Mockup Container */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[420px]">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#3f3fe2]" />
                      <span>Profile Discovery Rate</span>
                    </div>

                    <div className="flex items-center gap-1 opacity-25">
                      <div className="grid grid-cols-6 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <span key={i} className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6 relative aspect-[3/4] rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#fafaff] dark:bg-slate-950/20 p-3 shadow-inner flex flex-col justify-between overflow-hidden">
                      <div className="space-y-2">
                        {/* Banner */}
                        <div className="h-10 w-full bg-gradient-to-r from-blue-600 to-[#3f3fe2]/85 rounded-t-xl relative">
                          <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-black absolute bottom-[-14px] left-3 shadow-md text-[#3f3fe2]">
                            MCS
                          </div>
                        </div>

                        {/* Name Headline */}
                        <div className="pt-2 px-1 space-y-1">
                          <div className="h-2 w-[70%] bg-slate-300 dark:bg-slate-700 rounded-full" />
                          <div className="h-1.5 w-[90%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          <div className="h-1 w-[40%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                        </div>
                        
                        <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />
                        
                        {/* Featured Post preview */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 p-1.5 rounded-lg space-y-1 relative shadow-sm">
                          <div className="h-1 w-[35%] bg-slate-400 dark:bg-slate-700 rounded-full mb-1" />
                          <div className="h-1 w-[80%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          <div className="h-1 w-[70%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          
                          <div className="flex items-center justify-between text-[6px] font-bold text-green-600 pt-1">
                            <span>Likes: +71%</span>
                            <span>Engagement</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-1 rounded-lg flex items-center justify-between shadow-sm text-[7px] font-black text-[#3f3fe2] uppercase tracking-wider">
                        <span>Profile Credible</span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                      </div>
                    </div>

                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#3f3fe2]/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center text-violet-600">
                            <Award className="w-3 h-3" />
                          </div>
                          <span>Profile Credibility</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600">
                            <TrendingUp className="w-3 h-3" />
                          </div>
                          <span>Strategic Visibility</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-blue-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                            <Search className="w-3.5 h-3.5" />
                          </div>
                          <span>Recruiter Search</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Rocket className="w-4 h-4" />
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

                    <div className="px-3 py-1 rounded-lg bg-green-100/50 dark:bg-green-950/20 text-[10px] font-bold text-green-600">
                      +71% Discovery
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>      {/* 2. SO, WHAT EXACTLY IS PERSONAL BRANDING? (Light Theme) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                So, What Exactly is Personal Branding?
              </h2>

              <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Personal branding is the process of strategically building your professional identity online so recruiters and hiring managers clearly understand:
              </p>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                <p className="text-[#3f3fe2] text-xs uppercase font-extrabold tracking-wider mb-4">
                  Recruiters and hiring managers clearly understand:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "what you do",
                    "what expertise you bring",
                    "what problems you solve",
                    "what makes you professionally credible"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <div className="w-4.5 h-4.5 rounded-full bg-indigo-50 dark:bg-slate-900 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[#3f3fe2]" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-xs md:text-sm font-bold capitalize">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 leading-relaxed space-y-3">
                <p>
                  Today, recruiters often evaluate professionals long before interviews happen. They review LinkedIn profiles, observe professional activity, assess communication style, and look for signals that indicate expertise, confidence, and professional maturity.
                </p>
                <p className="text-slate-800 dark:text-white font-bold">
                  Which means your online presence has now become part of your professional positioning. And professionals who build visibility strategically often create stronger career opportunities.
                </p>
              </div>

              <div className="pt-2">
                <CTAButton text="Help Me Build My Professional Presence" />
              </div>
            </div>

            {/* Right Column illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
              
              <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/illustrations/personal_site.svg"
                  alt="Personal Branding"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MOST PROFESSIONALS STAY INVISIBLE (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
                Most Professionals Stay Invisible Despite Having Strong Experience
              </h2>

              <div className="space-y-4 text-xs md:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                <p>
                  Many professionals spend years building experience but very little time building visibility. They focus on projects, targets, deadlines, and company growth while completely neglecting how they are positioned professionally in the market. And that becomes a serious problem during hiring cycles.
                </p>
                <p className="font-extrabold text-[#3f3fe2]">
                  Because recruiters cannot value expertise they cannot clearly see.
                </p>

                <div className="bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20 rounded-2xl p-5 shadow-inner">
                  <p className="font-bold text-rose-700 dark:text-rose-400 text-xs uppercase tracking-wider mb-2">
                    Why they struggle:
                  </p>
                  <p>
                    Most professionals struggle with inconsistent LinkedIn activity, unclear positioning, weak professional messaging, and low recruiter visibility. Meanwhile, professionals who communicate their expertise more clearly often stand out faster, even when experience levels are similar.
                  </p>
                </div>

                <p className="border-l-4 border-[#3f3fe2] bg-[#f0f2ff] dark:bg-slate-900 rounded-r-xl p-4 text-slate-800 dark:text-slate-200 font-bold">
                  That is the real power of personal branding. It helps recruiters remember you before opportunities even open up.
                </p>
              </div>
            </div>

            {/* Right Column Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] p-6 shadow-sm w-full max-w-[380px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Recruiter Discovery Loop</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-3 shadow-sm flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-xs">Unbranded Profile</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">Generic headline • Basic</p>
                      </div>
                      <span className="text-[8px] font-bold px-2 py-0.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded">Low Discovery</span>
                    </div>

                    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-3 shadow-sm flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-800 dark:text-slate-100 text-xs">Branded Profile</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">Expert updates • Visible</p>
                      </div>
                      <span className="text-[8px] font-bold px-2 py-0.5 bg-green-100/50 dark:bg-green-950/20 text-green-600 rounded">71% Increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton text="Increase My Professional Visibility" />
          </div>
        </div>
      </section>

      {/* 4. LINKEDIN IS NO LONGER JUST A NETWORKING PLATFORM (Light Theme) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center tracking-tight text-slate-900 dark:text-white">
              LinkedIn Is No Longer Just a Networking Platform
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-center max-w-3xl mx-auto font-semibold">
              LinkedIn has become one of the biggest professional discovery platforms for recruiters and hiring managers. Recruiters actively use LinkedIn to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-8">
              <div className="bg-[#fafaff] dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
                <ul className="space-y-3">
                  {[
                    "search candidates",
                    "validate experience",
                    "assess communication",
                    "understand expertise",
                    "evaluate professional credibility"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-xs font-bold text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                      <span className="capitalize">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fafaff] dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-center text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                <p className="mb-4">
                  Your profile, content, activity, engagement, and network all influence recruiter perception.
                </p>
                <p className="text-slate-800 dark:text-white font-extrabold">
                  That is why personal branding for job seekers matters more than ever in today’s hiring market.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <CTAButton text="Make My LinkedIn Profile Stand Out" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PERSONAL BRANDING IS NOT ABOUT BECOMING AN INFLUENCER (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white text-center">
              Personal Branding Is Not About Becoming an Influencer
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
              Most professionals avoid LinkedIn because they believe personal branding means posting motivational content, chasing likes, or becoming a social media influencer. That is not what professional personal branding is about.
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6">
              <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  Real personal branding is about building credibility, positioning expertise, improving visibility, and communicating professional maturity consistently over time.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  At MyCareerSarthi, we help professionals build LinkedIn presences that feel strategic, authentic, recruiter-credible, and professionally aligned without sounding overly promotional.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <CTAButton text="Build My Personal Brand" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUILD YOUR BRAND IN 4 STRUCTURED STEPS (DARK THEMED - PROCESS HIGHLIGHT EXCEPTION) */}
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Build Your Personal Brand in 4 Structured Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[
              {
                num: "01",
                title: "1. Role-Aligned Content Strategy",
                desc: "We first create a clear content strategy aligned with your target roles, expertise, industry, and career goals. This helps define:",
                items: [
                  "what recruiters actually pay attention to",
                  "what type of content supports your positioning",
                  "how to communicate expertise professionally",
                  "how to stay visible without sounding desperate"
                ],
                icon: Target,
                glow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              },
              {
                num: "02",
                title: "2. Content Creation & Professional Write-Ups",
                desc: "Once the strategy is defined, we help you with professionally written LinkedIn content aligned with your domain and career direction. The content focuses on:",
                items: [
                  "expertise-driven communication",
                  "professional storytelling",
                  "leadership positioning",
                  "industry insight-based content",
                  "recruiter-focused visibility"
                ],
                icon: FileText,
                glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              },
              {
                num: "03",
                title: "3. Networking & Managed Outreach",
                desc: "A strong personal brand is not just about posting content. It is also about building the right network. We help connections connected through outreach guidance. This improves:",
                items: [
                  "profile visibility",
                  "recruiter familiarity",
                  "professional opportunities",
                  "inbound conversations"
                ],
                icon: Users,
                glow: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              },
              {
                num: "04",
                title: "4. Recruiter-Credible Online Presence",
                desc: "The final outcome is a LinkedIn presence that supports your career growth strategically. You build:",
                items: [
                  "stronger recruiter visibility",
                  "clearer professional positioning",
                  "a stronger industry network",
                  "professionally aligned content",
                  "improved professional credibility"
                ],
                icon: Award,
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
                    <ul className="space-y-1.5 mb-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-[11px] text-slate-300 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className={`absolute inset-0 rounded-2xl border border-transparent pointer-events-none transition-all duration-300 ${step.glow}`} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <CTAButton text="Build My Personal Brand Strategically" />
          </div>
        </div>
      </section>

      {/* 7. WHY PERSONAL BRANDING MATTERS MORE THAN EVER (DARK THEMED - HIGHLIGHT EXCEPTION) */}
      <section className="py-24 bg-[#070714] text-white relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Why Personal Branding Matters More Than Ever
            </h2>
            <div className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto space-y-4 font-semibold">
              <p>
                Today, professionals are no longer competing only on experience. They are also competing on visibility, positioning, communication, credibility, and online presence.
              </p>
              <p>
                Recruiters often form first impressions through LinkedIn long before interviews happen. Which means professionals who consistently build visibility and credibility often create stronger professional opportunities over time.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-inner max-w-lg mx-auto">
                <p className="text-[#3f3fe2] dark:text-indigo-400 font-extrabold text-sm leading-relaxed">
                  That is why personal branding for job seekers has become an important part of modern career growth.
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <CTAButton text="Strengthen My Professional Positioning" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. WONDERING IF PERSONAL BRANDING RIGHT FOR YOU? (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center">
              Wondering If Personal Branding Services Are Right for You?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our personal branding services are designed for:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Building a strong LinkedIn presence early and creating a recruiter-ready professional identity.",
                icon: GraduationCap,
                color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20"
              },
              {
                title: "Mid-Level Professionals",
                desc: "Preparing for career growth, better opportunities, leadership visibility, or role transitions.",
                icon: Briefcase,
                color: "text-amber-600 bg-amber-50 dark:bg-amber-90/20"
              },
              {
                title: "Senior Professionals",
                desc: "Strengthening industry credibility, professional positioning, and recruiter visibility.",
                icon: Award,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20"
              },
              {
                title: "Job Seekers",
                desc: "Professionals struggling with low visibility despite having relevant experience and skills.",
                icon: Search,
                color: "text-green-600 bg-green-50 dark:bg-green-950/20"
              },
              {
                title: "Consultants & Independent Professionals",
                desc: "Building trust, authority, and a credible professional presence within their industry.",
                icon: Target,
                color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20"
              },
              {
                title: "Preparing for Leadership Roles",
                desc: "Positioning themselves strategically for senior leadership and decision-making opportunities.",
                icon: ShieldCheck,
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
              Whether you want stronger recruiter visibility, better professional positioning, or long-term credibility, our personal branding consultant India services help you build it strategically.
            </p>
            <CTAButton text="Yes, Build My Professional Brand" />
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE MYCAREERSARTHI? (Light Theme, Slate Background) */}
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
                Most personal branding services focus on vanity metrics, influencer-style content, and random posting strategies.
              </p>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                We focus on recruiter credibility, strategic visibility, professional positioning, and career alignment. Our approach combines LinkedIn optimization, content strategy, networking guidance, recruiter-focused positioning, and professional communication to help professionals build personal brands that support real career growth.
              </p>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 font-bold">
                Not just impressions.
              </p>
              <div className="pt-2">
                <CTAButton text="Improve My Recruiter Credibility" />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="relative w-full aspect-[4/3] max-w-[300px] md:max-w-[360px] hover:scale-105 transition-transform duration-500">
                <Image
                  src="/illustrations/destination.svg"
                  alt="Why Choose Us"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS (Light Theme) */}
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
                quote: "“After working with MCS, my LinkedIn presence became much more structured and professionally aligned.”",
                author: "Mid-Level Operations Professional",
                tagColor: "text-purple-600 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/10"
              },
              {
                quote: "“The content strategy helped me communicate my experience more clearly and connect with the right recruiters.”",
                author: "Senior Marketing Professional",
                tagColor: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-100 dark:border-cyan-900/10"
              },
              {
                quote: "“I finally understood how to position myself professionally without sounding promotional.”",
                author: "Product Management Candidate",
                tagColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900/10"
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
            <CTAButton text="Build My Personal Brand" />
          </div>
        </div>
      </section>

      {/* 11. FAQs (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white text-center">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "What is personal branding for job seekers?",
                  a: "Personal branding for job seekers is the process of building a professional online presence that communicates expertise, credibility, and career positioning clearly to recruiters and hiring managers."
                },
                {
                  q: "Is personal branding only for influencers?",
                  a: "No. Professional personal branding is about visibility, credibility, and positioning — not social media popularity."
                },
                {
                  q: "Do I need to post daily on LinkedIn?",
                  a: "No. Consistency and quality matter more than frequency."
                },
                {
                  q: "Can personal branding help me get job opportunities?",
                  a: "Yes. Recruiters often evaluate candidates based on both their profiles and professional activity. A strong personal brand improves visibility and credibility."
                },
                {
                  q: "What does your personal branding service include?",
                  a: "Our service includes LinkedIn positioning, content strategy, content creation support, networking guidance, and recruiter-focused visibility building."
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

export default PersonalBrandingContentPage;
