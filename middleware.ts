import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    // publicRoutes: ['/favicon.ico'],
    // Routes that can always be accessed, and have
    // no authentication information
    // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"],
});

export const config = {
    // Protects all routes, including api/trpc.
    // See https://clerk.com/docs/references/nextjs/auth-middleware
    // for more information about configuring your Middleware
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };