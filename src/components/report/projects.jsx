import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Projects = ({ data }) => {
  if (!data) {
    return <div className="text-center py-8">No data available</div>;
  }

  const projectsData = data.section_scores?.find(
    (section) => section.name === "Projects"
  );

  if (!projectsData) return <div>No projects data available</div>;

  const projects = data.profile?.projects;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your resume projects section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {projectsData.score}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>

      {projects && projects.length > 0 ? (
        <div className="mb-6 w-full bg-secondary/50 p-4 rounded-lg">
          <ul className="space-y-3">
            {projects.map((project, index) => (
              <li
                key={index}
                className="flex items-start justify-between gap-2 p-2"
              >
                <div>
                  <div className="text-foreground">{project.title}</div>
                  <div className="text-muted-foreground text-sm">
                    {project.subtitle}
                  </div>
                </div>
                <div className="text-muted-foreground text-sm">
                  {project.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mb-6 w-full bg-secondary/50 p-4 rounded-lg">
          <p className="text-foreground">No projects found</p>
        </div>
      )}

      {/* Summary */}
      <div className="mb-6 w-full">
        <p className="text-foreground">{projectsData.summary}</p>
      </div>

      {/* Strengths */}
      {projectsData.strengths && projectsData.strengths.length > 0 && (
        <Accordion
          defaultValue={`strengths`}
          type="single"
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
                {projectsData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2 mt-1">
                      ✓
                    </span>
                    <span className="text-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

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
              {projectsData.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 dark:text-yellow-400 mr-2 mt-1">
                    ✦
                  </span>
                  <span className="text-foreground">{weakness}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Improvement Suggestions */}
      {projectsData.suggestions && projectsData.suggestions.length > 0 && (
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
                {projectsData.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                      ➤
                    </span>
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

export default Projects;
