import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import Home from "./Components/Home";
import NotesDisplay from "./Components/NotesDisplay";
import SessionNote from "./Components/SessionNote";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showSessionNote, setShowSessionNote] = useState(false); // State to toggle between session note and regular notes

  const [flag, setFlag] = useState(false);
  // Function to add a note
  const addNote = (content, isEncrypted) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { content: String(content), isEncrypted },
    ]);
  };

  return (
    <div>
      {/* Buttons to toggle between Session Note and Regular Notes */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
          margin: "20px",
        }}
      >
        <Button
          variant={!showSessionNote ? "contained" : "outlined"}
          onClick={() => setShowSessionNote(false)}
          sx={{ mr: 2 }}
        >
          Notes
        </Button>
        <Button
          variant={showSessionNote ? "contained" : "outlined"}
          onClick={() => setShowSessionNote(true)}
        >
          Session Note
        </Button>
      </Box>

      {/* Conditional Rendering based on selected option */}
      {showSessionNote ? (
        <div style={{ margin: "10px" }}>
          <SessionNote />
        </div>
      ) : (
        <>
          <Home addNote={addNote} setFlag={setFlag} flag={flag} />
          <NotesDisplay notes={notes} setNotes={setNotes} flag={flag} />
        </>
      )}
    </div>
  );
};

export default App;
