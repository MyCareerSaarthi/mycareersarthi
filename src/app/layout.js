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
const poppins = Poppins({
  variable: "--font-poppins ",
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "MyCareerSarthi",
  description: "Career mentoring platform",
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
          <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="afterInteractive"
          />
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
              <main className="pt-24 mt-0">{children}</main>
              <Footer />
            </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
