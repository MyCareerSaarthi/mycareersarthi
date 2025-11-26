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

const Education = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState({});

  if (!data) {
    return <div className="text-center py-8">No data available</div>;
  }

  const educations = data.profile?.educations;

  const educationData = data.section_scores?.find(
    (section) => section.name === "Education"
  );

  if (!educationData) return <div>No education data available</div>;

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
            Education
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your resume education section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {educationData.score}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Data */}
      {educations && educations.length > 0 && (
        <div className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm p-6 mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2 mb-4">
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
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14v7M5 10.12l7 2.88m0 0l7-2.88m-7 2.88v7"
              />
            </svg>
            Education Background
          </h3>
          <ul className="space-y-3">
            {educations.map((education, index) => {
              const isExpanded = expandedItems[index];
              const hasExpandableContent =
                education.description || education.grade;

              return (
                <li
                  key={index}
                  className="relative border-l-2 border-primary/30 pl-5 before:absolute before:left-[-6px] before:top-2 before:w-3 before:h-3 before:bg-primary/40 before:rounded-full bg-background/30 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="flex flex-col gap-2">
                    {education.title && (
                      <div className="text-foreground font-semibold text-base">
                        {education.title}
                      </div>
                    )}
                    {education.subtitle && (
                      <div className="text-muted-foreground text-sm">
                        {education.subtitle}
                      </div>
                    )}
                    {education.degree && (
                      <div className="text-muted-foreground text-xs bg-primary/5 px-2 py-1 rounded-md inline-block w-fit">
                        {education.degree}
                      </div>
                    )}
                    {education.field_of_study && (
                      <div className="text-muted-foreground text-sm">
                        Field: {education.field_of_study}
                      </div>
                    )}
                    {education.start_year && education.end_year && (
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
                        {education.start_year} - {education.end_year}
                      </div>
                    )}

                    {/* Expandable Content */}
                    {(isExpanded || !hasExpandableContent) && (
                      <div className="transition-all duration-300 ease-in-out space-y-2">
                        {education.grade && (
                          <div className="text-muted-foreground text-xs">
                            Grade: {education.grade}
                          </div>
                        )}
                        {education.description && (
                          <div className="text-foreground text-sm mt-2 p-2 bg-secondary/20 rounded-md">
                            {education.description}
                          </div>
                        )}
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
      )}

      {/* Summary */}
      <div className="mb-6 w-full">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Evaluation Summary
        </h3>
        <p className="text-foreground leading-relaxed">
          {educationData.summary}
        </p>
      </div>

      {/* Strengths */}
      {educationData.strengths && educationData.strengths.length > 0 && (
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
                items={educationData.strengths}
                icon="✓"
                iconColor="text-green-600 dark:text-green-400"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

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
              items={educationData.weaknesses}
              icon="✦"
              iconColor="text-yellow-600 dark:text-yellow-400"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Improvement Suggestions */}
      {educationData.suggestions && educationData.suggestions.length > 0 && (
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
                items={educationData.suggestions}
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

export default Education;
