"use client";

import { Button } from "@/components/ui/button";

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/10">
                        About MyCareerSarthi
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 leading-tight">
                        Driven by Expertise. Powered by People.
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                        We help professionals unlock their true potential on LinkedIn through precise scoring,
                        actionable insights, and trustworthy guidance.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <Button size="lg" className="rounded-full px-7">Explore Our Journey</Button>
                        <Button size="lg" variant="outline" className="rounded-full px-7 border-gray-700 hover:bg-gray-800/50">Our Values</Button>
                    </div>
                </div>
            </div>

            {/* Ambient shapes */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        </section>
    );
};

export default AboutHero;


