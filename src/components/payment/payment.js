import { api } from "../api/api";

const handlePayment = async (
  serviceType,
  token,
  user,
  formData,
  onLoadingChange
) => {
  try {
    onLoadingChange?.(true);
    const response = await api.post(
      `/api/rag/create-rag-report?analysisType=${serviceType}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const orderId = response?.data?.id;
    const amount = response?.data?.amount;
    const analysisRequestId = response?.data?.analysis_request_id;
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "MyCareerSarthi",
      order_id: orderId,
      handler: function (response) {
        handleVerifyPayment(response, token, serviceType, onLoadingChange);
      },
      prefill: {
        name: `${user?.firstName} ${user?.lastName}`, //your customer's name
        email: user?.emailAddresses?.[0]?.emailAddress,
      },
      notes: {
        analysis_request_id: analysisRequestId,
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error("Payment initiation failed:", error);
    throw error;
  } finally {
    onLoadingChange?.(false);
  }
};

const handleVerifyPayment = async (
  response,
  token,
  serviceType,
  onLoadingChange
) => {
  try {
    onLoadingChange?.(true);
    const verifyResponse = await api.post(
      `/api/rag/verify-payment`,
      JSON.stringify(response),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // Only redirect if we have a reportId or comparisonId
    if (verifyResponse?.data?.reportId) {
      window.location.href = `/${serviceType}/report?id=${verifyResponse?.data?.reportId}`;
    } else if (verifyResponse?.data?.comparisonId) {
      // For comparison, redirect to report page
      // If we have comparison data, store it and use storageKey
      if (verifyResponse?.data?.comparisonResult) {
        const storageKey = `comparison_${Date.now()}`;
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(
              storageKey,
              JSON.stringify(verifyResponse.data.comparisonResult)
            );
          } catch (e) {
            console.error("Error storing in localStorage:", e);
          }
        }
        try {
          const resultParam = encodeURIComponent(
            JSON.stringify(verifyResponse.data.comparisonResult)
          );
          if (resultParam.length < 1500) {
            window.location.href = `/compare/report?result=${resultParam}`;
          } else {
            window.location.href = `/compare/report?storageKey=${storageKey}`;
          }
        } catch (err) {
          window.location.href = `/compare/report?storageKey=${storageKey}`;
        }
      } else {
        // Just use ID to fetch from API
        window.location.href = `/compare/report?id=${verifyResponse?.data?.comparisonId}`;
      }
    }
  } catch (error) {
    console.error("Payment verification failed:", error);
    // Don't throw here - let the error be handled by the calling component
    // The error will be caught by the socket listener or component error handler
    throw error;
  } finally {
    onLoadingChange?.(false);
  }
};

export { handlePayment, handleVerifyPayment };
