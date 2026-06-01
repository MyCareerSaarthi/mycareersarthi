"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, FileText, ArrowRight, ClipboardCheck, Target } from "lucide-react";

const points = [
  "Section-wise scoring for summary, skills, experience, and more",
  "Role-aligned feedback for stronger recruiter relevance",
  "Clarity on ATS gaps and missing keywords",
  "Practical suggestions you can apply immediately",
];

export default function ResumeReviewContent() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
              <FileText className="w-4 h-4" />
              Resume Review Service
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Get a Detailed Resume Review
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Review your resume against target role expectations and identify the
              exact improvements needed to increase interview chances.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6 rounded-2xl border-border">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-primary" />
                What You Get
              </h2>
              <ul className="space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 rounded-2xl border-border">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Best For
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Job seekers applying to competitive roles</li>
                <li>Professionals refining role-specific resumes</li>
                <li>Candidates struggling with shortlisting</li>
                <li>Users wanting clear, structured resume feedback</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/resume/analyze">
                Start Resume Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
