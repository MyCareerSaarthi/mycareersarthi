"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ClipboardList,
  Layers,
  Target,
  Map,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const CareerAssessmentPage = () => {
  const processSteps = [
    {
      icon: ClipboardList,
      title: "Career Diagnostic Assessment",
      description: "We start by understanding your career journey in detail.",
      subTitle: "This includes reviewing:",
      points: [
        "Your years of experience and responsibilities",
        "The type of work you have handled",
        "The industries and functions you have worked in",
        "Career moves you have already made",
      ],
      outcome:
        "This diagnostic helps uncover gaps, strengths, and patterns that may not be visible on your resume or LinkedIn profile.",
    },
    {
      icon: Layers,
      title: "Skill & Experience Mapping",
      description:
        "Many professionals have skills but struggle to explain where they truly fit in the market.",
      subTitle: "We evaluate:",
      points: [
        "Your core skills against real job requirements",
        "The depth of experience behind each skill",
        "Skills that are helping you grow",
        "Skills that may be holding you back",
      ],
      outcome:
        "This gives you a realistic view of how the market perceives your profile today.",
    },
    {
      icon: Target,
      title: "Role Fit & Career Direction Clarity",
      description: "Career confusion often comes from unclear role alignment.",
      subTitle: "We help you:",
      points: [
        "Identify roles that genuinely match your experience",
        "Understand why certain roles are not converting",
        "Explore realistic career transitions",
        "Avoid risky or forced career moves",
      ],
      outcome: "You gain clarity on what to pursue and what to stop chasing.",
    },
    {
      icon: Map,
      title: "Career Roadmap Creation",
      description:
        "Based on your assessment, we create a practical career roadmap.",
      subTitle: "This roadmap outlines:",
      points: [
        "Target roles and career direction",
        "Skills or experience to strengthen",
        "Logical next steps instead of random switches",
        "A sequence for growth, not shortcuts",
      ],
      outcome:
        "Your roadmap becomes a reference point for every career decision you make.",
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
              <BarChart3 className="w-7 h-7 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Career Assessment
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A structured career assessment service designed to help you
              understand where you truly stand, what roles actually fit your
              experience, and how to move forward with clarity instead of
              confusion.
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-8 font-medium">
              This service helps you make informed career decisions, not
              emotional or rushed ones.
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
            Ready to Get Clarity on Your Career?
          </h2>
          <p className="text-muted-foreground mb-6">
            Make informed career decisions with a clear understanding of where
            you stand.
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

export default CareerAssessmentPage;
