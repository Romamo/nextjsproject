import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/content") &&
    typeof window !== "undefined" &&
    window.localStorage.JS === "ON"
  ) {
    return NextResponse.rewrite(new URL("/content-full", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/content/:path*",
};
