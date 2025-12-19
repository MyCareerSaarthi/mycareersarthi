import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle2, IndianRupee, Sparkles } from "lucide-react";

const pricingData = [
  {
    service: "LinkedIn Profile Re-Design & Optimization",
    details: [
      "Current Profile Analysis with Report",
      "Profile Optimization with Target Score > 7+",
    ],
    price: "7,999",
  },
  {
    service: "Resume Redesign & Enrichment",
    details: [
      "Current Resume Analysis with Report",
      "Resume Re-design & Optimization with Target Score > 7+",
    ],
    price: "7,999",
  },
  {
    service: "LinkedIn & Resume Alignment",
    details: [
      "Current Alignment Score with Gaps",
      "Closure of All Gaps & Revised Alignment Score > 7+",
    ],
    price: "7,999",
  },
  {
    service: "Interview Preparation Module",
    details: [
      "Mock Interview Round 1",
      "Mock Interview Report with Gaps & Suggestions",
      "Interview Script Preparation",
      "Mock Interview Round 2",
    ],
    price: "9,999",
  },
];

const bundles = [
  {
    title: "Career Foundation Bundle",
    description: "Perfect for strong positioning & clarity",
    includes: [
      "LinkedIn Optimization",
      "Resume Redesign",
      "LinkedIn & Resume Alignment",
      "Career Assessment & Roadmap",
    ],
    price: "15,999",
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl font-bold tracking-tight">
          Career Services Pricing
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Choose individual services or save more with bundled packages.
        </p>
      </div>

      {/* Individual Services */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Individual Services
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{item.service}</CardTitle>
                <CardDescription>
                  Includes analysis, optimization & review
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col justify-between h-full">
                <ul className="space-y-3 mb-6">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Price
                    </span>
                    <div className="flex items-center gap-1 text-xl font-semibold">
                      <IndianRupee className="h-4 w-4" />
                      {item.price}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bundles */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Bundled Packages
        </h2>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {bundles.map((bundle, index) => (
            <Card
              key={index}
              className={`relative ${
                bundle.highlight
                  ? "border-2 border-primary shadow-lg"
                  : ""
              }`}
            >
              {bundle.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Best Value
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl">{bundle.title}</CardTitle>
                <CardDescription>{bundle.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {bundle.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Bundle Price
                  </span>
                  <div className="flex items-center gap-1 text-2xl font-bold">
                    <IndianRupee className="h-5 w-5" />
                    {bundle.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-center text-sm text-muted-foreground">
        * Prices are subject to change. Custom packages available on request.
      </p>
    </div>
  );
};

export default Pricing;
