"use client";

import { useState, useRef, useEffect } from "react";
import { useAnalysisSession } from "@/hooks/useAnalysisSession";
import { LoadingButton } from "@/components/ui/loading-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RoleSelector from "@/components/ui/role-selector";
import JobDescriptionInput from "@/components/ui/job-description-input";
import { api } from "@/components/api/api";
import { handlePayment } from "@/components/payment/payment";
import { useAuth, useUser } from "@clerk/nextjs";
import SimpleLoader from "@/components/simple-loader";
import { useRouter } from "next/navigation";
import {
  FileText,
  Briefcase,
  CreditCard,
  ArrowRight,
  Upload,
  CheckCircle2,
  Sparkles,
  X,
  Check,
  Tag,
} from "lucide-react";

const ResumeAnalyze = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [inputMode, setInputMode] = useState("role");
  const [isDragging, setIsDragging] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [pricing, setPricing] = useState({ originalPrice: 199, finalPrice: 199, discount: 0 });
  const [isLoadingPricing, setIsLoadingPricing] = useState(true);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [processData, setProcessData] = useState({
    title: "Starting Analysis", subtitle: "Initializing resume analysis",
    currentStep: 1, totalSteps: 5, percentage: 0,
  });

  const { user } = useUser();
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const { activeSession, saveSession, clearSession } = useAnalysisSession("resume");

  const getPricing = async () => {
    try {
      const response = await api.get("/api/pricing?serviceType=resume");
      if (response.data.success) {
        const p = response.data.pricing;
        setPricing({ originalPrice: p.originalPrice, finalPrice: p.originalPrice, discount: 0 });
      }
    } catch (error) { console.error("Failed to fetch pricing:", error); }
    finally { setIsLoadingPricing(false); }
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      const formState = { selectedRole, jobDescription, inputMode };
      sessionStorage.setItem("resume_analyze_form", JSON.stringify(formState));
      window.location.href = "/login?redirect=/resume/analyze";
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      try {
        const saved = sessionStorage.getItem("resume_analyze_form");
        if (saved) {
          const s = JSON.parse(saved);
          if (s.selectedRole) setSelectedRole(s.selectedRole);
          if (s.jobDescription) setJobDescription(s.jobDescription);
          if (s.inputMode) setInputMode(s.inputMode);
          sessionStorage.removeItem("resume_analyze_form");
        }
      } catch (e) { /* ignore */ }
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !activeSession) return;
    const resume = async () => {
      setIsAnalyzing(true);
      setProcessData({ title: "Resuming...", subtitle: "Reconnecting to your in-progress analysis...", currentStep: 2, totalSteps: 5, percentage: 15 });
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const analysisRequestId = activeSession.analysisRequestId;
      let pollCount = 0;
      const MAX_POLLS = 450;
      let paymentWaitCount = 0;
      const MAX_PAYMENT_WAITS = 15; // Wait up to ~30 seconds for payment verification
      const poll = async () => {
        if (pollCount >= MAX_POLLS) { clearSession(); setIsAnalyzing(false); setErrors({ general: "Analysis timed out." }); return; }
        pollCount++;
        try {
          const resp = await fetch(`${baseUrl}/api/rag/status/${analysisRequestId}`, { headers: { "Content-Type": "application/json" } });
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
          const data = await resp.json();
          if (data.status === "completed" && data.result_report_id) {
            if (data.payment_status === "completed" || !data.order_id) {
              // Payment verified or free analysis — redirect to report
              clearSession(); window.location.href = `/resume/report?id=${data.result_report_id}`; return;
            } else {
              // Payment verification still in progress — keep waiting
              paymentWaitCount++;
              if (paymentWaitCount >= MAX_PAYMENT_WAITS) {
                clearSession(); setIsAnalyzing(false);
                setErrors({ general: "Payment verification is taking longer than expected. Please check your payment status or try again." });
                return;
              }
              setProcessData({ title: "Verifying Payment", subtitle: "Your payment is being verified. Please wait...", currentStep: 4, totalSteps: 5, percentage: 80 });
              setTimeout(poll, 2000);
              return;
            }
          }
          if (data.status === "failed") { clearSession(); setIsAnalyzing(false); setErrors({ general: data.message || "Analysis failed." }); return; }
          setTimeout(poll, 2000);
        } catch (err) { console.warn("[Resume] poll error:", err); setTimeout(poll, 4000); }
      };
      poll();
    };
    resume();
  }, [isLoaded, isSignedIn, activeSession]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (isLoaded && isSignedIn) getPricing(); }, [isLoaded, isSignedIn]);

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
  const step1Done = !!pdfFile;
  const step2Done = !!((inputMode === "role" && selectedRole) || (inputMode === "jobDescription" && jobDescription.trim()));
  const canSubmit = step1Done && step2Done;

  const applyCoupon = async () => {
    if (!couponCode.trim()) { setErrors((p) => ({ ...p, coupon: "Please enter a coupon code" })); return; }
    setIsApplyingCoupon(true);
    try {
      const token = await getToken();
      const response = await api.post("/api/pricing/apply-coupon", { code: couponCode.trim(), userId: user?.id, orderAmount: pricing.originalPrice }, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.success) {
        setAppliedCoupon({ code: couponCode.trim(), discount: response.data.discount });
        setPricing((p) => ({ ...p, finalPrice: response.data.finalAmount, discount: response.data.discount }));
        setErrors((p) => ({ ...p, coupon: null }));
      }
    } catch (error) {
      setErrors((p) => ({ ...p, coupon: error.response?.data?.message || "Failed to apply coupon" }));
      setAppliedCoupon(null);
      setPricing((p) => ({ ...p, finalPrice: p.originalPrice, discount: 0 }));
    } finally { setIsApplyingCoupon(false); }
  };

  const removeCoupon = () => {
    setCouponCode(""); setAppliedCoupon(null);
    setPricing((p) => ({ ...p, finalPrice: p.originalPrice, discount: 0 }));
    setErrors((p) => ({ ...p, coupon: null }));
  };

  const validateForm = () => {
    const e = {};
    if (!pdfFile) e.resume = "Please upload a resume file";
    if (inputMode === "role" && !selectedRole) e.role = "Please select a role";
    if (inputMode === "jobDescription" && !jobDescription.trim()) e.jobDescription = "Please enter a job description";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleStepSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("userId", user?.id);
      if (pdfFile) formData.append("file", pdfFile);
      if (inputMode === "role" && selectedRole) {
        if (selectedRole.type === "existing") {
          formData.append("roleId", selectedRole.roleId);
          formData.append("roleName", selectedRole.roleName);
          if (selectedRole.experienceLevel) formData.append("experienceLevel", selectedRole.experienceLevel);
        } else if (selectedRole.type === "custom") { formData.append("roleName", selectedRole.roleName); formData.append("experienceLevel", "Mid-level"); }
      }
      if (inputMode === "jobDescription" && jobDescription) formData.append("jobDescription", jobDescription);
      if (appliedCoupon) { formData.append("couponCode", appliedCoupon.code); formData.append("discountAmount", appliedCoupon.discount); }

      setIsAnalyzing(true);
      setProcessData({ title: "Starting Analysis", subtitle: "Initializing resume analysis", currentStep: 1, totalSteps: 5, percentage: 0 });
      await handlePayment("resume", token, user, formData, setIsSubmitting,
        (errorMsg) => { clearSession(); setIsAnalyzing(false); setErrors({ general: errorMsg }); },
        getToken, (analysisRequestId) => saveSession(analysisRequestId),
      );
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsAnalyzing(false);
      setErrors({ general: error?.response?.data?.message || error?.message || "Payment initiation failed." });
    } finally { setIsSubmitting(false); }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fn = file.name.toLowerCase();
      const valid = file.type === "application/pdf" || fn.endsWith(".pdf") || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || fn.endsWith(".docx") || file.type === "text/plain" || fn.endsWith(".txt");
      if (valid) { setPdfFile(file); setErrors((p) => ({ ...p, resume: null })); }
      else { setErrors((p) => ({ ...p, resume: "Please upload a valid PDF, DOCX, or TXT file" })); }
    }
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const fn = file.name.toLowerCase();
      const valid = file.type === "application/pdf" || fn.endsWith(".pdf") || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || fn.endsWith(".docx") || file.type === "text/plain" || fn.endsWith(".txt");
      if (valid) { setPdfFile(file); setErrors((p) => ({ ...p, resume: null })); }
      else { setErrors((p) => ({ ...p, resume: "Please upload a valid PDF, DOCX, or TXT file" })); }
    }
  };

  const removePdf = () => { setPdfFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; };
  const handleCancelAnalysis = () => { clearSession(); setIsAnalyzing(false); };

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
      {isAnalyzing && <SimpleLoader message="Analyzing your resume... This may take a while." onCancel={handleCancelAnalysis} />}

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-2">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl z-10">
          <div className="text-center space-y-3 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Resume Analysis</h1>
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
            {/* Step progress */}
            <div className="flex items-center gap-2 px-1">
              <StepIndicator number={1} done={step1Done} active={!step1Done} label="Resume" />
              <div className={`flex-1 h-0.5 rounded-full transition-colors ${step1Done ? "bg-primary" : "bg-border"}`} />
              <StepIndicator number={2} done={step2Done} active={step1Done && !step2Done} label="Requirements" />
            </div>

            {/* Card 1: Resume Upload */}
            <Card className={`p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
              step1Done ? "border-primary/30 bg-card shadow-sm" : "border-primary/20 bg-card/80 shadow-lg shadow-primary/5"
            }`}>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-[18px] h-[18px] text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold leading-tight">Upload Resume</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">PDF, DOCX, or TXT — max 10 MB</p>
                </div>
                {step1Done && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 shrink-0">
                    <Check className="w-3 h-3 mr-1" />Done
                  </Badge>
                )}
              </div>

              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.docx,.txt" onChange={handleFileChange} />
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
                    isDragging ? "border-primary bg-primary/10 scale-[1.01]" : "border-border hover:border-primary/40 hover:bg-muted/50"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Upload className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">Drop file here or click to browse</p>
                    <p className="text-[11px] text-muted-foreground">PDF, DOCX, or TXT</p>
                  </div>
                </div>
              )}
              {errors.resume && <p className="text-xs text-destructive mt-1.5">{errors.resume}</p>}
            </Card>

            {/* Card 2: Job Requirements */}
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
                  <p className="text-xs text-muted-foreground mt-0.5">What role are you targeting?</p>
                </div>
                {step2Done && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 shrink-0">
                    <Check className="w-3 h-3 mr-1" />Done
                  </Badge>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex p-1 bg-muted/60 rounded-xl">
                  <button onClick={() => setInputMode("role")} className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${inputMode === "role" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Select a Role</button>
                  <button onClick={() => setInputMode("jobDescription")} className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${inputMode === "jobDescription" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Paste JD</button>
                </div>
                {inputMode === "role" ? (
                  <RoleSelector value={selectedRole} onChange={setSelectedRole} error={errors.role} placeholder="Search and select your target role..." />
                ) : (
                  <JobDescriptionInput value={jobDescription} onChange={setJobDescription} error={errors.jobDescription} placeholder="Paste the job description here..." />
                )}
              </div>
            </Card>
          </div>

          {/* ──── RIGHT: Sticky pricing sidebar ──── */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6 space-y-4">
              {/* Order summary card */}
              <Card className="p-5 rounded-2xl border-2 border-border bg-card">
                <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary" /> Order Summary
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Resume Analysis</span>
                    <span className="text-sm font-semibold">
                      {isLoadingPricing ? "..." : `₹${pricing.originalPrice.toFixed(2)}`}
                    </span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400">
                      <span className="text-sm flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5" /> {appliedCoupon.code}
                      </span>
                      <span className="text-sm font-semibold">-₹{appliedCoupon.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Total</span>
                      <div className="text-right">
                        {pricing.discount > 0 && (
                          <div className="text-xs text-muted-foreground line-through">₹{pricing.originalPrice.toFixed(2)}</div>
                        )}
                        <div className="text-2xl font-bold text-primary">
                          {isLoadingPricing ? "..." : `₹${pricing.finalPrice.toFixed(2)}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Coupon card */}
              <Card className="p-5 rounded-2xl border-2 border-border bg-card">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                  Have a coupon?
                </Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className={`flex-1 rounded-xl bg-background h-10 ${errors.coupon ? "border-destructive" : ""}`}
                    disabled={isApplyingCoupon || !!appliedCoupon}
                  />
                  {appliedCoupon ? (
                    <Button type="button" variant="outline" size="sm" onClick={removeCoupon} className="rounded-xl h-10 px-3">Remove</Button>
                  ) : (
                    <LoadingButton type="button" variant="outline" size="sm" onClick={applyCoupon} isLoading={isApplyingCoupon} loadingText="..." disabled={!couponCode.trim()} className="rounded-xl h-10 px-3">Apply</LoadingButton>
                  )}
                </div>
                {errors.coupon && <p className="text-xs text-destructive mt-1.5">{errors.coupon}</p>}
                {appliedCoupon && (
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-medium mt-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Saved ₹{appliedCoupon.discount}
                  </div>
                )}
              </Card>

              {/* CTA Button */}
              <Button
                onClick={handleStepSubmit}
                disabled={isSubmitting || !canSubmit}
                className="w-full h-12 text-[15px] font-semibold rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:shadow-none"
              >
                {isSubmitting ? "Processing..." : "Start Analysis"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyze;
