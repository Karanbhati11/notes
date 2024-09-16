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

const Home = ({ flag, setFlag }) => {
  const [note, setNote] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [password, setPassword] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();

    // Prevent empty notes
    if (note.trim() === "") {
      alert("Note cannot be empty!");
      return;
    }

    let finalNote = note;

    // If encryption is enabled, encrypt the note
    if (isEncrypt && password) {
      finalNote = CryptoJS.AES.encrypt(note, password).toString();
    }

    // Retrieve existing notes from localStorage or initialize as an empty array
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Add the encrypted or plain note to the existing notes array
    const updatedNotes = [
      ...storedNotes,
      { content: finalNote, isEncrypted: isEncrypt },
    ];

    // Update localStorage with the new notes array
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Reset fields after submission
    setNote("");
    setPassword("");
    setIsEncrypt(false); // Close the encrypt checkbox after note is saved
    setFlag(!flag); // Trigger re-render using flag
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
          />
        </Grid>
        {isEncrypt && (
          <Grid item xs={12}>
            <TextField
              minRows={1}
              placeholder="Enter a password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              fullWidth
            />
          </Grid>
        )}
      </Grid>

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

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Note
      </Button>
    </Box>
  );
};

export default Home;
