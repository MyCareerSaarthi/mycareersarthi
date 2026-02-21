import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "Resume Optimization",
  description:
    "Create an ATS-friendly resume that reflects your achievements. Our optimization service ensures your resume passes filters and grabs recruiter attention.",
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
