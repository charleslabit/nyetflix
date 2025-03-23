import { QueryProvider } from "@/providers/QueryProvider";
import { createTheme, MantineProvider } from "@mantine/core";
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

const theme = createTheme({
  /** Your theme override here */
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
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
