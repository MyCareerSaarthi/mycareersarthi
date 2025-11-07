"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Label } from "@/components/ui/label";
import RoleSelector from "@/components/ui/role-selector";
import JobDescriptionInput from "@/components/ui/job-description-input";
import StepNavigation from "@/components/ui/step-navigation";
import StepContainer from "@/components/ui/step-container";

export default function ComparePage() {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [linkedinPdf, setLinkedinPdf] = useState(null);
  const [resumePdf, setResumePdf] = useState(null);
  const [inputMode, setInputMode] = useState("role"); // "role" | "jobDescription"
  const [selectedRole, setSelectedRole] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const fileInputRefLinkedin = useRef(null);
  const fileInputRefResume = useRef(null);

  const steps = [
    { title: "Sources", description: "Add LinkedIn and Resume" },
    {
      title: "Job Requirements",
      description: "Select role or add description (optional)",
    },
  ];
  const totalSteps = steps.length;

  const nextStep = () =>
    currentStep < totalSteps && setCurrentStep(currentStep + 1);
  const previousStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const handleLinkedinFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setLinkedinPdf(file);
      setErrors((prev) => ({ ...prev, linkedin: null }));
    } else if (file) {
      setErrors((prev) => ({
        ...prev,
        linkedin: "Please upload a valid PDF file",
      }));
    }
  };

  const handleResumeFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setResumePdf(file);
      setErrors((prev) => ({ ...prev, resume: null }));
    } else if (file) {
      setErrors((prev) => ({
        ...prev,
        resume: "Please upload a valid PDF file",
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!linkedinUrl && !linkedinPdf)
        newErrors.linkedin = "Provide LinkedIn URL or PDF";
      if (!resumePdf) newErrors.resume = "Resume PDF is required";
      if (
        linkedinUrl &&
        !linkedinUrl.match(
          /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_.]+\/?$/
        )
      ) {
        newErrors.linkedinUrl = "Enter a valid LinkedIn profile URL";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) nextStep();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const fd = new FormData();
      fd.append("mode", "fresh");
      if (linkedinUrl) fd.append("linkedin_url", linkedinUrl);
      if (linkedinPdf) fd.append("linkedin_pdf", linkedinPdf);
      if (resumePdf) fd.append("resume_pdf", resumePdf);
      // Map role/description inputs similar to LinkedIn analyze page
      if (inputMode === "role" && selectedRole) {
        if (selectedRole.type === "custom") {
          fd.append("role_name", selectedRole.roleName);
        } else {
          fd.append("role_id", selectedRole.roleId);
          fd.append("role_name", selectedRole.roleName);
        }
      }
      if (inputMode === "jobDescription" && jobDescription) {
        fd.append("job_description_text", jobDescription);
      }

      const res = await fetch("/api/comparison/compare", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Request failed");
      }
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                LinkedIn Profile URL
              </Label>
              <Input
                placeholder="https://www.linkedin.com/in/your-profile"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className={`bg-background border-border hover:border-primary/50 transition-colors ${
                  errors.linkedinUrl ? "border-destructive" : ""
                }`}
              />
              {errors.linkedinUrl && (
                <p className="text-sm text-destructive">{errors.linkedinUrl}</p>
              )}
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">
                  OR
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                LinkedIn PDF (optional)
              </Label>
              <Input
                ref={fileInputRefLinkedin}
                type="file"
                accept="application/pdf"
                onChange={handleLinkedinFileChange}
              />
              {errors.linkedin && (
                <p className="text-sm text-destructive">{errors.linkedin}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Resume PDF (required)
              </Label>
              <Input
                ref={fileInputRefResume}
                type="file"
                accept="application/pdf"
                onChange={handleResumeFileChange}
              />
              {errors.resume && (
                <p className="text-sm text-destructive">{errors.resume}</p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Job Requirements</h3>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setInputMode("role")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    inputMode === "role"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  Select A Role
                </button>
                <button
                  type="button"
                  onClick={() => setInputMode("jobDescription")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    inputMode === "jobDescription"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  Paste Job Description
                </button>
              </div>

              {inputMode === "role" ? (
                <RoleSelector
                  value={selectedRole}
                  onChange={setSelectedRole}
                  error={errors.role}
                  placeholder="Search and select your target role..."
                />
              ) : (
                <JobDescriptionInput
                  value={jobDescription}
                  onChange={setJobDescription}
                  error={errors.jobDescription}
                  placeholder="Enter the job description for the role you're targeting..."
                />
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            LinkedIn ↔ Resume Comparison
          </h1>
          <p className="text-muted-foreground text-sm">
            Compare a LinkedIn profile with a resume, with optional JD
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-4">
        <StepNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={steps}
        />
      </div>

      <div className="container mx-auto px-4 pb-12">
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        <form onSubmit={onSubmit}>
          <StepContainer
            title={steps[currentStep - 1]?.title}
            description={steps[currentStep - 1]?.description}
            onNext={currentStep === totalSteps ? undefined : handleNextStep}
            onPrevious={previousStep}
            nextText={currentStep === totalSteps ? "" : "Next"}
            previousText="Previous"
            isNextDisabled={
              currentStep === 1
                ? (!linkedinUrl && !linkedinPdf) || !resumePdf
                : false
            }
            isPreviousDisabled={currentStep === 1}
            showNext={currentStep < totalSteps}
            showPrevious={currentStep > 1}
          >
            {renderStepContent()}
          </StepContainer>

          {currentStep === totalSteps && (
            <div className="max-w-2xl mx-auto mt-4">
              <LoadingButton
                type="submit"
                isLoading={loading}
                loadingText="Comparing..."
              >
                Compare
              </LoadingButton>
            </div>
          )}
        </form>

        {result ? (
          <div className="mt-8 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold">Results</h2>
            <div className="text-sm">
              <div className="font-medium">Skill matches</div>
              <pre className="bg-gray-50 p-3 rounded overflow-auto text-xs">
                {JSON.stringify(result.skill_matches, null, 2)}
              </pre>
            </div>
            <div className="text-sm">
              <div className="font-medium">Skill missing</div>
              <pre className="bg-gray-50 p-3 rounded overflow-auto text-xs">
                {JSON.stringify(result.skill_missing, null, 2)}
              </pre>
            </div>
            <div className="text-sm">
              <div className="font-medium">Education alignment</div>
              <pre className="bg-gray-50 p-3 rounded overflow-auto text-xs">
                {JSON.stringify(result.education_alignment, null, 2)}
              </pre>
            </div>
            <div className="text-sm">
              <div className="font-medium">Experience alignment</div>
              <pre className="bg-gray-50 p-3 rounded overflow-auto text-xs">
                {JSON.stringify(result.experience_alignment, null, 2)}
              </pre>
            </div>
            <div className="text-sm">
              <div className="font-medium">Summary observations</div>
              <pre className="bg-gray-50 p-3 rounded overflow-auto text-xs">
                {JSON.stringify(result.summary_observations, null, 2)}
              </pre>
            </div>
            <div className="text-sm">
              <div className="font-medium">Recommendations</div>
              <pre className="bg-gray-50 p-3 rounded overflow-auto text-xs">
                {JSON.stringify(result.recommendations, null, 2)}
              </pre>
            </div>
            {typeof result.role_fit_score === "number" && (
              <div className="text-sm">
                <div className="font-medium">Role fit score</div>
                <div>{result.role_fit_score}</div>
              </div>
            )}
            {result.jd_gaps && (
              <div className="text-sm">
                <div className="font-medium">JD gaps</div>
                <pre className="bg-gray-50 p-3 rounded overflow-auto text-xs">
                  {JSON.stringify(result.jd_gaps, null, 2)}
                </pre>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
