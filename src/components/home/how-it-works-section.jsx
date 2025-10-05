"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Sign up and build your comprehensive career profile with your goals, experience, and aspirations.",
  },
  {
    number: "02",
    title: "Select Your Services",
    description:
      "Choose from our tailored career services that align with your specific needs and professional objectives.",
  },
  {
    number: "03",
    title: "Receive Expert Insights",
    description:
      "Get detailed analysis and actionable feedback from our AI technology and industry experts.",
  },
  {
    number: "04",
    title: "Implement & Track Progress",
    description:
      "Apply recommendations and monitor your career growth with our performance analytics dashboard.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Career Transformation Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple steps to elevate your professional prospects and achieve your
            career goals
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line between steps */}
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-primary/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card border border-primary/10 rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 group">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-8 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
