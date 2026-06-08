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
  Award,
  ShieldCheck,
  Star,
  Mic,
  GraduationCap,
  Briefcase,
  TrendingUp,
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
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.06),0_10px_25px_rgba(0,0,0,0.03)] relative z-10 w-full max-w-[500px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500">
                  {/* Top Bar of the console */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Sparkles className="w-3.5 h-3.5 text-[#3f3fe2]" />
                      <span>InterviewSarthi AI Active</span>
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

                  {/* Split body layout of the console */}
                  <div className="grid grid-cols-12 gap-5">
                    {/* Left: Candidate Portrait image */}
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

                    {/* Right: Feedback parameters */}
                    <div className="col-span-6 flex flex-col justify-between py-0.5 gap-3">
                      <div className="bg-[#fafaff] dark:bg-slate-950 border border-slate-100 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
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
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950 border border-slate-100 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
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
                      </div>

                      <div className="bg-[#fafaff] dark:bg-slate-950 border border-slate-100 dark:border-slate-900 p-3 rounded-xl flex flex-col gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
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
                      </div>
                    </div>
                  </div>

                  {/* Bottom Speech Visualizer Waveform */}
                  <div className="bg-[#fcfcff] dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-3 mt-5 flex items-center justify-between gap-3 shadow-inner">
                    <div className="w-9 h-9 rounded-full bg-[#3f3fe2] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Mic className="w-4 h-4" />
                    </div>

                    <div className="flex-1 flex items-end gap-0.75 h-6 px-2 justify-center">
                      {[
                        12, 18, 26, 14, 34, 22, 28, 18, 36, 30, 14, 24, 30, 18,
                        34, 28, 14, 22, 30, 18, 36, 22, 16, 12,
                      ].map((h, i) => (
                        <span
                          key={i}
                          className="w-0.75 bg-[#3f3fe2] rounded-full"
                          style={{ height: `${h * 2.5}%` }}
                        />
                      ))}
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

      {/* 2. MINDSET SHIFT SECTION (Dark Theme from Demo UI) */}
      <section className="relative w-full bg-slate-900 text-gray-100 py-16 md:py-24 overflow-hidden selection:bg-indigo-500/30">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
            {/* Left Content Column */}
            <div className="w-full lg:w-[42%] flex flex-col items-center lg:items-start text-center lg:text-left z-20">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-purple-950/40 text-purple-300 border border-purple-900/50 mb-5">
                Beyond Memorization
              </div>

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
                <div className="absolute inset-0 pointer-events-none select-none z-0 flex flex-col justify-center items-center overflow-hidden">
                  <div className="italic font-medium text-purple-300/[0.07] text-[6.5vw] tracking-wider leading-none -translate-y-[25%] -translate-x-[5%] font-serif">
                    Interviewers
                  </div>
                  <div className="italic font-medium text-purple-300/[0.07] text-[9.5vw] tracking-wider leading-none -translate-y-[15%] translate-x-[10%] font-serif">
                    evaluate
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[65%] z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none z-0" />
                  <img
                    src="/boy.png"
                    alt="Candidate preparing for interview"
                    className="relative z-10 w-full h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] object-contain select-none pointer-events-none"
                  />
                </div>
                <div className="absolute inset-0 w-full h-full z-20">
                  <div
                    className="absolute top-[10%] left-0 w-[210px] xl:w-[240px] animate-reveal"
                    style={{ animationDelay: "200ms" }}
                  >
                    <div className="glass-card flex items-start gap-3 p-3.5 rounded-2xl animate-float-1">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-900/60 text-purple-400">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                      <div>
                        <h4 className="text-purple-300 font-semibold text-sm tracking-wide">
                          Communication
                        </h4>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          Can they express ideas clearly?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[16%] right-0 w-[210px] xl:w-[240px] animate-reveal"
                    style={{ animationDelay: "400ms" }}
                  >
                    <div className="glass-card flex items-start gap-3 p-3.5 rounded-2xl animate-float-2">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-amber-950/60 border border-amber-900/60 text-amber-400">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                      <div>
                        <h4 className="text-amber-300 font-semibold text-sm tracking-wide">
                          Leadership
                        </h4>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          Can they lead and inspire others?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[42%] left-[-12px] w-[210px] xl:w-[240px] animate-reveal"
                    style={{ animationDelay: "600ms" }}
                  >
                    <div className="glass-card flex items-start gap-3 p-3.5 rounded-2xl animate-float-3">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-900/60 text-blue-400">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                      <div>
                        <h4 className="text-blue-300 font-semibold text-sm tracking-wide">
                          Clarity
                        </h4>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          Can they structure their thoughts?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-[46%] right-[-12px] w-[210px] xl:w-[240px] animate-reveal"
                    style={{ animationDelay: "800ms" }}
                  >
                    <div className="glass-card flex items-start gap-3 p-3.5 rounded-2xl animate-float-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-teal-950/60 border border-teal-900/60 text-teal-400">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" />
                          <path d="M12 12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z" />
                          <path d="M6 12a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-teal-300 font-semibold text-sm tracking-wide">
                          Problem-solving
                        </h4>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          How do they approach real-world problems?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[10%] left-0 w-[210px] xl:w-[240px] animate-reveal"
                    style={{ animationDelay: "1000ms" }}
                  >
                    <div className="glass-card flex items-start gap-3 p-3.5 rounded-2xl animate-float-5">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-900/60 text-emerald-400">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                      <div>
                        <h4 className="text-emerald-300 font-semibold text-sm tracking-wide">
                          Ownership
                        </h4>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          Do they take initiative and own outcomes?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[10%] right-0 w-[210px] xl:w-[240px] animate-reveal"
                    style={{ animationDelay: "1200ms" }}
                  >
                    <div className="glass-card flex items-start gap-3 p-3.5 rounded-2xl animate-float-6">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-rose-950/60 border border-rose-900/60 text-rose-400">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-rose-300 font-semibold text-sm tracking-wide">
                          Confidence
                        </h4>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          Do they show confidence in their abilities?
                        </p>
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
                    src="/boy.png"
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
                        <p className="text-gray-500 text-[9px] mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Our Services
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-base font-medium">
              We offer comprehensive, tailored preparation methods designed to
              build your skills and confidence.
            </p>
          </div>

          <div className="space-y-28 max-w-7xl mx-auto">
            {/* Service 1 - Text Left, Image Right */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center justify-center text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900/30">
                  Strategy
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  1. Interview Preparation with Experts
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#3f3fe2] dark:text-indigo-400">
                  Build Your Interview Strategy Before You Face the Interview
                </p>
                <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  We also help you structure your answers using proven
                  frameworks so that your achievements sound clear, concise, and
                  impactful.
                </p>

                <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-6">
                  <p className="text-xs uppercase font-extrabold tracking-widest text-slate-800 dark:text-slate-200 mb-3">
                    Benefits
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Better answer structure",
                      "Stronger confidence",
                      "Improved storytelling",
                      "Clear impact communication",
                      "Role-specific preparation",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 items-center text-sm font-semibold text-slate-600 dark:text-slate-300"
                      >
                        <Check className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <CTAButton text="Prepare with an Expert" href="/pricing" />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center relative">
                {/* Soft backdrop glow behind illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px]">
                  <Image
                    src="/illustrations/experts.svg"
                    alt="Interview Preparation with Experts"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Service 2 - Image Left, Text Right */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative">
                {/* Soft backdrop glow behind illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3f3fe2]/5 dark:bg-[#3f3fe2]/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px]">
                  <Image
                    src="/illustrations/questions.svg"
                    alt="Practice Interviews with InterviewSarthi"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="inline-flex items-center justify-center text-[10px] font-black text-[#3f3fe2] uppercase tracking-widest bg-[#3f3fe2]/5 px-3 py-1 rounded-full border border-[#3f3fe2]/10">
                  Practice
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  2. Practice Interviews with InterviewSarthi
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#3f3fe2] dark:text-indigo-400">
                  Practice Before the Real Interview
                </p>
                <div className="space-y-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  <p>InterviewSarthi AI is your personal interview coach.</p>
                  <div className="space-y-1">
                    <p>Practice unlimited interview questions based on:</p>
                    <ul className="list-disc pl-5 space-y-0.5 mt-1 font-semibold text-slate-600 dark:text-slate-300">
                      <li>Target role</li>
                      <li>Experience level</li>
                      <li>Industry</li>
                      <li>Job description</li>
                    </ul>
                  </div>
                  <p>
                    Receive instant feedback after every answer and continuously
                    improve.
                  </p>
                </div>

                <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-6">
                  <p className="text-xs uppercase font-extrabold tracking-widest text-slate-800 dark:text-slate-200 mb-3">
                    Benefits
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Build confidence",
                      "Reduce interview anxiety",
                      "Improve communication",
                      "Practice anytime",
                      "Learn at your own pace",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 items-center text-sm font-semibold text-slate-600 dark:text-slate-300"
                      >
                        <Check className="w-4.5 h-4.5 text-[#3f3fe2] shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <CTAButton
                    text="Start Practicing"
                    href="https://interview.mycareersarthi.com"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 - Text Left, Image Right */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center justify-center text-[10px] font-black text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100 dark:border-purple-900/30">
                  AI Simulation
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  3. AI Mock Interview with InterviewSarthi
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#3f3fe2] dark:text-indigo-400">
                  Experience a Real Interview Before the Actual One
                </p>
                <div className="space-y-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  <div className="space-y-1">
                    <p>
                      InterviewSarthi simulates an actual interview environment
                      and evaluates:
                    </p>
                    <ul className="list-disc pl-5 space-y-0.5 mt-1 font-semibold text-slate-600 dark:text-slate-300">
                      <li>Communication</li>
                      <li>Confidence</li>
                      <li>Answer quality</li>
                      <li>Clarity</li>
                      <li>Technical depth</li>
                    </ul>
                  </div>
                  <p>
                    You'll receive a detailed performance report highlighting
                    strengths and areas for improvement.
                  </p>
                </div>

                <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-6">
                  <p className="text-xs uppercase font-extrabold tracking-widest text-slate-800 dark:text-slate-200 mb-3">
                    Benefits
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Real interview simulation",
                      "Objective evaluation",
                      "Performance score",
                      "Detailed feedback",
                      "Role-specific assessment",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 items-center text-sm font-semibold text-slate-600 dark:text-slate-300"
                      >
                        <Check className="w-4.5 h-4.5 text-purple-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <CTAButton
                    text="Start AI Mock Interview"
                    href="https://interview.mycareersarthi.com"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center relative">
                {/* Soft backdrop glow behind illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px]">
                  <Image
                    src="/illustrations/artificial_intelligence.svg"
                    alt="AI Mock Interview with InterviewSarthi"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Service 4 - Image Left, Text Right */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative">
                {/* Soft backdrop glow behind illustration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="relative w-full aspect-[4/3] max-w-[320px] md:max-w-[380px]">
                  <Image
                    src="/illustrations/interview.svg"
                    alt="Mock Interview with Experts"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="inline-flex items-center justify-center text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30">
                  Expert Review
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  4. Mock Interview with Experts
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#3f3fe2] dark:text-indigo-400">
                  Get Feedback from Someone Who Has Interviewed Candidates
                </p>
                <div className="space-y-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  <div className="space-y-1">
                    <p>
                      Our experienced interviewers conduct realistic mock
                      interviews and provide detailed feedback on:
                    </p>
                    <ul className="list-disc pl-5 space-y-0.5 mt-1 font-semibold text-slate-600 dark:text-slate-300">
                      <li>Answer quality</li>
                      <li>Leadership examples</li>
                      <li>Technical depth</li>
                      <li>Communication</li>
                      <li>Confidence</li>
                      <li>Overall interview readiness</li>
                    </ul>
                  </div>
                  <p>
                    You receive actionable recommendations to help you improve
                    before the actual interview.
                  </p>
                </div>

                <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-6">
                  <p className="text-xs uppercase font-extrabold tracking-widest text-slate-800 dark:text-slate-200 mb-3">
                    Benefits
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Human feedback",
                      "Personalized guidance",
                      "Industry insights",
                      "Stronger interview readiness",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 items-center text-sm font-semibold text-slate-600 dark:text-slate-300"
                      >
                        <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <CTAButton
                    text="Book Expert Mock Interview"
                    href="/pricing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHICH SERVICE IS RIGHT FOR YOU (Comparison Table) */}
      <section className="py-24 bg-slate-50/30 dark:bg-slate-950/20 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Comparison Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-indigo-950/50 text-[#3f3fe2] dark:text-indigo-400 text-xs font-bold tracking-wide border border-blue-100 dark:border-indigo-900/30">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <span>Comparison</span>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Which Service Is Right for You?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
              Compare our offerings to find the perfect fit for your career
              stage.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[20px] border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#3f3fe2] text-white">
                  <th className="px-6 py-5 font-bold text-left text-sm tracking-wide rounded-tl-[19px]">
                    Feature
                  </th>
                  <th className="px-6 py-5 font-bold text-center text-sm tracking-wide">
                    Expert Prep
                  </th>
                  <th className="px-6 py-5 font-bold text-center text-sm tracking-wide">
                    AI Practice
                  </th>
                  <th className="px-6 py-5 font-bold text-center text-sm tracking-wide">
                    AI Mock
                  </th>
                  <th className="px-6 py-5 font-bold text-center text-sm tracking-wide rounded-tr-[19px]">
                    Expert Mock
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Row 1: Personalized Feedback */}
                <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-colors">
                  <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-300">
                    Personalized Feedback
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CrossCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                </tr>
                {/* Row 2: Available 24/7 */}
                <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-colors">
                  <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-300">
                    Available 24/7
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CrossCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CrossCircleIcon />
                  </td>
                </tr>
                {/* Row 3: Industry Expert */}
                <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-colors">
                  <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-300">
                    Industry Expert
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CrossCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CrossCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                </tr>
                {/* Row 4: Performance Report */}
                <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-colors">
                  <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-300">
                    Performance Report
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <CheckCircleIcon />
                  </td>
                </tr>
                {/* Row 5: Best For */}
                <tr className="hover:bg-slate-50/40 dark:hover:bg-slate-900/10 transition-colors">
                  <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-300">
                    Best For
                  </td>
                  <td className="px-6 py-5 text-center font-semibold text-slate-500 dark:text-slate-400">
                    Senior roles
                  </td>
                  <td className="px-6 py-5 text-center font-semibold text-slate-500 dark:text-slate-400">
                    Daily practice
                  </td>
                  <td className="px-6 py-5 text-center font-semibold text-slate-500 dark:text-slate-400">
                    Freshers
                  </td>
                  <td className="px-6 py-5 text-center font-semibold text-slate-500 dark:text-slate-400">
                    Final round
                  </td>
                </tr>
              </tbody>
            </table>
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
            <CTAButton text="Yes, Prepare Me for Interviews" href="/pricing" />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE MYCAREERSARTHI? (Light Theme, Slate Background) */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 relative border-t border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              <div className="md:col-span-7 space-y-6 text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Why Choose MyCareerSarthi?
                </h2>
                <p className="text-xs uppercase font-extrabold tracking-widest text-[#3f3fe2] dark:text-indigo-400">
                  Most interview preparation services focus only on interview
                  questions.
                </p>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Our interview preparation combines AI-powered mock interviews,
                  expert-led mock interview services, structured answer
                  frameworks, and practical interview guidance to help
                  professionals communicate their real experience effectively.
                </p>
                <div className="pt-2">
                  <CTAButton
                    text="Start Interview Preparation"
                    href="https://interview.mycareersarthi.com"
                  />
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full aspect-[4/3] max-w-[280px] min-h-[200px]">
                  <Image
                    src="/illustrations/career_progress.svg"
                    alt="Career Progress"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
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
      <section className="py-24 bg-[#070714] text-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 md:p-14 border border-white/5 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none -z-10" />

            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Your Next Interview Shouldn't Be Left to Chance
              </h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-bold">
                Practice better. Communicate better. Perform better.
              </p>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">
                With InterviewSarthi AI and expert guidance, you'll walk into
                interviews with more confidence and clarity.
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <CTAButton
                text="Start Interview Preparation"
                href="https://interview.mycareersarthi.com"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewPreparationContentPage;
