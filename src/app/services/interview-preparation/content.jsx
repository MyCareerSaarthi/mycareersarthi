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
  Shield,
  Mic,
  ArrowUpRight,
  Check,
  PlayCircle,
  BookOpen,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({ text, href = "/pricing", primary = true }) => (
  <Button
    size="lg"
    className={`group rounded-full px-8 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border-0 cursor-pointer active:scale-95 ${
      primary
        ? "bg-[#3f3fe2] hover:bg-[#3232c7] text-white shadow-[#3f3fe2]/20"
        : "bg-white hover:bg-slate-50 text-[#3f3fe2] shadow-slate-200/50 border border-slate-200"
    }`}
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

const InterviewPreparationContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* 1. HERO SECTION */}
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.03em] text-[#0f172a] dark:text-white">
                  Crack Your Next Interview with Our{" "}
                  <span className="text-[#3f3fe2]">InterviewSarthi</span>
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
                  Your complete interview success system—from preparation to
                  final selection. Expert guidance, AI-powered practice, and
                  realistic mock interviews to help you perform with confidence.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <CTAButton
                    text="Start Interview Preparation"
                    href="https://interview.mycareersarthi.com"
                  />
                </div>
              </div>

              {/* Right Mockup Console Column */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
                {/* Soft glow purple droplet in the background */}
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-[120px_200px_150px_220px] blur-[60px] pointer-events-none -z-10" />

                {/* Rounded mockup console container */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[500px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500">
                  {/* Top Bar of the console */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    {/* Left: Star Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-955 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#3f3fe2]" />
                      <span>InterviewSarthi AI Active</span>
                    </div>

                    {/* Right: Tiny dot grid */}
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
                    {/* Left: Professional candidate video feed */}
                    <div className="col-span-6 relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.02)] bg-slate-50">
                      <Image
                        src="/services/candidate_portrait.png"
                        alt="Candidate Portrait"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider">
                        Live Session
                      </div>
                    </div>

                    {/* Right: Feedback parameters grid */}
                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      {/* Parameter 1: Structured Answers */}
                      <div className="bg-[#fafaff] dark:bg-slate-955 border border-slate-55 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#3f3fe2]/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center text-violet-600">
                            <MessageSquare className="w-3 h-3" />
                          </div>
                          <span>Structured Answers</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div
                            className="h-full bg-purple-600 rounded-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[80%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[55%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 2: Clarity & Confidence */}
                      <div className="bg-[#fafaff] dark:bg-slate-955 border border-slate-55 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span>Clarity & Confidence</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[85%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[45%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>

                      {/* Parameter 3: Expert Feedback */}
                      <div className="bg-[#fafaff] dark:bg-slate-955 border border-slate-55 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-blue-500/10 transition-all">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-800 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600">
                            <Award className="w-3.5 h-3.5" />
                          </div>
                          <span>Expert Feedback</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-0.5">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: "80%" }}
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-1 opacity-25">
                          <div className="h-1 w-[70%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                          <div className="h-1 w-[60%] bg-slate-400 dark:bg-slate-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Active speech voice console waveform */}
                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Mic className="w-4 h-4" />
                    </div>

                    {/* Visual simulated spectrum bars */}
                    <div className="flex-1 flex items-end gap-0.75 h-6 px-2 justify-center">
                      {[...Array(24)].map((_, i) => {
                        const heights = [
                          "30%",
                          "45%",
                          "65%",
                          "35%",
                          "85%",
                          "55%",
                          "70%",
                          "45%",
                          "90%",
                          "75%",
                          "35%",
                          "60%",
                          "75%",
                          "45%",
                          "85%",
                          "70%",
                          "35%",
                          "55%",
                          "75%",
                          "45%",
                          "90%",
                          "55%",
                          "40%",
                          "30%",
                        ];
                        return (
                          <span
                            key={i}
                            className="w-0.75 bg-[#3f3fe2] dark:bg-[#3f3fe2]/90 rounded-full"
                            style={{ height: heights[i] }}
                          />
                        );
                      })}
                    </div>

                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      Live Analysis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE PROBLEM (PAIN POINTS & PATHS) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-955/40 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              “I Know the Answer… But I Couldn’t Explain It Properly.”
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              You walk into interviews with good experience and solid technical
              knowledge. But during the interview, the pressure changes the
              dynamics.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Side: Pain list folder card */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm relative overflow-hidden flex flex-col">
              {/* Folder tab layout accent */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-rose-50/50 dark:bg-rose-955/10 border-b border-slate-100 dark:border-slate-800 flex items-center px-6">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="w-3 h-3 bg-amber-400 rounded-full" />
                  <span className="w-3 h-3 bg-slate-200 rounded-full" />
                </div>
                <span className="text-[10px] font-black uppercase text-red-500 tracking-wider ml-4">
                  Struggle Log
                </span>
              </div>

              <div className="pt-16 pb-8 px-6 md:px-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6">
                    What happens during the interview?
                  </h3>

                  <ul className="space-y-4">
                    {[
                      {
                        text: "your answers become scattered",
                        tip: "Losing focus and rambling without structure",
                      },
                      {
                        text: "your achievements sound vague",
                        tip: "Failing to quantify metrics and impact",
                      },
                      {
                        text: "your confidence drops",
                        tip: "Succumbing to high-stress situations",
                      },
                      {
                        text: "your examples lose impact",
                        tip: "Telling flat stories without clear leadership signals",
                      },
                      {
                        text: "your communication becomes unclear",
                        tip: "Struggling to make complex ideas simple",
                      },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-4 items-start bg-rose-50/30 dark:bg-rose-955/5 border border-rose-100/50 dark:border-rose-900/10 p-3.5 rounded-2xl"
                      >
                        <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                          !
                        </div>
                        <div>
                          <p className="text-red-600 dark:text-red-400 font-bold text-sm md:text-base capitalize">
                            {item.text}
                          </p>
                          <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-0.5">
                            {item.tip}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold italic">
                    Meanwhile, another candidate with lesser experience but
                    stronger communication clears the interview.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Dual-Path Flow Diagram */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                  Experience a Real Interview Before the Actual Interview
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  Stop leaving your results to chance. Choose your strategic
                  path to success.
                </p>

                {/* Node diagram container */}
                <div className="mt-8 relative space-y-6">
                  {/* Path cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Path 1 */}
                    <div className="bg-[#fafaff] dark:bg-slate-955 border border-[#3f3fe2]/15 p-5 rounded-2xl relative shadow-sm hover:border-[#3f3fe2]/30 transition-all">
                      <div className="absolute -top-3 left-4 bg-[#3f3fe2] text-white text-[9px] font-black px-2.5 py-0.75 rounded-full uppercase tracking-wider">
                        Path One
                      </div>
                      <h4 className="font-extrabold text-slate-955 dark:text-white text-sm mb-1 mt-1">
                        AI Practice Engine
                      </h4>
                      <p className="text-[11px] text-[#3f3fe2] font-black uppercase tracking-wider mb-2">
                        2 Free Practice Interviews
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-normal">
                        Unlimited tailored evaluation with recruiter-trained AI
                        parameters.
                      </p>
                    </div>

                    {/* Path 2 */}
                    <div className="bg-[#fafaff] dark:bg-slate-955 border border-emerald-500/15 p-5 rounded-2xl relative shadow-sm hover:border-emerald-500/30 transition-all">
                      <div className="absolute -top-3 left-4 bg-emerald-500 text-white text-[9px] font-black px-2.5 py-0.75 rounded-full uppercase tracking-wider">
                        Path Two
                      </div>
                      <h4 className="font-extrabold text-slate-955 dark:text-white text-sm mb-1 mt-1">
                        Expert Simulation
                      </h4>
                      <p className="text-[11px] text-emerald-600 font-black uppercase tracking-wider mb-2">
                        1 Free Mock Interview
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-normal">
                        1-on-1 review session with an experienced industry
                        hiring manager.
                      </p>
                    </div>
                  </div>

                  {/* Flow Paths SVG Connection Graphic */}
                  <div className="hidden sm:block py-2">
                    <svg
                      className="w-full h-12"
                      fill="none"
                      viewBox="0 0 400 48"
                    >
                      <path
                        d="M100 0 C 100 24, 200 24, 200 48"
                        stroke="#3f3fe2"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M300 0 C 300 24, 200 24, 200 48"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <circle cx="200" cy="46" r="3.5" fill="#3f3fe2" />
                    </svg>
                  </div>

                  {/* Unified Mission Target Box */}
                  <div className="bg-gradient-to-r from-[#3f3fe2]/10 to-emerald-500/10 border border-[#3f3fe2]/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <span className="text-[10px] font-black uppercase text-[#3f3fe2] dark:text-[#5050f2] tracking-widest mb-1">
                      Unified Goal
                    </span>
                    <h4 className="font-black text-slate-900 dark:text-white text-base md:text-lg">
                      One Mission - Crack Every Interview
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1 max-w-sm">
                      Combine AI flexibility with human insight to build a
                      foolproof interview routine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                <CTAButton
                  text="Yes, I Want to Prepare Strategically"
                  href="/pricing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MINDSET SHIFT SECTION */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#fafaff] dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Context Card */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Interview Preparation Isn't About Memorizing Answers
                </h2>

                <p className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  Most candidates prepare by watching YouTube videos or
                  memorizing common questions but interviews today assess much
                  more than that.
                </p>

                <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-bold border-l-4 border-[#3f3fe2] pl-4 py-2 bg-[#f0f2ff] dark:bg-slate-800 rounded-r-lg">
                  That's why our approach focuses on helping you communicate
                  your experience effectively—not memorize answers.
                </p>
              </div>

              {/* Right Column: Interactive grid of indicators */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
                <p className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  What Interviewers actually evaluate:
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: "Communication",
                      icon: MessageSquare,
                      color: "text-blue-500",
                      bg: "bg-blue-500/10",
                    },
                    {
                      label: "Clarity",
                      icon: Target,
                      color: "text-emerald-500",
                      bg: "bg-emerald-500/10",
                    },
                    {
                      label: "Ownership",
                      icon: ShieldCheck,
                      color: "text-purple-500",
                      bg: "bg-purple-500/10",
                    },
                    {
                      label: "Leadership",
                      icon: Award,
                      color: "text-amber-500",
                      bg: "bg-amber-500/10",
                    },
                    {
                      label: "Problem-solving",
                      icon: Brain,
                      color: "text-indigo-500",
                      bg: "bg-indigo-500/10",
                    },
                    {
                      label: "Confidence",
                      icon: Sparkles,
                      color: "text-rose-500",
                      bg: "bg-rose-500/10",
                    },
                  ].map((attr, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col gap-2 p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 rounded-xl"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg ${attr.bg} flex items-center justify-center shrink-0`}
                      >
                        <attr.icon className={`w-4 h-4 ${attr.color}`} />
                      </div>
                      <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                        {attr.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT INTERVIEWSARTHI DOES FOR YOU (OUR SERVICES) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-955/40 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Our Services: What InterviewSarthi Does for You
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              We cover all angles of the interview cycle to make you fully
              prepared, whether talking to AI systems or senior executive
              panels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                    Strategy
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                  1. Interview Preparation with Experts
                </h3>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-3">
                  Build Your Interview Strategy Before You Face the Interview
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
                  We also help you structure your answers using proven
                  frameworks so that your achievements sound clear, concise, and
                  impactful.
                </p>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-800 dark:text-slate-200 mb-2">
                    Key Benefits:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Better answer structure",
                      "Stronger confidence",
                      "Improved storytelling",
                      "Clear impact communication",
                      "Role-specific preparation",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-xs font-semibold text-slate-500 dark:text-slate-400"
                      >
                        <Check className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CTAButton text="Prepare with an Expert" href="/pricing" />
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3f3fe2]/10 flex items-center justify-center text-[#3f3fe2]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-[#3f3fe2] uppercase tracking-widest bg-[#3f3fe2]/5 px-2 py-0.5 rounded">
                    Practice
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                  2. Practice Interviews with InterviewSarthi
                </h3>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-3">
                  Practice Before the Real Interview
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
                  InterviewSarthi AI is your personal interview coach. Practice
                  unlimited interview questions based on role, experience,
                  industry, and JD.
                </p>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-800 dark:text-slate-200 mb-2">
                    Key Benefits:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Build confidence",
                      "Reduce interview anxiety",
                      "Improve communication",
                      "Practice anytime",
                      "Learn at your own pace",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-xs font-semibold text-slate-500 dark:text-slate-400"
                      >
                        <Check className="w-4 h-4 text-[#3f3fe2] shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CTAButton text="Start Practicing" href="https://interview.mycareersarthi.com" />
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest bg-purple-50 px-2 py-0.5 rounded">
                    AI Simulation
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                  3. AI Mock Interview with InterviewSarthi
                </h3>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-3">
                  Experience a Real Interview Before the Actual One
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
                  InterviewSarthi simulates an actual interview environment and
                  evaluates: Communication, Confidence, Answer quality, Clarity,
                  and Technical depth.
                </p>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-800 dark:text-slate-200 mb-2">
                    Key Benefits:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Real interview simulation",
                      "Objective evaluation",
                      "Performance score",
                      "Detailed feedback",
                      "Role-specific assessment",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-xs font-semibold text-slate-500 dark:text-slate-400"
                      >
                        <Check className="w-4 h-4 text-purple-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CTAButton text="Start AI Mock Interview" href="https://interview.mycareersarthi.com" />
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded">
                    Expert Feed
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                  4. Mock Interview with Experts
                </h3>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-3">
                  Get Feedback from Someone Who Has Interviewed Candidates
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-semibold">
                  Experienced interviewers conduct realistic mock sessions,
                  providing detailed feedback on answer quality, leadership, and
                  technical depth.
                </p>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-800 dark:text-slate-200 mb-2">
                    Key Benefits:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Human feedback",
                      "Personalized guidance",
                      "Industry insights",
                      "Stronger interview readiness",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-xs font-semibold text-slate-500 dark:text-slate-400"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CTAButton text="Book Expert Mock Interview" href="/pricing" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRACTICE DEEP-DIVE (PRACTICE WITH INTERVIEWSARTHI AI) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Practice With InterviewSarthi AI Coach
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-medium">
              Introducing InterviewSarthi — your personal AI interview coach.
              Highly optimized around recruiting frameworks, not generic
              chatbots.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Left: Input tailoring parameters */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3f3fe2]" />
                Tailor Your Profile Settings
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-6">
                Practice realistic interviews tailored specifically to your
                background:
              </p>

              <div className="space-y-3.5">
                {[
                  {
                    label: "Target Role",
                    val: "Product Manager, React Lead, Business Developer",
                  },
                  {
                    label: "Experience Level",
                    val: "Junior, Mid-Level, Lead, Executive",
                  },
                  {
                    label: "Industry",
                    val: "SaaS, Fintech, Healthcare, E-Commerce",
                  },
                  {
                    label: "Job Description",
                    val: "Upload text to align questions to job requirements",
                  },
                  {
                    label: "Interview Type",
                    val: "Technical, Cultural Fit, Case-Study",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-955 border border-slate-100 dark:border-slate-900 p-3.5 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-black text-slate-800 dark:text-slate-200">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold leading-normal">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Instant feedback evaluation indicators */}
            <div className="lg:col-span-6 bg-[#fafaff] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  Receive Instant Feedback on:
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-6">
                  Get structural suggestions and scores automatically parsed
                  after every response:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Answer Quality",
                    "Communication Clarity",
                    "Confidence Score",
                    "Structure (STAR)",
                    "Relevance to JD",
                    "Improvement Areas",
                  ].map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2.5 items-center bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900/60 p-3 rounded-xl shadow-sm"
                    >
                      <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 capitalize">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-955 border border-slate-100 dark:border-slate-900 rounded-2xl p-4.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold shadow-inner">
                  Unlike generic AI chatbots, InterviewSarthi is trained around
                  real hiring conversations, recruiter expectations, and
                  interview evaluation frameworks.
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                <CTAButton
                  text="Start Free Practice Interview"
                  href="https://interview.mycareersarthi.com"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MOCK INTERVIEW WITH INTERVIEWSARTHI AI */}
      <section className="py-24 bg-slate-50 dark:bg-slate-955/40 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side text content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
                Mock Interview With InterviewSarthi
              </h2>

              <div className="space-y-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                <p>
                  InterviewSarthi simulates an actual interview environment to
                  evaluate performance holistically before candidates face real
                  hiring panels.
                </p>

                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3.5">
                  <p className="font-black text-slate-800 dark:text-slate-200 uppercase text-[10px] tracking-wider">
                    Features and benefits:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 pl-0.5">
                    {[
                      {
                        text: "Real interview simulation",
                        desc: "Interactive timer, stress settings",
                      },
                      {
                        text: "Objective evaluation",
                        desc: "Unbiased feedback driven by models",
                      },
                      {
                        text: "Performance score",
                        desc: "Benchmarked against standard expectations",
                      },
                      {
                        text: "Detailed feedback",
                        desc: "Line-by-line rewrite suggestions",
                      },
                      {
                        text: "Role-specific assessment",
                        desc: "Tailored to matching seniorities",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#3f3fe2] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-slate-900 dark:text-white font-extrabold text-xs leading-none mb-0.5">
                            {item.text}
                          </p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-none">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right side Dashboard Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 md:p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-[9px] font-black tracking-wider uppercase text-slate-400 dark:text-slate-500">
                      Evaluation Console
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />{" "}
                      Active Analysis
                    </span>
                  </div>

                  <div className="space-y-3 text-xs md:text-sm">
                    {/* Prompt box */}
                    <div className="bg-slate-50 dark:bg-slate-955 border border-slate-100 dark:border-slate-900 rounded-2xl p-4 shadow-inner">
                      <p className="text-[9px] text-[#3f3fe2] uppercase font-black tracking-wider mb-1">
                        AI Interviewer Prompt
                      </p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-normal">
                        “Describe a time when you had to resolve conflict in a
                        cross-functional squad. How did you structure the
                        solution?”
                      </p>
                    </div>

                    {/* Evaluation box */}
                    <div className="bg-slate-50 dark:bg-slate-955 border border-[#3f3fe2]/20 rounded-2xl p-4 shadow-inner">
                      <p className="text-[9px] text-emerald-600 uppercase font-black tracking-wider mb-1">
                        Evaluation Output
                      </p>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-normal">
                        Your response follows the STAR method perfectly.
                        Feedback: Consider highlighting operational efficiency
                        outcomes earlier in the action phase.
                      </p>
                      <div className="mt-3 flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-100 dark:border-slate-850">
                        <span className="text-[10px] font-black text-slate-700 dark:text-slate-350 uppercase">
                          Score: 82/100
                        </span>
                        <span className="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Good Structure
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPARISON TABLE */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Which Service Is Right for You?
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed font-semibold">
              Compare options to pick what matches your career stage and
              preparation needs.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left py-5 px-6 text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                      If You Want To...
                    </th>
                    <th className="text-left py-5 px-6 text-xs font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                      Best Option
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs md:text-sm">
                  {[
                    {
                      want: "Structure your answers and prepare strategically",
                      option: "Interview Preparation with Experts",
                    },
                    {
                      want: "Practice regularly and improve confidence",
                      option: "InterviewSarthi AI Practice",
                    },
                    {
                      want: "Simulate a real interview environment",
                      option: "AI Mock Interview",
                    },
                    {
                      want: "Receive personalized human feedback",
                      option: "Expert Mock Interview",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-955/20 transition-all"
                    >
                      <td className="py-4.5 px-6 font-semibold text-slate-700 dark:text-slate-350">
                        {row.want}
                      </td>
                      <td className="py-4.5 px-6 font-extrabold text-[#3f3fe2] dark:text-[#5050f2]">
                        {row.option}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXACT STAGGERED WINDING TIMELINE PROCESS STEPS (Inspired by Image 5) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-955/40 relative overflow-hidden">
        {/* Soft background glow accents */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#3f3fe2]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative">
          {/* Header section styled exactly like Image 5 (with date tabs / status selector pills in top right) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 max-w-5xl mx-auto gap-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Crack Every Interview In 4 Easy Steps
              </h2>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-medium">
                We guide you step-by-step from evaluating current performance
                breakdowns to building complete answer storytelling ready for
                production mock reviews.
              </p>
            </div>
          </div>

          {/* Exact Staggered Winding Timeline Grid (Desktop alternate columns layout matching image 5) */}
          <div className="relative max-w-5xl mx-auto space-y-16 lg:space-y-24">
            {/* Step 1: Upper Left (Col 1-5) */}
            <div className="relative grid md:grid-cols-12 items-center gap-8 group z-40">
              <div className="col-span-12 md:col-span-5 relative z-30">
                {/* Connector Line 1 -> 2: Leaves Card 1's right, curves down to Card 2's top center */}
                <div className="absolute top-1/2 left-[100%] w-[calc(50%+1.5rem)] h-[calc(100%+3.2rem)] pointer-events-none hidden lg:block z-40">
                  <svg className="w-full h-full overflow-visible" fill="none">
                    <defs>
                      <marker
                        id="arrow-emerald"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
                      </marker>
                    </defs>
                    <path
                      d="M 0,0 C 120,0 180,20 180,180"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      markerEnd="url(#arrow-emerald)"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex relative z-30">
                  {/* Tab Pill on Left (Green background, vertical text) */}
                  <div className="w-9 bg-primary text-white flex items-center justify-center shrink-0 [writing-mode:vertical-lr] rotate-180 font-semibold text-xs tracking-widest py-5 rounded-l-[28px]">
                    Step 1
                  </div>

                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300">
                        <Search className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white leading-none">
                        Assessment
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
                      We first evaluate your current interview readiness to
                      discover where interviews are breaking down and analyze
                      your positioning challenges.
                    </p>

                    <ul className="space-y-1.5 border-t border-slate-50 dark:border-slate-800 pt-3">
                      {[
                        "where interviews are breaking down",
                        "which questions create difficulty",
                        "communication & clarity assessment",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 items-center text-[10px] md:text-xs font-semibold text-slate-400 dark:text-slate-500"
                        >
                          <Check className="w-3 h-3 text-[#10b981] shrink-0" />
                          <span className="capitalize">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:col-span-7" />
            </div>

            {/* Step 2: Middle Right (Col 7-11, empty spacer on left) */}
            <div className="relative grid md:grid-cols-12 items-center gap-8 group z-30">
              <div className="hidden md:block md:col-span-6" />

              <div className="col-span-12 md:col-span-5 md:col-start-7 relative z-30">
                {/* Connector Line 2 -> 3: Leaves Card 2's left, curves down to Card 3's top center */}
                <div className="absolute top-1/2 right-[100%] w-[calc(60%+2rem)] h-[calc(100%+3.2rem)] pointer-events-none hidden lg:block z-40">
                  <svg className="w-full h-full overflow-visible" fill="none">
                    <defs>
                      <marker
                        id="arrow-blue"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#3f3fe2" />
                      </marker>
                    </defs>
                    <path
                      d="M 220,0 C 80,0 20,20 20,180"
                      stroke="#3f3fe2"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      markerEnd="url(#arrow-blue)"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex relative z-30">
                  {/* Tab Pill on Left (Dark background, vertical text) */}
                  <div className="w-9 bg-[#0f172a] text-white flex items-center justify-center shrink-0 [writing-mode:vertical-lr] rotate-180 font-semibold text-xs tracking-widest py-5 rounded-l-[28px]">
                    Step 2
                  </div>

                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300">
                        <Target className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white leading-none">
                        Prep Focus
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
                      We guide you on what interviewers expect at your level and
                      map exact domain competencies companies evaluate.
                    </p>

                    <ul className="space-y-1.5 border-t border-slate-50 dark:border-slate-800 pt-3">
                      {[
                        "what skills are evaluated",
                        "how companies assess profiles",
                        "recruiter evaluation standards",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 items-center text-[10px] md:text-xs font-semibold text-slate-400 dark:text-slate-500"
                        >
                          <Check className="w-3 h-3 text-[#3f3fe2] shrink-0" />
                          <span className="capitalize">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:col-span-1" />
            </div>

            {/* Step 3: Lower Left (Col 2-6, empty spacer on right) */}
            <div className="relative grid md:grid-cols-12 items-center gap-8 group z-20">
              <div className="hidden md:block md:col-span-1" />

              <div className="col-span-12 md:col-span-5 md:col-start-2 relative z-30">
                {/* Connector Line 3 -> 4: Leaves Card 3's right, curves down to Card 4's top center */}
                <div className="absolute top-1/2 left-[100%] w-[calc(60%+2rem)] h-[calc(100%+3.2rem)] pointer-events-none hidden lg:block z-40">
                  <svg className="w-full h-full overflow-visible" fill="none">
                    <path
                      d="M 0,0 C 140,0 200,20 200,180"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      markerEnd="url(#arrow-emerald)"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex relative z-30">
                  {/* Tab Pill on Left (Dark background, vertical text) */}
                  <div className="w-9 bg-[#0f172a] text-white flex items-center justify-center shrink-0 [writing-mode:vertical-lr] rotate-180 font-semibold text-xs tracking-widest py-5 rounded-l-[28px]">
                    Step 3
                  </div>

                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white leading-none">
                        Story Structure
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
                      Restructure achievements and examples into robust story
                      blocks focused on ownership and measurable outcomes.
                    </p>

                    <ul className="space-y-1.5 border-t border-slate-50 dark:border-slate-800 pt-3">
                      {[
                        "framework answer architecture",
                        "measurable impact outcomes",
                        "leadership & ownership signals",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 items-center text-[10px] md:text-xs font-semibold text-slate-400 dark:text-slate-500"
                        >
                          <Check className="w-3 h-3 text-[#3f3fe2] shrink-0" />
                          <span className="capitalize">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:col-span-6" />
            </div>

            {/* Step 4: Bottom Right (Col 8-12, empty spacer on left) */}
            <div className="relative grid md:grid-cols-12 items-center gap-8 group z-10">
              <div className="hidden md:block md:col-span-7" />

              <div className="col-span-12 md:col-span-5 md:col-start-8 relative z-30">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex relative z-30">
                  {/* Tab Pill on Left (Green background, vertical text) */}
                  <div className="w-9 bg-primary text-white flex items-center justify-center shrink-0 [writing-mode:vertical-lr] rotate-180 font-semibold text-xs tracking-widest py-5 rounded-l-[28px]">
                    Step 4
                  </div>

                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white leading-none">
                        Mock Practice
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mb-4">
                      Face realistic simulated panels with expert interviewers
                      to receive detailed feedback on structure and clarity.
                    </p>

                    <ul className="space-y-1.5 border-t border-slate-50 dark:border-slate-800 pt-3">
                      {[
                        "mock interview feedback",
                        "uncover communication gaps",
                        "technical delivery check",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 items-center text-[10px] md:text-xs font-semibold text-slate-400 dark:text-slate-500"
                        >
                          <Check className="w-3 h-3 text-[#10b981] shrink-0" />
                          <span className="capitalize">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHAT WE PREPARE YOU FOR */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              What We Prepare You For
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed font-semibold">
              Prep parameters adjusted to target exact evaluation profiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "HR Interviews",
                desc: "Behavioral questions, communication clarity, confidence, and cultural fit preparation.",
                icon: Users,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Technical Interviews",
                desc: "Explaining technical concepts clearly, problem-solving communication, and technical depth preparation.",
                icon: ShieldCheck,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Managerial Interviews",
                desc: "Leadership examples, stakeholder management, ownership communication, and decision-making preparation.",
                icon: Briefcase,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Leadership Interviews",
                desc: "Strategic thinking, executive communication, business impact articulation, and leadership positioning.",
                icon: Award,
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex gap-4 items-start">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-extrabold mb-1.5 text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WONDERING IF RIGHT FOR YOU */}
      <section className="py-24 bg-slate-50 dark:bg-slate-955/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Wondering If Interview Preparation Services Are Right for You?
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-semibold">
              Our online interview preparation services are ideal for candidates
              across various professional levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Fresh Graduates",
                desc: "Candidates preparing for their first professional interviews.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals aiming for career growth, promotions, or role transitions.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Professionals",
                desc: "Leaders preparing for managerial, strategic, or executive-level interviews.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Active Job Seekers",
                desc: "Professionals actively attending interviews and wanting better conversion results.",
                icon: Search,
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div
                    className={`w-9.5 h-9.5 rounded-xl ${item.bg} flex items-center justify-center mb-3.5`}
                  >
                    <item.icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <h3 className="text-xs md:text-sm font-extrabold mb-1.5 text-slate-955 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-500 leading-relaxed text-[11px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center pt-4">
            <CTAButton text="Yes, Prepare Me for Interviews" href="/pricing" />
          </div>
        </div>
      </section>

      {/* 11. WHY CHOOSE MYCAREERSARTHI */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3f3fe2]/5 rounded-full blur-3xl -z-10" />

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Why Choose MyCareerSarthi?
                </h2>

                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  Most interview preparation services focus only on interview
                  questions. Our interview preparation combines AI-powered mock
                  interviews, expert-led mock interview services, structured
                  answer frameworks, and practical interview guidance to help
                  professionals communicate their real experience effectively.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <CTAButton
                    text="Start Interview Preparation"
                    href="https://interview.mycareersarthi.com"
                  />
                </div>
              </div>

              {/* Right panel folder tab visuals (inspired by image 3 folder layout) */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-905 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between gap-5">
                {/* Visual folders layout preview */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                    Features Grid
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      "AI Mock Tests",
                      "Expert Review",
                      "Structure Frameworks",
                      "Role Targeting",
                    ].map((feat, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3f3fe2] shrink-0" />
                        <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500">
                    Platform Scope
                  </span>
                  <span className="text-[10px] font-black text-[#3f3fe2] bg-[#f0f2ff] px-2.5 py-0.5 rounded">
                    All-In-One
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. REAL STORIES (TESTIMONIALS WITH FILE FOLDER TESTIMONIAL TABS - Inspired by Image 4) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-955/40 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Real Stories from Professionals Like You
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed font-semibold">
              Read how candidates restructured their narratives to increase
              success rates.
            </p>
          </div>

          {/* Staggered overlapping cards resembling the tabbed folder layout in Image 4 */}
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                text: "“Before MCS, I knew my work technically but struggled to explain it properly during interviews. The mock interview sessions completely changed my confidence.”",
                author: "Verified Professional",
                role: "Software Engineering Candidate",
                tab: "Case Study 01",
                color: "border-l-4 border-amber-500",
                badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-405",
              },
              {
                text: "“The AI mock interview platform helped me practice difficult interview scenarios before my actual interviews. It felt surprisingly realistic.”",
                author: "Software Engineering Candidate",
                role: "Product Developer",
                tab: "Case Study 02",
                color: "border-l-4 border-emerald-500",
                badgeBg:
                  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-405",
              },
              {
                text: "“After restructuring my answers, I became much more confident while explaining my projects and leadership experience.”",
                author: "Mid-Level Product Professional",
                role: "Mid-Level Product Manager",
                tab: "Case Study 03",
                color: "border-l-4 border-purple-500",
                badgeBg:
                  "bg-purple-500/10 text-purple-600 dark:text-purple-405",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm flex flex-col justify-between relative group ${story.color}`}
              >
                {/* Folder style tab header */}
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm border border-white dark:border-slate-900 ${story.badgeBg}`}
                  >
                    {story.tab}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm md:text-base italic text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                    {story.text}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 mt-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center font-bold text-xs text-[#3f3fe2] border border-slate-100 dark:border-slate-900">
                    {story.author[0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-xs md:text-sm">
                      {story.author}
                    </h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">
                      {story.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQs ACCORDION */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed font-semibold">
              Browse responses to common questions regarding timelines, expert
              match, and platform accessibility.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3.5">
            {[
              {
                q: "What does interview preparation include?",
                a: "Our interview preparation services include interview readiness assessment, structured answer preparation, mock interviews, AI mock interview simulations, and expert feedback.",
              },
              {
                q: "Are the mock interviews role-specific?",
                a: "Yes. Our mock interview services are tailored based on your target role, experience level, and interview type.",
              },
              {
                q: "What is the AI Mock Interview platform?",
                a: "It is an AI-powered interview simulation platform where professionals can practice realistic interview conversations and receive structured feedback.",
              },
              {
                q: "Can interview preparation improve interview performance?",
                a: "Yes. Structured preparation improves communication clarity, confidence, and answer quality, which significantly improves interview conversion.",
              },
              {
                q: "Is this useful for experienced professionals?",
                a: "Absolutely. Many experienced professionals benefit from structured preparation for managerial and leadership interviews.",
              },
              {
                q: "Will I receive feedback after mock interviews?",
                a: "Yes. Every mock interview session includes detailed and actionable feedback.",
              },
            ].map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-5 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-extrabold text-xs md:text-sm hover:no-underline py-4.5 cursor-pointer text-slate-800 dark:text-slate-200">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-555 dark:text-slate-400 text-xs md:text-sm leading-relaxed pb-4.5 pt-2 border-t border-slate-100 dark:border-slate-850 mt-1 font-semibold">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 14. FINAL CALL TO ACTION SECTION */}
      <section className="py-20 bg-[#3f3fe2] dark:bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes inside CTA */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3232c7]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Your Next Interview Shouldn't Be Left to Chance
          </h2>

          <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto font-medium leading-relaxed">
            Practice better. Communicate better. Perform better. With
            InterviewSarthi AI and expert guidance, you'll walk into interviews
            with more confidence and clarity.
          </p>

          <div className="pt-4 flex justify-center">
            <CTAButton
              text="Start Interview Preparation"
              href="https://interview.mycareersarthi.com"
              primary={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewPreparationContentPage;
