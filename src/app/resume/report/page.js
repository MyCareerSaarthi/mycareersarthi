"use client";

import React, { useState, useEffect } from "react";
import ResumeOverview from "@/components/report/resume-overview";
import Skill from "@/components/report/skill";
import Experience from "@/components/report/experience";
import Education from "@/components/report/education";
import Certification from "@/components/report/certification";
import { useSearchParams } from "next/navigation";
import { api } from "@/components/api/api";
import { useAuth } from "@clerk/nextjs";
import { useRef } from "react";

const ResumeReport = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [resumeReport, setResumeReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();
  const [showCompare, setShowCompare] = useState(false);
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareError, setCompareError] = useState("");
  const [compareResult, setCompareResult] = useState(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const linkedinPdfRef = useRef(null);
  const [roleId, setRoleId] = useState("");
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [generateJD, setGenerateJD] = useState(false);
  const [roleName, setRoleName] = useState("");

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
      component: (
        <ResumeOverview data={resumeReport} onNavigate={setActiveTab} />
      ),
    },
    {
      id: "skill",
      label: "Skills",
      component: <Skill data={resumeReport} />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <Experience data={resumeReport} />,
    },
    {
      id: "education",
      label: "Education",
      component: <Education data={resumeReport} />,
    },
    {
      id: "certification",
      label: "Certifications",
      component: <Certification data={resumeReport} />,
    },
  ];

  const getResumeReport = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      const response = await api.get(`/api/resume/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResumeReport(response.data);
    } catch (error) {
      console.error("Error fetching resume report:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getResumeReport();
    }
  }, [id]);

  const onCompare = async () => {
    try {
      setCompareLoading(true);
      setCompareError("");
      setCompareResult(null);
      const fd = new FormData();
      // Use fresh mode here; require user to supply LinkedIn URL or PDF and reupload resume
      fd.append("mode", "fresh");
      if (linkedinUrl) fd.append("linkedin_url", linkedinUrl);
      const lp = linkedinPdfRef.current?.files?.[0];
      if (lp) fd.append("linkedin_pdf", lp);
      // We don't have the original resume file content; ask user to re-upload
      // Provide hint in UI; if user doesn't attach, request will fail server-side as resume_pdf is required
      // Optionally we could disable button until a file chosen; keeping simple to rely on server validation
      const token = await getToken();
      if (roleId) fd.append("role_id", roleId);
      if (jobDescriptionText)
        fd.append("job_description_text", jobDescriptionText);
      if (generateJD) fd.append("generate_job_description", "true");
      if (roleName) fd.append("role_name", roleName);

      const res = await fetch(`/api/comparison/compare`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Request failed");
      }
      const data = await res.json();
      setCompareResult(data);
    } catch (e) {
      setCompareError(e.message || "Comparison failed");
    } finally {
      setCompareLoading(false);
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

  if (!resumeReport) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">No report data available</p>
        </div>
      </div>
    );
  }

  // Get role information
  const roleInfo = resumeReport?.role_name || resumeReport?.role_id;

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
        <button
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
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowCompare(true)}
                  className="px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90"
                >
                  Compare with LinkedIn
                </button>
              </div>
              {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
          </div>
        </div>
      </div>

      {showCompare && (
        <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center">
          <div className="bg-background rounded-lg shadow-xl w-full max-w-xl p-4 border border-border">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Compare with LinkedIn</h3>
              <button onClick={() => setShowCompare(false)} className="text-sm">
                Close
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  LinkedIn URL
                </label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  LinkedIn PDF (optional)
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  ref={linkedinPdfRef}
                />
              </div>
              <div className="text-xs text-muted-foreground">
                Note: Please ensure the resume used for this report is also
                provided on the dedicated Compare page for the most accurate
                results.
              </div>
              <div className="border-t pt-3">
                <div className="text-sm font-medium mb-2">Optional Role/JD</div>
                <input
                  className="border rounded px-3 py-2 w-full mb-2"
                  placeholder="role_id (use existing JD)"
                  value={roleId}
                  onChange={(e) => setRoleId(e.target.value)}
                />
                <textarea
                  className="border rounded px-3 py-2 w-full mb-2"
                  rows={3}
                  placeholder="job_description_text"
                  value={jobDescriptionText}
                  onChange={(e) => setJobDescriptionText(e.target.value)}
                />
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={generateJD}
                    onChange={(e) => setGenerateJD(e.target.checked)}
                  />{" "}
                  Generate JD
                </label>
                {generateJD && (
                  <input
                    className="border rounded px-3 py-2 w-full mt-2"
                    placeholder="role_name (for JD generation)"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                  />
                )}
              </div>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={onCompare}
                  disabled={compareLoading}
                  className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
                >
                  {compareLoading ? "Comparing..." : "Run Comparison"}
                </button>
                {compareError ? (
                  <span className="text-sm text-red-600">{compareError}</span>
                ) : null}
              </div>
              {compareResult && (
                <div className="mt-3 max-h-64 overflow-auto border rounded p-2 text-xs bg-accent/30">
                  <pre>{JSON.stringify(compareResult, null, 2)}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeReport;
