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
  ClipboardList,
  Layers,
  Compass,
  Map,
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

const CareerAssessmentContentPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-14 md:pb-18 lg:pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-70 animate-pulse -z-10" />
        <div className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-60 -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs md:text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Career Assessment Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2]"
            >
              Applying Everywhere… But Still Not Getting the Right
              Opportunities?
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto space-y-4"
            >
              <p>
                Most professionals are switching jobs, exploring career changes,
                chasing higher salaries, and applying to multiple roles without
                fully understanding where their experience actually fits in the
                market.
              </p>
              <p className="font-semibold text-foreground bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 max-w-2xl mx-auto">
                And that often leads to low interview conversion, career
                confusion, failed transitions, stagnant growth, and accepting
                roles that hurt long-term positioning.
              </p>
              <p className="text-foreground/90 font-medium pt-2">
                Our Career Assessment Services is a structured, data-driven
                career path assessment designed around real hiring patterns,
                recruiter expectations, skills relevance, psychometric
                evaluation, and market demand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <CTAButton text="Get Career Clarity →" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT EXACTLY IS A CAREER ASSESSMENT */}
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
                So, What Exactly is a Career Assessment?
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  A career assessment is a structured evaluation process
                  designed to help professionals understand how their profile is
                  positioned in the market, what roles align with their
                  experience, what skills are helping or limiting growth, and
                  what career paths are realistically achievable.
                </p>
                <p>
                  Most professionals make career decisions emotionally. They
                  apply randomly, switch careers impulsively, chase titles
                  without alignment, or follow market trends blindly without
                  understanding how recruiters actually evaluate their profile.
                </p>
                <p className="font-semibold text-foreground">
                  But long-term career growth requires clarity, positioning, and
                  strategic direction.
                </p>
              </div>

              <div className="bg-background border border-border/50 rounded-2xl p-6 md:p-8 mb-8">
                <p className="font-bold text-foreground mb-4">
                  Our professional career assessment helps professionals make
                  informed career decisions based on:
                </p>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "experience evaluation",
                    "recruiter expectations",
                    "role-fit analysis",
                    "hard and soft skills assessment",
                    "psychometric evaluation",
                    "market demand",
                    "long-term career alignment",
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

              <div className="text-center max-w-2xl mx-auto mb-10">
                <p className="text-lg font-semibold text-destructive">
                  Because career growth without clarity often leads to
                  frustration.
                </p>
              </div>

              <div className="flex justify-center">
                <CTAButton text="Help Me Understand My Career Positioning →" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MOST PROFESSIONALS DON'T ACTUALLY KNOW HOW THE MARKET SEES THEM */}
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
                Most Professionals Don’t Actually Know How the Market Sees Them
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  That is one of the biggest reasons professionals struggle with
                  repeated rejections, failed transitions, stagnant growth, and
                  low interview conversion despite having relevant experience.
                </p>
                <p className="font-semibold text-foreground">
                  Because the market may interpret your profile very differently
                  from how you see yourself.
                </p>

                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-3">
                    Many professionals assume:
                  </p>
                  <ul className="space-y-2 pl-2">
                    {[
                      "more applications will solve the problem",
                      "another certification will fix growth issues",
                      "switching companies will improve opportunities",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-sm font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  …but the real issue is often poor positioning, unclear role
                  alignment, and lack of career clarity.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-3">
                    A structured career suitability assessment helps bridge that
                    gap by helping professionals understand:
                  </p>
                  <ul className="space-y-2 pl-2">
                    {[
                      "how recruiters interpret their profile",
                      "where they stand competitively",
                      "what strengths are valuable",
                      "what gaps are affecting growth",
                      "what realistic opportunities exist",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 items-center text-sm font-semibold"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-foreground font-semibold">
                  That clarity changes career decisions completely.
                </p>
              </div>

              <CTAButton text="Understand My Market Positioning →" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-2xl relative z-10">
                <div className="relative rounded-2xl overflow-hidden min-h-[400px] bg-muted/10 flex flex-col justify-between p-6">
                  {/* Market Lens Diagram */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
                        Market Perception Gap
                      </span>
                      <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background border border-border rounded-xl p-4">
                        <p className="text-xs text-muted-foreground uppercase font-bold mb-2">
                          How You See Yourself
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          Experienced Lead
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Certified • Multi-tasker • Ready for Executive Role
                        </p>
                      </div>

                      <div className="bg-background border border-border rounded-xl p-4 border-destructive/30">
                        <p className="text-xs text-destructive uppercase font-bold mb-2">
                          How Recruiters See You
                        </p>
                        <p className="text-sm font-bold text-destructive">
                          Positioning Gap
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Timeline mismatch • Missing key domain keywords
                        </p>
                      </div>
                    </div>

                    <div className="bg-background border border-border rounded-xl p-4">
                      <p className="text-xs text-primary uppercase font-bold mb-2">
                        After Suitability Assessment
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-sm font-bold">
                          100% Market Alignment
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Clear role alignment, optimized keywords, and structured
                        progression milestones.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Career Suitability Evaluation</span>
                    <span className="font-semibold text-green-600">
                      Perfect Clarity
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS ROADMAP STEPS */}
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
              What Does Our Career Assessment Process Include?
            </h2>
          </motion.div>

          <div className="space-y-12 mb-16 relative">
            <div className="absolute left-[27px] md:left-1/2 md:-ml-px top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            {[
              {
                num: "1",
                title: "1. Career Diagnostic Assessment",
                desc: "We begin with a detailed evaluation of your current career journey, responsibilities, experience depth, and growth trajectory.",
                subText: "This includes:",
                items: [
                  "experience assessment to evaluate your current responsibilities and progression",
                  "understanding the complexity of work you have handled",
                  "evaluating growth patterns and leadership signals",
                  "analyzing your current positioning in the market",
                ],
                finalText: "",
                icon: ClipboardList,
              },
              {
                num: "2",
                title: "2. Hard Skills, Soft Skills & Psychometric Assessments",
                desc: "Most professionals only evaluate themselves based on experience. But recruiters evaluate much more than that. We conduct structured online & mock interview-based hard & soft skills evaluations, along with personality evaluations.",
                subText: "We conduct:",
                items: [
                  "online hard skills assessments",
                  "mock interview-based hard & soft skills assessments",
                  "psychometric assessments to evaluate strengths, interests, personality patterns, and work preferences",
                ],
                finalText:
                  "This helps identify: strengths that support growth, gaps affecting role conversion, behavioral & communication patterns, and career environments aligned with your personality and interests.",
                icon: Brain,
              },
              {
                num: "3",
                title: "3. Profile Assessment & Market Positioning Analysis",
                desc: "Your resume and LinkedIn profile often reveal how the market currently perceives you.",
                subText: "We evaluate your:",
                items: [
                  "LinkedIn profile positioning",
                  "resume positioning",
                  "recruiter-facing communication",
                  "market visibility",
                  "profile alignment with target roles",
                ],
                finalText: "",
                icon: FileCheck2,
              },
              {
                num: "4",
                title: "4. Role Fit Evaluation & Career Direction Clarity",
                desc: "Career confusion usually happens when professionals apply for roles that do not align with their actual positioning. We map your hard skills, soft skills, interests, strengths, and experience depth against target expectations.",
                subText: "This helps identify:",
                items: [
                  "roles where you have strong conversion potential",
                  "realistic career transitions",
                  "opportunities aligned with your strengths",
                  "missing capabilities affecting growth",
                  "career paths that support long-term progression",
                ],
                finalText: "",
                icon: Target,
              },
              {
                num: "5",
                title: "5. Personalized Career Roadmap",
                desc: "Once the assessment process is complete, we create a structured and personalized career roadmap for your next professional steps.",
                subText: "Your roadmap includes:",
                items: [
                  "clear next-step career direction",
                  "phase-wise growth planning",
                  "recommended skills and certifications",
                  "structured growth strategy",
                  "defined career milestones",
                  "practical execution roadmap",
                ],
                finalText:
                  "Instead of making random or emotional career moves, you move forward with clarity and direction.",
                icon: Map,
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

                    {step.finalText && (
                      <p className="text-sm font-medium text-primary mt-3 pt-3 border-t border-border/60">
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

          <div className="text-center">
            <CTAButton text="Build My Career Roadmap →" />
          </div>
        </div>
      </section>

      {/* 5. WHY CAREER ASSESSMENT MATTERS MORE THAN EVER */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Career Assessment Matters More Than Ever
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The hiring market today is changing rapidly.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-xl mb-12">
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Roles are evolving. AI is changing skill demand. Recruiter
              expectations are shifting. And professionals are often struggling
              to understand where they truly fit. Many candidates spend months
              applying for jobs without realizing:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "their target roles are misaligned",
                "their positioning is weak",
                "their skills are not translating properly",
                "their experience is being interpreted differently by recruiters",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <span className="text-muted-foreground font-semibold text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/60 pt-6 space-y-4">
              <p className="text-base text-muted-foreground font-medium">
                And without career clarity, professionals continue making the
                same mistakes repeatedly. That is why career path assessment and
                professional career assessment services matter more than ever
                today.
              </p>
              <p className="text-lg font-bold text-foreground">
                Because before optimizing resumes, LinkedIn profiles, or
                interviews…… professionals first need clarity on where they
                actually stand.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton text="Get Clarity on My Career Direction →" />
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU RECEIVE */}
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
              What You Receive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At the end of the assessment process, you receive:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Career Diagnostic Assessment",
                desc: "A detailed understanding of your experience, growth patterns, and market positioning.",
                icon: ClipboardList,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Hard Skills, Soft Skills & Psychometric Evaluation",
                desc: "A structured analysis of your capabilities, personality strengths, interests, and communication patterns.",
                icon: Brain,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Profile & Market Positioning Review",
                desc: "Evaluation of your LinkedIn, resume, and recruiter-facing positioning.",
                icon: FileCheck2,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Role Fit & Career Direction Insights",
                desc: "Clear understanding of roles and career paths that realistically align with your experience and strengths.",
                icon: Target,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Personalized Career Roadmap",
                desc: "A structured roadmap designed around career growth, positioning improvements, and realistic progression.",
                icon: Map,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
              You walk away with career clarity, realistic direction, and a
              practical growth strategy.
            </p>
            <CTAButton text="Get Career Direction Clarity →" />
          </div>
        </div>
      </section>

      {/* 7. WONDERING IF RIGHT FOR YOU */}
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
              Wondering If Career Assessment Services Are Right for You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our Career Assessment Services are designed for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "Fresh Graduates",
                desc: "Professionals looking to understand which career paths align best with their strengths, interests, and skills.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professionals",
                desc: "Professionals feeling confused about growth, transitions, stagnation, or future career direction.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Professionals",
                desc: "Leaders evaluating long-term positioning, leadership growth, or strategic career transitions.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Professionals Planning Career Switches",
                desc: "Individuals exploring realistic transitions into new industries, functions, or roles.",
                icon: ArrowLeftRight,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
              {
                title: "Job Seekers Facing Repeated Rejections",
                desc: "Professionals struggling with interview conversion and unclear market positioning.",
                icon: Search,
                color: "text-rose-500",
                bg: "bg-rose-500/10",
              },
              {
                title: "Professionals Seeking Career Clarity",
                desc: "Individuals wanting a structured and realistic understanding of where they stand professionally.",
                icon: ClipboardList,
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
              Whether you are confused about your next step, struggling with
              career growth, or planning a transition, our professional career
              assessment services help you move forward strategically.
            </p>
            <CTAButton text="Yes, Assess My Career Strategically →" />
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE MYCAREERSARTHI */}
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
                  Most career guidance today is generic, motivational, or
                  emotionally driven.
                </p>
                <p>
                  At MyCareerSarthi, we take a much more strategic and
                  market-focused approach. Our process combines AI-driven
                  analysis, career diagnostics, hard and soft skills
                  assessments, psychometric evaluation, recruiter-focused
                  interpretation, and structured roadmap planning to help
                  professionals understand how their profiles are actually
                  perceived in today’s hiring market.
                </p>
                <p>
                  Instead of vague advice, we focus on practical career
                  direction based on recruiter expectations, role alignment,
                  skills relevance, market opportunities, and long-term
                  positioning.
                </p>
                <p className="text-foreground font-bold border-l-4 border-primary pl-4 py-2">
                  The goal is simple — help professionals make career decisions
                  with clarity instead of confusion.
                </p>
              </div>

              <CTAButton text="Improve My Career Direction →" />
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
                    <Brain className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Psychometric Analysis</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-2 hover:-translate-y-5 transition-transform">
                  <div className="p-2.5 bg-amber-500/10 rounded-full text-amber-500">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Experience Diagnostics</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform translate-y-1 hover:-translate-y-2 transition-transform">
                  <div className="p-2.5 bg-purple-500/10 rounded-full text-purple-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Role-Fit Analysis</h4>
                </div>
                <div className="bg-background rounded-2xl p-4 shadow-sm border border-border flex flex-col items-center justify-center text-center gap-2 transform -translate-y-4 hover:-translate-y-7 transition-transform">
                  <div className="p-2.5 bg-green-500/10 rounded-full text-green-500">
                    <Map className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm">Roadmap Planning</h4>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold w-16 h-16 rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center">
                  MCS
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
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
                  q: "What is a career assessment service?",
                  a: "A career assessment service helps professionals understand their career positioning, role fit, skills relevance, strengths, and growth direction based on real market expectations and hiring patterns.",
                },
                {
                  q: "Is this only for job seekers?",
                  a: "No. Our career assessment services are useful for professionals at all stages including career growth, leadership positioning, transitions, and long-term planning.",
                },
                {
                  q: "What is included in the assessment?",
                  a: "The assessment includes career diagnostics, hard and soft skills assessments, psychometric evaluation, market alignment analysis, role-fit evaluation, profile assessment, and a personalized career roadmap.",
                },
                {
                  q: "Can this help with career transitions?",
                  a: "Yes. Our career suitability assessment helps professionals identify realistic transition opportunities based on transferable skills, market demand, and profile alignment.",
                },
                {
                  q: "Is this based only on AI?",
                  a: "No. While AI is used for structured evaluation and scoring, expert career analysis and recruiter-focused interpretation are core parts of the process.",
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

export default CareerAssessmentContentPage;
