"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";

const NOTE_COLORS = [
  { label: "Purple", value: "purple", bg: "#B388FF" },
  { label: "Green",  value: "green",  bg: "#CCFF90" },
  { label: "Red",    value: "red",    bg: "#FF8A80" },
  { label: "Yellow", value: "yellow", bg: "#FFFF8D" },
  { label: "Blue",   value: "blue",   bg: "#A0AFFF" },
];

const LockIcon = ({ locked }) =>
  locked ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TagIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

export default function Home({ flag, setFlag, setNotes, categories }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [notePassword, setNotePassword] = useState("");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (note.trim() === "") return;

    let finalNote = note;
    if (isEncrypt && notePassword) {
      finalNote = CryptoJS.AES.encrypt(note, notePassword).toString();
    }

    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes = [
      ...storedNotes,
      {
        title,
        content: finalNote,
        isEncrypted: isEncrypt,
        color: selectedColor,
        categoryId: selectedCategory || null,
        createdAt: new Date().toISOString(),
      },
    ];

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    setTitle("");
    setNote("");
    setNotePassword("");
    setIsEncrypt(false);
    setSelectedColor("purple");
    setSelectedCategory("");
    setFlag(!flag);
    setIsOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="bg-black border border-[#2a2a2a] rounded-sm shadow-board overflow-hidden">
        {/* Board Header */}
        <div
          className="bg-[#161616] px-8 py-5 flex items-center justify-between cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.91 23.5L14 19.77L7.09 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z" fill="#B388FF" />
            </svg>
            <h2 className="text-white font-bold text-2xl font-inter tracking-tight">New Note</h2>
          </div>
          <button
            aria-label={isOpen ? "Collapse" : "Expand"}
            className={`text-[#707070] hover:text-[#CFCFCF] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          >
            <PlusIcon />
          </button>
        </div>

        {/* Board Body */}
        {isOpen && (
          <form onSubmit={handleAddNote} className="p-8 space-y-6">
            <div className="border-t border-dashed border-[#2a2a2a]" />

            {/* Title */}
            <div>
              <label className="block text-[#707070] text-xs uppercase tracking-widest mb-2 font-inter">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your note a title..."
                className="w-full bg-transparent border-b border-[#2a2a2a] focus:border-[#CFCFCF] text-[#CFCFCF] placeholder-[#3a3a3a] py-2 outline-none transition-colors duration-200 text-lg font-inter"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-[#707070] text-xs uppercase tracking-widest mb-2 font-inter">Content</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write your note here..."
                required
                rows={6}
                className="chalk-textarea w-full border border-[#2a2a2a] focus:border-[#CFCFCF] rounded-sm p-4 text-base leading-relaxed transition-colors duration-200"
              />
            </div>

            {/* Color picker */}
            <div>
              <label className="block text-[#707070] text-xs uppercase tracking-widest mb-3 font-inter">Note Color</label>
              <div className="flex gap-3">
                {NOTE_COLORS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setSelectedColor(c.value)}
                    title={c.label}
                    className={`w-8 h-8 rounded-full transition-all duration-200 ${
                      selectedColor === c.value
                        ? "ring-2 ring-white ring-offset-2 ring-offset-black scale-110"
                        : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.bg }}
                    aria-label={`Select ${c.label} color`}
                  />
                ))}
              </div>
            </div>

            {/* Category picker */}
            <div>
              <label className="block text-[#707070] text-xs uppercase tracking-widest mb-3 font-inter">Category</label>
              {categories.length === 0 ? (
                <p className="text-[#3a3a3a] text-xs font-inter">
                  No categories yet — create one using the filter bar below.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {/* No category option */}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all duration-200 ${
                      selectedCategory === ""
                        ? "bg-[#CFCFCF] text-black"
                        : "bg-[#1e1e1e] border border-[#2a2a2a] text-[#707070] hover:text-[#CFCFCF]"
                    }`}
                  >
                    None
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all duration-200 ${
                        selectedCategory === cat.id
                          ? "bg-[#B388FF] text-black"
                          : "bg-[#1e1e1e] border border-[#2a2a2a] text-[#707070] hover:text-[#CFCFCF]"
                      }`}
                    >
                      <TagIcon />
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Encryption */}
            <div className="bg-[#161616] rounded-sm p-4 border border-[#2a2a2a]">
              <button
                type="button"
                onClick={() => setIsEncrypt(!isEncrypt)}
                className={`flex items-center gap-2 text-sm font-inter transition-colors ${
                  isEncrypt ? "text-[#A0AFFF]" : "text-[#707070] hover:text-[#CFCFCF]"
                }`}
              >
                <LockIcon locked={isEncrypt} />
                {isEncrypt ? "Encrypted" : "Encrypt this note"}
              </button>
              {isEncrypt && (
                <input
                  type="password"
                  value={notePassword}
                  onChange={(e) => setNotePassword(e.target.value)}
                  placeholder="Encryption password..."
                  required={isEncrypt}
                  className="w-full mt-3 bg-transparent border-b border-[#2a2a2a] focus:border-[#A0AFFF] text-[#CFCFCF] placeholder-[#3a3a3a] py-2 outline-none text-sm font-inter transition-colors"
                />
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#B388FF] hover:bg-[#9c6fe8] active:bg-[#7b52c2] text-black font-bold text-base py-3 rounded-sm transition-colors duration-200 font-inter flex items-center justify-center gap-2"
            >
              <PlusIcon />
              Save Note
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
