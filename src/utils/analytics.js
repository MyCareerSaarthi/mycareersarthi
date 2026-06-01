const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const trackEvent = async (type, eventName, properties = {}) => {
  try {
    await fetch(`${API_URL}/analytics/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type, eventName, properties }),
    });
  } catch (error) {
    console.error("Failed to track event:", error);
  }
};

export const trackClick = (eventName, properties = {}) => {
  return trackEvent("click", eventName, properties);
};

export const trackRetention = (eventName, properties = {}) => {
  return trackEvent("retention", eventName, properties);
};
