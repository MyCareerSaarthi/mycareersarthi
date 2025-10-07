"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useDashboard } from "@/hooks/useDashboard";
import { useRouter } from "next/navigation";
import {
  RefreshCw,
  TrendingUp,
  Users,
  FileText,
  CreditCard,
  Target,
  Calendar,
  BarChart3,
  ArrowRight,
  Plus,
  Eye,
  Activity,
  Briefcase,
  FileCheck,
  DollarSign,
} from "lucide-react";

// Stats Card Component
const StatsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  className = "",
}) => {
  const getTrendColor = (trend) => {
    switch (trend) {
      case "up":
        return "text-emerald-600";
      case "down":
        return "text-red-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{value}</p>
              {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
          {trend && trendValue && (
            <div className="text-right">
              <Badge variant="secondary" className={getTrendColor(trend)}>
                {trendValue}
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Activity Item Component
const ActivityItem = ({ activity, onViewReport }) => {
  const getTypeIcon = (type, subtype) => {
    if (type === "report") {
      return subtype === "linkedin" ? (
        <Briefcase className="h-4 w-4" />
      ) : (
        <FileCheck className="h-4 w-4" />
      );
    }
    return <Activity className="h-4 w-4" />;
  };

  const getTypeColor = (type, subtype) => {
    if (type === "report") {
      return subtype === "linkedin" ? "text-blue-600" : "text-purple-600";
    }
    return "text-muted-foreground";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-md bg-muted ${getTypeColor(
            activity.type,
            activity.subtype
          )}`}
        >
          {getTypeIcon(activity.type, activity.subtype)}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">{activity.title}</p>
          <p className="text-xs text-muted-foreground">
            {activity.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {formatDate(activity.created_at)}
            </span>
            {activity.score && (
              <Badge variant="outline" className="text-xs">
                Score: {activity.score}/100
              </Badge>
            )}
          </div>
        </div>
      </div>
      {activity.type === "report" && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewReport?.(activity)}
        >
          <Eye className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

// Recommendation Card Component
const RecommendationCard = ({ recommendation }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-200 bg-red-50";
      case "medium":
        return "border-yellow-200 bg-yellow-50";
      case "low":
        return "border-blue-200 bg-blue-50";
      default:
        return "border-muted bg-muted/50";
    }
  };

  return (
    <Card className={`${getPriorityColor(recommendation.priority)}`}>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{recommendation.title}</h4>
              <p className="text-xs text-muted-foreground">
                {recommendation.description}
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              {recommendation.priority}
            </Badge>
          </div>
          {recommendation.currentScore && (
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                Current: {recommendation.currentScore}
              </span>
              <span className="text-muted-foreground">
                Target: {recommendation.targetScore}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const {
    data,
    stats,
    recentReports,
    recentPayments,
    recommendations,
    userInfo,
    loading,
    error,
    isRefreshing,
    lastFetched,
    refresh,
    isAuthenticated,
  } = useDashboard();

  // Loading state with skeleton
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(3)].map((_, j) => (
                    <Skeleton key={j} className="h-16 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={refresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔐</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Sign in required</h2>
            <p className="text-muted-foreground mb-6">
              Please sign in to view your dashboard
            </p>
            <Button asChild>
              <Link href="/login">
                <ArrowRight className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {userInfo?.first_name || "User"}! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's your career analysis overview and personalized insights.
          </p>
          {lastFetched && (
            <p className="text-sm text-muted-foreground mt-1">
              Last updated: {new Date(lastFetched).toLocaleTimeString()}
            </p>
          )}
        </div>

        <Button
          onClick={refresh}
          variant="outline"
          size="sm"
          disabled={isRefreshing}
        >
          <RefreshCw
            className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
          />
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Reports"
          value={stats?.totalReports || 0}
          subtitle="LinkedIn & Resume analyses"
          icon={BarChart3}
          trend={stats?.totalReports > 0 ? "up" : "neutral"}
          trendValue="Active"
        />

        <StatsCard
          title="LinkedIn Score"
          value={Math.round(stats?.latestLinkedinScore || 0)}
          subtitle={`Avg: ${Math.round(stats?.averageLinkedinScore || 0)}`}
          icon={Briefcase}
          trend={
            stats?.latestLinkedinScore >= 80
              ? "up"
              : stats?.latestLinkedinScore >= 60
              ? "neutral"
              : "down"
          }
          trendValue={
            stats?.latestLinkedinScore >= 80
              ? "Excellent"
              : stats?.latestLinkedinScore >= 60
              ? "Good"
              : "Needs Work"
          }
        />

        <StatsCard
          title="Resume Score"
          value={Math.round(stats?.latestResumeScore || 0)}
          subtitle={`Avg: ${Math.round(stats?.averageResumeScore || 0)}`}
          icon={FileCheck}
          trend={
            stats?.latestResumeScore >= 80
              ? "up"
              : stats?.latestResumeScore >= 60
              ? "neutral"
              : "down"
          }
          trendValue={
            stats?.latestResumeScore >= 80
              ? "Excellent"
              : stats?.latestResumeScore >= 60
              ? "Good"
              : "Needs Work"
          }
        />

        <StatsCard
          title="Total Investment"
          value={`₹${stats?.totalSpent || 0}`}
          subtitle={`${stats?.totalPayments || 0} payments`}
          icon={DollarSign}
          trend={stats?.totalSpent > 0 ? "up" : "neutral"}
          trendValue="Invested"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your latest analyses and actions
                    </CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReports && recentReports.length > 0 ? (
                recentReports.slice(0, 3).map((report, index) => (
                  <ActivityItem
                    key={report.id}
                    activity={{
                      ...report,
                      type: "report",
                      subtype: report.type,
                      title: report.title,
                      description: `${
                        report.type === "linkedin" ? "LinkedIn" : "Resume"
                      } profile analyzed with score: ${report.score}`,
                      status: report.status,
                      created_at: report.created_at,
                    }}
                    onViewReport={(activity) => {
                      const reportUrl =
                        activity.subtype === "linkedin"
                          ? `/linkedin/report?id=${activity.id}`
                          : `/resume/report?id=${activity.id}`;
                      router.push(reportUrl);
                    }}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    No activity yet
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Start by analyzing your LinkedIn profile or resume
                  </p>
                  <Button asChild>
                    <Link href="/linkedin/analyze">
                      <Plus className="h-4 w-4 mr-2" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Analyze and improve your profiles
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full h-16">
                <Link href="/linkedin/analyze">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">LinkedIn Analysis</div>
                      <div className="text-sm opacity-90">
                        Optimize your profile
                      </div>
                    </div>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="secondary" className="w-full h-16">
                <Link href="/resume/analyze">
                  <div className="flex items-center gap-3">
                    <FileCheck className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Resume Analysis</div>
                      <div className="text-sm opacity-90">
                        Improve your resume
                      </div>
                    </div>
                  </div>
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link href="/reports">
                  <FileText className="h-4 w-4 mr-2" />
                  View All Reports
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>
                  AI-powered insights to boost your career profile
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations && recommendations.length > 0 ? (
                recommendations
                  .slice(0, 4)
                  .map((recommendation) => (
                    <RecommendationCard
                      key={recommendation.id}
                      recommendation={recommendation}
                    />
                  ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    No recommendations yet
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Complete your first analysis to get personalized
                    recommendations
                  </p>
                  <Button asChild>
                    <Link href="/linkedin/analyze">
                      <Plus className="h-4 w-4 mr-2" />
                      Start Analysis
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
