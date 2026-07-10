"use client";

import { useState } from "react";

const StarIcon = ({ color = "#B388FF" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.91 23.5L14 19.77L7.09 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DotsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="4" r="1.5" fill="#CFCFCF" />
    <circle cx="10" cy="10" r="1.5" fill="#CFCFCF" />
    <circle cx="10" cy="16" r="1.5" fill="#CFCFCF" />
  </svg>
);

const HamburgerIcon = ({ open }) =>
  open ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#CFCFCF"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#CFCFCF"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

export default function Navbar({
  showSessionNote,
  setShowSessionNote,
  handleResetApp,
  handleExportNotes,
  handleImportNotes,
  user,
  onLogout,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <nav className="bg-[#161616] border-b border-[#2a2a2a]">
      {/* ── Top bar ───────────────────────────────────────────── */}
      <div className="px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <StarIcon color="#B388FF" />
            <span className="text-white font-bold text-base sm:text-xl tracking-tight font-inter">
              Sticky Notes Online
            </span>
          </div>

          {/* Desktop centre tabs */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              onClick={() => setShowSessionNote(false)}
              className={`px-5 py-2 rounded text-sm font-medium transition-all duration-200 font-inter ${
                !showSessionNote
                  ? "bg-[#2a2a2a] text-white"
                  : "text-[#707070] hover:text-[#CFCFCF] hover:bg-[#1e1e1e]"
              }`}
            >
              Notes
            </button>
            <button
              onClick={() => setShowSessionNote(true)}
              className={`px-5 py-2 rounded text-sm font-medium transition-all duration-200 font-inter ${
                showSessionNote
                  ? "bg-[#2a2a2a] text-white"
                  : "text-[#707070] hover:text-[#CFCFCF] hover:bg-[#1e1e1e]"
              }`}
            >
              Session Note
            </button>
          </div>

          {/* Desktop right actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* User email badge or Sign In for guests */}
            {user && user !== "guest" ? (
              <span className="text-[#707070] text-xs font-inter border border-[#2a2a2a] rounded px-2.5 py-1.5 max-w-[160px] truncate">
                ☁ {user.email}
              </span>
            ) : user === "guest" ? (
              <button
                onClick={onLogout}
                className="px-4 py-2 text-[#B388FF] border border-[#B388FF] rounded text-sm font-medium hover:bg-[#B388FF] hover:text-black transition-all duration-200 font-inter"
              >
                Sign In
              </button>
            ) : null}

            <button
              onClick={handleResetApp}
              className="px-4 py-2 text-[#FF8A80] border border-[#FF8A80] rounded text-sm font-medium hover:bg-[#FF8A80] hover:text-black transition-all duration-200 font-inter"
            >
              Reset
            </button>

            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded hover:bg-[#2a2a2a] transition-colors"
                aria-label="More options"
              >
                <DotsIcon />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded bg-[#1e1e1e] border border-[#2a2a2a] z-50">
                  <button
                    onClick={() => {
                      handleExportNotes();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[#CFCFCF] hover:bg-[#2a2a2a] hover:text-white transition-colors font-inter"
                  >
                    Export Notes
                  </button>
                  <button
                    onClick={() => {
                      handleImportNotes();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[#CFCFCF] hover:bg-[#2a2a2a] hover:text-white transition-colors font-inter"
                  >
                    Import Notes
                  </button>
                  {user && user !== "guest" && (
                    <>
                      <div className="border-t border-[#2a2a2a] my-1" />
                      <button
                        onClick={() => {
                          onLogout();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2.5 text-sm text-[#FF8A80] hover:bg-[#2a2a2a] transition-colors font-inter"
                      >
                        Sign Out
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded hover:bg-[#2a2a2a] transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <HamburgerIcon open={isMobileOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      {isMobileOpen && (
        <div className="sm:hidden border-t border-[#2a2a2a] px-4 py-3 space-y-1">
          {/* View tabs */}
          <button
            onClick={() => {
              setShowSessionNote(false);
              closeMobile();
            }}
            className={`w-full text-left px-4 py-3 rounded text-sm font-medium font-inter transition-colors ${
              !showSessionNote
                ? "bg-[#2a2a2a] text-white"
                : "text-[#707070] hover:text-[#CFCFCF] hover:bg-[#1e1e1e]"
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => {
              setShowSessionNote(true);
              closeMobile();
            }}
            className={`w-full text-left px-4 py-3 rounded text-sm font-medium font-inter transition-colors ${
              showSessionNote
                ? "bg-[#2a2a2a] text-white"
                : "text-[#707070] hover:text-[#CFCFCF] hover:bg-[#1e1e1e]"
            }`}
          >
            Session Note
          </button>

          {/* Divider */}
          <div className="border-t border-[#2a2a2a] my-2" />

          {/* Actions */}
          <button
            onClick={() => {
              handleExportNotes();
              closeMobile();
            }}
            className="w-full text-left px-4 py-3 rounded text-sm text-[#CFCFCF] hover:bg-[#2a2a2a] hover:text-white transition-colors font-inter"
          >
            Export Notes
          </button>
          <button
            onClick={() => {
              handleImportNotes();
              closeMobile();
            }}
            className="w-full text-left px-4 py-3 rounded text-sm text-[#CFCFCF] hover:bg-[#2a2a2a] hover:text-white transition-colors font-inter"
          >
            Import Notes
          </button>
          <button
            onClick={() => {
              handleResetApp();
              closeMobile();
            }}
            className="w-full text-left px-4 py-3 rounded text-sm text-[#FF8A80] hover:bg-[#2a2a2a] transition-colors font-inter"
          >
            Reset App
          </button>
          {user && user !== "guest" && (
            <button
              onClick={() => {
                onLogout();
                closeMobile();
              }}
              className="w-full text-left px-4 py-3 rounded text-sm text-[#FF8A80] hover:bg-[#2a2a2a] transition-colors font-inter"
            >
              Sign Out
            </button>
          )}
          {user === "guest" && (
            <button
              onClick={() => {
                onLogout();
                closeMobile();
              }}
              className="w-full text-left px-4 py-3 rounded text-sm text-[#B388FF] hover:bg-[#2a2a2a] transition-colors font-inter"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
