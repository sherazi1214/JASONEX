import { NextResponse } from "next/server";
import { readCollection } from "../../lib/store";

export const dynamic = "force-dynamic";

// /portfolio koi page nahi hai: seedha admin ki pehli PDF par redirect karta hai.
export async function GET(request) {
  const items = await readCollection("portfolio");
  const target = items[0]?.file || "/";
  return NextResponse.redirect(new URL(target, request.url), 307);
}
