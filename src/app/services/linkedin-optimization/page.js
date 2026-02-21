import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "LinkedIn Optimization",
  description:
    "Optimize your LinkedIn headline, summary, and experience to attract recruiters. We help you build a role-aligned profile that gets noticed.",
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
