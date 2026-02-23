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

const ProfilePicture = ({ data }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const profileData = data?.section_scores?.find(
    (section) => section.name === "Profile Picture"
  );

  const profilePicUrl = data?.profile?.profile_pic;

  // Reset loading state when image URL changes
  useEffect(() => {
    if (profilePicUrl) {
      setImageLoading(true);
      setImageError(false);
    }
  }, [profilePicUrl]);

  // If no profile picture data, check if it's mentioned as a weakness in other sections
  if (!profileData) {
    // Check headline section for missing profile picture weakness
    const headlineSection = data?.section_scores?.find(
      (section) => section.name?.toLowerCase() === "headline"
    );
    const hasMissingPicWeakness = headlineSection?.weaknesses?.some(
      (w) =>
        w &&
        typeof w === "string" &&
        w.toLowerCase().includes("missing profile picture")
    );

    if (hasMissingPicWeakness) {
      return (
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Profile Picture
            </h1>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              Evaluation of your LinkedIn profile picture section
            </p>
          </div>
          <div className="border border-yellow-500/50 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  Profile Picture Missing
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  A professional profile picture significantly improves profile
                  visibility and trustworthiness. Consider adding a clear,
                  professional headshot to enhance your LinkedIn presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="text-muted-foreground">
        No profile picture data available
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Profile Picture
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your LinkedIn profile picture section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {profileData.score}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Picture Image */}
      {data?.profile?.profile_pic && (
        <div className="mb-6 w-full">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Profile Picture
          </h3>
          <div className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm p-6 flex justify-center relative">
            {/* Loading Skeleton */}
            {imageLoading && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full w-48 h-48 md:w-64 md:h-64 bg-muted animate-pulse border-4 border-border flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
                </div>
              </div>
            )}

            {/* Error State */}
            {imageError && (
              <div className="rounded-full w-48 h-48 md:w-64 md:h-64 bg-muted border-4 border-border flex items-center justify-center">
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
                src={data.profile.profile_pic}
                alt="Profile Picture"
                loading="lazy"
                decoding="async"
                className={`rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-border shadow-lg transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
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
              {profileData.summary}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Weaknesses */}
      {profileData.weaknesses && profileData.weaknesses.length > 0 && (
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
                items={profileData.weaknesses}
                icon="✦"
                iconColor="text-yellow-600 dark:text-yellow-400"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {/* Recommendations */}
      {profileData.recommendations &&
        profileData.recommendations.length > 0 && (
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
                  {profileData.recommendations.map((recommendation, index) => (
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

export default ProfilePicture;
