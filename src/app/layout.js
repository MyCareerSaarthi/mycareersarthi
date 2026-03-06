import { Poppins } from "next/font/google";
import "./globals.css";
import { SignedIn } from "@clerk/nextjs";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import SyncAuth from "@/components/auth/AuthSync";
import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadcn } from "@clerk/themes";
import { JsonLd } from "@/components/seo/json-ld";
const poppins = Poppins({
  variable: "--font-poppins ",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://www.mycareersarthi.com"),
  title: {
    default: "MyCareerSarthi - Career Mentoring & AI Profile Scoring",
    template: "%s | MyCareerSarthi",
  },
  description:
    "Transform your career with MyCareerSarthi. AI-powered profile scoring, career mentoring, and interview preparation for professionals in India.",
  keywords: [
    "career mentoring",
    "AI profile scoring",
    "resume optimization",
    "interview preparation",
    "LinkedIn optimization",
    "job search strategy",
  ],
  authors: [{ name: "Saurabh Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mycareersarthi.com/",
    siteName: "MyCareerSarthi",
    title: "MyCareerSarthi - Career Mentoring & AI Profile Scoring",
    description:
      "AI-powered career growth platform helping professionals navigate the job market with confidence.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MyCareerSarthi",
  url: "https://www.mycareersarthi.com",
  logo: "https://www.mycareersarthi.com/logo.webp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "", // Add if available
    contactType: "customer service",
  },
  sameAs: ["https://www.linkedin.com/company/mycareersarthi"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MyCareerSarthi",
  url: "https://mycareersarthi.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.mycareersarthi.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, shadcn],
      }}
      publishableKey={publishableKey}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta
            name="google-site-verification"
            content="BmIe4yUKzogJou1FjAbuYOlKrA0t2pK6OF5NzXyZI4Q"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BRSZTEG5MN"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BRSZTEG5MN');
            `}
          </Script>
          <link rel="preconnect" href="https://res.cloudinary.com" />
          <link rel="preconnect" href="https://clerk.mycareersarthi.com" />
          <link rel="preconnect" href="https://checkout.razorpay.com" />
          <link
            rel="preload"
            as="image"
            href="https://res.cloudinary.com/rohanphulkar/video/upload/so_0/v1768918507/profile-scoring.jpg"
            fetchPriority="high"
          />
          <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="lazyOnload"
          />
          <JsonLd data={organizationSchema} />
          <JsonLd data={websiteSchema} />
        </head>
        <body className={`${poppins.className} antialiased`}>
          <SignedIn>
            <SyncAuth />
          </SignedIn>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              color="linear-gradient(90deg, #2299DD, #6a11cb, #2299DD)"
              initialPosition={0.15}
              crawlSpeed={150}
              height={4}
              crawl={true}
              showSpinner={true}
              easing="cubic-bezier(0.22, 0.61, 0.36, 1)"
              speed={300}
              shadow="0 0 15px rgba(34, 153, 221, 0.5), 0 0 5px rgba(106, 17, 203, 0.5)"
            />
            <Suspense>
              <Navbar className="mt-0" />
              <main className="mt-0">{children}</main>
              <Footer />
            </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
