import React, { useState } from "react";
import {
  UserCircleIcon,
  EllipsisVerticalIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({
  showSessionNote,
  setShowSessionNote,
  handleResetApp,
  handleExportNotes,
  handleImportNotes,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      } px-6 py-4 mb-6 shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => setShowSessionNote(false)}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              !showSessionNote
                ? isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 shadow-sm"
                : isDarkMode
                ? "border border-gray-600"
                : "border border-gray-300"
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setShowSessionNote(true)}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              showSessionNote
                ? isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 shadow-sm"
                : isDarkMode
                ? "border border-gray-600"
                : "border border-gray-300"
            }`}
          >
            Session Note
          </button>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Reset App Button */}
          <button
            onClick={handleResetApp}
            className="px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
          >
            Reset App
          </button>

          {/* Backup Icon */}
          <button className="p-2 hover:bg-gray-200 rounded-full dark:hover:bg-gray-700">
            <CloudArrowUpIcon className="h-6 w-6" />
          </button>

          {/* User Profile */}
          <button className="p-2 hover:bg-gray-200 rounded-full dark:hover:bg-gray-700">
            <UserCircleIcon className="h-6 w-6" />
          </button>

          {/* Export/Import Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-200 rounded-full dark:hover:bg-gray-700"
            >
              <EllipsisVerticalIcon className="h-6 w-6" />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button
                    onClick={() => {
                      handleExportNotes();
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                  >
                    Export Notes
                  </button>
                  <button
                    onClick={() => {
                      handleImportNotes();
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                  >
                    Import Notes
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div
                className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
              ></div>
              <span className="ml-2 text-sm font-medium">
                {isDarkMode ? "Dark" : "Light"}
              </span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
