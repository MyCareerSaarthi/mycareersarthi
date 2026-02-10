"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

const FloatingUnlockTab = ({ reportId, isPaid, onUnlockSuccess }) => {
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    // Fetch pricing from database
    const fetchPricing = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/pricing?serviceType=linkedin`,
        );
        const data = await response.json();

        const linkedinPricing = data.pricing;

        setPricing({ price: linkedinPricing.originalPrice, currency: "INR" });
      } catch (error) {
        console.error("Error fetching pricing:", error);
        // Fallback pricing
        setPricing({ price: 499, currency: "INR" });
      } finally {
        setLoading(false);
      }
    };

    if (!isPaid) {
      fetchPricing();
    }
  }, [isPaid]);

  const handleUnlock = async () => {
    try {
      setLoading(true);
      const token = await getToken();

      // Create Razorpay order
      const orderResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/payment/linkedin-upgrade/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ reportId }),
        },
      );

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error(orderData.error || "Failed to create order");
      }

      // Initialize Razorpay
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: "MyCareerSarthi",
        description: "Unlock LinkedIn Report Analysis",
        handler: async function (response) {
          try {
            // Verify payment
            const verifyResponse = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/payment/linkedin-upgrade/verify`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  reportId,
                }),
              },
            );

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              // Show success modal instead of alert
              setShowSuccessModal(true);
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "hsl(var(--primary))",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setLoading(false);
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert(error.message || "Failed to initiate payment");
      setLoading(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    if (onUnlockSuccess) {
      onUnlockSuccess();
    }
    window.location.reload();
  };

  // Don't show if already paid, unless we need to show the success modal
  if (isPaid && !showSuccessModal) return null;

  return (
    <>
      {/* Load Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={handleSuccessModalClose}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <div className="mx-auto mb-4 bg-green-100 p-3 rounded-full w-fit">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl">
              Payment Successful!
            </DialogTitle>
            <DialogDescription className="text-center pt-2">
              Your Premium Report is now unlocked. You can now access all locked
              sections including detailed analysis and personalized
              recommendations.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-4">
            <Button
              onClick={handleSuccessModalClose}
              className="w-full sm:w-auto min-w-[150px]"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {!isPaid && (
        <div className="floating-unlock-tab">
          <button
            onClick={handleUnlock}
            className="unlock-button"
            disabled={loading}
          >
            <Lock className="w-4 h-4" />
            <span>Unlock All Sections</span>
            {!loading && pricing && (
              <span className="price">
                {pricing.currency === "INR" ? "₹" : "$"}
                {pricing.price}
              </span>
            )}
          </button>

          <style jsx>{`
            .floating-unlock-tab {
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              z-index: 1000;
              background: white;
              border-radius: 1.5rem;
            }

            .unlock-button {
              background: #4f46e5;
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 1.5rem;
              border: none;
              font-weight: 600;
              font-size: 0.875rem;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              transition: all 0.2s ease;
            }

            .unlock-button:hover:not(:disabled) {
              box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            }

            .unlock-button:disabled {
              opacity: 0.7;
              cursor: not-allowed;
            }

            .price {
              margin-left: 0.25rem;
              font-weight: 700;
            }

            @media (max-width: 768px) {
              .floating-unlock-tab {
                bottom: 1rem;
                right: 1rem;
              }

              .unlock-button {
                padding: 0.625rem 1.25rem;
                font-size: 0.8125rem;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default FloatingUnlockTab;
