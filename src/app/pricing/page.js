"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started with career development",
    features: [
      "Basic LinkedIn profile review",
      "Resume scoring (limited)",
      "Access to career resources",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
    featured: false,
  },
  {
    name: "Professional",
    price: "₹999",
    period: "month",
    description: "Ideal for serious job seekers",
    features: [
      "Comprehensive LinkedIn optimization",
      "Full resume analysis & scoring",
      "3 AI mock interviews/month",
      "Personalized career roadmap",
      "Priority email support",
      "Access to premium resources",
    ],
    cta: "Start Free Trial",
    popular: false,
    featured: true,
  },
  {
    name: "Expert",
    price: "₹2999",
    period: "month",
    description: "For those seeking personalized expert guidance",
    features: [
      "Everything in Professional",
      "Unlimited AI mock interviews",
      "2 one-on-one coaching sessions/month",
      "Personalized job recommendations",
      "Interview preparation strategies",
      "Dedicated career coach",
      "Resume writing assistance",
    ],
    cta: "Start Free Trial",
    popular: false,
    featured: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your career journey. All plans
            include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="h-full">
              <Card
                className={`bg-card border border-primary/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 h-full flex flex-col ${
                  plan.featured ? "ring-2 ring-primary/50 scale-105" : ""
                }`}
              >
                {plan.featured && (
                  <div className="bg-primary/10 text-primary text-xs font-semibold px-4 py-2 text-center">
                    RECOMMENDED
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period !== "forever" && (
                      <span className="text-muted-foreground">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col">
                  <Button
                    asChild
                    variant={plan.featured ? "default" : "outline"}
                    className={`w-full rounded-full py-5 font-medium hover:scale-105 transition-transform ${
                      plan.featured
                        ? ""
                        : "border-primary/30 hover:bg-primary/10"
                    }`}
                  >
                    <Link href="/signup">{plan.cta}</Link>
                  </Button>
                  {plan.period !== "forever" && (
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                      7-day money-back guarantee
                    </p>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can upgrade or downgrade your plan at any time.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="font-semibold mb-2">Do you offer discounts?</h3>
              <p className="text-muted-foreground text-sm">
                We offer special pricing for students and annual subscriptions.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="font-semibold mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, UPI, and bank transfers.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, our paid plans come with a 7-day free trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
