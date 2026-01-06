import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "@/app/globals.css";
import SearchBar from "@/components/SearchBox";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.container}`}>
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <Link href="/#home" style={{ paddingTop: "10px" }}>
              <Image
                src="/dev_note_trans.png"
                alt="Site Logo"
                className={styles.logo}
                width={200}
                height={80}
              />
            </Link>
            <SearchBar />
          </div>
        </div>

        {/* Sidebar + Content */}
        <div className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <Link href="/#home" className={styles.menuItem}>Home</Link>
              <Link href="/#feats" className={styles.menuItem}>Featured Programs</Link>
              <Link href="/#Languages" className={styles.menuItem}>Languages</Link>
              <Link href="/#Command-Line" className={styles.menuItem}>Command-Line</Link>
              <Link href="/#Graphics" className={styles.menuItem}>Graphics</Link>
              <Link href = "/about" className={styles.menuItem}>About</Link>
            </div>
          </div>

          <div className={styles.mainWrapper}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
