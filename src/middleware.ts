import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/paja")) {
    const cookie = req.cookies.get("paja_auth");
    const correct = process.env.PAJA_PASSWORD;

    if (!correct || cookie?.value !== correct) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/paja/login";
      // Avoid redirect loop
      if (pathname === "/paja/login") return NextResponse.next();
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/paja", "/paja/:path*"],
};
