"use client";

import React, { useState, useEffect } from "react";
// Removed framer-motion import
import Overview from "@/components/report/overview";
import ProfileInfo from "@/components/report/profile-info";
import Headline from "@/components/report/headline";
import ProfilePicture from "@/components/report/profile-picture";
import About from "@/components/report/about";
import Experience from "@/components/report/experience";
import Skill from "@/components/report/skill";
import Education from "@/components/report/education";
import Certification from "@/components/report/certification";
import Projects from "@/components/report/projects";
import { useSearchParams } from "next/navigation";
import { api } from "@/components/api/api";
import { useAuth } from "@clerk/nextjs";

const LinkedinReport = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [linkedinReport, setLinkedinReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();

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
    {
      id: "projects",
      label: "Projects",
      component: <Projects data={linkedinReport} />,
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
      {/* Role Badge */}
      {roleInfo && (
        <div className="fixed top-4 right-4 z-30">
          <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
              <span className="text-sm font-medium text-primary">
                {linkedinReport.role_name || "Target Role"}
              </span>
            </div>
          </div>
        </div>
      )}

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
              {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinReport;
