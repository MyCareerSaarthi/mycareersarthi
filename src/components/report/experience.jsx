import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionList from "./section-list";
import {
  ChevronDown,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

const Experience = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isProfileDataExpanded, setIsProfileDataExpanded] = useState(true);

  if (!data) {
    return <div className="text-center py-8">No data available</div>;
  }

  const experienceData = data.section_scores?.find(
    (section) => section.name === "Experience"
  );

  if (!experienceData) return <div>No experience data available</div>;

  const experiences = data.profile?.experiences;

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Experience
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your resume experience section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {experienceData.score}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Data */}
      {experiences && experiences.length > 0 && (
        <div className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm mb-6 overflow-hidden transition-all duration-300 ease-in-out">
          <button
            onClick={() => setIsProfileDataExpanded(!isProfileDataExpanded)}
            className="w-full flex items-center justify-between p-6 hover:bg-accent/50 transition-colors"
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
              Work Experience
            </h3>
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                isProfileDataExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isProfileDataExpanded
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 pt-0">
              <ul className="space-y-4">
                {experiences.map((experience, index) => {
                  const isExpanded = expandedItems[index];
                  const hasExpandableContent =
                    experience.description || experience.location;

                  return (
                    <li
                      key={index}
                      className="relative border-l-2 border-primary/30 pl-5 before:absolute before:left-[-6px] before:top-2 before:w-3 before:h-3 before:bg-primary/40 before:rounded-full bg-background/30 p-3 rounded-lg transition-all duration-300"
                    >
                      <div className="flex flex-col gap-2">
                        {experience.title && (
                          <div className="text-foreground font-semibold text-base">
                            {experience.title}
                          </div>
                        )}
                        {experience.subtitle && (
                          <div className="text-muted-foreground text-sm">
                            {experience.subtitle}
                          </div>
                        )}
                        {experience.metadata && (
                          <div className="text-muted-foreground text-xs italic">
                            {experience.metadata}
                          </div>
                        )}
                        {experience.caption && (
                          <div className="text-muted-foreground text-xs bg-primary/5 px-2 py-1 rounded-md inline-block w-fit">
                            {experience.caption}
                          </div>
                        )}

                        {/* Expandable Content */}
                        {(isExpanded || !hasExpandableContent) && (
                          <div className="transition-all duration-300 ease-in-out space-y-2">
                            {experience.description && (
                              <div className="text-foreground text-sm mt-2 p-2 bg-secondary/20 rounded-md">
                                {experience.description}
                              </div>
                            )}
                            {experience.location && (
                              <div className="text-muted-foreground text-xs flex items-center gap-1">
                                <svg
                                  className="w-3 h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {experience.location}
                              </div>
                            )}
                          </div>
                        )}

                        {experience.start_date && experience.end_date && (
                          <div className="text-muted-foreground text-xs flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {experience.start_date} - {experience.end_date}
                          </div>
                        )}

                        {hasExpandableContent && (
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-primary hover:text-primary/80 text-xs font-medium transition-colors flex items-center gap-1 mt-1 self-start"
                          >
                            {isExpanded ? "Show less" : "Show more"}
                            <ChevronDown
                              className={`h-3 w-3 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="mb-6 w-full">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Evaluation Summary
        </h3>
        <p className="text-foreground leading-relaxed">
          {experienceData.summary}
        </p>
      </div>

      {/* Strengths */}
      <Accordion
        defaultValue="strengths"
        type="single"
        collapsible
        className="mb-6 w-full"
      >
        <AccordionItem
          value="strengths"
          className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
        >
          <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
            <span className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              Strengths
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <SectionList
              items={experienceData.strengths}
              icon="✓"
              iconColor="text-green-600 dark:text-green-400"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Weaknesses */}
      <Accordion
        type="single"
        defaultValue="weaknesses"
        collapsible
        className="mb-6 w-full"
      >
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
              items={experienceData.weaknesses}
              icon="✦"
              iconColor="text-yellow-600 dark:text-yellow-400"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Improvement Suggestions */}
      {experienceData.suggestions && experienceData.suggestions.length > 0 && (
        <Accordion
          type="single"
          defaultValue="improvements"
          collapsible
          className="w-full"
        >
          <AccordionItem
            value="improvements"
            className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
          >
            <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
              <span className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Improvement Suggestions
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <SectionList
                items={experienceData.suggestions}
                icon="➤"
                iconColor="text-blue-600 dark:text-blue-400"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default Experience;
