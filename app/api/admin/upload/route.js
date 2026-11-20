import { NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { getAdmin, sameOrigin } from "../../../../lib/auth";
import { UPLOAD_DIR } from "../../../../lib/store";

export const dynamic = "force-dynamic";

const MAX_BYTES = 5 * 1024 * 1024;

// File ki asal type uske shuru ke bytes se pehchanta hai (naam/extension pe bharosa nahi).
function detect(buf) {
  if (buf.length > 12 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
  if (buf.length > 12 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (buf.length > 12 && buf.subarray(0, 4).toString() === "RIFF" && buf.subarray(8, 12).toString() === "WEBP") return "webp";
  return null;
}

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
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "Image 5MB se choti honi chahiye." }, { status: 413 });

  const buf = Buffer.from(await file.arrayBuffer());
  const ext = detect(buf);
  if (!ext) return NextResponse.json({ error: "Sirf JPG, PNG ya WEBP image allowed hai." }, { status: 415 });

  const name = `${crypto.randomBytes(16).toString("hex")}.${ext}`;
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOAD_DIR, name), buf);
  return NextResponse.json({ url: `/uploads/${name}` });
}
