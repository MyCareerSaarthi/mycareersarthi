"use client";

import React, { useState } from "react";
import { Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { api } from "@/components/api/api";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import "@/styles/locked-section.css";

const LockedSectionOverlay = ({ reportId, onUpgrade }) => {
  const [isUpgrading, setIsUpgrading] = useState(false);
  const { getToken } = useAuth();
  const router = useRouter();

  const handleUpgrade = async () => {
    setIsUpgrading(true);
    try {
      // For now, redirect to pricing or payment page with report ID
      // You can integrate with your payment system here
      const token = await getToken();

      // Call payment API to initiate upgrade
      const response = await api.post(
        `/api/payment/linkedin-upgrade`,
        {
          reportId: reportId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.success) {
        // Redirect to payment gateway or handle payment flow
        if (response.data.paymentUrl) {
          window.location.href = response.data.paymentUrl;
        }
      }
    } catch (error) {
      console.error("Upgrade failed:", error);
      alert("Failed to initiate upgrade. Please try again.");
    } finally {
      setIsUpgrading(false);
    }
  };

  return (
    <div className="locked-overlay">
      <div className="locked-overlay-content">
        <div className="lock-icon">
          <Lock className="w-full h-full text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">
          Unlock Full Analysis
        </h3>
        <p className="text-white/90 mb-6">
          Upgrade to access all sections including Experience, Skills,
          Education, Certifications, Profile Picture, and Banner analysis.
        </p>
        <Card className="bg-card/95 backdrop-blur-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Full Report Access</span>
            <span className="text-2xl font-bold text-primary">₹199</span>
          </div>
          <p className="text-xs text-muted-foreground">
            One-time payment for complete analysis
          </p>
        </Card>
        <Button
          onClick={handleUpgrade}
          disabled={isUpgrading}
          className="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
          size="lg"
        >
          {isUpgrading ? (
            "Processing..."
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Upgrade Now
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default LockedSectionOverlay;
