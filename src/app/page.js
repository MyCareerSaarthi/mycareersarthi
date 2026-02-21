import HomePage from "./home-page";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "MyCareerSarthi | Career Mentoring & AI Profile Scoring",
  description:
    "Get expert career mentoring, AI profile scoring, and structured interview preparation. Boost your visibility on LinkedIn and convert job applications into offers.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is MyCareerSarthi best suited for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MyCareerSarthi is designed for students, early-career professionals, mid-level managers, and experienced professionals who want clarity, better positioning, and structured guidance in their job search or career growth.",
      },
    },
    {
      "@type": "Question",
      name: "I already have a resume and LinkedIn profile. Do I still need this?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most professionals do. Having a resume or LinkedIn profile is not the same as having one that reflects your real impact, aligns with your target roles, and works the way recruiters evaluate candidates today. We help refine, align, and position what you already have.",
      },
    },
    {
      "@type": "Question",
      name: "Will this help if I am actively looking for a job right now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our services are especially useful if you are currently job searching, getting limited interview calls, or feeling unsure about your approach. We focus on clarity, job search strategy, profile positioning, and interview preparation.",
      },
    },
    {
      "@type": "Question",
      name: "What if I am not sure about my next career move yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly where we start. Through career assessment, coaching, and mentoring, we help you gain clarity on direction, realistic role options, and next steps before you invest time and effort in applications.",
      },
    },
    {
      "@type": "Question",
      name: "How is MyCareerSarthi different from resume writing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do not just create documents. We work on your overall career positioning through a highly personalised approach. This includes career assessment, LinkedIn and resume alignment, job search strategy, interview preparation, AI-powered evaluation, and one-on-one discussions with our experts to guide you at every step.",
      },
    },
  ],
};

const h1Text =
  "AI-Powered Career Guidance & Job Search Strategy to 10X Your Interview Calls";

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <HomePage h1Text={h1Text} />
    </>
  );
}
