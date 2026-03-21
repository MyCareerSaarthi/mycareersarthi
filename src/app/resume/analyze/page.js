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
} from "lucide-react";

const ResumeAnalyze = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [inputMode, setInputMode] = useState("role");
  const [pdfFile, setPdfFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [pricing, setPricing] = useState({
    originalPrice: 199,
    finalPrice: 199,
    discount: 0,
  });
  const [isLoadingPricing, setIsLoadingPricing] = useState(true);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [processData, setProcessData] = useState({
    title: "Starting Analysis",
    subtitle: "Initializing resume analysis",
    currentStep: 1,
    totalSteps: 5,
    percentage: 0,
  });

  const { user } = useUser();
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const { activeSession, saveSession, clearSession } =
    useAnalysisSession("resume");

  const getPricing = async () => {
    try {
      const response = await api.get("/api/pricing?serviceType=resume");
      if (response.data.success) {
        const pricingData = response.data.pricing;
        setPricing({
          originalPrice: pricingData.originalPrice,
          finalPrice: pricingData.originalPrice,
          discount: 0,
        });
      }
    } catch (error) {
      console.error("Failed to fetch pricing:", error);
    } finally {
      setIsLoadingPricing(false);
    }
  };

  // Check authentication
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      const formState = {
        selectedRole,
        jobDescription,
        inputMode,
      };
      sessionStorage.setItem("resume_analyze_form", JSON.stringify(formState));
      window.location.href = "/login?redirect=/resume/analyze";
    }
  }, [isLoaded, isSignedIn]);

  // Restore form state from sessionStorage after login redirect
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      try {
        const saved = sessionStorage.getItem("resume_analyze_form");
        if (saved) {
          const formState = JSON.parse(saved);
          if (formState.selectedRole) setSelectedRole(formState.selectedRole);
          if (formState.jobDescription)
            setJobDescription(formState.jobDescription);
          if (formState.inputMode) setInputMode(formState.inputMode);
          sessionStorage.removeItem("resume_analyze_form");
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
        totalSteps: 5,
        percentage: 15,
      });

      const baseUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const analysisRequestId = activeSession.analysisRequestId;
      let pollCount = 0;
      const MAX_POLLS = 450;

      const poll = async () => {
        if (pollCount >= MAX_POLLS) {
          clearSession();
          setIsAnalyzing(false);
          setErrors({
            general:
              "Analysis timed out. Please check your dashboard or try again.",
          });
          return;
        }
        pollCount++;
        try {
          const resp = await fetch(
            `${baseUrl}/api/rag/status/${analysisRequestId}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
          const data = await resp.json();

          if (data.status === "completed" && data.result_report_id) {
            if (data.payment_status === "completed") {
              clearSession();
              window.location.href = `/resume/report?id=${data.result_report_id}`;
              return;
            } else {
              clearSession();
              setIsAnalyzing(false);
              setErrors({
                general:
                  "Please complete your payment to view the report.",
              });
              return;
            }
          }
          if (data.status === "failed") {
            clearSession();
            setIsAnalyzing(false);
            setErrors({
              general: data.message || "Analysis failed. Please try again.",
            });
            return;
          }
          setTimeout(poll, 2000);
        } catch (err) {
          console.warn("[Resume session resume] poll error:", err);
          setTimeout(poll, 4000);
        }
      };

      poll();
    };

    resume();
  }, [isLoaded, isSignedIn, activeSession]); // eslint-disable-line react-hooks/exhaustive-deps

  // Get pricing
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      getPricing();
    }
  }, [isLoaded, isSignedIn]);

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

  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      setErrors((prev) => ({ ...prev, coupon: "Please enter a coupon code" }));
      return;
    }

    setIsApplyingCoupon(true);
    try {
      const token = await getToken();
      const response = await api.post(
        "/api/pricing/apply-coupon",
        {
          code: couponCode.trim(),
          userId: user?.id,
          orderAmount: pricing.originalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.success) {
        setAppliedCoupon({
          code: couponCode.trim(),
          discount: response.data.discount,
        });
        setPricing((prev) => ({
          ...prev,
          finalPrice: response.data.finalAmount,
          discount: response.data.discount,
        }));
        setErrors((prev) => ({ ...prev, coupon: null }));
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to apply coupon";
      setErrors((prev) => ({ ...prev, coupon: errorMessage }));
      setAppliedCoupon(null);
      setPricing((prev) => ({
        ...prev,
        finalPrice: prev.originalPrice,
        discount: 0,
      }));
    } finally {
      setIsApplyingCoupon(false);
    }
  };

  const removeCoupon = () => {
    setCouponCode("");
    setAppliedCoupon(null);
    setPricing((prev) => ({
      ...prev,
      finalPrice: prev.originalPrice,
      discount: 0,
    }));
    setErrors((prev) => ({ ...prev, coupon: null }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!pdfFile) {
      newErrors.resume = "Please upload a resume PDF file";
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
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("userId", user?.id);
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
      if (appliedCoupon) {
        formData.append("couponCode", appliedCoupon.code);
        formData.append("discountAmount", appliedCoupon.discount);
      }

      setIsAnalyzing(true);
      setProcessData({
        title: "Starting Analysis",
        subtitle: "Initializing resume analysis",
        currentStep: 1,
        totalSteps: 5,
        percentage: 0,
      });

      await handlePayment(
        "resume",
        token,
        user,
        formData,
        setIsSubmitting,
        (errorMsg) => {
          clearSession();
          setIsAnalyzing(false);
          setErrors({ general: errorMsg });
        },
        getToken,
        (analysisRequestId) => saveSession(analysisRequestId),
      );
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsAnalyzing(false);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Payment initiation failed. Please try again.";
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
        file.type === "application/pdf" ||
        fileName.endsWith(".pdf") ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        fileName.endsWith(".docx") ||
        file.type === "text/plain" ||
        fileName.endsWith(".txt");

      if (isValidFile) {
        setPdfFile(file);
        setErrors((prev) => ({ ...prev, resume: null }));
      } else {
        setErrors((prev) => ({
          ...prev,
          resume: "Please upload a valid PDF, DOCX, or TXT file",
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
      pdfFile &&
      ((inputMode === "role" && selectedRole) ||
        (inputMode === "jobDescription" && jobDescription.trim()))
    );
  };

  const handleCancelAnalysis = () => {
    clearSession();
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {isAnalyzing && (
        <SimpleLoader
          message="Analyzing your resume... This may take a while."
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
              Resume Analysis
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Get AI-powered insights to optimize your resume
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
          {/* ─── Section 1: Resume Upload ─── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Resume Upload{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    (required)
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Upload your resume (PDF, DOCX, or TXT)
                </p>
              </div>
            </div>

            {/* Compact File Upload */}
            <div className="space-y-1.5">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".pdf,.docx,.txt"
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
                  <span>Click to upload (PDF, DOCX, or TXT — max 10MB)</span>
                </button>
              )}
              {errors.resume && (
                <p className="text-sm text-destructive">{errors.resume}</p>
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

          {/* Separator */}
          <div className="border-t border-border" />

          {/* ─── Section 3: Payment & Coupon ─── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Payment</h3>
                <p className="text-xs text-muted-foreground">
                  Review pricing and apply coupon code
                </p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-muted/30 rounded-xl p-4 space-y-3 border border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Resume Analysis</span>
                <span className="font-semibold text-foreground">
                  {isLoadingPricing
                    ? "Loading..."
                    : `₹${pricing.originalPrice.toFixed(2)}`}
                </span>
              </div>

              {appliedCoupon && (
                <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Coupon ({appliedCoupon.code})
                  </span>
                  <span className="text-sm font-semibold">
                    -₹{appliedCoupon.discount.toFixed(2)}
                  </span>
                </div>
              )}

              <div className="border-t border-border pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold">Total</span>
                  <div className="text-right">
                    {pricing.discount > 0 && (
                      <div className="text-xs text-muted-foreground line-through mb-0.5">
                        ₹{pricing.originalPrice.toFixed(2)}
                      </div>
                    )}
                    <div className="text-xl font-bold bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      {isLoadingPricing
                        ? "Loading..."
                        : `₹${pricing.finalPrice.toFixed(2)}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Coupon Code (Optional)
              </Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className={`flex-1 rounded-lg bg-background border-border hover:border-primary/50 transition-colors ${
                    errors.coupon ? "border-destructive" : ""
                  }`}
                  disabled={isApplyingCoupon || !!appliedCoupon}
                />
                {appliedCoupon ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={removeCoupon}
                    disabled={isApplyingCoupon}
                    className="rounded-lg"
                  >
                    Remove
                  </Button>
                ) : (
                  <LoadingButton
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={applyCoupon}
                    isLoading={isApplyingCoupon}
                    loadingText="Applying..."
                    disabled={!couponCode.trim()}
                    className="rounded-lg"
                  >
                    Apply
                  </LoadingButton>
                )}
              </div>
              {errors.coupon && (
                <p className="text-sm text-destructive">{errors.coupon}</p>
              )}
              {appliedCoupon && (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    Coupon applied! You saved ₹{appliedCoupon.discount}
                  </span>
                </div>
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
              {isSubmitting ? "Processing..." : "Start Analysis"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResumeAnalyze;
