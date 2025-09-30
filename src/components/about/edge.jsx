"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutEdge = () => {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <Card className="bg-white/5 border-white/10">
                <CardHeader>
                    <CardTitle>The MyCareerSarthi Edge</CardTitle>
                    <CardDescription>Quality, trust, and a proprietary model built for specificity.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <h4 className="font-medium">Proprietary RAG Model</h4>
                            <p className="text-muted-foreground">Our own scoring engine is the USP: accurate, explainable, and fast.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-medium">Founder-led Domain Expertise</h4>
                            <p className="text-muted-foreground">Decades of lived experience on LinkedIn translate into practical signal, not noise.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-medium">Trustworthy Output</h4>
                            <p className="text-muted-foreground">We prioritize precision and integrity so you can act with confidence.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default AboutEdge;


