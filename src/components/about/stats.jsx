"use client";

import { Separator } from "@/components/ui/separator";

const AboutStats = () => {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <Separator />
            <div className="grid grid-cols-1 divide-x md:divide-x-2 md:grid-cols-3 gap-8 py-12">
                <div className="text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-white">300k+</div>
                    <div className="text-muted-foreground text-lg">LinkedIn Followers</div>
                </div>
                <div className="text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-white">50M+</div>
                    <div className="text-muted-foreground text-lg">Content Impressions</div>
                </div>
                <div className="text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-white">95%</div>
                    <div className="text-muted-foreground text-lg">Profile Optimization Success</div>
                </div>
            </div>
            <Separator />
        </section>
    );
};

export default AboutStats;


