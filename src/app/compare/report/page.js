"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { api } from "@/components/api/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  Loader2,
  Briefcase,
  GraduationCap,
  Award,
  MessageSquare,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const ComparisonReportPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { getToken } = useAuth();
  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Helper: Safe storage access
  const getLocalStorageItem = (key) => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error("LocalStorage error:", e);
      return null;
    }
  };

  const setLocalStorageItem = (key, value) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error("LocalStorage error:", e);
    }
  };

  const getLocalStorageKeys = () => {
    if (typeof window === "undefined") return [];
    try {
      return Object.keys(localStorage).filter((key) =>
        key.startsWith("comparison_")
      );
    } catch (e) {
      console.error("LocalStorage error:", e);
      return [];
    }
  };

  // LOAD DATA
  useEffect(() => {
    const fetchComparisonData = async () => {
      try {
        setLoading(true);
        setError(null);

        const id = searchParams.get("id");
        const resultParam = searchParams.get("result");
        const storageKey = searchParams.get("storageKey");

        // Case 1: Load from storage
        if (storageKey) {
          const storedData = getLocalStorageItem(storageKey);
          if (storedData) {
            setComparisonData(JSON.parse(storedData));
          } else {
            setError("Comparison data not found in storage.");
          }
          return;
        }

        // Case 2: Result param
        if (resultParam) {
          try {
            const decoded = JSON.parse(decodeURIComponent(resultParam));
            if (decoded && decoded.overall_alignment_score !== undefined) {
              setComparisonData(decoded);
              const newStorageKey = `comparison_${Date.now()}`;
              setLocalStorageItem(newStorageKey, JSON.stringify(decoded));
            } else {
              throw new Error("Invalid structure");
            }
          } catch (parseErr) {
            console.error("Parse error:", parseErr);
            setError("Invalid comparison data format in URL");
          }
          return;
        }

        // Case 3: Load by ID
        if (id) {
          try {
            const token = await getToken();
            const response = await api.get(`/api/comparison/${id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });

            if (response.data?.overall_alignment_score !== undefined) {
              setComparisonData(response.data);
              setLocalStorageItem(
                `comparison_${id}`,
                JSON.stringify(response.data)
              );
            } else {
              setError("Invalid comparison data format from API");
            }
          } catch (apiError) {
            console.error(apiError);
            setError("Comparison report not found");
          }
          return;
        }

        // Case 4: fallback last saved
        const keys = getLocalStorageKeys();
        if (keys.length > 0) {
          const lastKey = keys.sort().reverse()[0];
          const stored = getLocalStorageItem(lastKey);
          if (stored) {
            setComparisonData(JSON.parse(stored));
            return;
          }
        }

        setError("No comparison data found.");
      } catch (err) {
        setError(err.message || "Failed to load comparison report");
      } finally {
        setLoading(false);
      }
    };

    fetchComparisonData();
  }, [searchParams, getToken]);

  // PDF Function
  const handleDownloadPdf = async () => {
    const id = searchParams.get("id");
    if (!id) {
      alert("PDF download is available only for saved reports.");
      return;
    }

    try {
      setIsGeneratingPdf(true);
      const token = await getToken();

      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const response = await fetch(
        `${baseUrl}/api/comparison/generate-pdf/${id}`,
        {
          method: "GET",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      );

      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `comparison-${id}.pdf`;
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to generate PDF.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Helpers
  const getScoreColor = (score) =>
    score >= 8
      ? "text-green-600"
      : score >= 6
      ? "text-yellow-600"
      : "text-red-600";

  const getStatusColor = (score) =>
    score >= 8
      ? "bg-green-500"
      : score >= 6
      ? "bg-yellow-500"
      : score >= 4
      ? "bg-orange-500"
      : "bg-red-500";

  const generateOneLineSummary = () => {
    if (!comparisonData?.sections) return "Analyzing alignment...";
    const { sections } = comparisonData;
    let result = [];

    if (sections.experience?.score >= 8) result.push("Strong experience match");
    else if (sections.experience?.score < 6)
      result.push("Experience gaps detected");

    if (sections.skills?.score >= 8) result.push("Skills well aligned");
    else if (sections.skills?.score < 6) result.push("Skills need attention");

    const aboutScore = sections["about/summary"]?.score;
    if (aboutScore && aboutScore < 6) result.push("Improve about & keywords");

    return result.length > 0
      ? result.join(". ") + "."
      : "Overall alignment analysis complete.";
  };

  // PREPARE DATA
  const sectionData = useMemo(() => {
    if (!comparisonData?.sections) return [];

    return [
      {
        id: "skills",
        name: "Skills",
        icon: Award,
        score: comparisonData.sections.skills?.score || 0,
        quickInsight: generateQuickInsight(
          "skills",
          comparisonData.sections.skills
        ),
      },
      {
        id: "experience",
        name: "Experience",
        icon: Briefcase,
        score: comparisonData.sections.experience?.score || 0,
        quickInsight: generateQuickInsight(
          "experience",
          comparisonData.sections.experience
        ),
      },
      {
        id: "about",
        name: "About / Summary",
        icon: MessageSquare,
        score: comparisonData.sections["about/summary"]?.score ?? 0,
        quickInsight: generateQuickInsight(
          "about",
          comparisonData.sections["about/summary"]
        ),
      },
      {
        id: "education",
        name: "Education & Certifications",
        icon: GraduationCap,
        score: comparisonData.sections.education?.score || 0,
        quickInsight: generateQuickInsight(
          "education",
          comparisonData.sections.education
        ),
      },
      {
        id: "keywords",
        name: "Keywords & Tone",
        icon: FileText,
        score: comparisonData.sections.keywords_tone?.score || 0,
        quickInsight: generateQuickInsight(
          "keywords",
          comparisonData.sections.keywords_tone
        ),
      },
    ];
  }, [comparisonData]);

  // Generate Quick Insight
  function generateQuickInsight(sectionType, sectionData) {
    if (!sectionData) return "No data available";
    switch (sectionType) {
      case "skills": {
        const missingLinkedIn = sectionData.missing_in_linkedin?.length || 0;
        const missingResume = sectionData.missing_in_resume?.length || 0;
        if (missingLinkedIn > 0 && missingResume > 0)
          return `${missingLinkedIn} missing on LinkedIn, ${missingResume} missing in Resume`;
        if (missingLinkedIn > 0)
          return `${missingLinkedIn} missing on LinkedIn`;
        if (missingResume > 0) return `${missingResume} missing in Resume`;
        return "Good skills overlap";
      }

      case "experience": {
        const mL = sectionData.missing_in_linkedin?.length || 0;
        const mR = sectionData.missing_in_resume?.length || 0;
        if (mL > 0 && mR > 0)
          return `${mL} missing in LinkedIn, ${mR} missing in Resume`;
        if (mL > 0) return `Prior roles missing in LinkedIn`;
        if (mR > 0) return `Some experience details missing in Resume`;
        return "Work history broadly aligned";
      }

      case "about":
        return sectionData.alignment
          ? `Alignment: ${sectionData.alignment}`
          : "Summary analyzed";

      case "education":
        return sectionData.missing_in_linkedin?.length ||
          sectionData.missing_in_resume?.length
          ? "Some items missing"
          : "Education aligned";

      case "keywords":
        return sectionData.common_keywords?.length
          ? `${sectionData.common_keywords.length} common keywords`
          : "Branding differences";

      default:
        return "Review needed";
    }
  }

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    );
  }

  // Error
  if (error || !comparisonData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <AlertCircle className="h-16 w-16 text-red-600 mb-4" />
        <p className="text-center">{error}</p>
      </div>
    );
  }

  const { overall_alignment_score, sections, recommendations } = comparisonData;
  const overallPercentage = overall_alignment_score || 0;

  // ===============================
  // MAIN UI RETURN
  // ===============================
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Comparison Report</h1>
            <Button onClick={handleDownloadPdf}>
              {isGeneratingPdf ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <FileText className="h-4 w-4 mr-2" />
              )}
              Download PDF
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Detailed comparison between your LinkedIn profile & Resume
          </p>
        </div>

        {/* Layout */}
        {/* ====================================================== */}
        {/* NEW STACKED LAYOUT — NO GRID, VERTICAL FLOW */}
        {/* ====================================================== */}

        <div className="space-y-8 mb-8">
          {/* ================= OVERALL SCORE BOX ================= */}
          <Card className="rounded-2xl shadow-sm w-full">
            <CardContent className="px-6 py-8">
              <div className="flex items-center justify-between">
                {/* LEFT SIDE: TEXT */}
                <div className="flex-1 pr-6">
                  <h2 className="text-3xl font-bold mb-3">Overall Alignment</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {generateOneLineSummary()}
                  </p>
                </div>

                {/* RIGHT SIDE: SCORE CIRCLE */}
                <div className="flex-shrink-0">
                  <CircularProgress
                    size={170}
                    strokeWidth={10}
                    value={overallPercentage}
                    className={
                      overallPercentage >= 8
                        ? "text-green-600"
                        : overallPercentage >= 6
                        ? "text-yellow-600"
                        : "text-red-600"
                    }
                    indicatorClassName={
                      overallPercentage >= 8
                        ? "text-green-600"
                        : overallPercentage >= 6
                        ? "text-yellow-600"
                        : "text-red-600"
                    }
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold">
                        {overallPercentage}%
                      </div>
                    </div>
                  </CircularProgress>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ================= SUMMARY TABLE BOX ================= */}
          <Card className="rounded-2xl shadow-sm w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Section-Wise Summary
              </CardTitle>
              <CardDescription>
                Overview of how each section aligns
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Table className="w-full">
                {/* ------- HEADER ------- */}
                <TableHeader>
                  <TableRow className="bg-muted/50 h-14">
                    <TableHead className="text-justify text-[13px] font-semibold py-3 w-[200px]">
                      Section
                    </TableHead>
                    <TableHead className="text-center text-[13px] font-semibold py-3">
                      Align %
                    </TableHead>
                    <TableHead className="text-center text-[13px] font-semibold py-3">
                      Misalign %
                    </TableHead>
                    <TableHead className="text-center text-[13px] font-semibold py-3">
                      Missing LinkedIn
                    </TableHead>
                    <TableHead className="text-center text-[13px] font-semibold py-3">
                      Missing Resume
                    </TableHead>
                  </TableRow>
                </TableHeader>

                {/* ------- BODY ------- */}
                <TableBody>
                  {sectionData.map((section) => {
                    const Icon = section.icon;
                    const details =
                      comparisonData.sections[
                        section.id === "about" ? "about/summary" : section.id
                      ];

                    const missingLinkedIn =
                      details?.missing_in_linkedin?.length || 0;
                    const missingResume =
                      details?.missing_in_resume?.length || 0;
                    const alignment = section.score || 0;
                    const misalignment = 100 - alignment;

                    return (
                      <TableRow
                        key={section.id}
                        className="hover:bg-accent/40 transition cursor-pointer h-16 text-[13px]"
                        onClick={() => {
                          const el = document.getElementById(
                            `accordion-${section.id}`
                          );
                          if (el) {
                            const yOffset = -100;
                            const y =
                              el.getBoundingClientRect().top +
                              window.pageYOffset +
                              yOffset;

                            window.scrollTo({ top: y, behavior: "smooth" });
                            setExpandedSection(section.id);

                            el.classList.add("bg-secondary", "transition-all");
                            setTimeout(
                              () =>
                                el.classList.remove(
                                  "bg-secondary",
                                  "transition-all"
                                ),
                              1500
                            );
                          }
                        }}
                      >
                        {/* FIRST COLUMN — FIXED: ICON + TEXT SIDE BY SIDE */}
                        <TableCell className="text-">
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium text-[13px]">
                              {section.name}
                            </span>
                          </div>
                        </TableCell>

                        {/* ALIGN % */}
                        <TableCell className="text-center font-bold text-[13px]">
                          <span className={getScoreColor(alignment)}>
                            {alignment}%
                          </span>
                        </TableCell>

                        {/* MISALIGN % */}
                        <TableCell className="text-center text-[13px] font-semibold text-red-500">
                          {misalignment}%
                        </TableCell>

                        {/* MISSING LINKEDIN */}
                        <TableCell className="text-center text-[13px] font-medium">
                          {missingLinkedIn}
                        </TableCell>

                        {/* MISSING RESUME */}
                        <TableCell className="text-center text-[13px] font-medium">
                          {missingResume}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* ACCORDION */}
        <Accordion
          type="single"
          collapsible
          value={expandedSection}
          onValueChange={setExpandedSection}
          className="w-full space-y-6 mb-8"
        >
          {sectionData.map((section) => {
            const Icon = section.icon;
            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                id={`accordion-${section.id}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger>
                  <div className="flex items-center gap-3 flex-1">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1 text-left">
                      <div className="font-semibold">
                        {section.name} Alignment Details ({section.score}%)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {section.quickInsight}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="pt-4 pb-2">
                    {renderSectionDetails(section.id, comparisonData.sections)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Recommendations */}
        {recommendations && recommendations.length > 0 && (
          <Card className="mb-8 bg-accent/50 border border-accent/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Recommendations
              </CardTitle>
              <CardDescription>
                Actionable insights to improve your profile alignment
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {recommendations.map((recommendation, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-sm">{recommendation}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );

  // =================================
  // RENDERERS
  // =================================

  function renderSectionDetails(sectionId, sections) {
    if (!sections) return null;

    switch (sectionId) {
      case "skills":
        return renderSkillsDetails(sections.skills);
      case "experience":
        return renderExperienceDetails(sections.experience);
      case "about":
        return renderAboutDetails(sections["about/summary"]);
      case "education":
        return renderEducationDetails(sections.education);
      case "keywords":
        return renderKeywordsDetails(sections.keywords_tone);
      default:
        return null;
    }
  }

  // SKILLS
  function renderSkillsDetails(skills) {
    if (!skills)
      return <p className="text-muted-foreground">No data available</p>;

    return (
      <div className="space-y-6">
        {skills.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{skills.summary}</p>
          </div>
        )}

        {skills.matches?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" /> Matched Skills
              ({skills.matches.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.matches.map((skill, idx) => (
                <Badge key={idx} variant="default" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {skills.missing_in_linkedin?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" /> Missing on
              LinkedIn ({skills.missing_in_linkedin.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.missing_in_linkedin.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {skills.missing_in_resume?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" /> Missing in
              Resume ({skills.missing_in_resume.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.missing_in_resume.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {skills.mismatches?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-600" /> Mismatches (
              {skills.mismatches.length})
            </h4>
            <div className="space-y-3">
              {skills.mismatches.map((mismatch, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-orange-50 rounded-lg border border-orange-200"
                >
                  <div className="font-medium">{mismatch.concept}:</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>LinkedIn:</span>
                    <Badge variant="outline">{mismatch.linkedin_value}</Badge>
                    <span>→</span>
                    <Badge variant="outline">{mismatch.resume_value}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {skills.alignments?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" /> Alignments (
              {skills.alignments.length})
            </h4>
            <div className="space-y-2">
              {skills.alignments.map((alignment, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  <span className="font-medium">{alignment.concept}:</span>
                  <Badge variant="default">{alignment.linkedin_value}</Badge>
                  <span>↔</span>
                  <Badge variant="default">{alignment.resume_value}</Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {skills.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2">
              <Lightbulb className="h-4 w-4 text-primary inline-block mr-2" />
              Recommendation
            </h4>
            <p className="text-sm">{skills.comments}</p>
          </div>
        )}
      </div>
    );
  }

  // EXPERIENCE
  function renderExperienceDetails(exp) {
    if (!exp) return <p className="text-muted-foreground">No data available</p>;

    return (
      <div className="space-y-6">
        {exp.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{exp.summary}</p>
          </div>
        )}

        {exp.matches?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" /> Matched
              Experiences
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {exp.matches.map((match, idx) => (
                <li key={idx}>{match}</li>
              ))}
            </ul>
          </div>
        )}

        {exp.contradictions?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" /> Contradictions
            </h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>LinkedIn</TableHead>
                  <TableHead>Resume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exp.contradictions.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{item.field}</TableCell>
                    <TableCell>{item.linkedin}</TableCell>
                    <TableCell>{item.resume}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {exp.missing_in_linkedin?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Missing on LinkedIn</h4>
            <ul className="list-disc list-inside text-sm">
              {exp.missing_in_linkedin.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {exp.missing_in_resume?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Missing in Resume</h4>
            <ul className="list-disc list-inside text-sm">
              {exp.missing_in_resume.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {exp.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2">
              <Lightbulb className="h-4 w-4 text-primary inline-block mr-2" />
              AI Suggestion
            </h4>
            <p className="text-sm">{exp.comments}</p>
          </div>
        )}
      </div>
    );
  }

  // ABOUT
  function renderAboutDetails(about) {
    if (!about)
      return <p className="text-muted-foreground">No data available</p>;

    return (
      <div className="space-y-6">
        {about.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{about.summary}</p>
          </div>
        )}

        {about.alignment && (
          <div>
            <h4 className="font-semibold mb-3">Alignment Level</h4>
            <Badge
              variant={
                about.alignment === "High"
                  ? "default"
                  : about.alignment === "Medium"
                  ? "secondary"
                  : "destructive"
              }
            >
              {about.alignment}
            </Badge>
          </div>
        )}

        {about.tone_comparison && (
          <div>
            <h4 className="font-semibold mb-3">Tone Analysis</h4>
            <div className="space-y-2">
              <p className="text-sm">{about.tone_comparison}</p>

              <div className="flex items-center gap-2">
                <span className="text-xs w-20">Narrative</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getStatusColor(about.score || 0)}`}
                    style={{ width: `${(about.score || 0) * 10}%` }}
                  ></div>
                </div>
                <span className="text-xs w-20">Professional</span>
              </div>
            </div>
          </div>
        )}

        {about.missing_elements?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Missing Elements</h4>
            <ul className="list-disc list-inside text-sm">
              {about.missing_elements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {about.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2">
              <Lightbulb className="h-4 w-4 text-primary inline-block mr-2" />
              Recommendation
            </h4>
            <p className="text-sm">{about.comments}</p>
          </div>
        )}
      </div>
    );
  }

  // EDUCATION
  function renderEducationDetails(edu) {
    if (!edu) return <p className="text-muted-foreground">No data available</p>;

    return (
      <div className="space-y-6">
        {edu.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm">{edu.summary}</p>
          </div>
        )}

        {edu.matches?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Matched Education</h4>
            <ul className="list-disc list-inside text-sm">
              {edu.matches.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {edu.missing_in_linkedin?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Missing on LinkedIn</h4>
            <ul className="list-disc list-inside text-sm">
              {edu.missing_in_linkedin.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {edu.missing_in_resume?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Missing in Resume</h4>
            <ul className="list-disc list-inside text-sm">
              {edu.missing_in_resume.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {edu.mismatches?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Mismatches</h4>
            <ul className="list-disc list-inside text-sm">
              {edu.mismatches.map((item, idx) => (
                <li key={idx}>
                  {item.concept}: {item.linkedin_value} → {item.resume_value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {edu.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2">
              <Lightbulb className="h-4 w-4 text-primary inline-block mr-2" />
              Recommendation
            </h4>
            <p className="text-sm">{edu.comments}</p>
          </div>
        )}
      </div>
    );
  }

  // KEYWORDS
  function renderKeywordsDetails(keywords) {
    if (!keywords)
      return <p className="text-muted-foreground">No data available</p>;

    return (
      <div className="space-y-6">
        {keywords.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm">{keywords.summary}</p>
          </div>
        )}

        {keywords.common_keywords?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Common Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {keywords.common_keywords.map((item, idx) => (
                <Badge key={idx} variant="default" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {keywords.resume_only?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Resume Only</h4>
            <div className="flex flex-wrap gap-2">
              {keywords.resume_only.map((item, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {keywords.linkedin_only?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">LinkedIn Only</h4>
            <div className="flex flex-wrap gap-2">
              {keywords.linkedin_only.map((item, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {keywords.mismatches?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Mismatches</h4>
            <div className="space-y-3">
              {keywords.mismatches.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-orange-50 rounded-lg border border-orange-200"
                >
                  <div className="font-medium">{item.concept}:</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>LinkedIn:</span>
                    <Badge variant="outline">{item.linkedin_value}</Badge>
                    <span>→</span>
                    <Badge variant="outline">{item.resume_value}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {keywords.tone_summary && (
          <div>
            <h4 className="font-semibold mb-2">Tone Summary</h4>
            <p className="text-sm">{keywords.tone_summary}</p>
          </div>
        )}

        {keywords.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2">
              <Lightbulb className="h-4 w-4 text-primary inline-block mr-2" />
              Recommendation
            </h4>
            <p className="text-sm">{keywords.comments}</p>
          </div>
        )}
      </div>
    );
  }
};

export default ComparisonReportPage;
