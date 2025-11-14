import { api } from "../api/api";

const handlePayment = async (
  serviceType,
  token,
  user,
  formData,
  onLoadingChange,
  onErrorChange
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

    if (!orderId || !amount) {
      throw new Error("Invalid order response - missing order ID or amount");
    }

    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "MyCareerSarthi",
      order_id: orderId,
      handler: function (razorpayResponse) {
        handleVerifyPayment(
          razorpayResponse,
          token,
          serviceType,
          onLoadingChange,
          onErrorChange
        );
      },
      prefill: {
        name: `${user?.firstName} ${user?.lastName}`,
        email: user?.emailAddresses?.[0]?.emailAddress,
      },
      notes: {
        analysis_request_id: analysisRequestId,
      },
      modal: {
        ondismiss: function () {
          onErrorChange?.(
            "Payment cancelled. Please try again if you wish to proceed."
          );
        },
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error("Payment initiation failed:", error);
    const errorMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Failed to initiate payment. Please try again or contact support.";
    onErrorChange?.(errorMessage);
    throw error;
  } finally {
    onLoadingChange?.(false);
  }
};

const handleVerifyPayment = async (
  response,
  token,
  serviceType,
  onLoadingChange,
  onErrorChange
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

    // Small delay to ensure database is updated
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
    // Extract error message from response
    const errorMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Payment verification failed. Please try again or contact support.";

    onErrorChange?.(errorMessage);
    throw error;
  } finally {
    onLoadingChange?.(false);
  }
};
export { handlePayment, handleVerifyPayment };
