import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/signup",
  "/login",
  "/report",
  "/about-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/contact-us",
  "/process-demo",
  "/services(.*)",
  "/ai-powered-profile-scoring",
  "/career-mentoring",
  "/interview-preparation",
  "/blog(.*)",
  "/linkedin/report",
  "/resume/report",
  "/compare/report",
  // Fallbacks / static errors
  "/404",
  "/not-found",
  "/loading",
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
