"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, CheckCircle } from "lucide-react";

const AboutStats = () => {
  const stats = [
    {
      value: "500+",
      label: "Profiles Optimized",
      icon: Users,
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: CheckCircle,
    },
    {
      value: "1000+",
      label: "Career Goals Achieved",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results from real professionals who trusted us with their
            career transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
