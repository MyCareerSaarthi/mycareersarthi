import ScoringContent from "./scoring-content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "AI Profile Scoring",
  description:
    "Score your LinkedIn profile and resume against target roles using our in-house AI engine. Get precise insights on keyword alignment and role-fit gaps.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/ai-powered-profile-scoring",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mycareersarthi.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI-Powered Profile Scoring",
      item: "https://mycareersarthi.com/ai-powered-profile-scoring",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ScoringContent />
    </>
  );
}
