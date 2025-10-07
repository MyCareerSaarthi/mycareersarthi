import { api } from "./api.js";

/**
 * Improved Dashboard API service with better error handling and performance
 */
export const DashboardAPI = {
  /**
   * Get comprehensive dashboard data (single optimized request)
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} Complete dashboard data
   */
  async getDashboardData(token) {
    try {
      const response = await api.get("/api/dashboard/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get user statistics
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} User statistics
   */
  async getStats(token) {
    try {
      const response = await api.get("/api/dashboard/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching stats:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get user reports with pagination
   * @param {string} token - Clerk authentication token
   * @param {Object} options - Query options
   * @param {string} options.type - Report type (linkedin, resume, all)
   * @param {number} options.limit - Number of reports
   * @param {number} options.page - Page number
   * @returns {Promise<Object>} Reports data
   */
  async getReports(token, options = {}) {
    try {
      const params = new URLSearchParams();
      if (options.type) params.append("type", options.type);
      if (options.limit) params.append("limit", options.limit.toString());
      if (options.page) params.append("page", options.page.toString());

      const response = await api.get(`/api/dashboard/reports?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching reports:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get activity timeline
   * @param {string} token - Clerk authentication token
   * @param {number} days - Number of days to look back
   * @returns {Promise<Object>} Activity timeline
   */
  async getActivity(token, days = 30) {
    try {
      const response = await api.get(`/api/dashboard/activity?days=${days}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching activity:", error);
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
