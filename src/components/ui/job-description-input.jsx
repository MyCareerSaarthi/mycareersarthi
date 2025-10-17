"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const JobDescriptionInput = ({
  value,
  onChange,
  error,
  placeholder = "Enter job description...",
  className = "",
}) => {
  const clearInput = () => {
    onChange("");
  };

  const sampleJobDescriptions = [
    {
      title: "Senior Full Stack Developer",
      description: `We are looking for a Senior Full Stack Developer to join our dynamic team.

Requirements:
- 5+ years of experience in web development
- Must have: JavaScript, React, Node.js, Python, SQL
- Nice to have: TypeScript, Docker, AWS
- Good to have: Kubernetes, GraphQL
- Bachelor's degree in Computer Science
- Strong problem-solving skills

Location: San Francisco, CA
Employment Type: Full-time`,
    },
    {
      title: "Data Scientist",
      description: `Data Scientist Position

• 3+ years experience in machine learning
• Python, R, SQL required
• TensorFlow, PyTorch preferred
• Master's degree needed
• Remote work available`,
    },
    {
      title: "Marketing Manager",
      description: `Digital Marketing Manager
Creative Agency Inc.

We're looking for a creative Digital Marketing Manager to lead our campaigns.

Must Have:
- 3+ years digital marketing experience
- Google Ads and Facebook Ads certification
- Analytics and reporting skills
- Content creation experience

Nice to Have:
- Video editing skills
- SEO expertise
- Email marketing experience

Location: Los Angeles, CA
Employment Type: Full-time`,
    },
  ];

  const useSample = (sample) => {
    onChange(sample.description);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium flex items-center gap-2">
          <svg
            className="w-4 h-4 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Job Description
        </Label>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={clearInput}
            className="text-xs"
          >
            Clear
          </Button>
        </div>
      </div>

      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`min-h-[200px] resize-none ${
          error ? "border-destructive" : ""
        }`}
      />

      {/* Sample Job Descriptions */}
      <div className="space-y-2">
        <Label className="text-xs text-muted-foreground">
          Quick Start - Sample Job Descriptions:
        </Label>
        <div className="flex flex-wrap gap-2">
          {sampleJobDescriptions.map((sample, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-primary/10"
              onClick={() => useSample(sample)}
            >
              {sample.title}
            </Badge>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="text-xs text-muted-foreground">
        💡 <strong>Tip:</strong> You can paste any job description text. Our AI
        will automatically parse and understand the requirements.
      </div>
    </div>
  );
};

export default JobDescriptionInput;
