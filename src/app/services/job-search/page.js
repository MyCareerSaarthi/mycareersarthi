import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "Job Search Services | Executive Job Search Strategy & Mentor India – MyCareerSarthi",
  },
  description:
    "Get structured support with job search services from MyCareerSarthi. Our executive job search service and job search mentor in India help professionals build an effective job search strategy, improve applications, and approach recruiters with confidence. We guide job seekers through targeted job search planning, networking, and interview preparation.",
  keywords: [
    "Job Search Services",
    "executive job search service",
    "job search mentor india",
    "job search strategy service",
  ],
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/job-search",
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
      name: "Job Search Strategy",
      item: "https://mycareersarthi.com/services/job-search",
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
