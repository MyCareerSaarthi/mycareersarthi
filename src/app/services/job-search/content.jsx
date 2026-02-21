"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Search,
  ClipboardList,
  Target,
  Compass,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const JobSearchPage = () => {
  const processSteps = [
    {
      icon: ClipboardList,
      title: "Job Search Diagnostic",
      description:
        "We begin by understanding how you are currently searching for jobs.",
      subTitle: "This includes reviewing:",
      points: [
        "The roles you are applying to",
        "The platforms you are using",
        "Your application patterns",
        "Your response and shortlisting history",
      ],
      outcome:
        "This diagnostic helps identify where effort is being wasted and why interviews may not be converting, even with good experience or skills.",
    },
    {
      icon: Target,
      title: "Role & Company Targeting",
      description:
        "Most professionals apply to roles that look right on paper but are misaligned in reality.",
      subTitle: "We help you define:",
      points: [
        "The right job titles for your experience level",
        "Companies that realistically match your background",
        "Role expectations at mid-level and senior-level positions",
        "Transitions that make sense instead of risky jumps",
      ],
      outcome:
        "This ensures you are not underselling yourself or aiming in the wrong direction.",
    },
    {
      icon: Compass,
      title: "Job Search Strategy & Application Planning",
      description:
        "Job search today is not about volume. It is about precision.",
      subTitle: "We help you build a clear strategy that covers:",
      points: [
        "Where to apply and where not to apply",
        "How frequently to apply without burning out",
        "How to prioritise roles with higher hiring probability",
        "How to avoid low-quality listings and dead-end applications",
      ],
      outcome: "You walk away with a focused plan instead of trial-and-error.",
    },
    {
      icon: Users,
      title: "Recruiter & Hiring Manager Approach",
      description:
        "Many good profiles fail because professionals don't know how to approach the right people.",
      subTitle: "We guide you on:",
      points: [
        "How recruiters actually shortlist candidates",
        "How to approach hiring managers on LinkedIn",
        "What to say and what to avoid in outreach",
        "How to follow up without sounding desperate",
      ],
      outcome:
        "This helps you move from passive applications to active visibility.",
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
                  Job Search Services
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A structured job search service designed to help you stop
                  applying blindly and start getting interview calls from the
                  right companies.
                </p>

                <p className="text-lg leading-relaxed mb-8 font-medium">
                  We help you approach your job search with clarity, intent, and
                  a clear plan that aligns with how hiring actually works today.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact-us">
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
                className="relative flex justify-center"
              >
                <div className="relative w-full max-w-md">
                  <Image
                    src="/services/job-search.svg"
                    alt="Job Search Illustration"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute bottom-8 left-0 bg-background border border-border rounded-xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">
                      Focused Approach
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
                A strategic approach to transforming your job search
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
                Ready to Transform Your Job Search?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop applying blindly and start getting interview calls from the
                right companies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/contact-us">
                    Get Started
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

export default JobSearchPage;
