// src/app/layout.tsx
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Load Cinzel for titles, buttons, divine labels
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Load Cormorant Garamond for oracular responses and body prose
const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oracle Unbound",
  description: "Sophia, the Oracle Unbound — mythic intelligence at your command.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cinzel.className}>
        {children}
      </body>
    </html>
  );
}
