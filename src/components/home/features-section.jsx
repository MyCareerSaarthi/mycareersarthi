"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Users, FileText, TrendingUp } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Get instant feedback on your LinkedIn profile and resume with our advanced AI technology.",
    icon: Brain,
    delay: 0.1,
  },
  {
    title: "Expert Guidance",
    description:
      "Connect with industry experts who provide personalized guidance for your career materials and personal branding.",
    icon: Users,
    delay: 0.2,
  },
  {
    title: "Comprehensive Reports",
    description:
      "Receive detailed, actionable feedback to improve your LinkedIn profile, resume, and personal brand.",
    icon: FileText,
    delay: 0.3,
  },
  {
    title: "Professional Growth",
    description:
      "Track your professional development and see measurable improvements in your career materials.",
    icon: TrendingUp,
    delay: 0.4,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MyCareerSarthi?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive career development tools that help
            experienced professionals stand out in today's competitive job
            market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl mb-3">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SignedOut>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto font-medium group-hover:text-primary transition-colors"
                      >
                        <Link href="/signup">
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </Button>
                    </SignedOut>
                    <SignedIn>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto font-medium group-hover:text-primary transition-colors"
                      >
                        <Link href="/dashboard">
                          Try now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </Button>
                    </SignedIn>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
