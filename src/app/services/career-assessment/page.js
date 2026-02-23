import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "Career Assessment",
  description:
    "Get a clear career diagnosis based on your experience and skills. Our career assessment helps you identify target roles and build a path to growth.",
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
