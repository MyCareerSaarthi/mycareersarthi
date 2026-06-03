import PricingContent from "./pricing-content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "Pricing",
  description:
    "Choose the right plan for your career growth. From LinkedIn optimization to expert-led mock interviews, MyCareerSarthi offers flexible pricing options.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/pricing",
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
      name: "Pricing",
      item: "https://mycareersarthi.com/pricing",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PricingContent />
    </>
  );
}
