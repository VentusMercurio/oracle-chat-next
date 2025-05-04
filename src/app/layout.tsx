// src/app/layout.tsx
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular + Bold
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
      <body className={cinzel.className}>
        {children}
      </body>
    </html>
  );
}
