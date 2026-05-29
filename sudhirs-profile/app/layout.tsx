import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudhir's Profile",
  description: "PhD Researcher · AI",
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
