"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Linkedin, ArrowRight, Search, Target } from "lucide-react";

const points = [
  "Profile-level score and section-wise review",
  "Role-based feedback on headline, about, and experience",
  "Actionable suggestions to improve discoverability",
  "Clear next steps to optimize your profile",
];

export default function LinkedinReviewContent() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Get a Detailed LinkedIn Profile Review
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understand what is working, what is missing, and how to position your
              LinkedIn profile better for your target role.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6 rounded-2xl border-border">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
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
                <li>Professionals preparing for a job switch</li>
                <li>Candidates not getting recruiter responses</li>
                <li>Anyone who wants role-specific profile clarity</li>
                <li>Users who want practical, implementable feedback</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/linkedin/analyze">
                Start LinkedIn Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
