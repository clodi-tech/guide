import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Guide",
  description: "How to create a SaaS easy and fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
