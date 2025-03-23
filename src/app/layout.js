import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mandl Custom Saunas",
  description: "Custom saunas designed for your needs",
  icons: {
    icon: "/images/mandlLogo.jpg",
    shortcut: "/images/mandlLogo.jpg",
    apple: "/images/mandlLogo.jpg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
