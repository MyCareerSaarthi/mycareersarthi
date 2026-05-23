"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackRetention } from "../utils/analytics";

export default function AnalyticsProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    trackRetention("pageview", { path: pathname });
  }, [pathname]);

  return <>{children}</>;
}
