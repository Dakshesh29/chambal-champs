import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google"; // Recursive is a nice techy/rugged font
import "./globals.css";
import Navbar from "@/components/Navbar";

// We use 'Recursive' font for headings to give it character
const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChambalChamps",
  description: "Authentic Regional Merchandise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}