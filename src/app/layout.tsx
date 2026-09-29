import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Desire | Salon Growth System",
  description: "Salon owners ke liye Revenue Lock System. 30 din me 3x client retention, bina ads ke.",
  icons: {
    icon: [
      { url: "/assets/images/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/images/favicon.png" },
    ],
    shortcut: "/assets/images/favicon.png",
  },
  openGraph: {
    title: "House of Desire | Salon Growth System",
    description: "Salon owners ke liye Revenue Lock System. 30 din me 3x client retention, bina ads ke.",
    url: "https://houseofdesire.in",
    siteName: "House of Desire",
    images: [
      {
        url: "https://houseofdesire.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "House of Desire - Revenue Lock System",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Desire | Salon Growth System",
    description: "Salon owners ke liye Revenue Lock System. 30 din me 3x client retention, bina ads ke.",
    images: ["https://houseofdesire.in/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}