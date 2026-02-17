"use client";

/**
 * useAnalysisSession — persist an in-flight analysis to localStorage so the
 * user can refresh / survive network drops and resume tracking progress.
 *
 * localStorage keys:  mcs_active_analysis_linkedin
 *                     mcs_active_analysis_resume
 *                     mcs_active_analysis_comparison
 *
 * Each stores: { analysisRequestId: string, createdAt: number }
 * Sessions older than MAX_AGE_MS (15 min) are automatically discarded.
 */

import { useCallback, useEffect, useRef, useState } from "react";

const MAX_AGE_MS = 15 * 60 * 1000; // 15 minutes

function storageKey(serviceType) {
  return `mcs_active_analysis_${serviceType}`;
}

/**
 * @param {"linkedin"|"resume"|"comparison"} serviceType
 * @returns {{ activeSession, saveSession, clearSession }}
 */
export function useAnalysisSession(serviceType) {
  const [activeSession, setActiveSession] = useState(null);
  const hasChecked = useRef(false);

  // On mount, check for an existing session
  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;

    try {
      const raw = localStorage.getItem(storageKey(serviceType));
      if (!raw) return;

      const session = JSON.parse(raw);
      if (
        !session?.analysisRequestId ||
        !session?.createdAt ||
        Date.now() - session.createdAt > MAX_AGE_MS
      ) {
        // Stale or invalid — discard
        localStorage.removeItem(storageKey(serviceType));
        return;
      }

      setActiveSession(session);
    } catch {
      localStorage.removeItem(storageKey(serviceType));
    }
  }, [serviceType]);

  const saveSession = useCallback(
    (analysisRequestId) => {
      const session = { analysisRequestId, createdAt: Date.now() };
      try {
        localStorage.setItem(storageKey(serviceType), JSON.stringify(session));
      } catch {
        // quota exceeded — non-critical
      }
      setActiveSession(session);
    },
    [serviceType],
  );

  const clearSession = useCallback(() => {
    try {
      localStorage.removeItem(storageKey(serviceType));
    } catch {
      // ignore
    }
    setActiveSession(null);
  }, [serviceType]);

  return { activeSession, saveSession, clearSession };
}
