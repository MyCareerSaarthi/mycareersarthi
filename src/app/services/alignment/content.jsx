"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowLeftRight,
  FileText,
  Target,
  Lightbulb,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const ComparisonServicePage = () => {
  const processSteps = [
    {
      icon: FileText,
      title: "Upload Your Documents",
      description:
        "Submit your LinkedIn profile URL or PDF, and upload your resume for analysis.",
      subTitle: "We accept:",
      points: [
        "LinkedIn profile URL for live data extraction",
        "LinkedIn profile exported as PDF",
        "Resume in PDF format",
        "Optional target role or job description for role-specific alignment",
      ],
      outcome:
        "Both documents are securely processed and prepared for AI-powered comparison.",
    },
    {
      icon: BarChart3,
      title: "AI-Powered Alignment Analysis",
      description:
        "Our AI engine performs a deep comparison between your LinkedIn profile and resume across all key sections.",
      subTitle: "The analysis covers:",
      points: [
        "Skills overlap and missing skills between platforms",
        "Experience consistency — job titles, dates, and responsibilities",
        "Education and certifications alignment",
        "About/Summary tone, keywords, and messaging consistency",
        "Overall keyword and branding alignment",
      ],
      outcome:
        "Every section is scored individually and gaps are identified with precision.",
    },
    {
      icon: Target,
      title: "Role-Specific Fit Assessment",
      description:
        "When a target role is provided, the analysis goes deeper to evaluate role alignment.",
      subTitle: "Role-fit evaluation includes:",
      points: [
        "How well both documents support the target role",
        "Missing keywords that recruiters search for",
        "Gaps in experience framing relative to role expectations",
        "Alignment between stated career direction and actual content",
      ],
      outcome:
        "You understand exactly how your profiles measure up against the role you are targeting.",
    },
    {
      icon: Lightbulb,
      title: "Actionable Recommendations Report",
      description:
        "You receive a detailed report with scores, insights, and specific recommendations.",
      subTitle: "Your report includes:",
      points: [
        "Overall alignment score on a 0–10 scale",
        "Section-wise breakdown with individual scores",
        "Specific contradictions and inconsistencies flagged",
        "Prioritized recommendations to fix gaps and improve alignment",
      ],
      outcome:
        "You walk away with a clear action plan to align your LinkedIn and resume for maximum professional impact.",
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
                  LinkedIn vs Resume Alignment
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A comprehensive comparison service that identifies gaps,
                  contradictions, and alignment opportunities between your
                  LinkedIn profile and resume.
                </p>

                <p className="text-lg leading-relaxed mb-8 font-medium">
                  Inconsistencies between your profiles raise red flags with
                  recruiters. We help you ensure both documents tell a
                  consistent, compelling professional story.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/compare">
                      Start Comparison
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
                    src="/scoring/compare_report.webp"
                    alt="LinkedIn vs Resume Alignment Report"
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
                      Alignment Insights
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
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                A systematic approach to aligning your professional presence
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
        <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Align Your Professional Presence?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get comprehensive insights into how your LinkedIn profile and
                resume align, and take action to improve your professional
                brand.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/compare">
                    Start Comparison
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

export default ComparisonServicePage;
