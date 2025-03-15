import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(["/gated"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId } = auth();

  if (!userId && isProtectedRoute(context.request)) {
    // Add custom logic to run before redirecting

    return Response.redirect(new URL("/sign-in", context.url), 302);
  }
});
