"use client";

import { motion } from "framer-motion";

const FounderImage = () => {
  return (
    <motion.div
      className="flex flex-col items-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-primary/30">
          <img
            src="/saurabh-sharma.webp"
            alt="Saurabh Sharma - Founder of MyCareerSarthi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background px-6 py-3 rounded-full shadow-lg border border-border min-w-max">
          <div className="text-center">
            <p className="text-base font-semibold text-foreground">
              Saurabh Sharma
            </p>
            <p className="text-sm text-muted-foreground">Founder & CEO</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-lg">
        <p className="text-muted-foreground text-base leading-relaxed">
          30+ years of experience in technology, consulting, and mentoring. A
          late-blooming LinkedIn expert who grew significant reach and impact.
        </p>
      </div>
    </motion.div>
  );
};

export default FounderImage;
