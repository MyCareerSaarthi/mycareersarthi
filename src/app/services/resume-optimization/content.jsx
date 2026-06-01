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
    className="group rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
    asChild
  >
    <Link href={href}>{text}</Link>
  </Button>
);

const ResumeOptimizationContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-14 md:pb-18 lg:pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-70 animate-pulse -z-10" />
        <div className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-60 -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs md:text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  <span>Resume Optimization Services</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Build a recruiter-ready resume to unlock 10X more
                  opportunities
                </h1>

                <div className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
                  <p>
                    Recruiters spend less than 10 seconds scanning most resumes.
                    And before your resume even reaches a recruiter, ATS systems
                    often filter it first.
                  </p>
                  <p className="font-semibold text-foreground bg-primary/5 border border-primary/10 rounded-xl px-4 py-3">
                    At MyCareerSarthi, our Resume Optimization Services help
                    professionals build ATS-friendly, recruiter-ready, and
                    role-aligned resumes designed to improve visibility,
                    increase shortlisting chances, and generate better interview
                    opportunities.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <CTAButton text="Yes, I want a recruiter-ready resume makeover →" />
                </div>
              </motion.div>

              {/* Right Image / Graphic representation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card p-4">
                  <Image
                    src="/scoring/resume_report.webp"
                    alt="Resume Optimization Analysis"
                    width={600}
                    height={450}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      <span className="text-sm font-semibold text-foreground">
                        ATS Match Verified
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS RESUME OPTIMIZATION? */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                So, What Exactly is Resume Optimization?
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Resume optimization is the process of strategically improving
                  your resume so recruiters and ATS systems can quickly
                  understand your experience, skills, impact, and role
                  relevance.
                </p>
                <p>Because today, resumes are not just read by recruiters.</p>
                <p className="font-semibold text-foreground">
                  They are first scanned by Applicant Tracking Systems (ATS)
                  that evaluate resumes based on keywords, structure,
                  formatting, and job relevance before they even reach human
                  recruiters.
                </p>
                <p>
                  Which means even highly experienced professionals can get
                  filtered out if their resumes are not properly optimized.
                </p>
                <p className="text-primary font-bold">
                  That is why our professional resume writing service focuses on
                  both ATS optimization and recruiter readability to improve
                  shortlisting and interview opportunities.
                </p>
              </div>

              <div className="flex justify-center">
                <CTAButton text="Optimize My Resume Strategically →" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MOST RESUMES DON'T FAIL BECAUSE OF LACK OF EXPERIENCE */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Most Resumes Don’t Fail Because of Lack of Experience
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="font-semibold text-destructive">
                  They fail because they fail to communicate value clearly.
                </p>
                <p>
                  Most professionals write resumes like internal company
                  documents. They list responsibilities, tools, daily tasks, and
                  generic descriptions, assuming recruiters will automatically
                  understand their contribution.
                </p>
                <p className="font-bold text-foreground">
                  But recruiters are not looking for task lists.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-3">
                    They are trying to quickly understand:
                  </p>
                  <ul className="space-y-2 pl-2">
                    {[
                      "what impact you created",
                      "what ownership you handled",
                      "how your work contributed to business outcomes",
                      "whether your experience matches the role",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-sm font-semibold capitalize"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted border border-border/80 rounded-xl p-5 space-y-4">
                  <p className="text-xs uppercase font-bold text-muted-foreground tracking-wider">
                    The Difference is Instant:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-background border border-destructive/20 p-3 rounded-lg">
                      <p className="text-xs text-destructive uppercase font-bold mb-1">
                        Standard Task List
                      </p>
                      <p className="text-sm italic">“Handled operations.”</p>
                    </div>
                    <div className="bg-background border border-green-500/30 p-3 rounded-lg">
                      <p className="text-xs text-green-600 uppercase font-bold mb-1">
                        Quantifiable Impact
                      </p>
                      <p className="text-sm italic">
                        “Reduced operational turnaround time by 32% through
                        process optimization.”
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    …completely changes how recruiters evaluate your profile.
                  </p>
                </div>

                <p className="text-foreground font-semibold">
                  A strong resume does not just explain what you did. It
                  positions your professional value strategically.
                </p>
              </div>

              <CTAButton text="Optimize My Resume Strategically →" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-2xl relative z-10">
                <div className="relative rounded-2xl overflow-hidden min-h-[350px] bg-muted/10 flex flex-col justify-between p-6">
                  {/* Visual Dashboard representing resume parser output */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
                        Impact Communication Diagnostic
                      </span>
                      <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
                    </div>

                    <div className="space-y-3">
                      <div className="bg-background border border-border rounded-xl p-4">
                        <p className="text-xs text-muted-foreground uppercase font-bold mb-1">
                          Task-Based Phrase
                        </p>
                        <p className="text-sm font-semibold line-through text-muted-foreground">
                          “Responsible for managing the team and daily
                          projects.”
                        </p>
                      </div>

                      <div className="bg-background border border-primary/20 rounded-xl p-4">
                        <p className="text-xs text-primary uppercase font-bold mb-1">
                          MCS Rewritten Version
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          “Led a 12-member engineering unit; drove Agile
                          delivery schedules ahead of deadlines by 18%.”
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Recruiter Engagement Score</span>
                    <span className="font-semibold text-green-600">
                      Excellent (+92%)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ATS SYSTEMS REJECT THOUSANDS */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ATS Systems Reject Thousands of Resumes Every Day
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Most companies today use ATS software to filter resumes before
              recruiters review them manually.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <p className="font-semibold text-lg mb-6 text-foreground/85">
              These systems scan resumes for:
            </p>

            <ul className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                "relevant keywords",
                "role alignment",
                "technical skills",
                "formatting",
                "industry relevance",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 bg-background p-3 rounded-lg border border-border/80"
                >
                  <div className="p-1 rounded-full bg-primary/10 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground font-semibold text-xs capitalize">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/60 pt-6 space-y-4">
              <p className="text-base text-muted-foreground font-medium">
                So if your resume lacks important keywords, is poorly
                structured, is difficult to scan, or is not aligned to the
                target role… it may never even reach the recruiter.
              </p>
              <p className="text-lg font-bold text-foreground">
                That is why ATS optimization has become one of the most
                important parts of modern resume writing.
              </p>
              <p className="text-foreground bg-primary/5 p-4 rounded-xl border border-primary/20 text-sm font-semibold">
                Our Resume Optimization Services combine AI-powered ATS analysis
                with recruiter-focused optimization to help your resume perform
                better with both: ATS systems and human recruiters.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Get ATS Resume Analysis →" />
          </div>
        </div>
      </section>

      {/* 5. ONE RESUME DOESN'T FIT EVERY JOB */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                One Resume Doesn’t Fit Every Job
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  One of the biggest mistakes professionals make is using the
                  same resume for every application.
                </p>
                <p className="font-semibold text-foreground">
                  Different roles prioritize different skills, keywords,
                  achievements, and experience.
                </p>
                <p>
                  A Product Manager resume cannot be positioned the same way as
                  a Marketing, Operations, Leadership, or Technical resume.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-3">
                    That is why our resume writing services in India focus on
                    role-specific optimization based on your:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 pl-2">
                    {[
                      "target role",
                      "industry",
                      "experience level",
                      "career direction",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-sm font-semibold capitalize"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold">
                  Because stronger alignment improves recruiter relevance, ATS
                  matching, and interview conversion.
                </p>
              </div>
            </motion.div>

            {/* Graphic Representation instead of simple image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-2xl relative z-10">
                <div className="relative rounded-2xl overflow-hidden min-h-[350px] bg-muted/10 flex flex-col justify-between p-6">
                  {/* Dynamic target dashboard */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                        Target Role Optimization Map
                      </span>
                      <span className="text-xs font-bold text-primary">
                        Role Specific
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background border border-border rounded-xl p-3">
                        <p className="text-xs text-muted-foreground font-bold uppercase mb-1">
                          Generalist Resume
                        </p>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-amber-500 w-[45%]" />
                        </div>
                        <span className="text-[10px] text-amber-500 font-bold block mt-1">
                          45% ATS Matching
                        </span>
                      </div>

                      <div className="bg-background border border-primary/20 rounded-xl p-3">
                        <p className="text-xs text-primary font-bold uppercase mb-1">
                          Target Optimized Resume
                        </p>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-green-500 w-[95%]" />
                        </div>
                        <span className="text-[10px] text-green-500 font-bold block mt-1">
                          95% ATS Matching
                        </span>
                      </div>
                    </div>

                    <div className="bg-background border border-border rounded-xl p-4">
                      <p className="text-xs text-muted-foreground uppercase font-bold mb-1">
                        Resume Optimization Dashboard
                      </p>
                      <Image
                        src="/scoring/resume_report.webp"
                        alt="Resume Report Diagnostic Visual"
                        width={400}
                        height={120}
                        className="w-full h-auto rounded-lg border border-border mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. GET RECRIUTER READY IN 3 STEPS */}
      <section className="py-24 bg-muted/40 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get a Recruiter-Ready Resume in 3 Structured Steps
            </h2>
          </motion.div>

          <div className="space-y-12 mb-16 relative">
            <div className="absolute left-[27px] md:left-1/2 md:-ml-px top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            {[
              {
                num: "1",
                title: "1. AI Resume & ATS Analysis",
                desc: "We begin by analyzing your resume against your target role or job description to identify:",
                subText: "We identify:",
                items: [
                  "ATS compatibility gaps",
                  "missing keywords",
                  "weak positioning",
                  "readability issues",
                  "role alignment problems",
                ],
                icon: BarChart3,
              },
              {
                num: "2",
                title: "2. Resume Diagnostic Review",
                desc: "Once the ATS analysis is complete, our experts evaluate your resume based on target structures.",
                subText: "Our experts evaluate your resume based on:",
                items: [
                  "recruiter expectations",
                  "hiring patterns",
                  "industry standards",
                  "role-specific positioning",
                ],
                icon: Search,
              },
              {
                num: "3",
                title: "3. Resume Optimization & Strategic Rewriting",
                desc: "We then strategically optimize and rewrite your resume to improve final outcomes.",
                subText:
                  "We strategically optimize and rewrite your resume to improve:",
                items: [
                  "ATS performance",
                  "recruiter readability",
                  "keyword relevance",
                  "achievement communication",
                  "professional positioning",
                  "role alignment",
                ],
                icon: FileText,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className={`md:w-1/2 flex ${idx % 2 === 1 ? "md:justify-start" : "md:justify-end"} w-full`}
                >
                  <div className="bg-card border border-border/50 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow relative w-full group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2.5 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out" />

                    <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-foreground">
                      <span className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {step.num}
                      </span>
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-base md:text-lg">
                      {step.desc}
                    </p>

                    {step.subText && (
                      <p className="text-sm font-bold mb-2 text-foreground/80">
                        {step.subText}
                      </p>
                    )}

                    {step.items.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                        {step.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="capitalize">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="hidden md:flex relative z-10 w-14 h-14 bg-background border-4 border-primary rounded-full items-center justify-center shadow-lg">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Recruiter-Ready Resume →" />
          </div>
        </div>
      </section>

      {/* 7. WHY RESUME OPTIMIZATION MATTERS MORE THAN EVER */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Resume Optimization Matters More Than Ever
            </h2>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Recruiters today review hundreds of resumes for a single role.
              They do not read resumes in detail initially. They scan.
            </p>
            <p className="font-semibold text-foreground mb-6">
              They quickly look for:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "role relevance",
                "impact",
                "keywords",
                "measurable outcomes",
                "clarity",
                "leadership",
                "technical alignment",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-muted-foreground font-semibold text-base capitalize">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/60 pt-6 space-y-4">
              <p className="text-base text-muted-foreground font-medium">
                If your resume cannot communicate value within seconds,
                recruiters simply move on to the next application.
              </p>
              <p className="text-lg font-bold text-foreground">
                That is why resume optimization today directly impacts:
              </p>

              <ul className="grid sm:grid-cols-2 gap-2 pl-4">
                {[
                  "recruiter visibility",
                  "ATS performance",
                  "shortlisting chances",
                  "interview opportunities",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm font-semibold capitalize text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-bold text-foreground bg-primary/5 p-4 rounded-xl border border-primary/20">
                And that is exactly why a professionally optimized resume
                matters more than ever in today’s hiring market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WONDERING IF RIGHT FOR YOU */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Wondering If Resume Optimization Services Are Right for You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our professional resume writing service is designed for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
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
                desc: "Professionals struggling with low interview callbacks despite relevant experience.",
                icon: Search,
                color: "text-rose-500",
                bg: "bg-rose-500/10",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300 hover:shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <CTAButton text="Yes, Optimize My Resume →" />
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE MYCAREERSARTHI */}
      <section className="py-24 bg-muted/40 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose MyCareerSarthi?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="font-semibold text-primary">
                  Most resume writing services focus only on formatting resumes.
                </p>
                <p className="font-bold text-foreground">We focus on:</p>
                <ul className="grid grid-cols-2 gap-2 pl-2">
                  {[
                    "ATS optimization",
                    "recruiter psychology",
                    "keyword strategy",
                    "role positioning",
                    "achievement communication",
                    "interview alignment",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 items-center text-sm font-semibold capitalize text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border/60 pt-6 space-y-4">
                  <p className="text-base text-muted-foreground">
                    Our Resume Optimization Services combine:
                  </p>

                  <ul className="grid grid-cols-2 gap-2 pl-2">
                    {[
                      "AI-powered ATS analysis",
                      "recruiter-aware positioning",
                      "strategic rewriting",
                      "role-specific optimization",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-sm font-semibold capitalize text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-foreground font-bold border-l-4 border-primary pl-4 py-2">
                    to help professionals build resumes that are designed not
                    just to look good…… but to perform better in real hiring
                    environments.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[450px] flex items-center justify-center bg-card/60 backdrop-blur-sm rounded-3xl border border-border shadow-2xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

              <div className="grid grid-cols-2 gap-4 w-full h-full max-h-[350px] relative z-10">
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform translate-y-2 hover:-translate-y-1 transition-transform">
                  <div className="p-2.5 bg-blue-500/10 rounded-full text-blue-500">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">ATS Optimization</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-2 hover:-translate-y-5 transition-transform">
                  <div className="p-2.5 bg-amber-500/10 rounded-full text-amber-500">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Recruiter Psychology</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform translate-y-1 hover:-translate-y-2 transition-transform">
                  <div className="p-2.5 bg-purple-500/10 rounded-full text-purple-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Role Positioning</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-4 hover:-translate-y-7 transition-transform">
                  <div className="p-2.5 bg-green-500/10 rounded-full text-green-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Interview Alignment</h4>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold w-16 h-16 rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center">
                  MCS
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. REAL STORIES */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Real Stories from Professionals Like You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative group flex flex-col justify-between"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-base mb-8 leading-relaxed italic text-foreground/90 font-semibold">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 bg-primary/10 text-primary font-bold rounded-full flex items-center justify-center text-base shrink-0">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm">Verified Professional</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Build My Recruiter-Ready Resume →" />
          </div>
        </div>
      </section>

      {/* 11. FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
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
                  className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResumeOptimizationContentPage;
