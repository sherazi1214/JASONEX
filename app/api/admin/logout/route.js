import { NextResponse } from "next/server";
import { COOKIE_NAME } from "../../../../lib/auth-core";
import { sameOrigin } from "../../../../lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", { httpOnly: true, sameSite: "strict", path: "/", maxAge: 0 });
  return res;
}
