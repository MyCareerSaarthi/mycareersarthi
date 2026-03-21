"use client";

import { useState, useRef, useEffect } from "react";
import { useAnalysisSession } from "@/hooks/useAnalysisSession";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { api } from "@/components/api/api";
import { handlePayment, resumePayment } from "@/components/payment/payment";
import { useAuth, useUser } from "@clerk/nextjs";
import SimpleLoader from "@/components/simple-loader";
import { useRouter } from "next/navigation";
import {
  Linkedin,
  FileText,
  CreditCard,
  ArrowRight,
  Upload,
  CheckCircle2,
  Sparkles,
  GitCompare,
  X,
} from "lucide-react";

export default function ComparePage() {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [linkedinPdf, setLinkedinPdf] = useState(null);
  const [resumePdf, setResumePdf] = useState(null);
  const [errors, setErrors] = useState({});
  const [pendingPaymentDetails, setPendingPaymentDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRefLinkedin = useRef(null);
  const fileInputRefResume = useRef(null);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [pricing, setPricing] = useState({
    originalPrice: 199,
    finalPrice: 199,
    discount: 0,
  });
  const [isLoadingPricing, setIsLoadingPricing] = useState(true);

  const [isComparing, setIsComparing] = useState(false);
  const [processData, setProcessData] = useState({
    title: "Starting Comparison",
    subtitle: "Initializing LinkedIn and Resume comparison",
    currentStep: 1,
    totalSteps: 12,
    percentage: 0,
  });

  const { user } = useUser();
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const { activeSession, saveSession, clearSession } =
    useAnalysisSession("comparison");

  const getPricing = async () => {
    try {
      const response = await api.get("/api/pricing?serviceType=comparison");
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
      setPricing({
        originalPrice: 199,
        finalPrice: 199,
        discount: 0,
      });
    } finally {
      setIsLoadingPricing(false);
    }
  };

  // Check authentication
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/login?redirect=/compare";
    }
  }, [isLoaded, isSignedIn]);

  // Resume an active session on page load / refresh
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !activeSession) return;

    const resume = async () => {
      setIsComparing(true);
      setProcessData({
        title: "Resuming...",
        subtitle: "Reconnecting to your in-progress comparison...",
        currentStep: 2,
        totalSteps: 12,
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
          setIsComparing(false);
          setErrors({
            general:
              "Comparison timed out. Please check your dashboard or try again.",
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
              window.location.href = `/compare/report?id=${data.result_report_id}`;
              return;
            } else {
              clearSession();
              setIsComparing(false);
              setPendingPaymentDetails({
                amount: data.payment_amount,
                orderId: data.order_id,
                analysisRequestId: analysisRequestId,
              });
              return;
            }
          }
          if (data.status === "failed") {
            clearSession();
            setIsComparing(false);
            setErrors({
              general: data.message || "Comparison failed. Please try again.",
            });
            return;
          }
          setTimeout(poll, 2000);
        } catch (err) {
          console.warn("[Compare session resume] poll error:", err);
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

    if (!linkedinUrl && !linkedinPdf) {
      newErrors.linkedin = "Please provide either a LinkedIn URL or PDF";
    }

    if (
      linkedinUrl &&
      !linkedinUrl.match(
        /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_.]+\/?$/,
      )
    ) {
      newErrors.linkedinUrl = "Please enter a valid LinkedIn profile URL";
    }

    if (!resumePdf) {
      newErrors.resume = "Resume PDF is required";
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
      if (linkedinUrl) {
        formData.append("linkedinUrl", linkedinUrl);
      }
      if (linkedinPdf) {
        formData.append("linkedinPdf", linkedinPdf);
      }
      if (resumePdf) {
        formData.append("resumePdf", resumePdf);
      }

      if (appliedCoupon) {
        formData.append("couponCode", appliedCoupon.code);
        formData.append("discountAmount", appliedCoupon.discount.toString());
      }

      setIsComparing(true);
      setProcessData({
        title: "Starting Comparison",
        subtitle: "Initializing LinkedIn and Resume comparison",
        currentStep: 1,
        totalSteps: 12,
        percentage: 0,
      });

      await handlePayment(
        "comparison",
        token,
        user,
        formData,
        setIsSubmitting,
        (errorMsg, details) => {
          clearSession();
          setIsComparing(false);
          if (details && details.analysisRequestId) {
            setPendingPaymentDetails(details);
            setErrors({});
          } else {
            setErrors({ general: errorMsg });
          }
        },
        getToken,
        (analysisRequestId) => saveSession(analysisRequestId),
      );
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsComparing(false);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Payment initiation failed. Please try again.";
      setErrors({ general: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumePayment = async () => {
    setIsSubmitting(true);
    setErrors({});
    try {
      const token = await getToken();
      await resumePayment(
        pendingPaymentDetails.orderId,
        pendingPaymentDetails.amount,
        pendingPaymentDetails.analysisRequestId,
        "comparison",
        token,
        user,
        setIsSubmitting,
        (errorMsg, details) => {
          if (details && details.analysisRequestId) {
            setPendingPaymentDetails(details);
            setErrors({});
          } else {
            setErrors({ general: errorMsg });
          }
        },
        getToken,
      );
    } catch (error) {
      console.error("Payment resumption failed:", error);
      setErrors({ general: "Failed to resume payment. Please try again." });
      setIsSubmitting(false);
    }
  };

  const handleLinkedinFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setLinkedinPdf(file);
      setErrors((prev) => ({ ...prev, linkedin: null }));
    } else if (file) {
      setErrors((prev) => ({
        ...prev,
        linkedin: "Please upload a valid PDF file",
      }));
    }
  };

  const handleResumeFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setResumePdf(file);
      setErrors((prev) => ({ ...prev, resume: null }));
    } else if (file) {
      setErrors((prev) => ({
        ...prev,
        resume: "Please upload a valid PDF file",
      }));
    }
  };

  const removeLinkedinPdf = () => {
    setLinkedinPdf(null);
    if (fileInputRefLinkedin.current) {
      fileInputRefLinkedin.current.value = "";
    }
  };

  const removeResumePdf = () => {
    setResumePdf(null);
    if (fileInputRefResume.current) {
      fileInputRefResume.current.value = "";
    }
  };

  const canSubmit = () => {
    return (linkedinUrl || linkedinPdf) && resumePdf;
  };

  const handleCancelAnalysis = () => {
    clearSession();
    setIsComparing(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {isComparing && (
        <SimpleLoader
          message="Comparing your LinkedIn profile and resume... This may take a while."
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
              AI-Powered Comparison
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              LinkedIn ↔ Resume Comparison
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Compare your LinkedIn profile with your resume to identify gaps
              and inconsistencies
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

            {/* Compact LinkedIn PDF Upload */}
            <div className="space-y-1.5">
              <Label className="text-sm font-medium flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                LinkedIn PDF (optional)
              </Label>
              <input
                type="file"
                ref={fileInputRefLinkedin}
                className="hidden"
                accept=".pdf"
                onChange={handleLinkedinFileChange}
              />
              {linkedinPdf ? (
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/5">
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium truncate flex-1">
                    {linkedinPdf.name}
                  </span>
                  <button
                    onClick={removeLinkedinPdf}
                    className="p-1 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileInputRefLinkedin.current?.click()}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm text-muted-foreground"
                >
                  <Upload className="w-4 h-4" />
                  <span>Click to upload PDF (max 10MB)</span>
                </button>
              )}
              {errors.linkedin && (
                <p className="text-sm text-destructive">{errors.linkedin}</p>
              )}
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-border" />

          {/* ─── Section 2: Resume ─── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Resume PDF{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    (required)
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Upload your resume to compare against your LinkedIn profile
                </p>
              </div>
            </div>

            {/* Compact Resume PDF Upload */}
            <div className="space-y-1.5">
              <input
                type="file"
                ref={fileInputRefResume}
                className="hidden"
                accept=".pdf"
                onChange={handleResumeFileChange}
              />
              {resumePdf ? (
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/5">
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium truncate flex-1">
                    {resumePdf.name}
                  </span>
                  <button
                    onClick={removeResumePdf}
                    className="p-1 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileInputRefResume.current?.click()}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm text-muted-foreground"
                >
                  <Upload className="w-4 h-4" />
                  <span>Click to upload Resume PDF (max 10MB)</span>
                </button>
              )}
              {errors.resume && (
                <p className="text-sm text-destructive">{errors.resume}</p>
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
                <span className="text-sm font-medium">
                  LinkedIn ↔ Resume Comparison
                </span>
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
            {pendingPaymentDetails ? (
              <Button
                onClick={handleResumePayment}
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl py-5 text-base font-semibold"
              >
                {isSubmitting ? "Processing..." : "Complete Payment"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleStepSubmit}
                disabled={isSubmitting || !canSubmit()}
                className="w-full bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl py-5 text-base font-semibold"
              >
                {isSubmitting ? "Processing..." : "Start Comparison"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
