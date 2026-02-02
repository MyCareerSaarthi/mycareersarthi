"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Target,
  Zap,
  Award,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ResumeOptimizationPage = () => {
  const processSteps = [
    {
      icon: Target,
      title: "Career Consultation & Analysis",
      description:
        "We start by understanding your career goals, target roles, and industry requirements through an in-depth consultation.",
      subTitle: "This initial phase covers:",
      points: [
        "Understanding your career trajectory and aspirations",
        "Identifying target roles and industries",
        "Analyzing your existing resume and identifying gaps",
        "Reviewing job descriptions for your target positions",
      ],
      outcome:
        "You get a clear understanding of what your resume needs to succeed in your target job market.",
    },
    {
      icon: Zap,
      title: "ATS Optimization & Keyword Strategy",
      description:
        "We optimize your resume to pass Applicant Tracking Systems and reach human recruiters.",
      subTitle: "Our ATS optimization includes:",
      points: [
        "Keyword analysis against target job descriptions",
        "Format optimization for ATS compatibility",
        "Strategic placement of industry-specific terms",
        "Removal of elements that cause ATS parsing issues",
      ],
      outcome:
        "Your resume will have a 95% ATS pass rate and appear in relevant recruiter searches.",
    },
    {
      icon: ClipboardCheck,
      title: "Content Strategy & Achievement Focus",
      description:
        "Your experience is rewritten to highlight accomplishments, impact, and relevance to target roles.",
      subTitle: "We focus on:",
      points: [
        "Converting job duties into quantifiable achievements",
        "Highlighting leadership, decision-making, and outcomes",
        "Crafting a compelling professional summary",
        "Ensuring consistency in tone and messaging",
      ],
      outcome:
        "Your resume tells a clear story of progression and impact, not just responsibilities.",
    },
    {
      icon: Award,
      title: "Professional Formatting & Final Delivery",
      description:
        "Your resume is professionally formatted and delivered in multiple formats for different applications.",
      subTitle: "You receive:",
      points: [
        "ATS-friendly PDF optimized for digital submissions",
        "Editable Word document for future updates",
        "Plain text version for online application forms",
        "Quick reference guide for resume customization",
      ],
      outcome:
        "You walk away with a complete resume package ready for any job application scenario.",
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
              <FileText className="w-7 h-7 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Resume Optimization
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Professional resume creation and optimization services that help
              you stand out from the competition and land your dream job.
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-8 font-medium">
              This is not about generic templates. It is about creating a
              tailored, ATS-optimized resume that speaks directly to recruiters
              and hiring managers.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link href="/resume/analyze">
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
            Ready to Create Your Winning Resume?
          </h2>
          <p className="text-muted-foreground mb-6">
            Get a professionally optimized resume that lands interviews.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild>
              <Link href="/resume/analyze">
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

export default ResumeOptimizationPage;
