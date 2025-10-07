"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    designation: "Senior Product Manager",
    company: "TechCorp",
    testimonial:
      "MyCareerSarthi transformed my LinkedIn profile completely. I went from 50 profile views to 500+ in just 2 weeks. The expert feedback was incredibly detailed and actionable.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    designation: "Software Engineering Manager",
    company: "InnovateX",
    testimonial:
      "The resume optimization service is outstanding. My new resume passed through ATS systems and I landed 3 interviews within a month. Highly recommend for experienced professionals.",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    designation: "Senior Data Scientist",
    company: "DataFlow Inc",
    testimonial:
      "The personal branding guidance helped me establish thought leadership in my field. I'm now regularly invited to speak at conferences and my network has grown significantly.",
  },
  {
    id: 4,
    name: "James Wilson",
    designation: "VP of Marketing",
    company: "GrowthCo",
    testimonial:
      "As an experienced professional, I needed help positioning myself for C-level roles. MyCareerSarthi's strategic approach to personal branding was exactly what I needed.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    designation: "Senior UX Designer",
    company: "DesignStudio",
    testimonial:
      "The LinkedIn optimization was game-changing. I started receiving messages from top recruiters and landed my dream job at a Fortune 500 company within 6 weeks.",
  },
  {
    id: 6,
    name: "David Kim",
    designation: "Engineering Director",
    company: "ScaleTech",
    testimonial:
      "The comprehensive approach to career materials optimization is unmatched. Every detail was considered, from ATS compatibility to industry-specific keywords. Exceptional service.",
  },
];

const TestimonialsSection = () => {
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
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from experienced professionals who have transformed their
            careers with our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="text-lg font-medium bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.testimonial}"
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

export default TestimonialsSection;
