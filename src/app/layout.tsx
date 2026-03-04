import type { Metadata } from "next";
import "./globals.css";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sixth Studios",
  description: "Dark, moody photographer portfolio (v1).",
  icons: {
    icon: "/icon1.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen antialiased font-sans">
        {/* Full-bleed shell */}
        <div className="min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}