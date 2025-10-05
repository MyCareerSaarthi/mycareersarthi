import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Headline = ({ data }) => {
  const headlineData = data.section_scores.find(
    (section) => section.name === "Headline"
  );

  if (!headlineData) return <div>No headline data available</div>;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Headline
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your LinkedIn headline section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {headlineData.score}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary without accordion */}
      <div className="mb-6 w-full">
        <p className="text-foreground">{headlineData.summary}</p>
      </div>

      {/* Strengths */}
      <Accordion
        type="single"
        defaultValue={`strengths`}
        collapsible
        className="mb-6 w-full"
      >
        <AccordionItem
          value="strengths"
          className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
        >
          <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
            <span className="flex items-center">💪 Strengths</span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-3">
              {headlineData.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span className="text-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Weaknesses */}
      <Accordion type="single" collapsible className="mb-6 w-full">
        <AccordionItem
          value="weaknesses"
          className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
        >
          <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
            <span className="flex items-center">⚠️ Weaknesses</span>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-3">
              {headlineData.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">✦</span>
                  <span className="text-foreground">{weakness}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Improvement Suggestions */}
      {headlineData.suggestions && headlineData.suggestions.length > 0 && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="improvements"
            className="border border-border/50 bg-card/50 rounded-lg backdrop-blur-sm px-4"
          >
            <AccordionTrigger className="py-4 text-base md:text-lg font-medium">
              <span className="flex items-center">
                💡 Improvement Suggestions
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <ul className="space-y-3">
                {headlineData.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">➤</span>
                    <span className="text-foreground">{suggestion}</span>
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

export default Headline;
