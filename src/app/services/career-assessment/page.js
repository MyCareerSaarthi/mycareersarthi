import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "Career Assessment Services | Professional Career Path Assessment – MyCareerSarthi",
  },
  description:
    "Get clarity about your future with career assessment services from MyCareerSarthi. Our professional career assessment helps you understand your strengths, interests, and suitable career options. Through structured career path assessment and career suitability assessment, we guide students, job seekers, and professionals in choosing the right direction for long-term growth.",
  keywords: [
    "Career Assessment Services",
    "career path assessment",
    "professional career assessment",
    "career suitability assessment",
  ],
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/career-assessment",
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
      name: "Career Assessment",
      item: "https://mycareersarthi.com/services/career-assessment",
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
