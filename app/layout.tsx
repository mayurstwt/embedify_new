import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import icon from "@/app/assets/icon.ico";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "embedify",
  description: "Embedify is a powerful SaaS platform that allows developers to easily embed and share clean, responsive code snippets. Built with Next.js, it ensures lightning-fast performance and a seamless user experience. Perfect for developers, teams, and creators.",
};

const iconUrl = icon.src;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <link rel="icon" href={iconUrl} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
