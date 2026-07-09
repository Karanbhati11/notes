import NotesApp from "../components/NotesApp";

// This content is server-rendered — fully visible to Google
// The NotesApp loads on top of it client-side
export default function Page() {
  return (
    <>
      {/* ── SEO content — visible to crawlers, hidden visually under the app ── */}
      <noscript>
        <div style={{ padding: "40px", fontFamily: "sans-serif", background: "#000", color: "#fff" }}>
          <h1>Sticky Notes Online — Free Online Notes App</h1>
          <p>
            Create colorful sticky notes online for free. No installation required.
            Organize your notes with categories, encrypt private notes, and sync
            across all your devices with a free account.
          </p>
          <p>Please enable JavaScript to use Sticky Notes Online.</p>
        </div>
      </noscript>

      {/* ── Static SEO text rendered by server (hidden visually) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        <h1>Sticky Notes Online — Free Online Notes App</h1>
        <h2>Create Online Sticky Notes for Free</h2>
        <p>
          Sticky Notes Online is the easiest way to take notes online. Create
          colorful sticky notes in your browser, organize them with custom
          categories, and access them from any device. No download or installation
          required — just open the site and start writing.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Free online notes — no account needed to get started</li>
          <li>Colorful sticky notes in purple, green, red, yellow, and blue</li>
          <li>Custom categories to organize your notes</li>
          <li>Encrypt private notes with a password</li>
          <li>Cloud sync across all devices with a free account</li>
          <li>Session notes for temporary writing — no saving required</li>
          <li>Export and import notes as JSON</li>
          <li>Works on desktop, tablet, and mobile</li>
        </ul>
        <h2>Online Notes — Always Available</h2>
        <p>
          Unlike desktop apps, Sticky Notes Online works in any browser. Your
          notes are saved locally so they&apos;re available even without internet.
          Sign up for free to enable cloud sync and access your notes on every
          device you own.
        </p>
        <h2>Sticky Notes for Every Purpose</h2>
        <p>
          Whether you need a quick notepad online, a place to store ideas,
          shopping lists, meeting notes, or encrypted private notes — Sticky Notes
          Online has you covered. Create unlimited notes for free.
        </p>
      </div>

      {/* ── The actual React app ── */}
      <NotesApp />
    </>
  );
}
