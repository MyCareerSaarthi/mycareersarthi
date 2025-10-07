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
import { Linkedin, FileText, Users, CheckCircle } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const services = [
  {
    title: "LinkedIn Profile Review & Optimization",
    description:
      "Get expert feedback to increase your profile visibility and attract recruiters with our comprehensive analysis.",
    features: [
      "Profile headline & summary enhancement",
      "Keyword optimization for search algorithms",
      "Experience section restructuring",
      "Visual content recommendations",
    ],
    icon: Linkedin,
  },
  {
    title: "Resume Creation, Review & Optimization",
    description:
      "Create, review, and optimize resumes that pass through applicant tracking systems with our AI-powered scoring and expert guidance.",
    features: [
      "Professional resume creation from scratch",
      "ATS compatibility analysis",
      "Keyword matching optimization",
      "Format & structure enhancement",
    ],
    icon: FileText,
  },
  {
    title: "Personal Branding for Experienced Professionals",
    description:
      "Develop a strong personal brand that positions you as an industry leader and attracts the right opportunities.",
    features: [
      "Personal brand strategy development",
      "Thought leadership positioning",
      "Content strategy & messaging",
      "Professional networking guidance",
    ],
    icon: Users,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive career development solutions designed for experienced
            professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <SignedOut>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </SignedOut>
                    <SignedIn>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Link href="/dashboard">Use Service</Link>
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

export default ServicesSection;
