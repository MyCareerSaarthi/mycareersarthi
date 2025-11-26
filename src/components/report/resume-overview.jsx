import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const ResumeOverview = ({ data, onNavigate }) => {
  if (!data) {
    return <div className="text-center py-8">No data available</div>;
  }

  const { overall_score, overall_summary, section_scores, role_name, role_id } =
    data;

  // Determine color based on score - improved for light mode
  const getScoreColor = (score) => {
    if (score >= 7) return "text-green-600 dark:text-green-400";
    if (score >= 4) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  // Get background color based on score - improved for light mode
  const getScoreBgColor = (score) => {
    if (score >= 7) return "bg-green-50 dark:bg-green-900/30";
    if (score >= 4) return "bg-yellow-50 dark:bg-yellow-900/30";
    return "bg-red-50 dark:bg-red-900/30";
  };

  // Get section card colors based on score
  const getSectionCardColor = (score) => {
    if (score >= 7) return "text-green-700 dark:text-green-400";
    if (score >= 4) return "text-yellow-700 dark:text-yellow-400";
    return "text-red-700 dark:text-red-400";
  };

  // Map section names to tab IDs for resume
  const getSectionTabId = (sectionName) => {
    const sectionMap = {
      Education: "education",
      Experience: "experience",
      Skills: "skill",
      Certifications: "certification",
    };
    return (
      sectionMap[sectionName] || sectionName.toLowerCase().replace(/\s+/g, "-")
    );
  };

  // Get emoji based on score
  const getScoreEmoji = (score) => {
    if (score >= 7) return "🏆"; // excellent
    if (score >= 6) return "👍"; // good
    if (score >= 4) return "🤔"; // needs improvement
    return "⚠️"; // significant improvement needed (1-3)
  };

  // Calculate stroke dasharray for circular progress
  const calculateStrokeDashoffset = (score) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    return circumference - (score / 10) * circumference;
  };

  const order = [
    "profile-picture",
    "skills",
    "experience",
    "education",
    "certifications",
  ];
  const orderedSections = section_scores
    ?.slice()
    .sort(
      (a, b) =>
        order.indexOf(a.name.toLowerCase()) -
        order.indexOf(b.name.toLowerCase())
    );

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Resume Analysis Overview
        </h1>
        <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
          Comprehensive analysis of your resume
        </p>
      </div>

      {/* Target Role Badge */}
      {(role_name || role_id) && (
        <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2.5 shadow-sm">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Role: {role_name || role_id}
          </span>
        </div>
      )}

      {/* Score Section with Circular Gauge */}
      <Card className="mb-6 md:mb-8 border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Overall Resume Score
              </h2>
              <p className="text-muted-foreground mb-4 max-w-md text-sm md:text-base">
                Your resume optimization level
              </p>

              <div
                className={`inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-lg md:text-xl font-semibold ${getScoreBgColor(
                  overall_score
                )} ${getScoreColor(overall_score)}`}
              >
                {getScoreEmoji(overall_score)}{" "}
                {overall_score >= 7
                  ? "Excellent"
                  : overall_score >= 6
                  ? "Good"
                  : overall_score >= 4
                  ? "Needs Improvement"
                  : "Significant Improvement Needed"}
              </div>
            </div>

            {/* Circular Gauge */}
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="text-border"
                  strokeWidth="8"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                ></circle>

                {/* Progress circle */}
                <circle
                  className={`stroke-current ${getScoreColor(overall_score)}`}
                  strokeWidth="8"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset={calculateStrokeDashoffset(overall_score)}
                  transform="rotate(-90 50 50)"
                ></circle>

                {/* Score in the center */}
                <text
                  x="50"
                  y="50"
                  fontFamily="sans-serif"
                  fontSize="14"
                  fontWeight={"bold"}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  className={`fill-current ${getScoreColor(overall_score)}`}
                >
                  {overall_score.toFixed(1)}/10
                </text>
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section Scores Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {orderedSections?.map((section, index) => (
          <Card
            key={index}
            className={`border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
              onNavigate ? "hover:border-primary/30" : ""
            }`}
            onClick={() =>
              onNavigate && onNavigate(getSectionTabId(section.name))
            }
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-sm md:text-base">
                <span className="capitalize">{section.name}</span>
                <span
                  className={`text-lg font-bold ${getSectionCardColor(
                    section.score
                  )}`}
                >
                  {section.score}/10
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-muted-foreground line-clamp-2">
                {section.summary}
              </p>
              {onNavigate && (
                <div className="mt-2 flex items-center text-xs text-primary/70 hover:text-primary transition-colors">
                  <span>Click to view details</span>
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-base md:text-lg">
            📝 Analysis Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-foreground leading-relaxed text-xs md:text-sm">
              {overall_summary}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeOverview;
