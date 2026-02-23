"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock, Shield, Eye, Database } from "lucide-react";

const PrivacyPolicyContent = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              Privacy & Trust
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: 21st February 2026
            </p>
          </div>
        </motion.header>

        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At MyCareerSarthi, we value your privacy and are committed to
                protecting your personal data. This Privacy Policy outlines how
                we collect, use, and safeguard your information when you visit
                our website or use our career mentoring and AI profiling
                services.
              </p>
            </CardContent>
          </Card>

          <section className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Database className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold">Data Collection</h2>
                  <p className="text-sm text-muted-foreground">
                    We collect information you provide directly to us, such as
                    your name, email, professional background, and resume data
                    for analysis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold">Data Usage</h2>
                  <p className="text-sm text-muted-foreground">
                    Your data is used to provide personalized career insights,
                    improve our AI models, and communicate with you about our
                    services.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold">
                  1. Information We Collect
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong>Personal Identifiers:</strong> Name, email
                      address, and contact details.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong>Professional Data:</strong> Resumes, LinkedIn
                      profile information, and career history.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      <strong>Usage Data:</strong> How you interact with our
                      platform and AI scoring tools.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground">
                  We process your information for purposes based on legitimate
                  business interests, the fulfillment of our contract with you,
                  compliance with our legal obligations, and/or your consent.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    To provide and facilitate delivery of career mentoring
                    services.
                  </li>
                  <li>
                    To generate AI-powered profile scores and recommendations.
                  </li>
                  <li>
                    To improve our platform functionality and user experience.
                  </li>
                  <li>
                    To send administrative information and marketing
                    communications (with your consent).
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold">
                  3. Data Protection (DPDP Act Compliance)
                </h2>
                <p className="text-muted-foreground">
                  In accordance with the Digital Personal Data Protection Act
                  (DPDP Act), we implement robust technical and organizational
                  security measures designed to protect the security of any
                  personal information we process.
                </p>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 italic text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary shrink-0" />
                  <p>
                    We do not sell your personal data to third parties. Data is
                    shared only with your explicit consent or as required for
                    service delivery.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold">4. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions or comments about this policy, you may
                  email us at:
                  <br />
                  <span className="font-semibold text-foreground">
                    support [at] mycareersarthi.com
                  </span>
                </p>
              </CardContent>
            </Card>
          </section>
        </motion.main>

        <footer className="mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2026 My Career Sarthi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
