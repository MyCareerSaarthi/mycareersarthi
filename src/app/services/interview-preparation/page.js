import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "Interview Preparation",
  description:
    "Expert-led mock interviews and AI feedback to help you convert interviews into real job offers. Prepare structured answers for mid and senior-level roles.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/interview-preparation",
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
      name: "Interview Preparation",
      item: "https://mycareersarthi.com/services/interview-preparation",
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
