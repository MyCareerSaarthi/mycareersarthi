"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardLink } from "@/components/ui/hard-link";
import { motion } from "framer-motion";
import {
  Linkedin,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const HeroSection = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                ✨ AI-Powered Career Growth Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-3xl lg:text-5xl font-bold text-foreground"
            >
              Transform Your Career with
              <span className="block mt-2 text-primary">Expert Guidance</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            ></motion.div>
          </div>

          {/* Service Cards - Now visible without scrolling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6"
          >
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  LinkedIn Profile Review
                </CardTitle>
                <CardDescription className="text-base">
                  Optimize your LinkedIn profile to attract top recruiters and
                  opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.location.href = "/linkedin/analyze"}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Resume Review</CardTitle>
                <CardDescription className="text-base">
                  Create and optimize resumes that pass through applicant
                  tracking systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.location.href = "/resume/analyze"}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Personal Branding Card - Commented out
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Personal Branding Evaluation</CardTitle>
                <CardDescription className="text-base">
                  Build a strong personal brand for experienced professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="flex justify-center">
    <Button 
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Link href="/linkedin/analyze">Get Started</Link>
                        </Button>
  </div>
              </CardContent>
            </Card>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
