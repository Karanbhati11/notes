import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  IconButton,
  Typography,
  Tooltip,
  Fade,
  TextareaAutosize,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  ContentCopy as CopyIcon,
  Delete as ClearIcon,
  Save as SaveIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

const themeConfig = {
  light: {
    primary: {
      main: "#2563eb",
      light: "#3b82f6",
      dark: "#1d4ed8",
    },
    background: {
      default: "#ffffff",
      paper: "#f8fafc",
      textarea: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
      placeholder: "#94a3b8",
    },
    border: "#e2e8f0",
    hover: "rgba(37, 99, 235, 0.1)",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  dark: {
    primary: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
      textarea: "#1e293b",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      placeholder: "#94a3b8",
    },
    border: "#334155",
    hover: "rgba(59, 130, 246, 0.2)",
    shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
  },
};

const SessionNote = ({ isDarkMode }) => {
  const [sessionNote, setSessionNote] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [lastSaved, setLastSaved] = useState(null);
  const theme = isDarkMode ? themeConfig.dark : themeConfig.light;

  useEffect(() => {
    const savedSessionNote = sessionStorage.getItem("sessionNote");
    if (savedSessionNote) {
      setSessionNote(savedSessionNote);
      setLastSaved(new Date(sessionStorage.getItem("lastSaved") || Date.now()));
    }
  }, []);

  const handleCopyNote = () => {
    navigator.clipboard.writeText(sessionNote);
    showSnackbar("Note copied to clipboard!", "success");
  };

  const handleClearNote = () => {
    if (sessionNote.trim() !== "") {
      if (window.confirm("Are you sure you want to clear this note?")) {
        setSessionNote("");
        sessionStorage.removeItem("sessionNote");
        sessionStorage.removeItem("lastSaved");
        setLastSaved(null);
        showSnackbar("Note cleared", "info");
      }
    }
  };

  const handleNoteChange = (e) => {
    const newNote = e.target.value;
    setSessionNote(newNote);
    sessionStorage.setItem("sessionNote", newNote);
    const now = new Date();
    sessionStorage.setItem("lastSaved", now.toISOString());
    setLastSaved(now);
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSaveNote = () => {
    sessionStorage.setItem("sessionNote", sessionNote);
    const now = new Date();
    sessionStorage.setItem("lastSaved", now.toISOString());
    setLastSaved(now);
    showSnackbar("Note saved successfully!", "success");
  };

  return (
    <Fade in timeout={500}>
      <Box
        sx={{
          mt: 4,
          height: "calc(100vh - 180px)", // Adjust based on your layout
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={isDarkMode ? 2 : 1}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.background.paper,
            borderRadius: 2,
            overflow: "hidden",
            border: `1px solid ${theme.border}`,
            transition: "all 0.3s ease",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              borderBottom: `1px solid ${theme.border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme.background.paper,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h6"
                sx={{ color: theme.text.primary, fontWeight: 600 }}
              >
                Session Note
              </Typography>
              <Tooltip title="This note will persist only for your current session">
                <InfoIcon
                  sx={{
                    color: theme.text.secondary,
                    fontSize: "1rem",
                    cursor: "help",
                  }}
                />
              </Tooltip>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Tooltip title="Save Note">
                <IconButton
                  onClick={handleSaveNote}
                  sx={{
                    color: theme.primary.main,
                    "&:hover": { backgroundColor: theme.hover },
                  }}
                >
                  <SaveIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy Note">
                <IconButton
                  onClick={handleCopyNote}
                  sx={{
                    color: theme.primary.main,
                    "&:hover": { backgroundColor: theme.hover },
                  }}
                >
                  <CopyIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Clear Note">
                <IconButton
                  onClick={handleClearNote}
                  sx={{
                    color: "#ef4444",
                    "&:hover": { backgroundColor: "rgba(239, 68, 68, 0.1)" },
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Textarea Container */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              backgroundColor: theme.background.textarea,
              overflow: "hidden",
            }}
          >
            <TextareaAutosize
              aria-label="session note"
              placeholder="Write your temporary note here..."
              value={sessionNote}
              onChange={handleNoteChange}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                padding: "16px",
                backgroundColor: "transparent",
                color: theme.text.primary,
                fontSize: "16px",
                lineHeight: "1.5",
                border: "none",
                outline: "none",
                resize: "none",
                fontFamily: "inherit",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: theme.background.paper,
                },
                "&::-webkit-scrollbar-thumb": {
                  background: theme.border,
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: theme.text.secondary,
                },
              }}
            />
          </Box>

          {/* Footer */}
          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${theme.border}`,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: theme.background.paper,
            }}
          >
            {lastSaved && (
              <Typography
                variant="caption"
                sx={{ color: theme.text.secondary }}
              >
                Last saved: {new Date(lastSaved).toLocaleTimeString()}
              </Typography>
            )}
          </Box>
        </Paper>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Fade>
  );
};

export default SessionNote;
