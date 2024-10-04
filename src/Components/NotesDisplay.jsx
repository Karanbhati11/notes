import React, { useState } from "react";
import {
  Card,
  CardContent,
  Dialog,
  Box,
  TextareaAutosize,
  TextField,
  IconButton,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CryptoJS from "crypto-js";

const NotesDisplay = ({ notes, setNotes, flag, isDarkMode }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [password, setPassword] = useState("");
  const [decryptedNote, setDecryptedNote] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [error, setError] = useState(""); // Error message state

  const handleDeleteNote = (event, index) => {
    event.stopPropagation();

    const note = notes[index];

    if (note.isEncrypted) {
      const enteredPassword = prompt("Enter the password to delete this note:");
      if (enteredPassword) {
        try {
          const decrypted = CryptoJS.AES.decrypt(
            note.content,
            enteredPassword
          ).toString(CryptoJS.enc.Utf8);

          if (decrypted !== "" || decrypted === "") {
            const updatedNotes = notes.filter((_, i) => i !== index); // Remove the note
            setNotes(updatedNotes); // Update state
          } else {
            alert("Incorrect password. Unable to delete the note.");
          }
        } catch (error) {
          alert("Incorrect password. Unable to delete the note.");
        }
      }
    } else {
      const updatedNotes = notes.filter((_, i) => i !== index); // Remove the note
      setNotes(updatedNotes); // Update state
    }
  };

  const handleCardClick = (index) => {
    const note = notes[index];
    setSelectedNote(index);

    if (note.isEncrypted) {
      setIsEncrypted(true);
      setDecryptedNote(""); // Reset decrypted note when opening a new one
    } else {
      setDecryptedNote(note.content); // Set decrypted note if not encrypted
    }
  };

  const handlePasswordSubmit = () => {
    const note = notes[selectedNote];

    try {
      const decrypted = CryptoJS.AES.decrypt(note.content, password).toString(
        CryptoJS.enc.Utf8
      );

      if (decrypted !== "") {
        setDecryptedNote(decrypted); // Set the decrypted note
        setError(""); // Clear any previous error
        setIsEncrypted(false); // Allow editing after successful decryption
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (error) {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleNoteChange = (e) => {
    setDecryptedNote(e.target.value);
  };

  const handleCloseDialog = () => {
    // Only save updated note if it has been decrypted successfully or wasn't encrypted
    const updatedNotes = [...notes];
    if (selectedNote !== null) {
      if (notes[selectedNote].isEncrypted) {
        updatedNotes[selectedNote].content = CryptoJS.AES.encrypt(
          decryptedNote || " ",
          password
        ).toString(); // Encrypt the note content before saving
      } else {
        updatedNotes[selectedNote].content = decryptedNote; // Save the updated content directly
      }
      setNotes(updatedNotes);
    }

    setSelectedNote(null); // Clear selected note
    setPassword("");
    setIsEncrypted(false);
    setError(""); // Clear error on dialog close
  };

  // Function to handle note copy
  const handleCopyNote = () => {
    navigator.clipboard.writeText(decryptedNote);
  };

  return (
    <Box
      sx={{
        mt: 4,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 3, // Space between cards
      }}
    >
      {notes.map((note, index) => (
        <Card
          key={index}
          sx={{
            cursor: "pointer",
            backgroundColor: isDarkMode ? "#333" : "white", // Dark mode support
            color: isDarkMode ? "#fff" : "#000", // Text color for dark mode
            minHeight: "150px",
            position: "relative",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            margin: "10px", // Space below the notes
          }}
          onClick={() => handleCardClick(index)}
        >
          <CardContent
            sx={{
              position: "relative",
              zIndex: 1, // Ensure title stays above overlay
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                opacity: 0.7,
              }}
              style={{
                color: isDarkMode ? "#fff" : "#000",
              }}
            >
              {note.title && note.title.trim() !== "" ? note.title : "No Title"}
            </Typography>
          </CardContent>

          {/* Delete Icon positioned at the bottom-right */}
          <IconButton
            onClick={(event) => handleDeleteNote(event, index)}
            size="small"
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              color: "red",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}

      {selectedNote !== null && (
        <Dialog
          open={selectedNote !== null}
          onClose={handleCloseDialog}
          fullWidth
        >
          <Box
            sx={{
              padding: 2,
              minHeight: "300px",
              overflowY: "auto",
              position: "relative",
              borderRadius: 2,
              boxShadow: 2,
              background: isDarkMode
                ? `repeating-linear-gradient(
                #333, 
                #333 15px,
                #444 16px
              )` // Dark mode background
                : `repeating-linear-gradient(
                white, 
                white 15px,
                #bfbfbf 16px
              )`, // Light mode background
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
              {notes[selectedNote].title || "No Title"}
            </Typography>

            {/* Show error message if password is incorrect */}
            {error && <Alert severity="error">{error}</Alert>}

            {/* Copy Note Button positioned on the top-right */}
            <IconButton
              onClick={handleCopyNote}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: isDarkMode ? "#fff" : "#4a4a4a", // Adjusted for dark mode
                backgroundColor: isDarkMode ? "#444" : "#f5f5f5",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#555" : "#e0e0e0",
                },
              }}
            >
              <ContentCopyIcon />
            </IconButton>

            {isEncrypted ? (
              <div>
                <TextField
                  label="Enter password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  sx={{
                    mb: 2,
                    input: { color: isDarkMode ? "#fff" : "#000" }, // Text color for dark mode
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: isDarkMode ? "#fff" : "#000", // Border color for dark mode
                      },
                      "&:hover fieldset": {
                        borderColor: isDarkMode ? "#bbb" : "#333", // Hover color for dark mode
                      },
                    },
                  }}
                />
                <Button variant="contained" onClick={handlePasswordSubmit}>
                  Decrypt
                </Button>
              </div>
            ) : (
              <TextareaAutosize
                value={decryptedNote} // Ensure it only replaces content
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
                  color: isDarkMode ? "#fff" : "#000", // Text color for dark mode
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
