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

const Certification = ({ data }) => {
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

  const certifications = data.profile?.certifications;

  const certificationData = data.section_scores?.find(
    (section) => section.name === "Certifications"
  );

  if (!certificationData) return <div>No certification data available</div>;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Certification
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            Evaluation of your resume certification section
          </p>
        </div>
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                {certificationData.score}
              </span>
              <span className="text-lg md:text-2xl text-muted-foreground align-top">
                /10
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Profile Data */}
      {certifications && certifications.length > 0 && (
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            Certifications & Credentials
          </h3>
          <ul className="space-y-3">
            {Array.from(certifications).map((certification, index) => {
              const isExpanded = expandedItems[index];
              const hasExpandableContent =
                certification.credential_url || certification.description;

              return (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors bg-background/30"
                >
                  <span className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div className="flex-1">
                    {certification.title && (
                      <div className="text-foreground font-semibold text-base mb-1">
                        {certification.title}
                      </div>
                    )}
                    {certification.issuing_organization && (
                      <div className="text-muted-foreground text-sm mb-2">
                        {certification.issuing_organization}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {certification.issue_date && (
                        <div className="text-muted-foreground text-xs bg-primary/5 px-2 py-0.5 rounded inline-block flex items-center gap-1">
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
                          Issued: {certification.issue_date}
                        </div>
                      )}
                      {certification.expiration_date && (
                        <div className="text-muted-foreground text-xs bg-orange-500/10 px-2 py-0.5 rounded inline-block flex items-center gap-1">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Expires: {certification.expiration_date}
                        </div>
                      )}
                      {certification.credential_id && (
                        <div className="text-muted-foreground text-xs bg-secondary/40 px-2 py-0.5 rounded inline-block">
                          ID: {certification.credential_id}
                        </div>
                      )}
                    </div>
                    {certification.credential_url && (
                      <a
                        href={certification.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs hover:underline flex items-center gap-1 mt-2"
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
                        View Credential
                      </a>
                    )}

                    {/* Expandable Content */}
                    {(isExpanded || !hasExpandableContent) && (
                      <div className="transition-all duration-300 ease-in-out space-y-2">
                        {certification.credential_url && (
                          <a
                            href={certification.credential_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-xs hover:underline flex items-center gap-1"
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
                            View Credential
                          </a>
                        )}
                        {certification.description && (
                          <div className="text-foreground text-sm mt-2 p-2 bg-secondary/20 rounded-md">
                            {certification.description}
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
          {certificationData.summary}
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
              items={certificationData.strengths}
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
              items={certificationData.weaknesses}
              icon="✦"
              iconColor="text-yellow-600 dark:text-yellow-400"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Improvement Suggestions */}
      {certificationData.suggestions &&
        certificationData.suggestions.length > 0 && (
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
                  items={certificationData.suggestions}
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

export default Certification;
