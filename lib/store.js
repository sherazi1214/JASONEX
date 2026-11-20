// Simple JSON-file store. Data folder: ./data (ya DATA_DIR env). Pehli dafa seed data se banta hai.
import fs from "fs/promises";
import path from "path";
import { cleaners } from "./validate.js";
import { seedTeam, seedSnaps, seedFounder, seedPostsWithIds, seedPortfolio } from "./seed.js";

export const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
export const UPLOAD_DIR = path.join(DATA_DIR, "uploads");

const seeds = {
  team: () => seedTeam,
  snaps: () => seedSnaps,
  posts: () => seedPostsWithIds,
  founder: () => seedFounder,
  portfolio: () => seedPortfolio,
};

let queue = Promise.resolve();

function file(name) {
  if (!seeds[name]) throw new Error("Unknown collection");
  return path.join(DATA_DIR, `${name}.json`);
}

export async function readCollection(name) {
  try {
    const raw = await fs.readFile(file(name), "utf8");
    return JSON.parse(raw);
  } catch (e) {
    if (e.code !== "ENOENT" && !(e instanceof SyntaxError)) throw e;
    const data = cleaners[name](seeds[name]());
    if (e.code === "ENOENT") await writeCollection(name, data).catch(() => {});
    return data;
  }
}

export function writeCollection(name, data) {
  const target = file(name);
  const run = async () => {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const tmp = `${target}.${process.pid}.${Date.now()}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf8");
    await fs.rename(tmp, target);
  };
  const p = queue.then(run, run);
  queue = p.catch(() => {});
  return p;
}
