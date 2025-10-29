import { api } from "./api.js";

/**
 * Dashboard API service with enhanced features and better UX
 */
export const DashboardAPI = {
  /**
   * Get comprehensive dashboard analytics (single optimized request)
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} Complete dashboard analytics
   */
  async getDashboardAnalytics(token) {
    try {
      const response = await api.get("/api/dashboard/analytics", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard analytics:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get detailed performance metrics
   * @param {string} token - Clerk authentication token
   * @param {Object} options - Query options
   * @param {string} options.period - Time period (30d, 7d, 90d)
   * @returns {Promise<Object>} Performance metrics
   */
  async getPerformanceMetrics(token, options = {}) {
    try {
      const params = new URLSearchParams();
      if (options.period) params.append("period", options.period);

      const response = await api.get(`/api/dashboard/metrics?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching performance metrics:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get personalized recommendations
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} Smart recommendations
   */
  async getSmartRecommendations(token) {
    try {
      const response = await api.get("/api/dashboard/recommendations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get progress tracking data
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} Progress tracking data
   */
  async getProgressTracking(token) {
    try {
      const response = await api.get("/api/dashboard/progress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching progress tracking:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get achievement badges
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} Achievement badges data
   */
  async getAchievementBadges(token) {
    try {
      const response = await api.get("/api/dashboard/achievements", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching achievement badges:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get recent activity timeline
   * @param {string} token - Clerk authentication token
   * @param {Object} options - Query options
   * @param {number} options.limit - Number of activities
   * @param {string} options.type - Activity type filter
   * @returns {Promise<Object>} Activity timeline
   */
  async getRecentActivity(token, options = {}) {
    try {
      const params = new URLSearchParams();
      if (options.limit) params.append("limit", options.limit);
      if (options.type) params.append("type", options.type);

      const response = await api.get(`/api/dashboard/activity?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching recent activity:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get AI-powered insights
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} AI insights
   */
  async getAIInsights(token) {
    try {
      const response = await api.get("/api/dashboard/insights", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching AI insights:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Handle API errors consistently
   * @param {Error} error - API error
   * @returns {Error} Formatted error
   */
  handleError(error) {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 401:
          return new Error("Authentication required. Please sign in again.");
        case 403:
          return new Error(
            "Access denied. You don't have permission to access this data."
          );
        case 404:
          return new Error("Data not found. Please try again later.");
        case 429:
          return new Error(
            "Too many requests. Please wait a moment and try again."
          );
        case 500:
          return new Error("Server error. Please try again later.");
        default:
          return new Error(
            data?.error || `Request failed with status ${status}`
          );
      }
    } else if (error.request) {
      // Request was made but no response received
      return new Error(
        "Network error. Please check your connection and try again."
      );
    } else {
      // Something else happened
      return new Error(error.message || "An unexpected error occurred.");
    }
  },
};

export default DashboardAPI;
