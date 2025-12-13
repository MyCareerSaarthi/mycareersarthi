"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI review work?",
    answer:
      "Our AI reviews your LinkedIn profile or resume against industry standards, ATS requirements, and your target role. It provides section-by-section scoring with specific improvement recommendations based on thousands of successful profiles and resumes. You receive detailed feedback to implement the changes yourself.",
  },
  {
    question: "How long does the review take?",
    answer:
      "Most reviews complete in 2-3 minutes. Once you upload your materials and select your target role, our AI processes everything quickly and generates a comprehensive report with actionable feedback and improvement suggestions.",
  },
  {
    question: "What's included in the LinkedIn ↔ Resume Alignment review?",
    answer:
      "This service compares your LinkedIn profile and resume side-by-side to identify gaps, inconsistencies, and misalignments. You'll receive a detailed alignment scoring report showing where your messaging differs and recommendations you can implement to ensure both tell the same professional story.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We use enterprise-grade encryption to protect your data. Your information is only used for analysis purposes and is never shared with third parties. You can delete your data at any time from your dashboard.",
  },
  {
    question: "Can I get help from a human expert to optimize my profile?",
    answer:
      "Yes! Our platform provides instant AI-powered review and feedback. If you need professional help to actually optimize and rewrite your LinkedIn profile or resume, we offer expert services where career professionals can personally implement the changes for you. Contact us through the 'Talk to an Expert' button to learn more about these personalized optimization services.",
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer:
      "Yes, we offer a 100% satisfaction guarantee. If you're not happy with your review report, contact us within 7 days for a full refund. We're confident you'll find immense value in our detailed feedback and recommendations.",
  },
  {
    question: "How often should I get my profile reviewed?",
    answer:
      "We recommend getting a review whenever you make significant changes to your profile/resume, apply for a different role, or at least once every 3-6 months to ensure your materials stay current with evolving hiring trends and ATS requirements.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "For LinkedIn, you can provide a URL or PDF export. For resumes, we accept PDF, DOCX, and TXT formats. We recommend PDF for best results as it preserves formatting.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know about our AI-powered career review services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "border-primary/50 bg-card shadow-xl"
                    : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card"
                }`}
              >
                {/* Gradient glow on active */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : ""
                  }`}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Question number badge */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg -translate-y-0.5"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        }`}
                      >
                        {index + 1}
                      </div>
                      
                      <h3
                        className={`text-lg font-semibold pt-1 transition-colors ${
                          activeIndex === index
                            ? "text-foreground"
                            : "text-foreground/90 group-hover:text-foreground"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron icon */}
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          activeIndex === index
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <motion.p
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm">
            <p className="text-lg font-semibold">Still have questions?</p>
            <p className="text-muted-foreground text-sm max-w-md">
              Our team is here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => (window.location.href = "/contact-us")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

