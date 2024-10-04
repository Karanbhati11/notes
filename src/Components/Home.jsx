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

const Home = ({ flag, setFlag, setNotes, isDarkMode }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [notePassword, setNotePassword] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();

    if (note.trim() === "") {
      alert("Note cannot be empty!");
      return;
    }

    let finalNote = note;

    if (isEncrypt && notePassword) {
      finalNote = CryptoJS.AES.encrypt(note, notePassword).toString();
    }

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = [
      ...storedNotes,
      { title, content: finalNote, isEncrypted: isEncrypt },
    ];

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setTitle("");
    setNote([]);
    setNotePassword("");
    setIsEncrypt(false);
    setFlag(!flag);
    setNotes(JSON.parse(localStorage?.notes));
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
        maxWidth: "600px", // Max width to make it more readable
        margin: "0 auto", // Centering the form
        padding: "5px", // Padding for better spacing
        mt: 4,
        backgroundColor: isDarkMode ? "#222" : "#fff", // Dark mode background
        color: isDarkMode ? "#fff" : "#000", // Dark mode text color
        borderRadius: "8px", // Adding slight border-radius for a modern look
        boxShadow: isDarkMode
          ? "0 4px 12px rgba(255, 255, 255, 0.1)"
          : "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        {/* Title input */}
        <Grid item xs={12}>
          <TextField
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            InputProps={{
              style: { color: isDarkMode ? "#fff" : "#000" },
            }}
            sx={{
              input: {
                backgroundColor: isDarkMode ? "#333" : "#fff", // Adjust input background
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: isDarkMode ? "#fff" : "#000", // Border for dark mode
                },
                "&:hover fieldset": {
                  borderColor: isDarkMode ? "#bbb" : "#333", // Hover color
                },
              },
            }}
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
              width: "100%",
              height: "250px",
              padding: "2px",
              fontSize: "16px",
              borderRadius: "4px",
              border: `1px solid ${isDarkMode ? "#fff" : "#ccc"}`,
              backgroundColor: isDarkMode ? "#333" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            }}
            required
          />
        </Grid>

        {/* Note-specific password (if encryption is checked) */}
        {isEncrypt && (
          <Grid item xs={12}>
            <TextField
              placeholder="Enter a note-specific password"
              value={notePassword}
              onChange={(e) => setNotePassword(e.target.value)}
              type="password"
              fullWidth
              InputProps={{
                style: { color: isDarkMode ? "#fff" : "#000" },
              }}
              sx={{
                input: {
                  backgroundColor: isDarkMode ? "#333" : "#fff", // Adjust input background
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: isDarkMode ? "#fff" : "#000", // Border for dark mode
                  },
                  "&:hover fieldset": {
                    borderColor: isDarkMode ? "#bbb" : "#333", // Hover color
                  },
                },
              }}
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
            sx={{ color: isDarkMode ? "#fff" : "#000" }} // Checkbox color
          />
        }
        label="Encrypt this note"
        sx={{ mt: 2, color: isDarkMode ? "#fff" : "#000" }} // Label color
      />

      {/* Submit button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          backgroundColor: isDarkMode ? "#1e88e5" : "#3f51b5", // Adjust button color for dark mode
          "&:hover": {
            backgroundColor: isDarkMode ? "#1565c0" : "#303f9f", // Hover color
          },
        }}
      >
        Add Note
      </Button>
    </Box>
  );
};

export default Home;
