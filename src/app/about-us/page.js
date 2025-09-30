"use client";

import React from "react";
import AboutHero from "@/components/about/hero";
import FounderSpotlight from "@/components/about/founder-spotlight";
import AboutStats from "@/components/about/stats";
import ProductStory from "@/components/about/product-story";
import AboutEdge from "@/components/about/edge";
import AboutGallery from "@/components/about/gallery";


const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
            <AboutHero />
            <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
                <FounderSpotlight />
                <AboutStats />
                <ProductStory />
                <AboutEdge />
                <AboutGallery />
            </section>
        </div>
    );
};

export default AboutUs;