"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Label } from "@/components/ui/label";
import RoleSelector from "@/components/ui/role-selector";
import JobDescriptionInput from "@/components/ui/job-description-input";
import StepNavigation from "@/components/ui/step-navigation";
import StepContainer from "@/components/ui/step-container";
import { api } from "@/components/api/api";
import { handlePayment } from "@/components/payment/payment";
import { useAuth, useUser } from "@clerk/nextjs";
import SimpleLoader from "@/components/simple-loader";
import { useRouter } from "next/navigation";

const LinkedinAnalyze = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    subtitle: "Initializing LinkedIn profile analysis",
    currentStep: 1,
    totalSteps: 12,
    percentage: 0,
  });

  const { user } = useUser();
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  // Step definitions
  const steps = [
    {
      title: "Profile",
      description: "Add LinkedIn URL or upload LinkedIn profile PDF",
    },
    {
      title: "Job Requirements",
      description: "Select role or add description",
    },
    { title: "Payment", description: "Review and pay" },
  ];

  const totalSteps = steps.length;

  // Navigation functions
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  // Remove getRoles function as it's now handled by RoleSelector component

  const getPricing = async () => {
    try {
      const response = await api.get("/api/pricing?serviceType=linkedin");
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

  // Check authentication - must be before early return
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/login?redirect=/linkedin/analyze";
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
      // Profile step validation
      if (!linkedinUrl && !pdfFile) {
        newErrors.profile =
          "Please provide either a LinkedIn URL or upload a LinkedIn profile PDF file";
      }

      if (
        linkedinUrl &&
        !linkedinUrl.match(
          /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_.]+\/?$/
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

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      nextStep();
    }
  };

  const handlePreviousStep = () => {
    previousStep();
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
      if (pdfFile) {
        formData.append("file", pdfFile);
      }
      if (inputMode === "role" && selectedRole) {
        // Job descriptions are independent - only handle role selection
        if (selectedRole.type === "existing") {
          // User selected an existing role - analysis will be against role + experience level
          formData.append("roleId", selectedRole.roleId);
          formData.append("roleName", selectedRole.roleName);
          if (selectedRole.experienceLevel) {
            formData.append("experienceLevel", selectedRole.experienceLevel);
          }
        } else if (selectedRole.type === "custom") {
          formData.append("roleName", selectedRole.roleName);
          // Default experience level if not provided
          formData.append("experienceLevel", "Mid-level");
        }
      }
      // Handle job description - manual input only
      if (inputMode === "jobDescription" && jobDescription) {
        formData.append("jobDescription", jobDescription);
      }
      if (appliedCoupon) {
        formData.append("couponCode", appliedCoupon.code);
        formData.append("discountAmount", appliedCoupon.discount);
      }

      // Start the analysis process
      setIsAnalyzing(true);
      setProcessData({
        title: "Starting Analysis",
        subtitle: "Initializing LinkedIn profile analysis",
        currentStep: 1,
        totalSteps: 12,
        percentage: 0,
      });

      await handlePayment(
        "linkedin",
        token,
        user,
        formData,
        setIsSubmitting,
        (errorMsg) => {
          setIsAnalyzing(false);
          setErrors({ general: errorMsg });
          setCurrentStep(3);
        }
      );
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsAnalyzing(false);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Payment initiation failed. Please try again.";
      setErrors({ general: errorMessage });
      // Stay on payment step so user can see the error
      setCurrentStep(3);
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

  // Show process demo screen during analysis
  if (isAnalyzing) {
    return (
      <SimpleLoader message="Analyzing your LinkedIn profile... This may take a while." />
    );
  }

  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            {/* LinkedIn URL Input */}
            <div className="space-y-2">
              <Label
                htmlFor="linkedinUrl"
                className="text-sm font-medium flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile URL
              </Label>
              <Input
                id="linkedinUrl"
                placeholder="https://www.linkedin.com/in/your-profile"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className={`bg-background border-border hover:border-primary/50 transition-colors ${
                  errors.linkedinUrl ? "border-destructive" : ""
                }`}
              />
              {errors.linkedinUrl && (
                <p className="text-sm text-destructive">{errors.linkedinUrl}</p>
              )}
            </div>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">
                  OR
                </span>
              </div>
            </div>

            {/* PDF Upload */}
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
                Upload LinkedIn Profile PDF
              </Label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? "border-primary bg-primary/5"
                    : errors.profile
                    ? "border-destructive bg-destructive/5"
                    : "border-border hover:border-primary/50"
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
                    <svg
                      className="w-8 h-8 mx-auto text-muted-foreground"
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
                    <div>
                      <p className="text-sm font-medium">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
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

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Job Requirements</h3>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setInputMode("role")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    inputMode === "role"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  Select A Role
                </button>
                <button
                  type="button"
                  onClick={() => setInputMode("jobDescription")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    inputMode === "jobDescription"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  Paste Job Description
                </button>
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

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-lg p-6 space-y-6 border border-blue-200/50 dark:border-blue-800/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>

              {/* Pricing */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">LinkedIn Analysis</span>
                  <span className="font-semibold">
                    {isLoadingPricing
                      ? "Loading..."
                      : `₹${pricing.originalPrice}`}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between items-center text-green-600">
                    <span className="text-sm">
                      Coupon ({appliedCoupon.code})
                    </span>
                    <span className="text-sm font-medium">
                      -₹{appliedCoupon.discount}
                    </span>
                  </div>
                )}

                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <div className="text-right">
                      {pricing.discount > 0 && (
                        <div className="text-xs text-muted-foreground line-through">
                          ₹{pricing.originalPrice}
                        </div>
                      )}
                      <div className="text-lg font-bold text-primary">
                        {isLoadingPricing
                          ? "Loading..."
                          : `₹${pricing.finalPrice}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="space-y-2">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  Coupon Code (Optional)
                </Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className={`flex-1 bg-background border-border hover:border-primary/50 transition-colors ${
                      errors.coupon ? "border-destructive" : ""
                    }`}
                    disabled={isApplyingCoupon || !!appliedCoupon}
                  />
                  {appliedCoupon ? (
                    <LoadingButton
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={removeCoupon}
                      disabled={isApplyingCoupon}
                    >
                      Remove
                    </LoadingButton>
                  ) : (
                    <LoadingButton
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={applyCoupon}
                      isLoading={isApplyingCoupon}
                      loadingText="Applying..."
                      disabled={!couponCode.trim()}
                    >
                      Apply
                    </LoadingButton>
                  )}
                </div>
                {errors.coupon && (
                  <p className="text-sm text-destructive">{errors.coupon}</p>
                )}
                {appliedCoupon && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Coupon applied! You saved ₹{appliedCoupon.discount}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            LinkedIn Profile Analysis
          </h1>
          <p className="text-muted-foreground text-sm">
            Get AI-powered insights to optimize your LinkedIn profile
          </p>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="container mx-auto px-4 mb-4">
        <StepNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={steps}
        />
      </div>

      {/* Step Content */}
      <div className="container mx-auto px-4 pb-12">
        {errors.general && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-destructive">{errors.general}</p>
          </div>
        )}

        <StepContainer
          title={steps[currentStep - 1]?.title}
          description={steps[currentStep - 1]?.description}
          onNext={
            currentStep === totalSteps ? handleStepSubmit : handleNextStep
          }
          onPrevious={handlePreviousStep}
          nextText={currentStep === totalSteps ? "Start Analysis" : "Next"}
          previousText="Previous"
          isNextDisabled={
            currentStep === 1
              ? !linkedinUrl && !pdfFile
              : currentStep === 2
              ? (inputMode === "role" && !selectedRole) ||
                (inputMode === "jobDescription" && !jobDescription.trim())
              : false
          }
          isPreviousDisabled={currentStep === 1}
          showNext={true}
          showPrevious={currentStep > 1}
        >
          {renderStepContent()}
        </StepContainer>
      </div>
    </div>
  );
};

export default LinkedinAnalyze;
