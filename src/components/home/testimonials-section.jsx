"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Senior Product Manager",
    company: "Tech Startup",
    testimonial:
      "The LinkedIn review was incredibly detailed! I received specific feedback on my headline, summary, and experience sections. Implemented the recommendations myself and saw a 300% increase in recruiter views within 2 weeks.",
    rating: 5,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    designation: "Software Engineer",
    company: "Fortune 500",
    testimonial:
      "The resume ATS review helped me understand why I wasn't getting callbacks. The feedback on formatting and keyword gaps was spot-on. Fixed everything myself and got 5 interview calls in the next month!",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Anita Desai",
    designation: "Marketing Manager",
    company: "E-commerce Platform",
    testimonial:
      "The alignment review was eye-opening. I had no idea my LinkedIn and resume were telling different stories. The scoring system and recommendations made it easy to identify and fix inconsistencies on my own.",
    rating: 5,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    designation: "Data Analyst",
    company: "Consulting Firm",
    testimonial:
      "Loved the detailed section-wise scoring and feedback for both LinkedIn and resume. The AI recommendations were practical and easy to implement myself. Highly recommend for any job seeker!",
    rating: 5,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Sanjana Reddy",
    designation: "HR Business Partner",
    company: "Multinational Corp",
    testimonial:
      "As an HR professional, I was impressed by the quality of review feedback. The insights align perfectly with what recruiters look for. Used it for my own profile and recommended to my network.",
    rating: 5,
    color: "from-pink-500 to-rose-500",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-muted/30 via-muted/50 to-background overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="testimonial-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#testimonial-dots)" />
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-lg">
            ⭐ Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            See how professionals improved their career materials with our AI-powered review and feedback
          </p>
        </motion.div>

        {/* Testimonials Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={index === 2 ? "lg:row-span-2" : ""}
            >
              <Card className="group relative h-full overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500">
                {/* Gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color}`} />
                
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6 relative">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-300`}>
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-12 h-12 rounded-lg bg-gradient-to-br opacity-20 group-hover:rotate-12 transition-transform duration-500" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <Avatar className="w-14 h-14 ring-2 ring-offset-2 ring-primary/20">
                      <AvatarFallback className={`text-lg font-bold bg-gradient-to-br ${testimonial.color} text-white`}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.designation}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Decorative element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-tl-full group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Happy Users", value: "500+" },
              { label: "Success Rate", value: "98%" },
              { label: "Avg. Score Increase", value: "+35%" },
              { label: "Interview Callbacks", value: "3x" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
