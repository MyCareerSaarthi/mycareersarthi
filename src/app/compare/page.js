"use client";

import { useState, useRef, useEffect } from "react";
import { useAnalysisSession } from "@/hooks/useAnalysisSession";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { api } from "@/components/api/api";
import { handlePayment, resumePayment } from "@/components/payment/payment";
import { useAuth, useUser } from "@clerk/nextjs";
import SimpleLoader from "@/components/simple-loader";
import { useRouter } from "next/navigation";
import {
  Linkedin,
  FileText,
  CreditCard,
  ArrowRight,
  Upload,
  CheckCircle2,
  Sparkles,
  X,
  Check,
  Link,
  Tag,
} from "lucide-react";

export default function ComparePage() {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [linkedinPdf, setLinkedinPdf] = useState(null);
  const [resumePdf, setResumePdf] = useState(null);
  const [errors, setErrors] = useState({});
  const [pendingPaymentDetails, setPendingPaymentDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraggingLinkedin, setIsDraggingLinkedin] = useState(false);
  const [isDraggingResume, setIsDraggingResume] = useState(false);
  const fileInputRefLinkedin = useRef(null);
  const fileInputRefResume = useRef(null);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [pricing, setPricing] = useState({ originalPrice: 199, finalPrice: 199, discount: 0 });
  const [isLoadingPricing, setIsLoadingPricing] = useState(true);

  const [isComparing, setIsComparing] = useState(false);
  const [processData, setProcessData] = useState({
    title: "Starting Comparison", subtitle: "Initializing LinkedIn and Resume comparison",
    currentStep: 1, totalSteps: 12, percentage: 0,
  });

  const { user } = useUser();
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const { activeSession, saveSession, clearSession } = useAnalysisSession("comparison");

  const getPricing = async () => {
    try {
      const response = await api.get("/api/pricing?serviceType=comparison");
      if (response.data.success) {
        const p = response.data.pricing;
        setPricing({ originalPrice: p.originalPrice, finalPrice: p.originalPrice, discount: 0 });
      }
    } catch (error) {
      console.error("Failed to fetch pricing:", error);
      setPricing({ originalPrice: 199, finalPrice: 199, discount: 0 });
    } finally { setIsLoadingPricing(false); }
  };

  useEffect(() => { if (isLoaded && !isSignedIn) window.location.href = "/login?redirect=/compare"; }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !activeSession) return;
    const resume = async () => {
      setIsComparing(true);
      setProcessData({ title: "Resuming...", subtitle: "Reconnecting to your in-progress comparison...", currentStep: 2, totalSteps: 12, percentage: 15 });
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const analysisRequestId = activeSession.analysisRequestId;
      let pollCount = 0;
      const MAX_POLLS = 450;
      const poll = async () => {
        if (pollCount >= MAX_POLLS) { clearSession(); setIsComparing(false); setErrors({ general: "Comparison timed out." }); return; }
        pollCount++;
        try {
          const resp = await fetch(`${baseUrl}/api/rag/status/${analysisRequestId}`, { headers: { "Content-Type": "application/json" } });
          if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
          const data = await resp.json();
          if (data.status === "completed" && data.result_report_id) {
            if (data.payment_status === "completed") { clearSession(); window.location.href = `/compare/report?id=${data.result_report_id}`; return; }
            else { clearSession(); setIsComparing(false); setPendingPaymentDetails({ amount: data.payment_amount, orderId: data.order_id, analysisRequestId }); return; }
          }
          if (data.status === "failed") { clearSession(); setIsComparing(false); setErrors({ general: data.message || "Comparison failed." }); return; }
          setTimeout(poll, 2000);
        } catch (err) { console.warn("[Compare] poll error:", err); setTimeout(poll, 4000); }
      };
      poll();
    };
    resume();
  }, [isLoaded, isSignedIn, activeSession]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (isLoaded && isSignedIn) getPricing(); }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // ── Helpers ──
  const step1Done = !!(linkedinUrl || linkedinPdf);
  const step2Done = !!resumePdf;
  const canSubmit = step1Done && step2Done;

  const applyCoupon = async () => {
    if (!couponCode.trim()) { setErrors((p) => ({ ...p, coupon: "Please enter a coupon code" })); return; }
    setIsApplyingCoupon(true);
    try {
      const token = await getToken();
      const response = await api.post("/api/pricing/apply-coupon", { code: couponCode.trim(), userId: user?.id, orderAmount: pricing.originalPrice }, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.success) {
        setAppliedCoupon({ code: couponCode.trim(), discount: response.data.discount });
        setPricing((p) => ({ ...p, finalPrice: response.data.finalAmount, discount: response.data.discount }));
        setErrors((p) => ({ ...p, coupon: null }));
      }
    } catch (error) {
      setErrors((p) => ({ ...p, coupon: error.response?.data?.message || "Failed to apply coupon" }));
      setAppliedCoupon(null);
      setPricing((p) => ({ ...p, finalPrice: p.originalPrice, discount: 0 }));
    } finally { setIsApplyingCoupon(false); }
  };

  const removeCoupon = () => {
    setCouponCode(""); setAppliedCoupon(null);
    setPricing((p) => ({ ...p, finalPrice: p.originalPrice, discount: 0 }));
    setErrors((p) => ({ ...p, coupon: null }));
  };

  const validateForm = () => {
    const e = {};
    if (!linkedinUrl && !linkedinPdf) e.linkedin = "Please provide either a LinkedIn URL or PDF";
    if (linkedinUrl && !linkedinUrl.match(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_.]+\/?$/)) e.linkedinUrl = "Please enter a valid LinkedIn profile URL";
    if (!resumePdf) e.resume = "Resume PDF is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleStepSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const token = await getToken();
      const formData = new FormData();
      formData.append("userId", user?.id);
      if (linkedinUrl) formData.append("linkedinUrl", linkedinUrl);
      if (linkedinPdf) formData.append("linkedinPdf", linkedinPdf);
      if (resumePdf) formData.append("resumePdf", resumePdf);
      if (appliedCoupon) { formData.append("couponCode", appliedCoupon.code); formData.append("discountAmount", appliedCoupon.discount.toString()); }

      setIsComparing(true);
      setProcessData({ title: "Starting Comparison", subtitle: "Initializing LinkedIn and Resume comparison", currentStep: 1, totalSteps: 12, percentage: 0 });
      await handlePayment("comparison", token, user, formData, setIsSubmitting,
        (errorMsg, details) => { clearSession(); setIsComparing(false); if (details?.analysisRequestId) { setPendingPaymentDetails(details); setErrors({}); } else { setErrors({ general: errorMsg }); } },
        getToken, (analysisRequestId) => saveSession(analysisRequestId),
      );
    } catch (error) {
      console.error("Form submission failed:", error);
      setIsComparing(false);
      setErrors({ general: error?.response?.data?.message || error?.message || "Payment initiation failed." });
    } finally { setIsSubmitting(false); }
  };

  const handleResumePayment = async () => {
    setIsSubmitting(true); setErrors({});
    try {
      const token = await getToken();
      await resumePayment(pendingPaymentDetails.orderId, pendingPaymentDetails.amount, pendingPaymentDetails.analysisRequestId, "comparison", token, user, setIsSubmitting,
        (errorMsg, details) => { if (details?.analysisRequestId) { setPendingPaymentDetails(details); setErrors({}); } else { setErrors({ general: errorMsg }); } }, getToken,
      );
    } catch (error) {
      console.error("Payment resumption failed:", error);
      setErrors({ general: "Failed to resume payment." });
      setIsSubmitting(false);
    }
  };

  const handleLinkedinFileChange = (e) => { const f = e.target.files?.[0]; if (f && f.type === "application/pdf") { setLinkedinPdf(f); setErrors((p) => ({ ...p, linkedin: null })); } else if (f) { setErrors((p) => ({ ...p, linkedin: "Please upload a valid PDF file" })); } };
  const handleResumeFileChange = (e) => { const f = e.target.files?.[0]; if (f && f.type === "application/pdf") { setResumePdf(f); setErrors((p) => ({ ...p, resume: null })); } else if (f) { setErrors((p) => ({ ...p, resume: "Please upload a valid PDF file" })); } };
  const removeLinkedinPdf = () => { setLinkedinPdf(null); if (fileInputRefLinkedin.current) fileInputRefLinkedin.current.value = ""; };
  const removeResumePdf = () => { setResumePdf(null); if (fileInputRefResume.current) fileInputRefResume.current.value = ""; };
  const handleCancelAnalysis = () => { clearSession(); setIsComparing(false); };

  const StepIndicator = ({ number, done, active, label }) => (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
        done ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" :
        active ? "bg-primary/15 text-primary border-2 border-primary" :
        "bg-muted text-muted-foreground border border-border"
      }`}>{done ? <Check className="w-4 h-4" /> : number}</div>
      <span className={`text-sm font-semibold transition-colors ${done || active ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
    </div>
  );

  const FileUploadField = ({ file, onRemove, onSelect, inputRef, onChange, isDragging, setIsDragging, label, error, accept = ".pdf" }) => (
    <div>
      <input type="file" ref={inputRef} className="hidden" accept={accept} onChange={onChange} />
      {file ? (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/30 bg-primary/5 transition-all">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><FileText className="w-4 h-4 text-primary" /></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{file.name}</p>
            <p className="text-[11px] text-muted-foreground">{(file.size / 1024).toFixed(0)} KB</p>
          </div>
          <button onClick={onRemove} className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><X className="w-4 h-4" /></button>
        </div>
      ) : (
        <div
          onClick={onSelect}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault(); setIsDragging(false);
            const f = e.dataTransfer.files?.[0];
            if (f && f.type === "application/pdf") { onChange({ target: { files: [f] } }); }
            else { setErrors((p) => ({ ...p, [error]: "Please upload a valid PDF file" })); }
          }}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
            isDragging ? "border-primary bg-primary/10 scale-[1.01]" : "border-border hover:border-primary/40 hover:bg-muted/50"
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0"><Upload className="w-4 h-4 text-muted-foreground" /></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="text-[11px] text-muted-foreground">PDF only, up to 10 MB</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative">
      {isComparing && <SimpleLoader message="Comparing your LinkedIn profile and resume... This may take a while." onCancel={handleCancelAnalysis} />}

      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-2">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl z-10">
          <div className="text-center space-y-3 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">LinkedIn ↔ Resume Comparison</h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="relative container mx-auto px-4 max-w-5xl py-6">
        {errors.general && (
          <div className="mb-5 p-3.5 bg-destructive/10 border border-destructive/20 rounded-xl">
            <p className="text-sm text-destructive font-medium">{errors.general}</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* ──── LEFT: Form ──── */}
          <div className="flex-1 min-w-0 space-y-5">
            {/* Step progress */}
            <div className="flex items-center gap-2 px-1">
              <StepIndicator number={1} done={step1Done} active={!step1Done} label="LinkedIn" />
              <div className={`flex-1 h-0.5 rounded-full transition-colors ${step1Done ? "bg-primary" : "bg-border"}`} />
              <StepIndicator number={2} done={step2Done} active={step1Done && !step2Done} label="Resume" />
            </div>

            {/* Card 1: LinkedIn Profile */}
            <Card className={`p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
              step1Done ? "border-primary/30 bg-card shadow-sm" : "border-primary/20 bg-card/80 shadow-lg shadow-primary/5"
            }`}>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Linkedin className="w-[18px] h-[18px] text-primary" /></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold leading-tight">LinkedIn Profile</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Enter your profile URL or upload a saved PDF</p>
                </div>
                {step1Done && <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 shrink-0"><Check className="w-3 h-3 mr-1" />Done</Badge>}
              </div>

              {/* URL input */}
              <div className="space-y-1.5 mb-4">
                <Label htmlFor="linkedinUrl" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Profile URL</Label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="linkedinUrl" placeholder="https://linkedin.com/in/your-profile" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)}
                    className={`pl-10 rounded-xl bg-background border-border hover:border-primary/40 focus:border-primary transition-colors h-11 ${errors.linkedinUrl ? "border-destructive" : ""}`} />
                </div>
                {errors.linkedinUrl && <p className="text-xs text-destructive">{errors.linkedinUrl}</p>}
              </div>

              {/* OR divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center"><span className="bg-card px-3 text-[11px] font-medium text-muted-foreground uppercase tracking-widest">or upload pdf</span></div>
              </div>

              {/* LinkedIn PDF upload */}
              <div className="mt-3">
                <FileUploadField
                  file={linkedinPdf} onRemove={removeLinkedinPdf}
                  onSelect={() => fileInputRefLinkedin.current?.click()}
                  inputRef={fileInputRefLinkedin} onChange={handleLinkedinFileChange}
                  isDragging={isDraggingLinkedin} setIsDragging={setIsDraggingLinkedin}
                  label="Drop LinkedIn PDF here or click to browse" error="linkedin"
                />
                {errors.linkedin && <p className="text-xs text-destructive mt-1.5">{errors.linkedin}</p>}
              </div>
            </Card>

            {/* Card 2: Resume */}
            <Card className={`p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 ${
              step2Done ? "border-primary/30 bg-card shadow-sm" :
              step1Done ? "border-primary/20 bg-card/80 shadow-lg shadow-primary/5" :
              "border-border bg-card/60"
            }`}>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><FileText className="w-[18px] h-[18px] text-primary" /></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold leading-tight">Resume PDF <span className="text-xs font-normal text-muted-foreground">(required)</span></h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Upload the resume to compare against</p>
                </div>
                {step2Done && <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 shrink-0"><Check className="w-3 h-3 mr-1" />Done</Badge>}
              </div>

              <FileUploadField
                file={resumePdf} onRemove={removeResumePdf}
                onSelect={() => fileInputRefResume.current?.click()}
                inputRef={fileInputRefResume} onChange={handleResumeFileChange}
                isDragging={isDraggingResume} setIsDragging={setIsDraggingResume}
                label="Drop resume PDF here or click to browse" error="resume"
              />
              {errors.resume && <p className="text-xs text-destructive mt-1.5">{errors.resume}</p>}
            </Card>
          </div>

          {/* ──── RIGHT: Sticky pricing sidebar ──── */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6 space-y-4">
              <Card className="p-5 rounded-2xl border-2 border-border bg-card">
                <h3 className="text-base font-semibold mb-4 flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary" /> Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">LinkedIn ↔ Resume</span>
                    <span className="text-sm font-semibold">{isLoadingPricing ? "..." : `₹${pricing.originalPrice.toFixed(2)}`}</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400">
                      <span className="text-sm flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" /> {appliedCoupon.code}</span>
                      <span className="text-sm font-semibold">-₹{appliedCoupon.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Total</span>
                      <div className="text-right">
                        {pricing.discount > 0 && <div className="text-xs text-muted-foreground line-through">₹{pricing.originalPrice.toFixed(2)}</div>}
                        <div className="text-2xl font-bold text-primary">{isLoadingPricing ? "..." : `₹${pricing.finalPrice.toFixed(2)}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 rounded-2xl border-2 border-border bg-card">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Have a coupon?</Label>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)}
                    className={`flex-1 rounded-xl bg-background h-10 ${errors.coupon ? "border-destructive" : ""}`} disabled={isApplyingCoupon || !!appliedCoupon} />
                  {appliedCoupon ? (
                    <Button type="button" variant="outline" size="sm" onClick={removeCoupon} className="rounded-xl h-10 px-3">Remove</Button>
                  ) : (
                    <LoadingButton type="button" variant="outline" size="sm" onClick={applyCoupon} isLoading={isApplyingCoupon} loadingText="..." disabled={!couponCode.trim()} className="rounded-xl h-10 px-3">Apply</LoadingButton>
                  )}
                </div>
                {errors.coupon && <p className="text-xs text-destructive mt-1.5">{errors.coupon}</p>}
                {appliedCoupon && (
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-medium mt-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Saved ₹{appliedCoupon.discount}
                  </div>
                )}
              </Card>

              {pendingPaymentDetails ? (
                <Button onClick={handleResumePayment} disabled={isSubmitting} className="w-full h-12 text-[15px] font-semibold rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:shadow-none">
                  {isSubmitting ? "Processing..." : "Complete Payment"}<ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleStepSubmit} disabled={isSubmitting || !canSubmit} className="w-full h-12 text-[15px] font-semibold rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:shadow-none">
                  {isSubmitting ? "Processing..." : "Start Comparison"}<ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
