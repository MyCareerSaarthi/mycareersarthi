import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "Personal Branding Services India | Personal Branding Consultant for Professionals – MyCareerSarthi",
  },
  description:
    "Build a strong professional image with personal branding services from MyCareerSarthi. Work with a personal branding consultant in India to improve your online presence, LinkedIn visibility, and career positioning. Our personal branding experts help job seekers and professionals present their skills, experience, and achievements in a way that attracts recruiters and hiring managers.",
  keywords: [
    "Personal Branding Services",
    "personal branding consultant india",
    "personal branding expert india",
    "personal branding for job seekers",
  ],
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
