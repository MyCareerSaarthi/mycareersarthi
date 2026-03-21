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
  Link,
  Check,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

const LinkedinAnalyze = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [inputMode, setInputMode] = useState("role");
  const [pdfFile, setPdfFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
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
    pending: { title: "Preparing", subtitle: "Your request is being prepared...", currentStep: 1, percentage: 10 },
    queued: { title: "In Queue", subtitle: "Your request is in the queue...", currentStep: 2, percentage: 20 },
    scraping: { title: "Fetching Profile", subtitle: "Fetching your LinkedIn profile data...", currentStep: 3, percentage: 40 },
    analyzing: { title: "AI Analysis", subtitle: "Running AI analysis on your profile...", currentStep: 4, percentage: 60 },
    generating_report: { title: "Generating Report", subtitle: "Creating your detailed report...", currentStep: 5, percentage: 80 },
    completed: { title: "Complete!", subtitle: "Your analysis is ready!", currentStep: 6, percentage: 100 },
  };

  const connectSSE = useCallback(
    (analysisRequestId, token) => {
      if (eventSourceRef.current) { eventSourceRef.current.close(); eventSourceRef.current = null; }
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      let retryCount = 0;
      const MAX_RETRIES = 5;
      let hasCompleted = false;

      const open = async () => {
        const currentToken = retryCount === 0 ? token : await getToken();
        if (!currentToken) {
          setIsAnalyzing(false); clearSession();
          setErrors({ general: "Authentication expired. Please refresh the page and try again." });
          return;
        }
        const es = new EventSource(`${baseUrl}/api/jobs/${analysisRequestId}/stream?token=${encodeURIComponent(currentToken)}`);
        eventSourceRef.current = es;

        es.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            retryCount = 0;
            const config = data.status === "failed"
              ? { title: "Failed", subtitle: data.message || "Analysis failed. Please try again.", currentStep: 6, percentage: 0 }
              : statusConfig[data.status] || statusConfig.pending;
            setProcessData({ ...config, totalSteps: 6 });

            if (data.status === "completed" && data.result_report_id) {
              hasCompleted = true; es.close(); clearSession();
              setTimeout(() => { router.push(`/linkedin/report?id=${data.result_report_id}`); }, 1000);
            } else if (data.status === "failed") {
              hasCompleted = true; es.close(); clearSession(); setIsAnalyzing(false);
              setErrors({ general: data.message || "Analysis failed. Please try again." });
            }
          } catch (parseError) { console.error("[SSE] Parse error:", parseError); }
        };

        es.onerror = () => {
          es.close(); eventSourceRef.current = null;
          setTimeout(() => {
            if (hasCompleted) return;
            retryCount++;
            if (retryCount <= MAX_RETRIES) {
              const delay = Math.min(2000 * Math.pow(2, retryCount - 1), 30000);
              setTimeout(() => { if (!hasCompleted) open(); }, delay);
            } else {
              hasCompleted = true; clearSession(); setIsAnalyzing(false);
              setErrors({ general: "Lost connection to the server. Please check your analysis status in the dashboard." });
            }
          }, 1000);
        };
      };
      open();
    },
    [getToken, router, clearSession],
  );

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      const formState = { linkedinUrl, selectedRole, jobDescription, inputMode };
      sessionStorage.setItem("linkedin_analyze_form", JSON.stringify(formState));
      window.location.href = "/login?redirect=/linkedin/analyze";
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      try {
        const saved = sessionStorage.getItem("linkedin_analyze_form");
        if (saved) {
          const formState = JSON.parse(saved);
          if (formState.linkedinUrl) setLinkedinUrl(formState.linkedinUrl);
          if (formState.selectedRole) setSelectedRole(formState.selectedRole);
          if (formState.jobDescription) setJobDescription(formState.jobDescription);
          if (formState.inputMode) setInputMode(formState.inputMode);
          sessionStorage.removeItem("linkedin_analyze_form");
        }
      } catch (e) { /* Ignore */ }
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !activeSession) return;
    const resume = async () => {
      setIsAnalyzing(true);
      setProcessData({ title: "Resuming...", subtitle: "Reconnecting to your in-progress analysis...", currentStep: 2, totalSteps: 6, percentage: 15 });
      const token = await getToken();
      connectSSE(activeSession.analysisRequestId, token);
    };
    resume();
    return () => { if (eventSourceRef.current) { eventSourceRef.current.close(); eventSourceRef.current = null; } };
  }, [isLoaded, isSignedIn, activeSession]); // eslint-disable-line react-hooks/exhaustive-deps

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

  // ── Helpers ──
  const step1Done = !!(linkedinUrl || pdfFile);
  const step2Done = !!(
    (inputMode === "role" && selectedRole) ||
    (inputMode === "jobDescription" && jobDescription.trim())
  );

  const validateForm = () => {
    const newErrors = {};
    if (!linkedinUrl && !pdfFile) newErrors.profile = "Please provide either a LinkedIn URL or upload a LinkedIn profile PDF file";
    if (linkedinUrl && !linkedinUrl.match(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_.]+\/?$/)) newErrors.linkedinUrl = "Please enter a valid LinkedIn profile URL";
    if (inputMode === "role" && !selectedRole) newErrors.role = "Please select a role";
    if (inputMode === "jobDescription" && !jobDescription.trim()) newErrors.jobDescription = "Please enter a job description";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStepSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    setIsAnalyzing(true);
    setProcessData({ title: "Queuing Analysis", subtitle: "Submitting your LinkedIn profile for analysis", currentStep: 1, totalSteps: 6, percentage: 5 });
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("userId", user?.id);
      if (linkedinUrl) formData.append("linkedinUrl", linkedinUrl);
      if (pdfFile) formData.append("file", pdfFile);
      if (inputMode === "role" && selectedRole) {
        if (selectedRole.type === "existing") {
          formData.append("roleId", selectedRole.roleId);
          formData.append("roleName", selectedRole.roleName);
          if (selectedRole.experienceLevel) formData.append("experienceLevel", selectedRole.experienceLevel);
        } else if (selectedRole.type === "custom") {
          formData.append("roleName", selectedRole.roleName);
          formData.append("experienceLevel", "Mid-level");
        }
      }
      if (inputMode === "jobDescription" && jobDescription) formData.append("jobDescription", jobDescription);

      const response = await api.post("/api/linkedin/analyze", formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });
      if (!response.data.success || !response.data.analysisRequestId) throw new Error(response.data.message || "Failed to submit analysis");
      const analysisRequestId = response.data.analysisRequestId;
      saveSession(analysisRequestId);
      setProcessData({ title: "In Queue", subtitle: "Your request has been queued for processing...", currentStep: 2, totalSteps: 6, percentage: 15 });
      connectSSE(analysisRequestId, token);
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsAnalyzing(false);
      setErrors({ general: error?.response?.data?.message || error?.message || "Analysis failed. Please try again." });
    } finally { setIsSubmitting(false); }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fn = file.name.toLowerCase();
      if (file.type === "application/pdf" || fn.endsWith(".pdf")) {
        setPdfFile(file);
        setErrors((prev) => ({ ...prev, profile: null }));
      } else {
        setErrors((prev) => ({ ...prev, profile: "Please upload a valid PDF file" }));
      }
    }
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const fn = file.name.toLowerCase();
      if (file.type === "application/pdf" || fn.endsWith(".pdf")) {
        setPdfFile(file); setErrors((prev) => ({ ...prev, profile: null }));
      } else { setErrors((prev) => ({ ...prev, profile: "Please upload a valid PDF file" })); }
    }
  };

  const removePdf = () => { setPdfFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; };
  const handleCancelAnalysis = () => { if (eventSourceRef.current) { eventSourceRef.current.close(); eventSourceRef.current = null; } clearSession(); setIsAnalyzing(false); };

  // ── Step indicator component ──
  const StepIndicator = ({ number, done, active, label }) => (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
        done ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" :
        active ? "bg-primary/15 text-primary border-2 border-primary" :
        "bg-muted text-muted-foreground border border-border"
      }`}>
        {done ? <Check className="w-4 h-4" /> : number}
      </div>
      <span className={`text-sm font-semibold transition-colors ${done || active ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative">
      {isAnalyzing && (
        <SimpleLoader message="Analyzing your LinkedIn profile... This may take a while." onCancel={handleCancelAnalysis} />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-2">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl z-10">
          <div className="text-center space-y-3 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">LinkedIn Profile Analysis</h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="relative container mx-auto px-4 max-w-5xl py-6">
        {errors.general && (
          <div className="mb-5 p-3.5 bg-destructive/10 border border-destructive/20 rounded-xl">
            <p className="text-sm text-destructive font-medium">{errors.general}</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ──── LEFT: Form ──── */}
          <div className="flex-1 min-w-0 space-y-5">
            {/* Step progress bar */}
            <div className="flex items-center gap-2 px-1">
              <StepIndicator number={1} done={step1Done} active={!step1Done} label="Profile" />
              <div className={`flex-1 h-0.5 rounded-full transition-colors ${step1Done ? "bg-primary" : "bg-border"}`} />
              <StepIndicator number={2} done={step2Done} active={step1Done && !step2Done} label="Requirements" />
            </div>

            {/* ─── Card 1: LinkedIn Profile ─── */}
            <Card className={`p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
              step1Done ? "border-primary/30 bg-card shadow-sm" : "border-primary/20 bg-card/80 shadow-lg shadow-primary/5"
            }`}>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Linkedin className="w-[18px] h-[18px] text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold leading-tight">LinkedIn Profile</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Enter your profile URL or upload a saved PDF
                  </p>
                </div>
                {step1Done && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 shrink-0">
                    <Check className="w-3 h-3 mr-1" />Done
                  </Badge>
                )}
              </div>

              {/* URL input */}
              <div className="space-y-1.5 mb-4">
                <Label htmlFor="linkedinUrl" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Profile URL
                </Label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="linkedinUrl"
                    placeholder="https://linkedin.com/in/your-profile"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className={`pl-10 rounded-xl bg-background border-border hover:border-primary/40 focus:border-primary transition-colors h-11 ${errors.linkedinUrl ? "border-destructive" : ""}`}
                  />
                </div>
                {errors.linkedinUrl && <p className="text-xs text-destructive">{errors.linkedinUrl}</p>}
              </div>

              {/* OR divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center"><span className="bg-card px-3 text-[11px] font-medium text-muted-foreground uppercase tracking-widest">or upload pdf</span></div>
              </div>

              {/* Compact file upload */}
              <div className="mt-3">
                <input type="file" ref={fileInputRef} className="hidden" accept=".pdf" onChange={handleFileChange} />
                {pdfFile ? (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/30 bg-primary/5 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{pdfFile.name}</p>
                      <p className="text-[11px] text-muted-foreground">{(pdfFile.size / 1024).toFixed(0)} KB</p>
                    </div>
                    <button onClick={removePdf} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
                      isDragging
                        ? "border-primary bg-primary/10 scale-[1.01]"
                        : "border-border hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Upload className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">Drop file here or click to browse</p>
                      <p className="text-[11px] text-muted-foreground">PDF only, up to 10 MB</p>
                    </div>
                  </div>
                )}
                {errors.profile && <p className="text-xs text-destructive mt-1.5">{errors.profile}</p>}
              </div>
            </Card>

            {/* ─── Card 2: Job Requirements ─── */}
            <Card className={`p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
              step2Done ? "border-primary/30 bg-card shadow-sm" :
              step1Done ? "border-primary/20 bg-card/80 shadow-lg shadow-primary/5" :
              "border-border bg-card/60"
            }`}>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-[18px] h-[18px] text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold leading-tight">Job Requirements</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    What role are you targeting?
                  </p>
                </div>
                {step2Done && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 shrink-0">
                    <Check className="w-3 h-3 mr-1" />Done
                  </Badge>
                )}
              </div>

              <div className="space-y-4">
                {/* Mode toggle */}
                <div className="flex p-1 bg-muted/60 rounded-xl">
                  <button
                    onClick={() => setInputMode("role")}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      inputMode === "role"
                        ? "bg-background shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Select a Role
                  </button>
                  <button
                    onClick={() => setInputMode("jobDescription")}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      inputMode === "jobDescription"
                        ? "bg-background shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Paste JD
                  </button>
                </div>

                {inputMode === "role" ? (
                  <RoleSelector value={selectedRole} onChange={setSelectedRole} error={errors.role} placeholder="Search and select your target role..." />
                ) : (
                  <JobDescriptionInput value={jobDescription} onChange={setJobDescription} error={errors.jobDescription} placeholder="Paste the job description here..." />
                )}
              </div>
            </Card>
          </div>

          {/* ──── RIGHT: Sticky sidebar ──── */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6 space-y-4">
              {/* Order summary card */}
              <Card className="p-5 rounded-2xl border-2 border-border bg-card">
                <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary" /> Order Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">LinkedIn Analysis</span>
                    <span className="text-sm font-semibold line-through text-muted-foreground">₹199.00</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400">
                    <span className="text-sm font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Free Access
                    </span>
                    <span className="text-sm font-semibold">-₹199.00</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Total</span>
                      <div className="text-2xl font-bold text-primary">FREE</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTA Button */}
              <Button
                onClick={handleStepSubmit}
                disabled={isSubmitting || !(step1Done && step2Done)}
                className="w-full h-12 text-[15px] font-semibold rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:shadow-none"
              >
                {isSubmitting ? "Analyzing..." : "Analyze for Free"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinAnalyze;
