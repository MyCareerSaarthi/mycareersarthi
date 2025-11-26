import { useState, useEffect, useCallback, useMemo } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { DashboardAPI } from "@/components/api/dashboard";

/**
 * Dashboard hook with advanced features and better state management
 */
export const useDashboard = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  // Main state management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Individual data states for granular updates
  const [metrics, setMetrics] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [progress, setProgress] = useState(null);
  const [achievements, setAchievements] = useState(null);
  const [activity, setActivity] = useState([]);
  const [insights, setInsights] = useState(null);

  // Fetch comprehensive dashboard data
  const fetchDashboardData = useCallback(
    async (isRefresh = false) => {
      if (!user || !isLoaded) return;

      try {
        if (!isRefresh) {
          setLoading(true);
        } else {
          setIsRefreshing(true);
        }
        setError(null);

        const token = await getToken();
        if (!token) {
          throw new Error("No authentication token available");
        }

        const response = await DashboardAPI.getDashboardAnalytics(token);

        if (response.success) {
          setData(response.data);
          setLastFetched(new Date());

          // Update individual states
          setMetrics(response.data.overview);
          setRecommendations(response.data.recommendations || []);
          setProgress(response.data.progress);
          setAchievements(response.data.achievements);
          setActivity(response.data.activity || []);
          setInsights(response.data.insights);
        } else {
          throw new Error(response.error || "Failed to fetch dashboard data");
        }
      } catch (err) {
        console.error("Dashboard data fetch error:", err);
        setError(err.message || "Failed to fetch dashboard data");
      } finally {
        setLoading(false);
        setIsRefreshing(false);
      }
    },
    [user, isLoaded, getToken]
  );

  // Fetch specific data sections
  const fetchMetrics = useCallback(async () => {
    if (!user || !isLoaded) return;

    try {
      const token = await getToken();
      if (!token) return;

      const response = await DashboardAPI.getPerformanceMetrics(token);
      if (response.success) {
        setMetrics(response.data.metrics);
      }
    } catch (err) {
      console.error("Metrics fetch error:", err);
    }
  }, [user, isLoaded, getToken]);

  const fetchRecommendations = useCallback(async () => {
    if (!user || !isLoaded) return;

    try {
      const token = await getToken();
      if (!token) return;

      const response = await DashboardAPI.getSmartRecommendations(token);
      if (response.success) {
        setRecommendations(response.data.recommendations || []);
      }
    } catch (err) {
      console.error("Recommendations fetch error:", err);
    }
  }, [user, isLoaded, getToken]);

  const fetchProgress = useCallback(async () => {
    if (!user || !isLoaded) return;

    try {
      const token = await getToken();
      if (!token) return;

      const response = await DashboardAPI.getProgressTracking(token);
      if (response.success) {
        setProgress(response.data);
      }
    } catch (err) {
      console.error("Progress fetch error:", err);
    }
  }, [user, isLoaded, getToken]);

  const fetchAchievements = useCallback(async () => {
    if (!user || !isLoaded) return;

    try {
      const token = await getToken();
      if (!token) return;

      const response = await DashboardAPI.getAchievementBadges(token);
      if (response.success) {
        setAchievements(response.data);
      }
    } catch (err) {
      console.error("Achievements fetch error:", err);
    }
  }, [user, isLoaded, getToken]);

  const fetchActivity = useCallback(
    async (options = {}) => {
      if (!user || !isLoaded) return;

      try {
        const token = await getToken();
        if (!token) return;

        const response = await DashboardAPI.getRecentActivity(token, options);
        if (response.success) {
          setActivity(response.data.activities || []);
        }
      } catch (err) {
        console.error("Activity fetch error:", err);
      }
    },
    [user, isLoaded, getToken]
  );

  const fetchInsights = useCallback(async () => {
    if (!user || !isLoaded) return;

    try {
      const token = await getToken();
      if (!token) return;

      const response = await DashboardAPI.getAIInsights(token);
      if (response.success) {
        setInsights(response.data);
      }
    } catch (err) {
      console.error("Insights fetch error:", err);
    }
  }, [user, isLoaded, getToken]);

  // Initial data fetch
  useEffect(() => {
    if (isLoaded && user) {
      fetchDashboardData();
    }
  }, [isLoaded, user, fetchDashboardData]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      fetchDashboardData(true);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [data, fetchDashboardData]);

  // Manual refresh
  const refresh = useCallback(() => {
    fetchDashboardData(true);
  }, [fetchDashboardData]);

  // Refresh specific sections
  const refreshMetrics = useCallback(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  const refreshRecommendations = useCallback(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  const refreshProgress = useCallback(() => {
    fetchProgress();
  }, [fetchProgress]);

  const refreshAchievements = useCallback(() => {
    fetchAchievements();
  }, [fetchAchievements]);

  const refreshActivity = useCallback(
    (options = {}) => {
      fetchActivity(options);
    },
    [fetchActivity]
  );

  const refreshInsights = useCallback(() => {
    fetchInsights();
  }, [fetchInsights]);

  // Computed values
  const userProfile = useMemo(() => data?.user || null, [data]);
  const overviewMetrics = useMemo(
    () => data?.overview || metrics,
    [data, metrics]
  );
  const performanceInsights = useMemo(() => data?.performance || null, [data]);

  const highPriorityRecommendations = useMemo(
    () => recommendations.filter((r) => r.priority === "high"),
    [recommendations]
  );

  const mediumPriorityRecommendations = useMemo(
    () => recommendations.filter((r) => r.priority === "medium"),
    [recommendations]
  );

  const lowPriorityRecommendations = useMemo(
    () => recommendations.filter((r) => r.priority === "low"),
    [recommendations]
  );

  const earnedBadges = useMemo(
    () => achievements?.earned || [],
    [achievements]
  );

  const availableBadges = useMemo(
    () => achievements?.available || [],
    [achievements]
  );

  const recentActivity = useMemo(() => activity.slice(0, 5), [activity]);

  const overallProgress = useMemo(
    () => progress?.overall_progress || { percentage: 0, level: "Beginner" },
    [progress]
  );

  return {
    // Main data
    data,
    userProfile,
    overviewMetrics,
    performanceInsights,
    recommendations,
    progress,
    achievements,
    activity,
    insights,

    // Computed values
    highPriorityRecommendations,
    mediumPriorityRecommendations,
    lowPriorityRecommendations,
    earnedBadges,
    availableBadges,
    recentActivity,
    overallProgress,

    // State
    loading,
    error,
    isRefreshing,
    lastFetched,
    isAuthenticated: !!user,

    // Actions
    refresh,
    refreshMetrics,
    refreshRecommendations,
    refreshProgress,
    refreshAchievements,
    refreshActivity,
    refreshInsights,

    // Individual fetch functions
    fetchMetrics,
    fetchRecommendations,
    fetchProgress,
    fetchAchievements,
    fetchActivity,
    fetchInsights,
  };
};

/**
 * Hook for dashboard analytics and insights
 */
export const useDashboardAnalytics = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnalytics = useCallback(
    async (period = "30d") => {
      if (!user || !isLoaded) return;

      try {
        setLoading(true);
        setError(null);

        const token = await getToken();
        if (!token) {
          throw new Error("No authentication token available");
        }

        const response = await DashboardAPI.getPerformanceMetrics(token, {
          period,
        });
        if (response.success) {
          setAnalytics(response.data);
        } else {
          throw new Error(response.error || "Failed to fetch analytics");
        }
      } catch (err) {
        console.error("Analytics fetch error:", err);
        setError(err.message || "Failed to fetch analytics");
      } finally {
        setLoading(false);
      }
    },
    [user, isLoaded, getToken]
  );

  useEffect(() => {
    if (isLoaded && user) {
      fetchAnalytics();
    }
  }, [isLoaded, user, fetchAnalytics]);

  return {
    analytics,
    loading,
    error,
    fetchAnalytics,
    isAuthenticated: !!user,
  };
};

export default useDashboard;
