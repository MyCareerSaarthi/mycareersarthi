"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Brain,
  ClipboardCheck,
  FileEdit,
  UserCheck,
  CheckCircle2,
  ArrowRight,
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
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <Linkedin className="w-7 h-7 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              LinkedIn Profile Optimization
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A focused LinkedIn profile optimization service built around how
              recruiters, hiring managers, and LinkedIn search actually work
              today.
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-8 font-medium">
              This is not about making your profile look good. It is about
              making it accurate, searchable, and relevant for the roles you are
              targeting.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link href="/linkedin/analyze">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact-us">Schedule Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="border-b border-border pb-12 last:border-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">{step.title}</h2>
                </div>

                <p className="text-muted-foreground mb-4">{step.description}</p>

                <p className="text-sm font-medium text-foreground mb-2">
                  {step.subTitle}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {step.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-foreground">{step.outcome}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Optimize Your Profile?
          </h2>
          <p className="text-muted-foreground mb-6">
            Get a LinkedIn profile that supports your job search.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild>
              <Link href="/linkedin/analyze">
                Start Optimization <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact-us">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedinOptimizationPage;
