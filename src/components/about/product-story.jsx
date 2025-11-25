"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, Target, Shield } from "lucide-react";

const ProductStory = () => {
  const features = [
    {
      title: "Built for LinkedIn",
      description:
        "Purpose-crafted RAG pipeline tailored to the LinkedIn ecosystem.",
      content:
        "Our own model—trained and tuned for platform nuances—is our USP. It scores with precision and explains the why.",
      icon: Linkedin,
    },
    {
      title: "Specificity that guides",
      description:
        "Actionable, context-aware recommendations—not generic checklists.",
      content:
        "Every suggestion maps to an outcome: visibility, credibility, or conversion. You know what to fix and how.",
      icon: Target,
    },
    {
      title: "Trust you can rely on",
      description:
        "Transparent scoring and consistent results, release after release.",
      content:
        "We validate continuously and prefer clarity over hype. Your profile, content, and career deserve nothing less.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Product Story
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            We started as a small, focused team and built a purpose-designed RAG
            model for LinkedIn scoring. Our edge comes from two things: an
            obsession with output quality and an unwavering commitment to trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
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
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.content}
                    </p>
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

export default ProductStory;
