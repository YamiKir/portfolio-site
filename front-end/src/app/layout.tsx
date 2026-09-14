import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "@/app/globals.css";
import ScrollToTop from "./ScrollToTop";

import SearchBar from "@/components/SearchBox";
import Sidebar from "@/components/Sidebar";

import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Portfolio of Koby Ramsey",
  description: "A showcase of projects and programming work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.container}`}
      >

        <ScrollToTop/>
        {/* Header */}
        <header className={styles.headerWrapper}>
          <div className={styles.header}>
            <Link
              href="/#home"
              className={styles.logoLink}
              aria-label="DevNote home"
            >
              <Image
                src="/dev_note_trans.png"
                alt="DevNote"
                className={styles.logo}
                width={6390}
                height={2340}
                priority
              />
            </Link>

            <SearchBar />
          </div>
        </header>

        {/* Sidebar + Page Content */}
        <div className={styles.content}>
          <Sidebar />

          <main className={styles.mainWrapper}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}