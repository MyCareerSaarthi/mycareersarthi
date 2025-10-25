"use client";
import React, { useEffect, useState } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import { api } from "@/components/api/api";
import { useAuth, useUser } from "@clerk/nextjs";
import { io } from "socket.io-client";
const socket = io(process.env.NEXT_PUBLIC_API_URL);
const Payment = () => {
  const { getToken } = useAuth();
  const user = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const userId = "user_32viUnSzPo6xcQ5kkZT9R6PhxFQ";
  const linkedinUrl = "https://www.linkedin.com/in/rohanphulkar/";
  const roleId = "99e7ab9d-5e71-432c-988c-c764035a54ce";
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("linkedinUrl", linkedinUrl);
  formData.append("roleId", roleId);
  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const token = await getToken();
      const response = await api.post(
        "/api/rag/create-rag-report?analysisType=linkedin",
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
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount, // Amount is in currency subunits.
        currency: "INR",
        name: "MyCareerSarthi", //your business name
        description: "Profile Analysis Service",
        image: "https://example.com/your_logo",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          handleVerifyPayment(response);
        },
        prefill: {
          name: `${user?.firstName} ${user?.lastName}`, //your customer's name
          email: user?.emailAddresses?.[0]?.emailAddress,
        },
        notes: {
          analysis_request_id: analysisRequestId,
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleVerifyPayment = async (response) => {
    setIsVerifying(true);
    try {
      const token = await getToken();
      const verifyResponse = await api.post(
        "/api/rag/verify-payment",
        JSON.stringify(response),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Payment verification failed:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    socket.emit("register", userId);

    // Listen for messages from server
    socket.on("updateProcess", (data) => {
    });
  }, [socket]);
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingButton
        onClick={handlePayment}
        isLoading={isLoading || isVerifying}
        loadingText={isLoading ? "Processing..." : "Verifying..."}
        className="min-w-[120px]"
      >
        Pay
      </LoadingButton>
    </div>
  );
};

export default Payment;
