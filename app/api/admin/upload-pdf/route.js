import { NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { getAdmin, sameOrigin } from "../../../../lib/auth";
import { UPLOAD_DIR } from "../../../../lib/store";

export const dynamic = "force-dynamic";

const MAX_BYTES = 20 * 1024 * 1024;

export async function POST(request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (!(await getAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let form;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const file = form.get("file");
  if (!file || typeof file === "string") return NextResponse.json({ error: "File nahi mili." }, { status: 400 });
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "PDF 20MB se choti honi chahiye." }, { status: 413 });

  const buf = Buffer.from(await file.arrayBuffer());
  // Asli PDF ka signature check (naam pe bharosa nahi)
  if (buf.length < 8 || buf.subarray(0, 5).toString("latin1") !== "%PDF-") {
    return NextResponse.json({ error: "Sirf PDF file allowed hai." }, { status: 415 });
  }

  const name = `${crypto.randomBytes(16).toString("hex")}.pdf`;
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOAD_DIR, name), buf);
  return NextResponse.json({ url: `/uploads/${name}` });
}
