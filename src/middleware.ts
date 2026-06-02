import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function checkProtected(
  req: NextRequest,
  prefix: string,
  cookieName: string,
  envVar: string,
) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith(prefix)) return null;

  const loginPath = `${prefix}/login`;
  if (pathname === loginPath) return NextResponse.next();

  const cookie = req.cookies.get(cookieName);
  const correct = process.env[envVar];

  if (!correct || cookie?.value !== correct) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = loginPath;
    return NextResponse.redirect(loginUrl);
  }
  return null;
}

export function middleware(req: NextRequest) {
  return (
    checkProtected(req, "/paja", "paja_auth", "PAJA_PASSWORD") ??
    checkProtected(req, "/immersive", "immersive_auth", "IMMERSIVE_PASSWORD") ??
    checkProtected(req, "/palace", "palace_auth", "PALACE_PASSWORD") ??
    NextResponse.next()
  );
}

export const config = {
  matcher: ["/paja", "/paja/:path*", "/immersive", "/immersive/:path*", "/palace", "/palace/:path*"],
};
