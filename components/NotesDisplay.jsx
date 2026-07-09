"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";

const STICKY_COLORS = {
  purple: { bg: "#B388FF", text: "#000000" },
  green:  { bg: "#CCFF90", text: "#000000" },
  red:    { bg: "#FF8A80", text: "#000000" },
  yellow: { bg: "#FFFF8D", text: "#000000" },
  blue:   { bg: "#A0AFFF", text: "#000000" },
  default: { bg: "#B388FF", text: "#000000" },
};

const NOTE_COLORS_LIST = [
  { value: "purple", bg: "#B388FF" },
  { value: "green",  bg: "#CCFF90" },
  { value: "red",    bg: "#FF8A80" },
  { value: "yellow", bg: "#FFFF8D" },
  { value: "blue",   bg: "#A0AFFF" },
];

const getColor = (note, index) => {
  if (note.color && STICKY_COLORS[note.color]) return STICKY_COLORS[note.color];
  const keys = Object.keys(STICKY_COLORS).filter((k) => k !== "default");
  return STICKY_COLORS[keys[index % keys.length]];
};

// ─── Icons ────────────────────────────────────────────────────────────────────
const DeleteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" />
  </svg>
);
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const SaveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
  </svg>
);
const UnlockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);
const TagIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

// ─── Sticky Card ──────────────────────────────────────────────────────────────
const StickyCard = ({ note, index, onOpen, onDelete, categoryName }) => {
  const { bg, text } = getColor(note, index);
  return (
    <div
      onClick={() => onOpen(index)}
      className="relative cursor-pointer group transition-all duration-200 hover:-translate-y-1"
      style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25), 0px 8px 8px rgba(0,0,0,0.04), 0px 8px 16px rgba(0,0,0,0.08)" }}
    >
      <div className="flex flex-col gap-3 p-6 pt-8 min-h-[180px]" style={{ backgroundColor: bg, color: text }}>
        {/* Category badge */}
        {categoryName && (
          <span className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-full text-[10px] font-medium font-inter bg-black/15 text-black/70">
            <TagIcon />
            {categoryName}
          </span>
        )}

        {/* Title */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg leading-tight font-inter break-words flex-1">
            {note.title || "Untitled"}
          </h3>
          {note.isEncrypted && <span className="shrink-0 opacity-60 mt-0.5"><LockIcon /></span>}
        </div>

        {/* Preview */}
        <p className="font-medium text-sm leading-relaxed font-inter line-clamp-3 opacity-80">
          {note.isEncrypted ? "🔒 Encrypted note" : note.content}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-black/10">
          <span className="text-xs font-inter opacity-50">
            {note.createdAt
              ? new Date(note.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              : ""}
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(e, index); }}
            className="opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity p-1 rounded hover:bg-black/10"
            aria-label="Delete note"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function NotesDisplay({ notes, setNotes, categories, activeFilter }) {
  const [selectedNote, setSelectedNote] = useState(null);
  const [password, setPassword] = useState("");
  const [decryptedContent, setDecryptedContent] = useState("");
  const [decryptedColor, setDecryptedColor] = useState("purple");
  const [decryptedCategory, setDecryptedCategory] = useState("");
  const [needsPassword, setNeedsPassword] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // Apply category filter — use original index for operations
  const filteredNotes = notes
    .map((note, originalIndex) => ({ note, originalIndex }))
    .filter(({ note }) =>
      activeFilter === "all" ? true : note.categoryId === activeFilter
    );

  const handleOpen = (originalIndex) => {
    const note = notes[originalIndex];
    setSelectedNote(originalIndex);
    setError("");
    setPassword("");
    setDecryptedColor(note.color || "purple");
    setDecryptedCategory(note.categoryId || "");
    if (note.isEncrypted) {
      setNeedsPassword(true);
      setDecryptedContent("");
    } else {
      setNeedsPassword(false);
      setDecryptedContent(note.content);
    }
  };

  const handleClose = () => {
    setSelectedNote(null);
    setPassword("");
    setDecryptedContent("");
    setNeedsPassword(false);
    setError("");
  };

  const handleDecrypt = () => {
    const note = notes[selectedNote];
    try {
      const decrypted = CryptoJS.AES.decrypt(note.content, password).toString(CryptoJS.enc.Utf8);
      if (decrypted) {
        setDecryptedContent(decrypted);
        setNeedsPassword(false);
        setError("");
      } else {
        setError("Wrong password. Try again.");
      }
    } catch {
      setError("Wrong password. Try again.");
    }
  };

  const handleSave = () => {
    const updated = [...notes];
    const base = { ...updated[selectedNote], color: decryptedColor, categoryId: decryptedCategory || null };
    if (notes[selectedNote].isEncrypted && password) {
      updated[selectedNote] = { ...base, content: CryptoJS.AES.encrypt(decryptedContent || " ", password).toString() };
    } else {
      updated[selectedNote] = { ...base, content: decryptedContent };
    }
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
    handleClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(decryptedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = (e, originalIndex) => {
    e.stopPropagation();
    const note = notes[originalIndex];
    if (note.isEncrypted) {
      const pwd = prompt("Enter password to delete this note:");
      if (!pwd) return;
      try {
        const dec = CryptoJS.AES.decrypt(note.content, pwd).toString(CryptoJS.enc.Utf8);
        if (!dec) { alert("Incorrect password."); return; }
      } catch { alert("Incorrect password."); return; }
    }
    const updated = notes.filter((_, i) => i !== originalIndex);
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  const activeNote = selectedNote !== null ? notes[selectedNote] : null;
  const activeColors = activeNote ? getColor(activeNote, selectedNote) : STICKY_COLORS.purple;

  const getCategoryName = (categoryId) =>
    categories.find((c) => c.id === categoryId)?.name ?? null;

  if (notes.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-[#161616] border border-dashed border-[#2a2a2a] rounded-sm p-16 text-center">
          <p className="text-[#707070] text-lg font-inter">No notes yet.</p>
          <p className="text-[#3a3a3a] text-sm font-inter mt-1">Create one above to get started.</p>
        </div>
      </div>
    );
  }

  if (filteredNotes.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-[#161616] border border-dashed border-[#2a2a2a] rounded-sm p-12 text-center">
          <p className="text-[#707070] text-base font-inter">No notes in this category.</p>
          <p className="text-[#3a3a3a] text-sm font-inter mt-1">
            Add a note with the &ldquo;{getCategoryName(activeFilter) ?? activeFilter}&rdquo; category above.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pb-12">
      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-[#2a2a2a]" />
        <span className="text-[#707070] text-xs uppercase tracking-widest font-inter">
          {filteredNotes.length} {filteredNotes.length === 1 ? "Note" : "Notes"}
          {activeFilter !== "all" && getCategoryName(activeFilter) && (
            <span className="ml-1 text-[#B388FF]">· {getCategoryName(activeFilter)}</span>
          )}
        </span>
        <div className="h-px flex-1 bg-[#2a2a2a]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredNotes.map(({ note, originalIndex }) => (
          <StickyCard
            key={originalIndex}
            note={note}
            index={originalIndex}
            onOpen={handleOpen}
            onDelete={handleDelete}
            categoryName={note.categoryId ? getCategoryName(note.categoryId) : null}
          />
        ))}
      </div>

      {/* Edit Modal */}
      {selectedNote !== null && activeNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={handleClose}
        >
          <div
            className="w-full max-w-lg rounded-sm shadow-board overflow-hidden"
            style={{ backgroundColor: activeColors.bg }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <div className="flex items-center gap-2 min-w-0">
                <h2 className="font-bold text-lg font-inter text-black truncate">{activeNote.title || "Untitled"}</h2>
                {activeNote.isEncrypted && <span className="text-black/50 shrink-0"><LockIcon /></span>}
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {!needsPassword && (
                  <button onClick={handleCopy} className="p-1.5 rounded hover:bg-black/10 transition-colors text-black/60 hover:text-black" title={copied ? "Copied!" : "Copy"} aria-label="Copy">
                    <CopyIcon />
                  </button>
                )}
                <button onClick={handleClose} className="p-1.5 rounded hover:bg-black/10 transition-colors text-black/60 hover:text-black" aria-label="Close">
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-6 space-y-4">
              {error && <div className="bg-black/10 text-black text-sm px-3 py-2 rounded font-inter">{error}</div>}

              {needsPassword ? (
                <div className="space-y-3">
                  <p className="text-black/70 text-sm font-inter">Enter the password to unlock this note.</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleDecrypt()}
                    placeholder="Password..."
                    className="w-full bg-black/10 border border-black/20 rounded px-3 py-2 text-black placeholder-black/40 outline-none focus:border-black/40 text-sm font-inter"
                    autoFocus
                  />
                  <button onClick={handleDecrypt} className="w-full bg-black/80 hover:bg-black text-white font-medium py-2 rounded text-sm font-inter flex items-center justify-center gap-2 transition-colors">
                    <UnlockIcon /> Unlock Note
                  </button>
                </div>
              ) : (
                <>
                  {/* Content */}
                  <textarea
                    value={decryptedContent}
                    onChange={(e) => setDecryptedContent(e.target.value)}
                    rows={7}
                    className="w-full bg-black/10 border border-black/20 rounded px-3 py-2 text-black outline-none focus:border-black/40 text-sm font-inter resize-none leading-relaxed"
                  />

                  {/* Color */}
                  <div className="flex items-center gap-2">
                    <span className="text-black/50 text-xs font-inter uppercase tracking-widest shrink-0">Color:</span>
                    <div className="flex gap-1.5">
                      {NOTE_COLORS_LIST.map((c) => (
                        <button
                          key={c.value}
                          type="button"
                          onClick={() => setDecryptedColor(c.value)}
                          className={`w-5 h-5 rounded-full transition-all ${decryptedColor === c.value ? "ring-2 ring-black ring-offset-1" : "hover:scale-110"}`}
                          style={{ backgroundColor: c.bg }}
                          aria-label={`Set color to ${c.value}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Category */}
                  {categories.length > 0 && (
                    <div className="flex items-start gap-2">
                      <span className="text-black/50 text-xs font-inter uppercase tracking-widest shrink-0 pt-1.5">Category:</span>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => setDecryptedCategory("")}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium font-inter transition-all ${
                            decryptedCategory === ""
                              ? "bg-black/30 text-black"
                              : "bg-black/10 text-black/60 hover:bg-black/20"
                          }`}
                        >
                          None
                        </button>
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setDecryptedCategory(cat.id)}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium font-inter transition-all ${
                              decryptedCategory === cat.id
                                ? "bg-black/30 text-black"
                                : "bg-black/10 text-black/60 hover:bg-black/20"
                            }`}
                          >
                            <TagIcon />
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button onClick={handleClose} className="flex-1 bg-black/10 hover:bg-black/20 text-black font-medium py-2 rounded text-sm font-inter transition-colors">
                      Cancel
                    </button>
                    <button onClick={handleSave} className="flex-1 bg-black/80 hover:bg-black text-white font-medium py-2 rounded text-sm font-inter flex items-center justify-center gap-2 transition-colors">
                      <SaveIcon /> Save
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
