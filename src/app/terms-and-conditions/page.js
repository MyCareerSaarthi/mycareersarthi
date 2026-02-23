import TermsContent from "./terms-content";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Read our terms and conditions to understand the rules and guidelines for using MyCareerSarthi's platform and services.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/terms-and-conditions",
  },
};

export default function Page() {
  return <TermsContent />;
}
