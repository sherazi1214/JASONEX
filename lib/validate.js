// Admin se aane wale data ko saaf (sanitize) karta hai — frontend jo expect karta hai wohi shape.
import crypto from "crypto";

const str = (v, max) => String(v ?? "").replace(/\u0000/g, "").trim().slice(0, max);
const newId = () => crypto.randomBytes(6).toString("hex");
const cleanId = (v) => {
  const s = String(v ?? "");
  return /^[a-zA-Z0-9_-]{4,40}$/.test(s) ? s : newId();
};

// Sirf apni site ki path (/...) ya https URL allow.
export function cleanImage(v) {
  const s = str(v, 500);
  if (!s) return "";
  if (s.startsWith("//") || s.includes("..") || /[\s"'<>\\]/.test(s)) return "";
  if (s.startsWith("/")) return s;
  if (/^https:\/\/[^\s]+$/i.test(s)) return s;
  return "";
}

// Sirf apni site ki .pdf path allow.
export function cleanPdf(v) {
  const s = str(v, 300);
  if (!s.startsWith("/") || s.startsWith("//") || s.includes("..") || /[\s"'<>\\]/.test(s)) return "";
  return /\.pdf$/i.test(s) ? s : "";
}

export function slugify(text) {
  return (
    String(text || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "post"
  );
}

function list(v, max) {
  return Array.isArray(v) ? v.slice(0, max) : [];
}

export function cleanTeam(input) {
  return list(input, 60)
    .map((m) => ({
      id: cleanId(m?.id),
      name: str(m?.name, 80),
      role: str(m?.role, 60),
      title: str(m?.title, 80),
      image: cleanImage(m?.image),
    }))
    .filter((m) => m.name);
}

export function cleanPortfolio(input) {
  return list(input, 1) // sirf ek PDF
    .map((x) => ({ id: cleanId(x?.id), title: str(x?.title, 120), file: cleanPdf(x?.file) }))
    .filter((x) => x.file)
    .map((x) => ({ ...x, title: x.title || "Portfolio" }));
}

export function cleanSnaps(input) {
  return list(input, 80)
    .map((s) => ({ id: cleanId(s?.id), image: cleanImage(s?.image), caption: str(s?.caption, 120) }))
    .filter((s) => s.image);
}

export function cleanPosts(input) {
  const used = new Set();
  return list(input, 300)
    .map((p) => {
      const title = str(p?.title, 200);
      let content = p?.content;
      if (typeof content === "string") content = content.split(/\n\s*\n/);
      content = list(content, 100)
        .map((x) => str(x, 5000))
        .filter(Boolean);
      let slug = slugify(p?.slug || title);
      let base = slug;
      let n = 2;
      while (used.has(slug)) slug = `${base}-${n++}`;
      used.add(slug);
      return {
        id: cleanId(p?.id),
        slug,
        title,
        date: str(p?.date, 40),
        category: str(p?.category, 40) || "News",
        featured: Boolean(p?.featured),
        image: cleanImage(p?.image),
        content,
      };
    })
    .filter((p) => p.title);
}

export function cleanFounder(input) {
  const f = input || {};
  return {
    name: str(f.name, 80),
    role: str(f.role, 80),
    intro: str(f.intro, 3000),
    details: str(f.details, 4000),
    tags: list(f.tags, 12).map((t) => str(t, 40)).filter(Boolean),
    featuredIn: list(f.featuredIn, 9).map((t) => str(t, 40)).filter(Boolean),
    photo: cleanImage(f.photo),
  };
}

export const cleaners = {
  team: cleanTeam,
  snaps: cleanSnaps,
  posts: cleanPosts,
  founder: cleanFounder,
  portfolio: cleanPortfolio,
};
