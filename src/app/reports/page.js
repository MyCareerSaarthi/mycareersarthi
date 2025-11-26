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
import { useModernReports } from "@/hooks/useModernReports";
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
  SortAsc,
  SortDesc,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";

const ReportsPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  const {
    reports,
    statistics,
    loading,
    error,
    hasMore,
    totalCount,
    filters,
    loadMore,
    refresh,
    search,
    filterByType,
    sortReports,
    filterByScore,
    deleteReport,
  } = useModernReports({
    type: activeTab,
    sortBy,
    sortOrder,
  });

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

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    search(term);
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    filterByType(tab);
  };

  // Handle sort change
  const handleSortChange = (newSortBy) => {
    const newSortOrder =
      sortBy === newSortBy && sortOrder === "desc" ? "asc" : "desc";
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    sortReports(newSortBy, newSortOrder);
  };

  // Handle score filter
  const handleScoreFilter = (min, max) => {
    // Convert to numbers and validate
    const scoreMin =
      min !== null && min !== undefined && min !== "" ? parseFloat(min) : null;
    const scoreMax =
      max !== null && max !== undefined && max !== "" ? parseFloat(max) : null;

    // Only apply filter if values are valid numbers
    if (
      (scoreMin === null || (!isNaN(scoreMin) && isFinite(scoreMin))) &&
      (scoreMax === null || (!isNaN(scoreMax) && isFinite(scoreMax)))
    ) {
      filterByScore(scoreMin, scoreMax);
    }
  };

  // Handle report deletion
  const handleDeleteReport = async (report) => {
    if (
      window.confirm(
        `Are you sure you want to delete this ${report.type} report?`
      )
    ) {
      const success = await deleteReport(report.id, report.type);
      if (success) {
        // Report will be automatically removed from the list
      }
    }
  };

  const getScoreColor = (score) => {
    const numScore = Number(score) || 0;
    if (numScore >= 85) return "text-green-600 bg-green-100 border-green-200";
    if (numScore >= 70) return "text-blue-600 bg-blue-100 border-blue-200";
    if (numScore >= 50)
      return "text-yellow-600 bg-yellow-100 border-yellow-200";
    return "text-red-600 bg-red-100 border-red-200";
  };

  const getScoreLabel = (score) => {
    const numScore = Number(score) || 0;
    if (numScore >= 85) return "Excellent";
    if (numScore >= 70) return "Good";
    if (numScore >= 50) return "Fair";
    return "Needs Work";
  };

  const getTypeIcon = (type) => {
    if (type === "linkedin") return "💼";
    if (type === "resume") return "📄";
    if (type === "comparison") return "⚖️";
    return "📊";
  };

  const getTypeColor = (type) => {
    if (type === "linkedin")
      return "bg-blue-500/10 border-blue-500/20 text-blue-700";
    if (type === "resume")
      return "bg-purple-500/10 border-purple-500/20 text-purple-700";
    if (type === "comparison")
      return "bg-orange-500/10 border-orange-500/20 text-orange-700";
    return "bg-gray-500/10 border-gray-500/20 text-gray-700";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      // Convert to user's local timezone (toLocaleDateString automatically uses local timezone)
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return "Invalid Date";
    }
  };

  const handleViewReport = (report) => {
    let reportUrl;
    if (report.type === "linkedin") {
      reportUrl = `/linkedin/report?id=${report.id}`;
    } else if (report.type === "resume") {
      reportUrl = `/resume/report?id=${report.id}`;
    } else if (report.type === "comparison") {
      reportUrl = `/compare/report?id=${report.id}`;
    } else {
      reportUrl = `/reports`;
    }
    window.location.href = reportUrl;
  };

  // Use overall_score instead of score with null safety
  // For comparison reports, use overall_alignment_score
  const getReportScore = (report) => {
    if (!report) return 0;
    if (report.type === "comparison") {
      // Comparison reports use overall_alignment_score (0-10 scale)
      const alignmentScore = Number(report.overall_alignment_score) || 0;
      return Math.round(alignmentScore * 10); // Convert 0-10 to 0-100 for display
    }
    return Number(report.overall_score) || Number(report.score) || 0;
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
              Track your LinkedIn, resume, and comparison analysis progress over
              time.
            </p>
            {statistics && (
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    {statistics.total_reports || 0} Total Reports
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-600">
                    Avg Score:{" "}
                    {statistics.average_score
                      ? statistics.average_score.toFixed(1)
                      : "0.0"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-600">
                    Best: {statistics.highest_score || 0}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
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

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                Advanced Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant={sortBy === "created_at" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSortChange("created_at")}
                      className="rounded-full"
                    >
                      {sortBy === "created_at" && sortOrder === "desc" ? (
                        <SortDesc className="h-3 w-3 mr-1" />
                      ) : (
                        <SortAsc className="h-3 w-3 mr-1" />
                      )}
                      Date
                    </Button>
                    <Button
                      variant={
                        sortBy === "overall_score" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => handleSortChange("overall_score")}
                      className="rounded-full"
                    >
                      {sortBy === "overall_score" && sortOrder === "desc" ? (
                        <SortDesc className="h-3 w-3 mr-1" />
                      ) : (
                        <SortAsc className="h-3 w-3 mr-1" />
                      )}
                      Score
                    </Button>
                  </div>
                </div>

                {/* Score Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Score Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      min="0"
                      max="100"
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      onChange={(e) =>
                        handleScoreFilter(e.target.value, filters.scoreMax)
                      }
                    />
                    <span className="self-center text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      min="0"
                      max="100"
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      onChange={(e) =>
                        handleScoreFilter(filters.scoreMin, e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Quick Filters */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quick Filters
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleScoreFilter(80, 100)}
                      className="rounded-full"
                    >
                      High Scores
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleScoreFilter(0, 50)}
                      className="rounded-full"
                    >
                      Needs Work
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg">
                All Reports ({totalCount})
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="rounded-lg">
                LinkedIn ({statistics?.linkedin_count || 0})
              </TabsTrigger>
              <TabsTrigger value="resume" className="rounded-lg">
                Resume ({statistics?.resume_count || 0})
              </TabsTrigger>
              <TabsTrigger value="comparison" className="rounded-lg">
                Comparison ({statistics?.comparison_count || 0})
              </TabsTrigger>
            </TabsList>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <TabsContent value="all" className="space-y-6">
            <ReportsGrid
              reports={reports || []}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              onViewReport={handleViewReport}
              onDeleteReport={handleDeleteReport}
              getScoreColor={getScoreColor}
              getScoreLabel={getScoreLabel}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              formatDate={formatDate}
              getReportScore={getReportScore}
            />
          </TabsContent>

          <TabsContent value="linkedin" className="space-y-6">
            <ReportsGrid
              reports={(reports || []).filter(
                (r) => r && r.type === "linkedin"
              )}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              onViewReport={handleViewReport}
              onDeleteReport={handleDeleteReport}
              getScoreColor={getScoreColor}
              getScoreLabel={getScoreLabel}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              formatDate={formatDate}
              getReportScore={getReportScore}
            />
          </TabsContent>

          <TabsContent value="resume" className="space-y-6">
            <ReportsGrid
              reports={(reports || []).filter((r) => r && r.type === "resume")}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              onViewReport={handleViewReport}
              onDeleteReport={handleDeleteReport}
              getScoreColor={getScoreColor}
              getScoreLabel={getScoreLabel}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              formatDate={formatDate}
              getReportScore={getReportScore}
            />
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <ReportsGrid
              reports={(reports || []).filter(
                (r) => r && r.type === "comparison"
              )}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              onViewReport={handleViewReport}
              onDeleteReport={handleDeleteReport}
              getScoreColor={getScoreColor}
              getScoreLabel={getScoreLabel}
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              formatDate={formatDate}
              getReportScore={getReportScore}
            />
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {(!reports || reports.length === 0) && !loading && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No reports found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You haven't created any analysis reports yet. Start by analyzing
              your LinkedIn profile, resume, or comparing them to see your
              reports here.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
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
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/compare">
                  <Plus className="h-4 w-4 mr-2" />
                  Compare Profiles
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
  onDeleteReport,
  getScoreColor,
  getScoreLabel,
  getTypeIcon,
  getTypeColor,
  formatDate,
  getReportScore,
}) => {
  if ((!reports || reports.length === 0) && !loading) {
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
        {(reports || []).map((report) => {
          if (!report || !report.id) return null;
          return (
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
                      <span className="text-lg">
                        {getTypeIcon(report.type)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {report.type === "linkedin"
                          ? "LinkedIn Profile"
                          : report.type === "resume"
                          ? "Resume"
                          : "Profile Comparison"}{" "}
                        Analysis
                      </CardTitle>
                      <CardDescription className="capitalize">
                        {report.type === "comparison"
                          ? "Comparison Analysis"
                          : `${report.type} Analysis`}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDeleteReport(report)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Score */}
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {getReportScore(report)}
                    </div>
                    <div className="text-sm text-gray-500">Overall Score</div>
                  </div>

                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          getReportScore(report) >= 85
                            ? "bg-green-500"
                            : getReportScore(report) >= 70
                            ? "bg-blue-500"
                            : getReportScore(report) >= 50
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${getReportScore(report)}%` }}
                      />
                    </div>
                    <div className="text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getScoreColor(
                          getReportScore(report)
                        )}`}
                      >
                        {getScoreLabel(getReportScore(report))}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {report.summary ||
                      report.overall_summary ||
                      "No summary available for this report."}
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
          );
        })}
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
