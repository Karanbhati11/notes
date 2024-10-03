import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // Copy icon from MUI
import CryptoJS from "crypto-js"; // Import CryptoJS for encryption

const NotesDisplay = ({ notes, setNotes, flag }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [password, setPassword] = useState("");
  const [decryptedNote, setDecryptedNote] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [copyText, setCopyText] = useState("Copy Note"); // State for copy button text

  // Sync state with localStorage when the component mounts or flag changes
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes)); // Load saved notes from localStorage
    } else {
      setNotes([]); // Clear notes if none found in localStorage
    }
  }, [setNotes, flag]);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDeleteNote = (event, index) => {
    event.stopPropagation(); // Prevent the card's onClick from being triggered

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
      setDecryptedNote(String(note.content)); // If not encrypted, just show the note as a string
    }
  };

  const handlePasswordSubmit = () => {
    const note = notes[selectedNote];

    try {
      const decrypted = CryptoJS.AES.decrypt(note.content, password).toString(
        CryptoJS.enc.Utf8
      );

      if (decrypted !== "" || decrypted === "") {
        setDecryptedNote(decrypted); // Set the decrypted note (even if empty)
        setIsEncrypted(false); // Allow editing after successful decryption
      } else {
        alert("Incorrect password");
      }
    } catch (error) {
      alert("Incorrect password");
    }
  };

  const handleNoteChange = (e) => {
    const updatedNotes = [...notes];
    const newContent = e.target.value;

    if (notes[selectedNote].isEncrypted) {
      const encryptedContent = CryptoJS.AES.encrypt(
        newContent || " ",
        password
      ).toString(); // Encrypt even an empty note
      updatedNotes[selectedNote].content = encryptedContent;
    } else {
      updatedNotes[selectedNote].content = newContent;
    }

    setDecryptedNote(newContent);
    setNotes(updatedNotes);
  };

  const handleCloseDialog = () => {
    // Save updated note when closing the dialog
    const updatedNotes = [...notes];
    if (selectedNote !== null) {
      updatedNotes[selectedNote].content = decryptedNote; // Update the content
      setNotes(updatedNotes);
    }

    setSelectedNote(null); // Clear selected note
    setPassword("");
    setIsEncrypted(false);
    setCopyText("Copy Note"); // Reset copy button text
  };

  // Function to handle note copy
  const handleCopyNote = () => {
    navigator.clipboard.writeText(decryptedNote); // Copy note content
    setCopyText("Copied!"); // Change button text to "Copied!"
    setTimeout(() => {
      setCopyText("Copy Note"); // Reset button text after 1.5 seconds
    }, 1500);
  };

  return (
    <Box
      sx={{
        mt: 4,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 3, // Space between cards
        marginBottom: "30px", // Space below the notes
      }}
    >
      {notes.map((note, index) => (
        <Card
          key={index}
          sx={{
            cursor: "pointer",
            backgroundColor: "white", // White background
            minHeight: "150px",
            position: "relative",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px", // Add some padding for better appearance
          }}
          onClick={() => handleCardClick(index)}
        >
          {/* Faded title overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.1)", // Light overlay
            }}
          />
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
              sx={{ fontWeight: "bold", opacity: 0.7 }}
            >
              {note.title || "No Title"}
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
              background: `repeating-linear-gradient(
                white, 
                white 15px,  /* Adjust the spacing to make lines frequent */
                #bfbfbf 16px /* Darker gray for clearer contrast */
              )`, 
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
              {notes[selectedNote].title || "No Title"}
            </Typography>

            {/* Copy Note Button positioned on the top-right */}
            <IconButton
              onClick={handleCopyNote}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#4a4a4a", // Gray color similar to ChatGPT's button
                backgroundColor: "#f5f5f5", // Light background for the button
                '&:hover': {
                  backgroundColor: "#e0e0e0", // Hover effect for the button
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
