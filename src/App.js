import React, { useState, useEffect } from "react";
import Navbar from "./Components/shared/Navbar";
import Home from "./Components/Home";
import NotesDisplay from "./Components/NotesDisplay";
import SessionNote from "./Components/SessionNote";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );
  const [showSessionNote, setShowSessionNote] = useState(false);
  const [flag, setFlag] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []); // Ensure it runs only once when the component mounts

  // Load dark mode preference from localStorage or system settings
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    const savedDarkMode = localStorage.getItem("isDarkMode");
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    } else {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, [flag, notes]); // Ensure it runs only once when the component mounts

  // Save notes to localStorage whenever notes change

  // Function to add a note
  const addNote = (content, isEncrypted) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { content: String(content), isEncrypted },
    ]);
  };

  const handleResetApp = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all notes?"
    );
    if (confirmed) {
      localStorage.removeItem("notes");
      setNotes([]); // Clear the notes state
      setFlag(!flag); // Trigger re-render
      alert("All notes have been deleted!");
    }
  };

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  // Function to export notes
  const handleExportNotes = () => {
    const notesData = JSON.stringify(notes);
    const blob = new Blob([notesData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "notes.json";
    link.click();
  };

  // Function to import notes
  const handleImportNotes = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const importedNotes = JSON.parse(e.target.result);
            setNotes(importedNotes);
            localStorage.setItem("notes", JSON.stringify(importedNotes)); // Save imported notes to localStorage
          } catch (error) {
            alert("Failed to import notes. Invalid file format.");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#fff",
        minHeight: "100vh",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      {/* Navbar component */}
      <Navbar
        showSessionNote={showSessionNote}
        setShowSessionNote={setShowSessionNote}
        handleResetApp={handleResetApp}
        handleExportNotes={handleExportNotes}
        handleImportNotes={handleImportNotes}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Conditional Rendering based on selected option */}
      {showSessionNote ? (
        <div style={{ margin: "10px" }}>
          <SessionNote isDarkMode={isDarkMode} />
        </div>
      ) : (
        <>
          <Home
            addNote={addNote}
            isDarkMode={isDarkMode}
            setFlag={setFlag}
            flag={flag}
            setNotes={setNotes}
          />
          <NotesDisplay
            isDarkMode={isDarkMode}
            notes={notes}
            setNotes={setNotes}
            flag={flag}
          />
        </>
      )}
    </div>
  );
};

export default App;
