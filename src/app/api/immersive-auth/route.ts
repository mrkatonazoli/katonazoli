import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { password } = (await req.json()) as { password?: string };

  const correct = process.env.IMMERSIVE_PASSWORD;
  if (!correct) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  if (!password || password !== correct) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("immersive_auth", correct, {
    httpOnly: true,
    sameSite: "lax",
    path: "/immersive",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
