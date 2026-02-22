"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutGallery = () => {
  const galleryItems = [
    {
      src: "/globe.svg",
      alt: "Global Reach",
      title: "Global Impact",
    },
    {
      src: "/window.svg",
      alt: "Innovation",
      title: "Innovation Hub",
    },
    {
      src: "/file.svg",
      alt: "Research",
      title: "Research & Development",
    },
    {
      src: "/vercel.svg",
      alt: "Technology",
      title: "Technology Stack",
    },
    {
      src: "/founder-img.webp",
      alt: "Founder",
      title: "Leadership",
    },
  ];

  const scrollLeft = () => {
    const container = document.getElementById("gallery-carousel");
    if (!container) return;
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.getElementById("gallery-carousel");
    if (!container) return;
    container.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Journey in Pictures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse of our journey—learning, building, and mentoring
            experienced professionals.
          </p>
        </motion.div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border-border"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border-border"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div
            id="gallery-carousel"
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 scroll-smooth px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-80"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
