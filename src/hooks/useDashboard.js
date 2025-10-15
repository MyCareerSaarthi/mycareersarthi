import { useState, useEffect, useCallback } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { DashboardAPI } from "@/components/api/dashboard";

/**
 * Improved dashboard hook with better state management and error handling
 */
export const useDashboard = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fetch dashboard data
  const fetchData = useCallback(
    async (isRefresh = false) => {
      if (!user || !isLoaded) return;

      try {
        if (!isRefresh) {
          setLoading(true);
        } else {
          setIsRefreshing(true);
        }
        setError(null);

        // Get authentication token
        const token = await getToken();
        console.log("token: ", token);
        if (!token) {
          throw new Error("No authentication token available");
        }

        // Fetch dashboard data
        const response = await DashboardAPI.getDashboardData(token);

        if (response.success) {
          setData(response.data);
          setLastFetched(new Date());
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

  // Initial data fetch
  useEffect(() => {
    if (isLoaded && user) {
      fetchData();
    }
  }, [isLoaded, user, fetchData]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      fetchData(true);
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, [data, fetchData]);

  // Manual refresh
  const refresh = useCallback(() => {
    fetchData(true);
  }, [fetchData]);

  // Get specific data sections
  const stats = data?.stats || null;
  const recentReports = data?.recentReports || [];
  const recentPayments = data?.recentPayments || [];
  const recommendations = data?.recommendations || [];
  const monthlyTrends = data?.monthlyTrends || [];
  const userInfo = data?.user || null;

  return {
    // Data
    data,
    stats,
    recentReports,
    recentPayments,
    recommendations,
    monthlyTrends,
    userInfo,

    // State
    loading,
    error,
    isRefreshing,
    lastFetched,
    isAuthenticated: !!user,

    // Actions
    refresh,
    refetch: fetchData,
  };
};

/**
 * Hook for reports page with pagination
 */
export const useReports = (type = "all", limit = 10) => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchReports = useCallback(
    async (pageNum = 1, isLoadMore = false) => {
      if (!user || !isLoaded) return;

      try {
        if (!isLoadMore) {
          setLoading(true);
        }
        setError(null);

        const token = await getToken();
        if (!token) {
          throw new Error("No authentication token available");
        }

        const response = await DashboardAPI.getReports(token, {
          type,
          limit,
          page: pageNum,
        });

        if (response.success) {
          const newReports = response.data;

          if (isLoadMore) {
            setReports((prev) => [...prev, ...newReports]);
          } else {
            setReports(newReports);
          }

          setHasMore(newReports.length === limit);
          setPage(pageNum);
        } else {
          throw new Error(response.error || "Failed to fetch reports");
        }
      } catch (err) {
        console.error("Reports fetch error:", err);
        setError(err.message || "Failed to fetch reports");
      } finally {
        setLoading(false);
      }
    },
    [user, isLoaded, getToken, type, limit]
  );

  // Initial fetch
  useEffect(() => {
    if (isLoaded && user) {
      fetchReports(1, false);
    }
  }, [isLoaded, user, fetchReports]);

  // Load more
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchReports(page + 1, true);
    }
  }, [loading, hasMore, page, fetchReports]);

  // Refresh
  const refresh = useCallback(() => {
    setPage(1);
    setHasMore(true);
    fetchReports(1, false);
  }, [fetchReports]);

  return {
    reports,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
    isAuthenticated: !!user,
  };
};

/**
 * Hook for activity timeline
 */
export const useActivity = (days = 30) => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchActivity = useCallback(async () => {
    if (!user || !isLoaded) return;

    try {
      setLoading(true);
      setError(null);

      const token = await getToken();
      if (!token) {
        throw new Error("No authentication token available");
      }

      const response = await DashboardAPI.getActivity(token, days);

      if (response.success) {
        setActivities(response.data);
      } else {
        throw new Error(response.error || "Failed to fetch activity");
      }
    } catch (err) {
      console.error("Activity fetch error:", err);
      setError(err.message || "Failed to fetch activity");
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded, getToken, days]);

  useEffect(() => {
    if (isLoaded && user) {
      fetchActivity();
    }
  }, [isLoaded, user, fetchActivity]);

  return {
    activities,
    loading,
    error,
    refresh: fetchActivity,
    isAuthenticated: !!user,
  };
};

export default useDashboard;
