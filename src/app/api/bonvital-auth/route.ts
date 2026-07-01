import { NextResponse } from "next/server";

export const runtime = "nodejs";

const PASSWORD = process.env.BONVITAL_PASSWORD || "bnv2026";

export async function POST(req: Request) {
  const { password } = (await req.json()) as { password?: string };

  if (!password || password !== PASSWORD) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("bonvital_auth", PASSWORD, {
    httpOnly: true,
    sameSite: "lax",
    path: "/bonvital",
    maxAge: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
