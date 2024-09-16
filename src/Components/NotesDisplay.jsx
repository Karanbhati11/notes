import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Dialog,
  Box,
  TextareaAutosize,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption

const NotesDisplay = ({ notes, setNotes, flag }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [decryptedNote, setDecryptedNote] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes)); // Load saved notes from localStorage
    }
  }, [flag, setNotes]);

  // Handle note deletion with password for encrypted notes
  const handleDeleteNote = (event, index) => {
    event.stopPropagation(); // Prevent the card's onClick from being triggered

    const note = notes[index];

    // Check if the note is encrypted
    if (note.isEncrypted) {
      // Ask for password if the note is encrypted
      const enteredPassword = prompt("Enter the password to delete this note:");

      if (enteredPassword) {
        try {
          const decrypted = CryptoJS.AES.decrypt(
            note.content,
            enteredPassword
          ).toString(CryptoJS.enc.Utf8);

          // If decryption was successful, proceed to delete
          if (decrypted) {
            const updatedNotes = notes.filter((_, i) => i !== index); // Remove the note
            setNotes(updatedNotes); // Update state
            localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage
          } else {
            alert("Incorrect password. Unable to delete the note.");
          }
        } catch (error) {
          alert("Incorrect password. Unable to delete the note.");
        }
      }
    } else {
      // If the note is not encrypted, delete it directly
      const updatedNotes = notes.filter((_, i) => i !== index); // Remove the note
      setNotes(updatedNotes); // Update state
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage
    }
  };

  const handleCardClick = (index) => {
    const note = notes[index];
    setSelectedNote(index);
    setIsDialogOpen(true);

    if (note.isEncrypted) {
      setIsEncrypted(true);
      setDecryptedNote(""); // Reset decrypted note when opening a new one
    } else {
      setDecryptedNote(String(note.content)); // If not encrypted, just show the note as a string
    }
  };

  const handlePasswordSubmit = () => {
    const note = notes[selectedNote];

    try {
      const decrypted = CryptoJS.AES.decrypt(note.content, password).toString(
        CryptoJS.enc.Utf8
      );
      if (!decrypted) throw new Error();
      setDecryptedNote(decrypted);
      setIsEncrypted(false); // Allow editing after successful decryption
    } catch (error) {
      alert("Incorrect password");
    }
  };

  const handleNoteChange = (e) => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNote].content = e.target.value;
    setDecryptedNote(e.target.value); // Update the local state as well

    if (notes[selectedNote].isEncrypted) {
      // Re-encrypt the note after editing
      const encryptedContent = CryptoJS.AES.encrypt(
        e.target.value,
        password
      ).toString();
      updatedNotes[selectedNote].content = encryptedContent;
    }

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Save updated notes to local storage
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setPassword("");
    setIsEncrypted(false);
  };

  return (
    <Box
      sx={{
        mt: 4,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 2,
      }}
    >
      {notes.map((note, index) => (
        <Card
          key={index}
          sx={{
            cursor: "pointer",
            minHeight: "200px",
            overflow: "hidden",
            position: "relative", // This makes the card a relative container
            margin: 2,
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => handleCardClick(index)}
        >
          <CardContent>
            {/* Show only 100 characters of the note */}
            <Typography variant="body2">
              {note.isEncrypted
                ? "Encrypted Note"
                : String(note.content).slice(0, 100) +
                  (note.content.length > 100 ? "..." : "")}
            </Typography>
          </CardContent>

          {/* Delete Icon positioned at the bottom-right */}
          <IconButton
            onClick={(event) => handleDeleteNote(event, index)}
            size="small"
            sx={{
              position: "absolute",
              bottom: 8, // Position it 8px from the bottom
              right: 8, // Position it 8px from the right
              color: "red",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}

      {selectedNote !== null && (
        <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth>
          <Box
            sx={{
              padding: 2,
              background: `repeating-linear-gradient(white, white 28px, #e0e0e0 30px)`,
              minHeight: "300px",
              overflowY: "auto",
              position: "relative",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            {isEncrypted ? (
              <div>
                <TextField
                  label="Enter password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" onClick={handlePasswordSubmit}>
                  Decrypt
                </Button>
              </div>
            ) : (
              <TextareaAutosize
                value={String(decryptedNote)} // Make sure it's a string
                onChange={handleNoteChange}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "16px",
                  lineHeight: "30px",
                  resize: "none",
                  padding: "0px 10px",
                }}
                minRows={10}
                autoFocus
              />
            )}
          </Box>
        </Dialog>
      )}
    </Box>
  );
};

export default NotesDisplay;
