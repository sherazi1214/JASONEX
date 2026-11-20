import fs from "fs/promises";
import path from "path";
import { UPLOAD_DIR } from "../../../lib/store";

export const dynamic = "force-dynamic";

const TYPES = { jpg: "image/jpeg", png: "image/png", webp: "image/webp" };

export async function GET(request, { params }) {
  const { name } = await params;
  const m = /^[a-f0-9]{32}\.(jpg|png|webp)$/.exec(name || "");
  if (!m) return new Response("Not found", { status: 404 });
  try {
    const buf = await fs.readFile(path.join(UPLOAD_DIR, name));
    return new Response(buf, {
      headers: {
        "Content-Type": TYPES[m[1]],
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
