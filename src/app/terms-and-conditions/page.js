"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
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
              Terms & Conditions
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to MyCareerSarthi ("MyCareerSarthi", "we", "our", "us").
                By accessing our website, engaging with our consultants, or
                using any of our services, you agree to these Terms &
                Conditions. Please read them carefully, as they define your
                rights, obligations, and the limits of our responsibility.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Acceptance of Terms
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  These Terms govern your access to and use of the
                  MyCareerSarthi website, resources, consulting engagements,
                  workshops, and training programs.
                </li>
                <li>
                  By using our services or website, you agree to abide by these
                  Terms. If you do not agree, you must not use our website or
                  services.
                </li>
                <li>
                  Separate contracts or agreements signed with clients (e.g.,
                  Statements of Work, Service Agreements) will prevail over
                  these Terms to the extent of any conflict.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. Services We Provide
              </h2>
              <p className="text-muted-foreground mb-4">
                MyCareerSarthi offers consulting and training services,
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    Product & Technology Consulting:
                  </strong>{" "}
                  Product strategy, digital product engineering, data and AI
                  consulting, and modernization.
                </li>
                <li>
                  <strong className="text-foreground">
                    Agile Coaching & Training:
                  </strong>{" "}
                  Agile transformation, workshops, role-based coaching, and
                  leadership enablement.
                </li>
                <li>
                  <strong className="text-foreground">
                    HR & People Consulting:
                  </strong>{" "}
                  Leadership development, culture audits, talent management
                  frameworks, and organizational design.
                </li>
                <li>
                  <strong className="text-foreground">
                    Career Mentoring & Leadership Coaching:
                  </strong>{" "}
                  Structured mentoring programs for professionals at different
                  career stages.
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                MyCareerSarthi reserves the right to modify, expand, or
                discontinue services at its discretion.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Website Use
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  All content on our website (text, graphics, blogs, guides, and
                  downloadable resources) is provided for informational purposes
                  only.
                </li>
                <li>
                  You agree not to misuse the website, upload malicious code, or
                  attempt unauthorized access.
                </li>
                <li>
                  Copying, redistributing, or commercially exploiting any
                  website content without our written consent is prohibited.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  All frameworks, guides, training materials, consulting
                  reports, and website content are the intellectual property of
                  MyCareerSarthi.
                </li>
                <li>
                  You may not reproduce, distribute, or adapt our content
                  without prior written permission.
                </li>
                <li>
                  All trademarks, service marks, and logos used on this site are
                  the property of MyCareerSarthi or its partners.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Confidentiality & Data Protection
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  Both MyCareerSarthi and clients agree to treat shared
                  business, technical, and personal information as confidential.
                </li>
                <li>
                  MyCareerSarthi follows the Digital Personal Data Protection
                  Act, 2023 (DPDP Act) and the IT Act, 2000 to ensure
                  responsible handling of data.
                </li>
                <li>
                  For more information, please refer to our{" "}
                  <a
                    className="text-primary hover:underline"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Fees, Payments & Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  Fees for consulting, training, and mentoring services will be
                  outlined in client contracts, proposals, or invoices.
                </li>
                <li>
                  Payments are due as per the agreed schedule. Delays may
                  attract penalties or suspension of services.
                </li>
                <li>
                  Training/workshop fees once paid are non-refundable, unless
                  the cancellation is initiated by MyCareerSarthi.
                </li>
                <li>
                  In case of subscription or recurring engagements,
                  cancellations require a minimum 30 days prior notice.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  MyCareerSarthi provides services on a best-effort basis. While
                  we aim to deliver measurable business outcomes, we do not
                  guarantee specific financial results, market performance, or
                  funding success.
                </li>
                <li>
                  We are not liable for indirect, incidental, or consequential
                  damages, including but not limited to loss of profits,
                  business interruption, or data loss.
                </li>
                <li>
                  Clients remain responsible for implementation, adoption, and
                  internal execution of strategies delivered through consulting
                  engagements.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                8. Third-Party Services
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  MyCareerSarthi may recommend or integrate third-party
                  platforms (e.g., AI tools, analytics platforms, HR systems).
                </li>
                <li>
                  We do not control these platforms and are not responsible for
                  their performance, security, or compliance obligations.
                </li>
                <li>
                  Clients are encouraged to review third-party terms
                  independently.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                9. Governing Law & Jurisdiction
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  These Terms shall be governed by and construed under the laws
                  of India.
                </li>
                <li>
                  Any disputes shall fall under the exclusive jurisdiction of
                  the courts of New Delhi.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                10. Updates to Terms
              </h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. Continued use of
                our services after updates indicates acceptance of the revised
                Terms. Updates will be published on this page with the latest
                effective date.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Disclaimer
              </h2>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                1. General Disclaimer
              </h3>
              <p className="text-muted-foreground mb-6">
                The information on MyCareerSarthi's website, blogs, case
                studies, newsletters, and resources is provided for
                informational and educational purposes only. It should not be
                interpreted as legal, financial, or professional advice.
                Decisions made based on such content are at the user's
                discretion and risk.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                2. Consulting & Training Disclaimer
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                <li>
                  MyCareerSarthi provides consulting frameworks, advisory, and
                  training based on industry best practices and experience.
                </li>
                <li>
                  However, outcomes depend on multiple factors including client
                  readiness, market dynamics, technology adoption, and team
                  maturity.
                </li>
                <li>
                  MyCareerSarthi does not guarantee revenue growth, funding
                  success, or specific operational results.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                3. Accuracy of Information
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                <li>
                  While we make reasonable efforts to keep our content accurate
                  and updated, errors, omissions, or outdated information may
                  occur.
                </li>
                <li>
                  MyCareerSarthi disclaims any liability for reliance placed
                  solely on published materials without engaging our
                  professional services.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                4. Third-Party Links & Tools
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                <li>
                  Our website may contain links to external websites or tools
                  for reference.
                </li>
                <li>
                  MyCareerSarthi is not responsible for the accuracy, legality,
                  or security of external content.
                </li>
                <li>Use of such third-party resources is at your own risk.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                5. Limitation of Liability
              </h3>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted under Indian law:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>
                  MyCareerSarthi and its consultants shall not be liable for any
                  direct, indirect, incidental, or consequential damages arising
                  from the use of our website, resources, or services.
                </li>
                <li>
                  Users agree to indemnify MyCareerSarthi against claims
                  resulting from misuse of services or violation of these Terms.
                </li>
              </ul>
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

export default TermsAndConditions;
