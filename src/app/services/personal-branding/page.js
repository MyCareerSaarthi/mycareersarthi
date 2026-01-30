"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  User,
  Target,
  FileText,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
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
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <User className="w-7 h-7 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Personal Branding
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Personal branding is not about becoming an influencer or posting
              for vanity metrics. It is about being visible, credible, and
              memorable to recruiters and hiring managers.
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-8 font-medium">
              This service helps job professionals build a strong professional
              presence on LinkedIn so the right people notice them before,
              during, and after applications.
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
            Ready to Build Your Personal Brand?
          </h2>
          <p className="text-muted-foreground mb-6">
            Build a LinkedIn presence that supports shortlisting, interviews,
            and offers.
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

export default PersonalBrandingPage;
