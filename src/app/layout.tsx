import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Krish | Frontend Developer",
  description: "Creating modern, responsive, and high-performance web experiences using Next.js, React, and TypeScript.",
  keywords: ["Next.js", "React", "TypeScript", "Frontend Developer", "Web Development", "Portfolio"],
  authors: [{ name: "Krish Kunwar"}],
  creator: "Krish Kunwar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
