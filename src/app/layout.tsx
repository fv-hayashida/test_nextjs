import type { Metadata } from "next";
import { inter,lusitana } from './ui/fonts'
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-yellow-50">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
