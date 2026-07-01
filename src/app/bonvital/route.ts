import { readFileSync } from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-static";

const html = readFileSync(
  path.join(process.cwd(), "src/app/bonvital/dashboard.html"),
  "utf8",
);

export function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}
