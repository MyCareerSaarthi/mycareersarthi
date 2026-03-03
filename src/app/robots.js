export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/profile/",
          "/reports/",
          "/payment/",
          "/loading/",
          "/compare/report/",
          "/linkedin/report/",
          "/resume/report/",
        ],
      },
    ],
    sitemap: "https://www.mycareersarthi.com/sitemap.xml",
  };
}
