import { cookies } from "next/headers";
import { COOKIE_NAME, verifySession, adminConfigured } from "./auth-core";

// Server component / route handler me current admin return karta hai (ya null).
export async function getAdmin() {
  if (!adminConfigured()) return null;
  const jar = await cookies();
  return verifySession(jar.get(COOKIE_NAME)?.value);
}

// POST/PUT requests ke liye CSRF defence: Origin host == request host hona chahiye.
export function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // same-origin fetch me kabhi kabhi nahi hota; cookie SameSite=Strict hai
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}
