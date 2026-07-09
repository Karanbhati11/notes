const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://stickynoteonline.netlify.app";

export default function sitemap() {
  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
