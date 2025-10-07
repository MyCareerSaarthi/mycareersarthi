"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import FounderImage from "./founder-image";

const FounderSpotlight = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <FounderImage />

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="w-fit">
              Our Founder's Story
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              The Visionary Behind MyCareerSarthi
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Our founder brings 30+ years of experience across technology,
                consulting, and mentoring. A late-blooming LinkedIn expert, he
                grew significant reach and impact—proving it's never too late to
                build authority with intention and consistency.
              </p>
              <p className="text-lg leading-relaxed">
                His vision is simple: enable experienced professionals to unlock
                their true potential through LinkedIn—using clarity, data-backed
                action, and trust as the north star.
              </p>
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">300K+</div>
                  <div className="text-sm text-muted-foreground">
                    LinkedIn Followers
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">50M+</div>
                  <div className="text-sm text-muted-foreground">
                    Content Views
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSpotlight;
