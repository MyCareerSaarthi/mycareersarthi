"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProcessLoader from "@/components/process-loader";

export default function LoadingPage() {
  const params = useSearchParams();

  const data = useMemo(() => {
    const totalSteps = Number(params.get("total")) || 5;
    const currentStep = Number(params.get("step")) || 1;
    const percent = Number(params.get("percent"));
    const title = params.get("title") || defaultSteps[currentStep - 1]?.title || "Working";
    const subtitle = params.get("subtitle") || defaultSteps[currentStep - 1]?.subtitle;

    const computedPercent = isFinite(percent)
      ? Math.max(0, Math.min(100, percent))
      : Math.round((currentStep - 1) * (100 / totalSteps));

    return { totalSteps, currentStep, percent: computedPercent, title, subtitle };
  }, [params]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl">
        <ProcessLoader
          stepTitle={data.title}
          stepSubtitle={data.subtitle}
          currentStep={data.currentStep}
          totalSteps={data.totalSteps}
          percent={data.percent}
        />
      </div>
    </div>
  );
}

const defaultSteps = [
  { title: "Analyzing about section", subtitle: "Parsing your content and extracting signals" },
  { title: "Performing analysis", subtitle: "Running models and comparing patterns" },
  { title: "Calculating score", subtitle: "Aggregating the metrics" },
  { title: "Preparing insights", subtitle: "Generating personalized recommendations" },
  { title: "Finalizing", subtitle: "Wrapping things up" },
];


