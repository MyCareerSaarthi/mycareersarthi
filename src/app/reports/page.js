"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useReports } from "@/hooks/useDashboard";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  Calendar,
  TrendingUp,
  Eye,
  Download,
  Filter,
  Search,
  RefreshCw,
  Plus,
  BarChart3,
  Target,
  Award,
  AlertCircle,
} from "lucide-react";

const ReportsPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const {
    reports,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
    isAuthenticated,
  } = useReports(activeTab, 10);

  // Loading state
  if (loading && reports.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-8 bg-gray-200 rounded-lg w-64 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
          </div>

          {/* Tabs Skeleton */}
          <div className="mb-8">
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 bg-gray-200 rounded-lg w-24 animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Reports Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-80 bg-gray-200 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Failed to load reports
          </h2>
          <p className="text-red-600 mb-6">{error}</p>
          <Button onClick={refresh} variant="outline" className="rounded-full">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Sign in required
          </h2>
          <p className="text-gray-600 mb-6">
            Please sign in to view your reports
          </p>
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          >
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Filter reports based on search term
  const filteredReports = reports.filter(
    (report) =>
      report.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.summary?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-600 bg-green-100 border-green-200";
    if (score >= 70) return "text-blue-600 bg-blue-100 border-blue-200";
    if (score >= 50) return "text-yellow-600 bg-yellow-100 border-yellow-200";
    return "text-red-600 bg-red-100 border-red-200";
  };

  const getScoreLabel = (score) => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Fair";
    return "Needs Work";
  };

  const getTypeIcon = (type) => {
    return type === "linkedin" ? "💼" : "📄";
  };

  const getTypeColor = (type) => {
    return type === "linkedin"
      ? "bg-blue-500/10 border-blue-500/20 text-blue-700"
      : "bg-purple-500/10 border-purple-500/20 text-purple-700";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleViewReport = (report) => {
    const reportUrl =
      report.type === "linkedin"
        ? `/linkedin/report?id=${report.id}`
        : `/resume/report?id=${report.id}`;
    router.push(reportUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Your Reports 📊
            </h1>
            <p className="text-gray-600 text-lg">
              Track your LinkedIn and resume analysis progress over time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={refresh}
              variant="outline"
              size="sm"
              className="rounded-full"
              disabled={loading}
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-3 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg">
                All Reports
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="rounded-lg">
                LinkedIn
              </TabsTrigger>
              <TabsTrigger value="resume" className="rounded-lg">
                Resume
              </TabsTrigger>
            </TabsList>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <TabsContent value="all" className="space-y-6">
            <ReportsGrid
              reports={filteredReports}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              onViewReport={handleViewReport}
              getScoreColor={getScoreColor}
              getScoreLabel={getScoreLabel}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              formatDate={formatDate}
            />
          </TabsContent>

          <TabsContent value="linkedin" className="space-y-6">
            <ReportsGrid
              reports={filteredReports.filter((r) => r.type === "linkedin")}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              onViewReport={handleViewReport}
              getScoreColor={getScoreColor}
              getScoreLabel={getScoreLabel}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              formatDate={formatDate}
            />
          </TabsContent>

          <TabsContent value="resume" className="space-y-6">
            <ReportsGrid
              reports={filteredReports.filter((r) => r.type === "resume")}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              onViewReport={handleViewReport}
              getScoreColor={getScoreColor}
              getScoreLabel={getScoreLabel}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              formatDate={formatDate}
            />
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {reports.length === 0 && !loading && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No reports found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You haven't created any analysis reports yet. Start by analyzing
              your LinkedIn profile or resume to see your reports here.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
              >
                <Link href="/linkedin/analyze">
                  <Plus className="h-4 w-4 mr-2" />
                  LinkedIn Analysis
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/resume/analyze">
                  <Plus className="h-4 w-4 mr-2" />
                  Resume Analysis
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Reports Grid Component
const ReportsGrid = ({
  reports,
  loading,
  hasMore,
  loadMore,
  onViewReport,
  getScoreColor,
  getScoreLabel,
  getTypeIcon,
  getTypeColor,
  formatDate,
}) => {
  if (reports.length === 0 && !loading) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No reports in this category
        </h3>
        <p className="text-gray-600">
          Try switching to a different tab or create a new analysis.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card
            key={report.id}
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-gray-200 rounded-xl"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg border-2 ${getTypeColor(
                      report.type
                    )}`}
                  >
                    <span className="text-lg">{getTypeIcon(report.type)}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <CardDescription className="capitalize">
                      {report.type} Analysis
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Score */}
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {Math.round(report.score)}
                  </div>
                  <div className="text-sm text-gray-500">Overall Score</div>
                </div>

                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        report.score >= 85
                          ? "bg-green-500"
                          : report.score >= 70
                          ? "bg-blue-500"
                          : report.score >= 50
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${report.score}%` }}
                    />
                  </div>
                  <div className="text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getScoreColor(
                        report.score
                      )}`}
                    >
                      {getScoreLabel(report.score)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {report.summary || "No summary available for this report."}
                </p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(report.created_at)}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-2">
                <Button
                  onClick={() => onViewReport(report)}
                  className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Report
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-8">
          <Button
            onClick={loadMore}
            disabled={loading}
            variant="outline"
            className="rounded-full"
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Load More Reports
              </>
            )}
          </Button>
        </div>
      )}
    </>
  );
};

export default ReportsPage;
