import PrivacyPolicyContent from "./privacy-policy-content";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read MyCareerSarthi's privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
