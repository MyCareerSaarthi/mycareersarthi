import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute: "LinkedIn vs Resume Alignment Services | MyCareerSarthi",
  },
  description:
    "At MyCareerSarthi, our LinkedIn vs Resume Alignment service helps professionals identify inconsistencies, positioning gaps, keyword mismatches, and branding issues between both platforms. Make sure your LinkedIn profile and resume work together to strengthen recruiter trust.",
  keywords: [
    "LinkedIn vs Resume Alignment Services",
    "LinkedIn vs Resume Alignment",
    "linkedin profile optimization services",
    "resume optimization services",
    "linkedin profile writing service India",
    "profile alignment",
  ],
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
