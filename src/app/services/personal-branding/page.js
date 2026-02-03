"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  User,
  Target,
  FileText,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const PersonalBrandingPage = () => {
  const processSteps = [
    {
      icon: Target,
      title: "Role-Aligned Content Strategy",
      description:
        "We create a clear content direction tailored to your job goals.",
      subTitle: "This focuses on:",
      points: [
        "What kind of posts recruiters actually read and trust",
        "How to talk about your work, experience, and thinking",
        "Using keywords and language recruiters search for",
        'Positioning yourself as capable and credible, not "job-seeking"',
      ],
      outcome:
        "Your content reflects professional maturity and clarity, not desperation.",
    },
    {
      icon: FileText,
      title: "Content Creation & Write-Ups",
      description:
        "Based on the strategy, we help you with ready-to-use content.",
      subTitle: "This includes:",
      points: [
        "Professionally written posts aligned to your domain",
        "Content that highlights decision-making, experience, and impact",
        "Posts that signal expertise without overselling",
        "Messaging that fits Indian hiring sensibilities and expectations",
      ],
      outcome: "Your profile starts telling a consistent, confident story.",
    },
    {
      icon: Users,
      title: "Networking & Managed Outreach",
      description: "We help you grow the right network, not just a bigger one.",
      subTitle: "This includes:",
      points: [
        "Strategic connection outreach to recruiters and hiring managers",
        "Networking aligned with your target roles and companies",
        "Approaching professionals the right way on LinkedIn",
        "Increasing profile visits and recruiter familiarity",
      ],
      outcome:
        "Your LinkedIn presence starts supporting inbound opportunities, not just applications.",
    },
    {
      icon: Award,
      title: "Recruiter-Credible Online Presence",
      description:
        "The final outcome is a LinkedIn presence that works with your job search.",
      subTitle: "You leave with:",
      points: [
        "A profile that supports interviews and conversations",
        "Content that reinforces your credibility",
        "A network that includes the right decision-makers",
        "Better visibility during hiring cycles",
      ],
      outcome:
        "Your personal brand supports shortlisting, interviews, and offers, not just impressions.",
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
                  Personal Branding
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Personal branding is not about becoming an influencer or
                  posting for vanity metrics. It is about being visible,
                  credible, and memorable to recruiters and hiring managers.
                </p>

                <p className="text-lg leading-relaxed mb-8 font-medium">
                  This service helps job professionals build a strong
                  professional presence on LinkedIn so the right people notice
                  them before, during, and after applications.
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
                    src="/services/personal-branding.svg"
                    alt="Personal Branding Illustration"
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
                      Build Credibility
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
                A strategic approach to building your professional presence
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
                Ready to Build Your Personal Brand?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Build a LinkedIn presence that supports shortlisting,
                interviews, and offers.
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

export default PersonalBrandingPage;
