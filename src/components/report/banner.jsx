import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionList from "./section-list";
import {
  FileText,
  Lightbulb,
  ArrowRight,
  AlertTriangle,
  Loader2,
} from "lucide-react";

const Banner = ({ data }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const bannerData = data?.section_scores?.find(
    (section) => section.name === "banner"
  );

  const bannerUrl = data?.profile?.banner;

  // Reset loading state when image URL changes
  useEffect(() => {
    if (bannerUrl) {
      setImageLoading(true);
      setImageError(false);
    }
  }, [bannerUrl]);

  // If no banner data, check if it's mentioned as a weakness in other sections
  if (!bannerData) {
    // Check headline section for missing banner weakness
    const headlineSection = data?.section_scores?.find(
      (section) => section.name?.toLowerCase() === "headline"
    );
    const hasMissingBannerWeakness = headlineSection?.weaknesses?.some(
      (w) =>
        w.toLowerCase().includes("missing banner") ||
        w.toLowerCase().includes("missing background")
    );

    if (hasMissingBannerWeakness) {
      return (
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Banner/Background Image
            </h1>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              Evaluation of your LinkedIn banner/background image section
            </p>
          </div>
          <div className="border border-yellow-500/50 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  Banner/Background Image Missing
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  A professional banner image helps create a strong first
                  impression and showcases your personal brand. Consider adding
                  a relevant banner image to enhance your LinkedIn profile's
                  visual appeal.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="text-muted-foreground">No banner data available</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Banner/Background Image
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your LinkedIn banner/background image section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {bannerData.score}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      {data?.profile?.banner && (
        <div className="mb-6 w-full">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Banner/Background Image
          </h3>
          <div className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm p-4 flex justify-center overflow-hidden relative min-h-[200px]">
            {/* Loading Skeleton */}
            {imageLoading && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-4xl h-[200px] bg-muted animate-pulse rounded-lg flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
                </div>
              </div>
            )}

            {/* Error State */}
            {imageError && (
              <div className="w-full max-w-4xl h-[200px] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <AlertTriangle className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    Image failed to load
                  </p>
                </div>
              </div>
            )}

            {/* Actual Image */}
            {!imageError && (
              <img
                src={data.profile.banner}
                alt="Banner Image"
                loading="lazy"
                decoding="async"
                className={`w-full max-w-4xl h-auto rounded-lg object-cover shadow-lg transition-opacity duration-300 ${
                  imageLoading ? "opacity-0 absolute" : "opacity-100 relative"
                }`}
                style={{ maxHeight: "300px" }}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
              />
            )}
          </div>
        </div>
      )}

      {/* Summary */}
      <Accordion
        defaultValue="summary"
        type="single"
        collapsible
        className="mb-6 w-full"
      >
        <AccordionItem
          value="summary"
          className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
        >
          <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
            <span className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Summary
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <p className="text-foreground leading-relaxed">
              {bannerData.summary}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Weaknesses */}
      {bannerData.weaknesses && bannerData.weaknesses.length > 0 && (
        <Accordion type="single" collapsible className="mb-6 w-full">
          <AccordionItem
            value="weaknesses"
            className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
          >
            <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
              <span className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                Weaknesses
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <SectionList
                items={bannerData.weaknesses}
                icon="✦"
                iconColor="text-yellow-600 dark:text-yellow-400"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {/* Recommendations */}
      {bannerData.recommendations && bannerData.recommendations.length > 0 && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="recommendations"
            className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
          >
            <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
              <span className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Recommendations
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <ul className="space-y-3">
                {bannerData.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-foreground">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default Banner;
