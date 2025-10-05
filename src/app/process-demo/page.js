"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ProcessLoader from "@/components/process-loader";

const steps = [
  { title: "Analyzing about section", subtitle: "Parsing your content and extracting signals" },
  { title: "Performing analysis", subtitle: "Running models and comparing patterns" },
  { title: "Calculating score", subtitle: "Aggregating the metrics" },
  { title: "Preparing insights", subtitle: "Generating personalized recommendations" },
  { title: "Finalizing", subtitle: "Wrapping things up" },
];

export default function ProcessDemoPage() {
  const total = steps.length;
  const [step, setStep] = useState(1);
  const [percent, setPercent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Auto progress: smooth percentage increments, step bumps every ~1.2s
    let p = 0, s = 1;
    timerRef.current = setInterval(() => {
      p = Math.min(100, p + 3 + Math.random() * 3);
      s = Math.min(total, 1 + Math.floor((p / 100) * total));
      setPercent(Math.round(p));
      setStep(s);
      if (p >= 100) clearInterval(timerRef.current);
    }, 200);
    return () => clearInterval(timerRef.current);
  }, []);

  const { title, subtitle } = useMemo(() => steps[step - 1] ?? steps[0], [step]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl">
        <ProcessLoader
          stepTitle={title}
          stepSubtitle={subtitle}
          currentStep={step}
          totalSteps={total}
          percent={percent}
        />
      </div>
    </div>
  );
}


