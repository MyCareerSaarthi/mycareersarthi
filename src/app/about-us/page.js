"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";

const AboutUsPage = () => {
  const team = [
    {
      name: "Saurabh Sharma",
      role: "Founder & CEO",
      image: "/saurabh-sharma.jpeg",
      description:
        "Saurabh leads MyCareerSarthi with a vision to transform how professionals approach job search in India. With deep expertise in career strategy and hiring dynamics, he ensures every service is grounded in real-world outcomes.",
    },
    {
      name: "Dr. Ghazala Usmani",
      role: "Chief Brand & Strategy Officer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEW73mjkB7myA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693067042175?e=1771459200&v=beta&t=KIuE3TlZ7VBkK9IIAiOnCXpbwpjaKBkJTegGWZtWKeI",
      description:
        "Dr. Ghazala brings strategic vision and brand clarity to MCS. Her expertise in professional positioning helps shape how we communicate and deliver value to job seekers across career stages.",
    },
    {
      name: "Rohan Phulkar",
      role: "Technical Lead",
      image: "/rohan-phulkar.png",
      description:
        "Rohan drives the technology behind MyCareerSarthi. From AI-powered tools to seamless user experiences, he ensures the platform delivers practical, reliable solutions for job seekers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Story
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              MyCareerSarthi was born from a pattern we kept seeing across the
              Indian job market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p className="text-foreground">
              People around us were capable, qualified, and hardworking. They
              had spent years building their careers and doing meaningful work.
              Yet many of them felt stuck.
            </p>

            <p className="text-foreground font-medium">
              The problem was not talent or effort but how hiring had changed.
            </p>

            <p className="text-muted-foreground">
              In India, LinkedIn began influencing shortlisting as much as
              resumes. Recruiters started scanning profiles for keywords, not
              just experience. Interviews became more structured and
              role-specific, even at senior levels. But most professionals were
              still navigating their careers the old way, applying broadly and
              hoping experience would speak for itself.
            </p>

            <p className="text-foreground font-medium">
              That disconnect led to MyCareerSarthi.
            </p>

            <p className="text-muted-foreground">
              We did not build MCS as another resume or LinkedIn optimisation
              service. We built it to help professionals understand where they
              stand, which roles genuinely fit their experience, and how to move
              forward with a clear job search and interview strategy.
            </p>

            <p className="text-muted-foreground">
              Today, we work with freshers, working professionals, mid-level
              managers, senior leaders, career switchers, and those returning
              after career gaps.
            </p>

            <p className="text-foreground font-medium">
              MyCareerSarthi exists to help professionals navigate the Indian
              job market with confidence, focus, and intent without blind
              applications or guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Meet the Team
            </h2>

            <div className="space-y-12">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-6 items-center md:items-start ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-border">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className={`text-center md:text-left ${index % 2 === 1 ? "md:text-right" : ""}`}
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
