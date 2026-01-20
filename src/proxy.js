import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Merge public routes from both versions
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/signup",
  "/login",
  "/pricing(.*)",
  "/about(.*)",
  "/contact(.*)",
  "/career-mentoring(.*)",
  "/interview-preparation(.*)",
  "/ai-powered-profile-scoring(.*)",
  "/blog(.*)",
  "/services(.*)",
  "/process-demo",
  "/privacy-policy",
  "/terms-and-conditions",
  "/contact-us",
  "/linkedin/report",
  "/resume/report",
  "/compare/report",
  "/report",
  "/about-us",

  // API webhook
  "/api/webhook(.*)",

  // Static pages / error fallbacks
  "/404",
  "/not-found",
  "/loading",
]);

// Static assets matcher – bypass auth always
const isStaticAsset = createRouteMatcher([
  "/_next/(.*)",
  "/home/(.*)",
  "/favicon.ico",
  "/(.*)\\.mp4",
  "/(.*)\\.webm",
  "/(.*)\\.ogg",
  "/(.*)\\.mp3",
  "/(.*)\\.wav",
  "/(.*)\\.svg",
  "/(.*)\\.png",
  "/(.*)\\.jpg",
  "/(.*)\\.jpeg",
  "/(.*)\\.gif",
  "/(.*)\\.webp",
  "/(.*)\\.css",
  "/(.*)\\.js",
  "/(.*)\\.ttf",
  "/(.*)\\.woff",
  "/(.*)\\.woff2",
  "/(.*)\\.ico",
  "/(.*)\\.csv",
  "/(.*)\\.docx",
  "/(.*)\\.xlsx",
  "/(.*)\\.zip",
  "/(.*)\\.webmanifest",
]);

export default clerkMiddleware(async (auth, req) => {
  // Allow all static assets
  if (isStaticAsset(req)) return;

  // Require auth for non-public routes
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

// Combined matcher config
export const config = {
  matcher: [
    // Skip Next.js internals & static files unless in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|ogg|mp3|wav)).*)",

    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
