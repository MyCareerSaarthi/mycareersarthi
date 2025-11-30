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
  ArrowLeftRight,
} from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import ComparePage from "@/app/compare/page";

const HeroSection = () => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-3"
  >
    <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
      ✨ AI-Powered Career Growth Platform
    </Badge>
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="font-bold text-3xl  leading-tight text-foreground"
  >
    Transform Your Career with
    <span className="block mt-2 text-primary text-3xl">
      Expert Guidance
    </span>
  </motion.h1>
</div>


          {/* Service Cards - Now visible without scrolling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6"
          >
            {/* LinkedIn Profile Review Card */}
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

            {/* Resume Review Card */}
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

            {/*resume linkedin allignment*/}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2  group-hover:bg-primary/20 transition-colors">
                  <ArrowLeftRight className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Linkedin & Resume Allignment</CardTitle>
                <CardDescription className="text-base">
                  Discover how well your linkedin profile and resume align to present a cohesive personal brand.
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
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
