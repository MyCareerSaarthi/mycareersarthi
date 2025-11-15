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

    // Declare polling variables outside the options object
    let pollTimer = null;
    let modalOpen = true;
    const stopPolling = () => {
      modalOpen = false;
      if (pollTimer) clearInterval(pollTimer);
    };

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
          onErrorChange,
          analysisRequestId
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
          stopPolling();
          onErrorChange?.(
            "Payment cancelled. Please try again if you wish to proceed."
          );
        },
      },
    };

    var rzp1 = new window.Razorpay(options);
    // Start polling the analysis status in the background while user completes the payment
    rzp1.on("payment.failed", function () {
      stopPolling();
    });
    // The modal has an ondismiss property as well - use it to stop polling on cancel
    // Cancel handler must be attached to the modal options before instantiating the RZP object
    if (analysisRequestId) {
      // Poll every 1 second for faster detection (reduced from 3 seconds)
      pollTimer = setInterval(async () => {
        if (!modalOpen) return;
        try {
          const statusResp = await api.get(
            `/api/rag/status/${analysisRequestId}`
          );
          if (
            statusResp?.data?.status === "completed" &&
            statusResp?.data?.result_report_id
          ) {
            // store the result id so verify flow has it available when payment completes
            try {
              localStorage.setItem(
                "background_analysis_result_id",
                statusResp.data.result_report_id
              );
            } catch (e) {
              console.warn("Could not persist background result id", e);
            }
            stopPolling();
          }
        } catch (err) {
          // ignore transient errors
        }
      }, 1000); // Reduced from 3000ms to 1000ms for faster detection
    }
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
  onErrorChange,
  analysisRequestId = null
) => {
  // Keep loading screen ON throughout the entire process
  onLoadingChange?.(true);

  // Map serviceType to correct report route
  const getReportRoute = (type) => {
    if (type === "comparison") return "/compare/report";
    return `/${type}/report`;
  };

  try {
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

    // Only redirect if we have a reportId or comparisonId immediately
    // But still show loading screen for minimum 3 seconds for smooth UX
    const MIN_LOADING_TIME = 3000;

    if (verifyResponse?.data?.reportId) {
      setTimeout(() => {
        window.location.href = `${getReportRoute(serviceType)}?id=${
          verifyResponse?.data?.reportId
        }`;
      }, MIN_LOADING_TIME);
      return;
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
        setTimeout(() => {
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
        }, MIN_LOADING_TIME);
      } else {
        // Just use ID to fetch from API
        setTimeout(() => {
          window.location.href = `/compare/report?id=${verifyResponse?.data?.comparisonId}`;
        }, MIN_LOADING_TIME);
      }
      return;
    }

    // Check if the response indicates the process is still running
    // Backend returns 202 status or data.status === "running"/"pending" when still processing
    const isStillProcessing =
      verifyResponse?.status === 202 ||
      verifyResponse?.data?.status === "running" ||
      verifyResponse?.data?.status === "pending" ||
      (!verifyResponse?.data?.reportId && !verifyResponse?.data?.comparisonId);

    console.log("Payment verification response:", {
      status: verifyResponse?.status,
      dataStatus: verifyResponse?.data?.status,
      reportId: verifyResponse?.data?.reportId,
      comparisonId: verifyResponse?.data?.comparisonId,
      analysisRequestId,
      isStillProcessing,
    });

    if (isStillProcessing && analysisRequestId) {
      // Track when we started showing the loading screen (for minimum display time)
      const loadingStartTime = Date.now();
      const MIN_LOADING_TIME = 3000; // 3 seconds minimum
      let pollCount = 0;
      const MAX_POLL_ATTEMPTS = 300; // 10 minutes max (300 * 2 seconds)

      // Process is still running, start continuous polling (webhook-like behavior)
      const poll = async () => {
        pollCount++;
        console.log(
          `Polling attempt ${pollCount} for analysisRequestId: ${analysisRequestId}`
        );

        try {
          const statusResp = await api.get(
            `/api/rag/status/${analysisRequestId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Status response:", {
            status: statusResp?.data?.status,
            result_report_id: statusResp?.data?.result_report_id,
          });

          if (
            statusResp?.data?.status === "completed" &&
            statusResp?.data?.result_report_id
          ) {
            // Process completed!
            console.log("Analysis completed! Redirecting...");
            // Ensure minimum loading time (3-5 seconds) for smooth UX
            const elapsed = Date.now() - loadingStartTime;
            const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

            setTimeout(() => {
              // Redirect after minimum display time
              window.location.href = `${getReportRoute(serviceType)}?id=${
                statusResp.data.result_report_id
              }`;
            }, remainingTime);
            return;
          } else if (statusResp?.data?.status === "failed") {
            // Process failed
            console.error("Analysis failed:", statusResp?.data);
            onLoadingChange?.(false);
            onErrorChange?.(
              statusResp?.data?.error || "Analysis failed. Please try again."
            );
            return;
          } else {
            // Still processing (running, pending, or any other status)
            // Continue polling indefinitely - poll every 2 seconds
            if (pollCount >= MAX_POLL_ATTEMPTS) {
              console.error("Max poll attempts reached");
              onLoadingChange?.(false);
              onErrorChange?.(
                "Analysis is taking longer than expected. Please refresh the page or contact support."
              );
              return;
            }
            setTimeout(() => poll(), 2000);
          }
        } catch (err) {
          // On error, continue polling (might be transient network issue)
          // Don't give up - keep trying until we get a definitive status
          console.warn("Error polling status, retrying...", err);
          if (pollCount >= MAX_POLL_ATTEMPTS) {
            console.error("Max poll attempts reached after errors");
            onLoadingChange?.(false);
            onErrorChange?.(
              "Unable to check analysis status. Please refresh the page or contact support."
            );
            return;
          }
          setTimeout(() => poll(), 2000);
        }
      };

      // Start polling immediately (no delay)
      console.log("Starting polling for analysisRequestId:", analysisRequestId);
      poll();
      return; // Don't turn off loading - keep it visible while polling
    } else if (isStillProcessing && !analysisRequestId) {
      // Process is still running but we don't have analysisRequestId
      console.error(
        "Process is still running but no analysisRequestId available"
      );
      onLoadingChange?.(false);
      onErrorChange?.(
        "Unable to track analysis status. Please contact support with your payment ID."
      );
      return;
    }

    // Check if background analysis finished (from pre-payment polling)
    const backgroundReportId = analysisRequestId
      ? localStorage.getItem("background_analysis_result_id")
      : null;
    if (backgroundReportId) {
      // Clear from localStorage
      try {
        localStorage.removeItem("background_analysis_result_id");
      } catch (e) {
        // Ignore
      }
      // Ensure minimum loading time (3 seconds) for smooth UX
      const MIN_LOADING_TIME = 3000;
      setTimeout(() => {
        window.location.href = `${getReportRoute(
          serviceType
        )}?id=${backgroundReportId}`;
      }, MIN_LOADING_TIME);
      return;
    }

    // If we get here and have analysisRequestId but no immediate result, start polling
    // This handles edge cases where the response didn't indicate processing status clearly
    if (analysisRequestId) {
      console.log(
        "Starting fallback polling for analysisRequestId:",
        analysisRequestId
      );
      // Track when we started showing the loading screen (for minimum display time)
      const loadingStartTime = Date.now();
      const MIN_LOADING_TIME = 3000; // 3 seconds minimum
      let pollCount = 0;
      const MAX_POLL_ATTEMPTS = 300; // 10 minutes max (300 * 2 seconds)

      // Poll continuously until completion (webhook-like behavior)
      const poll = async () => {
        pollCount++;
        console.log(
          `Fallback polling attempt ${pollCount} for analysisRequestId: ${analysisRequestId}`
        );

        try {
          const statusResp = await api.get(
            `/api/rag/status/${analysisRequestId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Fallback status response:", {
            status: statusResp?.data?.status,
            result_report_id: statusResp?.data?.result_report_id,
          });

          if (
            statusResp?.data?.status === "completed" &&
            statusResp?.data?.result_report_id
          ) {
            // Process completed!
            console.log(
              "Analysis completed via fallback polling! Redirecting..."
            );
            // Ensure minimum loading time (3-5 seconds) for smooth UX
            const elapsed = Date.now() - loadingStartTime;
            const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

            setTimeout(() => {
              // Redirect after minimum display time
              window.location.href = `${getReportRoute(serviceType)}?id=${
                statusResp.data.result_report_id
              }`;
            }, remainingTime);
            return;
          } else if (statusResp?.data?.status === "failed") {
            // Process failed
            console.error(
              "Analysis failed via fallback polling:",
              statusResp?.data
            );
            onLoadingChange?.(false);
            onErrorChange?.(
              statusResp?.data?.error || "Analysis failed. Please try again."
            );
            return;
          } else {
            // Still processing (running, pending, or any other status)
            // Continue polling indefinitely - poll every 2 seconds
            if (pollCount >= MAX_POLL_ATTEMPTS) {
              console.error("Max poll attempts reached in fallback");
              onLoadingChange?.(false);
              onErrorChange?.(
                "Analysis is taking longer than expected. Please refresh the page or contact support."
              );
              return;
            }
            setTimeout(() => poll(), 2000);
          }
        } catch (err) {
          // On error, continue polling (might be transient network issue)
          // Don't give up - keep trying until we get a definitive status
          console.warn("Error in fallback polling, retrying...", err);
          if (pollCount >= MAX_POLL_ATTEMPTS) {
            console.error("Max poll attempts reached after errors in fallback");
            onLoadingChange?.(false);
            onErrorChange?.(
              "Unable to check analysis status. Please refresh the page or contact support."
            );
            return;
          }
          setTimeout(() => poll(), 2000);
        }
      };

      // Start polling immediately (no delay)
      poll();
      return; // Don't turn off loading - keep it visible while polling
    }

    // If we get here without analysisRequestId, something went wrong
    onLoadingChange?.(false);
    onErrorChange?.("Unable to track analysis status. Please contact support.");
  } catch (error) {
    console.error("Payment verification failed:", error);
    onLoadingChange?.(false);

    // Extract error message from response
    const errorMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Payment verification failed. Please try again or contact support.";

    onErrorChange?.(errorMessage);
    throw error;
  }
  // Note: We don't turn off loading in finally block anymore
  // Loading stays ON while polling, and only turns off on error or redirect
};
export { handlePayment, handleVerifyPayment };
