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
  Layers,
  PieChart,
  GitCompare,
  Hash,
  Shield,
  UserCheck,
  LogIn,
} from "lucide-react";

/* ─── Utility ─── */
const fmt = (v, d = 1) => Number(Number(v || 0).toFixed(d));
const fmtDate = (ds) => {
  if (!ds) return "N/A";
  try {
    return new Date(ds).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "N/A";
  }
};
const fmtMonth = (m) => {
  if (!m) return "";
  const [y, mo] = m.split("-");
  const d = new Date(y, mo - 1);
  return d.toLocaleDateString(undefined, { month: "short", year: "2-digit" });
};

/* ─── Reusable Sub-Components ─── */

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
  const colors = {
    default: "border-border bg-card",
    blue: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
    green:
      "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
    purple:
      "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950",
    orange:
      "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950",
    rose: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-950",
    amber:
      "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950",
    cyan: "border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950",
  };
  return (
    <Card
      className={`${colors[color] || colors.default} ${className} transition-all duration-200 hover:shadow-md cursor-pointer`}
      onClick={onClick}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-lg ${color === "default" ? "bg-muted" : "bg-white/80 dark:bg-black/20"}`}
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
            </div>
            <p className="text-2xl font-bold">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {trend && trendValue && (
            <div className="text-right">
              <div className="flex items-center gap-1">
                {trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : trend === "down" ? (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                ) : null}
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

const ScoreBar = ({ label, value, max = 10, color = "bg-blue-500", sub }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-sm">
      <span className="font-medium truncate max-w-[60%]">{label}</span>
      <span className="text-muted-foreground font-mono">{fmt(value)}/10</span>
    </div>
    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-500 ${color}`}
        style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
      />
    </div>
    {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
  </div>
);

const MiniStat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
    <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground truncate">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  </div>
);

const EmptyState = ({ icon: Icon, title, desc, action }) => (
  <div className="text-center py-10">
    <Icon className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
    <h3 className="text-base font-semibold mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{desc}</p>
    {action}
  </div>
);

