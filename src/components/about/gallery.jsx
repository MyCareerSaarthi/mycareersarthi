"use client";

import { Button } from "@/components/ui/button";

const AboutGallery = () => {
    return (
        <section className="space-y-6 max-w-6xl mx-auto px-4">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold">In Pictures</h2>
                <p className="text-muted-foreground mt-2">A glimpse of our journey—learning, building, and mentoring.</p>
            </div>
            <div className="relative">
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white/30 rounded-full"
                    onClick={() => {
                        const container = document.getElementById("gallery-carousel");
                        const scrollAmount = 300;
                        if (!container) return;
                        if (container.scrollLeft === 0) {
                            container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
                        } else {
                            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
                        }
                    }}
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full"
                    onClick={() => {
                        const container = document.getElementById("gallery-carousel");
                        const scrollAmount = 300;
                        if (!container) return;
                        if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth - 5) {
                            container.scrollTo({ left: 0, behavior: "smooth" });
                        } else {
                            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
                        }
                    }}
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Button>
                <div
                    id="gallery-carousel"
                    className="flex gap-4 overflow-x-auto scrollbar-hide py-4 scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 w-64">
                        <img src="/globe.svg" alt="Journey" className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 w-64">
                        <img src="/window.svg" alt="Building" className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 w-64">
                        <img src="/file.svg" alt="Research" className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 w-64">
                        <img src="/vercel.svg" alt="Team" className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 w-64">
                        <img src="/founder-img.jpg" alt="Founder" className="w-full h-full object-cover opacity-80" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutGallery;


