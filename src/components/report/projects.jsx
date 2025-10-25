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

const Projects = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState({});

  if (!data) {
    return <div className="text-center py-8">No data available</div>;
  }

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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

      {/* Profile Data */}
      {projects && projects.length > 0 ? (
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Projects & Portfolio
          </h3>
          <ul className="space-y-4">
            {projects.map((project, index) => {
              const isExpanded = expandedItems[index];
              const hasExpandableContent =
                project.description || project.url || project.technologies;

              return (
                <li
                  key={index}
                  className="relative border-l-2 border-primary/30 pl-5 before:absolute before:left-[-6px] before:top-2 before:w-3 before:h-3 before:bg-primary/40 before:rounded-full bg-background/30 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="flex flex-col gap-2">
                    {project.title && (
                      <div className="text-foreground font-semibold text-base">
                        {project.title}
                      </div>
                    )}
                    {project.subtitle && (
                      <div className="text-muted-foreground text-sm">
                        {project.subtitle}
                      </div>
                    )}

                    {/* Expandable Content */}
                    {(isExpanded || !hasExpandableContent) && (
                      <div className="transition-all duration-300 ease-in-out space-y-2">
                        {project.description && (
                          <div className="text-foreground text-sm leading-relaxed bg-secondary/20 p-3 rounded-lg">
                            {project.description}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {project.start_date && project.end_date && (
                            <div className="text-muted-foreground text-xs bg-primary/5 px-2 py-1 rounded-md flex items-center gap-1">
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
                              {project.start_date} - {project.end_date}
                            </div>
                          )}
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-xs hover:underline bg-secondary/40 px-2 py-1 rounded-md flex items-center gap-1"
                            >
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
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              View Project
                            </a>
                          )}
                        </div>
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
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
      ) : (
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Projects & Portfolio
          </h3>
          <div className="text-center py-4 border border-dashed border-muted-foreground/30 rounded-lg bg-secondary/20">
            <p className="text-muted-foreground text-sm">No projects found</p>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="mb-6 w-full">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Evaluation Summary
        </h3>
        <p className="text-foreground leading-relaxed">
          {projectsData.summary}
        </p>
      </div>

      {/* Strengths */}
      {projectsData.strengths && projectsData.strengths.length > 0 && (
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
                items={projectsData.strengths}
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
              items={projectsData.weaknesses}
              icon="✦"
              iconColor="text-yellow-600 dark:text-yellow-400"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Improvement Suggestions */}
      {projectsData.suggestions && projectsData.suggestions.length > 0 && (
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
                items={projectsData.suggestions}
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

export default Projects;
