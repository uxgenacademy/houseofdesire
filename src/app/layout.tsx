import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "REVENUE LOCK | 2026 Ready Luxury Salon & Skin Clinic Digital Ecosystem",
  description: "People pay for desire. Not just utility. Stop the monthly ₹1 Lakh - 3 Lakhs revenue leakage and transform your parlour into a GenZ magnet.",
  keywords: ["Luxury Salon Marketing", "Beauty Parlour Growth", "Skin Clinic Digital Ecosystem", "Salon Revenue Audit", "Bridal Salon Marketing"],
  openGraph: {
    title: "REVENUE LOCK | Luxury Salon & Skin Clinic Ecosystem",
    description: "People pay for desire. Not just utility. 2026 ka customer pehle aapka digital ecosystem dekhta hai, phir visit karta hai.",
    type: "website",
  },
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${jakarta.variable} ${playfair.variable} antialiased bg-[#070507] text-[#F4E8F8]`}>
        {children}
      </body>
    </html>
  );
}