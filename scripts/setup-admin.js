#!/usr/bin/env node
// Usage: npm run setup-admin -- you@gmail.com "Strong#Password123"
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const [email, password] = process.argv.slice(2);
if (!email || !password) {
  console.error('Usage: npm run setup-admin -- you@gmail.com "YourStrongPassword"');
  process.exit(1);
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  console.error("Email sahi nahi hai.");
  process.exit(1);
}
if (password.length < 12 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
  console.error("Password kam az kam 12 characters ka ho, aur usme chota + bara letter, number aur symbol ho.");
  process.exit(1);
}
const salt = crypto.randomBytes(16);
const key = crypto.scryptSync(password, salt, 64, { N: 16384, r: 8, p: 1 });
const hash = `scrypt:${salt.toString("hex")}:${key.toString("hex")}`;
const secret = crypto.randomBytes(48).toString("hex");

const envPath = path.join(process.cwd(), ".env.local");
let existing = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";
existing = existing
  .split("\n")
  .filter((l) => !/^(ADMIN_EMAIL|ADMIN_PASSWORD_HASH|SESSION_SECRET)=/.test(l))
  .join("\n")
  .trim();
const out = `${existing ? existing + "\n" : ""}ADMIN_EMAIL=${email.trim().toLowerCase()}\nADMIN_PASSWORD_HASH=${hash}\nSESSION_SECRET=${secret}\n`;
fs.writeFileSync(envPath, out, { mode: 0o600 });
console.log("Done. .env.local update ho gayi. Server restart karein, phir /admin/login pe login karein.");
