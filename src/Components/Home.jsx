import React, { useState } from "react";
import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  Box,
  Grid,
} from "@mui/material";
import CryptoJS from "crypto-js";

const Home = ({ flag, setFlag, setNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [notePassword, setNotePassword] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();

    // Prevent empty notes or title
    if (note.trim() === "") {
      alert("Note cannot be empty!");
      return;
    }

    let finalNote = note;

    // If encryption is enabled, encrypt the note with note-specific password
    if (isEncrypt && notePassword) {
      finalNote = CryptoJS.AES.encrypt(note, notePassword).toString();
    }

    // Retrieve existing notes from localStorage or initialize as an empty array
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Add the encrypted or plain note to the existing notes array
    const updatedNotes = [
      ...storedNotes,
      { title, content: finalNote, isEncrypted: isEncrypt },
    ];

    // Update localStorage with the new notes array
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Reset fields after submission
    setTitle("");
    setNote("");
    setNotePassword("");
    setIsEncrypt(false); // Close the encrypt checkbox after note is saved
    setFlag(!flag); // Trigger re-render using flag
  };

  const handleResetApp = () => {
    // Clear all notes from localStorage and state
    localStorage.removeItem("notes");
    setNote([]); // Clear the notes state
    setFlag(!flag); // Trigger re-render
    alert("All notes have been deleted!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleAddNote}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        mt: 4,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ maxWidth: "600px", width: "100%" }}
      >
        {/* Title input */}
        <Grid item xs={12}>
          <TextField
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Note input */}
        <Grid item xs={12}>
          <textarea
            rows={5}
            placeholder="Enter your note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{
              height: "250px",
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </Grid>

        {/* Note-specific password (appears if encrypt checkbox is checked) */}
        {isEncrypt && (
          <Grid item xs={12}>
            <TextField
              placeholder="Enter a note-specific password"
              value={notePassword}
              onChange={(e) => setNotePassword(e.target.value)}
              type="password"
              fullWidth
            />
          </Grid>
        )}
      </Grid>

      {/* Encrypt note checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={isEncrypt}
            onChange={(e) => setIsEncrypt(e.target.checked)}
          />
        }
        label="Encrypt this note"
        sx={{ mt: 2 }}
      />

      {/* Submit button */}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Note
      </Button>

      {/* Reset App button */}
      <Button
        onClick={handleResetApp}
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
      >
        Reset App
      </Button>
    </Box>
  );
};

export default Home;
