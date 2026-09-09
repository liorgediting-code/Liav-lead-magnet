"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Check,
  Download,
  LogOut,
  MessageCircle,
  RefreshCw,
  Search,
  Send,
  Trash2,
} from "lucide-react";

const TOKEN_KEY = "liav_admin_token";

const STATUS_LABELS = {
  new: "חדש",
  contacted: "נוצר קשר",
  booked: "נקבעה שיחה",
  won: "נסגר",
  lost: "לא רלוונטי",
} as const;

type LeadStatus = keyof typeof STATUS_LABELS;

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-primary/20 text-primary border-primary/30",
  contacted: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  booked: "bg-violet-500/15 text-violet-300 border-violet-400/30",
  won: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  lost: "bg-white/5 text-white/40 border-white/15",
};

type Lead = {
  /** 1-based sheet row — doubles as the lead's identity in the UI. */
  row: number;
  name: string;
  phone: string;
  email: string;
  source: string;
  status: LeadStatus;
  utmCampaign: string;
  utmContent: string;
  fbclid: string;
  landingPage: string;
  createdAt: string;
};

type Stats = {
  total: number;
  today: number;
  week: number;
  withPhone: number;
  booked: number;
};

type SendResult = { name?: string; phone?: string; ok: boolean; error?: string };

/** Which ad/campaign brought this lead in, from the utm_* params captured at opt-in. */
function leadSource(l: Lead) {
  if (l.utmCampaign || l.utmContent) {
    return [l.utmCampaign, l.utmContent].filter(Boolean).join(" / ");
  }
  if (l.fbclid) return "מודעה (לא מתויגת)";
  return l.landingPage || "אורגני";
}

function fmtDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return (
    d.toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit" }) +
    " " +
    d.toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" })
  );
}

function waLink(phone: string) {
  const d = phone.replace(/\D/g, "");
  const intl = d.startsWith("972") ? d : d.startsWith("0") ? `972${d.slice(1)}` : d;
  return `https://wa.me/${intl}`;
}

const panel =
  "bg-white/[0.04] border border-white/10 rounded-2xl p-5 md:p-6 mb-5";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl border border-white/15 text-sm font-bold text-white/70 hover:text-white hover:border-primary/60 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
const field =
  "w-full h-11 rounded-xl bg-navy border border-white/15 px-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25";

