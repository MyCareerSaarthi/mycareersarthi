"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
              Legal Document
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: 23rd September 2025
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                MyCareerSarthi ("MyCareerSarthi", "we", "our", or "us") is
                committed to protecting your privacy and ensuring that your
                personal data is handled responsibly, securely, and in
                compliance with applicable Indian laws, including the
                Information Technology Act, 2000, the Information Technology
                (Reasonable Security Practices and Procedures and Sensitive
                Personal Data or Information) Rules, 2011, and the Digital
                Personal Data Protection Act, 2023 (DPDP Act).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how we collect, use, store, share,
                and protect your information when you interact with our website,
                services, or platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We may collect the following categories of personal and business
                information:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    Personal Identifiable Information (PII):
                  </strong>{" "}
                  Name, email address, phone number, postal address, job title,
                  organization details.
                </li>
                <li>
                  <strong className="text-foreground">
                    Sensitive Personal Data (SPDI):
                  </strong>{" "}
                  Passwords, financial information (bank account, payment card
                  details), health information, official identifiers (e.g.,
                  Aadhaar, PAN) — only where explicitly required and lawfully
                  obtained.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> IP
                  address, browser type, operating system, device identifiers,
                  pages visited, access times, and cookies.
                </li>
                <li>
                  <strong className="text-foreground">
                    Professional Information:
                  </strong>{" "}
                  Curriculum vitae, work experience, and skills (where
                  voluntarily provided for mentoring, training, or recruitment
                  purposes).
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We process personal data only for lawful purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  To provide, improve, and customize our consulting and training
                  services.
                </li>
                <li>
                  To communicate with you regarding inquiries, contracts,
                  newsletters, or events.
                </li>
                <li>To process payments and invoices.</li>
                <li>
                  To comply with legal obligations, audit requirements, or
                  government requests.
                </li>
                <li>
                  To send marketing communications (only with your explicit
                  consent, where required).
                </li>
                <li>
                  To analyze usage trends for website and service improvements.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Legal Basis for Processing
              </h2>
              <p className="text-muted-foreground mb-4">
                Under the DPDP Act, 2023, and IT Rules, we process your data
                based on:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Consent:</strong> Where
                  you have explicitly consented (e.g., newsletter subscription).
                </li>
                <li>
                  <strong className="text-foreground">
                    Contractual Necessity:
                  </strong>{" "}
                  To perform our obligations under a service agreement.
                </li>
                <li>
                  <strong className="text-foreground">Legal Obligation:</strong>{" "}
                  To comply with applicable laws, regulations, or court orders.
                </li>
                <li>
                  <strong className="text-foreground">
                    Legitimate Interest:
                  </strong>{" "}
                  To improve services, enhance security, or prevent fraud.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal data. However, we may share
                information:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  With trusted third-party service providers (IT systems,
                  payment processors, cloud hosting, analytics) under strict
                  confidentiality agreements.
                </li>
                <li>
                  With regulators, government authorities, or law enforcement
                  where legally mandated.
                </li>
                <li>
                  During business transfers such as mergers, acquisitions, or
                  restructuring, subject to applicable laws.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain personal data only for as long as necessary to fulfill
                the purposes outlined above or as required by law. Upon
                withdrawal of consent or end of retention need, your data will
                be securely deleted or anonymized.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                As per the DPDP Act, 2023, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Right to Access:</strong>{" "}
                  Request details of your personal data processed by us.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Correction:
                  </strong>{" "}
                  Request rectification of inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-foreground">Right to Erasure:</strong>{" "}
                  Request deletion of your data where legally permissible.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Consent Withdrawal:
                  </strong>{" "}
                  Withdraw consent for processing (without affecting prior
                  lawful processing).
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Grievance Redressal:
                  </strong>{" "}
                  Approach our Data Protection Officer (DPO) for concerns.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Security Measures
              </h2>
              <p className="text-muted-foreground">
                We implement reasonable security practices and procedures
                (RSPPs), including encryption, access control, and regular
                security audits, in line with ISO/IEC 27001 standards to protect
                against unauthorized access, disclosure, alteration, or
                destruction of data.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                8. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                Our website uses cookies and similar technologies to enhance
                user experience and analyze site performance. You may choose to
                disable cookies in your browser, but some features may not
                function properly.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                9. Grievance Redressal & Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                For any concerns regarding your personal data, please contact
                our Data Protection Officer (DPO):
              </p>
              <div className="bg-muted/50 border border-border p-6 rounded-lg">
                <p className="text-foreground">
                  <strong>Name:</strong> Saurabh Sharma
                </p>
                <p className="text-foreground">
                  <strong>Email:</strong> support@mycareersarthi.com
                </p>
                <p className="text-foreground">
                  <strong>Phone:</strong> 9810291730
                </p>
              </div>
              <p className="text-muted-foreground mt-4">
                As per Indian law, we aim to acknowledge and resolve grievances
                within 30 days.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                10. Updates to this Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect
                changes in laws, regulations, or business practices. Updates
                will be posted on this page with a revised "Effective Date."
              </p>
            </CardContent>
          </Card>
        </motion.main>

        <motion.footer
          className="mt-12 pt-6 border-t border-border text-center text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>© 2025 My Career Sarthi. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
