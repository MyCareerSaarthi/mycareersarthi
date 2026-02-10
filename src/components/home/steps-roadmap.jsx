import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Career Diagnostic & Role Fit Assessment",
    description:
      "You share your experience, career stage, target roles, and goals, and we assess hard skills, soft skills, role alignment, and market fit to identify why interview calls may be stalled and which roles give you a 2–3× higher shortlisting probability.",
    position: "bottom",
  },
  {
    step: "02",
    title: "Personalised Career Roadmap Creation",
    description:
      "We design a clear career roadmap built at the intersection of your skills, target roles, and current market demand, helping you avoid 6–12 months of wrong applications by defining exact roles, skill gaps, and next milestones.",
    position: "top",
  },
  {
    step: "03",
    title: "LinkedIn & Resume Alignment to the Career Roadmap",
    description:
      "Your LinkedIn profile and resume are restructured to match your roadmap, improve ATS keyword alignment, and reflect recruiter expectations, increasing profile relevance and visibility by 3–5× in recruiter searches.",
    position: "bottom",
  },
  {
    step: "04",
    title: "Proven Job Search System and Strategy implementation",
    description:
      "We implement a focused job search system tailored to your profile, covering where to apply, whom to approach, and how to prioritise roles. Hence, your applications shift from volume-based effort to interview-call–driven outcomes within 30–60 days.",
    position: "top",
  },
  {
    step: "05",
    title: "Interview Preparation to Convert Calls into Offers",
    description:
      "You prepare for interviews using structured answer frameworks, role-specific stories, and expert-led mock interviews that mirror real hiring rounds, improving interview-to-offer conversion rates by 2× or more.",
    position: "bottom",
  },
  {
    step: "06",
    title: "Execute, Track, and Optimise Progress",
    description:
      "You apply the strategy, track recruiter responses, interview traction, and outcomes, and refine execution based on real data so your progress compounds instead of resetting with every job switch attempt.",
    position: "top",
  },
];

const StepsRoadmap = () => {
  return (
    <div className="w-full py-20 px-4 md:px-8 overflow-hidden ">
      <div className="max-w-[90%] mx-auto relative">
        {/* Desktop View (Horizontal Snake) */}
        <div className="hidden lg:block relative h-[500px]">
          {/* Background Waves */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex items-center h-40">
            {/* Wave Container */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90">
              {/* Segment 1: 0% to 8.33% (half of first column) */}

              {/* Segment 2: 8.33% to 25% */}
              <svg
                className="absolute left-[8.33%] top-0 h-full w-[16.67%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 0 50 Q 50 120 100 50"
                  fill="none"
                  stroke="#dcdafa"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 3: 25% to 41.67% */}
              <svg
                className="absolute left-[25%] top-0 h-full w-[16.67%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 0 50 Q 50 -20 100 50"
                  fill="none"
                  stroke="#c5c1f7"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 4: 41.67% to 58.33% */}
              <svg
                className="absolute left-[41.67%] top-0 h-full w-[16.67%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 0 50 Q 50 120 100 50"
                  fill="none"
                  stroke="#a9a3f2"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 5: 58.33% to 75% */}
              <svg
                className="absolute left-[58.33%] top-0 h-full w-[16.67%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 0 50 Q 50 -20 100 50"
                  fill="none"
                  stroke="#8d85ed"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 6: 75% to 91.67% */}
              <svg
                className="absolute left-[75%] top-0 h-full w-[16.67%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 0 50 Q 50 120 100 50"
                  fill="none"
                  stroke="#7167e8"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          {/* Steps Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="grid grid-cols-6 h-full w-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative flex flex-col justify-center items-center h-full"
                >
                  {/* Circle */}
                  <div className="z-10 bg-gray-50 rounded-full w-16 h-16 lg:w-20 lg:h-20 flex flex-col items-center justify-center shadow-lg border-4 border-white relative group transition-transform hover:scale-105 duration-300">
                    <span className="text-gray-500 font-bold text-xs lg:text-sm leading-none mb-0.5">
                      Step
                    </span>
                    <span className="text-[#3E2723] font-bold text-base lg:text-lg leading-none">
                      {step.step}
                    </span>
                  </div>

                  {/* Connector Line */}
                  <div
                    className={`absolute w-0.5 bg-gray-400 h-12 lg:h-14 ${
                      step.position === "top"
                        ? "bottom-[calc(50%+2.5rem)] lg:bottom-[calc(50%+3rem)]"
                        : "top-[calc(50%+2.5rem)] lg:top-[calc(50%+3rem)]"
                    }`}
                  ></div>

                  {/* Content */}
                  <div
                    className={`absolute w-48 lg:w-84 text-center ${
                      step.position === "top"
                        ? "bottom-[calc(50%+6rem)] lg:bottom-[calc(50%+7rem)]"
                        : "top-[calc(50%+6rem)] lg:top-[calc(50%+7rem)]"
                    }`}
                  >
                    <h3 className="text-[#3E2723] dark:text-primary-foreground font-bold text-sm lg:text-base mb-2 leading-tight">
                      {step.title}
                    </h3>
                    {/* <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">
                      {step.description}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View (Vertical) */}
        <div className="lg:hidden flex flex-col space-y-12 relative py-8">
          <div className="absolute left-8 top-0 bottom-0 w-2 rounded-full bg-gradient-to-b from-[#F6E6D9] via-[#E5989B] to-[#D66F58] opacity-50"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-start pl-20 pr-4"
            >
              <div className="absolute left-0 top-0 w-16 h-16 bg-white rounded-full border-4 border-[#FBC4AB] flex flex-col items-center justify-center z-10 shadow-md">
                <span className="text-xs text-gray-500 font-bold">Step</span>
                <span className="font-bold text-[#3E2723] text-xl">
                  {step.step}
                </span>
              </div>
              <div>
                <h3 className="text-[#3E2723] font-bold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsRoadmap;
