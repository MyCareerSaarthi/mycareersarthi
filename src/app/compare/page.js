"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { api } from "@/components/api/api";
import { handlePayment } from "@/components/payment/payment";
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
} from "lucide-react";

export default function ComparePage() {
  const [activeTab, setActiveTab] = useState("sources");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [linkedinPdf, setLinkedinPdf] = useState(null);
  const [resumePdf, setResumePdf] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingResume, setIsDraggingResume] = useState(false);
  const fileInputRefLinkedin = useRef(null);
  const fileInputRefResume = useRef(null);

  // Role/JD options removed - comparison is LinkedIn vs Resume only

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

  // Tab definitions
  const tabs = [
    { id: "sources", label: "Sources", icon: GitCompare },
    { id: "payment", label: "Payment", icon: CreditCard },
  ];

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
      // Default pricing if API fails
      setPricing({
        originalPrice: 199,
        finalPrice: 199,
        discount: 0,
      });
    } finally {
      setIsLoadingPricing(false);
    }
  };

  // Check authentication - must be before early return
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/login?redirect=/compare";
    }
  }, [isLoaded, isSignedIn]);

  // Get pricing - must be before early return
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      getPricing();
    }
  }, [isLoaded, isSignedIn]);

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
        }
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

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!linkedinUrl && !linkedinPdf) {
        newErrors.linkedin = "Please provide either a LinkedIn URL or PDF";
      }

      if (
        linkedinUrl &&
        !linkedinUrl.match(
          /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_.]+\/?$/
        )
      ) {
        newErrors.linkedinUrl = "Please enter a valid LinkedIn profile URL";
      }

      if (!resumePdf) {
        newErrors.resume = "Resume PDF is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTabChange = (tabId) => {
    // Validate before allowing tab change
    if (tabId === "payment") {
      if (!linkedinUrl && !linkedinPdf) {
        setErrors({ linkedin: "Please add your LinkedIn profile first" });
        setActiveTab("sources");
        return;
      }
      if (!resumePdf) {
        setErrors({ resume: "Please upload your resume first" });
        setActiveTab("sources");
        return;
      }
    }
    setErrors({});
    setActiveTab(tabId);
  };

  const handleStepSubmit = async () => {
    if (!validateStep(1)) return;

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

      // No role/JD data - comparison is LinkedIn vs Resume only

      if (appliedCoupon) {
        formData.append("couponCode", appliedCoupon.code);
        formData.append("discountAmount", appliedCoupon.discount.toString());
      }

      // Start the comparison process
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
        (errorMsg) => {
          setIsComparing(false);
          setErrors({ general: errorMsg });
          setActiveTab("payment");
        },
        getToken
      );
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsComparing(false);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Payment initiation failed. Please try again.";
      setErrors({ general: errorMessage });
      // Stay on payment tab so user can see the error
      setActiveTab("payment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLinkedinDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleLinkedinDragLeave = () => {
    setIsDragging(false);
  };

  const handleLinkedinDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      setLinkedinPdf(files[0]);
      setErrors((prev) => ({ ...prev, linkedin: null }));
    } else {
      setErrors((prev) => ({
        ...prev,
        linkedin: "Please upload a valid PDF file",
      }));
    }
  };

  const handleResumeDragOver = (e) => {
    e.preventDefault();
    setIsDraggingResume(true);
  };

  const handleResumeDragLeave = () => {
    setIsDraggingResume(false);
  };

  const handleResumeDrop = (e) => {
    e.preventDefault();
    setIsDraggingResume(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === "application/pdf") {
      setResumePdf(files[0]);
      setErrors((prev) => ({ ...prev, resume: null }));
    } else {
      setErrors((prev) => ({
        ...prev,
        resume: "Please upload a valid PDF file",
      }));
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

  // Socket useEffect moved above - removed duplicate

  // Show simple loading screen during comparison - render as overlay

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "sources":
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <GitCompare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Upload Sources</h3>
                <p className="text-sm text-muted-foreground">
                  Add your LinkedIn profile and resume for comparison
                </p>
              </div>
            </div>

            {/* LinkedIn Section */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-primary" />
                LinkedIn Profile
              </h4>

              {/* LinkedIn URL Input */}
              <div className="space-y-2 mb-3">
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
                  <p className="text-sm text-destructive">
                    {errors.linkedinUrl}
                  </p>
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

              {/* LinkedIn PDF Upload */}
              <div className="space-y-2">
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
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  LinkedIn PDF (optional)
                </Label>
                <div
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur-sm ${
                    isDragging
                      ? "border-primary bg-primary/10"
                      : errors.linkedin
                      ? "border-destructive bg-destructive/5"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  onDragOver={handleLinkedinDragOver}
                  onDragLeave={handleLinkedinDragLeave}
                  onDrop={handleLinkedinDrop}
                  onClick={() => fileInputRefLinkedin.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRefLinkedin}
                    className="hidden"
                    accept=".pdf"
                    onChange={handleLinkedinFileChange}
                  />
                  {linkedinPdf ? (
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
                          {linkedinPdf.name}
                        </span>
                      </div>
                      <LoadingButton
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeLinkedinPdf();
                        }}
                      >
                        Remove
                      </LoadingButton>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF files only (max 10MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {errors.linkedin && (
                  <p className="text-sm text-destructive mt-2">
                    {errors.linkedin}
                  </p>
                )}
              </div>
            </Card>

            {/* Resume Section */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-xl">
              <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Resume PDF (required)
              </h4>

              <div className="space-y-2">
                <div
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur-sm ${
                    isDraggingResume
                      ? "border-primary bg-primary/10"
                      : errors.resume
                      ? "border-destructive bg-destructive/5"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  onDragOver={handleResumeDragOver}
                  onDragLeave={handleResumeDragLeave}
                  onDrop={handleResumeDrop}
                  onClick={() => fileInputRefResume.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRefResume}
                    className="hidden"
                    accept=".pdf"
                    onChange={handleResumeFileChange}
                  />
                  {resumePdf ? (
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
                          {resumePdf.name}
                        </span>
                      </div>
                      <LoadingButton
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeResumePdf();
                        }}
                      >
                        Remove
                      </LoadingButton>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF files only (max 10MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {errors.resume && (
                  <p className="text-sm text-destructive mt-2">
                    {errors.resume}
                  </p>
                )}
              </div>
            </Card>
          </div>
        );

      case "payment":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Payment & Review</h3>
                <p className="text-xs text-muted-foreground">
                  Review your order and complete payment
                </p>
              </div>
            </div>

            <Card className="p-4 bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-xl">
              <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Order Summary
              </h4>

              {/* Pricing */}
              <div className="bg-muted/30 rounded-xl p-4 space-y-3 border border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    LinkedIn ↔ Resume Comparison
                  </span>
                  <span className="font-semibold text-foreground">
                    {isLoadingPricing
                      ? "Loading..."
                      : `₹${pricing.originalPrice}`}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Coupon ({appliedCoupon.code})
                    </span>
                    <span className="text-sm font-semibold">
                      -₹{appliedCoupon.discount}
                    </span>
                  </div>
                )}

                <div className="border-t-2 border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold">Total</span>
                    <div className="text-right">
                      {pricing.discount > 0 && (
                        <div className="text-xs text-muted-foreground line-through mb-1">
                          ₹{pricing.originalPrice}
                        </div>
                      )}
                      <div className="text-2xl font-bold bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        {isLoadingPricing
                          ? "Loading..."
                          : `₹${pricing.finalPrice}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Coupon Code */}
            <div className="space-y-2 mt-4">
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
        );

      default:
        return null;
    }
  };

  const canProceedToPayment = () => {
    return (linkedinUrl || linkedinPdf) && resumePdf;
  };

  return (
    <div className="min-h-screen bg-background relative">
      {isComparing && (
        <SimpleLoader message="Comparing your LinkedIn profile and resume... This may take a while." />
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
              AI-Powered Comparison
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              LinkedIn ↔ Resume Comparison
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Compare your LinkedIn profile with your resume to identify gaps
              and inconsistencies
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
              onClick={() => setActiveTab("sources")}
              disabled={activeTab === "sources"}
              className="rounded-xl"
            >
              Previous
            </Button>
            {activeTab === "payment" ? (
              <Button
                onClick={handleStepSubmit}
                disabled={isSubmitting || !canProceedToPayment()}
                className="bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl"
              >
                {isSubmitting ? "Processing..." : "Start Comparison"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={() => {
                  if (canProceedToPayment()) {
                    setActiveTab("payment");
                  } else {
                    if (!linkedinUrl && !linkedinPdf) {
                      setErrors({
                        linkedin: "Please add your LinkedIn profile",
                      });
                    }
                    if (!resumePdf) {
                      setErrors({ resume: "Please upload your resume" });
                    }
                  }
                }}
                className="bg-linear-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 rounded-xl"
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
}
