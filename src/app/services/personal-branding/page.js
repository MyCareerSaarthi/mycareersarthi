import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "Personal Branding",
  description:
    "Build a strong personal brand on LinkedIn. We help you establish credibility, voice, and presence through customized content and networking guidance.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/personal-branding",
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
      name: "Personal Branding",
      item: "https://mycareersarthi.com/services/personal-branding",
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
