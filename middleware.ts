import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getCookie(name) {
  var matches =
    typeof window !== "undefined" &&
    document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    getCookie("name") === "user" &&
    request.nextUrl.pathname.startsWith("/test")
  ) {
    return NextResponse.rewrite(new URL("/test-full", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/test/:path*",
};
