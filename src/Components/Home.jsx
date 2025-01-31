import React, { useState } from "react";
import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  Box,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  LockOutlined,
  LockOpenOutlined,
  InfoOutlined,
  ExpandMore,
  NoteAdd,
} from "@mui/icons-material";
import CryptoJS from "crypto-js";

const Home = ({ flag, setFlag, setNotes, isDarkMode }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [notePassword, setNotePassword] = useState("");
  const [expanded, setExpanded] = useState(true);

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
      {
        title,
        content: finalNote,
        isEncrypted: isEncrypt,
        createdAt: new Date().toISOString(),
      },
    ];

    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    setTitle("");
    setNote("");
    setNotePassword("");
    setIsEncrypt(false);
    setFlag(!flag);
    setNotes(JSON.parse(localStorage?.notes));
    setExpanded(false); // Close accordion after adding note
  };

  const getStyles = (isDarkMode) => ({
    accordion: {
      backgroundColor: isDarkMode ? "rgba(30, 30, 30, 0.95)" : "#fff",
      color: isDarkMode ? "#fff" : "#1a1a1a",
      backgroundImage: "none",
      boxShadow: isDarkMode
        ? "0 4px 6px rgba(0, 0, 0, 0.4)"
        : "0 2px 4px rgba(0, 0, 0, 0.1)",
      "&:before": {
        display: "none", // Removes the default divider
      },
    },
    accordionSummary: {
      backgroundColor: isDarkMode
        ? "rgba(45, 45, 45, 0.95)"
        : "rgba(245, 245, 245, 0.95)",
      borderBottom: `1px solid ${
        isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
      }`,
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        backgroundColor: isDarkMode ? "rgba(45, 45, 45, 0.95)" : "#fff",
        "& fieldset": {
          borderColor: isDarkMode
            ? "rgba(255,255,255,0.2)"
            : "rgba(0,0,0,0.23)",
        },
        "&:hover fieldset": {
          borderColor: isDarkMode
            ? "rgba(255,255,255,0.3)"
            : "rgba(0,0,0,0.23)",
        },
        "&.Mui-focused fieldset": {
          borderColor: isDarkMode ? "#90caf9" : "#1976d2",
        },
      },
      "& .MuiInputLabel-root": {
        color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
        "&.Mui-focused": {
          color: isDarkMode ? "#90caf9" : "#1976d2",
        },
      },
      "& .MuiInputBase-input": {
        color: isDarkMode ? "#fff" : "inherit",
      },
    },
    encryptionBox: {
      backgroundColor: isDarkMode
        ? "rgba(45, 45, 45, 0.95)"
        : "rgba(0,0,0,0.02)",
      borderRadius: "8px",
      padding: "1rem",
      transition: "background-color 0.3s ease",
    },
  });

  const styles = getStyles(isDarkMode);

  return (
    <Box sx={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={styles.accordion}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMore sx={{ color: isDarkMode ? "#fff" : "#1a1a1a" }} />
          }
          sx={styles.accordionSummary}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <NoteAdd sx={{ color: isDarkMode ? "#90caf9" : "#1976d2" }} />
            <Typography
              variant="h6"
              sx={{ color: isDarkMode ? "#fff" : "#1a1a1a" }}
            >
              Create New Note
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Box component="form" onSubmit={handleAddNote}>
            <Grid container spacing={3}>
              {/* Title Field */}
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  sx={styles.textField}
                />
              </Grid>

              {/* Note Content */}
              <Grid item xs={12}>
                <TextField
                  label="Note Content"
                  multiline
                  rows={8}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  fullWidth
                  required
                  sx={styles.textField}
                />
              </Grid>

              {/* Encryption Section */}
              <Grid item xs={12}>
                <Box sx={styles.encryptionBox}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isEncrypt}
                          onChange={(e) => setIsEncrypt(e.target.checked)}
                          icon={<LockOpenOutlined />}
                          checkedIcon={<LockOutlined />}
                          sx={{
                            color: isDarkMode ? "#fff" : "inherit",
                            "&.Mui-checked": {
                              color: isDarkMode ? "#90caf9" : "#1976d2",
                            },
                          }}
                        />
                      }
                      label="Encrypt Note"
                    />
                    <Tooltip title="Encrypt your note with a password for added security">
                      <IconButton size="small">
                        <InfoOutlined
                          sx={{
                            color: isDarkMode
                              ? "rgba(255,255,255,0.7)"
                              : "rgba(0,0,0,0.54)",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>

                  {isEncrypt && (
                    <TextField
                      label="Encryption Password"
                      type="password"
                      value={notePassword}
                      onChange={(e) => setNotePassword(e.target.value)}
                      fullWidth
                      required={isEncrypt}
                      sx={{ ...styles.textField, mt: 2 }}
                    />
                  )}
                </Box>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    backgroundColor: isDarkMode ? "#90caf9" : "#1976d2",
                    color: isDarkMode ? "#000" : "#fff",
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#42a5f5" : "#1565c0",
                    },
                    textTransform: "none",
                    fontSize: "1rem",
                    py: 1.5,
                    borderRadius: "8px",
                  }}
                >
                  Save Note
                </Button>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Home;
