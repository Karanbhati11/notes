"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "./shared/Navbar";
import Home from "./Home";
import NotesDisplay from "./NotesDisplay";
import SessionNote from "./SessionNote";
import CategoryManager from "./CategoryManager";
import AuthGate from "./AuthGate";

export default function NotesApp() {
  // "checking" = session check in progress
  // false      = no session → show AuthGate
  // "guest"    = user chose to continue without account
  // object     = logged-in user
  const [authState, setAuthState] = useState("checking");
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [dateSort, setDateSort] = useState("none");
  const [showSessionNote, setShowSessionNote] = useState(false);
  const [flag, setFlag] = useState(false);
  const [syncStatus, setSyncStatus] = useState("");

  const isLoggedIn = authState && authState !== "checking" && authState !== false && authState !== "guest";

  // ── Check existing session ───────────────────────────────────────────────
  useEffect(() => {
    const timeout = setTimeout(() => setAuthState(false), 6000);

    fetch("/api/auth/me")
      .then((r) => r.json())
      .then(({ user }) => {
        clearTimeout(timeout);
        setAuthState(user ?? false);
      })
      .catch(() => {
        clearTimeout(timeout);
        setAuthState(false);
      });

    return () => clearTimeout(timeout);
  }, []);

  // ── Load data once auth state is resolved ────────────────────────────────
  useEffect(() => {
    if (authState === "checking") return;

    if (isLoggedIn) {
      Promise.all([
        fetch("/api/notes").then((r) => r.json()),
        fetch("/api/categories").then((r) => r.json()),
      ])
        .then(([noteData, catData]) => {
          setNotes(noteData.notes ?? []);
          setCategories(catData.categories ?? []);
        })
        .catch(loadFromLocalStorage);
    } else {
      loadFromLocalStorage();
    }
  }, [authState]); // eslint-disable-line react-hooks/exhaustive-deps

  function loadFromLocalStorage() {
    const n = localStorage.getItem("notes");
    const c = localStorage.getItem("categories");
    if (n) setNotes(JSON.parse(n));
    if (c) setCategories(JSON.parse(c));
  }

  // ── Persist to localStorage ──────────────────────────────────────────────
  useEffect(() => {
    if (authState === "checking") return;
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes, authState]);

  useEffect(() => {
    if (authState === "checking") return;
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories, authState]);

  // ── Cloud sync for logged-in users ────────────────────────────────────────
  const syncToCloud = useCallback(
    async (newNotes, newCats) => {
      if (!isLoggedIn) return;
      setSyncStatus("syncing");
      try {
        await Promise.all([
          fetch("/api/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ notes: newNotes }),
          }),
          fetch("/api/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ categories: newCats }),
          }),
        ]);
        setSyncStatus("synced");
        setTimeout(() => setSyncStatus(""), 2000);
      } catch {
        setSyncStatus("error");
        setTimeout(() => setSyncStatus(""), 3000);
      }
    },
    [isLoggedIn]
  );

  const updateNotes = useCallback(
    (val) => {
      const resolved = typeof val === "function" ? val(notes) : val;
      setNotes(resolved);
      syncToCloud(resolved, categories);
    },
    [notes, categories, syncToCloud]
  );

  const updateCategories = useCallback(
    (val) => {
      const resolved = typeof val === "function" ? val(categories) : val;
      setCategories(resolved);
      syncToCloud(notes, resolved);
    },
    [notes, categories, syncToCloud]
  );

  // ── Auth ─────────────────────────────────────────────────────────────────
  const handleAuth = (user) => setAuthState(user === null ? "guest" : user);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthState(false);
  };

  // ── App actions ──────────────────────────────────────────────────────────
  const handleResetApp = () => {
    if (!window.confirm("Delete all notes and categories? This cannot be undone.")) return;
    localStorage.removeItem("notes");
    localStorage.removeItem("categories");
    updateNotes([]);
    updateCategories([]);
    setActiveFilter("all");
  };

  const handleExportNotes = () => {
    const blob = new Blob([JSON.stringify({ notes, categories }, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sticky-notes-online-export.json";
    link.click();
  };

  const handleImportNotes = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const parsed = JSON.parse(ev.target.result);
          const importedNotes = Array.isArray(parsed) ? parsed : parsed.notes ?? [];
          const importedCats = Array.isArray(parsed) ? [] : parsed.categories ?? [];
          updateNotes(importedNotes);
          updateCategories(importedCats);
        } catch {
          alert("Invalid file format.");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // ── Show AuthGate while checking OR when no session ──────────────────────
  // This avoids the black spinner — user sees login form immediately
  if (authState === "checking" || authState === false) {
    return (
      <>
        <AuthGate
          onAuth={handleAuth}
          sessionChecking={authState === "checking"}
        />
      </>
    );
  }

  // ── Main app ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black text-white">

      {syncStatus && (
        <div className={`fixed bottom-4 right-4 z-50 text-xs font-inter px-3 py-2 rounded-sm border ${
          syncStatus === "syncing" ? "bg-[#1e1e1e] border-[#2a2a2a] text-[#707070]" :
          syncStatus === "synced"  ? "bg-[#CCFF90]/10 border-[#CCFF90]/30 text-[#CCFF90]" :
                                     "bg-[#FF8A80]/10 border-[#FF8A80]/30 text-[#FF8A80]"
        }`}>
          {syncStatus === "syncing" ? "⟳ Syncing…" : syncStatus === "synced" ? "✓ Synced" : "✗ Sync failed"}
        </div>
      )}

      <Navbar
        showSessionNote={showSessionNote}
        setShowSessionNote={setShowSessionNote}
        handleResetApp={handleResetApp}
        handleExportNotes={handleExportNotes}
        handleImportNotes={handleImportNotes}
        user={authState}
        onLogout={handleLogout}
      />

      {/* Guest banner */}
      {authState === "guest" && (
        <div className="bg-[#B388FF]/10 border-b border-[#B388FF]/20 px-4 py-2.5 text-center">
          <p className="text-[#B388FF] text-xs font-inter">
            Your notes are only saved on this device.{" "}
            <button
              onClick={handleLogout}
              className="underline underline-offset-2 hover:text-white transition-colors font-medium"
            >
              Sign up for free
            </button>
            {" "}to sync them across devices with cloud storage.
          </p>
        </div>
      )}

      {showSessionNote ? (
        <SessionNote user={authState === "guest" ? null : authState} />
      ) : (
        <>
          <Home flag={flag} setFlag={setFlag} setNotes={updateNotes} categories={categories} />
          <CategoryManager
            categories={categories}
            setCategories={updateCategories}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            dateSort={dateSort}
            setDateSort={setDateSort}
          />
          <NotesDisplay
            notes={notes}
            setNotes={updateNotes}
            categories={categories}
            activeFilter={activeFilter}
            dateSort={dateSort}
          />
        </>
      )}
    </div>
  );
}
