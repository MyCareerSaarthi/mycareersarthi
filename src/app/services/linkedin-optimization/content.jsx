"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Linkedin,
  Brain,
  ClipboardCheck,
  FileEdit,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const LinkedinOptimizationPage = () => {
  const processSteps = [
    {
      icon: Brain,
      title: "AI Profile Scoring (Role-Based)",
      description:
        "We begin by scoring your LinkedIn profile against the specific job roles and job descriptions you are targeting.",
      subTitle: "Our proprietary AI engine evaluates:",
      points: [
        "Role relevance of your headline and summary",
        "Keyword alignment with target job descriptions",
        "Experience depth versus role expectations",
        "Missing signals that recruiters and search algorithms look for",
      ],
      outcome:
        "You get a clear view of where your profile stands today and why it may not be getting shortlisted.",
    },
    {
      icon: ClipboardCheck,
      title: "Profile Diagnostic Assessment",
      description:
        "After AI scoring, our experts review your profile in detail.",
      subTitle: "This assessment focuses on:",
      points: [
        "How your experience is currently being interpreted",
        "Whether your responsibilities reflect seniority, impact, and progression",
        "Gaps between what you have done and what recruiters expect to see",
        "Sections that create confusion, dilution, or misalignment",
      ],
      outcome:
        "This step ensures that the optimization is based on context and judgment, not automation alone.",
    },
    {
      icon: FileEdit,
      title: "Role-Aligned Profile Optimization",
      description:
        "Your LinkedIn profile is then rewritten and structured specifically for the roles you want.",
      subTitle: "This includes:",
      points: [
        "Refining headlines and summaries to reflect target roles",
        "Reworking experience sections to show scope, decision-making, and outcomes",
        "Correcting keyword usage so it sounds natural and professional",
        "Aligning your profile narrative with how hiring teams shortlist candidates",
      ],
      outcome:
        "The objective is clarity, not exaggeration, branding language, or generic claims.",
    },
    {
      icon: UserCheck,
      title: "Recruiter-Readable Final Output",
      description:
        "Your final LinkedIn profile is reviewed for real-world usability.",
      subTitle: "We ensure it:",
      points: [
        "Makes sense within seconds to a recruiter",
        "Appears in relevant LinkedIn searches",
        "Communicates role-fit clearly without overexplaining",
        "Supports interviews and conversations, not just clicks",
      ],
      outcome:
        "You walk away with a LinkedIn profile that accurately represents your experience and supports your job search instead of working against it.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  LinkedIn Optimization
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A focused LinkedIn profile optimization service built around
                  how recruiters, hiring managers, and LinkedIn search actually
                  work today.
                </p>

                <p className="text-lg leading-relaxed mb-8 font-medium">
                  This is not about making your profile look good. It is about
                  making it accurate, searchable, and relevant for the roles you
                  are targeting.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/linkedin/analyze">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact-us">Schedule Consultation</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <Image
                    src="/scoring/linkedin_report.webp"
                    alt="LinkedIn Profile Analysis Report"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">
                      Detailed Insights
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A systematic approach to transforming your LinkedIn presence
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline line */}
                  {index !== processSteps.length - 1 && (
                    <div className="absolute left-[11px] top-10 w-[2px] h-[calc(100%-24px)] bg-border" />
                  )}

                  {/* Step number indicator */}
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>

                  <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    <p className="text-sm font-medium mb-3">{step.subTitle}</p>

                    <ul className="space-y-2 mb-4">
                      {step.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-primary">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Optimize Your Profile?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a LinkedIn profile that supports your job search and helps
                you stand out.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/linkedin/analyze">
                    Start Optimization
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact-us">Book Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedinOptimizationPage;
