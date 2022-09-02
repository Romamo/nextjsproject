import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  let cookie = request.cookies.get("name");
  if (cookie === "user" && request.nextUrl.pathname.startsWith("/test")) {
    return NextResponse.rewrite(new URL("/test-full", request.url));
  }
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/test/:path*",
};
