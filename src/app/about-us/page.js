"use client";

import React from "react";
import AboutHero from "@/components/about/hero";
import FounderSpotlight from "@/components/about/founder-spotlight";
import ProductStory from "@/components/about/product-story";
import AboutEdge from "@/components/about/edge";
import AboutGallery from "@/components/about/gallery";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AboutHero />
      <FounderSpotlight />
      <ProductStory />
      <AboutEdge />
      {/* <AboutGallery /> */}
    </div>
  );
};

export default AboutUs;
