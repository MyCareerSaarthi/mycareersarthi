import ContactContent from "./contact-content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions about our career mentoring or AI profile scoring services? Contact MyCareerSarthi for expert guidance and support.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/contact-us",
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
      name: "Contact Us",
      item: "https://mycareersarthi.com/contact-us",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ContactContent />
    </>
  );
}
