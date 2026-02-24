import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "LinkedIn vs Resume Alignment",
  description:
    "Compare your LinkedIn profile and resume to identify gaps, contradictions, and alignment opportunities. Get AI-powered insights and actionable recommendations.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/alignment",
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
      name: "LinkedIn vs Resume Alignment",
      item: "https://mycareersarthi.com/services/alignment",
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
