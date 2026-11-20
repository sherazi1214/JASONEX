import { NextResponse } from "next/server";
import {
  COOKIE_NAME, SESSION_TTL_MS, adminConfigured, verifyCredentials, signSession,
  isLocked, recordFail, clearFails,
} from "../../../../lib/auth-core";
import { sameOrigin } from "../../../../lib/auth";

export const dynamic = "force-dynamic";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function POST(request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (!adminConfigured()) {
    return NextResponse.json(
      { error: "Admin abhi set up nahi hai. Terminal me `npm run setup-admin` chalayein." },
      { status: 503 }
    );
  }

  const ip = (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  if (isLocked(ip)) {
    return NextResponse.json({ error: "Bohat zyada galat koshish. 15 minute baad dobara try karein." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const ok = verifyCredentials(body?.email, body?.password);
  if (!ok) {
    recordFail(ip);
    await sleep(600);
    return NextResponse.json({ error: "Email ya password galat hai." }, { status: 401 });
  }

  clearFails(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, signSession(process.env.ADMIN_EMAIL.trim().toLowerCase()), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
  return res;
}
