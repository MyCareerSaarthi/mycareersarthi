"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  ClipboardList,
  Target,
  Compass,
  Users,
  CheckCircle2,
  ArrowRight,
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
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <Search className="w-7 h-7 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Job Search Services
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A structured job search service designed to help you stop applying
              blindly and start getting interview calls from the right
              companies.
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-8 font-medium">
              We help you approach your job search with clarity, intent, and a
              clear plan that aligns with how hiring actually works today.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link href="/contact-us">
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
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-muted-foreground mb-6">
            Stop applying blindly and start getting interview calls from the
            right companies.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild>
              <Link href="/contact-us">
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
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

export default JobSearchPage;