const ActivityItem = ({ activity }) => {
  const icons = {
    linkedin: <Briefcase className="h-4 w-4" />,
    resume: <FileCheck className="h-4 w-4" />,
    comparison: <BarChart3 className="h-4 w-4" />,
  };
  const cls = {
    linkedin: "text-blue-600 bg-blue-100 dark:bg-blue-900",
    resume: "text-purple-600 bg-purple-100 dark:bg-purple-900",
    comparison: "text-orange-600 bg-orange-100 dark:bg-orange-900",
  };
  const url =
    activity.subtype === "linkedin"
      ? `/linkedin/report?id=${activity.id}`
      : activity.subtype === "resume"
        ? `/resume/report?id=${activity.id}`
        : `/compare/report?id=${activity.id}`;
  return (
    <Link
      href={url}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
    >
      <div
        className={`p-2 rounded-md ${cls[activity.subtype] || "text-gray-600 bg-gray-100"}`}
      >
        {icons[activity.subtype] || <Activity className="h-4 w-4" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{activity.title}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground">
            {fmtDate(activity.created_at)}
          </span>
          {activity.score != null && (
            <Badge variant="outline" className="text-xs">
              Score: {activity.score}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
};

const RecommendationCard = ({ recommendation, onAction }) => {
  const pColors = {
    high: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
    medium:
      "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
    low: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
  };
  const pIcons = {
    high: <AlertCircle className="h-4 w-4 text-red-600" />,
    medium: <Info className="h-4 w-4 text-yellow-600" />,
    low: <CheckCircle className="h-4 w-4 text-blue-600" />,
  };
  return (
    <Card
      className={`${pColors[recommendation.priority] || pColors.low} transition-all duration-200 hover:shadow-md`}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              {pIcons[recommendation.priority]}
              <h4 className="text-sm font-semibold truncate">
                {recommendation.title}
              </h4>
            </div>
            <p className="text-xs text-muted-foreground">
              {recommendation.description}
            </p>
          </div>
          <Badge variant="outline" className="text-xs shrink-0">
            {recommendation.priority}
          </Badge>
        </div>
        {recommendation.current_score && recommendation.target_score && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Current: {recommendation.current_score}</span>
              <span>Target: {recommendation.target_score}</span>
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
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {recommendation.estimated_time && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {recommendation.estimated_time}
              </span>
            )}
            {recommendation.impact && (
              <span className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                {recommendation.impact} impact
              </span>
            )}
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
      </CardContent>
    </Card>
  );
};

/* ─── Skeleton ─── */
const DashboardSkeleton = () => (
  <div className="container mx-auto px-4 py-8 max-w-7xl">
    <div className="mb-8">
      <Skeleton className="h-8 w-64 mb-2" />
      <Skeleton className="h-4 w-96" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[...Array(3)].map((_, j) => (
                <Skeleton key={j} className="h-12 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════ */
const Dashboard = () => {
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
    roleWiseBreakdown,
    typeWiseBreakdown,
    sectionAnalytics,
    comparisonSummary,
    paymentBreakdown,
    analysisRequestSummary,
    scoreDistribution,
    monthlyActivity,
    topRoles,
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
  } = useDashboard();

  const handleRecAction = (r) => {
    if (r.action?.type === "navigate" && r.action?.url)
      window.location.href = r.action.url;
  };

  if (loading) return <DashboardSkeleton />;
  if (error)
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
  if (!isAuthenticated)
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
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

  const tw = typeWiseBreakdown || {};
  const sd = scoreDistribution || {};
  const ma = monthlyActivity || {};
  const pb = paymentBreakdown || {};
  const ars = analysisRequestSummary || {};
  const cs = comparisonSummary || {};
  const rw = roleWiseBreakdown || {};
  const sa = sectionAnalytics || {};
  const tr = topRoles || {};
  const maxMonthlyReports = Math.max(
    1,
    ...(ma.months || []).map((m) => m.total_reports),
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* ─── Header ─── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Welcome back, {userProfile?.first_name || "User"}! 👋
              </h1>
              <p className="text-sm text-muted-foreground">
                Your career analytics dashboard
              </p>
            </div>
          </div>
          {lastFetched && (
            <p className="text-xs text-muted-foreground mt-1">
              Updated: {new Date(lastFetched).toLocaleTimeString()}
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
          {isRefreshing ? "Refreshing…" : "Refresh"}
        </Button>
      </div>

      {/* ─── Top Metrics Row ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <MetricsCard
          title="Total Reports"
          value={tw.grand_total || 0}
          subtitle={`LinkedIn ${tw.linkedin?.total || 0} · Resume ${tw.resume?.total || 0} · Compare ${tw.comparison?.total || 0}`}
          icon={BarChart3}
          color="blue"
        />
        <MetricsCard
          title="LinkedIn Avg"
          value={tw.linkedin?.avg_score || 0}
          subtitle={`Best: ${tw.linkedin?.best_score || 0}`}
          icon={Briefcase}
          color="green"
          trend={(tw.linkedin?.avg_score || 0) >= 7 ? "up" : "down"}
          trendValue={(tw.linkedin?.avg_score || 0) >= 7 ? "Good" : "Improve"}
        />
        <MetricsCard
          title="Resume Avg"
          value={tw.resume?.avg_score || 0}
          subtitle={`Best: ${tw.resume?.best_score || 0}`}
          icon={FileCheck}
          color="purple"
          trend={(tw.resume?.avg_score || 0) >= 7 ? "up" : "down"}
          trendValue={(tw.resume?.avg_score || 0) >= 7 ? "Good" : "Improve"}
        />
        <MetricsCard
          title="Comparisons"
          value={cs.total_comparisons || 0}
          subtitle={`Alignment Avg: ${cs.avg_alignment_score || 0}`}
          icon={GitCompare}
          color="orange"
        />
      </div>

      {/* ─── Account Summary Strip ─── */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
        <MiniStat icon={Calendar} label="Member Since" value={fmtDate(userProfile?.member_since)} />
        <MiniStat icon={LogIn} label="Total Logins" value={userProfile?.login_count || 0} />
        <MiniStat icon={UserCheck} label="Profile" value={`${userProfile?.profile_completion || 0}%`} />
        <MiniStat icon={Shield} label="Role" value={userProfile?.role || "user"} />
        <MiniStat icon={DollarSign} label="Invested" value={`₹${fmt(userProfile?.total_investment, 0)}`} />
        <MiniStat icon={Star} label="Engagement" value={userProfile?.engagement_level || "beginner"} />
      </div> */}

      {/* ─── Main Tabs ─── */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {/* <TabsTrigger value="reports">Reports</TabsTrigger> */}
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        {/* ═══ TAB 1: OVERVIEW ═══ */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full h-14">
                  <Link href="/linkedin/analyze">
                    <Briefcase className="h-5 w-5 mr-3" />
                    <span className="text-left flex-1">
                      <span className="font-semibold block">
                        LinkedIn Analysis
                      </span>
                      <span className="text-xs opacity-80">
                        Optimize your profile
                      </span>
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="w-full h-14">
                  <Link href="/resume/analyze">
                    <FileCheck className="h-5 w-5 mr-3" />
                    <span className="text-left flex-1">
                      <span className="font-semibold block">
                        Resume Analysis
                      </span>
                      <span className="text-xs opacity-80">
                        Improve your resume
                      </span>
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-14">
                  <Link href="/compare">
                    <GitCompare className="h-5 w-5 mr-3" />
                    <span className="text-left flex-1">
                      <span className="font-semibold block">
                        Profile Comparison
                      </span>
                      <span className="text-xs opacity-80">
                        Compare LinkedIn & Resume
                      </span>
                    </span>
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
              </CardHeader>
              <CardContent>
                {recentActivity?.length > 0 ? (
                  recentActivity.map((a, i) => (
                    <ActivityItem key={i} activity={a} />
                  ))
                ) : (
                  <EmptyState
                    icon={Activity}
                    title="No activity yet"
                    desc="Start analyzing to see activity here"
                    action={
                      <Button asChild size="sm">
                        <Link href="/linkedin/analyze">
                          <Plus className="h-4 w-4 mr-1" />
                          Start
                        </Link>
                      </Button>
                    }
                  />
                )}
              </CardContent>
            </Card>
          </div>
          {/* Monthly Activity Chart */}
          {ma.months?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Monthly Activity (12 months)
                </CardTitle>
                <CardDescription>
                  Most active: {fmtMonth(ma.most_active_month)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-1.5 h-32">
                  {ma.months.map((m) => (
                    <div
                      key={m.month}
                      className="flex-1 flex flex-col items-center gap-1 group relative"
                    >
                      <div
                        className="w-full rounded-t bg-blue-500/80 dark:bg-blue-400/60 transition-all group-hover:bg-blue-600"
                        style={{
                          height: `${Math.max((m.total_reports / maxMonthlyReports) * 100, 4)}%`,
                        }}
                      />
                      <span className="text-[9px] text-muted-foreground">
                        {fmtMonth(m.month)}
                      </span>
                      <div className="absolute -top-8 bg-popover border text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none shadow z-10 whitespace-nowrap">
                        {m.total_reports} reports · ₹{m.payment_amount}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* ═══ TAB 2: REPORT ANALYTICS ═══ */}
        {/* <TabsContent value="reports" className="space-y-6">
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">LinkedIn Reports</h3>
                </div>
                <p className="text-3xl font-bold mb-1">
                  {tw.linkedin?.total || 0}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    Avg Score:{" "}
                    <span className="font-medium text-foreground">
                      {tw.linkedin?.avg_score || 0}
                    </span>
                  </p>
                  <p>
                    Best: {tw.linkedin?.best_score || 0} · Worst:{" "}
                    {tw.linkedin?.worst_score || 0}
                  </p>
                  <p className="text-xs">
                    Last: {fmtDate(tw.linkedin?.latest_date)}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FileCheck className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold">Resume Reports</h3>
                </div>
                <p className="text-3xl font-bold mb-1">
                  {tw.resume?.total || 0}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    Avg Score:{" "}
                    <span className="font-medium text-foreground">
                      {tw.resume?.avg_score || 0}
                    </span>
                  </p>
                  <p>
                    Best: {tw.resume?.best_score || 0} · Worst:{" "}
                    {tw.resume?.worst_score || 0}
                  </p>
                  <p className="text-xs">
                    Last: {fmtDate(tw.resume?.latest_date)}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <GitCompare className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold">Comparisons</h3>
                </div>
                <p className="text-3xl font-bold mb-1">
                  {tw.comparison?.total || 0}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    Avg Alignment:{" "}
                    <span className="font-medium text-foreground">
                      {tw.comparison?.avg_alignment || 0}
                    </span>
                  </p>
                  <p>Avg Role Fit: {tw.comparison?.avg_role_fit || 0}</p>
                  <p className="text-xs">
                    Last: {fmtDate(tw.comparison?.latest_date)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Score Distribution
              </CardTitle>
              <CardDescription>
                How your scores are distributed across ranges
              </CardDescription>
            </CardHeader>
            <CardContent>
              {sd.total_reports > 0 ? (
                <div className="space-y-3">
                  {["0-2", "2.1-4", "4.1-6", "6.1-8", "8.1-10"].map(
                    (bucket) => {
                      const maxV = Math.max(
                        1,
                        ...Object.values(sd.combined || {}),
                      );
                      const val = sd.combined?.[bucket] || 0;
                      const colors = {
                        "0-2": "bg-red-500",
                        "2.1-4": "bg-orange-500",
                        "4.1-6": "bg-yellow-500",
                        "6.1-8": "bg-blue-500",
                        "8.1-10": "bg-green-500",
                      };
                      return (
                        <div key={bucket} className="flex items-center gap-3">
                          <span className="text-sm font-mono w-16 text-right">
                            {bucket}
                          </span>
                          <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${colors[bucket]}`}
                              style={{ width: `${(val / maxV) * 100}%` }}
                            />
                          </div>
                          <div className="flex gap-2 text-xs w-28">
                            <Badge variant="outline">
                              Li: {sd.linkedin?.[bucket] || 0}
                            </Badge>
                            <Badge variant="outline">
                              Re: {sd.resume?.[bucket] || 0}
                            </Badge>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              ) : (
                <EmptyState
                  icon={PieChart}
                  title="No scores yet"
                  desc="Complete analyses to see distribution"
                />
              )}
            </CardContent>
          </Card>
          {ars.total_requests > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Analysis Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <MiniStat
                    icon={Hash}
                    label="Total Requests"
                    value={ars.total_requests}
                  />
                  <MiniStat
                    icon={CheckCircle}
                    label="Success Rate"
                    value={`${ars.success_rate}%`}
                  />
                  {ars.by_type?.map((t) => (
                    <MiniStat
                      key={t.type}
                      icon={t.type === "linkedin" ? Briefcase : FileCheck}
                      label={`${t.type} Requests`}
                      value={`${t.completed}/${t.total} done`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {ars.by_status?.map((s) => (
                    <Badge
                      key={s.status}
                      variant={
                        s.status === "completed" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {s.status}: {s.count}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent> */}

        {/* ═══ TAB 3: ROLE INSIGHTS ═══ */}
        <TabsContent value="roles" className="space-y-6">
          {/* Top Roles */}
          {tr.roles?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Top Performing Roles
                </CardTitle>
                <CardDescription>
                  Ranked by average score — best role: {tr.top_role} (
                  {tr.top_score})
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {tr.roles.map((r, i) => (
                  <ScoreBar
                    key={r.role_name}
                    label={`${i === 0 ? "🥇 " : i === 1 ? "🥈 " : i === 2 ? "🥉 " : ""}${r.role_name}`}
                    value={r.avg_score}
                    color={
                      i === 0
                        ? "bg-amber-500"
                        : i === 1
                          ? "bg-gray-400"
                          : "bg-blue-500"
                    }
                    sub={`${r.total_reports} reports`}
                  />
                ))}
              </CardContent>
            </Card>
          )}
          {/* Role-wise Breakdown */}
          {rw.roles?.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Role-Wise Breakdown
                </CardTitle>
                <CardDescription>
                  {rw.total_roles} roles analyzed · Most analyzed:{" "}
                  {rw.most_analyzed_role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-muted-foreground">
                        <th className="pb-2 pr-4">Role</th>
                        <th className="pb-2 pr-4 text-center">LinkedIn</th>
                        <th className="pb-2 pr-4 text-center">Resume</th>
                        <th className="pb-2 pr-4 text-center">Total</th>
                        <th className="pb-2 pr-4 text-center">LI Avg</th>
                        <th className="pb-2 pr-4 text-center">RE Avg</th>
                        <th className="pb-2 text-center">Best</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rw.roles.map((r) => (
                        <tr
                          key={r.role_name}
                          className="border-b last:border-0 hover:bg-muted/50"
                        >
                          <td className="py-2.5 pr-4 font-medium">
                            {r.role_name}
                          </td>
                          <td className="py-2.5 pr-4 text-center">
                            {r.linkedin_count}
                          </td>
                          <td className="py-2.5 pr-4 text-center">
                            {r.resume_count}
                          </td>
                          <td className="py-2.5 pr-4 text-center font-semibold">
                            {r.total_count}
                          </td>
                          <td className="py-2.5 pr-4 text-center">
                            {r.linkedin_avg || "—"}
                          </td>
                          <td className="py-2.5 pr-4 text-center">
                            {r.resume_avg || "—"}
                          </td>
                          <td className="py-2.5 text-center">
                            <Badge variant="outline">{r.best_score}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <EmptyState
                  icon={Layers}
                  title="No role data"
                  desc="Analyze with a target role to see role insights"
                />
              </CardContent>
            </Card>
          )}
          {/* Comparison by Role */}
          {cs.by_role?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitCompare className="h-5 w-5" />
                  Comparison by Role
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cs.by_role.map((r) => (
                  <div
                    key={r.role_name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div>
                      <p className="font-medium text-sm">{r.role_name}</p>
                      <p className="text-xs text-muted-foreground">
                        {r.count} comparisons
                      </p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <Badge variant="outline">Align: {r.avg_alignment}</Badge>
                      <Badge variant="outline">Fit: {r.avg_role_fit}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* ═══ TAB 4: SECTION SCORES ═══ */}
        <TabsContent value="sections" className="space-y-6">
          {sa.sections?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricsCard
                  title="Total Sections"
                  value={sa.total_sections}
                  icon={Layers}
                  color="cyan"
                />
                <MetricsCard
                  title="Strongest"
                  value={sa.strongest_section}
                  icon={TrendingUp}
                  color="green"
                />
                <MetricsCard
                  title="Weakest"
                  value={sa.weakest_section}
                  icon={TrendingDown}
                  color="rose"
                />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Section Performance
                  </CardTitle>
                  <CardDescription>
                    Average score per section across all reports
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sa.sections.map((s) => (
                    <div key={`${s.name}_${s.report_type}`}>
                      <ScoreBar
                        label={s.name}
                        value={s.avg_score}
                        color={
                          s.avg_score >= 7
                            ? "bg-green-500"
                            : s.avg_score >= 5
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }
                        sub={`${s.report_type} · Best: ${s.best_score} · ✓${s.total_strengths} strengths · ✗${s.total_weaknesses} weaknesses · ${s.times_analyzed}× analyzed`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent>
                <EmptyState
                  icon={BarChart3}
                  title="No section data"
                  desc="Complete analyses to see per-section breakdowns"
                />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* ═══ TAB 5: FINANCIAL ═══ */}
        <TabsContent value="financial" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricsCard
              title="Total Spent"
              value={`₹${pb.grand_total || 0}`}
              icon={DollarSign}
              color="green"
            />
            <MetricsCard
              title="Transactions"
              value={pb.total_transactions || 0}
              icon={CreditCard}
              color="blue"
            />
            <MetricsCard
              title="Coupon Saves"
              value={`₹${pb.coupon_usage?.total_discount_saved || 0}`}
              subtitle={`${pb.coupon_usage?.with_coupon || 0} used`}
              icon={Award}
              color="amber"
            />
            <MetricsCard
              title="Bookings"
              value={userProfile?.booking_count || 0}
              icon={Calendar}
              color="purple"
            />
          </div>
          {/* Payment by Status */}
          {pb.by_status?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Payment by Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {pb.by_status.map((s) => {
                    const statusColors = {
                      completed:
                        "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
                      pending:
                        "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
                      failed:
                        "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
                    };
                    return (
                      <div
                        key={s.status}
                        className={`p-4 rounded-lg border ${statusColors[s.status] || "border-border bg-card"}`}
                      >
                        <p className="text-xs text-muted-foreground capitalize mb-1">
                          {s.status}
                        </p>
                        <p className="text-xl font-bold">{s.count}</p>
                        <p className="text-sm text-muted-foreground">
                          ₹{s.total_amount}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
          {/* Monthly Spend */}
          {pb.monthly_spend?.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Monthly Spending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pb.monthly_spend.map((m) => (
                    <div
                      key={m.month}
                      className="flex items-center justify-between p-2 rounded hover:bg-muted/50"
                    >
                      <span className="text-sm font-medium">
                        {fmtMonth(m.month)}
                      </span>
                      <div className="flex gap-3">
                        <Badge variant="outline">₹{m.amount}</Badge>
                        <Badge variant="secondary">{m.transactions} tx</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
