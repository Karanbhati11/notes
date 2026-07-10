"use client";

import { useState, useEffect, useRef } from "react";

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const ClearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M9 6V4h6v2" />
  </svg>
);
const SaveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
  </svg>
);
const CloudIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

export default function SessionNote({ user }) {
  const isLoggedIn = !!user;

  const [content, setContent] = useState("");
  const [lastSaved, setLastSaved] = useState(null);
  const [toast, setToast] = useState(null);
  const [saving, setSaving] = useState(false);
  const [loadingCloud, setLoadingCloud] = useState(false);
  const initialLoadDone = useRef(false);

  // ── Load on mount ──────────────────────────────────────────────────────
  useEffect(() => {
    if (initialLoadDone.current) return;
    initialLoadDone.current = true;

    if (isLoggedIn) {
      // Load from DB, fall back to sessionStorage
      setLoadingCloud(true);
      fetch("/api/session-note")
        .then((r) => r.json())
        .then(({ content: cloud, updatedAt }) => {
          if (cloud !== null && cloud !== undefined) {
            setContent(cloud);
            if (updatedAt) setLastSaved(new Date(updatedAt));
          } else {
            // Nothing in DB yet — load from sessionStorage as seed
            const local = sessionStorage.getItem("sessionNote");
            if (local) setContent(local);
          }
        })
        .catch(() => {
          const local = sessionStorage.getItem("sessionNote");
          if (local) setContent(local);
        })
        .finally(() => setLoadingCloud(false));
    } else {
      // Guest — use sessionStorage only
      const saved = sessionStorage.getItem("sessionNote");
      if (saved) setContent(saved);
      const ts = sessionStorage.getItem("sessionNoteTs");
      if (ts) setLastSaved(new Date(ts));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Keep sessionStorage in sync as user types ──────────────────────────
  const handleChange = (e) => {
    const val = e.target.value;
    setContent(val);
    sessionStorage.setItem("sessionNote", val);
  };

  // ── Save ───────────────────────────────────────────────────────────────
  const handleSave = async () => {
    if (saving) return;
    const now = new Date();

    // Always save to sessionStorage
    sessionStorage.setItem("sessionNote", content);
    sessionStorage.setItem("sessionNoteTs", now.toISOString());
    setLastSaved(now);

    if (isLoggedIn) {
      setSaving(true);
      try {
        await fetch("/api/session-note", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content }),
        });
        showToast("Saved to cloud ☁");
      } catch {
        showToast("Saved locally (cloud sync failed)");
      } finally {
        setSaving(false);
      }
    } else {
      showToast("Saved!");
    }
  };

  // ── Copy ──────────────────────────────────────────────────────────────
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    showToast("Copied!");
  };

  // ── Clear ─────────────────────────────────────────────────────────────
  const handleClear = async () => {
    if (!content.trim()) return;
    if (!window.confirm("Clear this session note?")) return;

    setContent("");
    setLastSaved(null);
    sessionStorage.removeItem("sessionNote");
    sessionStorage.removeItem("sessionNoteTs");

    if (isLoggedIn) {
      fetch("/api/session-note", { method: "DELETE" }).catch(() => {});
    }
    showToast("Cleared.");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div
        className="bg-black border border-[#2a2a2a] rounded-sm shadow-board flex flex-col overflow-hidden"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        {/* Header */}
        <div className="bg-[#161616] px-8 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.91 23.5L14 19.77L7.09 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z" fill="#CCFF90" />
            </svg>
            <h2 className="text-white font-bold text-2xl font-inter tracking-tight">Session Note</h2>
            {/* Storage indicator */}
            {isLoggedIn ? (
              <span className="flex items-center gap-1.5 text-[#CCFF90] text-xs font-inter">
                <CloudIcon /> Synced across devices
              </span>
            ) : (
              <span className="text-[#707070] text-xs font-inter">
                This session only
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleSave}
              disabled={saving || loadingCloud}
              title={isLoggedIn ? "Save to cloud" : "Save"}
              className="p-2 rounded hover:bg-[#2a2a2a] text-[#707070] hover:text-[#CCFF90] disabled:opacity-40 transition-colors"
              aria-label="Save note"
            >
              <SaveIcon />
            </button>
            <button
              onClick={handleCopy}
              title="Copy"
              className="p-2 rounded hover:bg-[#2a2a2a] text-[#707070] hover:text-[#CFCFCF] transition-colors"
              aria-label="Copy note"
            >
              <CopyIcon />
            </button>
            <button
              onClick={handleClear}
              title="Clear"
              className="p-2 rounded hover:bg-[#2a2a2a] text-[#707070] hover:text-[#FF8A80] transition-colors"
              aria-label="Clear note"
            >
              <ClearIcon />
            </button>
          </div>
        </div>

        <div className="px-8 pt-6 shrink-0">
          <div className="border-t border-dashed border-[#2a2a2a]" />
        </div>

        {/* Writing area */}
        <div className="flex-1 px-8 py-6 relative">
          {loadingCloud ? (
            <div className="flex items-center gap-2 text-[#707070] text-sm font-inter">
              <div className="w-4 h-4 border-2 border-[#CCFF90] border-t-transparent rounded-full animate-spin" />
              Loading from cloud…
            </div>
          ) : (
            <textarea
              aria-label="Session note content"
              placeholder={isLoggedIn
                ? "Write here — click Save to sync across all your devices…"
                : "Write your temporary notes here…"}
              value={content}
              onChange={handleChange}
              className="chalk-textarea w-full h-full min-h-[400px] text-base leading-8 font-inter"
              style={{
                backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #1a1a1a 31px, #1a1a1a 32px)",
                backgroundAttachment: "local",
              }}
            />
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#161616] border-t border-[#2a2a2a] px-8 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#3a3a3a] font-inter">
            <span>{content.length} characters</span>
            <span>·</span>
            <span>{content.trim().split(/\s+/).filter(Boolean).length} words</span>
          </div>
          {lastSaved && (
            <span className="text-xs text-[#3a3a3a] font-inter">
              Last saved {lastSaved.toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#1e1e1e] border border-[#2a2a2a] text-[#CFCFCF] text-sm px-4 py-3 rounded-sm font-inter z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
