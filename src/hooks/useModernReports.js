import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@clerk/nextjs";
import { ModernReportsAPI } from "@/components/api/modern-reports";

/**
 * Custom hook for managing modern reports with filtering, searching, and pagination
 */
export const useModernReports = (initialOptions = {}) => {
  const { getToken } = useAuth();

  // State management
  const [reports, setReports] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 0,
    total_count: 0,
    limit: 10,
    has_next: false,
    has_prev: false,
  });

  // Filter and search state
  const [filters, setFilters] = useState({
    type: initialOptions.type || "all",
    search: "",
    scoreMin: null,
    scoreMax: null,
    dateFrom: null,
    dateTo: null,
    status: null,
    sortBy: "created_at",
    sortOrder: "desc",
    ...initialOptions,
  });

  /**
   * Fetch reports with current filters
   */
  const fetchReports = useCallback(
    async (page = 1, reset = false) => {
      try {
        setLoading(true);
        setError(null);

        const token = await getToken();
        if (!token) {
          throw new Error("Authentication token not available");
        }

        const options = {
          page,
          limit: filters.limit || 10,
          ...filters,
        };

        const response = await ModernReportsAPI.getReports(token, options);

        if (response.success) {
          const {
            reports: newReports = [],
            pagination: newPagination = {},
            statistics: newStats = {},
          } = response.data;

          if (reset || page === 1) {
            setReports(Array.isArray(newReports) ? newReports : []);
          } else {
            setReports((prev) => [
              ...(Array.isArray(prev) ? prev : []),
              ...(Array.isArray(newReports) ? newReports : []),
            ]);
          }

          setPagination(newPagination || {});
          setStatistics(newStats || {});
        } else {
          throw new Error(response.error || "Failed to fetch reports");
        }
      } catch (err) {
        console.error("Error fetching reports:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [getToken, filters]
  );

  /**
   * Update filters and refetch data
   */
  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  /**
   * Reset filters to initial state
   */
  const resetFilters = useCallback(() => {
    setFilters({
      type: "all",
      search: "",
      scoreMin: null,
      scoreMax: null,
      dateFrom: null,
      dateTo: null,
      status: null,
      sortBy: "created_at",
      sortOrder: "desc",
    });
  }, []);

  /**
   * Load more reports (pagination)
   */
  const loadMore = useCallback(() => {
    if (pagination.has_next && !loading) {
      fetchReports(pagination.current_page + 1, false);
    }
  }, [fetchReports, pagination.has_next, pagination.current_page, loading]);

  /**
   * Refresh reports (reload first page)
   */
  const refresh = useCallback(() => {
    fetchReports(1, true);
  }, [fetchReports]);

  /**
   * Search reports
   */
  const search = useCallback(
    (searchTerm) => {
      updateFilters({ search: searchTerm });
    },
    [updateFilters]
  );

  /**
   * Filter by type
   */
  const filterByType = useCallback(
    (type) => {
      updateFilters({ type });
    },
    [updateFilters]
  );

  /**
   * Sort reports
   */
  const sortReports = useCallback(
    (sortBy, sortOrder = "desc") => {
      updateFilters({ sortBy, sortOrder });
    },
    [updateFilters]
  );

  /**
   * Filter by score range
   */
  const filterByScore = useCallback(
    (scoreMin, scoreMax) => {
      // Validate and convert to numbers
      const validScoreMin =
        scoreMin !== null &&
        scoreMin !== undefined &&
        !isNaN(parseFloat(scoreMin)) &&
        isFinite(parseFloat(scoreMin))
          ? parseFloat(scoreMin)
          : null;
      const validScoreMax =
        scoreMax !== null &&
        scoreMax !== undefined &&
        !isNaN(parseFloat(scoreMax)) &&
        isFinite(parseFloat(scoreMax))
          ? parseFloat(scoreMax)
          : null;

      updateFilters({ scoreMin: validScoreMin, scoreMax: validScoreMax });
    },
    [updateFilters]
  );

  /**
   * Filter by date range
   */
  const filterByDateRange = useCallback(
    (dateFrom, dateTo) => {
      updateFilters({ dateFrom, dateTo });
    },
    [updateFilters]
  );

  /**
   * Delete a report
   */
  const deleteReport = useCallback(
    async (reportId, reportType) => {
      try {
        setLoading(true);
        setError(null);

        const token = await getToken();
        if (!token) {
          throw new Error("Authentication token not available");
        }

        const response = await ModernReportsAPI.deleteReport(
          token,
          reportId,
          reportType
        );

        if (response.success) {
          // Remove the deleted report from the list
          setReports((prev) => {
            const currentReports = Array.isArray(prev) ? prev : [];
            return currentReports.filter(
              (report) => report && report.id !== reportId
            );
          });

          // Update statistics
          setStatistics((prev) => {
            const currentStats = prev || {};
            const countKey =
              reportType === "linkedin"
                ? "linkedin_count"
                : reportType === "resume"
                ? "resume_count"
                : reportType === "comparison"
                ? "comparison_count"
                : null;
            return {
              ...currentStats,
              total_reports: (currentStats.total_reports || 0) - 1,
              ...(countKey && {
                [countKey]: (currentStats[countKey] || 0) - 1,
              }),
            };
          });

          return true;
        } else {
          throw new Error(response.error || "Failed to delete report");
        }
      } catch (err) {
        console.error("Error deleting report:", err);
        setError(err.message);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [getToken]
  );

  /**
   * Get a specific report by ID
   */
  const getReportById = useCallback(
    async (reportId, reportType) => {
      try {
        const token = await getToken();
        if (!token) {
          throw new Error("Authentication token not available");
        }

        const response = await ModernReportsAPI.getReportById(
          token,
          reportId,
          reportType
        );

        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.error || "Failed to fetch report");
        }
      } catch (err) {
        console.error("Error fetching report by ID:", err);
        throw err;
      }
    },
    [getToken]
  );

  /**
   * Fetch statistics only
   */
  const fetchStatistics = useCallback(async () => {
    try {
      const token = await getToken();
      if (!token) {
        throw new Error("Authentication token not available");
      }

      const response = await ModernReportsAPI.getReportsStatistics(token);

      if (response.success) {
        setStatistics(response.data);
      } else {
        throw new Error(response.error || "Failed to fetch statistics");
      }
    } catch (err) {
      console.error("Error fetching statistics:", err);
      setError(err.message);
    }
  }, [getToken]);

  // Initial data fetch
  useEffect(() => {
    fetchReports(1, true);
  }, [fetchReports]);

  // Computed values with null safety
  const hasMore = pagination?.has_next || false;
  const totalCount = pagination?.total_count || 0;
  const currentPage = pagination?.current_page || 1;
  const totalPages = pagination?.total_pages || 0;

  return {
    // Data
    reports,
    statistics,
    pagination,

    // State
    loading,
    error,
    filters,

    // Computed
    hasMore,
    totalCount,
    currentPage,
    totalPages,

    // Actions
    fetchReports,
    updateFilters,
    resetFilters,
    loadMore,
    refresh,
    search,
    filterByType,
    sortReports,
    filterByScore,
    filterByDateRange,
    deleteReport,
    getReportById,
    fetchStatistics,
  };
};

export default useModernReports;
