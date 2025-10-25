"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

export default function SyncAuth() {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      if (!isSignedIn) return;

      const token = await getToken(); // Get Clerk session JWT

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/sync`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // send token
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {})
        .catch((err) => console.error("Auth sync error:", err));
    };

    syncUser();
  }, [isSignedIn, getToken]);

  return null; // just runs in background
}
