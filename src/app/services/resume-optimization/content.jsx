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
  FileText,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({
  text,
  href = "/contact-us",
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

const ResumeOptimizationContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative font-sans">
      
      {/* 1. HERO SECTION (Light Theme) */}
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
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.15] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Build a recruiter-ready resume to unlock 10X more opportunities
                </h1>

                <div className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg font-medium space-y-4">
                  <p>
                    Recruiters spend less than 10 seconds scanning most resumes.
                    And before your resume even reaches a recruiter, ATS systems
                    often filter it first.
                  </p>
                  <p className="font-semibold text-slate-850 dark:text-slate-200 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-sm">
                    At MyCareerSarthi, our Resume Optimization Services help
                    professionals build ATS-friendly, recruiter-ready, and
                    role-aligned resumes designed to improve visibility,
                    increase shortlisting chances, and generate better interview
                    opportunities.
                  </p>
                </div>

                <div className="pt-2">
                  <CTAButton text="Yes, I want a recruiter-ready resume makeover" href="/contact-us" variant="blue" />
                </div>
              </div>

              {/* Right Mockup Console Column */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-[120px_200px_150px_220px] blur-[60px] pointer-events-none -z-10" />
                
                {/* Rounded mockup console container */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[500px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#3f3fe2]" />
                      <span>ATS Match Evaluator</span>
                    </div>

                    <div className="flex items-center gap-1 opacity-25">
                      <div className="grid grid-cols-6 gap-1">
                        {[...Array(12)].map((_, i) => (
                          <span key={i} className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-6 relative aspect-[3/4] rounded-2xl border border-slate-100 dark:border-slate-800 bg-[#fafaff] dark:bg-slate-950/20 p-3.5 shadow-inner flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#3f3fe2]/10 border border-[#3f3fe2]/20 flex items-center justify-center text-[10px] font-bold text-[#3f3fe2]">
                            JD
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="h-1.5 w-[70%] bg-slate-300 dark:bg-slate-700 rounded-full" />
                            <div className="h-1 w-[40%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          </div>
                        </div>
                        <div className="border-t border-slate-200/60 dark:border-slate-800/40 my-1" />
                        
                        <div className="space-y-1">
                          <div className="h-1 w-[30%] bg-slate-400 dark:bg-slate-700 rounded-full mb-1" />
                          <div className="h-1 w-[90%] bg-slate-250 dark:bg-slate-800 rounded-full" />
                          <div className="h-1 w-[80%] bg-slate-250 dark:bg-slate-800 rounded-full" />
                        </div>

                        <div className="space-y-1.5 pt-1">
                          <div className="h-1.5 w-[50%] bg-slate-400 dark:bg-slate-700 rounded-full mb-1.5" />
                          <div className="border border-green-500/20 bg-green-500/5 rounded p-1 space-y-1">
                            <div className="h-1 w-[85%] bg-slate-300 dark:bg-slate-700 rounded-full" />
                            <div className="h-1 w-[70%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          </div>
                          <div className="border border-purple-500/20 bg-purple-500/5 rounded p-1 space-y-1">
                            <div className="h-1 w-[80%] bg-slate-300 dark:bg-slate-700 rounded-full" />
                            <div className="h-1 w-[60%] bg-slate-200 dark:bg-slate-800 rounded-full" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-1.5 rounded-lg flex items-center justify-between shadow-sm text-[8px] font-black text-[#3f3fe2] uppercase tracking-wider">
                        <span>Parser Audit Passed</span>
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                      </div>
                    </div>

                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#3f3fe2]/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center text-purple-600">
                            <Target className="w-3 h-3" />
                          </div>
                          <span>ATS Score Match</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: "94%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Keyword Alignment</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "88%" }} />
                        </div>
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950/40 border border-slate-50 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-blue-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                            <Award className="w-3.5 h-3.5" />
                          </div>
                          <span>Recruiter Impact</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wave Visualizer at Bottom */}
                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <FileText className="w-4 h-4" />
                    </div>
                    
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

                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      94% Score
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS RESUME OPTIMIZATION? (Light Theme) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#3f3fe2]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                Definition
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                So, What Exactly is Resume Optimization?
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Resume optimization is the process of strategically improving your resume so recruiters and ATS systems can quickly understand your experience, skills, impact, and role relevance.
              </p>

              <div className="bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3 font-semibold">
                <p className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Today, resumes are not just read by recruiters. They are first scanned by Applicant Tracking Systems (ATS) that evaluate resumes based on keywords, structure, formatting, and job relevance before they even reach human recruiters.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
                  Which means even highly experienced professionals can get filtered out if their resumes are not properly optimized.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[#3f3fe2] dark:text-indigo-400 text-[10.5px] uppercase font-extrabold tracking-wider">
                  Our professional resume writing service focuses on:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pl-0.5">
                  {[
                    "ATS Optimization",
                    "Recruiter Readability",
                    "Interview Callback Shortlisting",
                    "Strategic Keyword Mapping"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <CTAButton text="Optimize My Resume Strategically" href="/contact-us" variant="blue" />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3f3fe2]/8 dark:bg-[#3f3fe2]/4 rounded-full blur-3xl pointer-events-none -z-10" />

              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.02)]"
              >
                <Image
                  src="/illustrations/resume.svg"
                  alt="Resume Optimization illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MINDSET SHIFT SECTION (Dark Theme) */}
      <section className="relative w-full bg-slate-900 text-gray-100 py-16 md:py-24 overflow-hidden selection:bg-indigo-500/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
            {/* Left Content Column */}
            <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
                Most Resumes Don’t Fail
                <br />
                Because of Lack of Experience.
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-[#3f3fe2] bg-clip-text text-transparent">
                  They fail to communicate value.
                </span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Most professionals write resumes like internal company documents. They list responsibilities, tools, daily tasks, and generic descriptions, assuming recruiters will automatically understand their contribution.
              </p>

              <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 text-left w-full shadow-sm">
                <p className="font-bold text-indigo-400 mb-3 text-xs uppercase tracking-wider">
                  But recruiters are not looking for task lists. They are trying to quickly understand:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 pl-0.5">
                  {[
                    "what impact you created",
                    "what ownership you handled",
                    "how work contributed to outcomes",
                    "whether experience matches the role"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-xs font-bold text-slate-300" style={{ textTransform: "none" }}>
                      <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-slate-200 rounded-xl p-4.5 text-xs text-left w-full shadow-inner font-semibold">
                A strong resume does not just explain what you did. It positions your professional value strategically.
              </div>
            </div>

            {/* Right Column (Visual Dashboard) */}
            <div className="w-full lg:w-[42%] z-10 flex justify-center">
              <div className="w-full max-w-[440px] bg-slate-950/40 border border-white/5 rounded-[28px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-violet-500 to-indigo-500 rounded-[28px] opacity-10 blur-xl group-hover:opacity-15 transition-opacity" />
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      Impact Communication Diagnostic
                    </span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="bg-slate-900/60 border border-rose-500/15 rounded-xl p-3.5 shadow-sm">
                      <p className="text-[9px] text-rose-400 uppercase font-bold mb-1">Standard Task List</p>
                      <p className="text-xs italic line-through text-slate-400 mb-1.5">“Handled operations and team.”</p>
                      <span className="text-rose-400 font-extrabold block">Low Recruiter Engagement</span>
                    </div>

                    <div className="bg-slate-900/90 border border-green-500/20 rounded-xl p-4 shadow-sm hover:border-green-500/40 transition-all">
                      <p className="text-[9px] text-green-400 uppercase font-bold mb-1">Quantifiable Impact (MCS Rewritten)</p>
                      <p className="text-xs font-bold text-slate-100 mb-1.5">“Led a 12-member engineering unit; reduced turnaround time by 32% while driving delivery schedules ahead of deadlines by 18%.”</p>
                      <span className="text-green-400 font-extrabold block">Excellent Recruiter Engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ATS SYSTEMS SECTION (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              ATS Realities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
              ATS Systems Reject Thousands of Resumes Every Day
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 font-semibold">
              Most companies today use ATS software to filter resumes before recruiters review them manually.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm mb-12">
            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-6.5">
              
              {/* Left Side */}
              <div className="flex flex-col justify-center bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl p-5 md:p-6 shadow-sm">
                <p className="font-extrabold text-sm mb-3.5 text-slate-850 dark:text-white flex items-center gap-2">
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
                      <div className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-2.5 h-2.5 text-blue-500 shrink-0" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 font-bold text-[10px] md:text-xs capitalize leading-none">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side */}
              <div className="flex flex-col justify-center bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-2xl p-5 md:p-6 shadow-sm">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-3">
                  So if your resume lacks important keywords, is poorly structured, is difficult to scan, or is not aligned to the target role… it may never even reach the recruiter.
                </p>
                <h3 className="text-xs md:text-sm font-extrabold text-slate-800 dark:text-white leading-snug">
                  That is why ATS optimization has become one of the most important parts of modern resume writing.
                </h3>
              </div>
            </div>

            <div className="border-t border-slate-200/50 dark:border-slate-800/40 pt-5">
              <div className="bg-[#3f3fe2]/5 rounded-2xl p-4 md:p-5 border border-[#3f3fe2]/10 shadow-inner">
                <p className="text-slate-800 dark:text-slate-200 font-semibold leading-relaxed text-sm md:text-base">
                  Our Resume Optimization Services combine AI-powered ATS analysis with recruiter-focused optimization to help your resume perform better with both: ATS systems and human recruiters.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Get ATS Resume Analysis" href="/contact-us" variant="blue" />
          </div>
        </div>
      </section>

      {/* 5. ONE RESUME DOESN'T FIT EVERY JOB (Light Theme) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                Alignment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                One Resume Doesn’t Fit Every Job
              </h2>
              
              <div className="space-y-4.5 text-xs md:text-sm lg:text-base text-slate-655 dark:text-slate-350 leading-relaxed font-semibold">
                <p>
                  One of the biggest mistakes professionals make is using the same resume for every application. Different roles prioritize different skills, keywords, achievements, and experience.
                </p>
                
                <p className="text-slate-805 dark:text-slate-100">
                  A PM resume cannot be positioned the same way as a Marketing, Operations, Leadership, or Technical resume.
                </p>

                <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-4.5 shadow-sm">
                  <p className="font-bold text-[#3f3fe2] dark:text-indigo-400 mb-2.5 text-xs uppercase tracking-wider">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3f3fe2] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-slate-800 dark:text-slate-200">
                  Because stronger alignment improves recruiter relevance, ATS matching, and interview conversion.
                </p>
              </div>
            </div>

            {/* Right Column Map Dashboard */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] p-6 shadow-sm">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-3 mb-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Target Role Optimization Map</span>
                    <span className="text-[10px] font-bold text-[#3f3fe2] flex items-center gap-1">
                      Role Specific
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-3">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Generalist Resume</p>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-1.5">
                        <div className="h-full bg-amber-500" style={{ width: "45%" }} />
                      </div>
                      <span className="text-amber-500 font-extrabold text-[10px] block mt-1.5">45% ATS Matching</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 border border-[#3f3fe2]/10 rounded-xl p-3">
                      <p className="text-[10px] text-[#3f3fe2] uppercase font-bold mb-1">Target Optimized Resume</p>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-1.5">
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

      {/* 6. PROCESS STEPS SECTION (Dark Theme) */}
      <section className="py-24 bg-[#070714] text-white relative border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20 shadow-sm">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
              Get a Recruiter-Ready Resume in 3 Structured Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                icon: LineChart,
                glow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
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
                glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
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
                glow: "group-hover:border-green-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-350 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                    <span className="text-xl font-black text-indigo-400/40">{step.num}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 transition-colors">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm md:text-base font-extrabold text-white leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-405 leading-relaxed font-semibold mb-4">
                    {step.desc}
                  </p>

                  <p className="text-[9px] uppercase font-bold tracking-widest text-indigo-400 mb-2">
                    {step.subText}
                  </p>
                  <ul className="space-y-1.5">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start text-[10px] text-slate-350 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-550 shrink-0 mt-0.5" />
                        <span className="capitalize">{item}</span>
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
            <CTAButton text="Build My Recruiter-Ready Resume" href="/contact-us" variant="purple" />
          </div>
        </div>
      </section>

      {/* 7. WHY RESUME OPTIMIZATION MATTERS MORE THAN EVER (Light Theme) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[80px] pointer-events-none -z-10" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                Insights
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Why Resume Optimization Matters More Than Ever
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Recruiters today review hundreds of resumes for a single role. They do not read resumes in detail initially. They scan. If your resume cannot communicate value within seconds, they simply move on to the next application.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="font-extrabold text-sm text-slate-850 dark:text-white flex items-center gap-2">
                    Recruiters quickly look for:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "role relevance",
                      "quantified impact",
                      "industry keywords",
                      "measurable outcomes",
                      "technical alignment"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400 font-bold text-xs capitalize leading-none">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-extrabold text-sm text-slate-850 dark:text-white">
                    Directly impacts your:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "recruiter visibility",
                      "ATS scanner score",
                      "shortlisting chances",
                      "interview opportunities"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3f3fe2] shrink-0" />
                        <span className="text-slate-605 dark:text-slate-400 font-bold text-xs capitalize leading-none">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-150 dark:border-slate-800 shadow-inner">
                <p className="text-slate-800 dark:text-slate-200 font-bold leading-relaxed text-sm">
                  And that is exactly why a professionally optimized, role-aligned resume matters more than ever in today’s highly competitive hiring market.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.02)]"
              >
                <Image
                  src="/illustrations/analysis.svg"
                  alt="Why Resume Optimization Matters"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WONDERING IF RIGHT FOR YOU (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Target Audience
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2">
              Wondering If Resume Optimization Services Are Right for You?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our professional resume writing service is designed for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Building their first recruiter-ready resume.",
                icon: GraduationCap,
                color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Preparing for better opportunities, growth, or transitions.",
                icon: Briefcase,
                color: "text-amber-600 bg-amber-50 dark:bg-amber-955/20",
              },
              {
                title: "Senior Professionals",
                desc: "Strengthening leadership positioning and strategic visibility.",
                icon: Award,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20",
              },
              {
                title: "Executives & CXOs",
                desc: "Seeking executive resume writing service for senior leadership roles.",
                icon: ShieldCheck,
                color: "text-green-600 bg-green-50 dark:bg-green-955/20",
              },
              {
                title: "Active Job Seekers",
                desc: "Struggling with low callbacks despite relevant experience.",
                icon: Search,
                color: "text-rose-600 bg-rose-50 dark:bg-rose-950/20",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fafaff] dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs md:text-sm font-extrabold mb-1.5 text-slate-800 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <CTAButton text="Yes, Optimize My Resume" href="/contact-us" variant="blue" />
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE MYCAREERSARTHI (Light Theme) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2">
              Why Choose MyCareerSarthi?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-semibold">
              Most resume writing services focus only on formatting resumes. We focus on:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                title: "ATS Optimization",
                desc: "Optimizing structure, formats, keywords, and fields to satisfy the scanner rules.",
                icon: Zap,
                color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20",
              },
              {
                title: "Recruiter Psychology",
                desc: "Strategic narrative structures designed to convince recruiters within the initial 10-second scan.",
                icon: Brain,
                color: "text-amber-600 bg-amber-50 dark:bg-amber-955/20",
              },
              {
                title: "Role Positioning",
                desc: "Quantifying your specific projects, outcomes, achievements, and leadership contributions.",
                icon: Target,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20",
              },
              {
                title: "Interview Alignment",
                desc: "Structuring the resume summary, content, and sections to seamlessly lead into actual interviews.",
                icon: Award,
                color: "text-green-600 bg-green-50 dark:bg-green-955/20",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-5.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm md:text-base font-extrabold mb-2 text-slate-800 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#3f3fe2]/5 rounded-2xl p-5 border border-[#3f3fe2]/15 shadow-inner text-center font-bold text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              Our Resume Optimization Services combine: <span className="text-[#3f3fe2] dark:text-indigo-400 font-black">AI-powered ATS analysis, recruiter-aware positioning, strategic rewriting, and role-specific optimization</span> to help professionals build resumes designed not just to look good…… but to perform better in real hiring environments.
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              Success Stories
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0f172a] dark:text-white mt-4">
              Real Stories from Professionals Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
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
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-605 dark:text-slate-300 italic leading-relaxed font-semibold">
                    {testimonial.text}
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
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Recruiter-Ready Resume" href="/contact-us" variant="blue" />
          </div>
        </div>
      </section>

      {/* 11. FAQs (Light Theme) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-2">
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
                  className="border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
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

      {/* 12. FINAL CTA (Dark Theme) */}
      <section className="py-24 md:py-32 lg:py-36 bg-[#070714]/95 backdrop-blur-md border-t border-white/5 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-tight leading-[1.1]">
              Your Resume Shouldn't Be Left to Chance
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-bold">
              Build it for ATS. Optimize it for recruiters. Get the interviews you deserve.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto text-center font-medium">
              With our expert resume optimization services, you'll walk into your job search with a powerful professional document that gets you noticed.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <CTAButton
              text="Build My Recruiter-Ready Resume"
              href="/contact-us"
              variant="blue"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ResumeOptimizationContentPage;
