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
   * Get like status for a blog post
   * @param {string} slug - Blog post slug
   * @returns {Promise<Object>} Like status { liked, likes_count }
   */
  async getLikeStatus(slug) {
    try {
      const response = await api.get(`/api/blog/${slug}/like`);
      return response.data;
    } catch (error) {
      console.error("Error getting like status:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Like a blog post
   * @param {string} slug - Blog post slug
   * @returns {Promise<Object>} Updated like status
   */
  async likeBlog(slug) {
    try {
      const response = await api.post(`/api/blog/${slug}/like`);
      return response.data;
    } catch (error) {
      console.error("Error liking blog:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Unlike a blog post
   * @param {string} slug - Blog post slug
   * @returns {Promise<Object>} Updated like status
   */
  async unlikeBlog(slug) {
    try {
      const response = await api.delete(`/api/blog/${slug}/like`);
      return response.data;
    } catch (error) {
      console.error("Error unliking blog:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get comments for a blog post
   * @param {string} slug - Blog post slug
   * @param {Object} options - Pagination options
   * @returns {Promise<Object>} Comments with pagination
   */
  async getComments(slug, options = {}) {
    try {
      const params = new URLSearchParams();
      if (options.page) params.append("page", options.page);
      if (options.limit) params.append("limit", options.limit);

      const response = await api.get(`/api/blog/${slug}/comments?${params}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Add a comment to a blog post
   * @param {string} slug - Blog post slug
   * @param {Object} data - Comment data { author_name, author_email, content }
   * @returns {Promise<Object>} Result
   */
  async addComment(slug, data) {
    try {
      const response = await api.post(`/api/blog/${slug}/comments`, data);
      return response.data;
    } catch (error) {
      console.error("Error adding comment:", error);
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
