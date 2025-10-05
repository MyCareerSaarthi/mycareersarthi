"use client";

import { Card, CardContent } from "@/components/ui/card";

const FounderSpotlight = () => {
    return (
        <section className="max-w-6xl py-16 px-16 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="relative flex justify-center md:justify-start">
                    <Card className="bg-white/5 border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0)] overflow-hidden rounded-md w-[400px] h-[420px] mt-8">
                        <CardContent className="p-0 flex items-center justify-center">
                            <img src="/founder-img.jpg" alt="Founder" className="p-0 w-full h-full object-fill" />
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">About Us</p>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Driven by Expertise. Powered by People.</h2>
                    <p className="mt-6 text-muted-foreground">
                        Our founder brings 30+ years across technology, consulting, and mentoring. A late-blooming LinkedIn expert, he grew significant reach and impact—proving it’s never too late to build authority with intention and consistency.
                    </p>
                    <p className="text-muted-foreground">
                        His vision is simple: enable people to unlock their true potential through LinkedIn—using clarity, data-backed action, and trust as the north star.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FounderSpotlight;


