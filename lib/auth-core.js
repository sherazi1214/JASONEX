// Pure crypto helpers (koi Next.js dependency nahi) — session token + password check.
import crypto from "crypto";

export const COOKIE_NAME = "jx_admin";
export const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 ghante

function getSecret() {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) {
    throw new Error("SESSION_SECRET missing ya 32 chars se chota hai. `npm run setup-admin` chalayein.");
  }
  return s;
}

export function adminConfigured() {
  return Boolean(
    process.env.ADMIN_EMAIL &&
      process.env.ADMIN_PASSWORD_HASH &&
      process.env.SESSION_SECRET &&
      process.env.SESSION_SECRET.length >= 32
  );
}

export function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const key = crypto.scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 });
  return `scrypt:${salt.toString("hex")}:${key.toString("hex")}`;
}

function verifyPasswordHash(password, stored) {
  try {
    const [scheme, saltHex, keyHex] = String(stored).split(":");
    if (scheme !== "scrypt" || !saltHex || !keyHex) return false;
    const expected = Buffer.from(keyHex, "hex");
    const actual = crypto.scryptSync(password, Buffer.from(saltHex, "hex"), expected.length, {
      N: 16384,
      r: 8,
      p: 1,
    });
    return crypto.timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

function safeEqualStr(a, b) {
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

// Email aur password dono hamesha check hote hain (timing se andaza na lag sake).
export function verifyCredentials(email, password) {
  if (!adminConfigured()) return false;
  const okEmail = safeEqualStr(
    String(email || "").trim().toLowerCase(),
    process.env.ADMIN_EMAIL.trim().toLowerCase()
  );
  const okPass = verifyPasswordHash(String(password || ""), process.env.ADMIN_PASSWORD_HASH);
  return okEmail && okPass;
}

export function signSession(email) {
  const payload = Buffer.from(
    JSON.stringify({ e: email, exp: Date.now() + SESSION_TTL_MS, n: crypto.randomBytes(8).toString("hex") })
  ).toString("base64url");
  const sig = crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySession(token) {
  try {
    if (!token || typeof token !== "string") return null;
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return null;
    const expected = crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!data.exp || data.exp < Date.now()) return null;
    if (String(data.e).toLowerCase() !== process.env.ADMIN_EMAIL.trim().toLowerCase()) return null;
    return { email: data.e };
  } catch {
    return null;
  }
}

// ---- Login rate limit (in-memory): 5 galat koshish => 15 minute lock ----
const attempts = new Map();
const MAX_FAILS = 5;
const WINDOW_MS = 15 * 60 * 1000;

export function isLocked(key) {
  const r = attempts.get(key);
  if (!r) return false;
  if (Date.now() - r.first > WINDOW_MS) {
    attempts.delete(key);
    return false;
  }
  return r.count >= MAX_FAILS;
}
export function recordFail(key) {
  const r = attempts.get(key);
  if (!r || Date.now() - r.first > WINDOW_MS) attempts.set(key, { count: 1, first: Date.now() });
  else r.count += 1;
}
export function clearFails(key) {
  attempts.delete(key);
}
