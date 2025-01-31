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
  Fade,
  Tooltip,
  DialogTitle,
  DialogContent,
  Chip,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  ContentCopy as ContentCopyIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  Close as CloseIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import CryptoJS from "crypto-js";

const NotesDisplay = ({ notes, setNotes, flag, isDarkMode }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [password, setPassword] = useState("");
  const [decryptedNote, setDecryptedNote] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [error, setError] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const getCardColor = (index) => {
    const colors = isDarkMode
      ? ["#2d3748", "#2c3e50", "#34495e", "#2d3436"]
      : ["#f7fafc", "#edf2f7", "#e2e8f0", "#edf2f7"];
    return colors[index % colors.length];
  };

  const handleDeleteNote = async (event, index) => {
    event.stopPropagation();
    const note = notes[index];

    if (note.isEncrypted) {
      try {
        const result = await new Promise((resolve) => {
          const password = prompt("Enter password to delete this note:");
          if (password) {
            try {
              const decrypted = CryptoJS.AES.decrypt(
                note.content,
                password
              ).toString(CryptoJS.enc.Utf8);
              resolve(decrypted !== "");
            } catch {
              resolve(false);
            }
          } else {
            resolve(false);
          }
        });

        if (result) {
          const updatedNotes = notes.filter((_, i) => i !== index);
          setNotes(updatedNotes);
        } else {
          setError("Incorrect password. Unable to delete the note.");
        }
      } catch (error) {
        setError("An error occurred while deleting the note.");
      }
    } else {
      const updatedNotes = notes.filter((_, i) => i !== index);
      setNotes(updatedNotes);
    }
  };

  const handleCardClick = (index) => {
    const note = notes[index];
    setSelectedNote(index);
    setIsEncrypted(note.isEncrypted);
    setDecryptedNote(note.isEncrypted ? "" : note.content);
    setError("");
  };

  const handlePasswordSubmit = () => {
    const note = notes[selectedNote];
    try {
      const decrypted = CryptoJS.AES.decrypt(note.content, password).toString(
        CryptoJS.enc.Utf8
      );
      if (decrypted) {
        setDecryptedNote(decrypted);
        setError("");
        setIsEncrypted(false);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (error) {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleCopyNote = () => {
    navigator.clipboard.writeText(decryptedNote);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleSaveAndClose = () => {
    const updatedNotes = [...notes];
    if (selectedNote !== null) {
      if (notes[selectedNote].isEncrypted) {
        updatedNotes[selectedNote].content = CryptoJS.AES.encrypt(
          decryptedNote || " ",
          password
        ).toString();
      } else {
        updatedNotes[selectedNote].content = decryptedNote;
      }
      setNotes(updatedNotes);
    }
    handleClose();
  };

  const handleClose = () => {
    setSelectedNote(null);
    setPassword("");
    setIsEncrypted(false);
    setError("");
    setDecryptedNote("");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {notes.map((note, index) => (
          <Fade in={true} key={index}>
            <Card
              onClick={() => handleCardClick(index)}
              sx={{
                cursor: "pointer",
                backgroundColor: getCardColor(index),
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: isDarkMode
                    ? "0 8px 16px rgba(0,0,0,0.4)"
                    : "0 8px 16px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ flex: 1, p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: isDarkMode ? "#fff" : "#1a202c",
                      fontWeight: 600,
                    }}
                  >
                    {note.title || "Untitled"}
                  </Typography>
                  {note.isEncrypted && (
                    <LockIcon
                      sx={{
                        color: isDarkMode ? "#90caf9" : "#3182ce",
                        fontSize: "1.2rem",
                      }}
                    />
                  )}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDarkMode ? "#cbd5e0" : "#4a5568",
                    mb: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {note.isEncrypted ? "🔒 Encrypted Note" : note.content}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Tooltip title="Delete Note">
                    <IconButton
                      size="small"
                      onClick={(e) => handleDeleteNote(e, index)}
                      sx={{
                        color: isDarkMode ? "#fc8181" : "#e53e3e",
                        "&:hover": {
                          backgroundColor: isDarkMode
                            ? "rgba(252,129,129,0.1)"
                            : "rgba(229,62,62,0.1)",
                        },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardContent>
            </Card>
          </Fade>
        ))}
      </Box>

      <Dialog
        open={selectedNote !== null}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: isDarkMode ? "#1a202c" : "#fff",
            backgroundImage: "none",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: isDarkMode ? "#2d3748" : "#f7fafc",
            color: isDarkMode ? "#fff" : "#1a202c",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h6">
              {selectedNote !== null &&
                (notes[selectedNote].title || "Untitled")}
            </Typography>
            {selectedNote !== null && notes[selectedNote].isEncrypted && (
              <Chip
                icon={<LockIcon sx={{ fontSize: "1rem" }} />}
                label="Encrypted"
                size="small"
                sx={{
                  bgcolor: isDarkMode ? "#2c5282" : "#ebf8ff",
                  color: isDarkMode ? "#90caf9" : "#2b6cb0",
                }}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title={copySuccess ? "Copied!" : "Copy Note"}>
              <IconButton onClick={handleCopyNote} size="small">
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent
          sx={{
            mt: 2,
            bgcolor: isDarkMode ? "#1a202c" : "#fff",
            color: isDarkMode ? "#fff" : "#1a202c",
          }}
        >
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {isEncrypted ? (
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    color: isDarkMode ? "#fff" : "#1a202c",
                    "& fieldset": {
                      borderColor: isDarkMode ? "#4a5568" : "#e2e8f0",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "#90caf9" : "#3182ce",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: isDarkMode ? "#cbd5e0" : "#4a5568",
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handlePasswordSubmit}
                startIcon={<LockOpenIcon />}
                sx={{
                  bgcolor: isDarkMode ? "#2c5282" : "#3182ce",
                  "&:hover": {
                    bgcolor: isDarkMode ? "#2b6cb0" : "#2c5282",
                  },
                }}
              >
                Decrypt Note
              </Button>
            </Box>
          ) : (
            <TextareaAutosize
              value={decryptedNote}
              onChange={(e) => setDecryptedNote(e.target.value)}
              style={{
                width: "100%",
                minHeight: "300px",
                padding: "16px",
                backgroundColor: isDarkMode ? "#2d3748" : "#fff",
                color: isDarkMode ? "#fff" : "#1a202c",
                border: `1px solid ${isDarkMode ? "#4a5568" : "#e2e8f0"}`,
                borderRadius: "4px",
                fontSize: "16px",
                lineHeight: "1.5",
                resize: "vertical",
              }}
            />
          )}

          <Box
            sx={{ mt: 2, display: "flex", justifyContent: "flex-end", gap: 2 }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              startIcon={<CloseIcon />}
              sx={{
                color: isDarkMode ? "#cbd5e0" : "#4a5568",
                borderColor: isDarkMode ? "#4a5568" : "#e2e8f0",
                "&:hover": {
                  borderColor: isDarkMode ? "#90caf9" : "#3182ce",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveAndClose}
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{
                bgcolor: isDarkMode ? "#2c5282" : "#3182ce",
                "&:hover": {
                  bgcolor: isDarkMode ? "#2b6cb0" : "#2c5282",
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default NotesDisplay;
