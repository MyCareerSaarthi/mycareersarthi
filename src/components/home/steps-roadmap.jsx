import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Sign Up and Set Your Goals",
    description:
      "Share your career goals, experience, and target roles so we can guide you with the right direction from the start.",
    position: "bottom",
  },
  {
    step: "02",
    title: "Build Your Profile Inside MCS",
    description:
      "Complete your career profile with key details, achievements, and preferences for expert and AI analysis.",
    position: "top",
  },
  {
    step: "03",
    title: "Receive Insights from Experts and AI",
    description:
      "Get detailed assessments of LinkedIn, resume, and positioning, translated into clear, actionable steps.",
    position: "bottom",
  },
  {
    step: "04",
    title: "Implement Improvements and Track Progress",
    description:
      "Apply recommendations and monitor visibility, profile performance, and recruiter engagement over time.",
    position: "top",
  },
];

const StepsRoadmap = () => {
  return (
    <div className="w-full py-20 px-4 md:px-8 overflow-hidden ">
      <div className="max-w-7xl mx-auto relative">
        {/* Desktop View (Horizontal Snake) */}
        <div className="hidden lg:block relative h-[500px]">
          {/* Background Waves */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex items-center h-40">
            {/* Wave Container */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90">
              {/* Segment 1: Left Edge to 12.5% */}
              <svg
                className="absolute left-0 top-0 h-full w-[12.5%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* Arch Down (Top half of sine) */}
                <path
                  d="M -50 100 Q 50 0 100 50"
                  fill="none"
                  stroke="#dcdafa"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 2: 12.5% to 37.5% */}
              <svg
                className="absolute left-[12.5%] top-0 h-full w-[25%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* Bowl (Bottom) */}
                <path
                  d="M 0 50 Q 50 120 100 50"
                  fill="none"
                  stroke="#b9b5f5"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 3: 37.5% to 62.5% */}
              <svg
                className="absolute left-[37.5%] top-0 h-full w-[25%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* Arch (Top) */}
                <path
                  d="M 0 50 Q 50 -20 100 50"
                  fill="none"
                  stroke="#9590ef"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 4: 62.5% to 87.5% */}
              <svg
                className="absolute left-[62.5%] top-0 h-full w-[25%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* Bowl (Bottom) */}
                <path
                  d="M 0 50 Q 50 120 100 50"
                  fill="none"
                  stroke="#726bea"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Segment 5: 87.5% to 100% */}
              <svg
                className="absolute left-[87.5%] top-0 h-full w-[12.5%] overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                {/* Arch (Top) */}
                <path
                  d="M 0 50 Q 50 -20 150 100"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="50"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          {/* Steps Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="grid grid-cols-4 h-full">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative flex flex-col justify-center items-center h-full"
                >
                  {/* Circle */}
                  <div className="z-10 bg-gray-50 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg border-4 border-white relative group transition-transform hover:scale-105 duration-300">
                    <span className="text-gray-500 font-bold text-lg leading-none mb-1">
                      Step
                    </span>
                    <span className="text-[#3E2723] font-bold text-3xl leading-none">
                      {step.step}
                    </span>
                  </div>

                  {/* Connector Line */}
                  <div
                    className={`absolute w-0.5 bg-gray-400 h-16 ${
                      step.position === "top"
                        ? "bottom-[calc(50%+4rem)]"
                        : "top-[calc(50%+4rem)]"
                    }`}
                  ></div>

                  {/* Content */}
                  <div
                    className={`absolute w-72 text-center ${
                      step.position === "top"
                        ? "bottom-[calc(50%+9rem)]"
                        : "top-[calc(50%+9rem)]"
                    }`}
                  >
                    <h3 className="text-[#3E2723] dark:text-primary-foreground font-bold text-xl mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
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
