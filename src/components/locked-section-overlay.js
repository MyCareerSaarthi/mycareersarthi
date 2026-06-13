"use client";

import React, { useState, useEffect } from "react";
import { Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { api } from "@/components/api/api";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import "@/styles/locked-section.css";

const LockedSectionOverlay = ({ reportId, onUpgrade }) => {
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [pricing, setPricing] = useState(null);
  const [loadingPricing, setLoadingPricing] = useState(true);
  const { getToken } = useAuth();
  const router = useRouter();

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
        setPricing({ price: 199, currency: "INR" });
      } finally {
        setLoadingPricing(false);
      }
    };

    fetchPricing();
  }, []);

  const handleUpgrade = async () => {
    setIsUpgrading(true);
    try {
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
              if (onUpgrade) {
                onUpgrade();
              }
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
    } catch (error) {
      console.error("Upgrade failed:", error);
      alert(error.message || "Failed to initiate upgrade. Please try again.");
    } finally {
      setIsUpgrading(false);
    }
  };

  return (
    <>
      <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      <div className="locked-overlay">
        <div className="locked-overlay-content">
          <div className="lock-icon-container">
            <Lock className="lock-icon text-primary animate-pulse" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-foreground tracking-tight">
            Unlock Full Analysis
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Get instant lifetime access to all locked sections including Experience, Skills,
            Education, Certifications, Profile Picture, and Banner analysis.
          </p>

          <div className="my-8 text-center">
            <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-1">
              One-Time Upgrade
            </div>
            <div className="text-5xl font-black text-primary tracking-tight">
              {loadingPricing ? "..." : pricing ? `${pricing.currency === "INR" ? "₹" : "$"}${pricing.price}` : "₹199"}
            </div>
            <div className="text-xs text-muted-foreground/80 mt-2">
              Lifetime premium reports & future updates included
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Button
              onClick={handleUpgrade}
              disabled={isUpgrading}
              className="w-full max-w-xs py-4 bg-primary text-primary-foreground rounded-full font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20 border-none cursor-pointer"
              size="lg"
            >
              {isUpgrading ? (
                "Processing..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Upgrade Report Now
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LockedSectionOverlay;
