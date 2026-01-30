"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  ClipboardList,
  Target,
  FileText,
  Users,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const InterviewPreparationPage = () => {
  const processSteps = [
    {
      icon: ClipboardList,
      title: "Interview Readiness Assessment",
      description:
        "We begin by understanding where you currently stand as an interview candidate.",
      subTitle: "This includes reviewing:",
      points: [
        "Your experience and role seniority",
        "Types of interviews you are attending",
        "Feedback you have received (if any)",
        "Where interviews tend to break down",
      ],
      outcome:
        "This assessment helps identify whether the issue is communication, structure, depth, role-fit, or confidence.",
    },
    {
      icon: Target,
      title: "Role-Specific Interview Mapping",
      description:
        "Interviews are not generic. A senior interview is very different from a mid-level or fresher interview.",
      subTitle: "We help you understand:",
      points: [
        "What your target role is actually being evaluated on",
        "What hiring managers expect at your experience level",
        "How interviews differ across companies and teams",
      ],
      outcome: "This removes guesswork and helps you prepare with intention.",
    },
    {
      icon: FileText,
      title: "Structured Answer & Story Preparation",
      description:
        "Most candidates fail not because they lack experience, but because they explain it poorly.",
      subTitle: "We help you:",
      points: [
        "Structure answers clearly",
        "Convert experience into interview-ready stories",
        "Communicate impact, decisions, and outcomes",
        "Avoid vague or rambling responses",
      ],
      outcome: "Your answers become clear, confident, and role-aligned.",
    },
    {
      icon: Users,
      title: "Mock Interviews with Expert Feedback",
      description: "Preparation is incomplete without practice.",
      subTitle: "We conduct mock interviews that:",
      points: [
        "Simulate real interview scenarios",
        "Test depth, clarity, and thinking process",
        "Highlight blind spots and improvement areas",
      ],
      outcome: "You receive actionable feedback, not generic comments.",
    },
    {
      icon: Shield,
      title: "Confidence & Control Under Pressure",
      description: "Interviews often fail because of anxiety, not capability.",
      subTitle: "We help you:",
      points: [
        "Reduce overthinking during interviews",
        "Respond calmly to difficult questions",
        "Stay composed during technical or leadership rounds",
      ],
      outcome:
        "You stop improvising under pressure and start responding with control.",
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
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Interview Preparation
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A structured interview preparation service designed to help you
              crack interviews with clarity, confidence, and control.
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-8 font-medium">
              This is not about memorising answers. It is about understanding
              what interviews are actually testing and preparing accordingly.
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
            Ready to Crack Your Next Interview?
          </h2>
          <p className="text-muted-foreground mb-6">
            Prepare with clarity, confidence, and control for interviews that
            convert.
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

export default InterviewPreparationPage;
