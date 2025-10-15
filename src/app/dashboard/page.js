"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// Old dashboard components removed - redirecting to modern dashboard

const Dashboard = () => {
  const router = useRouter();

  // Redirect to modern dashboard
  useEffect(() => {
    router.replace("/dashboard/modern");
  }, [router]);

  // Show loading while redirecting
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Upgrading to Modern Dashboard
          </h2>
          <p className="text-muted-foreground">
            Redirecting you to the new and improved dashboard...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
