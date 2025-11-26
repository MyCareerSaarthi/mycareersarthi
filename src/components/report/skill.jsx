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

const Skill = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProfileDataExpanded, setIsProfileDataExpanded] = useState(true);

  if (!data) {
    return <div className="text-center py-8">No data available</div>;
  }

  const skillData = data.section_scores?.find(
    (section) => section.name === "Skills"
  );

  if (!skillData) return <div>No skills data available</div>;

  const skills = data.profile?.skills || [];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Skills
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your resume skills section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {skillData.score.toFixed(1)}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Data */}
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            Skills & Competencies
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
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 pt-0">
            {skills && skills.length > 0 ? (
              <div className="transition-all duration-300 ease-in-out">
                <div
                  className={`flex flex-wrap gap-2.5 ${
                    !isExpanded ? "max-h-24 overflow-hidden" : ""
                  }`}
                >
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium border border-primary/20 transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {skills.length > 6 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-3 text-primary hover:text-primary/80 text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center py-6 border border-dashed border-destructive/30 rounded-lg bg-destructive/5">
                <p className="text-destructive font-medium mb-1 flex items-center justify-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  No skills listed
                </p>
                <p className="text-sm text-muted-foreground">
                  Skills are essential for demonstrating your capabilities
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 w-full">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Evaluation Summary
        </h3>
        <p className="text-foreground leading-relaxed">{skillData.summary}</p>
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
              items={skillData.strengths}
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
              items={skillData.weaknesses}
              icon="✦"
              iconColor="text-yellow-600 dark:text-yellow-400"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Improvement Suggestions */}
      {skillData.suggestions && skillData.suggestions.length > 0 && (
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
                items={skillData.suggestions}
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

export default Skill;
