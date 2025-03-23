import { Layout } from "@/containers/layout/AppLayout";
import { QueryProvider } from "@/providers/QueryProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nyetflix",
  description: "This is not netflix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
