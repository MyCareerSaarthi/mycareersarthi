import BlogContent from "./blog-content";

export const metadata = {
  title: "Blog",
  description:
    "Read the latest career insights, job search strategies, and professional growth tips from MyCareerSarthi experts.",
  alternates: {
    canonical: "https://www.mycareersarthi.com/blog",
  },
};

export default function Page() {
  return <BlogContent />;
}
