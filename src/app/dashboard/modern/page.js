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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useModernDashboard } from "@/hooks/useModernDashboard";
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
  Award,
  Star,
  Zap,
  Brain,
  Rocket,
  ChevronRight,
  Trophy,
  Medal,
  Crown,
  Sparkles,
  Lightbulb,
  CheckCircle,
  Clock,
  TrendingDown,
  AlertCircle,
  Info,
} from "lucide-react";

// Modern Metrics Card Component
const MetricsCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  color = "default",
  onClick,
  className = "",
}) => {
  const getColorClasses = (color) => {
    const colors = {
      default: "border-border bg-card",
      blue: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
      green:
        "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
      purple:
        "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950",
      orange:
        "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950",
    };
    return colors[color] || colors.default;
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-3 w-3 text-green-600" />;
      case "down":
        return <TrendingDown className="h-3 w-3 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <Card
      className={`${getColorClasses(
        color
      )} ${className} transition-all duration-200 hover:shadow-md cursor-pointer`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-lg ${
                  color === "default"
                    ? "bg-muted"
                    : "bg-white/80 dark:bg-black/20"
                }`}
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
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
              <div className="flex items-center gap-1">
                {getTrendIcon(trend)}
                <Badge variant="secondary" className="text-xs">
                  {trendValue}
                </Badge>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Modern Recommendation Card
const RecommendationCard = ({ recommendation, onAction }) => {
  const getPriorityColor = (priority) => {
    const colors = {
      high: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
      medium:
        "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
      low: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
    };
    return colors[priority] || colors.low;
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "medium":
        return <Info className="h-4 w-4 text-yellow-600" />;
      case "low":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <Info className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card
      className={`${getPriorityColor(
        recommendation.priority
      )} transition-all duration-200 hover:shadow-md`}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                {getPriorityIcon(recommendation.priority)}
                <h4 className="text-sm font-semibold">
                  {recommendation.title}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground">
                {recommendation.description}
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              {recommendation.priority}
            </Badge>
          </div>

          {recommendation.current_score && recommendation.target_score && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Current: {recommendation.current_score}/100
                </span>
                <span className="text-muted-foreground">
                  Target: {recommendation.target_score}/100
                </span>
              </div>
              <Progress
                value={
                  (recommendation.current_score / recommendation.target_score) *
                  100
                }
                className="h-2"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{recommendation.estimated_time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>{recommendation.impact} impact</span>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onAction?.(recommendation)}
            >
              {recommendation.action?.label || "Take Action"}
              <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Achievement Badge Component
const AchievementBadge = ({ badge, earned = false }) => {
  return (
    <div
      className={`relative p-4 rounded-lg border-2 transition-all duration-200 ${
        earned
          ? "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-950"
          : "border-muted bg-muted/50"
      }`}
    >
      {earned && (
        <div className="absolute -top-2 -right-2">
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
      <div className="text-center space-y-2">
        <div className="text-2xl">{badge.icon}</div>
        <div>
          <h4 className="text-sm font-semibold">{badge.name}</h4>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </div>
        {!earned && badge.progress !== undefined && (
          <div className="space-y-1">
            <Progress
              value={(badge.progress / badge.target) * 100}
              className="h-1"
            />
            <p className="text-xs text-muted-foreground">
              {badge.progress}/{badge.target}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Activity Timeline Item
const ActivityItem = ({ activity }) => {
  const subType = activity.subtype;
  const Id = activity.id;
  const getActivityIcon = (type, subtype) => {
    const icons = {
      report: {
        linkedin: <Briefcase className="h-4 w-4" />,
        resume: <FileCheck className="h-4 w-4" />,
      },
      payment: {
        transaction: <CreditCard className="h-4 w-4" />,
      },
      analysis_request: {
        linkedin: <Brain className="h-4 w-4" />,
        resume: <Brain className="h-4 w-4" />,
      },
    };
    return icons[type]?.[subtype] || <Activity className="h-4 w-4" />;
  };

  const getActivityColor = (type, subtype) => {
    const colors = {
      report: {
        linkedin: "text-blue-600 bg-blue-100 dark:bg-blue-900",
        resume: "text-purple-600 bg-purple-100 dark:bg-purple-900",
      },
      payment: {
        transaction: "text-green-600 bg-green-100 dark:bg-green-900",
      },
      analysis_request: {
        linkedin: "text-orange-600 bg-orange-100 dark:bg-orange-900",
        resume: "text-orange-600 bg-orange-100 dark:bg-orange-900",
      },
    };
    return (
      colors[type]?.[subtype] || "text-gray-600 bg-gray-100 dark:bg-gray-900"
    );
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
    <Link
      href={`/${subType}/report?id=${Id}`}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
    >
      <div
        className={`p-2 rounded-md ${getActivityColor(
          activity.type,
          activity.subtype
        )}`}
      >
        {getActivityIcon(activity.type, activity.subtype)}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{activity.title}</p>
        <p className="text-xs text-muted-foreground">{activity.description}</p>
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
    </Link>
  );
};

// Loading Skeleton Component
const DashboardSkeleton = () => (
  <div className="container mx-auto px-4 py-8 max-w-7xl">
    {/* Header Skeleton */}
    <div className="mb-8">
      <Skeleton className="h-8 w-64 mb-2" />
      <Skeleton className="h-4 w-96" />
    </div>

    {/* Metrics Grid Skeleton */}
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

// Main Modern Dashboard Component
const ModernDashboard = () => {
  const router = useRouter();
  const {
    data,
    userProfile,
    overviewMetrics,
    performanceInsights,
    recommendations,
    progress,
    achievements,
    activity,
    insights,
    highPriorityRecommendations,
    earnedBadges,
    availableBadges,
    recentActivity,
    overallProgress,
    loading,
    error,
    isRefreshing,
    lastFetched,
    refresh,
    isAuthenticated,
  } = useModernDashboard();

  const handleRecommendationAction = (recommendation) => {
    if (
      recommendation.action?.type === "navigate" &&
      recommendation.action?.url
    ) {
      router.push(recommendation.action.url);
    }
  };

  // Loading state
  if (loading) {
    return <DashboardSkeleton />;
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-destructive" />
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
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sign in required</h2>
            <p className="text-muted-foreground mb-6">
              Please sign in to view your modern dashboard
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
      {/* Modern Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {userProfile?.first_name || "User"}! 👋
              </h1>
              <p className="text-muted-foreground">
                Your modern career analytics dashboard
              </p>
            </div>
          </div>
          {lastFetched && (
            <p className="text-sm text-muted-foreground">
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

      {/* Modern Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
        <MetricsCard
          title="Total Reports"
          value={overviewMetrics?.reports?.total || 0}
          subtitle="LinkedIn & Resume analyses"
          icon={BarChart3}
          trend="up"
          trendValue="Active"
          color="blue"
        />

        <MetricsCard
          title="LinkedIn Score"
          value={Math.round(
            overviewMetrics?.reports?.linkedin?.latest_score || 0
          )}
          subtitle={`Avg: ${
            overviewMetrics?.reports?.linkedin?.average_score || 0
          }`}
          icon={Briefcase}
          trend={
            (overviewMetrics?.reports?.linkedin?.latest_score || 0) >= 80
              ? "up"
              : (overviewMetrics?.reports?.linkedin?.latest_score || 0) >= 60
              ? "neutral"
              : "down"
          }
          trendValue={
            (overviewMetrics?.reports?.linkedin?.latest_score || 0) >= 80
              ? "Excellent"
              : (overviewMetrics?.reports?.linkedin?.latest_score || 0) >= 60
              ? "Good"
              : "Needs Work"
          }
          color="green"
        />

        <MetricsCard
          title="Resume Score"
          value={Math.round(
            overviewMetrics?.reports?.resume?.latest_score || 0
          )}
          subtitle={`Avg: ${
            overviewMetrics?.reports?.resume?.average_score || 0
          }`}
          icon={FileCheck}
          trend={
            (overviewMetrics?.reports?.resume?.latest_score || 0) >= 80
              ? "up"
              : (overviewMetrics?.reports?.resume?.latest_score || 0) >= 60
              ? "neutral"
              : "down"
          }
          trendValue={
            (overviewMetrics?.reports?.resume?.latest_score || 0) >= 80
              ? "Excellent"
              : (overviewMetrics?.reports?.resume?.latest_score || 0) >= 60
              ? "Good"
              : "Needs Work"
          }
          color="purple"
        />
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Get started with your career optimization
                </CardDescription>
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

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your latest actions and analyses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity && recentActivity.length > 0 ? (
                  recentActivity.map((activity, index) => (
                    <ActivityItem key={index} activity={activity} />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Activity className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      No recent activity
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Start analyzing to see activity here
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations && recommendations.length > 0 ? (
              recommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.id}
                  recommendation={recommendation}
                  onAction={handleRecommendationAction}
                />
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <Lightbulb className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModernDashboard;
