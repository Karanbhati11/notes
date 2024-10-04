import React from "react";
import { Button, Box, Menu, MenuItem, IconButton, Switch } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Navbar = ({
  showSessionNote,
  setShowSessionNote,
  handleResetApp,
  handleExportNotes,
  handleImportNotes,
  isDarkMode, // Prop for dark mode state
  toggleDarkMode, // Prop for toggling dark mode
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
        padding: "10px 20px",
        backgroundColor: isDarkMode ? "#333" : "#f5f5f5", // Conditional background color based on dark mode
        color: isDarkMode ? "white" : "black", // Conditional text color
      }}
    >
      {/* Centered Buttons for Notes and Session Note */}
      <Box sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
        <Button
          variant={!showSessionNote ? "contained" : "outlined"}
          onClick={() => setShowSessionNote(false)}
          sx={{
            color: isDarkMode ? "white" : "black",
            borderColor: isDarkMode ? "white" : "black",
            mr: 2,
            "&:hover": {
              backgroundColor: isDarkMode ? "#444" : "#e0e0e0",
              borderColor: isDarkMode ? "white" : "black",
            },
          }}
        >
          Notes
        </Button>
        <Button
          variant={showSessionNote ? "contained" : "outlined"}
          onClick={() => setShowSessionNote(true)}
          sx={{
            color: isDarkMode ? "white" : "black",
            borderColor: isDarkMode ? "white" : "black",
            "&:hover": {
              backgroundColor: isDarkMode ? "#444" : "#e0e0e0",
              borderColor: isDarkMode ? "white" : "black",
            },
          }}
        >
          Session Note
        </Button>
      </Box>

      {/* Right-side buttons: Reset App, Export/Import Dropdown, and Dark Mode Switch */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Reset App Button */}
        <Button
          onClick={handleResetApp}
          variant="outlined"
          sx={{
            borderColor: "red",
            color: "red",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.1)", // Light red background on hover
              borderColor: "darkred",
            },
          }}
        >
          Reset App
        </Button>

        {/* Dropdown for Export and Import */}
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon sx={{ color: isDarkMode ? "white" : "black" }} />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleExportNotes();
              handleClose();
            }}
          >
            Export Notes
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleImportNotes();
              handleClose();
            }}
          >
            Import Notes
          </MenuItem>
        </Menu>

        {/* Dark Mode Switch */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="default"
          />
          <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
