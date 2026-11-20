"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, ArrowUp, ArrowDown, Upload, LogOut, ExternalLink } from "lucide-react";

const uid = () => `n${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
const today = () =>
  new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const inputCls =
  "w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-sun";
const btnCls =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition disabled:opacity-50";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-white/60">{label}</span>
      {children}
    </label>
  );
}

// ---- image upload ----
async function uploadImage(file) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Upload fail ho gaya.");
  return data.url;
}

function ImageField({ label = "Image", value, onChange, round = false }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function pick(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    setErr("");
    try {
      onChange(await uploadImage(file));
    } catch (ex) {
      setErr(ex.message);
    }
    setBusy(false);
  }

  return (
    <div>
      <span className="mb-1 block text-xs text-white/60">{label}</span>
      <div className="flex items-center gap-3">
        <div
          className={`h-16 w-16 shrink-0 overflow-hidden bg-white/5 border border-white/10 ${
            round ? "rounded-full" : "rounded-lg"
          }`}
        >
          {value && <img src={value} alt="" className="h-full w-full object-cover" />}
        </div>
        <label
          className={`${btnCls} cursor-pointer border border-white/15 bg-white/5 hover:bg-white/10`}
        >
          <Upload size={14} />
          {busy ? "Uploading..." : value ? "Change" : "Upload"}
          <input type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={pick} disabled={busy} />
        </label>
      </div>
      {err && <p className="mt-1 text-xs text-red-400">{err}</p>}
    </div>
  );
}

// ---- generic save bar ----
function SaveBar({ onSave, saving, status }) {
  return (
    <div className="sticky bottom-4 z-10 mt-8 flex items-center gap-4 rounded-full border border-white/10 bg-black/80 px-4 py-3 backdrop-blur">
      <button onClick={onSave} disabled={saving} className={`${btnCls} bg-sun text-black hover:opacity-90`}>
        {saving ? "Saving..." : "Save changes"}
      </button>
      {status && (
        <span className={`text-sm ${status.type === "error" ? "text-red-400" : "text-emerald-400"}`}>
          {status.text}
        </span>
      )}
    </div>
  );
}

function useSaver(resource, router) {
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(null);

  async function save(payload) {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch(`/api/admin/${resource}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 401) {
        router.replace("/admin/login");
        return null;
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Save nahi ho saka.");
      setStatus({ type: "ok", text: "Saved. Website pe update ho gaya." });
      return data;
    } catch (ex) {
      setStatus({ type: "error", text: ex.message });
      return null;
    } finally {
      setSaving(false);
    }
  }
  return { save, saving, status };
}

