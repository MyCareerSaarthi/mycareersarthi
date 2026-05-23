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
  Shield
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({ text, href = "/contact-us" }) => (
  <Button size="lg" className="group rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5" asChild>
    <Link href={href}>
      {text}
    </Link>
  </Button>
);

const InterviewPreparationContentPage = () => {
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
                  <span>Interview Preparation Services</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Crack Interviews with 1:1 AI Mock Interviews, Structured Answers & Expert Feedback
                </h1>

                <div className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 space-y-4">
                  <p>
                    Companies are thinking about customers, revenue, profitability, cost cutting, and AI adoption. But what about your career?
                  </p>
                  <p className="font-semibold text-foreground bg-primary/5 border border-primary/10 rounded-xl px-4 py-3">
                    After working with professionals across industries, we noticed the same pattern again and again — capable professionals struggling in interviews not because they lacked experience, but because they struggled to communicate their value clearly. Today, interviews are no longer simple question-answer rounds. Recruiters evaluate your communication, confidence, clarity, ownership, and decision-making within minutes.
                  </p>
                  <p className="text-primary font-bold">
                    And that is exactly why interview preparation matters more than ever.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <CTAButton text="Start Interview Preparation" />
                </div>
              </motion.div>

              {/* Right Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="relative w-full max-w-md bg-card border border-border/50 p-6 rounded-3xl shadow-2xl">
                  <Image
                    src="/services/interview-preparation.svg"
                    alt="Interview Preparation Illustration"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute bottom-8 left-0 bg-background border border-border rounded-xl px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Interview Ready</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SO, WHAT EXACTLY IS INTERVIEW PREPARATION? */}
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
                So, What Exactly is Interview Preparation?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                Interview preparation is the process of preparing candidates to communicate their experience, achievements, skills, and problem-solving ability effectively during interviews.
              </p>

              <div className="bg-background border border-border/50 rounded-2xl p-6 md:p-8 mb-8">
                <p className="font-semibold text-foreground mb-4">
                  Most professionals think interviews are about giving the “right answers.” But interviews today are actually testing how clearly you think, how confidently you communicate, how well you explain your work, and how effectively you demonstrate ownership and impact.
                </p>
                <p className="text-muted-foreground text-sm font-semibold mb-4">
                  Our online interview preparation services help candidates prepare for:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "HR interviews",
                    "technical interviews",
                    "managerial interviews",
                    "leadership interviews"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      </div>
                      <span className="text-muted-foreground text-sm font-semibold capitalize">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed mb-10 text-center">
                <p>
                  through structured preparation, mock interviews, and realistic interview practice.
                </p>
              </div>

              <div className="flex justify-center">
                <CTAButton text="Start Interview Preparation" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MOST CANDIDATES PREPARE THE WRONG WAY */}
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
                Most Candidates Prepare for Interviews the Wrong Way
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Most professionals prepare for interviews by googling common interview questions, memorising answers, or watching random interview videos online.
                </p>
                <p className="font-semibold text-destructive">
                  And that becomes their biggest mistake.
                </p>
                <p>
                  Because interviews are not memory tests.
                </p>
                <p className="text-foreground font-semibold">
                  Two candidates may have similar experience, but the candidate who communicates more clearly, structures answers better, and explains impact confidently usually gets selected.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-3">This is why many professionals leave interviews feeling:</p>
                  <ul className="space-y-2 pl-2">
                    {[
                      "“I knew the answer, but I couldn’t explain it properly.”",
                      "“My answers became too long.”",
                      "“I forgot important points under pressure.”",
                      "“I struggled during follow-up questions.”"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-sm font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  The problem is rarely lack of experience. The problem is lack of structured interview preparation.
                </p>
              </div>
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
                  {/* Visual representation */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground">Preparation Method Efficiency</span>
                      <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
                    </div>

                    <div className="space-y-4">
                      <div className="bg-background border border-border rounded-xl p-4">
                        <p className="text-sm font-bold text-muted-foreground uppercase mb-1">Memorization Strategy</p>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-amber-500 w-[30%]" />
                        </div>
                        <span className="text-xs text-amber-500 font-bold block mt-1">30% Interview Cleared</span>
                      </div>

                      <div className="bg-background border border-primary/20 rounded-xl p-4">
                        <p className="text-sm font-bold text-foreground uppercase mb-1">Structured Answer Mapping</p>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-green-500 w-[95%]" />
                        </div>
                        <span className="text-xs text-green-600 font-bold block mt-1">95% Interview Cleared</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. I KNOW THE ANSWER BUT COULDN'T EXPLAIN IT */}
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
              “I Know the Answer… But I Couldn’t Explain It Properly.”
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              You walk into interviews with good experience and solid technical knowledge.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <p className="font-semibold text-lg mb-6 text-foreground/85">
              But during the interview:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "your answers become scattered",
                "your achievements sound vague",
                "your confidence drops",
                "your examples lose impact",
                "your communication becomes unclear"
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
                Meanwhile, another candidate with lesser experience but stronger communication clears the interview.
              </p>
              <p className="text-lg font-bold text-foreground">
                Because interviews are not just evaluating your work. They are evaluating how professionally you communicate your work.
              </p>
              <p className="text-foreground bg-primary/5 p-4 rounded-xl border border-primary/20">
                At MyCareerSarthi, our job interview preparation service helps professionals structure their communication in a way interviewers immediately understand and value.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Yes, I Want to Prepare Strategically" />
          </div>
        </div>
      </section>

      {/* 5. GET INTERVIEW READY IN 4 STEPS (TIMELINE) */}
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
              Get Interview-Ready in 4 Structured Steps
            </h2>
          </motion.div>

          <div className="space-y-12 mb-16 relative">
            <div className="absolute left-[27px] md:left-1/2 md:-ml-px top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            {[
              {
                num: "1",
                title: "1. Interview Readiness Assessment",
                desc: "We first evaluate your current interview readiness.",
                subText: "This helps us identify:",
                items: [
                  "where interviews are breaking down",
                  "which questions create difficulty",
                  "whether the challenge is communication, clarity, confidence, or positioning"
                ],
                finalText: "Because interview problems are rarely random. There is always a pattern behind them.",
                icon: BarChart3,
              },
              {
                num: "2",
                title: "2. Role-Specific Interview Preparation",
                desc: "So your preparation becomes role-specific instead of generic.",
                subText: "We help you understand:",
                items: [
                  "what interviewers expect at your level",
                  "what skills are being evaluated",
                  "how companies assess candidates",
                  "what interviewers actually want to hear"
                ],
                finalText: "",
                icon: Target,
              },
              {
                num: "3",
                title: "3. Structured Answer & Story Preparation",
                desc: "We help you structure your answers to clearly communicate critical achievements.",
                subText: "We help you structure your answers to clearly communicate:",
                items: [
                  "ownership",
                  "impact",
                  "decision-making",
                  "problem-solving",
                  "leadership",
                  "measurable outcomes"
                ],
                finalText: "Instead of saying: “I handled multiple projects.” You learn how to say: “I led a cross-functional initiative that improved operational efficiency by 20% while coordinating between product, analytics, and operations teams.” That difference changes interviews completely.",
                icon: FileText,
              },
              {
                num: "4",
                title: "4. Mock Interviews with Expert Feedback",
                desc: "And unlike generic interview coaching… you receive practical, actionable feedback based on how real interviewers evaluate candidates.",
                subText: "These mock interviews help identify:",
                items: [
                  "communication gaps",
                  "weak answer structure",
                  "lack of clarity",
                  "confidence issues",
                  "technical explanation problems"
                ],
                finalText: "",
                icon: Users,
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
                <div className={`md:w-1/2 flex ${idx % 2 === 1 ? "md:justify-start" : "md:justify-end"} w-full`}>
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
                      <p className="text-sm font-bold mb-2 text-foreground/80">{step.subText}</p>
                    )}
                    
                    {step.items.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.finalText && (
                      <p className="text-sm font-semibold text-foreground/90 bg-primary/5 rounded-lg p-3 border border-primary/10 mt-2">
                        {step.finalText}
                      </p>
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
        </div>
      </section>

      {/* 6. AI MOCK INTERVIEW PRACTICE */}
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
                Practice Interviews with AI Mock Interview
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Most professionals never practice interviews realistically before attending actual interviews. And that becomes one of their biggest interview mistakes.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-3">
                    Our AI Mock Interview platform allows professionals to simulate realistic interview conversations based on their:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 pl-2">
                    {[
                      "target role",
                      "experience level",
                      "interview type",
                      "job description"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-sm font-semibold capitalize">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted border border-border/80 rounded-xl p-5 space-y-4">
                  <p className="font-semibold text-foreground">
                    Candidates can practice interviews anytime through voice or text while the system evaluates:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 pl-2">
                    {[
                      "answer structure",
                      "communication clarity",
                      "confidence",
                      "role relevance",
                      "depth of explanation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center text-sm font-semibold capitalize">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold">
                  Unlike generic AI interview bots, our AI mock interview system is designed around real hiring conversations, recruiter expectations, and Indian hiring realities.
                </p>
              </div>

              <CTAButton text="Start AI Mock Interview Practice" />
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
                  {/* Visual representing interview simulator */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">AI Simulation Console</span>
                      <span className="text-xs font-bold text-green-500 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" /> Voice Active
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-background border border-border rounded-xl p-4">
                        <p className="text-xs text-primary uppercase font-bold mb-1">AI Interviewer Prompt</p>
                        <p className="text-sm italic">“Describe a time when you had to resolve conflict in a cross-functional squad. How did you structure the solution?”</p>
                      </div>

                      <div className="bg-background border border-primary/20 rounded-xl p-4">
                        <p className="text-xs text-green-600 uppercase font-bold mb-1">Voice Input Evaluation</p>
                        <p className="text-sm font-bold text-foreground">“Your response follows the STAR method perfectly. Feedback: Consider highlighting operational efficiency outcomes earlier.”</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. WHAT WE PREPARE YOU FOR */}
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
              What We Prepare You For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                color: "text-green-500",
                bg: "bg-green-500/10",
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
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
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
        </div>
      </section>

      {/* 8. WONDERING IF RIGHT FOR YOU */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Wondering If Interview Preparation Services Are Right for You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our online interview preparation services are ideal for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
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
                color: "text-green-500",
                bg: "bg-green-500/10",
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
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
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
            <CTAButton text="Yes, Prepare Me for Interviews" />
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
                  Most interview preparation services focus only on interview questions.
                </p>
                <p className="font-bold text-foreground">
                  We focus on:
                </p>
                <ul className="grid grid-cols-2 gap-2 pl-2">
                  {[
                    "interview psychology",
                    "communication clarity",
                    "structured answers",
                    "realistic interview expectations",
                    "role-specific preparation",
                    "recruiter evaluation patterns"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-sm font-semibold capitalize text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  Our preparation combines AI-powered mock interviews, expert-led mock interview services, structured answer frameworks, and practical interview guidance to help professionals communicate their real experience effectively.
                </p>
                <p className="text-foreground font-bold border-l-4 border-primary pl-4 py-2">
                  We do not teach scripted answers. We help professionals communicate their value confidently and strategically.
                </p>
              </div>

              <CTAButton text="Start Interview Preparation" />
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
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Communication Clarity</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-2 hover:-translate-y-5 transition-transform">
                  <div className="p-2.5 bg-amber-500/10 rounded-full text-amber-500">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Interview Psychology</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform translate-y-1 hover:-translate-y-2 transition-transform">
                  <div className="p-2.5 bg-purple-500/10 rounded-full text-purple-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Role-Specific Mapping</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-4 hover:-translate-y-7 transition-transform">
                  <div className="p-2.5 bg-green-500/10 rounded-full text-green-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Structured Answers</h4>
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
                text: "“Before MCS, I knew my work technically but struggled to explain it properly during interviews. The mock interview sessions completely changed my confidence.”",
                author: "Verified Professional",
                initial: "V",
              },
              {
                text: "“The AI mock interview platform helped me practice difficult interview scenarios before my actual interviews. It felt surprisingly realistic.”",
                author: "Software Engineering Candidate",
                initial: "S",
              },
              {
                text: "“After restructuring my answers, I became much more confident while explaining my projects and leadership experience.”",
                author: "Mid-Level Product Professional",
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

export default InterviewPreparationContentPage;
