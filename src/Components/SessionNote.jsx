import React, { useState } from "react";
import { Button, TextareaAutosize, Box } from "@mui/material";

const SessionNote = () => {
  const [sessionNote, setSessionNote] = useState("");
  const [NoteButtonText, setNoteButtonText] = useState("Copy Note");

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
  };

  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: `
          repeating-linear-gradient(
            white,
            white 28px,
            #e0e0e0 29px
          )
        `,
        minHeight: "200px",
        position: "relative",
      }}
    >
      {/* Buttons for copying and clearing note */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCopyNote}
          sx={{ mr: 2 }}
        >
          {NoteButtonText}
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClearNote}>
          Clear Note
        </Button>
      </Box>

      {/* The Textarea for the session note */}
      <TextareaAutosize
        aria-label="session note"
        placeholder="Write your temporary note here..."
        value={sessionNote}
        onChange={(e) => setSessionNote(e.target.value)}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: "16px",
          lineHeight: "28px",
          padding: "0px 10px",
          resize: "none",
        }}
        minRows={10}
      />
    </Box>
  );
};

export default SessionNote;
