import { api } from "../api/api";

const handlePayment = async (
  serviceType,
  token,
  user,
  formData,
  onLoadingChange,
  onErrorChange,
  getToken = null // Optional function to get fresh token
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
      handler: async function (razorpayResponse) {
        // Get fresh token if getToken function is provided
        const currentToken = getToken ? await getToken() : token;
        handleVerifyPayment(
          razorpayResponse,
          currentToken,
          serviceType,
          onLoadingChange,
          onErrorChange,
          analysisRequestId,
          getToken
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
          // Get fresh token before each polling request to avoid 401 errors
          const currentToken = getToken ? await getToken() : token;
          if (!currentToken) {
            console.warn("No token available for polling");
            return;
          }

          // Use fetch with full URL to bypass Next.js API route interception
          const baseUrl =
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
          const statusUrl = `${baseUrl}/api/rag/status/${analysisRequestId}`;

          const response = await fetch(statusUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${currentToken}`,
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            // Handle 401 specifically - token might have expired, try to get fresh token
            if (response.status === 401 && getToken) {
              console.warn(
                "401 error in pre-payment polling, token may have expired"
              );
              // Will retry with fresh token on next poll cycle
              return;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const statusResp = {
            data: await response.json(),
          };

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
          console.warn("Pre-payment polling error (ignored):", err);
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
  analysisRequestId = null,
  getToken = null // Optional function to get fresh token
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
      const poll = async (retryCount = 0) => {
        pollCount++;
        const MAX_RETRIES = 3;

        console.log(
          `Polling attempt ${pollCount} for analysisRequestId: ${analysisRequestId}${
            retryCount > 0 ? ` (retry ${retryCount})` : ""
          }`
        );

        try {
          // Get fresh token before each polling request to avoid 401 errors
          const currentToken = getToken ? await getToken() : token;
          if (!currentToken) {
            throw new Error("No authentication token available");
          }

          // Construct full URL to avoid Next.js API route conflicts
          // Next.js intercepts /api/* routes, so we need to use the full backend URL
          const baseUrl =
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
          // Ensure baseUrl doesn't have trailing slash
          const cleanBaseUrl = baseUrl.replace(/\/$/, "");
          // Ensure analysisRequestId is valid UUID format
          if (
            !analysisRequestId ||
            typeof analysisRequestId !== "string" ||
            analysisRequestId.trim() === ""
          ) {
            throw new Error("Invalid analysis request ID");
          }
          const cleanAnalysisId = analysisRequestId.trim();
          const statusUrl = `${cleanBaseUrl}/api/rag/status/${cleanAnalysisId}`;

          console.log(`[Poll] Calling status endpoint: ${statusUrl}`);

          // Use fetch directly with full URL to bypass Next.js API route interception
          const response = await fetch(statusUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${currentToken}`,
              "Content-Type": "application/json",
            },
            // Add cache control to prevent caching issues
            cache: "no-cache",
            // Follow redirects but we'll validate the response content
            redirect: "follow",
          });

          // Check final URL to ensure we got the right endpoint (before reading body)
          const finalUrl = response.url || statusUrl;
          if (!finalUrl.includes("/api/rag/status/")) {
            console.error(
              `[Poll] Response URL mismatch! Expected status endpoint, got: ${finalUrl}`
            );
            // Clone response to read body without consuming it (for debugging)
            try {
              const clonedResponse = response.clone();
              const text = await clonedResponse.text();
              console.error(`[Poll] Response body:`, text.substring(0, 200));
            } catch (e) {
              // Ignore if cloning/reading fails
            }
            if (retryCount < MAX_RETRIES) {
              console.log(
                `[Poll] Retrying in 2 seconds... (attempt ${
                  retryCount + 1
                }/${MAX_RETRIES})`
              );
              setTimeout(() => poll(retryCount + 1), 2000);
              return;
            }
            throw new Error(`Wrong endpoint reached: ${finalUrl}`);
          }

          if (!response.ok) {
            // Handle 404, 401, 403, etc. differently
            if (response.status === 404) {
              throw new Error(`Analysis request not found: ${cleanAnalysisId}`);
            } else if (response.status === 401 || response.status === 403) {
              throw new Error(
                "Authentication failed. Please refresh the page."
              );
            }
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const responseData = await response.json();

          const statusResp = {
            data: responseData,
            config: { url: finalUrl },
          };

          console.log("Status response:", {
            status: statusResp?.data?.status,
            result_report_id: statusResp?.data?.result_report_id,
            warning: statusResp?.data?.warning,
            timeElapsedMinutes: statusResp?.data?.timeElapsedMinutes,
            fullResponse: statusResp?.data,
            responseUrl: statusResp?.config?.url,
            requestUrl: statusUrl,
          });

          // Validate response structure
          if (!statusResp?.data) {
            console.error("Invalid status response - no data:", statusResp);
            if (retryCount < MAX_RETRIES) {
              console.log(
                `[Poll] Retrying in 2 seconds... (attempt ${
                  retryCount + 1
                }/${MAX_RETRIES})`
              );
              setTimeout(() => poll(retryCount + 1), 2000);
              return;
            }
            throw new Error("Invalid response from server");
          }

          // Check if we got the root route response (wrong endpoint) - validate by content
          if (
            statusResp?.data?.msg === "MyCareerSarthi API Server" ||
            statusResp?.data?.status === "Server running successfully" ||
            (statusResp?.data?.version && statusResp?.data?.worker)
          ) {
            console.error(
              `[Poll] Got root route response instead of status endpoint!`
            );
            console.error(`[Poll] Request URL: ${statusUrl}`);
            console.error(
              `[Poll] Response URL: ${statusResp?.config?.url || "unknown"}`
            );
            console.error(`[Poll] Full response:`, statusResp?.data);

            // Retry if we haven't exceeded max retries
            if (retryCount < MAX_RETRIES) {
              console.log(
                `[Poll] Retrying in 2 seconds... (attempt ${
                  retryCount + 1
                }/${MAX_RETRIES})`
              );
              setTimeout(() => poll(retryCount + 1), 2000);
              return;
            }

            // This means the API call went to the wrong endpoint after retries
            onLoadingChange?.(false);
            onErrorChange?.(
              `API endpoint error: Unable to reach status endpoint after ${MAX_RETRIES} retries. Please refresh the page or contact support with your analysis request ID: ${analysisRequestId}`
            );
            return;
          }

          // Check for invalid status values
          const validStatuses = ["pending", "running", "completed", "failed"];
          const responseStatus = statusResp?.data?.status;

          if (!validStatuses.includes(responseStatus)) {
            console.error(
              `Invalid status received: '${responseStatus}'. Full response:`,
              statusResp?.data
            );
            // If we get an invalid status, treat it as an error
            onLoadingChange?.(false);
            onErrorChange?.(
              `Unexpected response from server. Please contact support with your analysis request ID: ${analysisRequestId}`
            );
            return;
          }

          if (
            responseStatus === "completed" &&
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
          } else if (responseStatus === "failed") {
            // Process failed
            console.error("Analysis failed:", statusResp?.data);
            onLoadingChange?.(false);
            onErrorChange?.(
              statusResp?.data?.error ||
                statusResp?.data?.message ||
                "Analysis failed. Please try again."
            );
            return;
          } else if (
            responseStatus === "running" ||
            responseStatus === "pending"
          ) {
            // Still processing (running or pending)
            // Check if we've been polling for too long (more than 15 minutes)
            const totalElapsed = Date.now() - loadingStartTime;
            const FIFTEEN_MINUTES = 15 * 60 * 1000;

            if (totalElapsed > FIFTEEN_MINUTES) {
              console.error("Polling timeout - analysis taking too long");
              onLoadingChange?.(false);
              onErrorChange?.(
                "Analysis is taking longer than expected. The process may have encountered an issue. Please contact support with your analysis request ID: " +
                  analysisRequestId
              );
              return;
            }

            // Show warning if backend indicates it's taking too long
            if (
              statusResp?.data?.warning &&
              statusResp?.data?.timeElapsedMinutes > 15
            ) {
              console.warn(
                `Analysis has been running for ${statusResp.data.timeElapsedMinutes} minutes`
              );
            }

            // Continue polling - poll every 2 seconds
            if (pollCount >= MAX_POLL_ATTEMPTS) {
              console.error("Max poll attempts reached");
              onLoadingChange?.(false);
              onErrorChange?.(
                "Analysis is taking longer than expected. Please refresh the page or contact support."
              );
              return;
            }
            setTimeout(() => poll(0), 2000);
          } else {
            // Unknown status - should not happen after validation, but handle it
            console.error(
              `Unexpected status after validation: ${responseStatus}`
            );
            onLoadingChange?.(false);
            onErrorChange?.(
              `Unexpected analysis status: ${responseStatus}. Please contact support with your analysis request ID: ${analysisRequestId}`
            );
            return;
          }
        } catch (err) {
          // On error, check if we should retry
          console.warn(
            `Error polling status (retry ${retryCount}/${MAX_RETRIES}):`,
            err
          );

          // If we haven't exceeded retry limit, retry with incremented count
          if (retryCount < MAX_RETRIES) {
            console.log(
              `[Poll] Retrying after error in 2 seconds... (attempt ${
                retryCount + 1
              }/${MAX_RETRIES})`
            );
            setTimeout(() => poll(retryCount + 1), 2000);
            return;
          }

          // After retries exhausted, check if we've been polling for too long
          const totalElapsed = Date.now() - loadingStartTime;
          const FIFTEEN_MINUTES = 15 * 60 * 1000;

          if (
            totalElapsed > FIFTEEN_MINUTES ||
            pollCount >= MAX_POLL_ATTEMPTS
          ) {
            console.error("Max poll attempts reached after errors or timeout");
            onLoadingChange?.(false);
            onErrorChange?.(
              "Unable to check analysis status. Please refresh the page or contact support with your analysis request ID: " +
                analysisRequestId
            );
            return;
          }

          // Reset retry count for next poll cycle (network might be back)
          setTimeout(() => poll(0), 2000);
        }
      };

      // Start polling immediately (no delay)
      console.log("Starting polling for analysisRequestId:", analysisRequestId);
      poll(0);
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
      const poll = async (retryCount = 0) => {
        pollCount++;
        const MAX_RETRIES = 3;

        console.log(
          `Fallback polling attempt ${pollCount} for analysisRequestId: ${analysisRequestId}${
            retryCount > 0 ? ` (retry ${retryCount})` : ""
          }`
        );

        try {
          // Get fresh token before each polling request to avoid 401 errors
          const currentToken = getToken ? await getToken() : token;
          if (!currentToken) {
            throw new Error("No authentication token available");
          }

          // Construct full URL to avoid Next.js API route conflicts
          // Next.js intercepts /api/* routes, so we need to use the full backend URL
          const baseUrl =
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
          // Ensure baseUrl doesn't have trailing slash
          const cleanBaseUrl = baseUrl.replace(/\/$/, "");
          // Ensure analysisRequestId is valid
          if (
            !analysisRequestId ||
            typeof analysisRequestId !== "string" ||
            analysisRequestId.trim() === ""
          ) {
            throw new Error("Invalid analysis request ID");
          }
          const cleanAnalysisId = analysisRequestId.trim();
          const statusUrl = `${cleanBaseUrl}/api/rag/status/${cleanAnalysisId}`;

          console.log(`[Fallback Poll] Calling status endpoint: ${statusUrl}`);

          // Use fetch directly with full URL to bypass Next.js API route interception
          const response = await fetch(statusUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${currentToken}`,
              "Content-Type": "application/json",
            },
            // Add cache control to prevent caching issues
            cache: "no-cache",
            // Follow redirects but we'll validate the response content
            redirect: "follow",
          });

          // Check final URL to ensure we got the right endpoint (before reading body)
          const finalUrl = response.url || statusUrl;
          if (!finalUrl.includes("/api/rag/status/")) {
            console.error(
              `[Fallback Poll] Response URL mismatch! Expected status endpoint, got: ${finalUrl}`
            );
            // Clone response to read body without consuming it (for debugging)
            try {
              const clonedResponse = response.clone();
              const text = await clonedResponse.text();
              console.error(
                `[Fallback Poll] Response body:`,
                text.substring(0, 200)
              );
            } catch (e) {
              // Ignore if cloning/reading fails
            }
            if (retryCount < MAX_RETRIES) {
              console.log(
                `[Fallback Poll] Retrying in 2 seconds... (attempt ${
                  retryCount + 1
                }/${MAX_RETRIES})`
              );
              setTimeout(() => poll(retryCount + 1), 2000);
              return;
            }
            throw new Error(`Wrong endpoint reached: ${finalUrl}`);
          }

          if (!response.ok) {
            // Handle 404, 401, 403, etc. differently
            if (response.status === 404) {
              throw new Error(`Analysis request not found: ${cleanAnalysisId}`);
            } else if (response.status === 401 || response.status === 403) {
              throw new Error(
                "Authentication failed. Please refresh the page."
              );
            }
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const responseData = await response.json();

          const statusResp = {
            data: responseData,
            config: { url: finalUrl },
          };

          console.log("Fallback status response:", {
            status: statusResp?.data?.status,
            result_report_id: statusResp?.data?.result_report_id,
            warning: statusResp?.data?.warning,
            timeElapsedMinutes: statusResp?.data?.timeElapsedMinutes,
            fullResponse: statusResp?.data,
            responseUrl: statusResp?.config?.url,
            requestUrl: statusUrl,
          });

          // Validate response structure
          if (!statusResp?.data) {
            console.error(
              "Invalid fallback status response - no data:",
              statusResp
            );
            throw new Error("Invalid response from server");
          }

          // Check if we got the root route response (wrong endpoint) - validate by content
          if (
            statusResp?.data?.msg === "MyCareerSarthi API Server" ||
            statusResp?.data?.status === "Server running successfully" ||
            (statusResp?.data?.version && statusResp?.data?.worker)
          ) {
            console.error(
              `[Fallback Poll] Got root route response instead of status endpoint!`
            );
            console.error(`[Fallback Poll] Request URL: ${statusUrl}`);
            console.error(
              `[Fallback Poll] Response URL: ${
                statusResp?.config?.url || "unknown"
              }`
            );
            console.error(`[Fallback Poll] Full response:`, statusResp?.data);

            // Retry if we haven't exceeded max retries
            if (retryCount < MAX_RETRIES) {
              console.log(
                `[Fallback Poll] Retrying in 2 seconds... (attempt ${
                  retryCount + 1
                }/${MAX_RETRIES})`
              );
              setTimeout(() => poll(retryCount + 1), 2000);
              return;
            }

            // This means the API call went to the wrong endpoint after retries
            onLoadingChange?.(false);
            onErrorChange?.(
              `API endpoint error: Unable to reach status endpoint after ${MAX_RETRIES} retries. Please refresh the page or contact support with your analysis request ID: ${analysisRequestId}`
            );
            return;
          }

          // Check for invalid status values
          const validStatuses = ["pending", "running", "completed", "failed"];
          const responseStatus = statusResp?.data?.status;

          if (!validStatuses.includes(responseStatus)) {
            console.error(
              `Invalid status received in fallback: '${responseStatus}'. Full response:`,
              statusResp?.data
            );
            // If we get an invalid status, treat it as an error
            onLoadingChange?.(false);
            onErrorChange?.(
              `Unexpected response from server. Please contact support with your analysis request ID: ${analysisRequestId}`
            );
            return;
          }

          if (
            responseStatus === "completed" &&
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
          } else if (responseStatus === "failed") {
            // Process failed
            console.error(
              "Analysis failed via fallback polling:",
              statusResp?.data
            );
            onLoadingChange?.(false);
            onErrorChange?.(
              statusResp?.data?.error ||
                statusResp?.data?.message ||
                "Analysis failed. Please try again."
            );
            return;
          } else if (
            responseStatus === "running" ||
            responseStatus === "pending"
          ) {
            // Still processing (running or pending)
            // Check if we've been polling for too long (more than 15 minutes)
            const totalElapsed = Date.now() - loadingStartTime;
            const FIFTEEN_MINUTES = 15 * 60 * 1000;

            if (totalElapsed > FIFTEEN_MINUTES) {
              console.error(
                "Fallback polling timeout - analysis taking too long"
              );
              onLoadingChange?.(false);
              onErrorChange?.(
                "Analysis is taking longer than expected. The process may have encountered an issue. Please contact support with your analysis request ID: " +
                  analysisRequestId
              );
              return;
            }

            // Show warning if backend indicates it's taking too long
            if (
              statusResp?.data?.warning &&
              statusResp?.data?.timeElapsedMinutes > 15
            ) {
              console.warn(
                `Analysis has been running for ${statusResp.data.timeElapsedMinutes} minutes`
              );
            }

            // Continue polling - poll every 2 seconds
            if (pollCount >= MAX_POLL_ATTEMPTS) {
              console.error("Max poll attempts reached in fallback");
              onLoadingChange?.(false);
              onErrorChange?.(
                "Analysis is taking longer than expected. Please refresh the page or contact support."
              );
              return;
            }
            setTimeout(() => poll(0), 2000);
          } else {
            // Unknown status - should not happen after validation, but handle it
            console.error(
              `Unexpected status after validation in fallback: ${responseStatus}`
            );
            onLoadingChange?.(false);
            onErrorChange?.(
              `Unexpected analysis status: ${responseStatus}. Please contact support with your analysis request ID: ${analysisRequestId}`
            );
            return;
          }
        } catch (err) {
          // On error, check if we should retry
          console.warn(
            `Error in fallback polling (retry ${retryCount}/${MAX_RETRIES}):`,
            err
          );

          // If we haven't exceeded retry limit, retry with incremented count
          if (retryCount < MAX_RETRIES) {
            console.log(
              `[Fallback Poll] Retrying after error in 2 seconds... (attempt ${
                retryCount + 1
              }/${MAX_RETRIES})`
            );
            setTimeout(() => poll(retryCount + 1), 2000);
            return;
          }

          // After retries exhausted, check if we've been polling for too long
          const totalElapsed = Date.now() - loadingStartTime;
          const FIFTEEN_MINUTES = 15 * 60 * 1000;

          if (
            totalElapsed > FIFTEEN_MINUTES ||
            pollCount >= MAX_POLL_ATTEMPTS
          ) {
            console.error(
              "Max poll attempts reached after errors in fallback or timeout"
            );
            onLoadingChange?.(false);
            onErrorChange?.(
              "Unable to check analysis status. Please refresh the page or contact support with your analysis request ID: " +
                analysisRequestId
            );
            return;
          }

          // Reset retry count for next poll cycle (network might be back)
          setTimeout(() => poll(0), 2000);
        }
      };

      // Start polling immediately (no delay)
      poll(0);
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
