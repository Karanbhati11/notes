import "./globals.css";

const APP_URL = "https://stickynoteonline.netlify.app";

export const metadata = {
  metadataBase: new URL(APP_URL),

  // ── Primary ──────────────────────────────────────────────────────────────
  title: {
    default: "Sticky Notes Online — Free Online Notes & Note Taking App",
    template: "%s | Sticky Notes Online",
  },
  description:
    "Sticky Notes Online is a free online notes app. Create colorful sticky notes, organize with categories, encrypt private notes, and sync across all your devices. No install needed.",

  keywords: [
    "sticky notes online",
    "online notes",
    "notes",
    "free notes app",
    "note taking app",
    "online notepad",
    "sticky notes",
    "digital sticky notes",
    "notes online free",
    "quick notes online",
    "web notes",
    "cloud notes",
    "sync notes",
    "colorful sticky notes",
    "online notebook",
    "note app",
    "notepad online",
    "free notepad",
    "browser notes",
    "notes without login",
  ],

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: APP_URL,
    siteName: "Sticky Notes Online",
    title: "Sticky Notes Online — Free Online Notes App",
    description:
      "Create colorful sticky notes online for free. Organize, encrypt, and sync notes across devices. No install required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sticky Notes Online — Free Online Notes App",
      },
    ],
  },

  // ── Twitter ───────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Sticky Notes Online — Free Online Notes App",
    description:
      "Create colorful sticky notes online for free. Organize, encrypt, and sync notes across devices.",
    images: ["/og-image.png"],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.png",
    apple: "/logo192.png",
  },

  // ── Crawling ──────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ── Verification (add your Google Search Console token here) ─────────────
  // verification: { google: "your-google-site-verification-token" },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sticky Notes Online",
  url: APP_URL,
  description:
    "A free online sticky notes app. Create, organize, and sync colorful notes across all your devices.",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Create colorful sticky notes online",
    "Organize notes with custom categories",
    "Encrypt private notes with a password",
    "Sync notes across devices with free account",
    "Session notes that auto-clear",
    "Export and import notes as JSON",
    "No install required — works in browser",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  );
}
