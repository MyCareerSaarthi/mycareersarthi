import AboutContent from "./about-content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "About Us",
  description:
    "Learn about MyCareerSarthi's mission to transform career mentoring in India. Meet our team of experts dedicated to your professional growth.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/about-us",
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
      name: "About Us",
      item: "https://mycareersarthi.com/about-us",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AboutContent />
    </>
  );
}
