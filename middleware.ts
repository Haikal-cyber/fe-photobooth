import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MONOSTRIP_ACCESS_TOKEN_COOKIE } from "@/lib/session";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(MONOSTRIP_ACCESS_TOKEN_COOKIE);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/generate")) {
    if (!token?.value) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  if (pathname === "/" || pathname === "/login") {
    if (token?.value) {
      return NextResponse.redirect(new URL("/generate", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/generate"],
};
