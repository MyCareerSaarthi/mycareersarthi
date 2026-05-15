import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "Resume Review Service | Role-Based Resume Feedback – MyCareerSarthi",
  },
  description:
    "Get a detailed resume review with section-wise feedback, ATS-oriented recommendations, and practical actions to improve your resume for target roles.",
  keywords: [
    "resume review service",
    "resume feedback",
    "ATS resume review",
    "role based resume review",
  ],
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/resume-review",
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
      name: "Services",
      item: "https://mycareersarthi.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Resume Review",
      item: "https://mycareersarthi.com/services/resume-review",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Content />
    </>
  );
}
