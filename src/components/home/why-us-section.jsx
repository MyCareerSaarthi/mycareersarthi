"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Sparkles } from "lucide-react";

const comparisons = [
  {
    feature: "AI-Powered Review & Analysis",
    us: true,
    others: false,
  },
  {
    feature: "Section-by-Section Scoring",
    us: true,
    others: false,
  },
  {
    feature: "ATS Compatibility Review",
    us: true,
    others: true,
  },
  {
    feature: "Instant Results (2-3 min)",
    us: true,
    others: false,
  },
  {
    feature: "LinkedIn ↔ Resume Alignment Review",
    us: true,
    others: false,
  },
  {
    feature: "Role-Specific Feedback",
    us: true,
    others: false,
  },
  {
    feature: "Professional Optimization Services",
    us: true,
    others: false,
  },
  {
    feature: "Detailed PDF Reports",
    us: true,
    others: true,
  },
];

const WhyUsSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 border border-violet-500/30 text-violet-600 dark:text-violet-400 text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            What Makes Us Different
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              MyCareerSarthi
            </span>
            ?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl">
            We're not just another resume checker. Our AI-powered platform offers comprehensive review and detailed feedback that others can't match.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-0 shadow-2xl bg-card/80 backdrop-blur-xl">
            <CardContent className="p-0">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 border-b border-border/50">
                <div className="text-sm font-medium text-muted-foreground">
                  Features
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    MyCareerSarthi
                  </div>
                </div>
                <div className="text-center text-sm font-medium text-muted-foreground">
                  Other Services
                </div>
              </div>

              {/* Comparison rows */}
              <div className="divide-y divide-border/30">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-muted/30 transition-colors group"
                  >
                    <div className="flex items-center text-foreground font-medium">
                      {item.feature}
                    </div>
                    <div className="flex items-center justify-center">
                      {item.us ? (
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg"
                        >
                          <Check className="w-5 h-5 text-white" />
                        </motion.div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-center">
                      {item.others ? (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Check className="w-5 h-5 text-muted-foreground" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="p-8 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 border-t border-border/50">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">
                    Ready to experience the difference?
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Join 2,500+ professionals who've already upgraded their career materials
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Advanced AI Technology",
              description: "Powered by cutting-edge language models for accurate analysis",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Industry Expertise",
              description: "Built by career experts and recruiters who know what works",
              gradient: "from-violet-500 to-purple-500",
            },
            {
              title: "Continuous Updates",
              description: "Regular improvements based on latest hiring trends",
              gradient: "from-emerald-500 to-teal-500",
            },
          ].map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