function move(list, i, dir) {
  const j = i + dir;
  if (j < 0 || j >= list.length) return list;
  const copy = [...list];
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

function RowActions({ i, total, onMove, onRemove }) {
  return (
    <div className="flex gap-1">
      <button type="button" onClick={() => onMove(-1)} disabled={i === 0} aria-label="Move up" className="rounded-lg bg-white/5 p-2 hover:bg-white/10 disabled:opacity-30">
        <ArrowUp size={14} />
      </button>
      <button type="button" onClick={() => onMove(1)} disabled={i === total - 1} aria-label="Move down" className="rounded-lg bg-white/5 p-2 hover:bg-white/10 disabled:opacity-30">
        <ArrowDown size={14} />
      </button>
      <button
        type="button"
        onClick={() => {
          if (confirm("Pakka remove karna hai?")) onRemove();
        }}
        aria-label="Remove"
        className="rounded-lg bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}

// ================= TEAM =================
function TeamTab({ initial, router }) {
  const [items, setItems] = useState(initial);
  const { save, saving, status } = useSaver("team", router);
  const update = (i, patch) => setItems((l) => l.map((m, k) => (k === i ? { ...m, ...patch } : m)));

  return (
    <div>
      <p className="mb-4 text-sm text-white/50">About page ke "Say Hello to Our Squad" section ke members.</p>
      <div className="space-y-4">
        {items.map((m, i) => (
          <div key={m.id} className="rounded-2xl border border-white/10 bg-panel p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold">{m.name || "New member"}</span>
              <RowActions i={i} total={items.length} onMove={(d) => setItems((l) => move(l, i, d))} onRemove={() => setItems((l) => l.filter((_, k) => k !== i))} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Name"><input className={inputCls} value={m.name} maxLength={80} onChange={(e) => update(i, { name: e.target.value })} /></Field>
              <Field label="Job title (naam ke neeche)"><input className={inputCls} value={m.title} maxLength={80} onChange={(e) => update(i, { title: e.target.value })} /></Field>
              <Field label="Role label (photo ke upar)"><input className={inputCls} value={m.role} maxLength={60} onChange={(e) => update(i, { role: e.target.value })} /></Field>
              <ImageField label="Photo" value={m.image} onChange={(url) => update(i, { image: url })} />
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setItems((l) => [...l, { id: uid(), name: "", role: "", title: "", image: "" }])} className={`${btnCls} mt-4 border border-white/15 bg-white/5 hover:bg-white/10`}>
        <Plus size={16} /> Add team member
      </button>
      <SaveBar saving={saving} status={status} onSave={async () => {
        if (items.some((m) => !m.name.trim())) return alert("Har member ka naam likhna zaroori hai.");
        const saved = await save(items);
        if (saved) setItems(saved);
      }} />
    </div>
  );
}

// ================= BLOG =================
const toEditable = (posts) => posts.map((p) => ({ ...p, content: Array.isArray(p.content) ? p.content.join("\n\n") : p.content }));

function PostsTab({ initial, router }) {
  const [items, setItems] = useState(toEditable(initial));
  const [open, setOpen] = useState(null);
  const { save, saving, status } = useSaver("posts", router);
  const update = (i, patch) => setItems((l) => l.map((p, k) => (k === i ? { ...p, ...patch } : p)));

  return (
    <div>
      <p className="mb-4 text-sm text-white/50">
        Blog likhein ya hataein. Paragraphs ke darmiyan ek khali line chhorein. Link (slug) title se khud ban jata hai.
      </p>
      <div className="space-y-4">
        {items.map((p, i) => (
          <div key={p.id} className="rounded-2xl border border-white/10 bg-panel p-4">
            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={() => setOpen(open === p.id ? null : p.id)} className="flex-1 text-left text-sm font-semibold">
                {p.title || "New blog post"} <span className="ml-2 text-xs font-normal text-white/40">{open === p.id ? "(close)" : "(edit)"}</span>
              </button>
              <RowActions i={i} total={items.length} onMove={(d) => setItems((l) => move(l, i, d))} onRemove={() => setItems((l) => l.filter((_, k) => k !== i))} />
            </div>
            {open === p.id && (
              <div className="mt-4 grid gap-3">
                <Field label="Title"><input className={inputCls} value={p.title} maxLength={200} onChange={(e) => update(i, { title: e.target.value })} /></Field>
                <div className="grid gap-3 sm:grid-cols-3">
                  <Field label="Date"><input className={inputCls} value={p.date} maxLength={40} onChange={(e) => update(i, { date: e.target.value })} /></Field>
                  <Field label="Category"><input className={inputCls} value={p.category} maxLength={40} onChange={(e) => update(i, { category: e.target.value })} /></Field>
                  <label className="flex items-center gap-2 pt-6 text-sm">
                    <input type="checkbox" checked={p.featured} onChange={(e) => update(i, { featured: e.target.checked })} /> Featured
                  </label>
                </div>
                <ImageField label="Cover image" value={p.image} onChange={(url) => update(i, { image: url })} />
                <Field label="Blog content">
                  <textarea className={`${inputCls} min-h-[220px]`} value={p.content} onChange={(e) => update(i, { content: e.target.value })} />
                </Field>
                {p.slug && (
                  <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-sun">
                    <ExternalLink size={12} /> /blog/{p.slug}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          const id = uid();
          setItems((l) => [{ id, slug: "", title: "", date: today(), category: "News", featured: false, image: "", content: "" }, ...l]);
          setOpen(id);
        }}
        className={`${btnCls} mt-4 border border-white/15 bg-white/5 hover:bg-white/10`}
      >
        <Plus size={16} /> Write new blog
      </button>
      <SaveBar saving={saving} status={status} onSave={async () => {
        if (items.some((p) => !p.title.trim() || !p.content.trim())) return alert("Har blog ka title aur content zaroori hai.");
        const saved = await save(items);
        if (saved) setItems(toEditable(saved));
      }} />
    </div>
  );
}

// ================= SNAPS =================
function SnapsTab({ initial, router }) {
  const [items, setItems] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const { save, saving, status } = useSaver("snaps", router);

  async function addFiles(e) {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;
    setBusy(true);
    setErr("");
    for (const f of files) {
      try {
        const url = await uploadImage(f);
        setItems((l) => [...l, { id: uid(), image: url, caption: "" }]);
      } catch (ex) {
        setErr(`${f.name}: ${ex.message}`);
      }
    }
    setBusy(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-white/50">About page ke "Our Agency Snaps" slider ki pictures (ek waqt me ek picture auto-slide hoti hai).</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <div key={s.id} className="rounded-2xl border border-white/10 bg-panel p-3">
            <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-white/5">
              <img src={s.image} alt="" className="h-full w-full object-cover" />
            </div>
            <input className={`${inputCls} mb-3`} placeholder="Caption (optional)" value={s.caption} maxLength={120} onChange={(e) => setItems((l) => l.map((x, k) => (k === i ? { ...x, caption: e.target.value } : x)))} />
            <RowActions i={i} total={items.length} onMove={(d) => setItems((l) => move(l, i, d))} onRemove={() => setItems((l) => l.filter((_, k) => k !== i))} />
          </div>
        ))}
      </div>
      <label className={`${btnCls} mt-4 cursor-pointer border border-white/15 bg-white/5 hover:bg-white/10`}>
        <Plus size={16} /> {busy ? "Uploading..." : "Add pictures"}
        <input type="file" multiple accept="image/jpeg,image/png,image/webp" className="hidden" onChange={addFiles} disabled={busy} />
      </label>
      {err && <p className="mt-2 text-sm text-red-400">{err}</p>}
      <SaveBar saving={saving} status={status} onSave={async () => {
        const saved = await save(items);
        if (saved) setItems(saved);
      }} />
    </div>
  );
}

// ================= FOUNDER =================
function FounderTab({ initial, router }) {
  const [f, setF] = useState({
    ...initial,
    tags: (initial.tags || []).join("\n"),
    featuredIn: (initial.featuredIn || []).join("\n"),
  });
  const { save, saving, status } = useSaver("founder", router);
  const set = (patch) => setF((x) => ({ ...x, ...patch }));
  const lines = (t) => t.split("\n").map((s) => s.trim()).filter(Boolean);

  return (
    <div>
      <p className="mb-4 text-sm text-white/50">About page ke "ABOUT FOUNDER" section ka sara content.</p>
      <div className="grid gap-4 rounded-2xl border border-white/10 bg-panel p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Name"><input className={inputCls} value={f.name} maxLength={80} onChange={(e) => set({ name: e.target.value })} /></Field>
          <Field label="Role (e.g. Founder & CEO)"><input className={inputCls} value={f.role} maxLength={80} onChange={(e) => set({ role: e.target.value })} /></Field>
        </div>
        <ImageField label="Founder photo" round value={f.photo} onChange={(url) => set({ photo: url })} />
        <Field label="Intro paragraph (heading ke neeche, upar wala)">
          <textarea className={`${inputCls} min-h-[140px]`} value={f.intro} maxLength={3000} onChange={(e) => set({ intro: e.target.value })} />
        </Field>
        <Field label="Details (photo ke saath wala text; paragraphs ke darmiyan khali line)">
          <textarea className={`${inputCls} min-h-[200px]`} value={f.details} maxLength={4000} onChange={(e) => set({ details: e.target.value })} />
        </Field>
        <Field label="Tags (har line me ek)">
          <textarea className={`${inputCls} min-h-[100px]`} value={f.tags} onChange={(e) => set({ tags: e.target.value })} />
        </Field>
        <Field label="Featured In (har line me ek, max 9)">
          <textarea className={`${inputCls} min-h-[100px]`} value={f.featuredIn} onChange={(e) => set({ featuredIn: e.target.value })} />
        </Field>
      </div>
      <SaveBar saving={saving} status={status} onSave={async () => {
        if (!f.name.trim()) return alert("Founder ka naam zaroori hai.");
        const saved = await save({ ...f, tags: lines(f.tags), featuredIn: lines(f.featuredIn) });
        if (saved) setF({ ...saved, tags: saved.tags.join("\n"), featuredIn: saved.featuredIn.join("\n") });
      }} />
    </div>
  );
}

// ================= PORTFOLIO PDF (sirf ek) =================
function PortfolioTab({ initial, router }) {
  const [item, setItem] = useState(initial[0] || null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const { save, saving, status } = useSaver("portfolio", router);

  async function pick(e) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    setBusy(true);
    setErr("");
    try {
      const fd = new FormData();
      fd.append("file", f);
      const res = await fetch("/api/admin/upload-pdf", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Upload fail ho gaya.");
      setItem({ id: item?.id || uid(), title: "Portfolio", file: data.url });
    } catch (ex) {
      setErr(ex.message);
    }
    setBusy(false);
  }

  return (
    <div>
      <p className="mb-4 text-sm text-white/50">
        Website ke "Portfolio" button par click karne se yehi <b>ek PDF</b> khulti hai. Nayi PDF upload karne se
        purani replace ho jati hai. Upload ke baad Save zaroor karein.
      </p>
      <div className="rounded-2xl border border-white/10 bg-panel p-4">
        {item ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-sun/20 px-3 py-1 text-xs font-semibold text-sun">Current PDF</span>
            <a href={item.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-sun">
              <ExternalLink size={14} /> View PDF
            </a>
            <button
              type="button"
              onClick={() => { if (confirm("PDF remove karni hai?")) setItem(null); }}
              className="ml-auto inline-flex items-center gap-1 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400 hover:bg-red-500/20"
            >
              <Trash2 size={14} /> Remove
            </button>
          </div>
        ) : (
          <p className="text-sm text-white/40">Koi PDF nahi hai. Portfolio button abhi home page par le jayega.</p>
        )}
      </div>
      <label className={`${btnCls} mt-4 cursor-pointer border border-white/15 bg-white/5 hover:bg-white/10`}>
        <Upload size={16} /> {busy ? "Uploading..." : item ? "Replace PDF" : "Upload PDF"}
        <input type="file" accept="application/pdf" className="hidden" onChange={pick} disabled={busy} />
      </label>
      {err && <p className="mt-2 text-sm text-red-400">{err}</p>}
      <SaveBar saving={saving} status={status} onSave={async () => {
        const saved = await save(item ? [item] : []);
        if (saved) setItem(saved[0] || null);
      }} />
    </div>
  );
}

// ================= MAIN =================
const TABS = [
  { id: "portfolio", label: "Portfolio PDF" },
  { id: "team", label: "Team Members" },
  { id: "posts", label: "Blogs" },
  { id: "snaps", label: "Agency Snaps" },
  { id: "founder", label: "About Founder" },
];

export default function AdminDashboard({ email, initial }) {
  const router = useRouter();
  const [tab, setTab] = useState("portfolio");

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">
            <span className="text-sun">JASON</span>EX Admin
          </h1>
          <p className="text-xs text-white/40">{email}</p>
        </div>
        <div className="flex gap-2">
          <a href="/" target="_blank" rel="noopener noreferrer" className={`${btnCls} border border-white/15 bg-white/5 hover:bg-white/10`}>
            <ExternalLink size={14} /> View site
          </a>
          <button onClick={logout} className={`${btnCls} border border-white/15 bg-white/5 hover:bg-white/10`}>
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <nav className="mb-8 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`${btnCls} ${tab === t.id ? "bg-sun text-black" : "border border-white/15 bg-white/5 hover:bg-white/10"}`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div hidden={tab !== "portfolio"}><PortfolioTab initial={initial.portfolio} router={router} /></div>
      {/* Sab tabs mounted rehte hain taake tab badalne par unsaved changes na jayen */}
      <div hidden={tab !== "team"}><TeamTab initial={initial.team} router={router} /></div>
      <div hidden={tab !== "posts"}><PostsTab initial={initial.posts} router={router} /></div>
      <div hidden={tab !== "snaps"}><SnapsTab initial={initial.snaps} router={router} /></div>
      <div hidden={tab !== "founder"}><FounderTab initial={initial.founder} router={router} /></div>
    </div>
  );
}
