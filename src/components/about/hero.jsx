"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium"
            >
              About MyCareerSarthi
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Driven by Expertise.
            <span className="block mt-2 text-primary">Powered by People.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help experienced professionals unlock their true potential
            through comprehensive LinkedIn optimization and resume creation
            services. {/* Removed "and personal branding" */}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
