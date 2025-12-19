import { api } from "./api.js";

/**
 * Booking API service for managing bookings
 */
export const BookingAPI = {
  /**
   * Create a new booking
   * @param {Object} bookingData - Booking data
   * @param {string} bookingData.firstName - First name
   * @param {string} bookingData.lastName - Last name
   * @param {string} bookingData.email - Email address
   * @param {string} [bookingData.phone] - Phone number (optional)
   * @param {string} [bookingData.serviceType] - Service type: 'interview_preparation', 'career_guidance', or 'both'
   * @param {string} [bookingData.message] - Additional message (optional)
   * @param {string} [bookingData.preferredDate] - Preferred date/time (optional)
   * @returns {Promise<Object>} Created booking data
   */
  async createBooking(bookingData) {
    try {
      const response = await api.post("/api/booking", bookingData);
      return response.data;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get all bookings with optional filters
   * @param {Object} [options] - Query options
   * @param {number} [options.page] - Page number (default: 1)
   * @param {number} [options.limit] - Items per page (default: 10)
   * @param {string} [options.status] - Filter by status: 'pending', 'confirmed', 'completed', 'cancelled'
   * @param {string} [options.serviceType] - Filter by service type
   * @returns {Promise<Object>} Bookings data with pagination
   */
  async getBookings(options = {}) {
    try {
      const params = new URLSearchParams();
      if (options.page) params.append("page", options.page);
      if (options.limit) params.append("limit", options.limit);
      if (options.status) params.append("status", options.status);
      if (options.serviceType) params.append("serviceType", options.serviceType);

      const response = await api.get(`/api/booking?${params}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Get a specific booking by ID
   * @param {string} bookingId - Booking ID
   * @returns {Promise<Object>} Booking data
   */
  async getBookingById(bookingId) {
    try {
      const response = await api.get(`/api/booking/${bookingId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching booking:", error);
      throw this.handleError(error);
    }
  },

  /**
   * Update a booking
   * @param {string} bookingId - Booking ID
   * @param {Object} updateData - Data to update
   * @param {string} [updateData.status] - New status
   * @param {string} [updateData.adminNotes] - Admin notes
   * @returns {Promise<Object>} Updated booking data
   */
  async updateBooking(bookingId, updateData) {
    try {
      const response = await api.patch(`/api/booking/${bookingId}`, updateData);
      return response.data;
    } catch (error) {
      console.error("Error updating booking:", error);
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

