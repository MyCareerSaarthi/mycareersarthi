import { api } from "./api.js";

/**
 * Modern Reports API service with filtering, searching, and pagination
 */
export const ModernReportsAPI = {
  /**
   * Get all reports with filtering, searching, and pagination
   * @param {string} token - Clerk authentication token
   * @param {Object} options - Query options
   * @param {number} options.page - Page number (default: 1)
   * @param {number} options.limit - Items per page (default: 10)
   * @param {string} options.type - Report type filter ('all', 'linkedin', 'resume', 'comparison')
   * @param {string} options.sortBy - Sort field ('created_at', 'updated_at', 'score')
   * @param {string} options.sortOrder - Sort order ('asc', 'desc')
   * @param {string} options.search - Search term
   * @param {number} options.scoreMin - Minimum score filter
   * @param {number} options.scoreMax - Maximum score filter
   * @param {string} options.dateFrom - Date from filter (ISO string)
   * @param {string} options.dateTo - Date to filter (ISO string)
   * @param {string} options.status - Status filter
   * @returns {Promise<Object>} Reports data with pagination
   */
  async getReports(token, options = {}) {
    try {
      const params = new URLSearchParams();

      // Add query parameters
      if (options.page) params.append("page", options.page);
      if (options.limit) params.append("limit", options.limit);
      if (options.type) params.append("type", options.type);
      if (options.sortBy) params.append("sortBy", options.sortBy);
      if (options.sortOrder) params.append("sortOrder", options.sortOrder);
      if (options.search) params.append("search", options.search);
      if (
        options.scoreMin !== undefined &&
        options.scoreMin !== null &&
        !isNaN(options.scoreMin) &&
        isFinite(options.scoreMin)
      )
        params.append("scoreMin", options.scoreMin);
      if (
        options.scoreMax !== undefined &&
        options.scoreMax !== null &&
        !isNaN(options.scoreMax) &&
        isFinite(options.scoreMax)
      )
        params.append("scoreMax", options.scoreMax);
      if (options.dateFrom) params.append("dateFrom", options.dateFrom);
      if (options.dateTo) params.append("dateTo", options.dateTo);
      if (options.status) params.append("status", options.status);

      const response = await api.get(`/api/dashboard/reports?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response?.data || { success: false, error: "No data received" };
    } catch (error) {
      console.error("Error fetching reports:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get a specific report by ID and type
   * @param {string} token - Clerk authentication token
   * @param {string} reportId - Report ID
   * @param {string} reportType - Report type ('linkedin', 'resume', or 'comparison')
   * @returns {Promise<Object>} Report data
   */
  async getReportById(token, reportId, reportType) {
    try {
      const response = await api.get(
        `/api/dashboard/reports/${reportType}/${reportId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response?.data || { success: false, error: "No data received" };
    } catch (error) {
      console.error("Error fetching report by ID:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Delete a specific report by ID and type
   * @param {string} token - Clerk authentication token
   * @param {string} reportId - Report ID
   * @param {string} reportType - Report type ('linkedin', 'resume', or 'comparison')
   * @returns {Promise<Object>} Deletion result
   */
  async deleteReport(token, reportId, reportType) {
    try {
      const response = await api.delete(
        `/api/dashboard/reports/${reportType}/${reportId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response?.data || { success: false, error: "No data received" };
    } catch (error) {
      console.error("Error deleting report:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get reports statistics
   * @param {string} token - Clerk authentication token
   * @returns {Promise<Object>} Reports statistics
   */
  async getReportsStatistics(token) {
    try {
      const response = await api.get("/api/dashboard/reports/statistics", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response?.data || { success: false, error: "No data received" };
    } catch (error) {
      console.error("Error fetching reports statistics:", error);
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
          return new Error("Report not found. Please try again.");
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

export default ModernReportsAPI;
