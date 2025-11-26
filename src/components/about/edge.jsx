"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Users, Shield } from "lucide-react";

const AboutEdge = () => {
  const edges = [
    {
      title: "Proprietary RAG Model",
      description:
        "Our own scoring engine is the USP: accurate, explainable, and fast.",
      icon: Brain,
    },
    {
      title: "Founder-led Domain Expertise",
      description:
        "Decades of lived experience on LinkedIn translate into practical signal, not noise.",
      icon: Users,
    },
    {
      title: "Trustworthy Output",
      description:
        "We prioritize precision and integrity so you can act with confidence.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The MyCareerSarthi Edge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Quality, trust, and a proprietary model built for specificity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {edges.map((edge, index) => {
            const IconComponent = edge.icon;
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
                    <CardTitle className="text-xl mb-2">{edge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {edge.description}
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

export default AboutEdge;
