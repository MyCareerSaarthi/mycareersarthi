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
import {
  Linkedin,
  FileText,
  ArrowLeftRight,
  CheckCircle,
  PhoneCall,
} from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const services = [
  {
    title: "LinkedIn Profile Review",
    description:
      "Upload your LinkedIn profile URL or PDF and select your target role or paste a job description. Get comprehensive AI-powered review with section-by-section scoring and improvement recommendations.",
    features: [
      "Profile headline and About section review",
      "Experience bullets and achievements analysis",
      "Skills and endorsements gap identification",
      "Banner and profile picture feedback",
    ],
    icon: Linkedin,
    route: "/linkedin/analyze",
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    lightBg:
      "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
  },
  {
    title: "Resume Review",
    description:
      "Upload your resume (PDF, DOCX, or TXT) and get detailed analysis on ATS compatibility, keyword gaps, formatting issues, and content structure with actionable feedback for your target role.",
    features: [
      "ATS compatibility and parsing review",
      "Role-specific keyword gap analysis",
      "Format and structure evaluation",
      "Achievement quantification suggestions",
    ],
    icon: FileText,
    route: "/resume/analyze",
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    lightBg:
      "from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30",
  },
  {
    title: "LinkedIn ↔ Resume Alignment Review",
    description:
      "Compare your LinkedIn profile and resume side-by-side to identify gaps, inconsistencies, and misalignments. Get detailed alignment scoring and recommendations to ensure both tell the same professional story.",
    features: [
      "Side-by-side consistency review",
      "Gap identification with scoring",
      "Messaging alignment analysis",
      "Experience and skills comparison",
    ],
    icon: ArrowLeftRight,
    route: "/compare",
    gradient: "from-emerald-500 via-green-600 to-teal-600",
    lightBg:
      "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden bg-muted/20"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5" />
      </div>

      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background" />

      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm text-primary text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI-Powered Career Analysis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Review Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Choose from instant AI-powered review tools that analyze your
            LinkedIn profile, resume, and professional consistency with detailed
            feedback and improvement recommendations.
          </p>
        </motion.div>

        {/* Staggered Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card pl-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.lightBg} opacity-50`}
                  />

                  <CardContent className="relative p-0">
                    <div
                      className={`flex flex-col ${
                        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                      } items-center gap-8`}
                    >
                      {/* Icon Section */}
                      <div className="relative flex-shrink-0 p-8 lg:p-12">
                        <div
                          className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500`}
                        >
                          <IconComponent className="h-16 w-16 lg:h-20 lg:w-20 text-white" />
                          <div className="absolute inset-0 bg-white/20 rounded-3xl group-hover:animate-pulse" />
                        </div>
                        {/* Decorative dots */}
                        <div className="absolute top-4 right-4 w-20 h-20 opacity-20">
                          <div className="grid grid-cols-4 gap-2">
                            {[...Array(16)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-foreground"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-8 lg:py-12 lg:px-0">
                        <CardTitle className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base md:text-lg mb-6 leading-relaxed text-foreground/70">
                          {service.description}
                        </CardDescription>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                          <SignedOut>
                            <Button
                              size="lg"
                              className={`bg-gradient-to-r ${service.gradient} text-white border-0 hover:opacity-90 transition-opacity shadow-lg px-8`}
                              onClick={() => (window.location.href = "/signup")}
                            >
                              Sign Up to Analyze
                            </Button>
                          </SignedOut>
                          <SignedIn>
                            <Button
                              size="lg"
                              className={`bg-gradient-to-r ${service.gradient} text-white border-0 hover:opacity-90 transition-opacity shadow-lg px-8`}
                              onClick={() =>
                                (window.location.href = service.route)
                              }
                            >
                              Start Analysis
                            </Button>
                          </SignedIn>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <CardContent className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-xl">
                    <PhoneCall className="h-12 w-12 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Need Professional Optimization Help?
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Our platform provides detailed review and analysis. Want
                    personalized optimization services? Our career experts can
                    rewrite and optimize your LinkedIn profile or resume
                    tailored to your industry and goals.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 hover:opacity-90 transition-opacity shadow-lg px-8"
                    onClick={() => (window.location.href = "/contact-us")}
                  >
                    Contact Our Experts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
