import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "Interview Preparation Services | Online Mock Interview & Job Interview Coaching – MyCareerSarthi",
  },
  description:
    "Prepare for your next interview with interview preparation services from MyCareerSarthi. Our online interview preparation and mock interview service help job seekers practice real interview scenarios, improve answers, and receive expert feedback. The service is designed to strengthen communication, structure responses, and improve confidence during job interviews.",
  keywords: [
    "Interview Preparation Services",
    "online interview preparation",
    "mock interview service",
    "job interview preparation service",
  ],
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
