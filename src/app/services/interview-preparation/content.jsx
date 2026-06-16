"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Sparkles,
  Brain,
  Target,
  CheckCircle2,
  MessageSquare,
  MessageSquareMore,
  Crown,
  FileText,
  Puzzle,
  User,
  Award,
  ShieldCheck,
  Star,
  Mic,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Video,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({
  text,
  href = "/pricing#interview-services",
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

const CheckCircleIcon = () => (
  <div className="inline-flex items-center justify-center">
    <div className="w-[22px] h-[22px] rounded-full border border-blue-500 dark:border-blue-400 flex items-center justify-center text-blue-500 dark:text-blue-400">
      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
    </div>
  </div>
);

const CrossCircleIcon = () => (
  <div className="inline-flex items-center justify-center">
    <div className="w-[22px] h-[22px] rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500">
      <span className="text-[10px] font-bold leading-none select-none">✕</span>
    </div>
  </div>
);

const InterviewPreparationContentPage = () => {
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
                  Crack Your Next Interview with{" "}
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
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f0f2ff] dark:bg-[#1e1b4b]/15 rounded-[120px_200px_150px_220px] blur-[60px] pointer-events-none -z-10" />

                {/* Rounded mockup console container */}
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[580px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500">
                  {/* Top Bar of the console */}
                  <div className="flex items-center justify-between pb-4 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>InterviewSarthi AI Active</span>
                    </div>

                    <div className="flex gap-1.5">
                      {[...Array(4)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Split body layout of the console */}
                  <div className="grid grid-cols-12 gap-5">
                    {/* Left: Candidate Portrait image */}
                    <div className="col-span-6 relative aspect-square rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm bg-slate-50">
                      <Image
                        src="/services/interview-preparation/hero-interview.webp"
                        alt="Candidate Portrait"
                        fill
                        className="object-cover"
                        priority
                      />

                      {/* Live status badge */}
                      <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-slate-800 dark:text-white px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span>Live</span>
                      </div>

                      {/* Video call controls overlay */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                        {/* Mic button */}
                        <button className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200">
                          <Mic className="w-4 h-4" />
                        </button>

                        {/* Video button */}
                        <button className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200">
                          <Video className="w-4 h-4" />
                        </button>

                        {/* Hangup button */}
                        <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200">
                          <Phone className="w-4 h-4 rotate-[135deg]" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Feedback parameters */}
                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3.5">
                      {/* Metric 1 */}
                      <div className="bg-white dark:bg-slate-950 border border-slate-100/80 dark:border-slate-800/80 p-3 rounded-2xl flex items-center justify-between gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug">
                              Structured Answers
                            </span>
                            <span className="text-[16px] font-black leading-none mt-1 mb-0.5 text-indigo-600 dark:text-indigo-400">
                              85%
                            </span>
                            <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 leading-tight">
                              Well organized and to the point
                            </span>
                          </div>
                        </div>
                        <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
                          <svg className="w-11 h-11 transform -rotate-90">
                            <circle
                              cx="22"
                              cy="22"
                              r="16"
                              className="stroke-slate-100 dark:stroke-slate-800"
                              strokeWidth="3.5"
                              fill="transparent"
                            />
                            <circle
                              cx="22"
                              cy="22"
                              r="16"
                              className="stroke-indigo-600 dark:stroke-indigo-400 transition-all duration-500"
                              strokeWidth="3.5"
                              strokeDasharray={100.5}
                              strokeDashoffset={100.5 - (100.5 * 85) / 100}
                              strokeLinecap="round"
                              fill="transparent"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="bg-white dark:bg-slate-950 border border-slate-100/80 dark:border-slate-800/80 p-3 rounded-2xl flex items-center justify-between gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                            <Target className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug">
                              Clarity & Confidence
                            </span>
                            <span className="text-[16px] font-black leading-none mt-1 mb-0.5 text-emerald-500 dark:text-emerald-400">
                              92%
                            </span>
                            <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 leading-tight">
                              Clear delivery with strong confidence
                            </span>
                          </div>
                        </div>
                        <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
                          <svg className="w-11 h-11 transform -rotate-90">
                            <circle
                              cx="22"
                              cy="22"
                              r="16"
                              className="stroke-slate-100 dark:stroke-slate-800"
                              strokeWidth="3.5"
                              fill="transparent"
                            />
                            <circle
                              cx="22"
                              cy="22"
                              r="16"
                              className="stroke-emerald-500 dark:stroke-emerald-400 transition-all duration-500"
                              strokeWidth="3.5"
                              strokeDasharray={100.5}
                              strokeDashoffset={100.5 - (100.5 * 92) / 100}
                              strokeLinecap="round"
                              fill="transparent"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div className="bg-white dark:bg-slate-950 border border-slate-100/80 dark:border-slate-800/80 p-3 rounded-2xl flex items-center justify-between gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                            <Award className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-snug">
                              Expert Feedback
                            </span>
                            <span className="text-[16px] font-black leading-none mt-1 mb-0.5 text-blue-500 dark:text-blue-400">
                              88%
                            </span>
                            <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 leading-tight">
                              Strong response with minor improvements
                            </span>
                          </div>
                        </div>
                        <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
                          <svg className="w-11 h-11 transform -rotate-90">
                            <circle
                              cx="22"
                              cy="22"
                              r="16"
                              className="stroke-slate-100 dark:stroke-slate-800"
                              strokeWidth="3.5"
                              fill="transparent"
                            />
                            <circle
                              cx="22"
                              cy="22"
                              r="16"
                              className="stroke-blue-500 dark:stroke-blue-400 transition-all duration-500"
                              strokeWidth="3.5"
                              strokeDasharray={100.5}
                              strokeDashoffset={100.5 - (100.5 * 88) / 100}
                              strokeLinecap="round"
                              fill="transparent"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Speech Visualizer Waveform / Feedback banner */}
                  <div className="bg-slate-50/60 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/50 p-4 rounded-[24px] flex items-center justify-between gap-4 mt-6">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-[12px] font-bold text-slate-800 dark:text-slate-200 leading-none">
                          Great Progress!
                        </h5>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug font-semibold">
                          You&apos;re answering clearly and confidently. Keep up
                          the momentum!
                        </p>
                      </div>
                    </div>

                    <button className="bg-[#f0f0ff] hover:bg-[#e6e6ff] dark:bg-indigo-950/40 dark:hover:bg-indigo-950/60 text-[#5c59e8] dark:text-indigo-300 text-[11px] font-bold py-2.5 px-4 rounded-xl flex items-center gap-1.5 transition-all whitespace-nowrap">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>View Detailed Analysis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MINDSET SHIFT SECTION (Dark Theme from Demo UI) */}
      <section className="relative w-full bg-slate-900 text-gray-100 py-16 md:py-24 overflow-hidden selection:bg-indigo-500/30">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
            {/* Left Content Column */}
            <div className="w-full lg:w-[42%] flex flex-col items-center lg:items-start text-center lg:text-left z-20">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Interview Prep
                <br />
                Isn&apos;t About
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">
                  Memorizing Answers.
                </span>
              </h2>

              {/* Paragraph description */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mt-5 leading-relaxed">
                Most candidates prepare by memorizing questions, but modern
                interviews assess much more. We help you communicate your
                experience effectively and build the skills that actually get
                you selected.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full sm:w-auto">
                <Link
                  href="https://interview.mycareersarthi.com"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
                >
                  Start Preparing
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://res.cloudinary.com/rohanphulkar/video/upload/v1768904684/interview-preparation_huxamd.mp4"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-700 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
                >
                  Watch Demo
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                    <svg
                      className="w-3 h-3 fill-current ml-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="w-full lg:w-[58%] z-10">
              {/* DESKTOP (lg+): Boy image with floating cards */}
              <div className="hidden lg:block relative min-h-[680px] xl:min-h-[720px] select-none">
                <div className="absolute inset-0 pointer-events-none select-none z-0 flex flex-col justify-center items-center overflow-hidden -top-[50%]">
                  <div className="italic font-medium text-purple-100/[0.4] text-[7vw] tracking-wider leading-none -translate-y-[25%] -translate-x-[5%] font-serif">
                    Interviewers
                  </div>
                  <div className="italic font-medium text-purple-100/[0.4] text-[10vw] tracking-wider leading-none -translate-y-[15%] translate-x-[4%] font-serif">
                    evaluate
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[65%] z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none z-0" />
                  <img
                    src="/boy-2.webp"
                    alt="Candidate preparing for interview"
                    className="relative z-10 w-full h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] object-contain select-none pointer-events-none"
                  />
                </div>
                <div className="absolute inset-0 w-full h-full z-20">
                  <div
                    className="absolute top-[46%] left-0 w-[210px] xl:w-[235px] animate-reveal"
                    style={{ animationDelay: "200ms" }}
                  >
                    <div className="glass-card flex items-center gap-3 py-2.5 px-4 rounded-[18px] bg-purple-200 backdrop-blur-xl border border-purple-500/25">
                      <div className="flex-shrink-0 text-black">
                        <MessageSquareMore className="w-5.5 h-5.5 text-black drop-shadow-[0_0_8px_rgba(168,85,247,0.65)]" />
                      </div>
                      <div>
                        <h4 className="text-black font-bold text-[14px] tracking-wide leading-snug">
                          Communication
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[46%] right-0 w-[210px] xl:w-[235px] animate-reveal -rotate-[12deg]"
                    style={{ animationDelay: "400ms" }}
                  >
                    <div className="glass-card flex items-center gap-3 py-2.5 px-4 rounded-[18px] bg-amber-200 backdrop-blur-xl border border-amber-500/25">
                      <div className="flex-shrink-0 text-black">
                        <Crown className="w-5.5 h-5.5 text-black drop-shadow-[0_0_8px_rgba(245,158,11,0.65)]" />
                      </div>
                      <div>
                        <h4 className="text-black font-bold text-[14px] tracking-wide leading-snug">
                          Leadership
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[60%] left-[-12px] w-[210px] xl:w-[235px] animate-reveal -rotate-[4deg]"
                    style={{ animationDelay: "600ms" }}
                  >
                    <div className="glass-card flex items-center gap-3 py-2.5 px-4 rounded-[18px] bg-blue-200 backdrop-blur-xl border border-blue-500/25">
                      <div className="flex-shrink-0 text-black">
                        <FileText className="w-5.5 h-5.5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-black font-bold text-[14px] tracking-wide leading-snug">
                          Clarity
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[60%] right-[-12px] w-[210px] xl:w-[235px] animate-reveal -rotate-[4deg]"
                    style={{ animationDelay: "800ms" }}
                  >
                    <div className="glass-card flex items-center gap-3 py-2.5 px-4 rounded-[18px] bg-teal-200 backdrop-blur-xl border border-teal-500/25">
                      <div className="flex-shrink-0 text-black">
                        <Puzzle className="w-5.5 h-5.5 text-black drop-shadow-[0_0_8px_rgba(20,184,166,0.65)]" />
                      </div>
                      <div>
                        <h4 className="text-black font-bold text-[14px] tracking-wide leading-snug">
                          Problem-solving
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[75%] left-0 w-[210px] xl:w-[235px] animate-reveal rotate-[8deg]"
                    style={{ animationDelay: "1000ms" }}
                  >
                    <div className="glass-card flex items-center gap-3 py-2.5 px-4 rounded-[18px] bg-green-200 backdrop-blur-xl border border-emerald-500/25">
                      <div className="flex-shrink-0 text-black">
                        <User className="w-5.5 h-5.5 text-black drop-shadow-[0_0_8px_rgba(16,185,129,0.65)]" />
                      </div>
                      <div>
                        <h4 className="text-black font-bold text-[14px] tracking-wide leading-snug">
                          Ownership
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[73%] right-0 w-[210px] xl:w-[235px] animate-reveal rotate-12"
                    style={{ animationDelay: "1200ms" }}
                  >
                    <div className="glass-card flex items-center gap-3 py-2.5 px-4 rounded-[18px] bg-red-200 backdrop-blur-xl border border-rose-500/25">
                      <div className="flex-shrink-0 text-black">
                        <Star className="w-5.5 h-5.5 text-black drop-shadow-[0_0_8px_rgba(244,63,94,0.65)]" />
                      </div>
                      <div>
                        <h4 className="text-black font-bold text-[14px] tracking-wide leading-snug">
                          Confidence
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE / TABLET (below lg): stacked boy + 2-col card grid */}
              <div className="lg:hidden flex flex-col items-center gap-6">
                <div className="relative flex items-center justify-center w-[200px] sm:w-[240px]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-indigo-600/15 blur-[60px] pointer-events-none" />
                  <img
                    src="/boy-2.webp"
                    alt="Candidate preparing for interview"
                    className="relative z-10 w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] object-contain select-none pointer-events-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  {[
                    {
                      label: "Communication",
                      desc: "Express ideas clearly",
                      color: "text-purple-300",
                      bg: "bg-purple-950/60",
                      border: "border-purple-900/60",
                      icon: (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          <path d="M8 10h.01" />
                          <path d="M12 10h.01" />
                          <path d="M16 10h.01" />
                        </svg>
                      ),
                    },
                    {
                      label: "Leadership",
                      desc: "Lead and inspire others",
                      color: "text-amber-300",
                      bg: "bg-amber-950/60",
                      border: "border-amber-900/60",
                      icon: (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
                          <path d="M3 20h18" />
                        </svg>
                      ),
                    },
                    {
                      label: "Clarity",
                      desc: "Structure their thoughts",
                      color: "text-blue-300",
                      bg: "bg-blue-950/60",
                      border: "border-blue-900/60",
                      icon: (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <line x1="9" y1="9" x2="15" y2="9" />
                          <line x1="9" y1="13" x2="15" y2="13" />
                          <line x1="9" y1="17" x2="13" y2="17" />
                        </svg>
                      ),
                    },
                    {
                      label: "Problem-solving",
                      desc: "Tackle real challenges",
                      color: "text-teal-300",
                      bg: "bg-teal-950/60",
                      border: "border-teal-900/60",
                      icon: (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
                      ),
                    },
                    {
                      label: "Ownership",
                      desc: "Initiative & accountability",
                      color: "text-emerald-300",
                      bg: "bg-emerald-950/60",
                      border: "border-emerald-900/60",
                      icon: (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      ),
                    },
                    {
                      label: "Confidence",
                      desc: "Confidence in abilities",
                      color: "text-rose-300",
                      bg: "bg-rose-950/60",
                      border: "border-rose-900/60",
                      icon: (
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ),
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="glass-card flex items-start gap-2 p-2.5 rounded-xl"
                    >
                      <div
                        className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg ${item.bg} border ${item.border} ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h4
                          className={`${item.color} font-semibold text-[11px] tracking-wide leading-tight`}
                        >
                          {item.label}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. OUR SERVICES SECTION (Update with premium designs) */}
      {/* Service 1: Practice */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#e0f2fe] to-[#bae6fd] dark:from-indigo-950/20 dark:to-slate-900/40 overflow-hidden">
        {/* Background Decorative Patterns */}
        <div className="absolute top-10 right-12 grid grid-cols-6 gap-2 opacity-[0.12] dark:opacity-10 pointer-events-none hidden md:grid">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1 h-1 bg-[#3f3fe2] rounded-full" />
          ))}
        </div>
        <div className="absolute right-[-10%] top-[30%] w-[300px] h-[300px] bg-[#3f3fe2]/6 dark:bg-[#3f3fe2]/3 rounded-full blur-[80px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] left-[10%] w-24 h-24 rounded-full border border-dashed border-[#3f3fe2]/6 pointer-events-none hidden lg:block" />
        <Target className="absolute top-1/3 left-[12%] w-6 h-6 text-[#3f3fe2]/8 dark:text-[#5f5fed]/4 animate-float-slow hidden md:block" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                1. Practice Interviews with InterviewSarthi
              </h2>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3f3fe2] dark:text-indigo-400">
                PRACTICE BEFORE THE REAL INTERVIEW
              </p>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
                  InterviewSarthi AI is your personal interview coach.
                </p>
                <div className="space-y-2">
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Practice unlimited interview questions based on:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 pl-0.5">
                    {[
                      { text: "Target role", icon: Target },
                      { text: "Experience level", icon: GraduationCap },
                      { text: "Industry", icon: Briefcase },
                      { text: "Job description", icon: FileText },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        <div className="w-5.5 h-5.5 rounded bg-[#3f3fe2]/10 flex items-center justify-center text-[#3f3fe2] dark:text-[#5f5fed] shrink-0">
                          <item.icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Receive instant feedback after every answer and continuously
                  improve.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/40">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Benefits
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "Build confidence",
                    "Reduce interview anxiety",
                    "Improve communication",
                    "Practice anytime",
                    "Learn at your own pace",
                  ].map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 items-center text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300"
                    >
                      <div className="w-4.5 h-4.5 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3">
                <CTAButton
                  text="Start Practicing"
                  href="https://interview.mycareersarthi.com"
                  variant="blue"
                />
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/8 dark:bg-blue-400/4 rounded-full blur-3xl pointer-events-none -z-10" />
              <motion.div
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src="/services/interview-preparation/1.webp"
                  alt="Practice Interviews with InterviewSarthi"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Wave Divider to Service 2 */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none translate-y-[1px] z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[45px] md:h-[60px] fill-[#fff2eb] dark:fill-[#0d0d24]"
          >
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Service 2: AI Simulation */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#fff2eb] to-[#ffe4d6] dark:from-slate-900/40 dark:to-purple-950/20 overflow-hidden">
        {/* Background Decorative Patterns */}
        <div className="absolute bottom-10 left-12 grid grid-cols-6 gap-2 opacity-[0.12] dark:opacity-10 pointer-events-none hidden md:grid">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1 h-1 bg-[#7c3aed] rounded-full" />
          ))}
        </div>
        <div className="absolute left-[-10%] top-[15%] w-[300px] h-[300px] bg-[#7c3aed]/6 dark:bg-[#7c3aed]/3 rounded-full blur-[80px] pointer-events-none -z-10" />
        <div className="absolute top-[20%] right-[30%] w-20 h-20 rounded-full border border-[#7c3aed]/8 pointer-events-none hidden lg:block" />
        <Brain className="absolute top-20 right-[10%] w-6 h-6 text-[#7c3aed]/8 dark:text-purple-400/4 animate-float hidden md:block" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/8 dark:bg-purple-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
              <motion.div
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src="/services/interview-preparation/3.webp"
                  alt="AI Mock Interview with InterviewSarthi"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                2. AI Mock Interview with InterviewSarthi
              </h2>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#7c3aed] dark:text-purple-400">
                EXPERIENCE A REAL INTERVIEW BEFORE THE ACTUAL ONE
              </p>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-350 leading-relaxed font-medium">
                  InterviewSarthi simulates an actual interview environment and
                  evaluates:
                </p>
                <div className="space-y-2">
                  <ul className="grid grid-cols-2 gap-2 pl-0.5">
                    {[
                      { text: "Communication", icon: MessageSquareMore },
                      { text: "Confidence", icon: ShieldCheck },
                      { text: "Answer quality", icon: CheckCircle2 },
                      { text: "Clarity", icon: Sparkles },
                      { text: "Technical depth", icon: Puzzle },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        <div className="w-5.5 h-5.5 rounded bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] dark:text-purple-400 shrink-0">
                          <item.icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  You&apos;ll receive a detailed performance report highlighting
                  strengths and areas for improvement.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/40">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Benefits
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "Real interview simulation",
                    "Objective evaluation",
                    "Performance score",
                    "Detailed feedback",
                    "Role-specific assessment",
                  ].map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 items-center text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3">
                <CTAButton
                  text="Start AI Mock Interview"
                  href="https://interview.mycareersarthi.com"
                  variant="purple"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider to Service 3 */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none translate-y-[1px] z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[45px] md:h-[60px] fill-[#f0fff4] dark:fill-[#0d0d24]"
          >
            <path d="M0,80L120,74.7C240,69,480,59,720,64C960,69,1200,91,1320,101.3L1440,112L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Service 3: Strategy */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#f0fff4] to-[#dcfce7] dark:from-slate-900/40 dark:to-indigo-950/20 overflow-hidden">
        {/* Background Decorative Patterns */}
        <div className="absolute top-10 left-10 grid grid-cols-6 gap-2 opacity-[0.12] dark:opacity-10 pointer-events-none hidden md:grid">
          {[...Array(24)].map((_, i) => (
            <span key={i} className="w-1 h-1 bg-[#3f3fe2] rounded-full" />
          ))}
        </div>
        <div className="absolute left-[-10%] top-[20%] w-[300px] h-[300px] bg-[#3f3fe2]/6 dark:bg-[#3f3fe2]/3 rounded-full blur-[80px] pointer-events-none -z-10" />
        <div className="absolute top-[15%] right-[20%] w-20 h-20 rounded-full border border-[#3f3fe2]/8 pointer-events-none hidden lg:block" />
        <Sparkles className="absolute top-12 right-[10%] w-5 h-5 text-[#3f3fe2]/8 dark:text-indigo-400/4 animate-pulse-glow hidden md:block" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                3. Interview Preparation with Experts
              </h2>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3f3fe2] dark:text-indigo-400">
                BUILD YOUR INTERVIEW STRATEGY BEFORE YOU FACE THE INTERVIEW
              </p>
              <p className="text-xs sm:text-sm text-slate-655 dark:text-slate-350 leading-relaxed font-medium">
                We also help you structure your answers using proven frameworks
                so that your achievements sound clear, concise, and impactful.
              </p>

              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/40">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Benefits
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "Better answer structure",
                    "Stronger confidence",
                    "Improved storytelling",
                    "Clear impact communication",
                    "Role-specific preparation",
                  ].map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 items-center text-xs sm:text-[13px] font-semibold text-slate-600 dark:text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3">
                <CTAButton
                  text="Prepare with an Expert"
                  href="/pricing#interview-services"
                  variant="blue"
                />
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/8 dark:bg-blue-500/4 rounded-full blur-3xl pointer-events-none -z-10" />
              <motion.div
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src="/services/interview-preparation/4.webp"
                  alt="Interview Preparation with Experts"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Wave Divider to Comparison */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none translate-y-[1px] z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[45px] md:h-[60px] fill-[#fafaff] dark:fill-[#0d0d24]"
          >
            <path d="M0,32L120,37.3C240,43,480,53,720,48C960,43,1200,21,1320,10.7L1440,0L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 4. WHICH SERVICE IS RIGHT FOR YOU (Comparison Table) */}
      <section className="py-24 bg-slate-50/30 dark:bg-slate-950/20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Comparison Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-indigo-950/50 text-[#3f3fe2] dark:text-indigo-400 text-xs font-bold tracking-wide border border-blue-100 dark:border-indigo-900/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-indigo-400" />
              <span>Comparison Matrix</span>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Which Service Is Right for You?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
              Find the perfect match for your preparation goals.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-700">
              <div className="col-span-7 px-8 py-5 text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                If You Want To...
              </div>
              <div className="col-span-5 px-8 py-5 text-sm font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Best Option
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 md:p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all duration-300 group">
                <div className="col-span-7 pr-4 mb-4 md:mb-0">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    If You Want To...
                  </span>
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100/50 dark:border-blue-900/30">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-[#3f3fe2] dark:group-hover:text-indigo-400 transition-colors">
                      Structure your answers and prepare strategically
                    </span>
                  </div>
                </div>
                <div className="col-span-5">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    Best Option
                  </span>
                  <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-blue-300 font-bold text-sm shadow-sm">
                    <GraduationCap className="w-4 h-4 shrink-0" />
                    <span>Interview Preparation with Experts</span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 md:p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all duration-300 group">
                <div className="col-span-7 pr-4 mb-4 md:mb-0">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    If You Want To...
                  </span>
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 border border-violet-100/50 dark:border-violet-900/30">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      Practice regularly and improve confidence
                    </span>
                  </div>
                </div>
                <div className="col-span-5">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    Best Option
                  </span>
                  <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-violet-50/80 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/40 text-violet-700 dark:text-violet-300 font-bold text-sm shadow-sm">
                    <Sparkles className="w-4 h-4 shrink-0 text-violet-500" />
                    <span>InterviewSarthi AI Practice</span>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 md:p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all duration-300 group">
                <div className="col-span-7 pr-4 mb-4 md:mb-0">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    If You Want To...
                  </span>
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100/50 dark:border-emerald-900/30">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Simulate a real interview environment
                    </span>
                  </div>
                </div>
                <div className="col-span-5">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    Best Option
                  </span>
                  <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold text-sm shadow-sm">
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>AI Mock Interview</span>
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 md:p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all duration-300 group">
                <div className="col-span-7 pr-4 mb-4 md:mb-0">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    If You Want To...
                  </span>
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-100/50 dark:border-amber-900/30">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Receive personalized human feedback
                    </span>
                  </div>
                </div>
                <div className="col-span-5">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 md:hidden">
                    Best Option
                  </span>
                  <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40 text-amber-700 dark:text-amber-300 font-bold text-sm shadow-sm">
                    <Crown className="w-4 h-4 shrink-0 text-amber-500" />
                    <span>Expert Mock Interview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE PREPARE YOU FOR (DARK THEMED - RESTORED REVERT EXCEPTION) */}
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              What We Prepare You For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "HR Interviews",
                desc: "Behavioral questions, communication clarity, confidence, and cultural fit preparation.",
                glowColor:
                  "group-hover:border-blue-500/30 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
              },
              {
                title: "Technical Interviews",
                desc: "Explaining technical concepts clearly, problem-solving communication, and technical depth preparation.",
                glowColor:
                  "group-hover:border-amber-500/30 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
              },
              {
                title: "Managerial Interviews",
                desc: "Leadership examples, stakeholder management, ownership communication, and decision-making preparation.",
                glowColor:
                  "group-hover:border-purple-500/30 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
              },
              {
                title: "Leadership Interviews",
                desc: "Strategic thinking, executive communication, business impact articulation, and leadership positioning.",
                glowColor:
                  "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-350 group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <h3 className="text-base font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
                {/* Visual border glow */}
                <div
                  className={`absolute inset-0 rounded-2xl border border-transparent pointer-events-none transition-all duration-300 ${item.glowColor}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TARGET AUDIENCE (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Wondering If Interview Preparation Services Are Right for You?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Our online interview preparation services are ideal for:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Fresh Graduates",
                desc: "Candidates preparing for their first professional interviews.",
                icon: GraduationCap,
                color: "text-indigo-650 bg-indigo-50 dark:bg-indigo-950/20",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals aiming for career growth, promotions, or role transitions.",
                icon: Briefcase,
                color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20",
              },
              {
                title: "Senior Professionals",
                desc: "Leaders preparing for managerial, strategic, or executive-level interviews.",
                icon: Award,
                color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/20",
              },
              {
                title: "Active Job Seekers",
                desc: "Professionals actively attending interviews and wanting better conversion results.",
                icon: TrendingUp,
                color: "text-emerald-650 bg-emerald-50 dark:bg-emerald-950/20",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fafaff] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex gap-4 hover:shadow-sm transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CTAButton text="Yes, Prepare Me for Interviews" href="/pricing#interview-services" />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE MYCAREERSARTHI? (Light Theme, Slate Background) */}
      <section className="py-24 md:py-28 lg:py-32 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center justify-center text-[10px] font-bold text-[#3f3fe2] uppercase tracking-wider bg-[#3f3fe2]/8 px-3.5 py-1 rounded-full border border-[#3f3fe2]/15 shadow-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Why Choose MyCareerSarthi?
              </h2>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#3f3fe2] dark:text-indigo-400">
                Most interview preparation services focus only on interview
                questions.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-justify">
                Our interview preparation combines AI-powered mock interviews,
                expert-led mock interview services, structured answer
                frameworks, and practical interview guidance to help
                professionals communicate their real experience effectively.
              </p>
              <div className="pt-2">
                <CTAButton
                  text="Start Interview Preparation"
                  href="https://interview.mycareersarthi.com"
                  variant="blue"
                />
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full aspect-[4/3] max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.04)]"
              >
                <Image
                  src="/services/interview-preparation/why-mcs.webp"
                  alt="Why MyCareerSarthi"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Light Theme) */}
      <section className="py-24 bg-white dark:bg-background relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0f172a] dark:text-white">
              Real Stories from Professionals Like You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Before MCS, I knew my work technically but struggled to explain it properly during interviews. The mock interview sessions completely changed my confidence.",
                author: "Verified Professional",
                tagColor:
                  "text-purple-600 bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/10",
              },
              {
                quote:
                  "The AI mock interview platform helped me practice difficult interview scenarios before my actual interviews. It felt surprisingly realistic.",
                author: "Software Engineering Candidate",
                tagColor:
                  "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-100 dark:border-cyan-900/10",
              },
              {
                quote:
                  "After restructuring my answers, I became much more confident while explaining my projects and leadership experience.",
                author: "Mid-Level Product Professional",
                tagColor:
                  "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/10",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${t.tagColor}`}
                  >
                    — {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/40 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0f172a] dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-2">
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
                  className="border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-bold text-[#0f172a] dark:text-white py-4.5 hover:no-underline text-sm md:text-base flex items-center justify-between gap-4 cursor-pointer">
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

      {/* 10. FINAL CTA (DARK THEMED - RESTORED REVERT EXCEPTION) */}
      <section className="py-24 md:py-32 lg:py-36 bg-[#070714]/95 backdrop-blur-md border-t border-white/5 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-white tracking-tight leading-[1.1]">
              Your Next Interview Shouldn't Be Left to Chance
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-bold">
              Practice better. Communicate better. Perform better.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto text-center">
              With InterviewSarthi AI and expert guidance, you'll walk into
              interviews with more confidence and clarity.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <CTAButton
              text="Start Interview Preparation"
              href="https://interview.mycareersarthi.com"
              variant="blue"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewPreparationContentPage;
