"use client";

import React, { useState, useEffect } from "react";
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
import { useSearchParams } from "next/navigation";
import { api } from "@/components/api/api";
import { useAuth } from "@clerk/nextjs";
import { LoadingButton } from "@/components/ui/loading-button";

const LinkedinReport = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [linkedinReport, setLinkedinReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

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

  // Generate and download PDF (streaming)
  const handleDownloadPdf = async () => {
    if (!id) return;

    try {
      setIsGeneratingPdf(true);
      const token = await getToken();

      // Fetch PDF as blob (API now streams the PDF directly)
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
        }/api/linkedin/generate-pdf/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        // Try to parse error message from JSON response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            errorData.error ||
            `Failed to generate PDF: ${response.statusText}`
        );
      }

      // Check if response is PDF (content-type should be application/pdf)
      const contentType = response.headers.get("content-type");
      if (contentType && typeof contentType === "string" && contentType.includes("application/pdf")) {
        // Get the blob from the streaming response
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Get filename from Content-Disposition header or use default
        const contentDisposition = response.headers.get("content-disposition");
        let filename = `linkedin-report-${id}.pdf`;
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }

        // Create a temporary anchor element to trigger download
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the object URL
        window.URL.revokeObjectURL(url);
      } else {
        // Response is not a PDF, might be an error JSON
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || errorData.error || "Invalid response from server"
        );
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      const errorMessage =
        error.message || "Failed to generate PDF. Please try again.";
      alert(errorMessage);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

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
                <LoadingButton
                  onClick={handleDownloadPdf}
                  loading={isGeneratingPdf}
                  disabled={isGeneratingPdf || !id}
                  className="px-4 py-2 rounded bg-secondary text-secondary-foreground hover:opacity-90"
                >
                  {isGeneratingPdf ? "Generating PDF..." : "Download PDF"}
                </LoadingButton>
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
