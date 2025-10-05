"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductStory = () => {
    return (
        <section className="space-y-6 max-w-6xl mx-auto px-4">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold">Our Product Story</h2>
                <p className="text-muted-foreground mt-2">
                    We started as a small, focused team and built a purpose-designed RAG model for LinkedIn scoring. Our edge comes from two things: an obsession with output quality and an unwavering commitment to trust.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                        <CardTitle>Built for LinkedIn</CardTitle>
                        <CardDescription>Purpose-crafted RAG pipeline tailored to the LinkedIn ecosystem.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Our own model—trained and tuned for platform nuances—is our USP. It scores with precision and explains the why.
                    </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                        <CardTitle>Specificity that guides</CardTitle>
                        <CardDescription>Actionable, context-aware recommendations—not generic checklists.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        Every suggestion maps to an outcome: visibility, credibility, or conversion. You know what to fix and how.
                    </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                        <CardTitle>Trust you can rely on</CardTitle>
                        <CardDescription>Transparent scoring and consistent results, release after release.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        We validate continuously and prefer clarity over hype. Your profile, content, and career deserve nothing less.
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ProductStory;


