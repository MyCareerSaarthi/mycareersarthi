import Content from "./content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: {
    absolute:
      "LinkedIn Review Service | Role-Based LinkedIn Profile Feedback – MyCareerSarthi",
  },
  description:
    "Get a role-based LinkedIn review with actionable feedback on headline, about, experience, skills, and profile positioning to improve recruiter visibility.",
  keywords: [
    "LinkedIn review service",
    "LinkedIn profile review",
    "LinkedIn feedback",
    "role based linkedin review",
  ],
  alternates: {
    canonical: "https://www.mycareersarthi.com/services/linkedin-review",
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
      name: "LinkedIn Review",
      item: "https://mycareersarthi.com/services/linkedin-review",
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
