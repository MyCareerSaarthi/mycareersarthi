"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Target,
  Eye,
  Users,
  Quote,
  Lightbulb,
  TrendingUp,
  Heart,
  Award,
  Briefcase,
  MessageSquare,
  Code,
} from "lucide-react";

// Team data array
const teamMembers = [
  {
    id: 1,
    name: "Saurabh Sharma",
    role: "Founder & CEO",
    image: "/saurabh-sharma.jpeg",
    description: [
      "Saurabh brings over three decades of experience across technology, consulting, and mentoring. His own journey, evolving into a strong professional voice later in his career, showed how clarity, structured communication, and consistent positioning can reshape opportunities.",
      "MyCareerSarthi is built on that belief: professionals do not lack capability; they often lack the right positioning. He created MCS to bridge that gap with practical guidance supported by precise, role-aligned evaluation.",
    ],
    icon: Briefcase,
  },
  {
    id: 2,
    name: "Dr. Ghazala Usmani",
    role: "Chief Brand & Strategy Officer",
    image: null, // Placeholder
    description: [
      "Ghazala leads brand strategy, content, and client experience at MyCareerSarthi. With deep expertise in positioning, narrative clarity, and professional communication, she ensures every client presents a clear, compelling, and role-aligned professional identity.",
      "She plays a key role in developing MCS's frameworks for LinkedIn optimization, resume refinement, and personal branding, and works closely with clients to help them gain visibility, direction, and confidence in their career journey.",
    ],
    icon: Award,
  },
  {
    id: 3,
    name: "Rohan Phulkar",
    role: "Technical Lead",
    image: "/rohan-phulkar.png",
    description: [
      "Rohan is responsible for the complete technical architecture and implementation of MyCareerSarthi's platform. He designs, builds, and maintains the systems that power assessments, report generation, data handling, and secure client workflows.",
      "With strong experience in full-stack development, backend engineering, and infrastructure management, he ensures the platform is reliable, scalable, and secure. His work focuses on system performance, data integrity, and smooth delivery of structured career evaluation reports without operational friction.",
    ],
    icon: Code,
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              opacity: [0.8, 0.5, 0.8],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <motion.div
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium mb-4"
              >
                <Sparkles className="w-4 h-4 mr-2 inline" />
                About Us
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About Us
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />

        <div className="relative container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-8">
            {/* Story paragraphs with visual elements */}
            {[
              {
                text: "MyCareerSarthi didn't start with a business plan or market research. It started with a pattern our founder, Saurabh Sharma, couldn't ignore.",
                icon: Lightbulb,
                delay: 0.1,
              },
              {
                text: "After three decades in technology, consulting, and leadership, Saurabh kept meeting the same kind of professionals. People who had worked hard for years. People who had built solid careers quietly and consistently. People with real skills, genuine experience, and strong dedication.",
                icon: Users,
                delay: 0.2,
              },
              {
                text: "Yet they felt invisible.",
                highlight: true,
                delay: 0.3,
              },
              {
                text: "Their resumes didn't capture the impact they had created. Their LinkedIn profiles told incomplete stories. Their confidence was shaken not because they lacked ability, but because nobody had helped them see and articulate their own value.",
                icon: MessageSquare,
                delay: 0.4,
              },
              {
                text: "Saurabh watched this happen again and again. He realized the gap wasn't talent or competence. It was clarity. These professionals weren't struggling because they couldn't do the work. They were struggling because they didn't know how to position themselves in a job market that was changing faster than ever.",
                icon: TrendingUp,
                delay: 0.5,
              },
              {
                text: "That's when MyCareerSarthi took shape. Not as another resume service or profile polishing tool, but as a platform built to guide people. To bring clarity to confusion. To help professionals present themselves with the confidence their work already deserved.",
                icon: Sparkles,
                delay: 0.6,
              },
              {
                text: "We built our own AI model because generic tools weren't enough. The world didn't need another template generator. It needed precision, specificity, and insights that actually made sense for individual careers. Guidance that came with integrity, not just automation.",
                icon: Award,
                delay: 0.7,
              },
              {
                text: "MyCareerSarthi exists because we saw too many capable people remain unseen. We built this with gratitude for every professional who trusted us, humility about the responsibility we carry, and commitment to make career navigation easier for those who work tirelessly but struggle to be heard.",
                icon: Heart,
                delay: 0.8,
              },
              {
                text: "This is why we exist. And this is the story we carry forward every day.",
                highlight: true,
                delay: 0.9,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="relative"
              >
                {item.icon && (
                  <motion.div
                    className="absolute -left-12 top-2 hidden md:block"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: item.delay + 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </motion.div>
                )}
                <p
                  className={`text-lg md:text-xl leading-relaxed ${
                    item.highlight
                      ? "font-semibold text-primary text-xl md:text-2xl text-center py-4"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="relative py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Founder's Message
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground italic mb-6">
                    "When I started MyCareerSarthi, the goal was never just
                    creating a service. It was creating genuine support for
                    professionals who work hard yet remain unseen.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground italic mb-6">
                    Most people don't lack ability. They lack the right way to
                    express it.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground italic">
                    At MyCareerSarthi, we focus on clarity, honesty, and
                    guidance you can trust. Because your career isn't just about
                    finding a job. It's about finding the confidence to pursue
                    what you truly deserve."
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-lg font-semibold text-foreground">
                  — Saurabh Sharma
                </p>
                <p className="text-muted-foreground">
                  Founder, CEO & Chief Career Strategist, MyCareerSarthi
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />

        <div className="relative container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To help professionals communicate their value with clarity and
                  confidence through structured guidance, precise AI insights,
                  and a supportive, human-centered approach to career growth.
                </p>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every skilled professional is seen, understood,
                  and considered for the opportunities they deserve, regardless
                  of how well they can "market" themselves.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium mb-6"
            >
              <Users className="w-4 h-4 mr-2 inline" />
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-2" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
              The passionate professionals behind MyCareerSarthi
            </p>
          </motion.div>

          {/* Team Members - Flex Layout (No Grid) */}
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-8 md:p-10 bg-card/90 backdrop-blur-sm border-2 border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/40 overflow-hidden relative">
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Image Section */}
                    <div className="shrink-0">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.image ? (
                          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 shadow-2xl">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 shadow-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                            <member.icon className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground/50" />
                          </div>
                        )}
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary border-primary/20"
                        >
                          {member.role}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        {member.description.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-muted-foreground leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
