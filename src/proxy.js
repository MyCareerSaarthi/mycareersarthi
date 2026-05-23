import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/signup(.*)",
  "/login(.*)",

  "/pricing(.*)",
  "/about(.*)",
  "/about-us(.*)",
  "/contact(.*)",
  "/contact-us(.*)",

  "/career-mentoring(.*)",
  "/interview-preparation(.*)",
  "/ai-powered-profile-scoring(.*)",
  "/services(.*)",
  "/blog(.*)",

  "/process-demo(.*)",

  "/privacy-policy(.*)",
  "/terms-and-conditions(.*)",

  "/linkedin/report(.*)",
  "/resume/report(.*)",
  "/compare/report(.*)",
  "/report(.*)",

  // SEO files
  "/robots.txt",
  "/sitemap.xml",

  // Error / fallback pages
  "/404",
  "/not-found",
  "/loading",

  // Webhooks
  "/api/webhook(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect all non-public routes
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Override Clerk's automatic noindex header
  const response = NextResponse.next();
  response.headers.set("x-robots-tag", "index, follow");
  return response;
}, {
  authorizedParties: [
    "https://www.mycareersarthi.com",
    "https://mycareersarthi.com",
    "https://interview.mycareersarthi.com",
    "https://admin.mycareersarthi.com",
    "https://staging.mycareersarthi.com",
    "https://staging-interview.mycareersarthi.com",
    "https://staging-admin.mycareersarthi.com",
    "http://localhost:3000",
    "http://localhost:4000",
    "http://localhost:5000",
    "http://localhost:5173",
    "http://localhost:5174"
  ]
});

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - _next
     * - static files
     * - images
     * - favicon
     */
    "/((?!_next|.*\\..*).*)",

    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
