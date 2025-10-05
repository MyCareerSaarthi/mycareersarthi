"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Get expert feedback to increase your profile visibility and attract recruiters with our comprehensive analysis.",
    features: [
      "Profile headline & summary enhancement",
      "Keyword optimization for search algorithms",
      "Experience section restructuring",
      "Visual content recommendations",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    title: "ATS-Compliant Resume Builder",
    description:
      "Create resumes that pass through applicant tracking systems with our AI-powered scoring and expert guidance.",
    features: [
      "ATS compatibility analysis",
      "Keyword matching optimization",
      "Format & structure enhancement",
      "Achievement quantification",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M14 2h-8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10l-6-6zm-1 12h-6v-2h6v2zm0-4h-6v-2h6v2zm7.293-6.707l-4.293-4.293a.999.999 0 0 0-1.414 0l-2.586 2.586 6 6 2.586-2.586a.999.999 0 0 0 0-1.414z" />
      </svg>
    ),
  },
  {
    title: "AI Mock Interviews",
    description:
      "Practice with our AI-powered interview simulator that provides real-time feedback and performance analytics.",
    features: [
      "Industry-specific question sets",
      "Behavioral analysis & feedback",
      "Speech & communication coaching",
      "Performance tracking dashboard",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
      </svg>
    ),
  },
  {
    title: "Personalized Career Coaching",
    description:
      "One-on-one sessions with industry experts to guide your career journey and goal setting with tailored strategies.",
    features: [
      "Custom career roadmap creation",
      "Industry insights & trends",
      "Networking strategy development",
      "Skill gap analysis",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c1.471 0 2.853.427 4.034 1.17l.091.062 2.586 2.586c.781.781 1.197 1.821 1.197 2.908s-.416 2.127-1.197 2.908l-2.586 2.586-.062.091c-.743 1.181-1.17 2.563-1.17 4.034v2c0 1.104-.895 2-2 2s-2-.896-2-2v-2c0-1.471-.427-2.853-1.17-4.034l-.062-.091-2.586-2.586c-.781-.781-1.197-1.821-1.197-2.908s.416-2.127 1.197-2.908l2.586-2.586.091-.062c1.181-.743 2.563-1.17 4.034-1.17zm0-2c-2.117 0-4.164.676-5.832 1.932l-.173.136-2.829 2.829c-1.309 1.309-2.001 3.057-2.001 4.906s.692 3.597 2.001 4.906l2.829 2.829.173.136c1.668 1.256 3.715 1.932 5.832 1.932 1.017 0 2.022-.151 3-.44v4.44h-4c-.552 0-1 .447-1 1s.448 1 1 1h6c.552 0 1-.447 1-1s-.448-1-1-1h-4v-4.44c.978.289 1.983.44 3 .44 2.117 0 4.164-.676 5.832-1.932l.173-.136 2.829-2.829c1.309-1.309 2.001-3.057 2.001-4.906s-.692-3.597-2.001-4.906l-2.829-2.829-.173-.136c-1.668-1.256-3.715-1.932-5.832-1.932z" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Career Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert tools and guidance to accelerate your career growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-muted-foreground"
                  >
                    <svg
                      className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Explore Service
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
