import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "LinkedIn Optimization Services India | LinkedIn Profile Makeover & Writing – MyCareerSarthi",
  },
  description:
    "Looking for LinkedIn optimization services in India? MyCareerSarthi offers LinkedIn profile makeover service, LinkedIn profile writing service in India, and complete LinkedIn profile optimization to improve your visibility in recruiter searches. A well-written and structured LinkedIn profile helps you attract hiring managers, recruiters, and better career opportunities.",
  keywords: [
    "LinkedIn Optimization Services",
    "linkedin profile makeover service",
    "linkedin profile writing service india",
    "linkedin profile optimization services",
  ],
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/linkedin-optimization",
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
      name: "LinkedIn Optimization",
      item: "https://mycareersarthi.com/services/linkedin-optimization",
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
