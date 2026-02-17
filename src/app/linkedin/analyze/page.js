"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useAnalysisSession } from "@/hooks/useAnalysisSession";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RoleSelector from "@/components/ui/role-selector";
import JobDescriptionInput from "@/components/ui/job-description-input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { api } from "@/components/api/api";
import { useAuth, useUser } from "@clerk/nextjs";
import SimpleLoader from "@/components/simple-loader";
import { useRouter } from "next/navigation";
import {
  Linkedin,
  FileText,
  Briefcase,
  ArrowRight,
  Upload,
  Sparkles,
} from "lucide-react";

const LinkedinAnalyze = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [inputMode, setInputMode] = useState("role"); // "role" or "jobDescription"
  const [isDragging, setIsDragging] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(null);
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

  // Tab definitions - Only Profile and Requirements for freemium model
  const tabs = [
    { id: "profile", label: "Profile", icon: Linkedin },
    { id: "requirements", label: "Job Requirements", icon: Briefcase },
  ];

  // ── SSE status config (shared between submit and session-resume) ──
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

  // ── connectSSE: opens an EventSource with auto-reconnect ──
  const connectSSE = useCallback(
    (analysisRequestId, token) => {
      // Close any previous connection
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
        // Get a fresh token for each reconnect attempt
        const currentToken = retryCount === 0 ? token : await getToken();
        if (!currentToken) {
          console.warn("[SSE] No token available, cannot reconnect.");
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
            // Reset retries on every successful message
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

          // Wait briefly — the server may have just sent the last event
          setTimeout(() => {
            if (hasCompleted) return;

            retryCount++;
            if (retryCount <= MAX_RETRIES) {
              const delay = Math.min(2000 * Math.pow(2, retryCount - 1), 30000);
              console.warn(
                `[SSE] Connection lost, reconnecting in ${delay / 1000}s (attempt ${retryCount}/${MAX_RETRIES})`,
              );
              setTimeout(() => {
                if (!hasCompleted) open();
              }, delay);
            } else {
              console.error("[SSE] Max reconnect attempts reached, giving up.");
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

  // Check authentication - must be before early return
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/login?redirect=/linkedin/analyze";
    }
  }, [isLoaded, isSignedIn]);

  // ── Resume an active session on page load / refresh ──
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

    // Cleanup on unmount
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [isLoaded, isSignedIn, activeSession]); // eslint-disable-line react-hooks/exhaustive-deps

  // Show loading state while checking auth - AFTER all hooks
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

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      // Profile step validation
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
    }

    if (step === 2) {
      // Job requirements step validation
      if (inputMode === "role" && !selectedRole) {
        newErrors.role = "Please select a role";
      }

      if (inputMode === "jobDescription" && !jobDescription.trim()) {
        newErrors.jobDescription = "Please enter a job description";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    return validateStep(1) && validateStep(2);
  };

  const handleTabChange = (tabId) => {
    // Validate before allowing tab change
    if (tabId === "requirements" && !linkedinUrl && !pdfFile) {
      setErrors({ profile: "Please add your LinkedIn profile first" });
      return;
    }
    setErrors({});
    setActiveTab(tabId);
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

      // Submit analysis request (returns immediately with analysisRequestId)
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
      console.log("[SSE] Analysis request created:", analysisRequestId);

      // Persist session so a refresh can resume
      saveSession(analysisRequestId);

      setProcessData({
        title: "In Queue",
        subtitle: "Your request has been queued for processing...",
        currentStep: 2,
        totalSteps: 6,
        percentage: 15,
      });

      // Open SSE connection with auto-reconnect
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

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const fileName = file.name.toLowerCase();
      // LinkedIn profile exports are always PDF files
      const isValidFile =
        file.type === "application/pdf" || fileName.endsWith(".pdf");

      if (isValidFile) {
        setPdfFile(file);
        setErrors((prev) => ({ ...prev, profile: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          profile: "Please upload a valid LinkedIn profile PDF file",
        }));
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name.toLowerCase();
      // LinkedIn profile exports are always PDF files
      const isValidFile =
        file.type === "application/pdf" || fileName.endsWith(".pdf");

      if (isValidFile) {
        setPdfFile(file);
        setErrors((prev) => ({ ...prev, profile: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          profile: "Please upload a valid LinkedIn profile PDF file",
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

  // Socket useEffect moved above - removed duplicate

  // Show process demo screen during analysis - render as overlay

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">LinkedIn Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Add your LinkedIn URL or upload a profile PDF
                </p>
              </div>
            </div>

            {/* LinkedIn URL Input */}
            <div className="space-y-2">
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
                <span className="bg-background px-3 text-muted-foreground">
                  OR
                </span>
              </div>
            </div>

            {/* PDF Upload */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Upload className="w-4 h-4 text-primary" />
                Upload LinkedIn Profile PDF
              </Label>
              <div
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur-sm ${
                  isDragging
                    ? "border-primary bg-primary/10"
                    : errors.profile
                      ? "border-destructive bg-destructive/5"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                {pdfFile ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5 text-primary"
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
                      <span className="font-medium text-sm">
                        {pdfFile.name}
                      </span>
                    </div>
                    <LoadingButton
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        removePdf();
                      }}
                    >
                      Remove
                    </LoadingButton>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        LinkedIn profile PDF only (max 10MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {errors.profile && (
                <p className="text-sm text-destructive">{errors.profile}</p>
              )}
            </div>
          </div>
        );

      case "requirements":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center backdrop-blur-sm">
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
                  className={`rounded-xl transition-all duration-300 ${
                    inputMode === "role"
                      ? "bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50"
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
                  className={`rounded-xl transition-all duration-300 ${
                    inputMode === "jobDescription"
                      ? "bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50"
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
        );

      default:
        return null;
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
        <div className="relative container mx-auto px-4 max-w-5xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2"
          >
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
              Analyze your LinkedIn profile for FREE! Get AI-powered insights
              with limited access, or upgrade for full analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 max-w-5xl pb-8">
        {errors.general && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-destructive/10 border-2 border-destructive/20 rounded-xl backdrop-blur-sm"
          >
            <p className="text-sm text-destructive font-medium">
              {errors.general}
            </p>
          </motion.div>
        )}

        <Card className="p-4 md:p-5 bg-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-xl rounded-xl">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-muted/50 rounded-xl p-1">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-background shadow-md text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderTabContent()}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Navigation Footer */}
          <div className="flex justify-between items-center pt-4 mt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => {
                if (activeTab === "requirements") {
                  setActiveTab("profile");
                }
              }}
              disabled={activeTab === "profile"}
              className="rounded-xl"
            >
              Previous
            </Button>
            {activeTab === "requirements" ? (
              <Button
                onClick={handleStepSubmit}
                disabled={isSubmitting || !canSubmit()}
                className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl"
              >
                {isSubmitting ? "Analyzing..." : "Analyze for Free"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={() => {
                  if (activeTab === "profile") {
                    if (linkedinUrl || pdfFile) {
                      setActiveTab("requirements");
                    } else {
                      setErrors({
                        profile: "Please add your LinkedIn profile",
                      });
                    }
                  }
                }}
                className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LinkedinAnalyze;
