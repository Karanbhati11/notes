import React, { useState, useEffect } from "react";

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

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const SessionNote = () => {
  const [sessionNote, setSessionNote] = useState("");
  const [lastSaved, setLastSaved] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("sessionNote");
    if (saved) {
      setSessionNote(saved);
      const ts = sessionStorage.getItem("lastSaved");
      if (ts) setLastSaved(new Date(ts));
    }
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setSessionNote(val);
    sessionStorage.setItem("sessionNote", val);
    const now = new Date();
    sessionStorage.setItem("lastSaved", now.toISOString());
    setLastSaved(now);
  };

  const handleSave = () => {
    sessionStorage.setItem("sessionNote", sessionNote);
    const now = new Date();
    sessionStorage.setItem("lastSaved", now.toISOString());
    setLastSaved(now);
    showToast("Saved!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sessionNote);
    showToast("Copied to clipboard!");
  };

  const handleClear = () => {
    if (!sessionNote.trim()) return;
    if (window.confirm("Clear this session note?")) {
      setSessionNote("");
      sessionStorage.removeItem("sessionNote");
      sessionStorage.removeItem("lastSaved");
      setLastSaved(null);
      showToast("Cleared.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Blackboard panel */}
      <div
        className="bg-black border border-[#2a2a2a] rounded-sm shadow-board flex flex-col overflow-hidden"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        {/* Board header */}
        <div className="bg-[#161616] px-8 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            {/* Star */}
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.91 23.5L14 19.77L7.09 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z" fill="#CCFF90" />
            </svg>
            <h2 className="text-white font-bold text-2xl font-inter tracking-tight">
              Session Note
            </h2>
            <span
              className="flex items-center gap-1 text-[#707070] text-xs font-inter"
              title="This note is stored only for the current browser session and will be lost when you close the tab."
            >
              <InfoIcon />
              Session only
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleSave}
              title="Save"
              className="p-2 rounded hover:bg-[#2a2a2a] text-[#707070] hover:text-[#CCFF90] transition-colors"
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

        {/* Chalk rule lines — decorative */}
        <div className="px-8 pt-6 shrink-0">
          <div className="border-t border-dashed border-[#2a2a2a]" />
        </div>

        {/* Writing area */}
        <div className="flex-1 px-8 py-6 relative">
          <textarea
            aria-label="Session note content"
            placeholder="Write your temporary notes here — no saving required..."
            value={sessionNote}
            onChange={handleChange}
            className="chalk-textarea w-full h-full min-h-[400px] text-base leading-8 font-inter"
            style={{
              /* Subtle ruled-line feel */
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 31px, #1a1a1a 31px, #1a1a1a 32px)",
              backgroundAttachment: "local",
            }}
          />
        </div>

        {/* Footer */}
        <div className="bg-[#161616] border-t border-[#2a2a2a] px-8 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#3a3a3a] font-inter">
            <span>{sessionNote.length} characters</span>
            <span>·</span>
            <span>{sessionNote.trim().split(/\s+/).filter(Boolean).length} words</span>
          </div>
          {lastSaved && (
            <span className="text-xs text-[#3a3a3a] font-inter">
              Last saved {lastSaved.toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#1e1e1e] border border-[#2a2a2a] text-[#CFCFCF] text-sm px-4 py-3 rounded-sm shadow-board font-inter z-50 animate-pulse">
          {toast}
        </div>
      )}
    </div>
  );
};

export default SessionNote;
