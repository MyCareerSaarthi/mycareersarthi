import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Lightbulb, ArrowRight } from "lucide-react";

const ProfilePicture = ({ data }) => {
  const profileData = data?.section_scores?.find(
    (section) => section.name === "profile-picture"
  );

  if (!profileData) return <div>No profile picture data available</div>;

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
