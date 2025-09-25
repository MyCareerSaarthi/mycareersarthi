"use client";

import { SignIn } from "@clerk/nextjs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black p-4">
      <SignIn
        appearance={{
          elements: {
            card: "bg-gray-900 border-gray-800 shadow-none",
            headerTitle: "text-white",
            headerSubtitle: "text-gray-400",
            socialButtonsBlockButton:
              "bg-gray-800 hover:bg-gray-700 text-white border-gray-700",
            socialButtonsBlockButtonText: "text-white",
            formFieldLabel: "text-gray-300",
            formFieldInput:
              "bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
            footerActionLink: "text-blue-400 hover:text-blue-300",
            dividerLine: "bg-gray-700",
            dividerText: "text-gray-400",
          },
        }}
        signUpUrl="/signup"
      />
    </div>
  );
}
