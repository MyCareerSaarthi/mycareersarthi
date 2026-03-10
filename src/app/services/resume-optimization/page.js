import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "Resume Optimization Services | Professional Resume Writing Service India – MyCareerSarthi",
  },
  description:
    "Looking for resume optimization services in India? MyCareerSarthi offers professional resume writing service, executive resume writing service, and complete resume optimization to improve ATS compatibility and recruiter visibility. Our experts create clear, structured resumes that help professionals stand out and increase interview opportunities.",
  keywords: [
    "Resume Optimization Services",
    "professional resume writing service",
    "resume writing services in india",
    "executive resume writing service",
  ],
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/resume-optimization",
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
      name: "Resume Optimization",
      item: "https://mycareersarthi.com/services/resume-optimization",
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
