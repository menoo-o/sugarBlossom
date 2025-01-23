import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get("session"); // Get the session cookie

    // Protect only the `/dashboard` route and its subpaths
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!sessionCookie) {
            // No session cookie, redirect to login
            const response = NextResponse.redirect(new URL("/login", request.url));
            response.cookies.delete("session"); // Clear the session cookie for cleanup
            return response;
        }
    }

    // Allow the request to proceed for other routes
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"], // Apply middleware only to the `/dashboard` route and its subpaths
};
