"use client";

import { useState } from "react";

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M9 6V4h6v2" />
  </svg>
);

const TagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const SortIcon = ({ direction }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {direction === "asc" ? (
      <><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></>
    ) : direction === "desc" ? (
      <><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></>
    ) : (
      <><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></>
    )}
  </svg>
);

export default function CategoryManager({ categories, setCategories, activeFilter, setActiveFilter, dateSort, setDateSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) return;
    if (categories.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      setError("Category already exists.");
      return;
    }
    const updated = [...categories, { id: Date.now().toString(), name: trimmed }];
    setCategories(updated);
    setNewName("");
    setError("");
  };

  const handleDelete = (id) => {
    const cat = categories.find((c) => c.id === id);
    if (!cat) return;
    if (!window.confirm(`Delete category "${cat.name}"? Notes in this category won't be deleted.`)) return;
    setCategories(categories.filter((c) => c.id !== id));
    if (activeFilter === id) setActiveFilter("all");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pb-2">
      {/* Filter bar — always visible */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* All filter pill */}
        <button
          onClick={() => setActiveFilter("all")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all duration-200 ${
            activeFilter === "all"
              ? "bg-[#CFCFCF] text-black"
              : "bg-[#1e1e1e] text-[#707070] hover:text-[#CFCFCF] border border-[#2a2a2a]"
          }`}
        >
          All notes
        </button>

        {/* Category pills */}
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(activeFilter === cat.id ? "all" : cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all duration-200 ${
              activeFilter === cat.id
                ? "bg-[#B388FF] text-black"
                : "bg-[#1e1e1e] text-[#707070] hover:text-[#CFCFCF] border border-[#2a2a2a]"
            }`}
          >
            <TagIcon />
            {cat.name}
          </button>
        ))}

        {/* Date sort toggle */}
        <button
          onClick={() => setDateSort(dateSort === "none" ? "desc" : dateSort === "desc" ? "asc" : "none")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all duration-200 ${
            dateSort !== "none"
              ? "bg-[#CCFF90] text-black"
              : "bg-[#1e1e1e] text-[#707070] hover:text-[#CFCFCF] border border-[#2a2a2a]"
          }`}
          title={dateSort === "none" ? "Sort by date" : dateSort === "desc" ? "Newest first" : "Oldest first"}
        >
          <SortIcon direction={dateSort} />
          {dateSort === "none" ? "Date" : dateSort === "desc" ? "Newest" : "Oldest"}
        </button>

        {/* Manage categories toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-inter border border-dashed border-[#3a3a3a] text-[#707070] hover:text-[#CFCFCF] hover:border-[#707070] transition-all duration-200"
          aria-label="Manage categories"
        >
          <PlusIcon />
          {isOpen ? "Done" : "New category"}
        </button>
      </div>

      {/* Category management panel */}
      {isOpen && (
        <div className="mt-3 bg-[#161616] border border-[#2a2a2a] rounded-sm p-4 space-y-3">
          {/* Create form */}
          <form onSubmit={handleAdd} className="flex items-center gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => { setNewName(e.target.value); setError(""); }}
              placeholder="Category name..."
              maxLength={32}
              className="flex-1 bg-transparent border-b border-[#2a2a2a] focus:border-[#CFCFCF] text-[#CFCFCF] placeholder-[#3a3a3a] py-1.5 outline-none text-sm font-inter transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#B388FF] hover:bg-[#9c6fe8] text-black text-xs font-bold font-inter rounded-sm transition-colors shrink-0"
            >
              <PlusIcon />
              Add
            </button>
          </form>

          {error && <p className="text-[#FF8A80] text-xs font-inter">{error}</p>}

          {/* Existing categories list */}
          {categories.length > 0 ? (
            <ul className="space-y-1 pt-1">
              {categories.map((cat) => (
                <li key={cat.id} className="flex items-center justify-between gap-2 group">
                  <span className="flex items-center gap-2 text-sm text-[#CFCFCF] font-inter">
                    <TagIcon />
                    {cat.name}
                  </span>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="text-[#707070] hover:text-[#FF8A80] transition-colors p-1 opacity-0 group-hover:opacity-100"
                    aria-label={`Delete category ${cat.name}`}
                  >
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#3a3a3a] text-xs font-inter">No categories yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
