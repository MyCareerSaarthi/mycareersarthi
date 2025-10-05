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
    window.location.href = `/${serviceType}/report?id=${verifyResponse?.data?.reportId}`;
  } catch (error) {
    console.error("Payment verification failed:", error);
    throw error;
  } finally {
    onLoadingChange?.(false);
  }
};

export { handlePayment, handleVerifyPayment };
