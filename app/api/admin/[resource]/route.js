import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAdmin, sameOrigin } from "../../../../lib/auth";
import { readCollection, writeCollection } from "../../../../lib/store";
import { cleaners } from "../../../../lib/validate";

export const dynamic = "force-dynamic";

const ALLOWED = ["team", "posts", "snaps", "founder", "portfolio"];

export async function GET(request, { params }) {
  const { resource } = await params;
  if (!ALLOWED.includes(resource)) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!(await getAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await readCollection(resource));
}

export async function PUT(request, { params }) {
  const { resource } = await params;
  if (!ALLOWED.includes(resource)) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!sameOrigin(request)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  if (!(await getAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const clean = cleaners[resource](body);
  if (resource === "founder" && !clean.name) {
    return NextResponse.json({ error: "Founder ka naam zaroori hai." }, { status: 400 });
  }

  await writeCollection(resource, clean);
  revalidatePath("/", "layout");
  return NextResponse.json(clean);
}
