import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudhir's Profile",
  description: "Generalist Software Engineer · AI/ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
