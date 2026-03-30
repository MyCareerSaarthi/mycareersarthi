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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTAButton = ({ text, href = "/linkedin/analyze" }) => (
  <Button size="lg" className="group rounded-full px-8 py-6 text-lg" asChild>
    <Link href={href}>
      {text}
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </Button>
);

const LinkedinOptimizationPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10" />
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-70 animate-pulse -z-10" />
        <div className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-60 -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>LinkedIn Profile Optimization Service</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              Optimize your LinkedIn profile to get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                10X interviews
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Get a customized, detailed analysis of your LinkedIn profile to
              understand your profile’s strengths, weaknesses, and suggestions
              to rank your profile higher in LinkedIn search to get more views
              from recruiters, job opportunities, and interviews.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <CTAButton text="Yes, I want a personalized LinkedIn profile makeover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS OPTIMIZATION */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                So, what exactly is LinkedIn Profile Optimization?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                LinkedIn profile optimization is the process of transforming
                your profile using the right keywords that recruiters search for
                in the linkedin search for hiring for various roles to get more
                views, stronger connections and ultimately job interviews.
              </p>

              <div className="space-y-4 mb-10">
                <p className="font-semibold text-lg">
                  And this service includes optimizing your:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "LinkedIn headline",
                    "About section (professional summary)",
                    "Work experience descriptions",
                    "Skills and endorsements",
                    "Industry keywords",
                    "Profile structure and clarity",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButton text="Optimize my linkedin profile for recruiters" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border/50 rounded-2xl p-2 shadow-2xl relative z-0 transform rotate-2  transition-transform duration-500">
                <div className="bg-muted rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center relative p">
                  <img src="/scoring/linkedin_report.webp" alt="" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MYTH BUSTER */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              LinkedIn <span className="text-primary">=</span> Resume.{" "}
              <span className="underline decoration-destructive/50 decoration-wavy underline-offset-8">
                Right?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground mb-4"
            >
              It is unfortunate to see that many job seekers unknowingly
              optimize their linkedin profile just like their resume believing
              that LinkedIn = Resume.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-destructive/10 text-destructive font-semibold text-lg px-6 py-3 rounded-xl border border-destructive/20 inline-block"
            >
              And believing this myth... is your first career mistake.
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Resume Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted rounded-3xl p-8 border border-border/50 opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                <FileCheck2 className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Resume</h3>
              <p className="text-muted-foreground mb-6">
                Most professionals treat LinkedIn exactly like their resume.
                Fill in the job titles, add work experience, mention education,
                and consider it done. But that's not how LinkedIn works at all.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  <span>A static document you send after applying.</span>
                </li>
                <li className="flex gap-3 text-muted-foreground items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  <span>Nobody finds you through it.</span>
                </li>
                <li className="flex gap-3 text-muted-foreground items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  <span>You send it, you wait, you hope.</span>
                </li>
              </ul>
            </motion.div>

            {/* LinkedIn Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-3xl p-8 border border-primary/20 shadow-xl shadow-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Rocket className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl mb-6 shadow-lg shadow-primary/20">
                  <Search className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Your LinkedIn Profile
                </h3>
                <p className="text-foreground/80 font-medium mb-6">
                  LinkedIn gives you what your resume never can: a unique public
                  profile where recruiters actively search and find you before
                  you even know a job exists.
                </p>
                <ul className="space-y-4">
                  {[
                    "Your headline tells recruiters exactly who you are",
                    "Featured section showcases your best work visually",
                    "About section tells your journey in your own voice",
                    "Recommendations build third-party credibility",
                    "Endorsements validate your skills publicly",
                    "Activity & posts show how you think in real time",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl font-medium mb-8 max-w-2xl mx-auto">
              <span className="text-primary mr-2">The verdict:</span>
              LinkedIn isn't where you list your experience. It's where you
              build your professional reputation publicly, so opportunities find
              you instead of you chasing them.
            </p>
            <CTAButton text="Give me a powerful linkedin profile makeover" />
          </motion.div>
        </div>
      </section>

      {/* 4. WHAT HAPPENS... CONSEQUENCES */}
      <section className="py-24 bg-foreground text-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              So, what happens when you treat LinkedIn like just another resume?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background/10 backdrop-blur-md border border-background/20 p-6 rounded-2xl"
            >
              <TrendingUp className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-lg">
                Recruiters search for your skills, and you don't appear because
                your profile isn't optimized for your target role.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background/10 backdrop-blur-md border border-background/20 p-6 rounded-2xl"
            >
              <Search className="w-8 h-8 text-orange-400 mb-4" />
              <p className="text-lg">
                Even if a recruiter finds your profile, it's not positioned
                clearly enough for them to understand your value.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background/10 backdrop-blur-md border border-background/20 p-6 rounded-2xl"
            >
              <LineChart className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-lg">
                Someone with lesser skills & experience but with a strategically
                built LinkedIn profile ends up getting the interview call.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl shadow-2xl shadow-primary/20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stop missing out on life-changing opportunities.
            </h3>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              At MyCareerSarthi, with our linkedin profile optimization
              services, we ensure that your profile is perfectly aligned with
              your target job role and you finally get that interview call
              you've been waiting for.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="group rounded-full px-8 py-6 text-lg text-primary font-bold"
              asChild
            >
              <Link href="/linkedin/analyze">
                Yes, I’m Ready for a LinkedIn Profile Makeover
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 5. 3 EASY STEPS */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get a Recruiter-Ready LinkedIn Profile in 3 Easy Steps
            </h2>
          </motion.div>

          <div className="space-y-12 mb-16 relative">
            {/* Timeline Connector Line */}
            <div className="absolute left-[27px] md:left-1/2 md:-ml-px top-8 bottom-8 w-0.5 bg-border hidden md:block" />

            {[
              {
                num: "1",
                title: "AI Profile Scoring (Role-Based)",
                desc: "We begin by scoring your LinkedIn profile against your target role or job description in our proprietary Linkedin profile AI scorer.",
                icon: Brain,
              },
              {
                num: "2",
                title: "Profile Diagnostic Assessment",
                desc: "After scoring your Linkedin profile, our experts conduct a detailed profile review against your target role based on professional judgment and recruiter expectations, not just automation.",
                icon: ShieldCheck,
              },
              {
                num: "3",
                title: "Role-Aligned Profile Optimization",
                desc: "Through our linkedin profile development service, we optimize your profile specifically for the roles you are targeting by refining each section to 10X your views and land interviews.",
                icon: Target,
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
                  <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative w-full group overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out" />
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <span className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {step.num}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.desc}
                    </p>
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
            <CTAButton text="Yes, Make My LinkedIn Profile Recruiter-Ready" />
          </div>
        </div>
      </section>

      {/* 6. WHO IS IT FOR? */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wondering If LinkedIn Profile Optimization Services Are Right for
              You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our LinkedIn profile optimizations services are exactly what you
              need if you are a:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "Fresh Graduate",
                desc: "Students entering the job market who need an optimized linkedin profile for linkedin search engine.",
                icon: GraduationCap,
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                title: "Mid-Level Professional",
                desc: "Professionals preparing for career growth, change or role transitions.",
                icon: Briefcase,
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                title: "Senior Leader",
                desc: "CXOs building authority and credibility within their specific industry.",
                icon: Award,
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                title: "Job Seeker",
                desc: "Professionals actively searching for new job opportunities.",
                icon: Search,
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
            ].map((target, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${target.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <target.icon className={`w-7 h-7 ${target.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{target.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {target.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Yes, Turn My LinkedIn Profile Into a Career Asset" />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-dots pattern-primary pattern-bg-background pattern-size-4 pattern-opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
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
              <p className="text-xl font-medium text-primary mb-6">
                We don't do things in bits and pieces. We offer a holistic
                approach to your career journey.
              </p>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  While others focus on just one thing, leaving professionals
                  doing the work of connecting all the pieces themselves, we
                  give you everything in one place. Here you get your LinkedIn
                  profile optimized, your resume optimized and aligned with your
                  target role, job search strategy, and interview prep.
                </p>
                <p>
                  Our{" "}
                  <span className="text-foreground font-medium">
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
              <CTAButton text="Convert my linkedin profile into a job magnet" />
            </motion.div>

            {/* Visual Element for Holistic Approach */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[500px] flex items-center justify-center bg-card/50 backdrop-blur-sm rounded-3xl border border-border shadow-2xl overflow-hidden p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

              <div className="grid grid-cols-2 gap-4 relative z-10 w-full h-full max-h-[400px]">
                <div className="bg-background rounded-2xl p-6 shadow-md border border-border flex flex-col items-center justify-center text-center gap-3 transform translate-y-4 hover:-translate-y-2 transition-transform">
                  <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                    <Search className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold">Search Visibility</h4>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-md border border-border flex flex-col items-center justify-center text-center gap-3 transform -translate-y-4 hover:-translate-y-6 transition-transform">
                  <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold">Resume Alignment</h4>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-md border border-border flex flex-col items-center justify-center text-center gap-3 transform translate-y-2 hover:-translate-y-4 transition-transform">
                  <div className="p-3 bg-purple-500/10 rounded-full text-purple-500">
                    <Target className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold">Job Strategy</h4>
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-md border border-border flex flex-col items-center justify-center text-center gap-3 transform -translate-y-8 hover:-translate-y-10 transition-transform">
                  <div className="p-3 bg-green-500/10 rounded-full text-green-500">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold">Interview Prep</h4>
                </div>

                {/* Center Connector Piece */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold p-6 rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center">
                  MCS
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-muted/30">
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
            <p className="text-xl text-muted-foreground">
              Discover how our optimization services transform careers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm relative group"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-8 leading-relaxed italic text-foreground/80">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-primary/10 text-primary font-bold rounded-full flex items-center justify-center text-lg">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold">Verified Professional</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text="Yes, Optimize My LinkedIn Profile for Recruiters" />
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
                  a: 'Why not?! There is always a first time. No matter if it\'s your first or "nth" time, we provide you with services to improve visibility to recruiters.',
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

export default LinkedinOptimizationPage;
