"use client";

import React, { useState, useEffect, useRef } from "react";
import Overview from "@/components/report/overview";
import ProfileInfo from "@/components/report/profile-info";
import Headline from "@/components/report/headline";
import ProfilePicture from "@/components/report/profile-picture";
import Banner from "@/components/report/banner";
import About from "@/components/report/about";
import Experience from "@/components/report/experience";
import Skill from "@/components/report/skill";
import Education from "@/components/report/education";
import Certification from "@/components/report/certification";
import { useSearchParams, useRouter } from "next/navigation";
import { api } from "@/components/api/api";
import { useAuth } from "@clerk/nextjs";
import { io } from "socket.io-client";
import { LoadingButton } from "@/components/ui/loading-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { handlePayment } from "@/components/payment/payment";
import { useUser } from "@clerk/nextjs";
import ProcessLoader from "@/components/process-loader";

const LinkedinReport = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [linkedinReport, setLinkedinReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareError, setCompareError] = useState("");
  const [compareResult, setCompareResult] = useState(null);
  const resumeFileRef = useRef(null);
  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [resumePdfFile, setResumePdfFile] = useState(null);
  const [isComparing, setIsComparing] = useState(false);
  const [processData, setProcessData] = useState({
    title: "Starting Comparison",
    subtitle: "Initializing LinkedIn and Resume comparison",
    currentStep: 1,
    totalSteps: 12,
    percentage: 0,
  });
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [couponError, setCouponError] = useState(null);
  const [pricing, setPricing] = useState({
    originalPrice: 199,
    finalPrice: 199,
    discount: 0,
  });
  const [isLoadingPricing, setIsLoadingPricing] = useState(true);

  // Resume PDF is always required for comparison

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      component: <Overview data={linkedinReport} onNavigate={setActiveTab} />,
    },
    {
      id: "profile-info",
      label: "Profile Info",
      component: <ProfileInfo data={linkedinReport} />,
    },
    {
      id: "headline",
      label: "Headline",
      component: <Headline data={linkedinReport} />,
    },
    {
      id: "profile-picture",
      label: "Profile Picture",
      component: <ProfilePicture data={linkedinReport} />,
    },
    {
      id: "banner",
      label: "Banner",
      component: <Banner data={linkedinReport} />,
    },
    {
      id: "about",
      label: "About",
      component: <About data={linkedinReport} />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <Experience data={linkedinReport} />,
    },
    {
      id: "skill",
      label: "Skills",
      component: <Skill data={linkedinReport} />,
    },
    {
      id: "education",
      label: "Education",
      component: <Education data={linkedinReport} />,
    },
    {
      id: "certification",
      label: "Certifications",
      component: <Certification data={linkedinReport} />,
    },
  ];

  const getLinkedinReport = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      const response = await api.get(`/api/linkedin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLinkedinReport(response.data);
    } catch (error) {
      console.error("Error fetching LinkedIn report:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getLinkedinReport();
    }
  }, [id]);

  // Fetch pricing for comparison
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
    } finally {
      setIsLoadingPricing(false);
    }
  };

  useEffect(() => {
    getPricing();
  }, []);

  // Apply coupon code
  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    setIsApplyingCoupon(true);
    setCouponError(null);
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
        setCouponError(null);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to apply coupon";
      setCouponError(errorMessage);
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

  // Remove coupon
  const removeCoupon = () => {
    setCouponCode("");
    setAppliedCoupon(null);
    setPricing((prev) => ({
      ...prev,
      finalPrice: prev.originalPrice,
      discount: 0,
    }));
    setCouponError(null);
  };

  // Socket.io for comparison progress updates
  useEffect(() => {
    if (user?.id && isComparing) {
      const socket = io(process.env.NEXT_PUBLIC_API_URL);

      // Register with main server
      socket.emit("register", user.id);

      // Handle updates from server
      socket.on("updateProcess", (data) => {
        setProcessData({
          title: data.title || "Processing",
          subtitle: data.subtitle || "Comparing your LinkedIn and Resume",
          currentStep: data.currentStep || 1,
          totalSteps: data.totalSteps || 12,
          percentage: data.percentage || 0,
        });
      });

      socket.on("comparisonComplete", (data) => {
        setIsComparing(false);
        // Payment handler will redirect, but we can also handle here if needed
      });

      socket.on("comparisonError", (error) => {
        console.error("Comparison error:", error);
        setIsComparing(false);
        const errorMessage =
          error?.message || "Comparison failed. Please try again.";
        setCompareError(errorMessage);
      });

      return () => {
        socket.off("updateProcess");
        socket.off("comparisonComplete");
        socket.off("comparisonError");
        socket.disconnect();
      };
    }
  }, [user, isComparing]);

  const onCompare = async () => {
    try {
      setCompareLoading(true);
      setCompareError("");
      setCompareResult(null);

      // Validate inputs - Resume PDF is always required
      const resumeFile = resumePdfFile || resumeFileRef.current?.files?.[0];
      if (!resumeFile) {
        setCompareError("Please upload a resume PDF file");
        return;
      }

      const token = await getToken();
      const formData = new FormData();
      formData.append("userId", user?.id);

      // Use existing mode - server will fetch LinkedIn profile from existing_linkedin_analysis_id
      formData.append("mode", "existing");
      formData.append("existing_linkedin_analysis_id", id);

      // Resume PDF is always required
      formData.append("resumePdf", resumeFile);

      // Role/JD will be automatically extracted from linkedinReport by the server
      // The server will use linkedinReport.role_id and linkedinReport.role_name if available

      // Add coupon code if applied
      if (appliedCoupon) {
        formData.append("couponCode", appliedCoupon.code);
        formData.append("discountAmount", appliedCoupon.discount.toString());
      }

      // Start the comparison process with payment
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
        setCompareLoading
      );
    } catch (error) {
      console.error("Comparison failed:", error);
      setIsComparing(false);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Comparison failed. Please try again.";
      setCompareError(errorMessage);
    } finally {
      setCompareLoading(false);
    }
  };

  const handleDownloadPdf = async () => {
    try {
      setDownloadingPdf(true);
      const token = await getToken();
      const response = await api.get(`/api/pdf/linkedin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/pdf",
        },
        responseType: "blob",
      });

      // Check if blob is valid
      if (!response.data || response.data.size === 0) {
        throw new Error("Received empty PDF file");
      }

      // Create a download link
      const url = window.URL.createObjectURL(response.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = `linkedin-report-${id}.pdf`;
      document.body.appendChild(a);
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      let errorMessage = "Failed to generate PDF";

      if (error.response?.data) {
        // If response data is a blob, try to parse it as JSON (error response)
        if (error.response.data instanceof Blob) {
          try {
            const text = await error.response.data.text();
            const errorData = JSON.parse(text);
            errorMessage = errorData.error || errorData.message || errorMessage;
          } catch (e) {
            errorMessage = error.message || errorMessage;
          }
        } else {
          errorMessage =
            error.response.data.error ||
            error.response.data.message ||
            errorMessage;
        }
      } else {
        errorMessage = error.message || errorMessage;
      }

      alert(`Failed to download PDF: ${errorMessage}. Please try again.`);
    } finally {
      setDownloadingPdf(false);
    }
  };

  // Show process loader during comparison
  if (isComparing) {
    return (
      <div className="min-h-screen bg-background">
        <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-3xl">
            <ProcessLoader
              stepTitle={processData.title}
              stepSubtitle={processData.subtitle}
              currentStep={processData.currentStep}
              totalSteps={processData.totalSteps}
              percent={processData.percentage}
            />
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading report...</p>
        </div>
      </div>
    );
  }

  if (!linkedinReport) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">No report data available</p>
        </div>
      </div>
    );
  }

  // Get role information
  const roleInfo = linkedinReport?.role_name || linkedinReport?.role_id;

  return (
    <div className="min-h-screen bg-background flex max-w-7xl mx-auto">
      {/* Desktop Sidebar - Fixed on the left */}
      {!isMobile && (
        <div className="hidden md:block w-64 backdrop-blur-lg border-r border-primary/10 h-screen sticky top-0 bg-background rounded-r-2xl">
          <div className="p-4">
            <nav>
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => {
                        setActiveTab(tab.id);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-sm hover:shadow-md"
                          : "text-foreground hover:bg-accent/50 hover:border-primary/30 border border-transparent"
                      }`}
                    >
                      <span className="capitalize">{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile menu button */}
      {isMobile && (
        // Removed motion.button wrapper
        <button
          // Removed motion props
          onClick={() =>
            document.getElementById("mobile-sidebar").classList.toggle("hidden")
          }
          className="fixed top-4 left-4 z-20 p-2 rounded-lg bg-accent border border-border shadow-lg md:hidden hover:bg-primary/10 transition-all duration-300"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div
          id="mobile-sidebar"
          className="hidden md:hidden fixed inset-0 z-10 bg-background/80 backdrop-blur-sm"
        >
          <div className="fixed left-0 top-0 bottom-0 w-64 bg-background border-r border-primary/10 rounded-r-2xl">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-foreground">
                  Report Sections
                </h2>
                <button
                  onClick={() =>
                    document
                      .getElementById("mobile-sidebar")
                      .classList.toggle("hidden")
                  }
                  className="p-2 rounded-lg hover:bg-accent transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav>
                <ul className="space-y-1">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => {
                          setActiveTab(tab.id);
                          document
                            .getElementById("mobile-sidebar")
                            .classList.toggle("hidden");
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                          activeTab === tab.id
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-foreground hover:bg-accent"
                        }`}
                      >
                        <span className="capitalize">{tab.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="">
          <div className="p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-end gap-3 mb-4">
                {/*<LoadingButton
                  onClick={handleDownloadPdf}
                  isLoading={downloadingPdf}
                  loadingText=""
                  variant="outline"
                  className="flex items-center justify-center p-2"
                  title="Download PDF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </LoadingButton>
                */}
                <Dialog
                  open={showCompareModal}
                  onOpenChange={setShowCompareModal}
                >
                  <DialogTrigger asChild>
                    <Button className="px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90">
                      Compare with Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Compare with Resume</DialogTitle>
                      <DialogDescription>
                        Upload a resume PDF to compare with your LinkedIn
                        profile.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 space-y-6">
                      {/* Upload Resume PDF */}
                      <div className="space-y-2">
                        <Label htmlFor="resume-pdf">
                          Upload Resume PDF (Required)
                        </Label>
                        <input
                          id="resume-pdf"
                          type="file"
                          accept=".pdf"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            setResumePdfFile(file);
                          }}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                        />
                        <p className="text-xs text-muted-foreground">
                          Resume PDF is required for comparison
                        </p>
                      </div>

                      {/* Info: Role/JD will be extracted from existing LinkedIn analysis */}
                      {linkedinReport?.role_name || linkedinReport?.role_id ? (
                        <div className="space-y-2 border-t pt-4">
                          <p className="text-xs text-muted-foreground">
                            <strong>Note:</strong> Role and job description will
                            be automatically extracted from your LinkedIn
                            analysis (
                            {linkedinReport.role_name ||
                              "Role ID: " + linkedinReport.role_id}
                            ).
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2 border-t pt-4">
                          <p className="text-xs text-muted-foreground">
                            <strong>Note:</strong> Comparison will be performed
                            without role-specific analysis as no role was found
                            in your LinkedIn report.
                          </p>
                        </div>
                      )}

                      {/* Pricing Section */}
                      <div className="space-y-4 border-t pt-4">
                        <h3 className="text-sm font-semibold">Pricing</h3>
                        {isLoadingPricing ? (
                          <p className="text-sm text-muted-foreground">
                            Loading pricing...
                          </p>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">
                                Comparison Service
                              </span>
                              <span className="text-sm font-medium">
                                ₹{pricing.originalPrice}
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
                            <div className="flex justify-between items-center pt-2 border-t">
                              <span className="text-sm font-semibold">
                                Total Amount
                              </span>
                              <span className="text-lg font-bold text-primary">
                                ₹{pricing.finalPrice}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Coupon Code */}
                      <div className="space-y-2 border-t pt-4">
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
                              couponError ? "border-destructive" : ""
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
                        {couponError && (
                          <p className="text-sm text-destructive">
                            {couponError}
                          </p>
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
                              Coupon applied! You saved ₹
                              {appliedCoupon.discount}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Error Message */}
                      {compareError && (
                        <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                          {compareError}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 border-t">
                        <Button
                          variant="outline"
                          onClick={() => setShowCompareModal(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <LoadingButton
                          onClick={onCompare}
                          isLoading={compareLoading}
                          loadingText="Comparing..."
                          className="flex-1"
                          disabled={!resumePdfFile}
                        >
                          Start Comparison
                        </LoadingButton>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinReport;
