import React, { useState } from "react";

// Star icon matching the Figma blackboard star component
const StarIcon = ({ color = "#B388FF" }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="4" r="1.5" fill="#CFCFCF" />
    <circle cx="10" cy="10" r="1.5" fill="#CFCFCF" />
    <circle cx="10" cy="16" r="1.5" fill="#CFCFCF" />
  </svg>
);

const Navbar = ({
  showSessionNote,
  setShowSessionNote,
  handleResetApp,
  handleExportNotes,
  handleImportNotes,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#161616] border-b border-[#2a2a2a] px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <StarIcon color="#B388FF" />
          <span className="text-white font-bold text-xl tracking-tight font-inter">
            Sticky Notes Online
          </span>
        </div>

        {/* Nav Tabs */}
        <div className="flex items-center gap-1">
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

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleResetApp}
            className="px-4 py-2 text-[#FF8A80] border border-[#FF8A80] rounded text-sm font-medium hover:bg-[#FF8A80] hover:text-black transition-all duration-200 font-inter"
          >
            Reset
          </button>

          {/* Export / Import dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded hover:bg-[#2a2a2a] transition-colors"
              aria-label="More options"
            >
              <DotsIcon />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded bg-[#1e1e1e] border border-[#2a2a2a] shadow-board z-50">
                <button
                  onClick={() => { handleExportNotes(); setIsMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2.5 text-sm text-[#CFCFCF] hover:bg-[#2a2a2a] hover:text-white transition-colors font-inter"
                >
                  Export Notes
                </button>
                <button
                  onClick={() => { handleImportNotes(); setIsMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2.5 text-sm text-[#CFCFCF] hover:bg-[#2a2a2a] hover:text-white transition-colors font-inter"
                >
                  Import Notes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
