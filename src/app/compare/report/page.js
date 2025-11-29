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

  // Helper function to safely access localStorage
  const getLocalStorageItem = (key) => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      return null;
    }
  };

  const setLocalStorageItem = (key, value) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error("Error setting localStorage:", e);
    }
  };

  const getLocalStorageKeys = () => {
    if (typeof window === "undefined") return [];
    try {
      return Object.keys(localStorage).filter((key) =>
        key.startsWith("comparison_")
      );
    } catch (e) {
      console.error("Error accessing localStorage keys:", e);
      return [];
    }
  };

  useEffect(() => {
    const fetchComparisonData = async () => {
      try {
        setLoading(true);
        setError(null);

        const id = searchParams.get("id");
        const resultParam = searchParams.get("result");
        const storageKey = searchParams.get("storageKey");

        if (storageKey) {
          try {
            const storedData = getLocalStorageItem(storageKey);
            if (storedData) {
              setComparisonData(JSON.parse(storedData));
            } else {
              setError(
                "Comparison data not found in storage. It may have expired."
              );
            }
          } catch (parseError) {
            console.error("Error parsing stored comparison data:", parseError);
            setError("Invalid comparison data format in storage");
          }
        } else if (resultParam) {
          try {
            const decoded = JSON.parse(decodeURIComponent(resultParam));
            if (
              decoded &&
              typeof decoded === "object" &&
              decoded.overall_alignment_score !== undefined
            ) {
              setComparisonData(decoded);
              const newStorageKey = `comparison_${Date.now()}`;
              setLocalStorageItem(newStorageKey, JSON.stringify(decoded));
            } else {
              throw new Error("Invalid comparison data structure");
            }
          } catch (parseError) {
            console.error("Error parsing comparison data:", parseError);
            const keys = getLocalStorageKeys();
            if (keys.length > 0) {
              const lastKey = keys.sort().reverse()[0];
              try {
                const storedData = getLocalStorageItem(lastKey);
                if (storedData) {
                  const parsed = JSON.parse(storedData);
                  if (parsed && parsed.overall_alignment_score !== undefined) {
                    setComparisonData(parsed);
                  } else {
                    setError("Invalid comparison data format in URL");
                  }
                } else {
                  setError("Invalid comparison data format in URL");
                }
              } catch {
                setError("Invalid comparison data format in URL");
              }
            } else {
              setError("Invalid comparison data format in URL");
            }
          }
        } else if (id) {
          try {
            const token = await getToken();
            const response = await api.get(`/api/comparison/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            if (
              response.data &&
              response.data.overall_alignment_score !== undefined
            ) {
              setComparisonData(response.data);
              const storageKey = `comparison_${id}`;
              setLocalStorageItem(storageKey, JSON.stringify(response.data));
            } else {
              setError("Invalid comparison data format from API");
            }
          } catch (apiError) {
            console.error("Error fetching comparison from API:", apiError);
            const storedData = getLocalStorageItem(`comparison_${id}`);
            if (storedData) {
              try {
                const parsed = JSON.parse(storedData);
                if (parsed && parsed.overall_alignment_score !== undefined) {
                  setComparisonData(parsed);
                } else {
                  setError("Invalid comparison data format");
                }
              } catch {
                setError("Failed to parse stored comparison data");
              }
            } else {
              const errorMessage =
                apiError?.response?.data?.error ||
                apiError?.message ||
                "Comparison report not found";
              setError(errorMessage);
            }
          }
        } else {
          const keys = getLocalStorageKeys();
          if (keys.length > 0) {
            const lastKey = keys.sort().reverse()[0];
            try {
              const storedData = getLocalStorageItem(lastKey);
              if (storedData) {
                const parsed = JSON.parse(storedData);
                if (parsed && parsed.overall_alignment_score !== undefined) {
                  setComparisonData(parsed);
                } else {
                  setError(
                    "No comparison data found. Please provide 'id', 'result', or 'storageKey' parameter."
                  );
                }
              } else {
                setError(
                  "No comparison data found. Please provide 'id', 'result', or 'storageKey' parameter."
                );
              }
            } catch {
              setError(
                "No comparison data found. Please provide 'id', 'result', or 'storageKey' parameter."
              );
            }
          } else {
            setError(
              "No comparison data found. Please provide 'id', 'result', or 'storageKey' parameter."
            );
          }
        }
      } catch (err) {
        console.error("Error loading comparison report:", err);
        setError(err.message || "Failed to load comparison report");
      } finally {
        setLoading(false);
      }
    };

    fetchComparisonData();
  }, [searchParams, getToken]);

  const handleDownloadPdf = async () => {
    const id = searchParams.get("id");
    if (!id) {
      alert("PDF download is available only for saved comparison reports.");
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
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            errorData.error ||
            `Failed to generate PDF: ${response.statusText}`
        );
      }

      const contentType = response.headers.get("content-type");
      if (contentType && typeof contentType === "string" && contentType.includes("application/pdf")) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const contentDisposition = response.headers.get("content-disposition");
        let filename = `comparison-report-${id}.pdf`;
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1];
          }
        }

        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || errorData.error || "Invalid response from server"
        );
      }
    } catch (error) {
      console.error("Error generating comparison PDF:", error);
      alert(error.message || "Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Helper functions
  const getScoreColor = (score) => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadgeVariant = (score) => {
    if (score >= 8) return "green";
    if (score >= 6) return "yellow";
    return "red";
  };

  const getStatusText = (score) => {
    if (score >= 8) return "Strong";
    if (score >= 6) return "Good";
    if (score >= 4) return "Moderate";
    return "Low";
  };

  const getStatusColor = (score) => {
    if (score >= 8) return "bg-green-500";
    if (score >= 6) return "bg-yellow-500";
    if (score >= 4) return "bg-orange-500";
    return "bg-red-500";
  };

  // Generate one-line summary from actual data
  const generateOneLineSummary = () => {
    if (!comparisonData?.sections) return "Analyzing alignment...";
    const { sections } = comparisonData;
    let result = [];

    // Experience
    if (sections.experience?.score >= 8) result.push("Strong experience match");
    else if (sections.experience?.score < 6)
      result.push("Experience gaps detected");
    // Skills
    if (sections.skills?.score >= 8) result.push("Skills well aligned");
    else if (sections.skills?.score < 6) result.push("Skills need attention");
    // About/Summary
    const aboutScore = sections["about/summary"]?.score;
    if (aboutScore && aboutScore < 6) result.push("Improve about & keywords");

    if (result.length > 0) return result.join(". ") + ".";
    return "Overall alignment analysis complete.";
  };

  // PREPARE DATA: Memoize for table rendering, using the API format and verified access
  const sectionData = useMemo(() => {
    if (!comparisonData?.sections) return [];
    const { sections } = comparisonData;

    return [
      {
        id: "skills",
        name: "Skills",
        icon: Award,
        score: sections.skills?.score || 0,
        quickInsight: generateQuickInsight("skills", sections.skills),
      },
      {
        id: "experience",
        name: "Experience",
        icon: Briefcase,
        score: sections.experience?.score || 0,
        quickInsight: generateQuickInsight("experience", sections.experience),
      },
      {
        id: "about",
        name: "About / Summary",
        icon: MessageSquare,
        score: sections["about/summary"]?.score ?? 0,
        quickInsight: generateQuickInsight("about", sections["about/summary"]),
      },
      {
        id: "education",
        name: "Education & Certifications",
        icon: GraduationCap,
        score: sections.education?.score || 0,
        quickInsight: generateQuickInsight("education", sections.education),
      },
      {
        id: "keywords",
        name: "Keywords & Tone",
        icon: FileText,
        score: sections.keywords_tone?.score || 0,
        quickInsight: generateQuickInsight("keywords", sections.keywords_tone),
      },
    ];
    // eslint-disable-next-line
  }, [comparisonData]);

  function generateQuickInsight(sectionType, sectionData) {
    if (!sectionData) return "No data available";
    switch (sectionType) {
      case "skills": {
        const missingLinkedIn = sectionData.missing_in_linkedin?.length || 0;
        const missingResume = sectionData.missing_in_resume?.length || 0;
        if (missingLinkedIn > 0 && missingResume > 0) {
          return `${missingLinkedIn} missing on LinkedIn, ${missingResume} missing in Resume`;
        } else if (missingLinkedIn > 0) {
          return `${missingLinkedIn} missing on LinkedIn`;
        } else if (missingResume > 0) {
          return `${missingResume} missing in Resume`;
        }
        return "Good skills overlap";
      }
      case "experience": {
        const missingLinkedInExp = sectionData.missing_in_linkedin?.length || 0;
        const missingResumeExp = sectionData.missing_in_resume?.length || 0;
        if (missingLinkedInExp > 0 && missingResumeExp > 0)
          return `${missingLinkedInExp} missing in LinkedIn, ${missingResumeExp} missing in Resume`;
        else if (missingLinkedInExp > 0)
          return `Prior roles missing in LinkedIn`;
        else if (missingResumeExp > 0)
          return `Some experience details missing in Resume`;
        return "Work history broadly aligned";
      }
      case "about": {
        const alignment = sectionData.alignment || "Unknown";
        if (alignment === "High" || alignment === "Good")
          return "Good about/summary alignment";
        if (alignment === "Medium") return "Minor tone differences";
        if (alignment === "Low") return "About sections need improvement";
        return "Summary analyzed";
      }
      case "education": {
        const missingLinkedIn = sectionData.missing_in_linkedin?.length || 0;
        const missingResume = sectionData.missing_in_resume?.length || 0;
        if (missingLinkedIn > 0 || missingResume > 0) {
          const count = missingLinkedIn + missingResume;
          return `${count} missing item${count > 1 ? "s" : ""}`;
        }
        return "Education aligned";
      }
      case "keywords": {
        const commonKeywords = sectionData.common_keywords?.length || 0;
        if (commonKeywords === 0) return "No keyword overlap";
        if (commonKeywords < 5) return "Some branding differences";
        return `${commonKeywords} common keywords`;
      }
      default:
        return "Review needed";
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading comparison report...</p>
        </div>
      </div>
    );
  }

  if (error || !comparisonData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Error Loading Report
          </h2>
          <p className="text-muted-foreground mb-6">
            {error || "No comparison data available"}
          </p>
          <Button
            onClick={() => (window.location.href = "/compare")}
            variant="outline"
          >
            Start New Comparison
          </Button>
        </div>
      </div>
    );
  }

  const { overall_alignment_score, sections, recommendations } =
    comparisonData || {};
  const overallPercentage = overall_alignment_score || 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Comparison Report
            </h1>
            <div className="hidden md:flex items-center gap-3">
              <Button
                onClick={handleDownloadPdf}
                variant="outline"
                disabled={isGeneratingPdf}
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
              <Button onClick={() => (window.location.href = "/compare")}>
                New Comparison
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Detailed comparison between your LinkedIn profile and Resume
          </p>
          <div className="mt-4 flex md:hidden gap-3">
            <Button
              onClick={handleDownloadPdf}
              variant="outline"
              className="flex-1"
              disabled={isGeneratingPdf}
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  PDF
                </>
              )}
            </Button>
            <Button
              onClick={() => (window.location.href = "/compare")}
              className="flex-1"
            >
              New
            </Button>
          </div>
        </div>
        {/* Score + Section Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8 ">
          {/* Left Panel — Overall Score */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="px-4 pt-4 pb-4 md:px-8 md:pt-4 md:pb-8">
                <div className="flex flex-col items-center text-center space-y-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    Overall Alignment
                  </h2>
                  <CircularProgress
                    size={170}
                    strokeWidth={10}
                    value={overallPercentage}
                    className={
                      (overall_alignment_score || 0) >= 8
                        ? "text-green-600"
                        : (overall_alignment_score || 0) >= 6
                        ? "text-yellow-600"
                        : "text-red-600"
                    }
                    indicatorClassName={
                      (overall_alignment_score || 0) >= 8
                        ? "text-green-600"
                        : (overall_alignment_score || 0) >= 6
                        ? "text-yellow-600"
                        : "text-red-600"
                    }
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold">
                        {overall_alignment_score || 0}%
                      </div>
                    </div>
                  </CircularProgress>
                  <Badge
                    variant={"secondary"}
                    className="text-base px-6 py-2 rounded-full flex items-center gap-2"
                  >
                    {overall_alignment_score >= 8 ? (
                      <>
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-600 animate-pulse" />
                        Excellent Alignment
                      </>
                    ) : overall_alignment_score >= 6 ? (
                      <>
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-600 animate-pulse" />
                        Fair Alignment
                      </>
                    ) : (
                      <>
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
                        Needs Improvement
                      </>
                    )}
                  </Badge>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                    {generateOneLineSummary()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Right Panel — Section-Wise Summary Table */}
          <div className="lg:col-span-3">
            <Card className="mb-8 rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Section-Wise Alignment Summary
                </CardTitle>
                <CardDescription>
                  Overview of section-level alignment between LinkedIn and
                  Resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[200px]">Section</TableHead>
                      <TableHead className="w-[100px]">Score</TableHead>
                      <TableHead className="w-[120px]">Status</TableHead>
                      <TableHead>Quick Insight</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sectionData.map((section) => {
                      const Icon = section.icon;
                      return (
                        <TableRow
                          key={section.id}
                          className="hover:bg-accent/40 transition"
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
                              el.classList.add(
                                "bg-secondary",
                                "transition-all",
                                "duration-10"
                              );
                              setTimeout(() => {
                                el.classList.remove("bg-secondary");
                              }, 1500);
                            }
                          }}
                        >
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">
                                {section.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <span
                                className={`font-bold ${getScoreColor(
                                  section.score
                                )}`}
                              >
                                {section.score}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={getScoreBadgeVariant(section.score)}
                              >
                                {getStatusText(section.score)}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm text-muted-foreground">
                              {section.quickInsight}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Detailed Accordion Panels */}
        <Accordion
          type="single"
          value={expandedSection}
          onValueChange={setExpandedSection}
          className="w-full space-y-6 mb-8"
        >
          {sectionData
            .filter((section) => section && section.id && section.icon && typeof section.id === "string")
            .map((section) => {
            const Icon = section.icon;
            if (!Icon) return null;
            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                id={`accordion-${section.id}`}
                className="border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="hover:no-underline">
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
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
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

  // REGION: Section Renderers

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

        {skills.matches && skills.matches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Matched Skills ({skills.matches.length})
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

        {skills.missing_in_linkedin &&
          skills.missing_in_linkedin.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Missing on LinkedIn ({skills.missing_in_linkedin.length})
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

        {skills.missing_in_resume && skills.missing_in_resume.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              Missing in Resume ({skills.missing_in_resume.length})
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

        {skills.mismatches && skills.mismatches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              Mismatches ({skills.mismatches.length}) - Same Skill, Different
              Representation
            </h4>
            <div className="space-y-3">
              {skills.mismatches.map((mismatch, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">
                      {mismatch.concept || "Skill"}:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">LinkedIn:</span>
                    <Badge variant="outline">{mismatch.linkedin_value}</Badge>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-muted-foreground">Resume:</span>
                    <Badge variant="outline">{mismatch.resume_value}</Badge>
                  </div>
                  {mismatch.reason && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Reason: {mismatch.reason}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {skills.alignments && skills.alignments.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Alignments ({skills.alignments.length}) - Properly Matched Skills
            </h4>
            <div className="space-y-2">
              {skills.alignments.map((alignment, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  <span className="font-medium">
                    {alignment.concept || "Skill"}:
                  </span>
                  <Badge variant="default">{alignment.linkedin_value}</Badge>
                  <span className="text-muted-foreground">↔</span>
                  <Badge variant="default">{alignment.resume_value}</Badge>
                  <Badge variant="secondary" className="text-xs">
                    {alignment.match_type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {skills.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              Recommendation
            </h4>
            <p className="text-sm text-muted-foreground">{skills.comments}</p>
          </div>
        )}
      </div>
    );
  }

  function renderExperienceDetails(experience) {
    if (!experience)
      return <p className="text-muted-foreground">No data available</p>;

    return (
      <div className="space-y-6">
        {experience.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">
              {experience.summary}
            </p>
          </div>
        )}
        {experience.matches && experience.matches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Matched Experiences ({experience.matches.length})
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {experience.matches.map((match, idx) => (
                <li key={idx}>{match}</li>
              ))}
            </ul>
          </div>
        )}
        {experience.contradictions && experience.contradictions.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              Contradictions ({experience.contradictions.length})
            </h4>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Field</TableHead>
                    <TableHead>LinkedIn</TableHead>
                    <TableHead>Resume</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {experience.contradictions.map((contradiction, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">
                        {contradiction.field}
                      </TableCell>
                      <TableCell>{contradiction.linkedin}</TableCell>
                      <TableCell>{contradiction.resume}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
        {experience.missing_in_linkedin &&
          experience.missing_in_linkedin.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Missing Entries on LinkedIn (
                {experience.missing_in_linkedin.length})
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {experience.missing_in_linkedin.map((entry, idx) => (
                  <li key={idx}>{entry}</li>
                ))}
              </ul>
            </div>
          )}
        {experience.missing_in_resume &&
          experience.missing_in_resume.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Missing Entries in Resume ({experience.missing_in_resume.length}
                )
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {experience.missing_in_resume.map((entry, idx) => (
                  <li key={idx}>{entry}</li>
                ))}
              </ul>
            </div>
          )}
        {experience.mismatches && experience.mismatches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              Mismatches ({experience.mismatches.length}) - Same Experience,
              Different Representation
            </h4>
            <div className="space-y-3">
              {experience.mismatches.map((mismatch, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">
                      {mismatch.concept || "Experience"}:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">LinkedIn:</span>
                    <Badge variant="outline">{mismatch.linkedin_value}</Badge>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-muted-foreground">Resume:</span>
                    <Badge variant="outline">{mismatch.resume_value}</Badge>
                  </div>
                  {mismatch.reason && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Reason: {mismatch.reason}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {experience.alignments && experience.alignments.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Alignments ({experience.alignments.length}) - Properly Matched
              Experience
            </h4>
            <div className="space-y-2">
              {experience.alignments.map((alignment, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  <span className="font-medium">
                    {alignment.concept || "Experience"}:
                  </span>
                  <Badge variant="default">{alignment.linkedin_value}</Badge>
                  <span className="text-muted-foreground">↔</span>
                  <Badge variant="default">{alignment.resume_value}</Badge>
                  <Badge variant="secondary" className="text-xs">
                    {alignment.match_type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
        {experience.responsibility_alignment && (
          <div>
            <h4 className="font-semibold mb-2">Responsibility Alignment</h4>
            <Badge
              variant={
                experience.responsibility_alignment === "High"
                  ? "default"
                  : experience.responsibility_alignment === "Medium"
                  ? "secondary"
                  : "destructive"
              }
            >
              {experience.responsibility_alignment}
            </Badge>
          </div>
        )}
        {experience.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              AI Suggestion
            </h4>
            <p className="text-sm text-muted-foreground">
              {experience.comments}
            </p>
          </div>
        )}
      </div>
    );
  }

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
              className="text-base px-3 py-1"
            >
              {about.alignment}
            </Badge>
          </div>
        )}
        {about.tone_comparison && (
          <div>
            <h4 className="font-semibold mb-3">Tone Analysis</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {about.tone_comparison}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-20">
                  Narrative
                </span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getStatusColor(about.score || 0)}`}
                    style={{ width: `${(about.score || 0) * 10}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-20">
                  Professional
                </span>
              </div>
            </div>
          </div>
        )}
        {about.missing_elements && about.missing_elements.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              Missing Elements ({about.missing_elements.length})
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {about.missing_elements.map((element, idx) => (
                <li key={idx}>{element}</li>
              ))}
            </ul>
          </div>
        )}
        {about.mismatches && about.mismatches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              Mismatches ({about.mismatches.length}) - Same Element, Different
              Representation
            </h4>
            <div className="space-y-3">
              {about.mismatches.map((mismatch, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">
                      {mismatch.concept || "Element"}:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">LinkedIn:</span>
                    <Badge variant="outline">{mismatch.linkedin_value}</Badge>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-muted-foreground">Resume:</span>
                    <Badge variant="outline">{mismatch.resume_value}</Badge>
                  </div>
                  {mismatch.reason && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Reason: {mismatch.reason}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {about.alignments && about.alignments.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Alignments ({about.alignments.length}) - Properly Matched Elements
            </h4>
            <div className="space-y-2">
              {about.alignments.map((alignment, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  <span className="font-medium">
                    {alignment.concept || "Element"}:
                  </span>
                  <Badge variant="default">{alignment.linkedin_value}</Badge>
                  <span className="text-muted-foreground">↔</span>
                  <Badge variant="default">{alignment.resume_value}</Badge>
                  <Badge variant="secondary" className="text-xs">
                    {alignment.match_type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
        {about.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              Recommendation
            </h4>
            <p className="text-sm text-muted-foreground">{about.comments}</p>
          </div>
        )}
      </div>
    );
  }

  function renderEducationDetails(education) {
    if (!education)
      return <p className="text-muted-foreground">No data available</p>;
    return (
      <div className="space-y-6">
        {education.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{education.summary}</p>
          </div>
        )}
        {education.matches && education.matches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Matched Education ({education.matches.length})
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {education.matches.map((match, idx) => (
                <li key={idx}>{match}</li>
              ))}
            </ul>
          </div>
        )}
        {education.missing_in_linkedin &&
          education.missing_in_linkedin.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Missing on LinkedIn ({education.missing_in_linkedin.length})
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {education.missing_in_linkedin.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        {education.missing_in_resume &&
          education.missing_in_resume.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                Missing in Resume ({education.missing_in_resume.length})
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {education.missing_in_resume.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        {education.mismatches && education.mismatches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              Mismatches ({education.mismatches.length}) - Same Education,
              Different Representation
            </h4>
            <div className="space-y-3">
              {education.mismatches.map((mismatch, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">
                      {mismatch.concept || "Education"}:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">LinkedIn:</span>
                    <Badge variant="outline">{mismatch.linkedin_value}</Badge>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-muted-foreground">Resume:</span>
                    <Badge variant="outline">{mismatch.resume_value}</Badge>
                  </div>
                  {mismatch.reason && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Reason: {mismatch.reason}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {education.alignments && education.alignments.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Alignments ({education.alignments.length}) - Properly Matched
              Education
            </h4>
            <div className="space-y-2">
              {education.alignments.map((alignment, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  <span className="font-medium">
                    {alignment.concept || "Education"}:
                  </span>
                  <Badge variant="default">{alignment.linkedin_value}</Badge>
                  <span className="text-muted-foreground">↔</span>
                  <Badge variant="default">{alignment.resume_value}</Badge>
                  <Badge variant="secondary" className="text-xs">
                    {alignment.match_type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
        {education.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              Recommendation
            </h4>
            <p className="text-sm text-muted-foreground">
              {education.comments}
            </p>
          </div>
        )}
      </div>
    );
  }

  function renderKeywordsDetails(keywords) {
    if (!keywords)
      return <p className="text-muted-foreground">No data available</p>;

    return (
      <div className="space-y-6">
        {keywords.summary && (
          <div>
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{keywords.summary}</p>
          </div>
        )}
        {keywords.common_keywords && keywords.common_keywords.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Common Keywords ({keywords.common_keywords.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {keywords.common_keywords.map((keyword, idx) => (
                <Badge key={idx} variant="default" className="text-sm">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {keywords.resume_only && keywords.resume_only.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              Resume Only Keywords ({keywords.resume_only.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {keywords.resume_only.map((keyword, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {keywords.linkedin_only && keywords.linkedin_only.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              LinkedIn Only Keywords ({keywords.linkedin_only.length})
            </h4>
            <div className="flex flex-wrap gap-2">
              {keywords.linkedin_only.map((keyword, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {keywords.mismatches && keywords.mismatches.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              Mismatches ({keywords.mismatches.length}) - Same Keyword,
              Different Representation
            </h4>
            <div className="space-y-3">
              {keywords.mismatches.map((mismatch, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">
                      {mismatch.concept || "Keyword"}:
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">LinkedIn:</span>
                    <Badge variant="outline">{mismatch.linkedin_value}</Badge>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-muted-foreground">Resume:</span>
                    <Badge variant="outline">{mismatch.resume_value}</Badge>
                  </div>
                  {mismatch.reason && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Reason: {mismatch.reason}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {keywords.alignments && keywords.alignments.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Alignments ({keywords.alignments.length}) - Properly Matched
              Keywords
            </h4>
            <div className="space-y-2">
              {keywords.alignments.map((alignment, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                  <span className="font-medium">
                    {alignment.concept || "Keyword"}:
                  </span>
                  <Badge variant="default">{alignment.linkedin_value}</Badge>
                  <span className="text-muted-foreground">↔</span>
                  <Badge variant="default">{alignment.resume_value}</Badge>
                  <Badge variant="secondary" className="text-xs">
                    {alignment.match_type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
        {keywords.tone_summary && (
          <div>
            <h4 className="font-semibold mb-2">Tone Summary</h4>
            <p className="text-sm text-muted-foreground">
              {keywords.tone_summary}
            </p>
          </div>
        )}
        {keywords.comments && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              Recommendation
            </h4>
            <p className="text-sm text-muted-foreground">{keywords.comments}</p>
          </div>
        )}
      </div>
    );
  }
};

export default ComparisonReportPage;
