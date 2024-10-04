import React, { useState, useEffect } from "react";
import { Button, TextareaAutosize, Box } from "@mui/material";

const SessionNote = ({ isDarkMode }) => {
  console.log(isDarkMode);
  const [sessionNote, setSessionNote] = useState("");
  const [NoteButtonText, setNoteButtonText] = useState("Copy Note");

  // Retrieve session note from sessionStorage when the component mounts
  useEffect(() => {
    const savedSessionNote = sessionStorage.getItem("sessionNote");
    if (savedSessionNote) {
      setSessionNote(savedSessionNote);
    }
  }, []);

  // Function to copy the note content
  const handleCopyNote = () => {
    navigator.clipboard.writeText(sessionNote);
    setNoteButtonText("Copied!!!");
    setTimeout(() => {
      setNoteButtonText("Copy Note");
    }, 1500);
  };

  // Function to clear the note content
  const handleClearNote = () => {
    setSessionNote(""); // Clear the note input
    sessionStorage.removeItem("sessionNote"); // Remove the note from sessionStorage
  };

  // Function to handle note changes and save to sessionStorage
  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setSessionNote(newNote);
    sessionStorage.setItem("sessionNote", newNote); // Save the updated note to sessionStorage
  };

  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        border: `1px solid ${isDarkMode ? "#555" : "#ccc"}`,
        borderRadius: "8px",
        background: isDarkMode
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.05)", // Background color for dark and light mode
        minHeight: "200px",
        position: "relative",
        color: isDarkMode ? "#fff" : "#000", // Fix text color for dark and light mode
      }}
    >
      {/* Buttons for copying and clearing note */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          onClick={handleCopyNote}
          sx={{
            backgroundColor: isDarkMode ? "#1e88e5" : "#3f51b5", // Blue for dark and light mode
            "&:hover": {
              backgroundColor: isDarkMode ? "#1565c0" : "#303f9f", // Darker blue on hover
            },
            color: "#fff", // White text for better contrast
            mr: 2,
          }}
        >
          {NoteButtonText}
        </Button>
        <Button
          variant="outlined"
          onClick={handleClearNote}
          sx={{
            color: isDarkMode ? "#fff" : "#000", // White text in dark mode, black in light mode
            borderColor: isDarkMode ? "#fff" : "#000", // White border in dark mode, black in light mode
            "&:hover": {
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.2)"
                : "#e0e0e0", // Subtle background on hover in dark mode
              borderColor: isDarkMode ? "#bbb" : "#000", // Lighter border on hover
            },
          }}
        >
          Clear Note
        </Button>
      </Box>

      {/* The Textarea for the session note */}
      <TextareaAutosize
        aria-label="session note"
        placeholder="Write your temporary note here..."
        value={sessionNote}
        onChange={handleNoteChange}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: "16px",
          lineHeight: "28px",
          padding: "0px 10px",
          color: isDarkMode ? "#fff" : "#000", // Fix text color for dark and light mode
        }}
        minRows={10}
      />
    </Box>
  );
};

export default SessionNote;
