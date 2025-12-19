"use client";

import { motion } from "framer-motion";
import { UserPlus, Upload, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up & Choose Service",
    description:
      "Create your account and select from LinkedIn review, Resume review, or Alignment comparison based on your needs.",
    icon: UserPlus,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Upload Your Materials",
    description:
      "Provide your LinkedIn URL/PDF and/or resume. Optionally add your target role or paste a job description for personalized review.",
    icon: Upload,
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    title: "Get AI-Powered Review",
    description:
      "Our advanced AI reviews your profile or resume against industry standards and your target role, generating detailed scoring and improvement recommendations.",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "Get your comprehensive report with actionable feedback. Implement the recommended changes yourself or contact our experts for professional optimization services.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-semibold mb-6 border border-primary/20">
            🚀 Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Simple 4-step process to get comprehensive review and analysis of your career materials with AI-powered insights
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                        <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-bold rounded-full">
                          Step {step.number}
                        </div>
                        
                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>

                          {/* Text Content */}
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Decorative corner */}
                        <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-24 h-24 bg-gradient-to-br ${step.color} opacity-5 rounded-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500`} />
                      </div>
                    </div>

                    {/* Center Node - Desktop only */}
                    <div className="hidden lg:flex flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 items-center justify-center text-white text-2xl font-bold shadow-xl z-10 relative">
                      {index + 1}
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block flex-1" />
                  </div>

                  {/* Mobile connector line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-8">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ready to get started? Begin your review journey today!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Quick & Easy Process
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

