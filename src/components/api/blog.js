import { api } from "./api.js";

/**
 * Blog API service for fetching blog posts
 */
export const BlogAPI = {
  /**
   * Get all published blog posts with pagination
   * @param {Object} options - Query options
   * @param {number} options.page - Page number (default: 1)
   * @param {number} options.limit - Items per page (default: 10)
   * @param {string} options.search - Search term
   * @returns {Promise<Object>} Blog posts data with pagination
   */
  async getBlogs(options = {}) {
    try {
      const params = new URLSearchParams();
      if (options.page) params.append("page", options.page);
      if (options.limit) params.append("limit", options.limit);
      if (options.search) params.append("search", options.search);

      const response = await api.get(`/api/blog?${params}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get a specific blog post by slug
   * @param {string} slug - Blog post slug
   * @returns {Promise<Object>} Blog post data
   */
  async getBlogBySlug(slug) {
    try {
      const response = await api.get(`/api/blog/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Handle API errors
   */
  handleError(error) {
    if (error.response) {
      return {
        success: false,
        error: error.response.data?.error || "An error occurred",
        status: error.response.status,
      };
    } else if (error.request) {
      return {
        success: false,
        error: "No response from server",
      };
    } else {
      return {
        success: false,
        error: error.message || "An unexpected error occurred",
      };
    }
  },
};

