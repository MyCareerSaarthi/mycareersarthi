"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useAnalysisSession } from "@/hooks/useAnalysisSession";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RoleSelector from "@/components/ui/role-selector";
import JobDescriptionInput from "@/components/ui/job-description-input";
import { api } from "@/components/api/api";
import { useAuth, useUser } from "@clerk/nextjs";
import SimpleLoader from "@/components/simple-loader";
import { useRouter } from "next/navigation";
import {
  Linkedin,
  Briefcase,
  ArrowRight,
  Upload,
  Sparkles,
  FileText,
  X,
} from "lucide-react";

const LinkedinAnalyze = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [inputMode, setInputMode] = useState("role");
  const [pdfFile, setPdfFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [processData, setProcessData] = useState({
    title: "Starting Analysis",
    subtitle: "Initializing LinkedIn profile analysis",
    currentStep: 1,
    totalSteps: 12,
    percentage: 0,
  });

  const { user } = useUser();
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const { activeSession, saveSession, clearSession } =
    useAnalysisSession("linkedin");
  const eventSourceRef = useRef(null);

  // SSE status config
  const statusConfig = {
    pending: {
      title: "Preparing",
      subtitle: "Your request is being prepared...",
      currentStep: 1,
      percentage: 10,
    },
    queued: {
      title: "In Queue",
      subtitle: "Your request is in the queue...",
      currentStep: 2,
      percentage: 20,
    },
    scraping: {
      title: "Fetching Profile",
      subtitle: "Fetching your LinkedIn profile data...",
      currentStep: 3,
      percentage: 40,
    },
    analyzing: {
      title: "AI Analysis",
      subtitle: "Running AI analysis on your profile...",
      currentStep: 4,
      percentage: 60,
    },
    generating_report: {
      title: "Generating Report",
      subtitle: "Creating your detailed report...",
      currentStep: 5,
      percentage: 80,
    },
    completed: {
      title: "Complete!",
      subtitle: "Your analysis is ready!",
      currentStep: 6,
      percentage: 100,
    },
  };

  // connectSSE: opens an EventSource with auto-reconnect
  const connectSSE = useCallback(
    (analysisRequestId, token) => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }

      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      let retryCount = 0;
      const MAX_RETRIES = 5;
      let hasCompleted = false;

      const open = async () => {
        const currentToken = retryCount === 0 ? token : await getToken();
        if (!currentToken) {
          setIsAnalyzing(false);
          clearSession();
          setErrors({
            general:
              "Authentication expired. Please refresh the page and try again.",
          });
          return;
        }

        const es = new EventSource(
          `${baseUrl}/api/jobs/${analysisRequestId}/stream?token=${encodeURIComponent(currentToken)}`,
        );
        eventSourceRef.current = es;

        es.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            retryCount = 0;

            const config =
              data.status === "failed"
                ? {
                    title: "Failed",
                    subtitle:
                      data.message || "Analysis failed. Please try again.",
                    currentStep: 6,
                    percentage: 0,
                  }
                : statusConfig[data.status] || statusConfig.pending;

            setProcessData({ ...config, totalSteps: 6 });

            if (data.status === "completed" && data.result_report_id) {
              hasCompleted = true;
              es.close();
              clearSession();
              setTimeout(() => {
                router.push(`/linkedin/report?id=${data.result_report_id}`);
              }, 1000);
            } else if (data.status === "failed") {
              hasCompleted = true;
              es.close();
              clearSession();
              setIsAnalyzing(false);
              setErrors({
                general: data.message || "Analysis failed. Please try again.",
              });
            }
          } catch (parseError) {
            console.error("[SSE] Parse error:", parseError);
          }
        };

        es.onerror = () => {
          es.close();
          eventSourceRef.current = null;

          setTimeout(() => {
            if (hasCompleted) return;

            retryCount++;
            if (retryCount <= MAX_RETRIES) {
              const delay = Math.min(
                2000 * Math.pow(2, retryCount - 1),
                30000,
              );
              setTimeout(() => {
                if (!hasCompleted) open();
              }, delay);
            } else {
              hasCompleted = true;
              clearSession();
              setIsAnalyzing(false);
              setErrors({
                general:
                  "Lost connection to the server. Please check your analysis status in the dashboard.",
              });
            }
          }, 1000);
        };
      };

      open();
    },
    [getToken, router, clearSession],
  );

  // Check authentication
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      const formState = {
        linkedinUrl,
        selectedRole,
        jobDescription,
        inputMode,
      };
      sessionStorage.setItem(
        "linkedin_analyze_form",
        JSON.stringify(formState),
      );
      window.location.href = "/login?redirect=/linkedin/analyze";
    }
  }, [isLoaded, isSignedIn]);

  // Restore form state from sessionStorage after login redirect
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      try {
        const saved = sessionStorage.getItem("linkedin_analyze_form");
        if (saved) {
          const formState = JSON.parse(saved);
          if (formState.linkedinUrl) setLinkedinUrl(formState.linkedinUrl);
          if (formState.selectedRole) setSelectedRole(formState.selectedRole);
          if (formState.jobDescription)
            setJobDescription(formState.jobDescription);
          if (formState.inputMode) setInputMode(formState.inputMode);
          sessionStorage.removeItem("linkedin_analyze_form");
        }
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, [isLoaded, isSignedIn]);

  // Resume an active session on page load / refresh
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !activeSession) return;

    const resume = async () => {
      setIsAnalyzing(true);
      setProcessData({
        title: "Resuming...",
        subtitle: "Reconnecting to your in-progress analysis...",
        currentStep: 2,
        totalSteps: 6,
        percentage: 15,
      });

      const token = await getToken();
      connectSSE(activeSession.analysisRequestId, token);
    };

    resume();

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [isLoaded, isSignedIn, activeSession]); // eslint-disable-line react-hooks/exhaustive-deps

  // Show loading state while checking auth
  if (!isLoaded || !isSignedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};

    if (!linkedinUrl && !pdfFile) {
      newErrors.profile =
        "Please provide either a LinkedIn URL or upload a LinkedIn profile PDF file";
    }

    if (
      linkedinUrl &&
      !linkedinUrl.match(
        /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_.]+\/?$/,
      )
    ) {
      newErrors.linkedinUrl = "Please enter a valid LinkedIn profile URL";
    }

    if (inputMode === "role" && !selectedRole) {
      newErrors.role = "Please select a role";
    }

    if (inputMode === "jobDescription" && !jobDescription.trim()) {
      newErrors.jobDescription = "Please enter a job description";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStepSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsAnalyzing(true);
    setProcessData({
      title: "Queuing Analysis",
      subtitle: "Submitting your LinkedIn profile for analysis",
      currentStep: 1,
      totalSteps: 6,
      percentage: 5,
    });

    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("userId", user?.id);
      if (linkedinUrl) {
        formData.append("linkedinUrl", linkedinUrl);
      }
      if (pdfFile) {
        formData.append("file", pdfFile);
      }
      if (inputMode === "role" && selectedRole) {
        if (selectedRole.type === "existing") {
          formData.append("roleId", selectedRole.roleId);
          formData.append("roleName", selectedRole.roleName);
          if (selectedRole.experienceLevel) {
            formData.append("experienceLevel", selectedRole.experienceLevel);
          }
        } else if (selectedRole.type === "custom") {
          formData.append("roleName", selectedRole.roleName);
          formData.append("experienceLevel", "Mid-level");
        }
      }
      if (inputMode === "jobDescription" && jobDescription) {
        formData.append("jobDescription", jobDescription);
      }

      const response = await api.post("/api/linkedin/analyze", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.data.success || !response.data.analysisRequestId) {
        throw new Error(response.data.message || "Failed to submit analysis");
      }

      const analysisRequestId = response.data.analysisRequestId;
      saveSession(analysisRequestId);

      setProcessData({
        title: "In Queue",
        subtitle: "Your request has been queued for processing...",
        currentStep: 2,
        totalSteps: 6,
        percentage: 15,
      });

      connectSSE(analysisRequestId, token);
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsAnalyzing(false);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Analysis failed. Please try again.";
      setErrors({ general: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name.toLowerCase();
      const isValidFile =
        file.type === "application/pdf" || fileName.endsWith(".pdf");

      if (isValidFile) {
        setPdfFile(file);
        setErrors((prev) => ({ ...prev, profile: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          profile: "Please upload a valid PDF file",
        }));
      }
    }
  };

  const removePdf = () => {
    setPdfFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const canSubmit = () => {
    return (
      (linkedinUrl || pdfFile) &&
      ((inputMode === "role" && selectedRole) ||
        (inputMode === "jobDescription" && jobDescription.trim()))
    );
  };

  const handleCancelAnalysis = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    clearSession();
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {isAnalyzing && (
        <SimpleLoader
          message="Analyzing your LinkedIn profile... This may take a while."
          onCancel={handleCancelAnalysis}
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-4">
        <div className="absolute inset-0 bg-linear-to-br from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 max-w-3xl z-10">
          <div className="text-center space-y-2 animate-fade-in">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-xs font-medium mb-2"
            >
              <Sparkles className="w-3 h-3 mr-1.5 inline" />
              AI-Powered Analysis
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              LinkedIn Profile Analysis
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Analyze your LinkedIn profile for FREE! Get complete AI-powered
              insights and actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content — Single Page Form */}
      <div className="relative container mx-auto px-4 max-w-3xl pb-8">
        {errors.general && (
          <div className="mb-4 p-3 bg-destructive/10 border-2 border-destructive/20 rounded-xl backdrop-blur-sm animate-fade-in">
            <p className="text-sm text-destructive font-medium">
              {errors.general}
            </p>
          </div>
        )}

        <Card className="p-5 md:p-7 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-xl rounded-xl space-y-8">
          {/* ─── Section 1: LinkedIn Profile ─── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LinkedIn Profile</h3>
                <p className="text-xs text-muted-foreground">
                  Add your LinkedIn URL or upload a profile PDF
                </p>
              </div>
            </div>

            {/* LinkedIn URL Input */}
            <div className="space-y-1.5">
              <Label
                htmlFor="linkedinUrl"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn Profile URL
              </Label>
              <Input
                id="linkedinUrl"
                placeholder="https://www.linkedin.com/in/your-profile"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className={`rounded-lg bg-background border-border hover:border-primary/50 transition-colors ${
                  errors.linkedinUrl ? "border-destructive" : ""
                }`}
              />
              {errors.linkedinUrl && (
                <p className="text-sm text-destructive">{errors.linkedinUrl}</p>
              )}
            </div>

            {/* Divider */}
            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-3 text-muted-foreground">OR</span>
              </div>
            </div>

            {/* Compact PDF Upload */}
            <div className="space-y-1.5">
              <Label className="text-sm font-medium flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Upload LinkedIn Profile PDF
              </Label>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".pdf"
                onChange={handleFileChange}
              />
              {pdfFile ? (
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/5">
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium truncate flex-1">
                    {pdfFile.name}
                  </span>
                  <button
                    onClick={removePdf}
                    className="p-1 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm text-muted-foreground"
                >
                  <Upload className="w-4 h-4" />
                  <span>Click to upload PDF (max 10MB)</span>
                </button>
              )}
              {errors.profile && (
                <p className="text-sm text-destructive">{errors.profile}</p>
              )}
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-border" />

          {/* ─── Section 2: Job Requirements ─── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Job Requirements</h3>
                <p className="text-xs text-muted-foreground">
                  Select a role or paste a job description
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant={inputMode === "role" ? "default" : "outline"}
                  onClick={() => setInputMode("role")}
                  size="sm"
                  className={`rounded-xl transition-all duration-300 ${
                    inputMode === "role"
                      ? "bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50"
                      : ""
                  }`}
                >
                  Select A Role
                </Button>
                <Button
                  type="button"
                  variant={
                    inputMode === "jobDescription" ? "default" : "outline"
                  }
                  onClick={() => setInputMode("jobDescription")}
                  size="sm"
                  className={`rounded-xl transition-all duration-300 ${
                    inputMode === "jobDescription"
                      ? "bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50"
                      : ""
                  }`}
                >
                  Paste Job Description
                </Button>
              </div>

              {inputMode === "role" ? (
                <RoleSelector
                  value={selectedRole}
                  onChange={setSelectedRole}
                  error={errors.role}
                  placeholder="Search and select your target role..."
                />
              ) : (
                <JobDescriptionInput
                  value={jobDescription}
                  onChange={setJobDescription}
                  error={errors.jobDescription}
                  placeholder="Enter the job description for the role you're targeting..."
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              onClick={handleStepSubmit}
              disabled={isSubmitting || !canSubmit()}
              className="w-full bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl py-5 text-base font-semibold"
            >
              {isSubmitting ? "Analyzing..." : "Analyze for Free"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LinkedinAnalyze;
