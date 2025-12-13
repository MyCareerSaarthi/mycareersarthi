import React from "react";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import CtaSection from "@/components/home/cta-section";

const AnalysisServices = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <CtaSection />
    </div>
  );
};

export default AnalysisServices;
