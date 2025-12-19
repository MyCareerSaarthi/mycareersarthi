"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const benefits = [
  "Instant AI-powered review in minutes",
  "Detailed section-by-section scoring",
  "Actionable improvement recommendations",
  "ATS compatibility analysis",
];

const CtaSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

            <CardContent className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                      <Sparkles className="w-4 h-4" />
                      Limited Time Offer
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      Ready to Review Your Career Materials?
                    </h3>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      Join professionals who are getting instant AI-powered review and feedback to improve their LinkedIn profiles, resumes for ATS compatibility, and ensure consistent messaging across platforms.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-4 mb-8">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-foreground font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <SignedOut>
                      <Button
                        asChild
                        size="lg"
                        className="group relative px-8 py-6 text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                      >
                        <Link href="/signup" className="inline-flex items-center">
                          Get Started Now
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="px-8 py-6 text-lg border-2 hover:bg-primary/5 transition-colors"
                      >
                        <Link href="/contact-us">
                          Talk to an Expert
                        </Link>
                      </Button>
                    </SignedOut>
                    
                    <SignedIn>
                      <Button
                        asChild
                        size="lg"
                        className="group relative px-8 py-6 text-lg bg-gradient-to-r from-primary via-primary to-primary/80 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                      >
                        <Link href="/dashboard" className="inline-flex items-center">
                          Go to Dashboard
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="px-8 py-6 text-lg border-2 hover:bg-primary/5 transition-colors"
                      >
                        <Link href="/contact-us">
                          Need Expert Help?
                        </Link>
                      </Button>
                    </SignedIn>
                  </motion.div>
                </div>

                {/* Right Column - Visual Element */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative hidden lg:block"
                >
                  <div className="relative">
                    {/* Central card */}
                    <div className="relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-2xl border border-border/50 backdrop-blur-sm">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                            <Zap className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">AI-Powered</div>
                            <div className="text-2xl font-bold">Instant Review</div>
                          </div>
                        </div>

                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-muted/50 rounded-xl p-4">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">98%</div>
                            <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4">
                            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">500+</div>
                            <div className="text-xs text-muted-foreground mt-1">Users</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-2xl flex items-center justify-center"
                    >
                      <Sparkles className="h-12 w-12 text-white" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-2xl flex items-center justify-center"
                    >
                      <CheckCircle2 className="h-12 w-12 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple"].map((company, index) => (
              <div key={index} className="text-xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