export default function LeadsDashboard() {
  const [token, setToken] = useState("");
  const [booted, setBooted] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadError, setLoadError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | LeadStatus>("all");

  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [results, setResults] = useState<SendResult[]>([]);

  useEffect(() => {
    setToken(sessionStorage.getItem(TOKEN_KEY) || "");
    setBooted(true);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setLeads([]);
    setStats(null);
    setSelected(new Set());
  }, []);

  const api = useCallback(
    async (path: string, init: RequestInit = {}) => {
      const res = await fetch(path, {
        ...init,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          ...(init.headers || {}),
        },
      });
      if (res.status === 401) {
        logout();
        throw new Error("פג תוקף החיבור, התחבר שוב");
      }
      return res;
    },
    [token, logout]
  );

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setLoadError("");
    try {
      const res = await api("/api/admin/leads");
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "טעינה נכשלה");
      setLeads(data.leads || []);
      setStats(data.stats || null);
      setSelected((prev) => {
        const rows = new Set((data.leads || []).map((l: Lead) => l.row));
        return new Set([...prev].filter((r) => rows.has(r)));
      });
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : "טעינה נכשלה");
    } finally {
      setLoading(false);
    }
  }, [api, token]);

  useEffect(() => {
    if (token) load();
  }, [token, load]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setLoggingIn(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "שגיאה בהתחברות");
      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setPassword("");
    } catch (e) {
      setLoginError(e instanceof Error ? e.message : "שגיאה בהתחברות");
    } finally {
      setLoggingIn(false);
    }
  }

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((l) => {
      if (statusFilter !== "all" && (l.status || "new") !== statusFilter) return false;
      if (!q) return true;
      return [l.name, l.phone, l.email, leadSource(l)]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [leads, query, statusFilter]);

  const recipients = useMemo(
    () => leads.filter((l) => selected.has(l.row) && l.phone),
    [leads, selected]
  );

  function toggle(row: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(row)) next.delete(row);
      else next.add(row);
      return next;
    });
  }

  function toggleAll() {
    const allShown = visible.length > 0 && visible.every((l) => selected.has(l.row));
    setSelected((prev) => {
      const next = new Set(prev);
      visible.forEach((l) => (allShown ? next.delete(l.row) : next.add(l.row)));
      return next;
    });
  }

  async function changeStatus(lead: Lead, status: LeadStatus) {
    const before = leads;
    setLeads((prev) => prev.map((l) => (l.row === lead.row ? { ...l, status } : l)));
    try {
      const res = await api("/api/admin/leads", {
        method: "PATCH",
        body: JSON.stringify({ row: lead.row, status, phone: lead.phone, name: lead.name }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "עדכון הסטטוס נכשל");
    } catch (e) {
      setLeads(before);
      alert(e instanceof Error ? e.message : "עדכון הסטטוס נכשל");
    }
  }

  async function remove(lead: Lead) {
    if (
      !confirm(
        `למחוק את ${lead.name || "הליד"}? השורה תימחק מהגיליון לצמיתות.`
      )
    )
      return;
    try {
      const res = await api("/api/admin/leads", {
        method: "DELETE",
        body: JSON.stringify({ row: lead.row, phone: lead.phone, name: lead.name }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "המחיקה נכשלה");
      // Deleting a row renumbers everything below it — reload rather than splice.
      await load();
    } catch (e) {
      alert(e instanceof Error ? e.message : "המחיקה נכשלה");
    }
  }

  async function send() {
    const text = message.trim();
    if (!text) return alert("כתוב הודעה לפני השליחה");
    if (!recipients.length) return;
    if (!confirm(`לשלוח וואטסאפ ל-${recipients.length} אנשים?`)) return;

    setSending(true);
    setResults([]);
    try {
      const res = await api("/api/admin/send", {
        method: "POST",
        body: JSON.stringify({
          message: text,
          recipients: recipients.map((l) => ({ name: l.name, phone: l.phone })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "שליחה נכשלה");
      setResults(data.results || []);
    } catch (e) {
      alert(e instanceof Error ? e.message : "שליחה נכשלה");
    } finally {
      setSending(false);
    }
  }

  function exportCsv() {
    const rows = [
      ["שם", "טלפון", "אימייל", "מקור", "סטטוס", "תאריך"],
      ...visible.map((l) => [
        l.name,
        l.phone,
        l.email,
        leadSource(l),
        STATUS_LABELS[l.status || "new"],
        l.createdAt,
      ]),
    ];
    const csv = rows
      .map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(","))
      .join("\n");
    // BOM so Excel opens the Hebrew correctly
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!booted) return null;

  /* ── login ── */
  if (!token) {
    return (
      <div className="min-h-screen grid place-items-center px-5 py-20">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center"
        >
          <h1 className="font-display text-2xl font-black text-white mb-1">
            דשבורד לידים
          </h1>
          <p className="text-sm text-white/45 mb-7">אזור מנהל · הזן סיסמה כדי להיכנס</p>
          <label htmlFor="pw" className="block text-start text-sm text-white/60 mb-2">
            סיסמה
          </label>
          <input
            id="pw"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={field}
            required
          />
          <button
            type="submit"
            disabled={loggingIn}
            className="mt-4 w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loggingIn ? "בודק…" : "כניסה"}
          </button>
          {loginError && (
            <p className="mt-3 text-sm text-red-400 font-medium">{loginError}</p>
          )}
        </form>
      </div>
    );
  }

  /* ── dashboard ── */
  const allShown = visible.length > 0 && visible.every((l) => selected.has(l.row));

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7">
        <h1 className="font-display text-2xl md:text-3xl font-black text-white">
          דשבורד לידים
        </h1>
        <div className="flex gap-2">
          <button onClick={load} disabled={loading} className={ghostBtn}>
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} aria-hidden />
            רענן
          </button>
          <button onClick={exportCsv} className={ghostBtn}>
            <Download className="w-4 h-4" aria-hidden />
            ייצוא CSV
          </button>
          <button onClick={logout} className={ghostBtn}>
            <LogOut className="w-4 h-4" aria-hidden />
            התנתק
          </button>
        </div>
      </div>

      {loadError && (
        <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {loadError}
        </div>
      )}

      {/* stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {[
          { k: "סה״כ לידים", v: stats?.total },
          { k: "היום", v: stats?.today },
          { k: "7 ימים אחרונים", v: stats?.week },
          { k: "עם טלפון", v: stats?.withPhone },
          { k: "נקבעה שיחה", v: stats?.booked },
        ].map(({ k, v }) => (
          <div key={k} className="bg-white/[0.04] border border-white/10 rounded-2xl p-4">
            <p className="text-xs font-bold text-white/45">{k}</p>
            <p className="font-display text-3xl font-black text-primary leading-tight mt-1">
              {v ?? "–"}
            </p>
          </div>
        ))}
      </div>

      {/* leads */}
      <section className={panel}>
        <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
          <h2 className="font-display text-lg font-extrabold text-white">
            הלידים שלך{" "}
            <span className="text-white/35 font-bold text-base">({visible.length})</span>
          </h2>
          <div className="flex gap-2 flex-wrap">
            <div className="relative">
              <Search
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-white/30"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="חיפוש שם / טלפון / מייל"
                aria-label="חיפוש בלידים"
                className={`${field} w-56 pr-9`}
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | LeadStatus)}
              aria-label="סינון לפי סטטוס"
              className={`${field} w-40 cursor-pointer`}
            >
              <option value="all">כל הסטטוסים</option>
              {(Object.keys(STATUS_LABELS) as LeadStatus[]).map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABELS[s]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-[14.5px] border-collapse">
            <thead>
              <tr className="text-white/40 text-xs uppercase tracking-wider">
                <th className="w-10 py-3 px-2 text-start">
                  <input
                    type="checkbox"
                    checked={allShown}
                    onChange={toggleAll}
                    aria-label="בחר הכל"
                    className="w-4 h-4 accent-[oklch(0.72_0.21_50)] cursor-pointer"
                  />
                </th>
                <th className="py-3 px-2 text-start font-bold">שם</th>
                <th className="py-3 px-2 text-start font-bold">טלפון</th>
                <th className="py-3 px-2 text-start font-bold">אימייל</th>
                <th className="py-3 px-2 text-start font-bold">מקור</th>
                <th className="py-3 px-2 text-start font-bold">סטטוס</th>
                <th className="py-3 px-2 text-start font-bold">נכנס</th>
                <th className="w-10" />
              </tr>
            </thead>
            <tbody>
              {visible.map((l) => (
                <tr
                  key={l.row}
                  className={`border-t border-white/[0.07] ${selected.has(l.row) ? "bg-primary/[0.06]" : ""}`}
                >
                  <td className="py-3 px-2">
                    <input
                      type="checkbox"
                      checked={selected.has(l.row)}
                      onChange={() => toggle(l.row)}
                      aria-label={`בחר את ${l.name}`}
                      className="w-4 h-4 accent-[oklch(0.72_0.21_50)] cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-2 font-extrabold text-white">{l.name || "—"}</td>
                  <td className="py-3 px-2">
                    {l.phone ? (
                      <a
                        href={waLink(l.phone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="inline-flex items-center gap-1.5 text-white/75 hover:text-emerald-300 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" aria-hidden />
                        {l.phone}
                      </a>
                    ) : (
                      <span className="text-white/25">—</span>
                    )}
                  </td>
                  <td className="py-3 px-2 text-[13px] text-white/45" dir="ltr">
                    {l.email || "—"}
                  </td>
                  <td className="py-3 px-2 text-[13px] text-white/45">{leadSource(l)}</td>
                  <td className="py-3 px-2">
                    <select
                      value={l.status || "new"}
                      onChange={(e) => changeStatus(l, e.target.value as LeadStatus)}
                      aria-label={`סטטוס של ${l.name}`}
                      className={`h-8 rounded-lg border px-2 text-xs font-bold cursor-pointer bg-transparent ${STATUS_STYLES[l.status || "new"]}`}
                    >
                      {(Object.keys(STATUS_LABELS) as LeadStatus[]).map((s) => (
                        <option key={s} value={s} className="bg-navy text-white">
                          {STATUS_LABELS[s]}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-2 text-[13px] text-white/45 whitespace-nowrap">
                    {fmtDate(l.createdAt)}
                  </td>
                  <td className="py-3 px-2">
                    <button
                      onClick={() => remove(l)}
                      aria-label={`מחק את ${l.name}`}
                      className="w-8 h-8 grid place-items-center rounded-lg border border-white/12 text-white/35 hover:text-red-400 hover:border-red-400/50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {visible.length === 0 && (
          <p className="text-center text-white/40 font-bold py-10">
            {leads.length === 0
              ? "עדיין אין לידים. ברגע שמישהו ימלא טופס באתר — הוא יופיע כאן."
              : "אין לידים שתואמים לסינון."}
          </p>
        )}
      </section>

      {/* whatsapp sender */}
      <section className={panel}>
        <h2 className="font-display text-lg font-extrabold text-white mb-1">
          שליחת וואטסאפ
        </h2>
        <p className="text-sm text-white/45 mb-4">
          ההודעה נשלחת לכל מי שמסומן למעלה. אפשר לכתוב <b className="text-white/70">{"{שם}"}</b>{" "}
          וזה יוחלף בשם של כל נמען. משפט הסרה מתווסף אוטומטית, כנדרש בחוק.
        </p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="היי {שם}, ראיתי שהורדת את המדריך — רוצה שנקבע שיחה קצרה?"
          aria-label="תוכן ההודעה"
          className={`${field} h-auto min-h-32 py-3 leading-relaxed resize-y`}
        />
        <div className="flex items-center justify-between gap-3 flex-wrap mt-4">
          <span className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-[13px] text-white/60">
            נבחרו <b className="text-primary">{recipients.length}</b> נמענים עם טלפון
          </span>
          <button
            onClick={send}
            disabled={sending || recipients.length === 0}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-emerald-500 text-emerald-950 font-bold cursor-pointer hover:bg-emerald-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" aria-hidden />
            {sending ? "שולח…" : "שלח וואטסאפ"}
          </button>
        </div>

        {results.length > 0 && (
          <div className="grid gap-1.5 mt-4">
            {results.map((r, i) => (
              <div
                key={`${r.phone}-${i}`}
                className="flex items-center gap-2.5 text-[13.5px] rounded-lg bg-white/[0.04] px-3 py-2"
              >
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${r.ok ? "bg-emerald-400" : "bg-red-400"}`}
                  aria-hidden
                />
                <span className="font-extrabold text-white">{r.name}</span>
                <span className="text-white/40" dir="ltr">
                  {r.phone}
                </span>
                <span className="ms-auto text-white/40 text-xs">
                  {r.ok ? (
                    <span className="inline-flex items-center gap-1 text-emerald-300">
                      <Check className="w-3 h-3" aria-hidden /> נשלח
                    </span>
                  ) : (
                    `נכשל · ${r.error || ""}`
                  )}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
